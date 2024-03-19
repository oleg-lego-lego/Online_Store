import React, {useEffect, useRef, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Navigate} from "react-router-dom";
import {PasswordInput} from "../login/PasswordInput";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {PATH} from "../../PATH/PATH";
import {loginAddAC, LoginUserType} from "../store/login-reducer";
import {v1} from "uuid";
import {useTranslation} from "react-i18next";
import {setMessageSnackbarAC} from "../store/settings-reducer";


export type RegisterFormType = {
    email: string
    password: string
    confirmPassword: string
}

export const RegisterForm = () => {
    const [redirect, setRedirect] = useState(false)
    const dispatch = useAppDispatch()

    const {t} = useTranslation('login');

    const {register, handleSubmit, watch, formState: {errors}} = useForm<RegisterFormType>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        mode: 'onTouched'
    });

    const password = watch('password', '')

    const [errorFindEmail, setErrorFindEmail] = useState<string>('')

    const loginList = useAppSelector(state => state.loginUser.loginUsersList)

    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('getLoginUser', JSON.stringify(loginList));
        }

        isMounted.current = true
    }, [loginList])

    const arr: string[] = []
    loginList.map(el => arr.push(el.email))

    const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
        const {confirmPassword, ...restData} = data

        const findEmail = arr.find(i => i.toLowerCase() === restData.email.toLowerCase())

        const newAccount: LoginUserType = {
            id: v1(),
            ...data,
            rememberMe: false,
        }

        if (findEmail) {
            setErrorFindEmail(t('Этот адрес почты уже зарегистрирован'));
        } else {
            dispatch(loginAddAC(newAccount))
            setRedirect(true)
            dispatch(setMessageSnackbarAC(t('Вы успешно зарегестрировали аккаунт'), 'success'))
        }
    }

    const onEnterPress = (key: string) => {
        key === 'Enter' && handleSubmit(onSubmit)
    }

    const styles = {
        input: {
            fontSize: '20px'
        },
    };

    if (redirect) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => onEnterPress(e.key)}
        >
            <FormGroup>
                <TextField
                    autoComplete="username"
                    label={t('Ваш Email')}
                    variant={'outlined'}
                    size={'small'}
                    InputProps={{style: styles.input}}
                    {...register('email', {
                        required: t('Введите электронную почту'),
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: t('Введите правильный адрес почты'),
                        }
                    })}
                />

                <div className="authError">
                    {errors.email && <div>{errors.email.message}</div>}
                    {errorFindEmail && <div>{errorFindEmail}</div>}
                </div>

                <PasswordInput
                    name={'password'}
                    label={t('Ваш пароль')}
                    register={register}
                    options={
                        {
                            required: t('Необходим пароль'),
                            minLength: {
                                value: 8,
                                message: t('Пароль должен быть более 8 символов')
                            }
                        }
                    }
                />

                <div className='authError'>
                    {errors.password && <div>{errors.password.message}</div>}
                </div>

                <PasswordInput
                    name={'confirmPassword'}
                    label={t('Повторите пароль')}
                    register={register}
                    options={
                        {
                            validate: (value: string) =>
                                value === password || t('Пароли не совпадают')
                        }
                    }
                />

                <div className="authError">
                    {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
                </div>

                <div className="button__Login">
                    <Button
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                        style={{
                            width: 'auto',
                            fontSize: '17px',
                            margin: '20px 0 5px'
                        }}
                    >
                        {t('Зарегистрируйтесь')}
                    </Button>
                </div>
            </FormGroup>
        </form>
    )
}
