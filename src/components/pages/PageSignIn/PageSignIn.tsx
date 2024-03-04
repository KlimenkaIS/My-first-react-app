import Button from '../../Button/Button';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Input from '../../Input/Input';
import Title from '../../Title/Title';
import './PageSignIn.css'

export default function PageSignIn() {
    return (  
        <>
            <Header isHeaderWithBanner = {false}></Header>

            <div className="sign-in-container">
                <div className="sign-in-wrapper">
                    <Button buttonStyle='button-back-home'>Back to home</Button>
                    <Title withAltMargins = {true}>Sign in</Title>
                    
                    <form className='sign-in-form'>
                        <Input 
                        inputTitle = 'Email'
                        inputPlaceholder = 'Your email'
                        isDisabled = {false}
                        inputClass = 'input-email'
                        inputType = 'Email'
                        ></Input>

                        <Input 
                        inputTitle = 'Password'
                        inputPlaceholder = 'Your password'
                        isDisabled = {false}
                        inputClass = 'input-password'
                        inputType = 'password'
                        ></Input>

                        <Button buttonStyle='button-forgot-password'>Forgot password?</Button>

                        <Button buttonStyle='button-main'>Sign In</Button>
                        
                        <div className="is-have-an-account-link">Don't have an account? <a href='#'>Sing Up</a></div>
                    </form>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

