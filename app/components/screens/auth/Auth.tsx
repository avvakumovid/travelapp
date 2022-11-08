import React, { useState } from 'react';
import { Layout } from './../../common/Layout';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IAuthFields } from './auth.interface';
import styles from './Auth.module.scss';
import { CgProfile } from 'react-icons/cg';
import stylesButton from '../place/BookTrip/BookTrip.module.scss';
import { signUp } from 'next-auth-sanity/client';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export const Auth = () => {
  const [typeForm, setTypeForm] = useState<'login' | 'register'>('login');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAuthFields>({
    mode: 'onChange',
  });

  const { push } = useRouter();

  const onSubmit: SubmitHandler<IAuthFields> = async data => {
    if (typeForm === 'register') {
      const res = await signUp(data);
      //@ts-ignore
      if (res?.error) {
        //@ts-ignore
        toast.error(res?.error);
      } else {
        toast.success('Reg');
      }
    } else {
      const res = await signIn('sanity-login', {
        redirect: false,
        ...data,
      });
      if (res?.error) {
        toast.error(res?.error);
        return;
      } else {
        await push('/');
      }
    }
  };

  return (
    <Layout>
      <h1 className='heading'>
        {typeForm === 'register' ? 'Register' : 'Login'}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.wrapper}>
          <input
            {...register('email', { required: 'Email is invalide' })}
            type='text'
            placeholder='E-mail'
            className={styles.input}
          />
          {errors.email && (
            <div className={styles.error}>{errors.email.message}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <input
            {...register('password', { required: 'Password is invalide' })}
            type='password'
            placeholder='Password'
            className={styles.input}
          />
          {errors.password && (
            <div className={styles.error}>{errors.password.message}</div>
          )}
        </div>
        <div className={styles.wrapper}>
          <button className={stylesButton.button} type='submit'>
            <span className={stylesButton.text}>
              {typeForm === 'register' ? 'Register' : 'Login'}
            </span>
            <span className={stylesButton.icon}>
              <CgProfile size={18} />
            </span>
          </button>
        </div>
        <div className={styles.wrapper}>
          <button
            type='button'
            className={styles.changeType}
            onClick={() => {
              setTypeForm(typeForm === 'register' ? 'login' : 'register');
            }}
          >
            I want {typeForm === 'register' ? 'login' : 'register'}
          </button>
        </div>
      </form>
    </Layout>
  );
};
