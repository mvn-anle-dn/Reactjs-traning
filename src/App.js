import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <>
      <div className='screen'>
        <Navbar/>
        <Body/>
        <Footer/>
      </div>
      
    </>
    
  );
}

export default App;
