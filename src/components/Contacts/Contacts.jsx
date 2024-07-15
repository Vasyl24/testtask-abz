import {
  ContactButton,
  ContactImg,
  ContactItem,
  ContactList,
  ContactName,
  ContactSection,
  ContactText,
  ContactTitle,
} from './Contacts.styled';

const Contacts = ({ users, loadMore, status, page, totalPages }) => {
  return (
    <ContactSection id="users">
      <ContactTitle>Working with GET request</ContactTitle>
      <ContactList
        style={{
          marginBottom:
            status === 'resolved' && page < totalPages ? '50px' : '0px',
        }}
      >
        {users.map(user => (
          <ContactItem key={user.id}>
            <ContactImg src={user.photo} alt={user.name}></ContactImg>

            <ContactName>{user.name}</ContactName>

            <ContactText>{user.position}</ContactText>

            {user.email.length > 37 ? (
              <ContactText>{user.email.slice(0, 37) + '...'}</ContactText>
            ) : (
              <ContactText>{user.email}</ContactText>
            )}

            <ContactText>{user.phone}</ContactText>
          </ContactItem>
        ))}
      </ContactList>

      {status === 'resolved' && page < totalPages && (
        <ContactButton onClick={loadMore}>Show more</ContactButton>
      )}
    </ContactSection>
  );
};

export default Contacts;
