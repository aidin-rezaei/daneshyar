import { EyeIcon } from '@heroicons/react/24/solid';
import Button from 'components/Button/Button';
import Layout from 'components/Layout/Layout';
import StringAvater from 'components/StringAvater/StringAvater';
import './Users.scss'
const Users = () => {
    return (
        <table className='Users__table'>
            <thead>
                <tr>
                    <th>دانشجو</th>
                    <th>شماره دانشجویی</th>
                    <th>شماره تلفن</th>
                    <th>ایمیل</th>
                    <th>مشاهده</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div className="Users__table__name">
                        <StringAvater name="آیدین رضایی" />
                        آیدین رضایی
                    </div></td>
                    <td><div>
                        99110016302007
                    </div></td>
                    <td><div>
                        09038007960
                    </div></td>
                    <td><div>
                        aidin@aidin.aidin
                    </div></td>
                    <td><div><Button><EyeIcon /></Button></div></td>
                </tr>
                <tr>
                    <td><div className="Users__table__name">
                        <StringAvater name="اشکان حسینی" />
                        اشکان محمدی
                    </div></td>
                    <td><div>
                        99110016302007
                    </div></td>
                    <td><div>
                        09038007960
                    </div></td>
                    <td><div>
                        aidin@aidin.aidin
                    </div></td>
                    <td><div><Button><EyeIcon /></Button></div></td>
                </tr>
                <tr>
                    <td><div className="Users__table__name">
                        <StringAvater name="علی علیپور" />
                        علی علیپور
                    </div></td>
                    <td><div>
                        99110016302007
                    </div></td>
                    <td><div>
                        09038007960
                    </div></td>
                    <td><div>
                        aidin@aidin.aidin
                    </div></td>
                    <td><div><Button><EyeIcon /></Button></div></td>
                </tr>
                <tr>
                    <td><div className="Users__table__name">
                        <StringAvater name="علی علیپور" />
                        علی علیپور
                    </div></td>
                    <td><div>
                        99110016302007
                    </div></td>
                    <td><div>
                        09038007960
                    </div></td>
                    <td><div>
                        aidin@aidin.aidin
                    </div></td>
                    <td><div><Button><EyeIcon /></Button></div></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Users;