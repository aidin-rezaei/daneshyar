import Button from 'components/Button/Button';
import CardG from 'components/CardG/CardG';
import Layout from 'components/Layout/Layout';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Home.scss'
const Home = () => {
    return (
        <Layout>
            <table className='Home__table'>
                <thead>
                    <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>موضوع</th>
                        <th>شماره تلفن</th>
                        <th>ایمیل</th>
                        <th>مشاهده</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div>آیدین رضایی</div></td>
                        <td><div>انتخاب پروژه</div></td>
                        <td><div>09038007960</div></td>
                        <td><div>aidin@aidin.aidin</div></td>
                        <td><div><Button><EyeIcon /></Button></div></td>
                    </tr>
                    <tr>
                        <td><div>اشکان محمدی</div></td>
                        <td><div>مهم</div></td>
                        <td><div>09038007960</div></td>
                        <td><div>aidin@aidin.aidin</div></td>
                        <td><div><Button><EyeIcon /></Button></div></td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    );
}

export default Home;