import React, { Component } from "react";
import './form.css';

import { signup, writeUserData } from "./firebaseconnection";

const regMsg = 'אנא המתן...'

export default class Myform extends React.Component {

    state = {
        firstName: "",
        nameError:"",
        lastname: "",
        lastnameError:"",
        email: "",
        emailError:"",
        company: "Siraj Technologies",
        password: "",
        passwordError:"",
        verifyPassword: "",
        verifyError:"",
        regMsg: 'הרשמה',
        disableSub: true,
        checkboxError:""
    }

    change = e => {

        this.setState({ [e.target.name]: e.target.value });
    };

    formConfirmed = () =>{
        var res = true
        if(this.state.firstName === ""){res=false; this.setState({nameError: "נא להזין שם פרטי"});}
        if(this.state.lastname === "") {this.setState({lastnameError: "נא להזין שם משפחה"});}
        if(this.state.email === "") {this.setState({emailError: "נא להזין כתובת מייל"});}
        if(this.state.password === "") {this.setState({passwordError: "נא להזין סיסמה"});}
        return res;

        //check if any errors exist return false
        // if((this.state.nameError === "")&&
        // (this.state.lastnameError === "")&&
        // (this.state.emailError === "")&&
        // (this.state.passwordError === "")&&
        // (this.state.verifyError === "")&&
        // (this.state.checkboxError === "")){
        //     return true;
        // }
        // else{
        //     return false;
        // }
    };

    mySubmit = e => {
        e.preventDefault();
        // alert(this.formConfirmed());
        
       
        if(this.formConfirmed()){
        if(document.getElementById('checkbox-sub').checked 
        
        // && (this.state.nameError === "")&&
        // (this.state.lastnameError === "")&&
        // (this.state.emailError === "")&&
        // (this.state.passwordError === "")&&
        // (this.state.verifyError === "")&&
        // (this.state.checkboxError === "")

        // && (document.getElementsByName('firstName') !== "שם פרטי")
        // && (document.getElementsByName('firstName') !== "")
        ){

        this.setState({
            regMsg
        })
        setTimeout(() => {
            window.location.href = 'https://www.htzone.co.il/'
        }, 1500);
        const { regMsg:_, ...userDetails } = this.state

        writeUserData(userDetails);
        //signup(this.email, this.password);
        }
        else{
            this.setState({checkboxError: "חובה לאשר"});
        }
    }
    };


    nameBlur = e =>{
        if(e.target.value === ""){
            // console.log("ERROR");
            this.setState({nameError: "נא להזין שם פרטי"});
        }
        else{
            // console.log("ALL GOOD");
            this.setState({nameError: ""});
        }
    };

    lastnameBlur = e =>{
        if(e.target.value === ""){
            // console.log("ERROR");
            this.setState({lastnameError: "נא להזין שם משפחה"});
        }
        else{
            // console.log("ALL GOOD");
            this.setState({lastnameError: ""});
        }
    };

    emailBlur = e =>{
        if(e.target.value === ""){
            // console.log("ERROR");
            this.setState({emailError: "נא להזין כתובת מייל"});
        }
        else{
            // console.log("ALL GOOD");
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(e.target.value.match(mailformat)){
                this.setState({emailError: ""});
            }
            else{
                this.setState({emailError: "כתובת מייל אינה תקינה"});
            }
        }
    };

    passwordBlur = e =>{
        if(e.target.value === ""){
            // console.log("ERROR");
            this.setState({passwordError: "נא להזין סיסמה"});
        }
        else{
            // console.log("ALL GOOD");
            this.setState({passwordError: ""});
        }
    };

    verifyBlur = e =>{
        if(e.target.value !== this.state.password){
            // console.log("ERROR");
            this.setState({verifyError: "סיסמה אינה תואמת"});
        }
        else{
            // console.log("ALL GOOD");
            this.setState({verifyError: ""});
        }
    };

    butAble = e =>{
        this.setState({checkboxError: ""});
        // this.formConfirmed();
        // if(this.state.disableSub){
        //     this.setState({disableSub: false});
        // }
        // else{
        //     this.setState({disableSub: true});

        // }
       
    };

