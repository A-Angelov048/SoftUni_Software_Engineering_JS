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

export const createFurnitureSchema = yup.object().shape({
    name: yup.string().min(4).required(),
    category: yup.string().min(4).required(),
    year: yup.number().typeError('year is a required field').min(1900).max(2024).required(),
    materials: yup.string().min(10).required(),
    color: yup.string().min(4).required(),
    size: yup.string().min(4).required(),
    weight: yup.string().min(4).required(),
    condition: yup.string().min(6).required(),
    imageUrl: yup.string().required(),
    price: yup.number().typeError('price is a required field').positive().required(),
    description: yup.string().min(10).required(),
})


