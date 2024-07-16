import { useState } from 'react';
import {
  BtnSubmit,
  ContactInput,
  ContactInputItem,
  ContactInputList,
  ContactLabel,
  FormBlock,
  FormSection,
  FormTitle,
  // PhotoInput,
  // PhotoLabel,
  PositionText,
  RadioButton,
  RadioItem,
  RadioList,
  TelExample,
  Value,
} from './AddUserForm.styled';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

const AddUserForm = () => {
  const [img, setImg] = useState(null);
  console.log(img);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position: '',
      image: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'The name must be at least 2 characters')
        .max(60, 'The name must be 60 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('The email must be a valid email address.')
        .required('Required'),
      phone: Yup.string()
        .matches(/\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/, 'Enter ukrainian number')
        .required('The phone field is required.'),
      position: Yup.string().required('Required'),
      image: Yup.mixed()
        .required('Required')
        .test(
          'is-valid-size',
          'The photo may not be greater than 5 Mbytes.',
          value => value && value.size <= 5242880
        ),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  const handleImgUpload = evt => {
    if (evt.target.files.length > 0) {
      setImg({
        src: URL.createObjectURL(evt.target.files[0]),
      });

      formik.setFieldValue('image', evt.target.files[0]);
    }
  };

  return (
    <FormSection id="signup">
      <FormTitle>Working with POST request</FormTitle>

      <FormBlock action="" autoComplete="on" onSubmit={formik.handleSubmit}>
        {/* <Form > */}
        <ContactInputList>
          <ContactInputItem>
            <ContactInput
              type="text"
              id="name"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <ContactLabel htmlFor="name">Your name</ContactLabel>
            {formik.touched.name && formik.errors.name ? (
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
            ) : null}
          </ContactInputItem>

          <ContactInputItem>
            <ContactInput
              type="email"
              id="email"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <ContactLabel htmlFor="email">Email</ContactLabel>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </ContactInputItem>

          <ContactInputItem>
            <ContactInput
              type="tel"
              id="phone"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            <ContactLabel htmlFor="phone">Phone</ContactLabel>

            <TelExample>+38 (XXX) XXX - XX - XX</TelExample>
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </ContactInputItem>
        </ContactInputList>

        <PositionText>Select your position</PositionText>

        <RadioList>
          <fieldset
            id="position"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.position}
            error={formik.errors.position}
            style={{ border: 'none' }}
          >
            <RadioItem>
              <RadioButton
                type="radio"
                id="frontend"
                name="position"
                value="Frontend developer"
              />
              <Value htmlFor="frontend">Frontend developer</Value>
            </RadioItem>
            <RadioItem>
              <RadioButton
                type="radio"
                id="backend"
                name="position"
                value="Backend developer"
              />
              <Value htmlFor="backend">Backend developer</Value>
            </RadioItem>
            <RadioItem>
              <RadioButton
                type="radio"
                id="designer"
                name="position"
                value="Designer"
              />
              <Value htmlFor="designer">Designer</Value>
            </RadioItem>
            <RadioItem>
              <RadioButton type="radio" id="qa" name="position" value="QA" />
              <Value htmlFor="qa">QA</Value>
            </RadioItem>

            {formik.touched.position && formik.errors.position ? (
              <div>{formik.errors.position}</div>
            ) : null}
          </fieldset>
        </RadioList>

        {/* <PhotoLabel htmlFor="file">
          <span></span>
        </PhotoLabel>
        <PhotoInput
          type="file"
          name="image"
          id="file"
          accept="image/*"
          onChange={handleImgUpload}
        /> */}
        <input
          type="file"
          name="image"
          id="file"
          accept="image/*"
          onChange={handleImgUpload}
        />
        {formik.errors.image ? <div>{formik.errors.image}</div> : null}

        <BtnSubmit type="submit" disabled={!(formik.isValid && formik.dirty)}>
          Sign up
        </BtnSubmit>
        {/* </Form> */}
      </FormBlock>
    </FormSection>
  );
};

export default AddUserForm;
