/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useForm = (useValidate: any) => {
  interface ErrorType {
    email: string;
    password: string;
    confirmationPassword: string;
  }
  const initialValues = { email: '', password: '', confirmationPassword: '' };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ErrorType>(Object);
  const [isSubmit, setIsSubmit] = useState(false);

  const history = useHistory();
  const { signup } = useAuth();
  function handleChange(e: any) {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setErrors(useValidate(values));
    setIsSubmit(true);
    await signup(values.email, values.password);
    history.push('/allLaunches');
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(errors);
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
