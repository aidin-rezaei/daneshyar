import { useEffect, useState } from 'react';
import './Home.scss';
import {  usergetbords } from 'api/api';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import axios from 'axios';

const Home = () => {
    const [itemsBords, setItemsBords] = useState([]);
    const USER = useSelector(state => state.userData);
    const dords = () => {
        axios.post(
            usergetbords(),
            {
                username: USER.studentNumber,
                id: USER.supervisor
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": Cookies.get("auth")
                },
            }
        )
            .then(function (response2) {
                setItemsBords(response2.data.data.bords)
                // navigate('/admin/home')
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        dords()
    },[])
    // const addbords = () => {
    //     if (title !== '' && discretion !== '') {
    //         axios.post(
    //             createbord(),
    //             {
    //                 username: USER.email,
    //                 title: title,
    //                 discretion: discretion,
    //                 path_file: ' ',
    //                 supervisors: USER.id
    //             },
    //             {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data",
    //                     "Authorization": Cookies.get("auth")
    //                 },
    //             }
    //         )
    //             .then(function (response2) {
    //                 console.log(response2);
    //                 dords()
    //                 setModalAdd(false)
    //                 setTitle('')
    //                 setDiscretion('')
    //             })
    //             .catch((err) => console.log(err))


    //     }
    // }

    return (
        <div className='bords'>

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
                            </div>
                        </div>
                    ))
                }
        </div>
    );
};

export default Home;