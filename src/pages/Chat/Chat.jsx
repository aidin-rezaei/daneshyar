import  { useEffect } from 'react';
import './Chat.scss';
import StringAvater from 'components/StringAvater/StringAvater';
import { PaperClipIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

import { useState } from 'react';
import { usergetchat, usersendchat } from 'api/api';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';


const Chat = ({ roll }) => {
    const [getchats, setgetchats] = useState([])
    const [valueinput, setvalueinput] = useState('')
    const ADMIN = useSelector(state => state.AdminData);
    const USER = useSelector(state => state.userData);
    const getchat = () => {
        axios.post(
            usergetchat(),
            {
                username: Cookies.get("user"),
                supervisors: USER.supervisor,
                user: Cookies.get("user")
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": Cookies.get("auth")
                },
            }
        )
            .then(function (response2) {
                setgetchats(response2.data.data.posts)
                // navigate('/admin/home')
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getchat()
    })
    const send =()=>{
        if(roll ==='user'){
            axios.post(
                usersendchat(),
                {
                    username: Cookies.get("user"),
                    supervisors: USER.supervisor,
                    user: Cookies.get("user"),
                    path_file:' ',
                    content:valueinput,
                    type:'user'
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": Cookies.get("auth")
                    },
                }
            )
                .then(function (response2) {
                    getchat()
                    setvalueinput("")
                })
                .catch((err) => console.log(err))
        }else{
            axios.post(
                usersendchat(),
                {
                    username: Cookies.get("user"),
                    supervisors: ADMIN.id,
                    user: Cookies.get("user"),
                    path_file:' ',
                    content:valueinput,
                    type:'admin'
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": Cookies.get("auth")
                    },
                }
            )
                .then(function (response2) {
                    getchat()
                    setvalueinput("")
                })
                .catch((err) => console.log(err))
        }

    }
    return (
        <Fragment>
            <div className='scroll' style={{ paddingBottom: 10, overflow: "auto", height: '100%' }}>

                {roll !== 'user' ? <div className='chatNav' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <StringAvater name={'آیدین رضایی'} />
                                <p className='chatAvatarText'>
                                    آیدین رضایی
                                </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <p className='chatStuNumberText'>
                                    &nbsp;
                                    شماره دانشجویی
                                </p>
                                <p className='chatStuNumberText'>
                                    :99110016302007
                                </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <p className='chatPhoneNumberText'>
                                    &nbsp;
                                    شماره موبایل
                                </p>
                                <p className='chatPhoneNumberText'>
                                    :09038007960
                                </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <p className='chatEmailText'>
                                    &nbsp;
                                    ایمیل
                                </p>
                                <p className='chatEmailText'>
                                    :aidin@aidin.com
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                            <p className='chatProjectSubject'>
                                موضوع پروژه:
                            </p>
                            <p className='chatProjectSubjectText'>
                                &nbsp;
                                هوش مصنوعی در علم پزشکی
                            </p>
                        </div>
                    </div>
                </div> : ''}
                <div className='chatScroll'>
                    {
                        getchats ?
                            roll === 'user' ?
                                getchats.map(
                                    // "content": "salam ostad",
                                    // "path_file": " ",
                                    // "date": "2023-02-07 12:59:06",
                                    // "supervisors": "4",
                                    // "user": "99110016302007",
                                    // "type": "admin",
                                    // "status": "0"
                                    (item) => {
                                        return (
                                            <>
                                                {item.type === 'admin' ?
                                                    (<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 10, paddingRight: 10 }}>
                                                        <div className='stuChat'>
                                                            <div style={{ display: 'flex', padding: '5px' }}>
                                                                <p className='stuTypeChat'>
                                                                    {item.content}
                                                                </p>
                                                            </div>
                                                            {/* <hr />
                                                        <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                                            <p className='stuDownloadText'>
                                                                دانلود فایل آپلود شده توسط دانشجو
                                                            </p>
                                                            <Button>
                                                                دانلود
                                                            </Button>
                                                        </div> */}
                                                        </div>
                                                    </div>)
                                                    :
                                                    (<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', marginRight: 10, paddingLeft: 10 }}>
                                                        <StringAvater name={USER.username} />
                                                        <div className='teacherChat'>
                                                            <div style={{ display: 'flex', padding: '5px' }}>
                                                                <p className='stuTypeChat'>
                                                                    {item.content}
                                                                </p>
                                                            </div>
                                                            {/* <hr />
                                                        <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                                            <p className='stuDownloadText'>
                                                                دانلود فایل آپلود شده توسط دانشجو
                                                            </p>
                                                            <Button>
                                                                دانلود
                                                            </Button>
                                                        </div> */}
                                                        </div>
                                                    </div>)
                                                }
                                            </>
                                        )
                                    }


                                )
                                :
                                getchats.map(
                                    // "content": "salam ostad",
                                    // "path_file": " ",
                                    // "date": "2023-02-07 12:59:06",
                                    // "supervisors": "4",
                                    // "user": "99110016302007",
                                    // "type": "admin",
                                    // "status": "0"
                                    (item) => {
                                        return (
                                            <>
                                                {item.type === 'user' ?
                                                    (<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 10, paddingRight: 10 }}>
                                                        <div className='stuChat'>
                                                            <div style={{ display: 'flex', padding: '5px' }}>
                                                                <p className='stuTypeChat'>
                                                                    {item.content}
                                                                </p>
                                                            </div>
                                                            {/* <hr />
                                                        <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                                            <p className='stuDownloadText'>
                                                                دانلود فایل آپلود شده توسط دانشجو
                                                            </p>
                                                            <Button>
                                                                دانلود
                                                            </Button>
                                                        </div> */}
                                                        </div>
                                                    </div>)
                                                    :
                                                    (<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', marginRight: 10, paddingLeft: 10 }}>
                                                        <StringAvater name={ADMIN.username} />
                                                        <div className='teacherChat'>
                                                            <div style={{ display: 'flex', padding: '5px' }}>
                                                                <p className='stuTypeChat'>
                                                                    {item.content}
                                                                </p>
                                                            </div>
                                                            {/* <hr />
                                                        <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                                            <p className='stuDownloadText'>
                                                                دانلود فایل آپلود شده توسط دانشجو
                                                            </p>
                                                            <Button>
                                                                دانلود
                                                            </Button>
                                                        </div> */}
                                                        </div>
                                                    </div>)
                                                }
                                            </>
                                        )
                                    }


                                )
                            : ''
                    }



                </div>


            </div>

            <div style={{ display: 'flex', position: 'absolute', width: '100%', justifyContent: 'center', bottom: 10 }}>
                <div className='inputChatDiv' style={{ display: 'none', marginBottom: 28, background: 'white', width: 532, height: 66, bottom: 20, borderRadius: 10, justifyContent: 'space-between', position: 'fixed', alignItems: 'center' }}>
                    <div style={{ display: 'flex', width: '50%' }}>
                        <XMarkIcon style={{ width: 20, color: 'red' }} />
                    </div>
                    <div style={{ display: 'flex', width: '50%', justifyContent: 'space-around' }}>
                        <p style={{ fontSize: 18, color: '#707070' }}>
                            doc.txt
                        </p>
                        <p>
                            icon
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', position: 'absolute', width: '100%', justifyContent: 'center', bottom: 10 }}>
                <div className='inputChatDiv' style={{ display: 'flex', background: 'white', bottom: 20, borderRadius: 10, justifyContent: 'space-between', position: 'fixed', alignItems: 'center' }}>
                   <div onClick={send} >
                    
                     <PaperAirplaneIcon style={{color:'rgba(0, 165, 165, 0.5019607843)', width: 50, paddingRight: 10 }} />
                    </div>
                    <textarea
                        value={valueinput}
                        onChange={(e)=>setvalueinput(e.target.value)}
                        style={{ width: 500, borderStyle: 'none', padding: 10, outline: 'none', background: 'transparent', color: '#000', fontSize: 18 }}
                        type="text"
                        placeholder="یک متن تایپ کنید . . ."
                    ></textarea>
                    <PaperClipIcon style={{ width: 40, paddingLeft: 10 }} />
                </div>
            </div>
        </Fragment>
    );
};

export default Chat;