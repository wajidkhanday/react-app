import React ,{useState} from 'react'

function UseStateHook() {
    const [myName , setMyName]= useState('wajid khanday');
   const changeName=()=>{
       setMyName('khanday wajid')
       
    }
  return (
    <div>
       <h1 className='text-danger mx-5 shadow-lg'>{myName}</h1>
       <button className='btn btn-info mx-5 shadow-lg p-2 ' onClick={changeName}>click me</button> 
    </div>
  )
}

export default UseStateHook