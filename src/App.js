import './App.css';
import Basic from './Basic';
import Formulario from './Formulario';
import React from 'react';
import { Formik, Form, Field,ErrorMessage} from 'formik';
import { SignupSchema } from './SignupSchema';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="container">
      <div>
    <h1 style={{color:'blue'}}>Formik && Yup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        age : '',
        date:''
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched,isValid}) => (
        <Form className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Field className='form-control' name="firstName" />
          <ErrorMessage name="firstName">{msg => <div  className="alert alert-danger" role="alert">{msg}</div>}</ErrorMessage>

          <label htmlFor="lastName">Last Name</label>
          <Field className='form-control' name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div  className="alert alert-danger" role="alert">{errors.lastName}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <Field  className='form-control' name="email" type="email" />
          {errors.email && touched.email ? (
            <div className="alert alert-danger" role="alert">{errors.email}</div>
           ) : null}

           <label htmlFor='age'>Your Age</label>
           <Field className='form-control' name="age" type='number'/>
           <ErrorMessage name="age">{msg => <div  className="alert alert-danger" role="alert">{msg}</div>}</ErrorMessage>

           <label htmlFor='birthday'>BithDay</label>
           <Field className='form-control' name="birthday" type='date'/>
           <ErrorMessage name="birthday">{msg => <div  className="alert alert-danger" role="alert">{msg}</div>}</ErrorMessage>

          <div style={{padding:'5px'}}><button className='btn btn-primary' type="submit" disabled={!isValid}>Submit</button></div>
        </Form>
      )}
    </Formik>
  </div>
    </div>
  );
}

export default App;
