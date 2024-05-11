import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import About from './Components/About'
import Alert from './Components/Alert'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(""); //When we use the NUll we use the props.alert && then our work; so i use simple ("");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c3135"
      showAlert("Dark Mode has been Enabled", "light")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been Enabled", "dark")
    }
  }


  return (
    <>
      <Router>
        <Navbar title="LOGO" about="About" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" exact element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
        <Alert alert={alert} />
      </Router>
    </>
  )
}

export default App
