import './Archive.scss'
import imgs from 'assets/files/Archive.png'
import Button from 'components/Button/Button'
import pdf from 'assets/files/Archive.pdf'
import { useRef } from 'react'
const Archive = () => {
    const AElement = useRef();
    const downloadpdf = () => {
        AElement.current.setAttribute('download', 'نمونه پایان نامه خوارزمی');
        // const href = URL.createObjectURL(pdf);
        AElement.current.href = pdf;
        // aElement.setAttribute('href', href);
        AElement.current.setAttribute('target', '_blank');
        AElement.current.click();
        // URL.revokeObjectURL(href);
    }
    return (
        <div className='gproject'>
            <div>
                <img src={imgs} alt="" />
            </div>
            <p>
                فایل نمونه پروژه پایان نامه pdf را دانلود کنید و بخوبی مطالعه کنید
            </p>

            <Button click={downloadpdf}>
                دانلود
            </Button>
            <a href="" ref={AElement} ></a>
        </div>
    )
}
export default Archive