import { NavLink } from "react-router-dom";
import classes from "./SignUpPage.module.css";
import { useFormik } from "formik";
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(25).required()
});

const SignUpPage = () => {

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);
    }
  })

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  if (formik.touched.password && formik.errors.password) {
    console.log("error");
  }

  const submit = () => {
    formik.handleSubmit();
  }

  return (
    <div className={classes.SignUpPage}>
      <div className={classes.panel}>
        <NavLink to={'/'}><i class="fa-solid fa-caret-left"></i>home</NavLink>
        <h1 className={classes.h1}>Sign Up</h1>
        <input name="firstName" value={formik.values.firstName} onChange={formik.handleChange} placeholder="First Name..." />
        <input name="lastName" value={formik.values.lastName} onChange={formik.handleChange} placeholder="Last Name..." />
        <input name="email" value={formik.email} onChange={formik.handleChange} type="email" placeholder="Email" />
        <input name="password" value={formik.password} onChange={formik.handleChange} type="password" placeholder="Password" />

        <button onClick={submit}>Register</button>
      </div>
    </div>
  );
};

export { SignUpPage };