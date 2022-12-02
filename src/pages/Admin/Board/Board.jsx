import React from 'react';
import './Board.scss';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/solid';
import Button from 'components/Button/Button';

const Board = () => {
    return (
        <div style={{ display: 'grid' }}>
            <div className='boardCard'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>
                        اعلانات امروز
                    </h1>
                    <h4>
                        1401/09/10
                    </h4>
                </div>
                <p>
                    دید همه‌جانبه به مدیریت کارها و کنترل پروژه داشته باشید. .
                </p>
                <div className='boardButtonDiv' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                    <Button sx={{ borderRadius: 50, marginLeft: 7, textAlign: 'center' }}>
                        <PencilSquareIcon style={{ width: 25 }} />
                    </Button>
                    <Button sx={{ borderRadius: 50, textAlign: 'center', width: 20, height: 50 }}>
                        <TrashIcon style={{ width: 25 }} />
                    </Button>
                </div>
            </div>
            <div className='boardCard'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>
                        اعلانات امروز
                    </h1>
                    <h4>
                        1401/09/10
                    </h4>
                </div>
                <p>
                    با تعریف اهداف کوتاه یا بلند مدت، دسته‌بندی کارها و تعیین سررسید بازدهی را افزایش دهی
                </p>
                <div className='boardButtonDiv' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                    <Button sx={{ borderRadius: 50, marginLeft: 7, textAlign: 'center' }}>
                        <PencilSquareIcon style={{ width: 25 }} />
                    </Button>
                    <Button sx={{ borderRadius: 50, textAlign: 'center' }}>
                        <TrashIcon style={{ width: 25 }} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Board;