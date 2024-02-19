import './LittleCard.css';
import Like from '../../assets/Icon-Thumbs-Up.svg';
import Dislike from '../../assets/Icon-Thumbs-Down.svg';
import Bookmark from '../../assets/Bookmark.svg';
import More from '../../assets/More-Horizontal.svg';

export default function LittleCard({date, title, source}: {date:string, title:string, source:string}) {
    return ( 
        <div className="little-card-container">
            <div className="little-card-content">
                <div className="little-card-content-left">
                    <p className="little-card-content-left__date">{date}</p>
                    <h1 className="little-card-content-left__title">{title}</h1>
                </div>

                <div className="little-card-content-right">
                    <img src={source} className="little-card-content-right__image" alt=""/>
                </div>
            </div>

            <div className="little-card-icons">
                <div className="little-card-icons-box">
                    <img src={Like} alt="Like" className="little-card-icon"/>
                    <img src={Dislike} alt="Dislike" className="little-card-icon"/>

                </div>

                <div className="little-card-icons-box">
                    <img src={Bookmark} alt="Bookmark" className="little-card-icon"/>
                    <img src={More} alt="More options" className="little-card-icon"/>
                </div>
            </div>
        </div>
    );
}