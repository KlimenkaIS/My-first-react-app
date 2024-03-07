import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title';
import './PageRegistrationConfirmation.css'

export default function PageRegistrationConfirmation() {
    return ( 
        <>
            <div className="page-reg-confirm-container">
                <Header isHeaderWithBanner={false}></Header>

                <div className="page-reg-confirm-wrapper">
                    <Button buttonStyle='button-back-home'>Back to home</Button>

                    <Title withAltMargins={true}>Registration Confirmation</Title>   

                    <form className='page-reg-confirm-form'>
                        <p className="page-reg-confirm-title">Please activate your account with the activation <br/> link in the email <b>example@gmail.com.</b> <br/> Please, check your email</p>
                        <Button buttonStyle='button-main'>Go to home</Button>
                    </form> 

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

