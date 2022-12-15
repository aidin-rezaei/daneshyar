import React from 'react';
import './SignUp.scss';
import Button from 'components/Button/Button';
import CardG from 'components/CardG/CardG';
import Input from 'components/Input/Input';

const SignUp = () => {
    return (
        <div className='signUp'>
            <CardG>
                <div className='signUp__logo'>
                    <h1>پیمن</h1>
                    <p>سامانه مدیریت پایان نامه</p>
                </div>
                <Input label='نام و نام خانوادگی' />
                <Input label='شماره دانشجویی' />
                <Input label='شماره تلفن' />
                <Input label='ایمیل' />
                <Input label='رمز' />
                {/* <Input label='انتخاب استاد راهنما' /> */}
                <select className='signUpSelect'>
                    <option>انتخاب استاد راهنما</option>
                    <option value="a">محمدی</option>
                    <option value="b">رشیدی</option>
                </select>
                <div className='signUp__btn'>
                    <Button link='/admin/home'>ورود</Button>
                </div>
            </CardG>
        </div>
    );
};

export default SignUp;