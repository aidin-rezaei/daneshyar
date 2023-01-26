
import { getuser, login } from 'api/api';
import axios from 'axios';
import Button from 'components/Button/Button';
import CardG from 'components/CardG/CardG';
import Input from 'components/Input/Input';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import './Login.scss'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [name, setname] = useState('')
    const [pass, setpass] = useState('')
    const clicklogin = () => {

        axios.post(
            login(),
            {
                password: pass,
                studentNumber: name,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )
            .then(function (response) {
                // dispatch({ type: "Authorization_TOKEN", value: response.data.token });
                Cookies.set('user', response.data.data.user[0].studentNumber, { expires: 1 })
                Cookies.set('auth', response.data.data.user[0].password, { expires: 1 })
                axios.post(
                    getuser(),
                    {
                        studentNumber: response.data.data.user[0].studentNumber,
                    },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "Authorization": response.data.data.user[0].password
                        },
                    }
                )
                    .then(function (response2) {
                        console.log(response2);

                        navigate('/admin/home')
                    })
                    .catch((err) => console.log(err))

            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='login'>
            <CardG>
                <div className='login__logo'>
                    <h1>پیمن</h1>
                    <p>سامانه مدیریت پایان نامه</p>
                </div>
                <Input changev={setname} value={name} label='شماره دانشجویی' />
                <Input changev={setpass} value={pass} typeInput="password" label='رمز عبور' />
                <div className='login__btn'>
                    <Button click={clicklogin}>ورود</Button>

                </div>
                <div className="login__box_btn">

                    <Button link='/SignUp'>ثبت نام</Button>
                    <Button link='/a-login'>ورود استاد</Button>
                </div>
            </CardG>
        </div>
    );
}

export default Login;