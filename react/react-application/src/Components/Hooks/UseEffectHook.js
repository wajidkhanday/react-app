import React from 'react'

function UseEffectHook() {
  return (
    <div className='container-fluid my-5'>
    <div className='row'>
        <div className='col-sm-6 mx-auto text-danger shadow-lg p-3'>
            <h1 className='text-center'>TODO APP</h1>
            <div className='row'>
                <div className='col-sm-9'>
       <input type='text' className='form-control' placeholder='enter here' value={text} onChange={handleChange}/>
            </div>
            <div className='col-2'>
             <button className='btn btn-info px-5' onClick={handleAdd}>ADD</button>
            </div>
            <div className='container-fluid'>
                <ul className='list-unstyled row m-5'>
               {items.map((value,i)=>{
                return <Page value={value}/>
               }
               )}
    
               
                     



                </ul>
            </div>
            </div>
        </div>
    </div>
 </div>
  )
}

export default UseEffectHook