import { NavLink, useNavigate } from "react-router-dom";
import classes from "./SignInPage.module.css";
import { useFormik } from "formik";
import * as yup from 'yup';
import { classNames } from "primereact/utils";
import { $api, TOKEN_LOCAL_STORAGE_KEY } from "../../atoms/config/api";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { userActions } from "../../atoms/store/model/slices/userSlice";
import { Button } from 'primereact/button';


const validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(25).required()
});

const SignInPage = () => {
    const navigation = useNavigate();
    const [authError, setAuthError] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();


    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            console.log(values);
            setIsLoading(true);
            try {
                const response = await $api.post('/auth', {
                    email: values.email,
                    password: values.password
                })

                localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, response.data.token);

                const userProfile = await $api.get('/profile');
                setIsLoading(false);

                if (userProfile.data) {
                    dispatch(userActions.setUser(userProfile.data))
                }

                if (response.status === 200) {
                    navigation('/');
                }
            }
            catch (e) {
                setAuthError('Email or Password is Incorrect');
                setIsLoading(false);
            }
        }
    })


    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const submit = () => {
        formik.handleSubmit();
    }

    return (
        <div className={classes.SignInPage}>
            <div className={classes.panel}>
                <NavLink to={'/'}><i class="fa-solid fa-caret-left"></i>home</NavLink>
                <h1 className={classes.h1}>{t('Log In')}</h1>
                <input name="email" value={formik.email} className={classNames({ 'p-invalid': isFormFieldInvalid('email') })} onChange={formik.handleChange} type="email" placeholder="Email" />
                {isFormFieldInvalid('email') && (
                    <span className={classes.error}>{formik.errors.email}</span>
                )}

                <input name="password" value={formik.password} className={classNames({ 'p-invalid': isFormFieldInvalid('password') })} onChange={formik.handleChange} type="password" placeholder="Password" />

                {isFormFieldInvalid('password') && (
                    <span className={classes.error}>{formik.errors.password}</span>
                )}

                {
                    authError && (
                        <div className={classes.errorContainer}>{authError}</div>
                    )
                }
                <Button onClick={submit} loading={isLoading}>Register</Button>
            </div>
        </div>
    );
};

export { SignInPage };