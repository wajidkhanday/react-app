import React from 'react'; 
import User from './Components/ConditionalRendering/User';
import Form from './Components/Form/Form';
import Valid from './Components/Form/Valid';
import Pagination from './Components/Pagination/Pagination';
import Nav from './Components/Nav';
import Routing from './Components/routing/Routing';
import Footer from './Footer';
import SideBar from './SideBar';

function App() {
  return (
   <div>
<Nav />
<Routing />
 <Footer /> 


   {/*<User/>
   <Form />
   <Valid/>
    // <Pagination />*/}


   </div>
  );
}

export default App;
