import './Title.css';

export default function Title({children, withAltMargins}: {children: string, withAltMargins: boolean}) {
    return (
        <>
        <h1 className={withAltMargins ? 'title-with-alt-margins': 'title'}>{children}</h1>
        </>
    )
}