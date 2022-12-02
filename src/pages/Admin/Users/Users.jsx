import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import Button from 'components/Button/Button';
import StringAvater from 'components/StringAvater/StringAvater';
import './Users.scss'
const Users = () => {
    const api = [
        { id: 1, name: "محمد یوسفی", date: "99110016302007", phone: "383-503-9548", subject: "انتخاب پروژه", email: "sadasd@asdas.com" },
        { id: 2, name: "علی اصغری", date: "99110016302007", phone: "601-739-9156", subject: "انتخاب پروژه", email: "sadasd@asdas.com" },
        { id: 3, name: "آیدین رضایی", date: "99110016302007", phone: "931-130-3803", subject: "انتخاب پروژه", email: "sadasd@asdas.com" },
        { id: 4, name: "بابک محمدی", date: "99110016302007", phone: "851-654-0802", subject: "انتخاب پروژه", email: "sadasd@asdas.com" },
        { id: 5, name: "یونس عباسی", date: "99110016302007", phone: "863-931-5689", subject: "انتخاب پروژه", email: "sadasd@asdas.com" },
    ];
    let sortTable = [...api];
    sortTable.sort((a, b) => {
        if (a["name"] < b["name"]) {
            return -1;
        }
        if (a["name"] > b["name"]) {
            return 1;
        }
        return 0;
    });
    console.log(sortTable);
    const ItemsBable = sortTable.map((product) => (
        <tr key={product.id}>
            <td><div className="Users__table__name">
                <StringAvater name={product.name} />
                {product.name}
            </div></td>
            <td><div>
                {product.date}
            </div></td>
            <td><div>
                {product.phone}
            </div></td>
            <td><div>
                {product.email}
            </div></td>
            <td><div><Button><ChatBubbleLeftIcon /></Button></div></td>
        </tr>
    ));
    return (
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

    );
}
export default Users;