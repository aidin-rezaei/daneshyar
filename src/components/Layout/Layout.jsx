import { adminMenu } from 'api/adminMenu';
import Button from 'components/Button/Button';
import { Bars3Icon } from '@heroicons/react/24/solid'
import './Layout.scss'
import { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { Outlet, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getadmin, getuser } from 'api/api';
import axios from 'axios';
import Cookies from 'js-cookie';
import { userMenu } from 'api/userMenu';
const Layout = ({ children, roll }) => {
    const dispatch = useDispatch();
    const [openMenu, setopenMenu] = useState(false)
    const MENU = useSelector(state => state.menu);
    const ADMIN = useSelector(state => state.AdminData);
    const USER = useSelector(state => state.userData);
    
    useEffect(() => { setopenMenu(MENU) }, [MENU])
    const fungetdata = ()=>{
        if (roll === "user") {
            axios.post(
                getuser(),
                {
                    studentNumber: Cookies.get("user"),
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": Cookies.get("auth")
                    },
                }
            )
                .then(function (response2) {
                    // console.log(response2);
                    const data = response2.data.data.user[0];
                    // console.log(data);
                    dispatch({
                        type: "SET_USER_DATA",
                        value: {
                            email: data.email,
                            phone: data.phone,
                            studentNumber: data.studentNumber,
                            supervisor: data.supervisor,
                            username: data.username
                        },
                    })
    
                })
                .catch((err) => console.log(err))
        }else{
            axios.post(
                getadmin(),
                {
                    username: Cookies.get("user"),
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": Cookies.get("auth")
                    },
                }
            )
                .then(function (response2) {
                    // console.log(response2);
                    const data = response2.data.data.admin[0];
                    // console.log(data);
                    dispatch({
                        type: "SET_ADMIN_DATA",
                        value: {
                            email: data.email,
                            phone: data.phone,
                            id: data.id,
                            username: data.username,
                        },
                    })
    
                })
                .catch((err) => console.log(err))
        }
    }
    useEffect(() => {
        fungetdata()
    })
    // console.log(USER);
    const stringToColor = (string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }
    const stringAvatar = (name) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ').length <1? name.split(' ')[1][0]:''}`,
        };
    }
    const location = useLocation();

    // const MODAL = useSelector(state => state.Modal);
    return (
        <>
            {/* {  MODAL?<Modal title={"ایجاد اعلان"}>hello</Modal>:""  } */}
            <div className={`sidebar ${openMenu ? 'active' : ''}`}>
                <div className={`sidebar__body ${openMenu ? 'active' : ''}`}>
                    <div className='sidebar__body__title'>
                        <Avatar {...stringAvatar(roll==='user'?USER.username:ADMIN.username)} />
                        <p className='sidebar__body__title__username'>{roll==='user'?USER.username:ADMIN.username}</p>
                    </div>
                    <div className='hrbox'></div>
                    <div className='sidebar__body__menu'>
                        {roll === 'user' ?
                            userMenu.map((item, key) => {
                                return (<>
                                    <div key={key} title={item.title}>
                                        <Button nodelay className={location.pathname === item.route ? "active" : ""} link={`${item.route}`}>{item.icon}{item.title}</Button>
                                    </div>
                                </>
                                )
                            })
                            :
                            adminMenu.map((item, key) => {
                                return (<>
                                    <div key={key} title={item.title}>
                                        <Button nodelay className={location.pathname === item.route ? "active" : ""} link={`${item.route}`}>{item.icon}{item.title}</Button>
                                    </div>
                                </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='clickOuterSidebar' onClick={() => { dispatch({ type: "TOGGLE_SIDEBAR_MENU" }) }} >
                </div>
            </div>

            <div className='content'>
                <div className='content__header'>
                    <div>
                        <Button click={() => { dispatch({ type: "TOGGLE_SIDEBAR_MENU" }) }}>
                            <Bars3Icon />
                        </Button>
                    </div>
                    <h1 style={{ color: "#fff" }} >پیمن</h1>
                </div>
                <div className='content__body'>
                    {children}
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;