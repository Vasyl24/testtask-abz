import { Container } from './Container.styled';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Form from './Form/Form';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchUsers } from './api';

export const App = () => {
  const [users, setUsers] = useState([]);

  //  const [imgName, setImgName] = useState(null);
  // const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  // const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
    const count = 6;

    async function getUsers() {
      try {
        setStatus('pending');
        setError(null);

        const fetchedUsers = await fetchUsers(count, abortCtrl, page);

        console.log(fetchedUsers);
        if (fetchedUsers.data.users.length) {
          setUsers(prevState => [...prevState, ...fetchedUsers.data.users]);
          // setTotalHits(fetchedUsers.totalHits);
          setStatus('resolved');
        } else {
          setStatus('rejected');
          setError(`Зображення по запиту не знайдено🙄`);
        }
      } catch (error) {
        setError(
          // status: 'rejected',
          error.message
        );
      }
    }

    getUsers();

    return () => {
      abortCtrl.abort();
    };
  }, []);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://frontend-test-assignment-api.abz.agency/api/v1/users'
  //     );

  //     setUsers(response.data.users);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          {/* <Contacts users={users} loadMore={loadMore} /> */}
          {
            status === 'pending' && <div>Loading...</div>
            // <Loader></Loader>
          }
          {status === 'rejected' && <h1>{error}</h1>}
          {status === 'resolved' && users.length !== 0 && (
            <Contacts users={users} loadMore={loadMore} />
          )}
          <Form />
        </Container>
      </main>

      {/* {status === 'resolved' && imgName !== null && totalHits > 12 && (
          <Button onClick={loadMore}></Button>
        )} */}
    </>
  );
};
