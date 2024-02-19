import './BigCard.css';
import Like from '../../assets/Icon-Thumbs-Up.svg';
import Dislike from '../../assets/Icon-Thumbs-Down.svg';
import Bookmark from '../../assets/Bookmark.svg';
import More from '../../assets/More-Horizontal.svg';

export default function BigCard({date, title, description, source}: {date:string, title:string, description:string, source:string}): any {
    return (
        <div className="big-card-container">

            <div className="big-card-content">
                <div className="big-card-content-left">
                    <p className="big-card-content-left__date">{date}</p>
                    <h1 className="big-card-content-left__title">{title}</h1>
                    <p className="big-card-content-left__text">{description}</p>
                </div>

                <div className="big-card-content-right">
                    <img src={source} className="big-card-content-right__image" alt=""/>
                </div>
            </div>

            <div className="big-card-icons">
                <div className="big-card-icons-box">
                    <img src={Like} alt="Like" className="big-card-icon"/>
                    <img src={Dislike} alt="Dislike" className="big-card-icon"/>

                </div>

                <div className="big-card-icons-box">
                    <img src={Bookmark} alt="Bookmark" className="big-card-icon"/>
                    <img src={More} alt="More options" className="big-card-icon"/>
                </div>
            </div>

        </div>
    );
}