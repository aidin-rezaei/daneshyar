import Button from 'components/Button/Button';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Home.scss'
import StringAvater from 'components/StringAvater/StringAvater';
const Home = () => {
    const api = [
        { id: 1, name: "محمد یوسفی", date: "2022/01/01", phone: "383-503-9548", subject: "انتخاب پروژه", email: "sadasd@asdas.com" },
        { id: 2, name: "علی اصغری", date: "2022/10/30", phone: "601-739-9156", subject: "انتخاب پروژه", email: "sadasd@asdas.com"  },
        { id: 3, name: "آیدین رضایی", date: "2022/09/04", phone: "931-130-3803", subject: "انتخاب پروژه", email: "sadasd@asdas.com"  },
        { id: 4, name: "بابک محمدی", date: "2022/08/15", phone: "851-654-0802", subject: "انتخاب پروژه", email: "sadasd@asdas.com"  },
        { id: 5, name: "یونس عباسی", date: "2022/02/08", phone: "863-931-5689", subject: "انتخاب پروژه", email: "sadasd@asdas.com"  },
    ];
    let sortTable = [...api];
    sortTable.sort((a, b) => {
          if (a["date"] > b["date"]) {
            return -1;
          }
          if (a["date"] < b["date"]) {
            return 1;
          }
          return 0;
      });
    console.log(sortTable);
    const ItemsBable = sortTable.map((product) => (
        <tr key={product.id}>
            <td><div className="Home__table__name">
                <StringAvater name={product.name} />
                {product.name}
            </div></td>
            <td><div>
                {product.subject}
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
            <td><div><Button><EyeIcon /></Button></div></td>
        </tr>
    ));
    return (
        <table className='Home__table'>
            <thead>
                <tr>
                    <th>دانشجو</th>
                    <th>موضوع</th>
                    <th>تاریخ</th>
                    <th>شماره تلفن</th>
                    <th>ایمیل</th>
                    <th>مشاهده</th>
                </tr>
            </thead>
            <tbody>{ItemsBable}</tbody>
        </table>

    );
}

export default Home;