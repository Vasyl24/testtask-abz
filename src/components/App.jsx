import { Container } from './Container.styled';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Form from './Form/Form';
import axios from 'axios';
import { useEffect } from 'react';
// import { fetchUsers } from './api';

export const App = () => {
  // const fetchUsers = async () => {
  //   const response = await fetch(
  //     'https://frontend-test-assignment-api.abz.agency/api/v1'
  //   );
  //   const users = await response.json();
  //   return users;
  // };

  // const doStuff = async () => {
  //   try {
  //     const users = await fetchUsers();
  //     console.log(users);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // doStuff();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users'
      );
      // setQuery(response.data.data.notices);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // async function getUsers() {
  //   try {
  // setStatus('pending');
  // setError(null);

  // const fetchedUsers = await fetchUsers({query, abortCtrl, page});
  // if (fetchedUsers.hits.length) {
  //   setUsers(prevState => [...prevState, ...fetchedUsers.hits]);
  //   setTotalHits(fetchedUsers.totalHits);
  //   setStatus('resolved');
  // } else {
  //   setStatus('rejected');
  //   setError(`Користувача по запиту ${query} не знайдено🙄`);
  // }
  // } catch (error) {
  // setError(
  // status: 'rejected',
  // error.message
  // );
  // }
  // }

  // getUsers();

  //   return () => {
  //     abortCtrl.abort();
  //   };
  // }, [imgName, page]);

  // const loadMore = () => {
  //   setPage(prevState => prevState + 1);
  // };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          <Contacts />
          <Form />
        </Container>
      </main>

      {/* {status === 'pending' && <Loader></Loader>}
        {status === 'rejected' && <h1 className={css.error}>{error}</h1>} */}
      {/* {status === 'resolved' && imgName && (
          <ImageGallery images={images}></ImageGallery>
        )} */}
      {/* {status === 'resolved' && imgName !== null && totalHits > 12 && (
          <Button onClick={loadMore}></Button>
        )} */}
    </>
  );
};
