import './Button.css';

interface IButton {
    children: string | number
    buttonStyle: string
}



export default function Button({children, buttonStyle}: IButton) {
    return (
        <>
        <button className={buttonStyle}>{children}</button>
        </>
    );
}
