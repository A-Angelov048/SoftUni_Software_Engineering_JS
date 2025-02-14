import './DeliveryForm.css';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForms';
import { ErrorContext } from '../../context/ErrorContext';
import { AuthContext } from '../../context/AuthContext';
import { deliveryFormSchema } from '../../utils/schemaForm';
import { trimValue } from '../../utils/trimValue';
import { createDeliveryInfo } from '../../api-service/userService';
import { useNavigate } from 'react-router-dom';



export default function DeliveryForm({ deliveryInfo, onClose }) {

    const navigate = useNavigate();

    const { errors, handleError, clearError } = useContext(ErrorContext);
    const { updateAuthError } = useContext(AuthContext);

    const initialValues = {
        'last-name': deliveryInfo['last-name'] || '',
        'first-name': deliveryInfo['first-name'] || '',
        address: deliveryInfo.address || '',
        'zip-code': deliveryInfo['zip-code'] || '',
        region: deliveryInfo.region || '',
        city: deliveryInfo.city || '',
        neighborhood: deliveryInfo.neighborhood || '',
        email: deliveryInfo.email || '',
        phone: deliveryInfo.phone || '',
    };

    const submitDeliveryInfo = async (values) => {

        const trimValues = trimValue(values);

        try {
            await deliveryFormSchema.validate(trimValues, { abortEarly: false });
        } catch (error) {

            const newError = {};

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            handleError(newError);

            return;
        }

        try {

            await createDeliveryInfo(trimValues);

            onClose();

            handleError({ successMessage: 'Form submit successfully' });

            setTimeout(() => {

                clearError();

            }, 2000);

            navigate('/checkout');

        } catch (error) {

            if (error.message === '403') return updateAuthError(true);

            console.error(error.message);

        }
    }

    const { values, changeHandler, submitCurForm } = useForm(initialValues, submitDeliveryInfo);


    return (
        <form onSubmit={submitCurForm} className='delivery-form'>

            <div className='row-input'>

                <div className="form-group">
                    <input
                        type="text"
                        name="last-name"
                        placeholder="Last name*"
                        value={values['last-name']}
                        onChange={changeHandler}
                    />
                    {errors.hasOwnProperty('last-name') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors['last-name']}</p>
                        </div>
                    }
                </div>



                <div className="form-group">
                    <input
                        type="text"
                        name="first-name"
                        placeholder="Name*"
                        value={values['first-name']}
                        onChange={changeHandler}
                    />
                    {errors.hasOwnProperty('first-name') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors['first-name']}</p>
                        </div>
                    }
                </div>

            </div>

            <div className='row-input'>

                <div className="form-group">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address*"
                        value={values.address}
                        onChange={changeHandler}
                    />
                    {errors.hasOwnProperty('address') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors.address}</p>
                        </div>
                    }
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="zip-code"
                        placeholder="Zip code*"
                        value={values['zip-code']}
                        onChange={changeHandler}
                    />
                    {errors.hasOwnProperty('zip-code') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors['zip-code']}</p>
                        </div>
                    }
                </div>

            </div>

            <div className="row-input">

                <div className="form-group">
                    <input
                        type="text"
                        name="region"
                        placeholder="Region*"
                        value={values.region}
                        onChange={changeHandler}
                    />
                    {errors.hasOwnProperty('region') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors.region}</p>
                        </div>
                    }
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="city"
                        placeholder="City / District*"
                        value={values.city}
                        onChange={changeHandler}
                    />
                    {errors.hasOwnProperty('city') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors.city}</p>
                        </div>
                    }
                </div>

            </div>

            <div className="row-input">

                <div className="form-group">
                    <input
                        type="text"
                        name="neighborhood"
                        placeholder="Neighborhood*"
                        value={values.neighborhood}
                        onChange={changeHandler}
                    />
                    {errors.hasOwnProperty('neighborhood') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors.neighborhood}</p>
                        </div>
                    }
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email*"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    {errors.hasOwnProperty('email') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors.email}</p>
                        </div>
                    }
                </div>

            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone number*"
                    value={values.phone}
                    onChange={changeHandler}
                />
                {errors.hasOwnProperty('phone') &&
                    <div className='error-container'>
                        <i className='bx bxs-error-circle bx-tada' ></i>
                        <p className='error'>{errors.phone}</p>
                    </div>
                }
            </div>

            <button type="submit" className="save-btn">Save</button>

        </form>
    );
}