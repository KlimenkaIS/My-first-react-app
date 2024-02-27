import './Input.css'

interface IInput {
    inputTitle:string;
    inputPlaceholder:string;
    isDisabled:boolean;
    inputClass:string;
    inputType:string;
}
    


export default function Input({inputTitle, inputPlaceholder, isDisabled, inputClass, inputType}: IInput) {
    return ( 
    <>  
        <div className='input-wrapper'>
            <p className='input-name'>{inputTitle}</p>
            <input type={inputType} placeholder={inputPlaceholder} disabled={isDisabled} className={inputClass}/>
        </div>
    </>
    );
}
