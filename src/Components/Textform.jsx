import React from 'react'
import { useState } from 'react'

const Textform = (props) => {
    const handleUpClickUp = () => {
        setText(text.toUpperCase());
        props.showAlert("This Text is Converted in Upper Case Successfully", "success")
    }
    const handleUpClickLo = () => {
        props.showAlert("This Text is Converted in Lower Case Successfully", "success")
        setText(text.toLowerCase());
    }
    const handleOnChange = (e) => {
        setText(e.target.value);

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();// is method sy copy howa text appear nahi ho ga
        props.showAlert("This Text is Copy Successfully", "success")
    }
    const handleClear = () => {
        props.showAlert("Clear Successfully", "success")
        setText("");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces  Clear Successfully", "success")
    }
    const [text, setText] = useState('');
    return (
        <>

            <div className={`container my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>


                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea placeholder='Enter Text here' className={`form-control`} style={props.mode === "dark" ? { backgroundColor: "#2c3135", color: "white" } : { backgroundColor: "white", color: 'black' }} value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" disabled={text.length === 0} onClick={handleUpClickUp} className="btn btn-primary  my-1">Upper Case</button>
                <button type="submit" disabled={text.length === 0} onClick={handleUpClickLo} className="btn btn-primary mx-4 my-1">Lower Case</button>
                <button type="submit" disabled={text.length === 0} onClick={handleCopy} className="btn btn-primary mx-4 my-1">Copy Text</button>
                <button type="submit" disabled={text.length === 0} onClick={handleClear} className="btn btn-primary mx-4 my-1">Clear</button>
                <button type="submit" disabled={text.length === 0} onClick={handleExtraSpace} className="btn btn-primary mx-4 my-1">Remove Extra Spaces</button>
            </div>
            <div className="container" style={props.mode == "dark" ? { backgroundColor: "dark", color: "white" } : { backgroundColor: "dark", color: 'black' }}>
                <h1>Your Text Summary </h1>
                <p>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} words {text.length} characters</p>
                {/* <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words {text.length} characters</p>   the balsapce waly word ko count nai krta tha mtlb k jb b koi word enter kr k enter kro tw next word nai count krta tha  */}
                <p>{text.split(".").filter((e) => { return e.length !== 0 }).length} Sentance  </p>
                <p>{text.split("\n").filter((e) => { return e.length !== 0 }).length} Paragraphs </p>
                <p>{0.008 * text.split(" ").filter((e) => { return e.length !== 0 }).length} Minutes Read</p>
                <h2>Prereview</h2>
                <p className='border rounded p-4'>{text} {text.length > 0 ? text : "Nothing to preveiw"}</p>
            </div >
        </>
    )
}

export default Textform
