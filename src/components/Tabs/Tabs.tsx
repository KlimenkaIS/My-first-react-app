import './Tabs.css';

export default function Tabs() {
    return(
        <div className='tabs-container'>
            <div className='tabs'>
                <button className='tabs__item tabs__item_border-color tabs__item tabs__item_hover'>All</button>
                <button className='tabs__item tabs__item_hover'>My favorites</button>
                <button disabled className='tabs__item tabs__item_color tabs__item tabs__item_hover'>Popular</button>
            </div>
        </div>
    )
}