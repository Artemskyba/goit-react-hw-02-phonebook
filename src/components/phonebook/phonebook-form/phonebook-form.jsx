import { Formik, Field, Form } from 'formik';

export const ContactForm = ({onAddContact}) => (
  <div>
    <Formik
      initialValues = {{
        userName: '',
        userNumber: '',
      }}

      onSubmit={({ userName, userNumber }, actions) => {
        onAddContact(userName, userNumber);
        actions.resetForm();
      }
      }
    >
      <Form>
        <label htmlFor="userName">Name</label>
        <Field id="userName" name="userName" placeholder="Jane" />

        <label htmlFor="userNumber">Number</label>
        <Field id="userNumber" name="userNumber" placeholder="Doe" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  </div>
);