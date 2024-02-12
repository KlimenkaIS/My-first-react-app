import './Title.css';
interface ITitle {
    text: string
}
export default function Title({text}: ITitle) {
    return (
        <>
        <span className='title'>{text}</span>
        </>
    )
}