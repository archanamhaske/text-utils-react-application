import React, { useState} from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");//usign usestate hook we have creating text to uppcase convert 
  // application and here we have used two event is onclick and onchange
  const convertToupperCase = () =>{
    //console.log("Uppercase was clicked" + text);
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success");
     }
     const convertToloverCase = () =>{
      //console.log("Uppercase was clicked" + text);
      setText(text.toLowerCase());
      props.showAlert("Converted to toLowerCase","success");
       }
       const reverseText = () =>{
         setText(text.split("").reverse().join(""));
         props.showAlert("Text has been reversed","success");
       }
       const copyToClipboard = () => {
       var text = document.getElementById("myBox").value;
        //text.select();
        navigator.clipboard.writeText(text);  
        props.showAlert("Copied to clipboard","success");

       }
       const extraSpaceRemove = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been removed","success");
 
        }
       const removeText = () =>{
        let textmsg=" ";
         setText(textmsg);
         props.showAlert("Text has been cleared","success");
       }
     const haddleonchange = (event) => {
       //console.log("haddleonchange was clicked" + text);
       setText(event.target.value);
     }

  return (
    <>
      <div className="container my-3"  >
        <div className="mb-3">
          <h4>{props.heading}</h4>
          <textarea className="form-control" value={text} onChange={haddleonchange} id="myBox" rows="8"></textarea>
        </div>
         <button className="btn btn-primary mx-2 my-2" onClick={convertToupperCase}>Convert To Uppercase</button>
         <button className="btn btn-primary mx-2 my-2" onClick={convertToloverCase}>Convert To case</button>
         <button className="btn btn-primary mx-2 my-2" onClick={reverseText}>Reverse Text</button>
         <button className="btn btn-primary mx-2 my-2" onClick={extraSpaceRemove}>Remove Extra Space</button>
         <button className="btn btn-primary mx-2 my-2" onClick={removeText}>Clear</button>
         <button className="btn btn-primary mx-2 my-2" onClick={copyToClipboard}>Copy To Clipboard</button>
      </div>
      <div className="container my-3"  >
        <h5>Your Text Summary Here..</h5>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p> 
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h4>Preview</h4>

        <h6>{text.length>0?text:"Enter something in the textbox above to preview it here"}</h6>
      </div>
     
    </>
  );
}
