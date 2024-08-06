import * as yup from "yup";

export const profileSchema = yup.object().shape({
    username: yup.string().min(5).required(),
})

export const loginSchema = yup.object().shape({
    email: yup.string().email().min(10).required(),
    password: yup.string().min(6).required(),
})

export const registerSchema = yup.object().shape({
    username: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    rePassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match!'),
})


