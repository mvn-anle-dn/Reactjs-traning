import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import Clock from './Clock/Clock';
import CountDown from './Clock/CountDown/CountDown';

function App() {
  const timer = [
    {time: 15} , 
    {time: 30} ,
    {time: 45},
    {time: 60}
  ]

  function pathBody (){

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

    } else if (window.location.pathname == '/product') {
       return <Body/>
    }else {
      return (
        <>
        
          { 
            <CountDown/>
          }
        </>
      )
    }
  }

  return (
    <>
      <div className='screen'>
        {/* <Navbar/>
          { pathBody() }
        <Footer/> */}
        <div className='CountDown-body'>  
        <CountDown/>
        </div>
       
      </div>
      
    </>
    
  );
}

export default App;
