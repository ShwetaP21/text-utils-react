import React, {useState} from 'react'

export default function Form(props) {
  const[text,setText] = useState('');
  const convertToUppercase = () =>
  {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase','success')
  }
  const convertToLowercase = () =>
  {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lower case','success')
  }
  const padStart = () =>
  {
    let newText =text.padStart(10,"-");
   setText(newText);
   props.showAlert('Added padding at start','success')
  }
  const padEnd = () =>
  {
    let newText =text.padEnd(10,"-");
    setText(newText);
    props.showAlert('Added padding at end','success')
  }
  const clearText = () =>
  {
    let newText = '';
    setText(newText);
    props.showAlert('Text has been cleared','success')
  }
  const handleOnChange = (event) =>
  {
    setText(event.target.value);
  }
  return (
    <div className="container" style={{color: props.mode ==='light'?'#a3a3a3':'white' }}>
     <h2> {props.title} </h2> 
     <div className="mb-3">
       <textarea className="form-control" value={text} id="textarea" onChange={handleOnChange} rows="10" style={{backgroundColor: props.mode ==='light'?'white':'grey' ,color: props.mode ==='light'?'grey':'white'}}></textarea>
     </div><center>
      <button type="button" className="btn btn-secondary" onClick= {convertToUppercase}>Convert to upper case </button> &nbsp;
      <button type="button" className="btn btn-secondary" onClick= {convertToLowercase}> Convert to lower case</button> &nbsp;
      <button type="button" className="btn btn-secondary" onClick= {padStart}> Padding at Start</button> &nbsp;
      <button type="button" className="btn btn-secondary" onClick= {padEnd}> Padding at End</button> &nbsp;
      <button type="button" className="btn btn-secondary " onClick= {clearText}> Clear Text </button> </center>
      <div className="container">
        <h2>Text summary</h2>
        <p> {text.length>0 ? text.trim().split(" ").length : 0} words {text.length} characters </p>
      </div>
      </div>
  )
}
