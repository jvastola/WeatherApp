
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
            `input[name=zip-${parseInt(fieldIndex, 10) + 1}]`
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
const Form = () => {
  const { handleChange } = useZipFields();

  return (
      <div>
    { <>
      <input
        type="text"
        name="zip-1"
        onChange={handleChange} />
      <input
        type="text"
        name="zip-2"
        onChange={handleChange} />
      <input
        type="text"
        name="zip-3"
        onChange={handleChange} />
        <input
        type="text"
        name="zip-4"
        onChange={handleChange} />
        <input
        type="text"
        name="zip-5"
        onChange={handleChange} 
        />
    {console.log(useZipFields)}
    </>}
    <button > onSubmit={this.props.getWeather}</button>
    </div>
  );
};
export default Form