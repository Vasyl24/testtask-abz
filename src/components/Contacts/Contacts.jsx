import {
  ContactButton,
  ContactImg,
  ContactItem,
  ContactList,
  ContactSection,
  ContactText,
  ContactTitle,
} from './Contacts.styled';
import icon from '../../assets/icons/sprite.svg';

const Contacts = () => {
  return (
    <ContactSection id='users'>
      <ContactTitle>Working with GET request</ContactTitle>
      <ContactList>
        <ContactItem>
          {/* <ContactImg src="" alt="photo" /> */}
          <ContactImg>
            <use href={`${icon}#icon-photo-cover`}></use>
          </ContactImg>

          <ContactText>Salvador Stewart Flynn Thomas Salva...</ContactText>
          <ContactText>
            Leading specialist of the department o...
            JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
          </ContactText>
        </ContactItem>

        <ContactItem>
          {/* <ContactImg src="" alt="photo" /> */}
          <ContactImg>
            <use href={`${icon}#icon-photo-cover`}></use>
          </ContactImg>

          <ContactText>Salvador Stewart Flynn Thomas Salva...</ContactText>
          <ContactText>
            Leading specialist of the department o...
            JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
          </ContactText>
        </ContactItem>

        <ContactItem>
          {/* <ContactImg src="" alt="photo" /> */}
          <ContactImg>
            <use href={`${icon}#icon-photo-cover`}></use>
          </ContactImg>

          <ContactText>Salvador Stewart Flynn Thomas Salva...</ContactText>
          <ContactText>
            Leading specialist of the department o...
            JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
          </ContactText>
        </ContactItem>

        <ContactItem>
          {/* <ContactImg src="" alt="photo" /> */}
          <ContactImg>
            <use href={`${icon}#icon-photo-cover`}></use>
          </ContactImg>

          <ContactText>Salvador Stewart Flynn Thomas Salva...</ContactText>
          <ContactText>
            Leading specialist of the department o...
            JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
          </ContactText>
        </ContactItem>

        <ContactItem>
          {/* <ContactImg src="" alt="photo" /> */}
          <ContactImg>
            <use href={`${icon}#icon-photo-cover`}></use>
          </ContactImg>

          <ContactText>Salvador Stewart Flynn Thomas Salva...</ContactText>
          <ContactText>
            Leading specialist of the department o...
            JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
          </ContactText>
        </ContactItem>
      </ContactList>

      <ContactButton>Show more</ContactButton>
    </ContactSection>
  );
};

export default Contacts;
