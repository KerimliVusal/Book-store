import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useForm } from 'react';

export default function Formi(inputfields,setnputFields) {
  const [inputFields, setInputFields] = useState([
    { name: '', age: '' }
  ]);
  const { register,handleSubmit }=useForm();

  const handLi = (event,index) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
   
 }
 const addFields = (event,data) => {
    let newfield = { name: '', age: '' }
    setInputFields([...inputFields, newfield]);

}
const Submit = (e,data) => {
    e.preventDefault();
    // console.log(inputFields);
    axios.post("https://jsonplaceholder.typicode.com/posts",data)
      .then(res=>
        console.log(res.data)
      )
    
}

const removeFields = (index) => {
    let data = [...inputFields];
    if(index>0){
    data.splice(index, 1)
    setInputFields(data)}
}
  return (
    <div className="App">
        <h2>Dynamic Form</h2>
      <form  onSubmit={handleSubmit(Submit)}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input  onChange={(event)=>handLi(event,index)}
                {...register("name", { required: "Please enter your first name." })}
                // name='name'
                // placeholder='Name'
              
               
              />
              <input onChange={(event)=>handLi(event,index)}
               {...register("age", { required: "Please enter your first age." })}
                // name='age'
                // placeholder='Age'
              />
              <button onClick={addFields}>Add More..</button>
              <button onClick={() => removeFields(index)}>Remove</button>
             </div>
            
          )
        })}
         <button onSubmit={Submit}>Submit</button>
        
      </form>
    </div>
  );
}

