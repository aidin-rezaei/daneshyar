import React from 'react';
import './Chat.scss';
import StringAvater from 'components/StringAvater/StringAvater';
import { PaperClipIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import Button from 'components/Button/Button';
import { useState } from 'react';


const Chat = () => {
    const [openDrop, setOpenDrop] = useState(false)
    const dropDown = () => {
        setOpenDrop(true)
    }

    return (
        <Fragment>
            <div style={{ paddingBottom: 10 }}>
                <div className='chatNav' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center' }}>
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
                </div>

                {/* mobileResponsive */}
                {/* <div className='chatNavMobile' >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <StringAvater name={'آیدین رضایی'} />
                            </div>
                            <div style={{ paddingRight: 5 }}>
                                <p style={{ fontSize: 12, whiteSpace: 'nowrap' }}>
                                    آیدین رضایی
                                </p>
                                <p style={{ fontSize: 12, whiteSpace: 'nowrap' }}>
                                    موضوع پروژه:
                                    <span style={{ fontSize: 11, color: '#22BDD5', whiteSpace: 'nowrap', paddingRight: 3 }}>
                                        هوش مصنوعی در علم پزشکی
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <ChevronDownIcon style={{ width: 20 }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', position:'absolute', width:'100%', top:50}} >
                    <div className='chatDropDown'>
                        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', paddingRight:47 }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <p style={{ fontSize: 12 , fontWeight:'bold', direction:'ltr' }}>
                                      :  شماره دانشجویی
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontSize: 12 }}>
                                    &nbsp;
                                        9915116302007
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', paddingRight:47}}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <p style={{ fontSize: 12, fontWeight:'bold', direction:'ltr' }}>
                                       : شماره موبایل
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontSize: 12 }}>
                                    &nbsp;
                                        09030007960
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', paddingRight:47, paddingBottom:8  }}>
                                <p style={{ fontSize: 12, fontWeight:'bold', direction:'ltr' }}>
                                   : ایمیل
                                </p>
                                <p style={{ fontSize: 12 }}>
                                &nbsp;
                                    aidin@aidin.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='chatScroll'>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 10, paddingRight: 10 }}>
                        <div className='stuChat'>
                            <div style={{ display: 'flex' }}>
                                <p className='stuTypeChat'>
                                    سلام آقای باغستانی
                                </p>
                            </div>
                            <hr />
                            <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                <p className='stuDownloadText'>
                                    دانلود فایل آپلود شده توسط دانشجو
                                </p>
                                <Button>
                                    دانلود
                                </Button>
                            </div>
                        </div>
                        <StringAvater name={'آیدین رضایی'} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', marginRight: 10, paddingLeft: 10 }}>
                        <StringAvater name={'آیدین رضایی'} />
                        <div className='teacherChat'>
                            <div style={{ display: 'flex' }}>
                                <p className='stuTypeChat'>
                                    سلام پسرم
                                </p>
                            </div>
                            <hr />
                            <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                <p className='stuDownloadText'>
                                    دانلود فایل آپلود شده توسط دانشجو
                                </p>
                                <Button>
                                    دانلود
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobileResponsive */}
                {/* <div className='chatScrollMobile'>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', paddingLeft:5 }}>
                        <div className='stuChatMobile'>
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: 12 }}>
                                    سلام آقای باغستانی
                                </p>
                            </div>
                            <hr />
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                <p style={{ fontSize: 10, whiteSpace: 'nowrap' }}>
                                    دانلود فایل آپلود شده توسط دانشجو
                                </p>
                                <Button sx={{ width: 60, padding: 0, fontSize: 10, height: 25 }}>
                                    دانلود
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%', paddingRight:5 }}>
                        <div className='teacherChatMobile'>
                            <div style={{ display: 'flex' }}>
                                <p style={{ fontSize: 12 }}>
                                    سلام پسرم
                                </p>
                            </div>
                            <hr />
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                <p style={{ fontSize: 10, whiteSpace: 'nowrap' }}>
                                    دانلود فایل آپلود شده توسط دانشجو
                                </p>
                                <Button sx={{ width: 60, padding: 0, fontSize: 10, height: 25 }}>
                                    دانلود
                                </Button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <div style={{ display: 'flex', position: 'absolute', width: '100%', justifyContent: 'center', bottom: 10 }}>
                <div className='inputChatDiv' style={{ display: 'flex', marginBottom: 28, background: 'white', width: 532, height: 66, bottom: 20, borderRadius: 10, justifyContent: 'space-between', position: 'fixed', alignItems: 'center' }}>
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
                <div className='inputChatDiv' style={{ display: 'flex', background: 'white', height: 40, bottom: 20, borderRadius: 10, justifyContent: 'space-between', position: 'fixed', alignItems: 'center' }}>
                    <input
                        style={{ width: 500, height: 70, borderStyle: 'none', padding: 10, outline: 'none', background: 'transparent', color: '#BCBCBC', fontSize: 18 }}
                        type="text"
                        placeholder="یک متن تایپ کنید . . ."
                    />
                    <PaperClipIcon style={{ width: 30, paddingLeft: 10 }} />
                </div>
            </div>
        </Fragment>
    );
};

export default Chat;