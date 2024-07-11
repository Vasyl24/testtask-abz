import icon from '../../assets/icons/sprite.svg';
import {
  ButtonList,
  HeaderButton,
  HeaderContainer,
  Logo,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <use href={`${icon}#icon-logo`}></use>
      </Logo>

      <ButtonList>
        <li>
          <HeaderButton href="#users">Users</HeaderButton>
        </li>
        <li>
          <HeaderButton href="#signup">Sign up</HeaderButton>
        </li>
      </ButtonList>
    </HeaderContainer>
  );
};

export default Header;
