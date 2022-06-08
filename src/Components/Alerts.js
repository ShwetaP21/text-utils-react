import React from 'react'

function Alerts(props) {

  return (
    
     props.alert &&
     <center><div className= {`alert alert-${props.alert.type} alert-dismissible fade show w-25 `} role="alert"  >
          <strong>  {props.alert.type} </strong>:{props.alert.msg}
       </div></center>
  )
}

export default Alerts
