
import Button from 'components/Button/Button';
import CardG from 'components/CardG/CardG';
import Input from 'components/Input/Input';

import './Login.scss'
const Login = () => {
    return (
        <div className='login'>
            <CardG>
                <div className='login__logo'>
                    <h1>پیمن</h1>
                    <p>سامانه مدیریت پایان نامه</p>
                </div>
                <Input label='شماره دانشجویی' />
                <Input label='رمز عبور' />
                <div className='login__btn'>
                    <Button link='/admin/home'>ورود</Button>

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