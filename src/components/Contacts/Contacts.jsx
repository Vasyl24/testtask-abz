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

const Contacts = ({ users, loadMore }) => {
  return (
    <ContactSection id="users">
      <ContactTitle>Working with GET request</ContactTitle>
      <ContactList>
        {users.users.map(user => (
          <ContactItem key={user.id}>
            <ContactImg src={user.photo} alt={user.name}></ContactImg>

            <ContactName>{user.name}</ContactName>

            <ContactText>{user.position}</ContactText>
            <ContactText>{user.email}</ContactText>
            <ContactText>{user.phone}</ContactText>
          </ContactItem>
        ))}
      </ContactList>

      <ContactButton onClick={loadMore}>Show more</ContactButton>
    </ContactSection>
  );
};

export default Contacts;
