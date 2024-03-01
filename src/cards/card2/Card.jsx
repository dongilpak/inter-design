import './Card.css';
import DarkRiderCover from '../../assets/card2/dark_rider-cover.jpg';
import DarkRiderCharacter from '../../assets/card2/dark_rider-character.webp';
import DarkRiderTitle from '../../assets/card2/dark_rider-title.png';
import ForceMageCover from '../../assets/card2/force_mage-cover.jpg';
import ForceMageCharacter from '../../assets/card2/force_mage-character.webp';
import ForceMageTitle from '../../assets/card2/force_mage-title.png';

const Card = () => {
    return (
        <div className='body'>
            <div className='article'>
                <div className='wrapper'>
                    <img
                        src={DarkRiderCover}
                        alt='dark rider cover'
                        className='cover'
                    />
                </div>
                <img
                    src={DarkRiderTitle}
                    alt='dark rider title'
                    className='title'
                />
                <img
                    src={DarkRiderCharacter}
                    alt='dark rider character'
                    className='character'
                />
            </div>
            <div className='article'>
                <div className='wrapper'>
                    <img
                        src={ForceMageCover}
                        alt='force mage cover'
                        className='cover'
                    />
                </div>
                <img
                    src={ForceMageTitle}
                    alt='force mage title'
                    className='title'
                />
                <img
                    src={ForceMageCharacter}
                    alt='force mage character'
                    className='character'
                />
            </div>
        </div>
    );
};

export default Card;
