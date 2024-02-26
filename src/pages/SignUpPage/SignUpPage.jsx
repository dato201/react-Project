import { NavLink, useNavigate } from "react-router-dom";
import classes from "./SignUpPage.module.css";
import { useFormik } from "formik";
import * as yup from 'yup';
import { classNames } from "primereact/utils";
import { $api, TOKEN_LOCAL_STORAGE_KEY } from "../../atoms/config/api";
import { useTranslation } from "react-i18next";


const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(25).required()
});

const SignUpPage = () => {
  const { t, i18n } = useTranslation();

  const navigation = useNavigate();

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      const response = await $api.post('/auth', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      })

      localStorage.setItem('user', JSON.stringify(values));
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, response.data.token);

      if (response.status === 200 ) {
        navigation('/');
      }
    }
  })

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  const submit = () => {
    formik.handleSubmit();
  }

  return (
    <div className={classes.SignUpPage}>
      <div className={classes.panel}>
        <NavLink to={'/'}><i class="fa-solid fa-caret-left"></i>home</NavLink>
        <h1 className={classes.h1}>{t('Sign Up')}</h1>
        <input name="firstName" value={formik.values.firstName} className={classNames({'p-invalid': isFormFieldInvalid('firstName')})} onChange={formik.handleChange} placeholder="First Name..." />
        {isFormFieldInvalid('firstName') && (
          <span className={classes.error}>{formik.errors.firstName}</span>
        )}        
        <input name="lastName" value={formik.values.lastName} className={classNames({'p-invalid': isFormFieldInvalid('lastName')})} onChange={formik.handleChange} placeholder="Last Name..." />
        {isFormFieldInvalid('lastName') && (
          <span className={classes.error}>{formik.errors.lastName}</span>
        )}

        <input name="email" value={formik.email} className={classNames({'p-invalid': isFormFieldInvalid('email')})} onChange={formik.handleChange} type="email" placeholder="Email" />
        {isFormFieldInvalid('email') && (
          <span className={classes.error}>{formik.errors.email}</span>
        )}
        
        <input name="password" value={formik.password} className={classNames({'p-invalid': isFormFieldInvalid('password')})} onChange={formik.handleChange} type="password" placeholder="Password" />

        {isFormFieldInvalid('password') && (
          <span className={classes.error}>{formik.errors.password}</span>
        )}
        <button onClick={submit}>Register</button>
      </div>
    </div>
  );
};

export { SignUpPage };