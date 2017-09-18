import React, { Component} from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
import '../SignUp.css'
import Snackbar from 'react-toolbox/lib/snackbar/Snackbar.js';
import { Link } from 'react-router-dom'
import validator from 'validator';
import ReactPasswordStrength from 'react-password-strength'

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      emailValid: false,
      password: null,
      passwordConf: '',
      passwordMatch: false,
      passwordStrong: false,
      firstName: null,
      firstNameValid: false,
      lastName: null,
      lastNameValid: false,
      auth_id: null, 
      error: false, 
      allGreen: false,
    }
    const checkIfAllGreen = this.state.emailValid && this.state.passwordStrong && this.state.passwordMatch && this.state.firstNameValid && this.state.lastNameValid
  }
 
  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }

  handleOnEmailChange(ev){
    console.log(ev.target.value)
    this.setState({
      email: ev.target.value,
      emailValid: validator.isEmail(this.state.email),
    })
    if(this.state.emailValid){
      this.checkIfAllGreen()
    }
  }

  handleOnPasswordChange(ev){
    console.log(ev)
    this.setState({
      password: ev.password,
      passwordStrong: ev.isValid,
      passwordMatch: this.state.passwordConf == this.state.password,
    })
    if(this.state.passwordStrong){
      this.checkIfAllGreen()
    }
  }

  handleOnPasswordConfChange(ev){
    console.log(ev.target.value)
    this.setState({
      passwordConf: ev.target.value,
      passwordMatch: ev.target.value == this.state.password,
    })
    if(this.state.passwordMatch){
      this.checkIfAllGreen()
    }
  }

  // handleOnEmailBlur(){
  //   validator.isEmail(this.state.email) ? this.setState({emailValid: true}) : this.setState({emailValid: false})
  // }

  handleOnSignUpSubmit(){
   this.checkIfAllGreen()
    if(this.state.allGreen) {
      const credentials = JSON.stringify({session: { email: this.state.email, password: this.state.password}})
      fetch('http://localhost:3001/api/sessions',{
        method: 'POST', 
        headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
        },
        body: credentials
      }).then(this.handleErrors)
      .then(response => response.json())
      .then(parsedData => {
          localStorage.token = parsedData.auth_token;
          localStorage.firstname = parsedData.firstname;
          localStorage.email = parsedData.email;
          window.location.replace("/")
        })
      .catch(error => this.setState({
        error:true,
        password: '', 
        passwordConf: '',

      }))
      
    }
  }

  handleSnackbarTimeout() {
    this.setState({
      error: false,
    })
  }

  handleOnInputKeyDown(ev){
    if(ev.key == "Enter"){
      this.handleOnLoginSubmit()
    }
  }

  handleOnFirstNameChange(ev){
    console.log(ev.target.value)
    this.setState({
      firstName: ev.target.value,
      firstNameValid: validator.isAlpha(ev.target.value),
    })
    if(this.state.firstNameValid){
      this.checkIfAllGreen()
    }
  }

  handleOnLastNameChange(ev){
    console.log(ev.target.value)
    this.setState({
      lastName: ev.target.value,
      lastNameValid: validator.isAlpha(ev.target.value),
    })
    if(this.state.lastNameValid){
      this.checkIfAllGreen()
    }
  }

  handlePasswordStrength(n) {
    n > 0 ? this.setState({passwordStrong: true}) : this.setState({passwordStrong:false })
  }

  checkIfAllGreen() {
    debugger
    if(this.state.emailValid && this.state.passwordStrong && this.state.passwordMatch && this.state.firstNameValid && this.state.lastNameValid) {
      this.setState({
        allGreen: true,
      })
      }else{
        this.setState({
          allGreen: false,
        })
      }
    }



  render(){
    console.log(this.state.allGreen)
    const emailClassName = this.state.emailValid ? 'form-group-valid' : 'form-group-inValid'
    const passwordClassName = this.state.passwordStrong ? 'password-valid' : 'password-inValid'
    const passwordConfName = this.state.passwordMatch ? 'form-group-valid' : 'form-group-inValid'
    const firstNameClass = this.state.firstNameValid ? 'form-group-valid' : 'form-group-inValid'
    const lastNameClass = this.state.lastNameValid ? 'form-group-valid' : 'form-group-inValid'
    const signUpButtonClassName = this.state.allGreen ? 'signUp-button-valid col-center' : 'signUp-button-inValid col-center'
    return(
          <div className='signUp-wrap'>
            <section className='search-page-header'>
              <NavBar/>
            </section>
            <section className='signUp-content container'>
              <div className='row'>
                <div className='col-sm-8 col-md-6 col-center'>
                  <div className='signUp-block'>
                    <header className="woof-page-header">
                      <h1 className="woof-header-title">
                        <div className="text-center">
                          <span className="js-sign-up  hide">Sign Up for woof</span>
                          <span className="js-sign-in ">
                            <h1>Registrate</h1>
                            <h5>¿Ya eres miembro? Ingresa <Link to='/login'>aqui</Link></h5>
                          </span>
                         </div>
                      </h1>
                      <h3 className="woof-header-subtitle"></h3>      
                    </header>
                    <div className='signUp-input-wrap'>
                      <form className='signUp-form'>
                        <div className={emailClassName}>
                          <input type='email' placeholder='Correo electrónico' ref='email' onChange={(ev)=> this.handleOnEmailChange(ev)} autoComplete='off'></input>
                        </div>
                         <div className='form-group'>
                          <ReactPasswordStrength 
                                          placeholder='Contraseña' 
                                          minScore={1}
                                          scoreWords={['weak', 'okay', 'good', 'strong', 'great']}
                                          changeCallback={(ev)=> this.handleOnPasswordChange(ev)}
                                          inputProps={{placeholder: 'Contraseña', className: passwordClassName}}
                                          />
                        </div>
                        <div className={passwordConfName}>
                          <input type='password' placeholder='Confirmar contraseña' onChange={(ev)=> this.handleOnPasswordConfChange(ev)} value={this.state.passwordConf}></input>
                        </div>
                        <div className={firstNameClass}>
                          <input type='text' placeholder='Nombre' ref='email' onChange={(ev)=> this.handleOnFirstNameChange(ev)}></input>
                        </div>
                        <div className={lastNameClass}>
                          <input type='text' placeholder='Apellido' ref='email' onChange={(ev)=> this.handleOnLastNameChange(ev)}></input>
                        </div>
                        <div className={signUpButtonClassName} onClick={()=> this.handleOnSignUpSubmit()}>
                          Registar con correo
                        </div>
                      </form>
                      <Snackbar
                        active={this.state.error}
                        label='Email o contraseña incorrectos'
                        timeout={3000}
                        onTimeout={()=> this.handleSnackbarTimeout()}
                        type='warning'
                      />
                    </div>

                  </div>
                </div>
              </div>
            </section>
            <section className='search-page-footer'>
              <Footer />
            </section>
          </div>
      )
  }
}

