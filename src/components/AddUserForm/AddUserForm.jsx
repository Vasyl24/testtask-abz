import { useEffect, useState } from 'react';
import {
  BtnSubmit,
  ContactInput,
  ContactInputItem,
  ContactInputList,
  ContactLabel,
  FormBlock,
  FormSection,
  FormTitle,
  Message,
  PhotoInput,
  PhotoLabel,
  PositionText,
  RadioButton,
  RadioItem,
  RadioList,
  SuccessBlock,
  SuccessImg,
  SuccessText,
  TelExample,
  Value,
} from './AddUserForm.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import icon from '../../assets/icons/sprite.svg';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'The name must be at least 2 characters')
    .max(60, 'The name must be 60 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('The email must be a valid email address.')
    .required('Required'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Enter ukrainian number')
    .required('The phone field is required.'),
  position_id: Yup.number().required('Required'),
  photo: Yup.mixed()
    .required('Required')
    .test(
      'is-valid-size',
      'The photo may not be greater than 5 Mbytes.',
      value => value && value.size <= 5242880
    )
    .test(
      'is-valid-resolution',
      'The photo resolution must be at least 70x70.',
      async value => {
        const validResolution = await new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
              resolve(img.width >= 70 && img.height >= 70);
            };
            img.src = e.target.result;
          };
          reader.readAsDataURL(value);
        });
        return validResolution;
      }
    ),
});

const AddUserForm = () => {
  const [positions, setPositions] = useState([]);
  const [succesImage, setSuccesImage] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    position_id: 0,
    photo: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      setSuccesImage(true);
      setTimeout(() => {
        setSuccesImage(false);
      }, 5000);

      const response = await axios.get(
        'https://frontend-test-assignment-api.abz.agency/api/v1/token'
      );
      const token = response.data.token;
      const formData = new FormData();

      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('position_id', values.position_id);
      formData.append('photo', values.photo);

      axios.post(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        formData,
        {
          headers: {
            Token: token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      resetForm();
    } catch (error) {
      console.error('Error fetching token or submitting form:', error);
    }
  };

  const handleImgUpload = (evt, setFieldValue) => {
    if (evt.target.files.length > 0) {
      setFieldValue('photo', evt.target.files[0]);

      const fileChosen = document.getElementById('file-chosen');
      fileChosen.textContent = evt.target.files[0].name.slice(0, 27) + '...';
    }
  };

  const fetchPositions = async () => {
    const userPositions = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
    );

    setPositions(userPositions.data.positions);
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <FormSection id="signup">
      <FormTitle>Working with POST request</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik => (
          <FormBlock>
            <Form>
              <ContactInputList>
                <ContactInputItem>
                  <ContactInput
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    border={
                      formik.touched.name &&
                      formik.errors.name &&
                      '2px solid #cb3d40'
                    }
                  />
                  <ContactLabel
                    htmlFor="name"
                    color={
                      formik.touched.name && formik.errors.name && '#cb3d40'
                    }
                  >
                    Your name
                  </ContactLabel>
                  <ErrorMessage name="name" component={Message} />
                </ContactInputItem>

                <ContactInputItem>
                  <ContactInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    border={
                      formik.touched.email &&
                      formik.errors.email &&
                      '2px solid #cb3d40'
                    }
                  />
                  <ContactLabel
                    htmlFor="email"
                    color={
                      formik.touched.email && formik.errors.email && '#cb3d40'
                    }
                  >
                    Email
                  </ContactLabel>

                  <ErrorMessage name="email" component={Message} />
                </ContactInputItem>

                <ContactInputItem>
                  <ContactInput
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    border={
                      formik.touched.phone &&
                      formik.errors.phone &&
                      '2px solid #cb3d40'
                    }
                  />
                  <ContactLabel
                    htmlFor="phone"
                    color={
                      formik.touched.phone && formik.errors.phone && '#cb3d40'
                    }
                  >
                    Phone
                  </ContactLabel>

                  <TelExample>+38 (XXX) XXX-XX-XX</TelExample>

                  <ErrorMessage name="phone" component={Message} />
                </ContactInputItem>
              </ContactInputList>

              <PositionText>Select your position</PositionText>

              <RadioList>
                <fieldset
                  id="position_id"
                  name="position_id"
                  onChange={e =>
                    formik.setFieldValue(
                      'position_id',
                      parseInt(e.target.value)
                    )
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.position_id}
                  error={formik.errors.position_id}
                  style={{ border: 'none' }}
                >
                  {positions.map(userPosition => (
                    <RadioItem key={userPosition.id}>
                      <RadioButton
                        type="radio"
                        id={userPosition.id}
                        name="position_id"
                        value={userPosition.id}
                      />
                      <Value htmlFor={userPosition.id}>
                        {userPosition.name}
                      </Value>
                    </RadioItem>
                  ))}

                  <ErrorMessage name="position_id" component={Message} />
                </fieldset>
              </RadioList>

              <PhotoLabel htmlFor="file">
                <div>
                  <span className="upload">Upload</span>
                  <span className="text" id="file-chosen">
                    Upload your photo
                  </span>
                </div>
              </PhotoLabel>
              <PhotoInput
                type="file"
                name="photo"
                id="file"
                accept="image/*"
                onChange={evt => handleImgUpload(evt, formik.setFieldValue)}
              />

              <ErrorMessage name="photo" component={Message} />

              <BtnSubmit
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Sign up
              </BtnSubmit>
            </Form>
          </FormBlock>
        )}
      </Formik>

      {succesImage && (
        <SuccessBlock>
          <SuccessText>User successfully registered</SuccessText>
          <SuccessImg>
            <use href={`${icon}#icon-success-image`}></use>
          </SuccessImg>
        </SuccessBlock>
      )}
    </FormSection>
  );
};

export default AddUserForm;
