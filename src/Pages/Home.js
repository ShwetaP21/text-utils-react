import Form from './../Components/Form'
import Footer from './../Components/Footer';
import Navbar from './../Components/Navbar';
import Alerts from './../Components/Alerts';
import React,{useState} from 'react';
function Home() {
    const [mode,setMode] = useState('light');
    const [alert,setAlert] = useState(null);
    const showAlert = (message,type)=>
    {
      setAlert({
       msg: message,
       type: type
      }
       )
       setTimeout (()=>
       {
         setAlert(null);
       },1000
       )
    }
    const toggleMode=()=>
    {
      if (mode === 'light')
      {
      setMode('dark');
      document.body.style.backgroundColor ='#525252';
      showAlert('Dark mode enabled','success')
      }
      else
      { 
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('Dark mode disabled','success')
      } 
    }
  return (
    <div className="body"  >
    <Navbar name = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Alerts alert={alert}/></div>
    <div className="container">
<Form mode={mode} title= "Enter your text here" showAlert={showAlert}/>
</div>
<Footer mode={mode}/>
</div>
  )
}

export default Home