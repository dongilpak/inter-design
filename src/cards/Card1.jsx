/* eslint-disable react/no-unescaped-entities */
import './Card1.css';
const Card1 = () => {
    return (
        <article className='card1'>
            <div className='card-container'>
                <div className='thumb'></div>
                <div className='infos'>
                    <h2 className='title'>
                        NEW YORK CITY <span className='flag'></span>
                    </h2>
                    <div className='date'>NOVEMBER 2-4</div>
                    <div className='seats'>SEATS REMAINING: 2</div>
                    <p className='txt'>
                        Join us for our Live Infinity Session in beautiful New
                        York City. This is a 3 day intensive workshop where
                        you'll learn how to become a better version of....
                    </p>
                    <h3 className='details'>EVENT DETAILS</h3>
                </div>
            </div>
        </article>
    );
};

export default Card1;
