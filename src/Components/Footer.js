import React from 'react'

export default function Footer(props) {
  return (
     <div className="Footer" style={{color: props.mode ==='light'?'#737373':'white' }}>
     <hr/>
    
     <div className="Contact "> 
             Contact 
             <div className="d-flex justify-content-around">
     <div className="footer-in-left"style={{color: props.mode ==='light'?'#737373':'white' }}>
         Email <br/> 
         textutils.info@gmail.com
     </div>
     <div className="footer-in-right"style={{color: props.mode ==='light'?'#737373':'white' }}>
         Phone<br/>
         9999999999
     </div>
     </div>
     </div>
     <div className="footer-in-center">
          @Copyright- All Rights Reserved 
     </div>
     <hr/>
     </div>   
  )
}
