import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import { admingetusers, usergetposts } from 'api/api';
import axios from 'axios';
import Button from 'components/Button/Button';
import StringAvater from 'components/StringAvater/StringAvater';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './Users.scss'
const Users = () => {
    const [api, setapi] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const USER = useSelector(state => state.AdminData);
    const getusers = () => {
        axios.post(
            admingetusers(),
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
                const sortTable = response2.data.data.posts;
                console.log(sortTable);

                sortTable.sort((a, b) => {
                    if (a["username"] < b["username"]) {
                        return -1;
                    }
                    if (a["username"] > b["username"]) {
                        return 1;
                    }
                    return 0;
                });
                setapi(sortTable)
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getusers()
    }, [])
    const sendchat=(num)=>{
        dispatch({
            type: "Admin_Chat",
            value: num,
        })
        navigate('/admin/chat')
    }
    const ItemsBable = api.map((product) => (
        <tr key={product.id}>
            <td><div className="Users__table__name">
                <StringAvater name={product.username} />
                {product.username}
            </div></td>
            <td><div>
                {product.studentNumber}
            </div></td>
            <td><div>
                {product.phone}
            </div></td>
            <td><div>
                {product.email}
            </div></td>
            <td><div><Button click={()=>sendchat(product)}><ChatBubbleLeftIcon /></Button></div></td>
        </tr>
    ));
    return (
        <div className='scroll' style={{width:'100%',height:'100%',overflow:'auto'}}>

            <table className='Users__table'>
                <thead>
                    <tr>
                        <th>دانشجو</th>
                        <th>شماره دانشجویی</th>
                        <th>شماره تلفن</th>
                        <th>ایمیل</th>
                        <th>ارسال پیام</th>
                    </tr>
                </thead>
                <tbody>{ItemsBable}</tbody>
            </table>
        </div>

    );
}
export default Users;