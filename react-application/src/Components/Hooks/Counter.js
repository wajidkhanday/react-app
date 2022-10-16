import React, { useState } from 'react'

function UseState() {
const [count,setcount]= useState(0);

const handleIncreament=()=>{
    setcount(count+1);
}
const handleDecreament=()=>{
    setcount(count-1);
}

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
        <h2>COUNTER APP</h2>
        <h3 className=' text-primary mx-5' >{count}</h3>
        <button className='btn btn-danger  ' onClick={handleIncreament}>increament</button>
        <button className='btn btn-warning mx-5' onClick={handleDecreament}>decreament</button>
</div>
<div className='col-md-4'></div>
</div>
    </div>
  )
}

export default UseState