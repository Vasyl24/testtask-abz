import {
  BtnSubmit,
  ContactInput,
  ContactInputItem,
  ContactInputList,
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
    <FormSection>
      <FormTitle>Working with POST request</FormTitle>

      <form action="" autoComplete="on">
        <ContactInputList>
          <ContactInputItem>
            <ContactInput type="text" placeholder="Your name" />
          </ContactInputItem>

          <ContactInputItem>
            <ContactInput type="email" placeholder="Email" />
          </ContactInputItem>

          <ContactInputItem>
            <ContactInput type="tel" placeholder="Phone" />

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
      </form>
    </FormSection>
  );
};

export default Form;
