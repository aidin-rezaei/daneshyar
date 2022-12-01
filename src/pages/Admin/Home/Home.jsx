import Button from 'components/Button/Button';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Home.scss'
import StringAvater from 'components/StringAvater/StringAvater';
const Home = () => {
    return (
            <table className='Home__table'>
                <thead>
                    <tr>
                        <th>دانشجو</th>
                        <th>موضوع</th>
                        <th>شماره تلفن</th>
                        <th>ایمیل</th>
                        <th>مشاهده</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className="Home__table__name">
                            <StringAvater name="آیدین رضایی" />
                            آیدین رضایی
                        </div></td>
                        <td><div>
                            انتخاب پروژه
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
                        <td><div className="Home__table__name">
                            <StringAvater name="اشکان حسینی" />
                            اشکان محمدی
                        </div></td>
                        <td><div>
                            انتخاب پروژه
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
                        <td><div className="Home__table__name">
                            <StringAvater name="علی علیپور" />
                            علی علیپور
                        </div></td>
                        <td><div>
                            مهم
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
                        <td><div className="Home__table__name">
                            <StringAvater name="علی علیپور" />
                            علی علیپور
                        </div></td>
                        <td><div>
                            مهم
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

export default Home;