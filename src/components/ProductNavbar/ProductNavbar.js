import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Select from 'react-select';

import './ProductNavbar.css';
import logo from './../../assets/joole.png';
import genericUser from './../../assets/user.png';

const ProductNavbar = (props) => {

    let username = (props.username != null) ? props.username : "User Name"

    let categoryOptions = [
        {value: "Mechanical", label: "Mechanical"}
    ]

    let subCategoryOptions = [
        {value: "HVAC Fans", label: "HVAC Fans"}
    ];

    let element = (
        <Container fluid id="productHeaderOuterContainer">
            <Navbar id="productHeaderNavbar" sticky="top">
                <Navbar.Brand className="col-3">
                    <img alt="logo" src={logo} width="100px"/>
                </Navbar.Brand>
                <div id="productSelect" className=" justify-content-around
                col-6">
                    <span id="productHeaderTopSpan">
                        <Select options={categoryOptions} className="productHeaderTopSelect" classNamePrefix="productHeaderUpperElement" 
                        defaultValue={categoryOptions[0]}/>
                    </span>
                    <span id="productHeaderBottomSpan">
                        <Select options={subCategoryOptions} className="productHeaderBottomSelect" 
                        classNamePrefix="productHeaderBottomElement" defaultValue={subCategoryOptions[0]}/>
                    </span>
                </div>
                <div id="headerNameAndPic" className="col-3">
                    <p className="ProductHeaderUserInfo">{username}</p>
                    <img alt="user" src={genericUser} width="50px" className="ProductHeaderUserInfo"></img>
                </div>
            </Navbar>
        </Container>
    );

    return <div className="productNavbar">
        {element}
    </div>
}

export default ProductNavbar;