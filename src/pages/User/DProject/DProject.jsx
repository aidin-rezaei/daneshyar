import './DProject.scss'
import imgs from 'assets/files/DProject.png'
import Button from 'components/Button/Button'
import pdf from 'assets/files/gproject.pdf'
import { useRef } from 'react'
const DProject = () => {
    const AElement = useRef();
    const downloadpdf = () => {
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
            <p style={{textAlign:'center'}}>
                فایل دفترجه پروپوزال را دانلود و سپس پرینت کنید 
                <br/>
                آن را پر کنید و به سرپرست پروژه تحویل دهید

            </p>

            <Button click={downloadpdf}>
                دانلود
            </Button>
            <a href="" ref={AElement} ></a>
        </div>
    )
}
export default DProject