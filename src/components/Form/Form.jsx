import {
  BtnSubmit,
  ContactInput,
  ContactInputItem,
  ContactInputList,
  ContactLabel,
  FormBlock,
  FormSection,
  FormTitle,
  PhotoInput,
  PhotoLabel,
  PositionText,
  RadioButton,
  RadioItem,
  RadioList,
  TelExample,
  Value,
} from './Form.styled';

const Form = () => {
  return (
    <FormSection id="signup">
      <FormTitle>Working with POST request</FormTitle>

      <FormBlock action="" autoComplete="on">
        <ContactInputList>
          <ContactInputItem>
            <ContactInput type="text" id="name" placeholder="" />
            <ContactLabel htmlFor="name">Your name</ContactLabel>
          </ContactInputItem>

          <ContactInputItem>
            <ContactInput type="email" id="email" placeholder="" />
            <ContactLabel htmlFor="email">Email</ContactLabel>
          </ContactInputItem>

          <ContactInputItem>
            <ContactInput type="tel" id="phone" placeholder="" />
            <ContactLabel htmlFor="phone">Phone</ContactLabel>

            <TelExample>+38 (XXX) XXX - XX - XX</TelExample>
          </ContactInputItem>
        </ContactInputList>

        <PositionText>Select your position</PositionText>

        <RadioList>
          <RadioItem>
            <RadioButton type="radio" id="frontend" name="position" />
            <Value htmlFor="frontend">Frontend developer</Value>
          </RadioItem>
          <RadioItem>
            <RadioButton type="radio" id="backend" name="position" />
            <Value htmlFor="backend">Backend developer</Value>
          </RadioItem>
          <RadioItem>
            <RadioButton type="radio" id="designer" name="position" />
            <Value htmlFor="designer">Designer</Value>
          </RadioItem>
          <RadioItem>
            <RadioButton type="radio" id="qa" name="position" />
            <Value htmlFor="qa">QA</Value>
          </RadioItem>
        </RadioList>

        <PhotoLabel htmlFor="file">
          <span></span>
        </PhotoLabel>
        <PhotoInput type="file" id="file" />

        <BtnSubmit type="submit">Sign up</BtnSubmit>
      </FormBlock>
    </FormSection>
  );
};

export default Form;
