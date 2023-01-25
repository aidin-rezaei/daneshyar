import React, { useState } from 'react';
import './Alogin.scss';
import Button from 'components/Button/Button';
import CardG from 'components/CardG/CardG';
import Input from 'components/Input/Input';
import { useNavigate } from 'react-router';
import { alogin, getadmin } from 'api/api';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

const Alogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [pass, setpass] = useState('')
    const clicklogin = () => {

        axios.post(
            alogin(),
            {
                password: pass,
                username: name,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )
            .then(function (response) {

                Cookies.set('user', response.data.data.user[0].email, { expires: 1 })
                Cookies.set('auth', response.data.data.user[0].password, { expires: 1 })
                axios.post(
                    getadmin(),
                    {
                        username: response.data.data.user[0].email,
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
                        dispatch({
                            type: "GET_LOCATION",
                            value: {
                                email: response.data.data.user[0].email,
                                phone: response.data.data.user[0].phone,
                                id: response.data.data.user[0].id,
                                username: response.data.data.user[0].username
                            },
                        })
                    })
                    .catch((err) => console.log(err))

            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='Alogin'>
            <CardG>
                <div className='Alogin__logo'>
                    <h1>پیمن</h1>
                    <p>سامانه مدیریت پایان نامه</p>
                </div>
                <Input value={setname} name="email" label='ایمیل استاد' />
                <Input value={setpass} typeInput="password" label='رمز عبور' />
                <div className='Alogin__btn'>
                    <Button click={clicklogin}>ورود</Button>
                </div>
            </CardG>
        </div>
    );
};

export default Alogin;