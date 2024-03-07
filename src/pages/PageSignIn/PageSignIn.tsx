import { useState } from 'react';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import './PageSignIn.css'

export default function PageSignIn() {
    const [inputValueEmail, setInputValueEmail] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')

 
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
                        inputClass = 'input-main'
                        inputType = 'email'
                        inputValue = {inputValueEmail}
                        setInputValue = {e => setInputValueEmail(e.target.value)}
                        ></Input>

                        <Input 
                        inputTitle = 'Password'
                        inputPlaceholder = 'Your password'
                        isDisabled = {false}
                        inputClass = 'input-main_without-margin'
                        inputType = 'password'
                        inputValue = {inputValuePassword}
                        setInputValue = {e => setInputValuePassword(e.target.value)}
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

