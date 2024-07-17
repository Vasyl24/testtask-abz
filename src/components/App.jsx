import { Container } from './Container.styled';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import AddUserForm from './AddUserForm/AddUserForm';
import { useEffect, useState } from 'react';
import { fetchUsers } from './api';
import { ColorRing } from 'react-loader-spinner';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
    const count = 6;

    async function getUsers() {
      try {
        setStatus('pending');
        setError(null);

        const fetchedUsers = await fetchUsers({ count, abortCtrl, page });

        if (fetchedUsers.users.length) {
          setUsers(prevState => [...prevState, ...fetchedUsers.users]);
          setTotalPages(fetchedUsers.total_pages);
          setStatus('resolved');
        } else {
          setStatus('rejected');
          setError(`Користувачів по запиту не знайдено🙄`);
        }
      } catch (error) {
        setError(error.message);
      }
    }

    getUsers();

    return () => {
      abortCtrl.abort();
    };
  }, [page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          {status === 'rejected' && <h1>{error}</h1>}
          {status === 'resolved' && users.length !== 0 && (
            <Contacts
              users={users}
              loadMore={loadMore}
              status={status}
              page={page}
              totalPages={totalPages}
            />
          )}
          {status === 'pending' && (
            <ColorRing
              visible={true}
              height="48"
              width="48"
              ariaLabel="color-ring-loading"
              wrapperStyle={{ display: 'block', margin: '0 auto' }}
              wrapperClass="color-ring-wrapper"
              colors={['#00BDD3', '#00BDD3', '#00BDD3', '#00BDD3', '#00BDD3']}
            />
          )}
          <AddUserForm />
        </Container>
      </main>
    </>
  );
};
