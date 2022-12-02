import './Loading.scss'
const Loading = () => {
    return (
        <div className='loading'>
            <div className="loading__spin3">
                <div className="loading__spin3__c1" />
                <div className="loading__spin3__c2" />
                <div className="loading__spin3__c3" />
            </div>
            <p>کمی صبر کنید...</p>
        </div>
    );
}

export default Loading;