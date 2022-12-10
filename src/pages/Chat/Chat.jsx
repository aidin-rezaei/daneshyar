import React from 'react';
import './Chat.scss';
import StringAvater from 'components/StringAvater/StringAvater';
import { PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import Button from 'components/Button/Button';

const Chat = () => {
    return (
        <Fragment>
            <div style={{ paddingBottom: 10 }}>
                <div className='chatNav' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <StringAvater name={'آیدین رضایی'} />
                                <p style={{ fontSize: 18, whiteSpace: 'nowrap', paddingRight: 5 }}>
                                    آیدین رضایی
                                </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <p style={{ fontSize: 18 }}>
                                    شماره دانشجویی
                                </p>
                                <p style={{ fontSize: 18 }}>
                                    :99110016302007
                                </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <p style={{ fontSize: 18 }}>
                                    شماره موبایل
                                </p>
                                <p style={{ fontSize: 18 }}>
                                    :09038007960
                                </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <p style={{ fontSize: 18 }}>
                                    ایمیل
                                </p>
                                <p style={{ fontSize: 18 }}>
                                    :aidin@aidin.com
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                            <p style={{ fontSize: 18 }}>
                                موضوع پروژه:
                            </p>
                            <p style={{ fontSize: 18, color: '#22BDD5' }}>
                                هوش مصنوعی در علم پزشکی
                            </p>
                        </div>
                    </div>
                </div>
                <div className='chatScroll'>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 10 }}>
                        <div className='stuChat'>
                            <div style={{ display: 'flex', paddingBottom: 90 }}>
                                <p style={{ fontSize: 16 }}>
                                    سلام آقای باغستانی
                                </p>
                            </div>
                            <hr />
                            <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                <p style={{ fontSize: 18 }}>
                                    دانلود فایل آپلود شده توسط دانشجو
                                </p>
                                <Button>
                                    دانلود
                                </Button>
                            </div>
                        </div>
                        <StringAvater name={'آیدین رضایی'} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', marginRight: 10 }}>
                        <StringAvater name={'آیدین رضایی'} />
                        <div className='teacherChat'>
                            <div style={{ display: 'flex', paddingBottom: 90 }}>
                                <p style={{ fontSize: 16 }}>
                                    سلام پسرم
                                </p>
                            </div>
                            <hr />
                            <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                <p style={{ fontSize: 18 }}>
                                    دانلود فایل آپلود شده توسط دانشجو
                                </p>
                                <Button>
                                    دانلود
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <div className='stuChat'>
                            <div style={{ display: 'flex', paddingBottom: 90 }}>
                                <p style={{ fontSize: 16 }}>
                                    سلام آقای باغستانی
                                </p>
                            </div>
                            <hr />
                            <div className='chatDownloadButton' style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, alignItems: 'center' }}>
                                <p style={{ fontSize: 18 }}>
                                    دانلود فایل آپلود شده توسط دانشجو
                                </p>
                                <Button>
                                    دانلود
                                </Button>
                            </div>
                        </div>
                        <StringAvater name={'آیدین رضایی'} />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', position: 'absolute', width: '100%', justifyContent: 'center', bottom: 10 }}>
                <div className='inputChatDiv' style={{ display: 'flex', marginBottom: 28, background: 'white', width: 532, height: 66, bottom: 20, borderRadius: 10, justifyContent: 'space-between', position: 'fixed', alignItems:'center' }}>
                    <div style={{ display: 'flex', width:'50%' }}>
                        <XMarkIcon style={{ width: 20, color: 'red' }} />
                    </div>
                    <div style={{display:'flex', width:'50%', justifyContent:'space-around'}}>
                        <p style={{fontSize:18, color:'#707070'}}>
                            doc.txt
                        </p>
                        <p>
                            icon
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', position: 'absolute', width: '100%', justifyContent: 'center', bottom: 10 }}>
                <div className='inputChatDiv' style={{ display: 'flex', background: 'white', height: 40, bottom: 20, borderRadius: 10, justifyContent: 'space-between', position: 'fixed', alignItems:'center' }}>
                    <input
                        style={{ width: 500, height: 70, borderStyle: 'none', padding: 10, outline: 'none', background: 'transparent', color:'#BCBCBC', fontSize:18 }}
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