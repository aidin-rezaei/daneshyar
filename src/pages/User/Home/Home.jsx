import React, { useEffect, useState } from 'react';
import './Home.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';
import { createbord, getbords } from 'api/api';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import axios from 'axios';

const Home = () => {
    const [modalAdd, setModalAdd] = useState(false);
    const [itemsBords, setItemsBords] = useState([]);
    const [discretion, setDiscretion] = useState("");
    const [title, setTitle] = useState("");
    const USER = useSelector(state => state.AdminData);
    const dords = () => {
        axios.post(
            getbords(),
            {
                username: USER.email,
                id: USER.id
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": Cookies.get("auth")
                },
            }
        )
            .then(function (response2) {
                setItemsBords(response2.data.data.posts)
                // navigate('/admin/home')
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        dords()
    }, [])
    const addbords = () => {
        if (title !== '' && discretion !== '') {
            axios.post(
                createbord(),
                {
                    username: USER.email,
                    title: title,
                    discretion: discretion,
                    path_file: ' ',
                    supervisors: USER.id
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
                    dords()
                    setModalAdd(false)
                    setTitle('')
                    setDiscretion('')
                })
                .catch((err) => console.log(err))


        }
    }

    return (
        <div className='bords'>
            {
                modalAdd ?
                    <Modal setstate={setModalAdd}>
                        <div className='content__modal__addbord'>
                            <Input changev={setTitle} value={title} label='عنوان ' />
                            <Textarea changev={setDiscretion} value={discretion} label='متن' />
                            <Button click={addbords}>ایجاد</Button>
                        </div>
                    </Modal>
                    : ""
            }

            <div className='boardNav' style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='searchNavButton' style={{ display: 'flex' }}>
                    <input
                        className='boardSearchInput'
                        style={{ width: 300, height: 40, borderStyle: 'solid', padding: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                        type="text"
                        placeholder="جستجو . . ."
                    />
                    <Button sx={{ width: 70, height: 40, padding: 0 }} className='button5'>
                        <MagnifyingGlassIcon style={{ width: 20 }} />
                    </Button>
                </div>
                <div >
                    <Button sx={{ width: 130, height: 40, whiteSpace: 'nowrap', padding: 0 }} click={() => setModalAdd(true)} className='boardAddButton'>
                        اضافه کردن
                    </Button>
                </div>
            </div>
                {
                    itemsBords.map(items => (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='boardCard' style={{ width: '60%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p style={{ fontSize: 20 }}>
                                        {items.title}
                                    </p>
                                    <p style={{ fontSize: 18 }}>
                                        {items.date}
                                    </p>
                                </div>
                                <p style={{ fontSize: 18 }}>
                                    {items.discretion}
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
                    ))
                }
        </div>
    );
};

export default Home;