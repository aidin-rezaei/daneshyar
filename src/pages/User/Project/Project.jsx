import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';
import { useState } from 'react';
import './Project.scss';
const Project = () => {
    const [status, setStatus] = useState(true)
    return (
        <div className='project'>
            {
                status
                    ?
                    <div className='project__post'>
                        <div className='project__post__box'>
                            <h3> وضعیت</h3>
                            <p>درحال بررسی</p>
                        </div>
                        <div className='project__post__box'>
                            <h3>موضوع</h3>
                            <p>خانه هوشمند</p>
                        </div>
                        <div className='project__post__box'>
                            <h3>توضیحات</h3>
                            <p>خانه هوشمند و کاربرد های ان در عصر نوین و شرکت های توسعه دهنده ان</p>
                        </div>
                        <div className='project__post__box red'>
                            <h3>علت رد شدن</h3>
                            <p>خانه هوشمند و کاربرد های ان در عصر نوین و شرکت های توسعه دهنده ان</p>
                        </div>
                        <Button click={() => console.log('')}>ویرایش</Button>
                    </div>
                    :
                    <div className="project__box__sendpost">
                        <h3>پروژه خود را ثبت کنید</h3>
                        <Input changev={''} value={''} label='عنوان ' />
                        <Textarea changev={''} value={''} label='متن' />
                        <Button click={() => console.log('')}>ایجاد</Button>
                    </div>
            }
        </div>
    );
};

export default Project;