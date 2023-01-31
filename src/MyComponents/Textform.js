import React, {useState} from "react";
const Textform = () => {
    const [text, setText] = useState('Enter Text Here');
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let allText = text.toLowerCase();
        setText(allText);
    }
  return (
    <div>
      <div className="container">
        <div className="mb-3 mt-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>Enter Your Text Here</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <div>
            <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert To LowerCase</button>
        </div>
      </div>
    </div>
  );
};

export default Textform;
