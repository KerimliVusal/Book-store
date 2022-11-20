import './butto.css';
import  React ,{useState} from 'react';
import axios from 'axios';
export default function Button (){
  const url="https://jsonplaceholder.typicode.com/posts"
  const[data,setData]=useState({
    name: "",
    email: "",
    password: ""
  })
  const addFields = () => {
    let newfield = { name: '', age: '' }

    setData([...data, newfield])
}
  
  // function Signup(){
  //   let senice={email,password,name}
  //   console.log(senice)
  
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function submit(e){
    e.preventDefault();
    axios.post(url,{
      name:data.name,
      email:data.email,
      password:data.password
    })
    .then(res=>{
      console.log(res.data)
    })

  }
  return(
    <div className='ava'>
      <div className="fet">
      <h2>Sign in</h2>
      <form onSubmit={(e)=>submit(e)}>
      <input onChange={(e)=>handle(e)} type="text" value={data.name}  id='name'   placeholder="name"/>
      <input onChange={(e)=>handle(e)} type="email" value={data.email}  id='email' placeholder="email"/>
      <input onChange={(e)=>handle(e)}  type="password" value={data.password}  id='password'  placeholder="password"/>
      {/* <button  id='bre' >Sign up</button> */}
      <button onClick={addFields} >add</button>

      </form>
      </div>
    </div>
  )
}
