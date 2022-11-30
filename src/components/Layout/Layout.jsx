import { adminMenu } from 'api/adminMenu';
import Button from 'components/Button/Button';
import { Bars3Icon } from '@heroicons/react/24/solid'
import './Layout.scss'
import { useState } from 'react';
import { Avatar } from '@mui/material';
const Layout = ({ children, roll }) => {
    const [openMenu, setopenMenu] = useState(false)
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

    return (
        <>
            <div className='sidebar'>
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
                                    <Button link={`${item.route}`}>{item.icon}{item.title}</Button>
                                </div>

                            </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='content__header'>
                    <div>
                        <Button click={() => { setopenMenu(!openMenu) }}>
                            <Bars3Icon />
                        </Button>
                    </div>
                    <h1 style={{ color: "#fff" }}>پیمن</h1>
                </div>
                <div className='content__body'>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;