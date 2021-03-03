
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
      const [fieldName, fieldIndex] = name.split("-");
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
        { !this.props.zip1 && (
          <div onSubmit={this.props.getWeather}>
           <input
           type="text"
           name="zip1"
           onChange={handleChange} />
         <input
           type="text"
           name="zip2"
           onChange={handleChange} />
         <input
           type="text"
           name="zip3"
           onChange={handleChange} />
           <input
           type="text"
           name="zip4"
           onChange={handleChange} />
           <input
           type="text"
           name="zip5"
           onChange={handleChange} 
           />
          <button style={{display:"none"}}></button>
          </div>
          )
        }
    </div>
  );
};
export default Form