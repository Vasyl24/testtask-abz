import { Field } from 'formik';
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

export const FormBlock = styled.div`
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
  position: relative;

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  & :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 12px;
    transform: translateY(-100%);
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75) 0s,
      font-size 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75) 0s;
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

export const ContactLabel = styled.label`
  position: absolute;
  padding: 2px 4px;
  top: 14px;
  left: 16px;

  color: ${props => props.color || '#7e7e7e'};

  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  background-color: var(--background-color);
  transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75) 0s,
    font-size 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75) 0s;
`;

export const ContactInput = styled(Field)`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 16px;

  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  border-radius: 4px;
  border: ${props => props.border || '1px solid #d0cfcf'};
  background-color: var(--background-color);

  & :focus > label {
    transform: translateY(-50%);
  }
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
  display: flex;
  align-items: center;

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
  cursor: pointer;
`;

export const PhotoInput = styled.input`
  &[type='file'] {
    display: none;
  }
`;

export const PhotoLabel = styled.label`
  display: block;
  margin-bottom: 50px;

  & div {
    display: flex;
  }

  & span.upload {
    display: inline-block;
    padding: 14px 15px;

    color: var(--text-color);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: calc(26 / 16);

    border-radius: 4px 0px 0px 4px;
    border: 1px solid var(--text-color);
    cursor: pointer;
  }

  & span.text {
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

  color: ${props => (props.disabled ? '#ffffff' : '#000000de')};
  font-size: 16px;
  font-weight: 400;
  line-height: calc(26 / 16);

  background-color: ${props => (props.disabled ? '#b4b4b4' : '#f4e041')};
  border-radius: 80px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75) 0s;

  &:hover {
    background-color: ${props => !props.disabled && '#ffe302'};
  }
`;

export const Message = styled.div`
  margin-top: 4px;
  margin-left: 16px;

  color: var(--error);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
`;

export const SuccessBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 20px;

  background-color: var(--background-color);
  z-index: 10;
`;

export const SuccessText = styled.h2`
  margin-bottom: 50px;

  color: var(--text-color);
  text-align: center;

  font-size: 40px;
  font-weight: 400;
  line-height: calc(40 / 40);
`;

export const SuccessImg = styled.svg`
  display: block;
  margin: 0 auto;
  width: 328px;
  height: 290px;
`;
