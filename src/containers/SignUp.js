import React, { Component} from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
import '../SignUp.css'
import Snackbar from 'react-toolbox/lib/snackbar/Snackbar.js';
import { Link } from 'react-router-dom'


export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConf: '',
      firstName: '',
      lastName: '',
      auth_id: null, 
      error: false, 
    }

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
      email: ev.target.value
    })
  }

  handleOnPasswordChange(ev){
    console.log(ev.target.value)
    this.setState({
      password: ev.target.value,
    })
  }

  handleOnPasswordConfChange(ev){
    console.log(ev.target.value)
    this.setState({
      passwordConf: ev.target.value,
    })
  }

  handleOnSignUpSubmit(){
    debugger
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
      firstName: ev.target.value
    })
  }

  handleOnLastNameChange(ev){
    console.log(ev.target.value)
    this.setState({
      lastName: ev.target.value
    })
  }


  render(){
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
                        <div className='form-group'>
                          <input type='text' placeholder='Correo electrónico' ref='email' onChange={(ev)=> this.handleOnEmailChange(ev)} ></input>
                        </div>
                         <div className='form-group'>
                          <input type='password' placeholder='Contraseña' onChange={(ev)=> this.handleOnPasswordChange(ev)} value={this.state.password} onKeyPress={(ev)=> this.handleOnInputKeyDown(ev)}></input>
                        </div>
                        <div className='form-group'>
                          <input type='password' placeholder='Confirmar contraseña' onChange={(ev)=> this.handleOnPasswordConfChange(ev)} value={this.state.passwordConf} onKeyPress={(ev)=> this.handleOnInputKeyDown(ev)}></input>
                        </div>
                        <div className='form-group'>
                          <input type='text' placeholder='Nombre' ref='email' onChange={(ev)=> this.handleOnFirstNameChange(ev)} ></input>
                        </div>
                        <div className='form-group'>
                          <input type='text' placeholder='Apellido' ref='email' onChange={(ev)=> this.handleOnLastNameChange(ev)} ></input>
                        </div>
                        <div className='signUp-button col-center' onClick={()=> this.handleOnSignUpSubmit()}>
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