    render() {
        return (
            <div>
                <div className="form-loader">
                    <div className="login-popup">
                        <form className="theform" onSubmit={this.mySubmit}>
                            <div><button className="signupbtn">הרשמה</button></div>
                            <div className="couple">
                                <div><label>שם פרטי</label><input name="firstName"
                                    placeholder="שם פרטי"
                                    value={this.state.firstName}
                                    onChange={e => this.change(e)}
                                    onBlur={e=>this.nameBlur(e)} 
                                    // required
                                    />
                                    <div>
                                        <span className="errors" value={this.state.nameError}>{this.state.nameError}</span>
                                    </div>
                                    

                                </div>

                                <div><label>שם משפחה</label><input name="lastname"
                                    placeholder="שם משפחה"
                                    value={this.state.lastname}
                                    onChange={e => this.change(e)}
                                    onBlur={this.lastnameBlur} 
                                    // required
                                    />
                                    <div>
                                        <span className="errors" value={this.state.lastnameError}>{this.state.lastnameError}</span>
                                    </div>
                                </div>
                            </div>


                            <div className="couple">
                                <div><label>מייל עבודה</label><input name="email"
                                    placeholder="מייל עבודה"
                                    value={this.state.email}
                                    onChange={e => this.change(e)}
                                    onBlur={this.emailBlur} />
                                    <div>
                                        <span className="errors" value={this.state.emailError}>{this.state.emailError}</span>
                                    </div>
                                </div>

                                <div><label>שם חברה</label><input name="company"
                                    placeholder="שם חברה"
                                    value={this.state.company}
                                    onChange={e => this.change(e)} />
                                    {/* <div>
                                        <span className="errors" value={this.state.nameError}>{this.state.nameError}</span>
                                    </div> */}
                                </div>
                            </div>


                            <div className="couple">
                                <div><label>סיסמה</label><input name="password"
                                    placeholder="סיסמה"
                                    type="password"
                                    value={this.state.password}
                                    onChange={e => this.change(e)}
                                    onBlur={this.passwordBlur} />
                                    <div>
                                        <span className="errors" value={this.state.passwordError}>{this.state.passwordError}</span>
                                    </div>
                                </div>

                                <div><label>אשר סיסמה</label><input name="verifyPassword"
                                    placeholder="אשר סיסמה"
                                    type="password"
                                    value={this.state.verifyPassword}
                                    onChange={e => this.change(e)} 
                                    onBlur={this.verifyBlur}/>
                                    <div>
                                        <span className="errors" value={this.state.verifyError}>{this.state.verifyError}</span>
                                    </div>
                                </div>
                            </div>


                            <div className="all-checkbox">
                                <div className="div-checkbox">
                                    {/* <div className="inner-checkbox"> */}
                                    <input className="btn" type="checkbox"
                                    id="checkbox-sub"
                                    onChange={this.butAble} />
                                    <label className="mylabel"> אני מאשר ומסכים ל<a href="https://www.htzone.co.il/%D7%AA%D7%A0%D7%90%D7%99_%D7%94%D7%A9%D7%99%D7%9E%D7%95%D7%A9" target="_blank">תנאי השימוש</a> וכן <a href="https://www.htzone.co.il/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA_%D7%94%D7%A4%D7%A8%D7%98%D7%99%D7%95%D7%AA" target="_blank">מדיניות הפרטיות</a> באתר   </label>

                                    {/* </div> */}
                                </div>
                                <div className="checkbox-error">
                                    <span className="errors" 
                                    value={this.state.checkboxError}>{this.state.checkboxError}</span>
                                    </div>

                                <div className="div-checkbox">
                                    {/* <div className="inner-checkbox"> */}
                                    <input className="btn" type="checkbox" />
                                    <label className="mylabel"> אני מעוניינ/ת לקבל מידע על הטבות ומבצעים של הייטקזון במייל
                                    </label>

                                    {/* </div> */}
                                </div>
                            </div>

                            <div className="submit-wrapper">
                                <button className="submitbtn" hidden={this.state.regMsg === regMsg}
                                // onClick={()=>this.onSubmit()} 
                                // onMouseLeave ={()=>{
                                //     // if(this.state.disableSub) 
                                //         this.setState({checkboxError: "check here please"})
                                //      }}

                                // disabled = {this.state.disableSub}
                                >{this.state.regMsg}
                                </button>
                                <img src="loader.gif" width="100px" hidden={this.state.regMsg !== regMsg} ></img>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
