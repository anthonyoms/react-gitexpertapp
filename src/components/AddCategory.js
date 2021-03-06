import { useState } from "react"
import propTypes from 'prop-types';

const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        
        setInputValue(event.target.value)

    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {

            setCategorias(c => [inputValue,...c])

            setInputValue('');
            
        };

       
        
    };

    return (
        <form onSubmit = {handleSubmit}>

          <input 
            type = 'text'
            value = {inputValue}
            onChange = { handleInputChange }
          />
            
        </form>
    );
};

AddCategory.propTypes = {

    setCategorias: propTypes.func.isRequired

}

export default AddCategory;


