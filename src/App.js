import logo from './logo.svg';
import './App.css';
import Myform from './components/floating_form';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <Myform></Myform>
        <div id="overlay"></div>
        <img className="bg" src = "./phishdemobackground.png" />
        {/* <div>
            <div className="login-popup">
                <form className="theform">
                    <div><button className="signupbtn">הרשמה</button></div>
                    <div className="couple">
                    <div><label>שם פרטי</label>
                    <input name="firstName" 
                    type="text"
                    placeholder="שם פרטי"
                   />
                    </div>

                    <div><label>שם משפחה</label><input name="lastname" 
                    placeholder="שם משפחה"
                    type="text"/>
                    </div>
                    </div>
 
                    <div className="couple">
                    <div><label>מייל עבודה</label><input name="email" 
                    placeholder="מייל עבודה"
                    type="email"/>
                    </div>

                    <div><label>שם חברה</label><input name="company" 
                    placeholder="שם חברה"
                    type="text"/>
                    </div>
                    </div>

                    <div className="couple">
                    <div><label>סיסמה</label><input name="password" 
                    placeholder="סיסמה"
                    type="password"
                    />
                    </div>

                    <div><label>אשר סיסמה</label><input name="verifyPassword" 
                    placeholder="אשר סיסמה"
                    type="password"
                    />
                    </div>
                    </div>

                    <button className="submitbtn"  value="להרשמה"> הרשמה</button>
                   
                </form>
            </div>
            </div> */}
            
      </body>
    </div>
  );
}

export default App;
