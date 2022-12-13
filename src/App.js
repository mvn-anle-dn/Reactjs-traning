import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import Clock from './Clock/Clock';

function App() {
  const timer = [
    {time: 15} , 
    {time: 30} ,
    {time: 45},
    {time: 60}
  ]

  function pathBody (){
    console.log(window.location.pathname == '/home');
    if(window.location.pathname == '/home') {
      return (
        <>
        <div className='Body-2'>
          { timer.map(x => 
          <Clock key = {x.time} second = {x.time} />
          ) }
        </div>
        </>
      )

    } else {
       return <Body/>
    }
  }

  return (
    <>
      <div className='screen'>
        <Navbar/>
          { pathBody() }
        <Footer/>
      </div>
      
    </>
    
  );
}

export default App;
