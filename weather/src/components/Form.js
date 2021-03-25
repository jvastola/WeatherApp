
import React from 'react'
import styled from "styled-components";
const FormDiv = styled.form`
  width: 100%;
  padding: 60px 0;
  & > h1 {
    width: 100%;
    text-align: center;
    font-weight: 100;
    letter-spacing: 0.26em;
  }
  & > p {
    font-weight: 100;
    letter-spacing: 0.1em;
    font-size: 14px;
    text-align: center;
    padding-top: 40px;
  }
`;

const InputDiv = styled.div`
  width: 510px;
  margin: 70px auto 30px auto;
  display: block;
  & > input {
    border: none;
    border-radius: 9px;
    outline: none;
    font-family: "Helvetica", sans-serif;
    box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.2);
    margin: 0 10px;
    font-size: 80px;
    width: 80px;
    text-align: center;
    height: 76px;
    padding: 10px 0 10px 0px;
  }
`;
const useZipFields = () => {
  const [zipValues, setValue] = React.useState({
    zip1: "9",
    zip2: "2",
    zip3: "1",
    zip4: "1",
    zip5: "7"
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
        <FormDiv onSubmit={props.getWeather}>
          <h1>Weather</h1>
           <InputDiv>
           
          <input 
            type="text"
            maxLength="1"
            placeholder="9"
            name="zip1"
            onChange={handleChange} />
          <input 
            type="text"
            maxLength="1"
            placeholder="2"
            name="zip2"
            onChange={handleChange} />
          <input
            type="text"
            maxLength="1"
            placeholder="1"
            name="zip3"
            onChange={handleChange} />
          <input
            type="text"
            maxLength="1"
            placeholder="1"
            name="zip4"
            onChange={handleChange} />
          <input
            type="text"
            maxLength="1"
            placeholder="7"
            name="zip5"
            onChange={handleChange}
          />
          </InputDiv>
          <button style={{ display: "none" }}></button>
          <p>Enter your zipcode</p>
          </FormDiv>
      )
      }
    </div>
  );
};
export default Form