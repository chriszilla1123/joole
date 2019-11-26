import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Button, Container } from 'react-bootstrap';

import logo from '../../assets/joole.png';
import "./Login.css";
import Input from '../../components/UI/Input/Input';
import * as loginActions from '../../store/actions/login';
import * as productActions from '../../store/actions/product';

class Login extends Component {
    state = {
        controls: {
            user: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Username or Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    }
    
    redirectToCategories(){
        console.log("Can call this")
    }

    inputChangedHandler = ( event, controlName ) => {
        //console.log(...this.state.controls);
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        //console.log(updatedControls);
        //console.log(this.state);
        this.setState( { controls: updatedControls } );
        if(this.formIsValid()){
            document.getElementById('submitButton').removeAttribute('disabled');
        }
        else{
            document.getElementById('submitButton').setAttribute('disabled', true);
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log("Trying login...");
        let payload = {
            username: this.state.controls.user.value,
            password: this.state.controls.password.value
        }
        this.props.login(payload);
    }

    componentDidMount(){
        //console.log("Loaded login page");
    }

    checkValidity ( value, rules ) {
        //Checks the data againsts the pre-defined rules
        let isValid = true;
        if ( !rules ) {
            return true;
        }
        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }
        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }
        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }
        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }
        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }
        return isValid;
    }

    formIsValid(){
        let isValid = true;
        for(let key in this.state.controls){
            if(this.state.controls[key].valid === false) { isValid = false; }
        }
        return isValid;
    }

    render() {
        //testing
        if(this.props.isLoggedIn){
            //this.props.history.push('/categories');

            //TODO move and test this
            //After user is logged in, key will be set. Extract key and download products
            this.props.getProducts(this.props.loginKey);
        }
        else if(this.props.loginError !== null){
            let msg = this.props.loginError;
            this.props.clearLoginError(true);
            alert(msg);
        }

        //end testing

        const formElementsArray = [];
        for(let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ));

        return (
            <div id="loginComponent">
                <br /><br /><br />
                <img src={logo} id="logo" alt="Company Logo"></img>
                <div id="logoText">
                    Building Product Selection Platform
                </div>
                <br /><br />
                <Container fluid>
                    <form onSubmit={this.submitHandler}>
                        {form}
                        <Container align="right" id="submitContainer">
                            <Button varient="info" size="sm" id="submitButton" 
                                type="submit" disabled>Log In
                            </Button>
                        </Container>
                    </form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    //Add the properties required by the login component

    if(state.product.products !== null){
        console.log("Got the product list: ");
        console.log(state.product.products);
    }

    return { 
        isLoggedIn: state.login.loggedIn,
        loginError: state.login.error,
        loginKey: state.login.token
     }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(loginActions.login(data)),
        setRedirect: (location) => dispatch(loginActions.setRedirect(location)),
        clearLoginError: (value) => dispatch(loginActions.clearLoginError(value)),
        getProducts: (key) => dispatch(productActions.getProducts(key))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));