import './Loading.scss'
const Loading = () => {
    return (
        <div className='loading'>
            <div class="loading__spin3">
                <div class="loading__spin3__c1"></div>
                <div class="loading__spin3__c2"></div>
                <div class="loading__spin3__c3"></div>
            </div>
            <p>کمی صبر کنید...</p>
        </div>
    );
}

export default Loading;