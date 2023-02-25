import './Projects.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Button from 'components/Button/Button';
import StringAvater from 'components/StringAvater/StringAvater';
import { useEffect, useState } from 'react';
import { getposts } from 'api/api';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import axios from 'axios';


const Projects = () => {
    const [users, serusers] = useState('')
    const USER = useSelector(state => state.AdminData);
    const getusers = () => {
        axios.post(
            getposts(),
            {
                username: Cookies.get("user"),
                id: USER.id,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": Cookies.get("auth")
                },
            }
        )
            .then(function (response2) {
                serusers(response2.data.data.posts)
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getusers()
        console.log(users);
    }, [])



    return (
        <div className='projects'>
            <div className='projectNav'>
                <div className='searchNavButton' style={{ display: 'flex' }}>
                    <input
                        style={{ width: 220, height: 40, borderStyle: 'solid', padding: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                        type="text"
                        placeholder="جستجو . . ."
                    />
                    <Button>
                        <MagnifyingGlassIcon style={{ width: 20 }} />
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ width: '100%' }}>
                        {users ?
                            users.map((output) => {
                                return(
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div className='projectCard' style={{ width: '60%' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, alignItems: 'center' }}>
                                                <div style={{ display: 'flex', width: '25%', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                    <StringAvater name={output.username} />
                                                    <div className='projectAvatarName'>
                                                        <p className='projectStudentName'>
                                                            {output.username}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='projectStuNumber'>{output.studentNumber}</p>
                                                </div>
                                                <div>
                                                    <p className='projectDateText'>{output.date}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div style={{ paddingTop: 7 }}>
                                                <p className='projectHeadText'>
                                                    {output.title}
                                                </p>
                                            </div>
                                            <div style={{ paddingBottom: 20 }}>
                                                <p className='projectDescriptionText'>
                                                    {output.discretion}
                                                </p>
                                            </div>
                                            <div className='projectButtonDiv' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Button className='button1'>
                                                    رد پروژه
                                                </Button>
                                                <Button className='button2'>
                                                    پیام به دانشجو
                                                </Button>
                                                <Button className='button3'>
                                                    مشاهده جزئیات
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;