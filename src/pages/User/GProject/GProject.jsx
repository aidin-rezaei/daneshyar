import './GProject.scss'
import imgs from 'assets/files/proj.png'
import Button from 'components/Button/Button'
import pdf from 'assets/files/gproject.pdf'
import { useRef } from 'react'
const GProject = () => {
    const AElement = useRef();
    const downloadpdf = ()=>{
        AElement.current.setAttribute('download', 'راهنمای-نگارش-پایان-نامه ');
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
            <p>فایل pdf راهنمای نگراش پایانامه را دانلود کنید و بخوبی مطالعه کنید</p>

            <Button click={downloadpdf}>
                دانلود
            </Button>
            <a href="" ref={AElement} ></a>
        </div>
    )
}
export default GProject