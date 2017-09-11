import React, { Component} from 'react'
import NavBar from '../NavBar.js'
import Footer from '../components/Footer'
import '../Login.css'
import Snackbar from 'react-toolbox/lib/snackbar/Snackbar.js';


export default class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      auth_id: null,
      signedIn: !!localStorage.token, 
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
      password: ev.target.value
    })
  }

  handleOnLoginSubmit(){
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
      password: ''
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



  render(){
    return(
          <div className='login-wrap'>
            <section className='search-page-header'>
              <NavBar/>
            </section>
            <section className='login-content container'>
              <div className='row'>
                <div className='col-sm-8 col-md-6 col-center'>
                  <div className='login-block'>
                    <header className="woof-page-header">
                      <h1 className="woof-header-title">
                        <div className="text-center">
                          <span className="js-sign-up  hide">Sign Up for woof</span>
                          <span className="js-sign-in ">Iniciar sesión</span>
                         </div>
                      </h1>
                      <h3 className="woof-header-subtitle"></h3>      
                    </header>
                    <div className='login-input-wrap'>
                      <form className='login-form'>
                        <div className='form-group'>
                          <input type='text' placeholder='Correo electrónico' onChange={(ev)=> this.handleOnEmailChange(ev)} defaultValue={localStorage.email}></input>
                        </div>
                         <div className='form-group'>
                          <input type='password' placeholder='Contraseña' onChange={(ev)=> this.handleOnPasswordChange(ev)} value={this.state.password} onKeyPress={(ev)=> this.handleOnInputKeyDown(ev)}></input>
                        </div>
                        <div className='login-button col-center' onClick={()=> this.handleOnLoginSubmit()}>
                          Ingresar con correo
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