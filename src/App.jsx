import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import arrow from './assets/arrow.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
<div className="row">
<div className="col-md-10 offset=md-1">
<div className="row">
<div className="col-md-5 register-left">
<img src={arrow}/>
<h3>join us</h3>
       
<p>Subscribe Easy Tutorials Youtube Channel to watch more
videos</p>
<button type="button" className="btn btn-primary">About Us</button>
</div>
<div className="col-md-7 register-right">
<h2>Register Here</h2>
<div className="register-form"></div>
<div className="form-group">
  <input type="text" className="form-control" placeholder="Name"></input>
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Username"></input>
</div>
<div className="form-group">
<input type="email" className="form-control"placeholder="Email"></input>
</div>
<div className="form-group">
<input type="password" className="form-control"placeholder="Password"></input>
</div>
<button type="button" className="btn btn-primary">Register</button>
</div>
</div>
</div> 
</div>
    </div>

    </>
  )
}

export default App
