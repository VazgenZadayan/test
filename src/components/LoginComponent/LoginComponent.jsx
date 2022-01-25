import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidationSchema } from '../../utils/validator';

import CustomErrorMessage from '../ErrorMessage/CustomErrorMessage';

import styles from './styles';

const LoginComponent = () => {
  const classes = styles();

  const { register, handleSubmit, formState: { errors, isValid },} = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerValidationSchema),
  });

  const onSubmit = data => {
    const users = JSON.parse(localStorage.getItem('some_users')) || [];
    users.find(el => el.email === data.email)
    ? alert(`User with ${data.email} address already exists`)
    : users.push(data);
      localStorage.setItem('some_users', JSON.stringify(users));
      alert(`Welcome ${data.name} ${data.surname}`);
  };

  return (
    <div style={classes.loginForm}>
      <h3 style={classes.title}>Registration</h3>
      <form style={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          {Object.keys(errors).length
            ? Object.keys(errors).map((el) => (
                <CustomErrorMessage errors={errors} name={el}/>
              ))
            : isValid
              ? <p style={classes.confirmForm}>Your form is Valid!</p>
              : <p style={classes.confirmForm}>Fill out the registration form</p>
          }
        </div>
        <input
          id='name'
          placeholder='Name'
          name='name'
          type='name'
          autoFocus
          style={classes.input}
          {...register('name')}
        />
        <input
          id='surname'
          placeholder='Surname'
          name='surname'
          type='surname'
          style={classes.input}
          {...register('surname')}
        />
        <input
          id='email'
          placeholder='Email'
          name='email'
          type='email'
          style={classes.input}
          {...register('email')}
          error={errors?.email ? true : false}
          helperText={errors?.email && errors.email?.message}
        />
        <input
          placeholder='Password'
          id='password'
          name='password'
          type='password'
          style={classes.input}
          {...register('password')}
          error={errors?.password ? true : false}
          helperText={errors?.password && errors.password?.message}
        />
        <button
          type='submit'
          disabled={!isValid}
          style={classes.btn}
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
