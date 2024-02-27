import './Title.css';

export default function Title({children}: {children: string}) {
    return (
        <>
        <h1 className='title'>{children}</h1>
        </>
    )
}