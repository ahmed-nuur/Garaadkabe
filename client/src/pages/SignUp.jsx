import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import logo from '../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice'; // Assuming this is where you've defined your themeSlice

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme); // Assuming 'theme' is your state slice name

  const [passwordStrength, setPasswordStrength] = useState('weak');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
    setFormData({ ...formData, password });
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const calculatePasswordStrength = (password) => {
    if (password.length >= 8) {
      return 'strong';
    } else if (password.length >= 6) {
      return 'medium';
    } else {
      return 'weak';
    }
  };

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.email || !formData.password || !agreeTerms) {
      return setErrorMessage('Please fill out all fields and agree to terms.');
    }

    if (!isEmailValid(formData.email)) {
      return setErrorMessage('Please enter a valid email address.');
    }

    if (formData.password !== passwordConfirm) {
      return setErrorMessage('Passwords do not match.');
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      setLoading(false);

      if (res.ok) {
        navigate('/sign-in');
        setFormData({});
      }

    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className='flex justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img className='mx-auto h-12 w-auto' src={logo} alt='Logo' />
            <h2 className='mt-6 text-center text-3xl font-extrabold'>
              Create your account
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <Label value='Username' />
                <TextInput
                  type='text'
                  placeholder='Username'
                  id='username'
                  onChange={handleChange}
                  required
                  className='input-field'
                />
              </div>
              <div>
                <Label value='Email address' />
                <TextInput
                  type='email'
                  placeholder='name@company.com'
                  id='email'
                  onChange={handleChange}
                  required
                  className='input-field'
                />
              </div>
              <div>
                <Label value='Password' />
                <TextInput
                  type='password'
                  placeholder='Password'
                  id='password'
                  onChange={(e) => {
                    handleChange(e);
                    handlePasswordChange(e);
                  }}
                  required
                  className='input-field'
                />
                {passwordStrength === 'weak' && (
                  <p className='mt-2 text-sm text-red-500'>Password should be at least 6 characters long.</p>
                )}
                {passwordStrength === 'medium' && (
                  <p className='mt-2 text-sm text-yellow-500'>Password strength: Medium</p>
                )}
                {passwordStrength === 'strong' && (
                  <p className='mt-2 text-sm text-green-500'>Password strength: Strong</p>
                )}
              </div>
              <div>
                <Label value='Confirm password' />
                <TextInput
                  type='password'
                  placeholder='Confirm Password'
                  id='passwordConfirm'
                  onChange={handleConfirmPasswordChange}
                  required
                  className='input-field'
                />
                {formData.password !== passwordConfirm && (
                  <p className='mt-2 text-sm text-red-500'>Passwords do not match.</p>
                )}
              </div>
              <div className='flex items-center'>
                <input
                  id='agreeTerms'
                  name='agreeTerms'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  checked={agreeTerms}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor='agreeTerms' className='ml-2 block text-sm text-gray-900'>
                  I agree to the{' '}
                  <Link to='/terms' className='font-medium text-blue-600 hover:text-blue-500'>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to='/privacy' className='font-medium text-blue-600 hover:text-blue-500'>
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            <div>
              <Button
                type='submit'
                disabled={loading || !agreeTerms}
                className='w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </div>
          </form>

          <div className='text-sm text-center mt-4'>
            <span>Already have an account?</span>{' '}
            <Link to='/sign-in' className='font-medium text-indigo-600 hover:text-indigo-500'>
              Sign In
            </Link>
          </div>

          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}

          <OAuth />
        </div>
      </div>
    </div>
  );
}
