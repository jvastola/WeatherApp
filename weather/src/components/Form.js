
import React from 'react'
const useZipFields = () => {
  const [zipValues, setValue] = React.useState({
    zip1: "",
    zip2: "",
    zip3: "", 
    zip4: "",
    zip5: ""
  });

  return {
    handleChange: e => {
      const { value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("p");
      if (value.length >= 1) {
      
        if (parseInt(fieldIndex, 10) < 5) {
        
          const nextSibling = document.querySelector(
            `input[name=zip${parseInt(fieldIndex, 10) + 1}]`
          );
        
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }
      setValue({
        ...value,
        [`zip${fieldIndex}`]: value
      });
    }
  };
};
const Form = (props) => {
  const { handleChange } = useZipFields();

  return (
      <div>
        { !props.zip1 && (
          <div onSubmit={props.getWeather}>
           <input
           type="text"
           maxLength="1"
           placeholder="5"
           name="zip1"
           onChange={handleChange} />
         <input
           type="text"
           maxLength="1"
           placeholder="5"
           name="zip2"
           onChange={handleChange} />
         <input
           type="text"
           maxLength="1"

           placeholder="5"
           name="zip3"
           onChange={handleChange} />
           <input
           type="text"
           maxLength="1"

           placeholder="5"
           name="zip4"
           onChange={handleChange} />
           <input
           type="text"
           maxLength="1"
           placeholder="5"
           name="zip5"
           onChange={handleChange} 
           />
          <button style={{display:"none"}}></button>
          <p>Enter your zipcode</p>
          </div>
          )
        }
    </div>
  );
};
export default Form