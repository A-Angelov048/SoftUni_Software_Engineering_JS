import * as yup from "yup";

export const passwordSchema = yup.object().shape({
    password: yup.string().min(6).required(),
    newPassword: yup.string().min(6).required().notOneOf([yup.ref('password'), null], 'the new password must be different from the current one.'),
    reNewPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'passwords must match!'),
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
    rePassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match!'),
})

const requiredStrings = yup.string().matches(/^https?:\/\//, 'Image URL should stars with http://... or https://...').required('image-url is a required field');

export const createFurnitureSchema = yup.object().shape({
    name: yup.string().min(4).required(),
    category: yup.string().min(4).required(),
    year: yup.number().typeError('year is a required field').min(1900).max(2024).required(),
    materials: yup.string().min(10).required(),
    color: yup.string().min(4).required(),
    size: yup.string().min(4).required(),
    weight: yup.string().min(4).required(),
    condition: yup.string().min(6).required(),
    imageUrl: yup.array().of(requiredStrings),
    price: yup.number().typeError('price is a required field').positive().required(),
    description: yup.string().min(10).required(),
})

export const reviewSchema = yup.object().shape({
    rating: yup.string().required('From 1 to 5 - how much do you like this furniture?'),
    review: yup.string().min(8, 'Review must be at least 8 characters').required("What's the point of an empty review? Help other customers make the right choice."),
})

export const deliveryFormSchema = yup.object().shape({
    'last-name': yup.string().required('Required field'),
    'first-name': yup.string().required('Required field'),
    address: yup.string().required('Required field'),
    'zip-code': yup.string().matches(/^\d{4}$/, 'Invalid zip code (example: 1000)').required('Required field'),
    region: yup.string().required('Required field'),
    city: yup.string().required('Required field'),
    neighborhood: yup.string().required('Required field'),
    email: yup.string().email('Email must be a valid email').required('Required field'),
    phone: yup.string().matches(/^\+359[- ]?\d{3}[- ]?\d{3}[- ]?\d{3}$/, 'Invalid phone number (example: +359111222333)').required('Required field'),
})