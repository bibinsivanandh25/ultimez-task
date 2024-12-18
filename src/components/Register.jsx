import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/authServices';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const options = [
  {
    name: 'INDIA',
    code: 101,
  },
  {
    name: 'USA',
    code: 102,
  },
  {
    name: 'JAPAN',
    code: 103,
  },
  {
    name: 'SRI-LANKA',
    code: 104,
  },
];

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: '',
    userName: '',
    mobileNumber: '',
    email: '',
    password: '',
    country: '',
    referral_id: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    userName: Yup.string()
      .max(4, 'username must have minimum 4 characters')
      .required('User name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
      .required('MobileNumber is required'),
    country: Yup.string().required('Country is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const payload = {
      full_name: values.fullName,
      username: values.userName,
      mobile_number: values.mobileNumber,
      email_id: values.email,
      password: values.password,
      country_row_id: values.country,
      referral_id: values.referral_id || 'developer',
    };

    localStorage.setItem('userData', JSON.stringify(payload));
    try {
      const res = await registerUser(payload);
      console.log('Registration Successful', res.data);

      if (res && res.status) {
        navigate('/login');
      } else {
        console.log('Registration Failed', res.data?.message);
      }
    } catch (error) {
      console.log('Registration Failed', error.res?.data?.message || error);
    }
    resetForm();
  };

  return (
    <div className="form-container mt-5">
      <div className="form-heading">
        <h1 className="text-2xl font-light">Register</h1>
        <h3 className="text-base font-extralight">
          Create Your Company Accounts.
        </h3>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form">
            <div className="input-container">
              <Field
                type="text"
                name="fullName"
                placeholder="Full name *"
                className="input"
              />
              <ErrorMessage
                name="fullName"
                component="p"
                style={{ color: 'red' }}
              />
            </div>
            <div className="input-container">
              <Field
                type="text"
                name="userName"
                placeholder="User name *"
                className="input"
              />
              <ErrorMessage
                name="userName"
                component="p"
                style={{ color: 'red' }}
              />
            </div>
            <div className="input-container">
              <Field
                as="select"
                name="country"
                aria-label="Country selector"
                className="input appearance-none"
              >
                <option
                  value=""
                  disabled
                  className="bg-[#153973] text-[#f5f5f5]"
                >
                  Select Country *
                </option>
                {options.map((option) => (
                  <option
                    key={option.code}
                    value={option.code}
                    lassName="bg-[#153973] text-[#f5f5f5]"
                  >
                    {option.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="country"
                component="p"
                style={{ color: 'red' }}
              />
            </div>
            <div className="input-container">
              <Field
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number *"
                className="input"
              />
              <ErrorMessage
                name="mobileNumber"
                component="p"
                style={{ color: 'red' }}
              />
            </div>
            <div className="input-container">
              <Field
                type="email"
                name="email"
                placeholder="Email ID *"
                className="input"
              />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: 'red' }}
              />
            </div>
            <div className="input-container">
              <Field
                type="password"
                name="password"
                placeholder="Password *"
                className="input"
              />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: 'red' }}
              />
            </div>
            <div>
              <Field
                type="text"
                name="referral_id"
                placeholder="Referral ID"
                className="input"
              />
            </div>
            <div>
              <button className="btn" type="submit" disabled={isSubmitting}>
                Register
              </button>
            </div>

            <div className="form-link">
              Have an account?{' '}
              <Link className="underline" to="/login">
                Sign In
              </Link>{' '}
              here
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
