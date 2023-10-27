import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RopaSection from './components/RopaSection';
import Ropa from './components/lista';
import Navbar from './components/navbar';
function App() {
  return (
    <>
      
      
      <BrowserRouter>
        <main>
        <Navbar></Navbar>
          <Routes>
            <Route path='/ropa/:id' element= {<RopaSection/>}></Route>
            <Route path='/' element= {<Ropa />}></Route>
            <Route path="*" element={<h2>Page not found</h2>} />

          </Routes>
        </main>
      </BrowserRouter>
      
    </>
  );
}
export default App;


/* Link to 
<Route path= "*" element = {<h2>page not found<h2/>}></Route>
<Route path= "/:id" element = {<h2>page not found<h2/>}></Route>
//en el parametro 
const params  = useParams()
params.id //
//si se pone path= "/blog?:id el ? es para que sea opcional
//para api  */