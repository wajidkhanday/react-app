import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../../Home'
import SideBar from '../../SideBar'
import Form from '../Form/Form'
import Pagination from '../Pagination/Pagination'
import TodoApp from '../Todoapp/TodoApp'
import Counter from '../Hooks/Counter'

import UseStateHook from '../Hooks/UseStateHook'
import UseEffectHook from '../Hooks/UseEffectHook'
function Routing() {
  return (
    <div>
    <Routes>
        <Route path='home' element={<Home />} />
        <Route path='pagination' element={<Pagination />} />
        <Route path='form' element={<Form />} />
        <Route path='sidebar' element={<SideBar />} />
        <Route path='todoapp' element={<TodoApp />} />
        <Route path='counter' element={<Counter />} />
        <Route path='usestatehook' element={<UseStateHook />} />
        <Route path='useeffecthook' element={<UseEffectHook />} />

    
    </Routes>
    </div>
  )
}

export default Routing