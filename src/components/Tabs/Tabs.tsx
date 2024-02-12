import './Tabs.css';

export default function Tabs() {
    return(
        <div className='tabs-container'>
            <div className='tabs'>
                <button className='tabs__item tabs__item_border-color'>All</button>
                <button className='tabs__item tabs__item_hover'>My favorites</button>
                <button disabled className='tabs__item tabs__item_color'>Popular</button>
            </div>
        </div>
    )
}