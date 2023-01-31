import './App.css';
import Header from './MyComponents/Header';
import './responsive.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NewPage from './MyComponents/NewPage';
import Footer from './MyComponents/Footer';
import ContactPage from './MyComponents/ContactPage';
import Submit from './MyComponents/Submit';
import States from './MyComponents/States';


function App() {
  return (
    <div>
      <BrowserRouter basename="/portfolio"> 
      
        <Routes>
          <Route exact path='/portfolio' element={<Header/>}/>
          <Route path='/new_page' element={<NewPage/>}/>
          <Route path='/contact_page' element={<ContactPage/>}/>
          <Route path='/submit' element={<Submit/>}/>
          <Route path='/states' element={<States/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
