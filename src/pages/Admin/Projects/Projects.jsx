import './Projects.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Button from 'components/Button/Button';
import StringAvater from 'components/StringAvater/StringAvater';


const Projects = () => {
    const users = [
        { id: 1, name: "آیدین رضایی", date: "2022/01/01", stuNumber: "383-503-9548", subject: "هوش مصنوعی", description: 'دید همه‌جانبه به مدیریت کارها و کنترل پروژه داشته باشید.' },
        { id: 2, name: "محمد یوسفی", date: "2022/01/01", stuNumber: "347-503-9548", subject: "هوش مصنوعی", description: 'دید همه‌جانبه به مدیریت کارها و کنترل پروژه داشته باشید.' },
        { id: 3, name: "علی اصغری", date: "2022/10/30", stuNumber: "601-739-9156", subject: "هوش مصنوعی", description: 'دید همه‌جانبه به مدیریت کارها و کنترل پروژه داشته باشید.' },
        { id: 4, name: "بابک محمدی", date: "2022/08/15", stuNumber: "851-654-0802", subject: "هوش مصنوعی", description: 'دید همه‌جانبه به مدیریت کارها و کنترل پروژه داشته باشید.' },
        { id: 5, name: "یونس عباسی", date: "2022/02/08", stuNumber: "863-931-5689", subject: "هوش مصنوعی", description: 'دید همه‌جانبه به مدیریت کارها و کنترل پروژه داشته باشید.' },
    ];

    let sortUsers = [...users];
    sortUsers.sort((a, b) => {
        if (a["date"] > b["date"]) {
            return -1;
        }
        if (a["date"] < b["date"]) {
            return 1;
        }
        return 0;
    });

    const ItemsUsers = sortUsers.map((output) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='projectCard' style={{ width: '60%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, alignItems: 'center' }}>
                    <div style={{ display: 'flex', width: '25%', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <StringAvater name={output.name} />
                        <div className='projectAvatarName'>
                            <p className='projectStudentName'>
                                {output.name}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className='projectStuNumber'>{output.stuNumber}</p>
                    </div>
                    <div>
                        <p className='projectDateText'>{output.date}</p>
                    </div>
                </div>
                <hr />
                <div style={{ paddingTop: 7 }}>
                    <p className='projectHeadText'>
                        {output.subject}
                    </p>
                </div>
                <div style={{ paddingBottom: 20 }}>
                    <p className='projectDescriptionText'>
                        {output.description}
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
    ));

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
                        {ItemsUsers}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;