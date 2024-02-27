import './Button.css';

interface IButton {
    children: string | number
    buttonStyle: string
}



export default function Button({children, buttonStyle}: IButton) {
    return (
        <>
        <div className='button-wrapper'>
            <button className={buttonStyle}>{children}</button>
        </div>
        </>
    );
}
