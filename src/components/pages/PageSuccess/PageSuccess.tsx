import './PageSuccess.css'
import Button from '../../Button/Button';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Title from '../../Title/Title';

export default function PageSuccess() {
    return ( 
        <>
            <Header isHeaderWithBanner={false}></Header>
            <div className="success-container">
                <div className="success-wrapper">
                    <Button buttonStyle='button-back-home'>Back to home</Button>
                    <Title withAltMargins = {true}>Success</Title>
                    <form className='success-form'>
                        <p className="success-title">Email confirmed.<br/>
                            Your registration is now completed</p>
                        <Button buttonStyle='button-main'>Go to home</Button>
                    </form>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

