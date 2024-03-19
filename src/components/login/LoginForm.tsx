import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Navigate, NavLink,} from 'react-router-dom';
import Button from '@mui/material/Button';
import React, {useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {PasswordInput} from "./PasswordInput";
import {registeredUserAC, setRedirectHomeValueAC} from "../store/login-reducer";
import {PATH} from "../../PATH/PATH";
import {useTranslation} from "react-i18next";
import {setMessageSnackbarAC} from "../store/settings-reducer";

export type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {
    const dispatch = useAppDispatch()

    const {t} = useTranslation('login');

    const [redirectValue, setRedirectValue] = useState<boolean>(false)

    const loginList = useAppSelector(state => state.loginUser.loginUsersList)
    const userRegistered = useAppSelector(state => state.loginUser.registeredUser)

    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('registerUser', JSON.stringify(userRegistered));
        }

        isMounted.current = true
    }, [userRegistered])

    const [errorEmail, setErrorEmail] = useState<string>('')
    const [errorPassword, setErrorPassword] = useState<string>('')

    const {register, control, handleSubmit, formState: {errors}} = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        mode: 'onTouched'
    });

    const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
        const user = loginList.find(i => i.email.toLowerCase() === data.email.toLowerCase());

        if (!user) {
            setErrorEmail(t('Проверьте почту или зарегистрируйтесь'));
        } else {
            setErrorEmail('');
        }

        if (user && user.password === data.password) {
            setErrorPassword('');
            dispatch(registeredUserAC(data.email))
            setRedirectValue(true)
            dispatch(setMessageSnackbarAC(t('Вы успешно вошли в аккаунт'),'success'))
            dispatch(setRedirectHomeValueAC(true))
        } else {
            setErrorPassword(t('Проверьте пароль'));
        }
    }

    const onEnterPress = (key: string) => {
        key === 'Enter' && handleSubmit(onSubmit)
    }

    if (redirectValue) {
        return <Navigate to={PATH.HOME}/>
    }

    const styles = {
        input: {
            fontSize: '20px',
        },
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form__wrapper"
            onKeyDown={(e) => onEnterPress(e.key)}
        >
            <FormGroup>
                <TextField
                    autoComplete="username"
                    id={'outlined-basic'}
                    variant={'outlined'}
                    label={t('Ваш Email')}
                    size={'small'}
                    InputProps={{style: styles.input}}
                    {...register('email', {
                        required: t('Введите электронную почту'),
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: t('Введите правильный адрес почты')
                        }
                    })}
                />

                <div className="form__authError">
                    {errors.email && <div>{errors.email.message}</div>}
                    {errorEmail && <div>{errorEmail}</div>}
                </div>

                <PasswordInput
                    register={register}
                    name={'password'}
                    label={t('Ваш пароль')}
                    options={{
                        required: t('Необходим пароль'),
                        minLength: {
                            value: 8,
                            message: t('Пароль должен быть более 8 символов')
                        }
                    }}
                />

                <div className="form__authError">
                    {errors.password && <div>{errors.password.message}</div>}
                    {errorPassword && <div>{errorPassword}</div>}
                </div>

                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <FormControlLabel
                        label={t('Запомнить меня')}
                        style={{marginTop: '15px'}}
                        control={
                            <Controller name="rememberMe" control={control}
                                        render={({field}) =>
                                            <Checkbox {...field} checked={!!field.value}/>}
                            />
                        }
                    />
                </div>

                <NavLink to={'Path.ForgotPassword'} className="forgotPassword">{t('Забыли пароль ?')}</NavLink>

                <div className="button__Login">
                    <Button
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                        style={{
                            width: '120px',
                            fontSize: '17px',
                            margin: '20px 0 5px'
                        }}
                    >
                        {t('Войти')}
                    </Button>
                </div>
            </FormGroup>
        </form>
    )
}