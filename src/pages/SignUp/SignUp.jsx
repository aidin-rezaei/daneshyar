import React, { useEffect, useState } from 'react';
import './SignUp.scss';
import Button from 'components/Button/Button';
import CardG from 'components/CardG/CardG';
import Input from 'components/Input/Input';
import { signup, usergetsupervisors } from 'api/api';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const [pervisors, setPervisors] = useState([])
    const [username, setusername] = useState([])
    const [numberstdn, setnumberstdn] = useState([])
    const [phone, setphone] = useState([])
    const [email, setemail] = useState([])
    const [pass, setpass] = useState([])
    const [supervisor, setsupervisor] = useState(0)

    const navigate = useNavigate()



    const getpervisors = () => {
        axios.post(
            usergetsupervisors()
        )
            .then(function (response2) {
                setPervisors(response2.data.data.posts)
            })
            .catch((err) => console.log(err))



    }


    const signupfn = () => {

        axios.post(
            signup(),
            {
                username: username,
                password: pass,
                studentNumber: numberstdn,
                phone: phone,
                email: email,
                supervisor: supervisor
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )
            .then(function (response2) {
                console.log(response2.data.data.users);
                const userdata = response2.data.data.users

                Cookies.set('user', userdata.username, { expires: 1 })
                Cookies.set('auth', userdata.hash, { expires: 1 })

                navigate('/user/home')


            })
            .catch((err) => console.log(err))



    }









    useEffect(() => {
        getpervisors()
    }, [])
    return (
        <div className='signUp'>
            <CardG>
                <div className='signUp__logo'>
                    <h1>پیمن</h1>
                    <p>سامانه مدیریت پایان نامه</p>
                </div>
                <Input changev={setusername} value={username} label='نام و نام خانوادگی' />
                <Input changev={setnumberstdn} value={numberstdn} label='شماره دانشجویی' />
                <Input changev={setphone} value={phone} label='شماره تلفن' />
                <Input changev={setemail} value={email} label='ایمیل' />
                <Input changev={setpass} value={pass} label='رمز' />
                {/* <Input label='انتخاب استاد راهنما' /> */}
                <select value={supervisor} onChange={(e) => setsupervisor(e.target.value)} className='signUpSelect'>
                    <option value='0' disabled selected hidden>انتخاب استاد راهنما</option>
                    {pervisors.map((item) => <option value={item.id}>{item.username}</option>)}
                </select>
                <div className='signUp__btn'>
                    <Button click={signupfn}>ورود</Button>
                </div>
            </CardG>
        </div>
    );
};

export default SignUp;