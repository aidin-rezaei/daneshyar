import React from 'react';
import './Board.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Button from 'components/Button/Button';

const Board = () => {
    return (
        <div>
            <div className='boardNav' style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <div className='searchNavButton' style={{ display: 'flex', width:'50%' }}>
                    <input
                        style={{ width: 220, height: 40, borderStyle: 'solid', padding: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                        type="text"
                        placeholder="جستجو . . ."
                    />
                    <Button sx={{ width: 20 }} className='button5'>
                        <MagnifyingGlassIcon style={{ width: 20 }} />
                    </Button>
                </div>
                <div style={{display:'flex', width:'50%'}}>
                <Button className='button4'>
                    اضافه کردن
                </Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                <div className='boardCard' style={{ width: '60%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: 20 }}>
                            اعلانات امروز
                        </p>
                        <p style={{ fontSize: 18 }}>
                            1401/09/10
                        </p>
                    </div>
                    <p style={{ fontSize: 18 }}>
                        دید همه‌جانبه به مدیریت کارها و کنترل پروژه داشته باشید. .
                    </p>
                    <div className='boardButtonDiv' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                        <Button className='deleteButton'>
                            پاک کردن
                        </Button>
                        <Button className='editButton'>
                            ویرایش
                        </Button>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='boardCard' style={{ width: '60%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: 20 }}>
                            اعلانات امروز
                        </p>
                        <p style={{ fontSize: 18 }}>
                            1401/09/10
                        </p>
                    </div>
                    <p style={{ fontSize: 18 }}>
                        دید همه‌جانبه به مدیریت کارها و کنترل پروژه داشته باشید. .
                    </p>
                    <div className='boardButtonDiv' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                        <Button className='deleteButton'>
                            پاک کردن
                        </Button>
                        <Button className='editButton'>
                            ویرایش
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;