import React,{useState} from "react";
export const name = "banana";

function Form(props){

  const [formInput, setFormInput] = useState({});


  const handleChange = (e) => {
    setFormInput({...formInput,[e.target.name]: e.target.value})
    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formInput);

    
  }
  return(
    <>
    <form class = "bg-green-400 container mx-auto rounded-lg box-border h-48 py-8 px-8" onSubmit={onSubmit}>
    <label>Location: </label>
    <input id = 'locationInput' placeholder= 'Enter a location' name = "location" onChange = {handleChange}/>
    <br/>
      <br/>

      <label>Minimum Customers: </label>
    <input class = 'averages' placeholder= 'Enter an Integer' name = "minimumCustomers" onChange = {handleChange}/>

    <label>Maximum Customers: </label>
    <input class = 'averages' placeholder= 'Enter an integer' name = "maximumCustomers" onChange = {handleChange}/>

    <label>Average Cookies Per Sale: </label>
    <input class = 'averages' placeholder= 'Enter an integer' name = "averageCookiesPerSale" onChange = {handleChange}/>
    <br/>
    <br/>

<button id = "submitted" type='submit'>Submit</button>

    </form>
    </>
)
}
export default Form;