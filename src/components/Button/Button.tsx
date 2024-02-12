import './Button.css';

interface IButton {
    text: string | number
    clickFunction: () => void
}



export default function Button({text, clickFunction}: IButton) {
    return (
        <>
        <button onClick={clickFunction} className='myButton'>{text}</button>
        </>
    );
}
