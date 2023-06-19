import { IInput } from "../../types";
// import './input.css';

const Input = ({ type, id, name, value, isRequired, callback, isValid, isEmpty, isEnable, placeholder }: IInput) => {
	return (
		
		<input 
            // className={className}
            id={id}
            name={name}
            value ={value}
            type={type}
            placeholder={placeholder='Search'}
            data-empty={isEmpty}
            data-valid={isValid}
            required={isRequired}
            disabled={isEnable}
            onChange={(e) => { callback(e) }}
            
        />
	
	 )
	
};
export default Input;