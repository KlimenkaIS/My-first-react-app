import './PageSignUp.css'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import { useState } from 'react';

export default function PageSignUp() {
    const [inputValueEmail, setInputValueEmail] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const [inputValueName, setInputValueName] = useState('')
    const [inputValueConfirmPassword, setInputValueConfirmPassword] = useState('')

    return ( 
        <>
            <Header isHeaderWithBanner = {false}></Header>

            <div className="sign-in-container">
                <div className="sign-in-wrapper">
                    <Button buttonStyle='button-back-home'>Back to home</Button>
                    <Title withAltMargins = {true}>Sign Up</Title>
                    
                    <form className='sign-in-form'>
                        <Input 
                        inputTitle = 'Name'
                        inputPlaceholder = 'Your name'
                        isDisabled = {false}
                        inputClass = 'input-main'
                        inputType = 'text'
                        inputValue = {inputValueName}
                        setInputValue = {e => setInputValueName(e.target.value)}
                        ></Input>
                        
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
                        inputClass = 'input-main'
                        inputType = 'password'
                        inputValue = {inputValuePassword}
                        setInputValue = {e => setInputValuePassword(e.target.value)}
                        ></Input>

                        <Input 
                        inputTitle = 'Confirm password'
                        inputPlaceholder = 'Confirm password'
                        isDisabled = {false}
                        inputClass = 'input-main_without-margin'
                        inputType = 'password'
                        inputValue = {inputValueConfirmPassword}
                        setInputValue = {e => setInputValueConfirmPassword(e.target.value)}
                        ></Input>
                        
                        <Button buttonStyle='button-main'>Sign Up</Button>
                        
                        <div className="is-have-an-account-link">Already have an account? <a href='#'>Sign In</a></div>
                    </form>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

