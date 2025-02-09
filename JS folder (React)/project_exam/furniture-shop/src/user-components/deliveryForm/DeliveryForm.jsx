import './DeliveryForm.css';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForms';
import { ErrorContext } from '../../context/ErrorContext';
import { AuthContext } from '../../context/AuthContext';
import { deliveryFormSchema } from '../../utils/schemaForm';



export default function DeliveryForm() {

    const { errors, handleError, clearError } = useContext(ErrorContext);
    const { userId, role, changeAuthState, updateAuthError } = useContext(AuthContext);


    const createDeliveryInfo = async (values) => {
        
        try {
            await deliveryFormSchema.validate(values, { abortEarly: false });
        } catch (error) {

            const newError = {};

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            handleError(newError);

            return;
        }

        try {

        } catch (error) {

            if (error.message === '403') return updateAuthError(true);

            console.error(error.message);

        }
    }

    const { values, changeHandler, submitCurForm } = useForm({}, createDeliveryInfo);


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