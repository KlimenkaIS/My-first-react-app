import './MediumCard.css';
import Like from '../../assets/Icon-Thumbs-Up.svg';
import Dislike from '../../assets/Icon-Thumbs-Down.svg';
import Bookmark from '../../assets/Bookmark.svg';
import More from '../../assets/More-Horizontal.svg';

export default function MediumCard({date, title, source}: {date:string, title:string, source:string}): any {
    return (
        <div className="medium-card-container">
            <img src={source} className="medium-card-container__image" alt=""/>

            <p className="medium-card-container__date">{date}</p>

            <h1 className="medium-card-container__title">{title}</h1>

            <div className="medium-card-icons">
                <div className="medium-card-icons-box">
                    <img src={Like} alt="Like" className="medium-card-icon"/>
                    <img src={Dislike} alt="Dislike" className="medium-card-icon"/>
                </div>

                <div className="medium-card-icons-box">
                    <img src={Bookmark} alt="Bookmark" className="medium-card-icon"/>
                    <img src={More} alt="More options" className="medium-card-icon"/>
                </div>
            </div>
        </div>
    );
}