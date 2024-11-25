import * as yup from "yup";
export const passwordSchema = yup.object().shape({
    password: yup.string().min(6).required(),
    newPassword: yup.string().min(6).required(),
    reNewPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match!'),
})
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

export const reviewSchema = yup.object().shape({
    rating: yup.string().required('From 1 to 5 - how much do you like this furniture?'),
    review: yup.string().min(8, 'Review must be at least 8 characters').required("What's the point of an empty review? Help other customers make the right choice."),
})




