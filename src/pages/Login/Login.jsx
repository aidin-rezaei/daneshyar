
import { login } from 'api/api';
import axios from 'axios';
import Button from 'components/Button/Button';
import CardG from 'components/CardG/CardG';
import Input from 'components/Input/Input';
import { useState } from 'react';

import './Login.scss'
const Login = () => {
    const [name, setname] = useState('')
    const [pass, setpass] = useState('')
    const clicklogin=()=>{
        axios.post(
            login(),
            {
                studentNumber: name,
                password: pass,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(function (response) {
                // dispatch({ type: "Authorization_TOKEN", value: response.data.token });
                console.log(response);
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
                <Input value={setname} label='شماره دانشجویی' />
                <Input value={setpass} typeInput="password" label='رمز عبور' />
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