import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/authServices';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email')
        .required('The Username or Email ID field is required'),
      password: Yup.string()
        .min(6, 'Min 6 characters')
        .required('The password field is required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await loginUser(values);

        if (res && res.status) {
          navigate('/main');
        }
        console.log('Login Success', res.data);
      } catch (error) {
        console.log('Login Failed', error.response.data.message || error);
      }
    },
  });

  return (
    <div className="form-container">
      <div className="form-heading">
        <h1 className="text-[24px] font-light">Login</h1>
        <h3 className="text-base font-extralight">
          Enter Your Account Login Details.
        </h3>
      </div>

      <form onSubmit={formik.handleSubmit} className="form">
        <div className="input-container">
          <input
            name="email"
            placeholder="User name or Email"
            className="input"
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && (
            <div div style={{ color: 'red' }}>
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="input-container">
          <input
            type="password"
            name="password"
            className="input"
            {...formik.getFieldProps('password')}
            placeholder="Password"
          />
          {formik.errors.password && (
            <div div style={{ color: 'red' }}>
              {formik.errors.password}
            </div>
          )}
        </div>

        <button className="btn" type="submit">
          Sign In
        </button>

        <div className="form-link">
          Don't you have an account?{' '}
          <Link className="underline" to="/register">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
