import './DownNavigationBar.css'
import VectorPrev from '../../assets/Vector-Prev.svg'
import VectorNext from '../../assets/Vector-Next.svg'
import { posts } from '../../data';

export default function DownNavigationBar({withPagination}: {withPagination: boolean}) {
    return (
        <div className={withPagination ? 'dawn-navigation-bar-container_alt': 'dawn-navigation-bar-container'}>
            <div className="dawn-navigation-bar-side">

                <button className="dawn-navigation-bar-side__vector"><img src={VectorPrev} alt=""/></button>
                <div className='dawn-navigation-bar-side-wrapper'>
                    <button className="dawn-navigation-bar-side__title" style={{alignSelf: "start"}}>Prev</button>
                    <button className={withPagination ? "disabled" : 'dawn-navigation-bar-side__subtitle'}>{posts[4].title}</button>
                </div>

            </div>
            <ul className={withPagination ? "dawn-navigation-bar__pagination" : "disabled"}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>6</button>
            </ul>
            <div className="dawn-navigation-bar-side">

                <div className="dawn-navigation-bar-side-wrapper">
                    <button className="dawn-navigation-bar-side__title" style={{alignSelf: "end"}}>Next</button>
                    <button className={withPagination ? "disabled" :'dawn-navigation-bar-side__subtitle'} style={{textAlign: 'right', alignSelf: 'flex-end'}}>{posts[6].title}</button>
                </div>
                <button className="dawn-navigation-bar-side__vector"><img src={VectorNext} alt=""/></button>

            </div>
        </div>
    );
}

