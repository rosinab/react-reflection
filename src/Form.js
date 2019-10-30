import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const MyTextFill = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea className="message-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  const MyCheckbox = ({ children, ...props }) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <>
        <label className="checkbox">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const ClassForm = () => {
    return (
      <>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            acceptedTerms: false, // added for our checkbox
            text: '',
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .required('Required'),
            lastName: Yup.string()
              .required('Required'),
            email: Yup.string()
              .email('Invalid email addresss`')
              .required('Required'),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
            text: Yup.string()
              .required('Required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              alert("Thank you for submitting");
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <MyTextInput
              label="First Name "
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            <br />
            <br />
            <MyTextInput
              label="Last Name "
              name="lastName"
              type="text"
              placeholder="Doe"
            />
            <br />
            <br />
            <MyTextInput
              label="Email Address "
              name="email"
              type="email"
              placeholder="name@fakemail.com"
            />
            <br />
            <br />
            <MyTextFill
              label="Message "
              name="message"
              type="text area"
              placeholder="Message"
            />
            <br />
            <br />
            <MyCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </MyCheckbox>
            <br />
            <br />
            <button type="submit" class="submit">Submit</button>
          </Form>
        </Formik>
      </>
    );
  };
  export default ClassForm;