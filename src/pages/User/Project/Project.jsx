import { createpost, usergetposts } from 'api/api';
import axios from 'axios';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Project.scss';
const Project = () => {
    const [status, setStatus] = useState('')
    const [discretion, setDiscretion] = useState("");
    const [title, setTitle] = useState("");
    const USER = useSelector(state => state.userData);

    const getpost = () => {
        axios.post(
            usergetposts(),
            {
                username: Cookies.get("user"),
                id: USER.supervisor,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": Cookies.get("auth")
                },
            }
        )
            .then(function (response2) {
                console.log(response2.data.data.posts[0]);
                setStatus(response2.data.data.posts[0])
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getpost()
    },[])
    const addpost = () => {
        if (title !== '' && discretion !== '') {
            axios.post(
                createpost(),
                {
                    username: Cookies.get("user"),
                    studentNumber:Cookies.get("user"),
                    title: title,
                    discretion: discretion,
                    path_file: ' ',
                    supervisors: USER.supervisor,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": Cookies.get("auth")
                    },
                }
            )
                .then(function (response2) {
                    console.log(response2);
                    getpost()
                    setTitle('')
                    setDiscretion('')
                })
                .catch((err) => console.log(err))


        }
    }
    return (
        <div className='project'>
            {
                status
                    ?
                    <div className='project__post'>
                        <div className='project__post__box'>
                            <h3> وضعیت</h3>
                            <p>{status.status === '0' ? "درحال بررسی" : "ردشده"}</p>
                        </div>
                        <div className='project__post__box'>
                            <h3>موضوع</h3>
                            <p>{status.title}</p>
                        </div>
                        <div className='project__post__box'>
                            <h3>توضیحات</h3>
                            <p>{status.discretion}</p>
                        </div>
                        {
                            status.status === '0' ?
                                ''
                                :
                                <>
                                    <div className='project__post__box red'>
                                        <h3>علت رد شدن</h3>
                                        <p>{status.textd}</p>
                                    </div>
                                    <Button click={() => console.log('')}>ویرایش</Button>
                                </>
                        }


                    </div>
                    :
                    <div className="project__box__sendpost">
                        <h3>پروژه خود را ثبت کنید</h3>
                        <Input changev={setTitle} value={title} label='عنوان ' />
                        <Textarea changev={setDiscretion} value={discretion} label='متن' />
                        <Button click={addpost}>ایجاد</Button>
                    </div>
            }
        </div>
    );
};

export default Project;