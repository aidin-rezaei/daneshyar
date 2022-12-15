import React from 'react';
import './Alogin.scss';
import Button from 'components/Button/Button';
import CardG from 'components/CardG/CardG';
import Input from 'components/Input/Input';

const Alogin = () => {
    return (
        <div className='Alogin'>
            <CardG>
                <div className='Alogin__logo'>
                    <h1>پیمن</h1>
                    <p>سامانه مدیریت پایان نامه</p>
                </div>
                <Input label='شماره استادی' />
                <Input label='رمز عبور' />
                <div className='Alogin__btn'>
                    <Button link='/admin/home'>ورود</Button>
                </div>
            </CardG>
        </div>
    );
};

export default Alogin;