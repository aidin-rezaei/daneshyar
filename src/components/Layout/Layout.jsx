import { adminMenu } from 'api/adminMenu';
import Button from 'components/Button/Button';
import { Bars3Icon } from '@heroicons/react/24/solid'
import './Layout.scss'
import { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { Outlet, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
const Layout = ({ children, roll }) => {
    const dispatch = useDispatch();
    const [openMenu, setopenMenu] = useState(false)
    const MENU = useSelector(state => state.menu);
    useEffect(() => { setopenMenu(MENU) }, [MENU])

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
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    const location = useLocation();


    return (
        <>
            <div className={`sidebar ${openMenu ? 'active' : ''}`}>
                <div className={`sidebar__body ${openMenu ? 'active' : ''}`}>
                    <div className='sidebar__body__title'>
                        <Avatar {...stringAvatar('آیدین رضایی')} />
                        <p className='sidebar__body__title__username'>آیدین رضایی</p>
                    </div>
                    <div className='hrbox'></div>
                    <div className='sidebar__body__menu'>
                        {adminMenu.map((item, key) => {
                            return (<>
                                <div key={key} title={item.title}>
                                    <Button nodelay className={location.pathname === item.route ? "active" : ""} link={`${item.route}`}>{item.icon}{item.title}</Button>
                                </div>
                            </>
                            )
                        })}
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
                    <h1 style={{ color: "#fff" }}>پیمن</h1>
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