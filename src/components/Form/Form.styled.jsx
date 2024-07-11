import styled from 'styled-components';

export const FormSection = styled.section`
  padding-top: 140px;
  padding-bottom: 100px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 50px;
  color: var(--text-color);
  text-align: center;

  font-size: 40px;
  font-weight: 400;
  line-height: calc (40/40);
`;

export const FormBlock = styled.form`
  @media screen and (min-width: 768px) {
    width: 380px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ContactInputList = styled.ul`
  margin-bottom: 25px;
`;

export const ContactInputItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const TelExample = styled.span`
  margin-top: 4px;
  margin-left: 16px;

  color: var(--input-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
`;

export const ContactInput = styled.input`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 16px;

  color: var(--input-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  border-radius: 4px;
  border: 1px solid var(--grey);
`;

export const PositionText = styled.p`
  margin-bottom: 10px;

  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);
`;

export const RadioList = styled.ul`
  margin-bottom: 47px;
`;

export const RadioItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const RadioButton = styled.input`
  position: relative;
  margin-right: 12px;
  width: 20px;
  height: 20px;

  appearance: none;
  border: 1px solid var(--grey);
  box-shadow: 0 0 0 0.3px var(--grey);
  border-radius: 10px;
  cursor: pointer;

  &:checked {
    border: 1px solid var(--secondary-color);
    box-shadow: 0 0 0 0.3px var(--secondary-color);
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;

    background-color: var(--secondary-color);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1, 1);
  }

  & ::before {
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75) 0s;
  }
`;

export const Value = styled.label`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);
`;

export const PhotoInput = styled.input`
  &[type='file'] {
    display: none;
  }
`;

export const PhotoLabel = styled.label`
  display: block;
  margin-bottom: 50px;

  & span {
    display: flex;
  }

  & span::before {
    content: 'Upload';
    display: inline-block;
    width: 83px;
    padding: 14px 15px;

    color: var(--text-color);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: calc(26 / 16);

    border-radius: 4px 0px 0px 4px;
    border: 1px solid var(--text-color);
  }

  & span::after {
    content: 'Upload your photo';
    display: inline-block;
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--grey);

    color: var(--input-text-color);
    font-size: 16px;
    font-weight: 400;
    line-height: calc(26 / 16);
    border-radius: 0px 4px 4px 0px;
  }
`;

export const BtnSubmit = styled.button`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 34px;

  color: var(--secondary-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  background-color: var(--dark-grey);
  border-radius: 80px;
`;
