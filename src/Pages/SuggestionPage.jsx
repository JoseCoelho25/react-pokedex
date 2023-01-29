import React from 'react'
import MainLayout from '../MainLayout/MainLayout';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20 ) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }


  return errors;
};
function SuggestionPage() {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <MainLayout>
            <div className="mt-36 container mx-auto lg:w-1/2 px-4 lg:px-0">
                <p className="sm:text-3xl text-2xl font-semibold text-center text-blue-700  mb-4">Leave any suggestions or advise you might have!</p>
            <form onSubmit={formik.handleSubmit} >
              <label htmlFor="firstName"></label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder="Name"
                className="focus:outline-none border-b w-full my-2 lg:my-6  border-sky-400 placeholder-gray-500"
              />
              {formik.errors.firstName ? <div className="text-black">{formik.errors.firstName}</div> : null}
    
              <label htmlFor="lastName"></label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                placeholder="Last Name"
                className="focus:outline-none border-b w-full my-2 border-sky-400 placeholder-gray-500"
              />
              {formik.errors.lastName ? <div className="text-black">{formik.errors.lastName}</div> : null}
    
              <label htmlFor="email"></label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email"
                className="focus:outline-none border-b w-full my-2 lg:my-6 border-sky-400 placeholder-gray-500"
              />
              {formik.errors.email ? <div className="text-black">{formik.errors.email}</div> : null}
    
              <label htmlFor="request"></label>
              <input
                id="request"
                name="request"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.request}
                placeholder="Suggestions & advise"
                className="focus:outline-none border-b w-full my-2 border-sky-400 placeholder-gray-500 h-48 pb-40"
              />
              
    
              <button type="submit" className=" rounded-full  p-3 w-full xl:w-56   bg-red-700 text-black text-lg font-semibold mt-4">Submit</button>
            </form>
            </div>
        </MainLayout>
      );
}

export default SuggestionPage