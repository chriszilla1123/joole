import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import './Products.css';
import ProductNavbar from './../../components/ProductNavbar/ProductNavbar';
import fan1 from './../../assets/fan1.jpg';
import fan2 from './../../assets/fan2.jpg';
import fan3 from './../../assets/fan3.jpg';
import fan4 from './../../assets/fan4.jpg';
import { Button } from 'react-bootstrap';
import { blockStatement } from '@babel/types';

class Products extends Component {
    state = {
        productList: [
            {
                "productID": 1,
                "productName": "Luray Eco Series CF860",
                "productBrand": "Emerson",
                "productSeries": "Luray Eco Series",
                "productModelNumber": "CF860",
                "productUseType": "Residential",
                "productApplication": "Indoor",
                "productYear": "2018",
                "productCFM": "8500",
                "productWatts": "33",
                "productSound": "40",
                "productDiameter": "60",
                "productMounting": "Roof",
                "productAccessories": "With",
                "productDetails": "Made in the USA | Exceeds ENERGY STAR fan efficiency requirements | Motor - EC motor with digital inverter drive | Controls - Remote control included | Environment - Indoor use only",
                "productContactName": "John Johnson",
                "productContactPhone": "+1 234 567 8910",
                "productContactEmail": "john@emerson.com",
                "productContactWeb": "emerson.com",
                "productContactDepartment": "Technical Support",
                "productContactPhone2": "+1 729 294 2948",
                "productContactEmail2": "tech@emerson.com",
                "productContactWeb2": "emerson.com/support"
            },
            {
                "productID": 2,
                "productName": "Aviation Series F853-RW",
                "productBrand": "Minka",
                "productSeries": "Aviation Series",
                "productModelNumber": "F853-RW",
                "productUseType": "Residential",
                "productApplication": "Indoor",
                "productYear": "2019",
                "productCFM": "6604",
                "productWatts": "26",
                "productSound": "36",
                "productDiameter": "60",
                "productMounting": "Roof",
                "productAccessories": "Without",
                "productDetails": "Made in the USA | Exceeds ENERGY STAR fan efficiency requirements | Motor - EC motor with digital inverter drive | Controls - Remote control included | Environment - Indoor use only",
                "productContactName": "Jimmy Jameson",
                "productContactPhone": "+1 234 567 8910",
                "productContactEmail": "jimmy@minka.com",
                "productContactWeb": "minka.com",
                "productContactDepartment": "Technical Support",
                "productContactPhone2": "+1 438 384 3847",
                "productContactEmail2": "tech@minka.com",
                "productContactWeb2": "minka.com/support"
            },
            {
                "productID": 3,
                "productName": "Industrial Ceiling Fan 78003",
                "productBrand": "Westinghouse",
                "productSeries": "Industrial Ceiling Fan",
                "productModelNumber": "78003",
                "productUseType": "Industrial",
                "productApplication": "Outdoor",
                "productYear": "2019",
                "productCFM": "6846",
                "productWatts": "60",
                "productSound": "48",
                "productDiameter": "56",
                "productMounting": "Wall",
                "productAccessories": "With",
                "productDetails": "Made in the USA | Exceeds ENERGY STAR fan efficiency requirements | Motor - EC motor with digital inverter drive | Controls - Remote control included | Environment - Suitible for indoor and outdoor use",
                "productContactName": "Sean Ranklin",
                "productContactPhone": "+1 234 567 8910",
                "productContactEmail": "sean@westinghouse.com",
                "productContactWeb": "westinghouse.com",
                "productContactDepartment": "Technical Support",
                "productContactPhone2": "+1 393 495 4983",
                "productContactEmail2": "tech@westinghouse.com",
                "productContactWeb2": "westinghouse.com/support"
            },
            {
                "productID": 4,
                "productName": "Haiku H Series S3150-S0-BC-04-01",
                "productBrand": "Big Ass",
                "productSeries": "Haiku H Series",
                "productModelNumber": "S3150-S0-BC-04-01",
                "productUseType": "Commercial",
                "productApplication": "Indoor",
                "productYear": "2017",
                "productCFM": "5467",
                "productWatts": "22",
                "productSound": "35",
                "productDiameter": "60",
                "productMounting": "Free Standing",
                "productAccessories": "Without",
                "productDetails": "Made in the USA | Exceeds ENERGY STAR fan efficiency requirements | Motor - EC motor with digital inverter drive | Hardware - Includes free-standing hardware mount | Environment - Indoor use only ",
                "productContactName": "Joe Richardson",
                "productContactPhone": "+1 234 567 8910",
                "productContactEmail": "joe@bigass.com",
                "productContactWeb": "bigass.com",
                "productContactDepartment": "Technical Support",
                "productContactPhone2": "+1 394 943 2248",
                "productContactEmail2": "tech@bigass.com",
                "productContactWeb2": "bigass.com/support"
            }
        ],
        search: {
            minYear: 2017,
            maxYear: 2019,
            minAirflow: 5467,
            maxAirflow: 8500,
            minPower: 22,
            maxPower: 60,
            minSound: 35,
            maxSound: 48,
            minDiameter: 56,
            maxDiameter: 60,
        },
        //The products that should be shown on screen, updated by the search() called by searchUpdateHandler()
        searchList: [0, 1, 2, 3]
    }

    productClicked(index){
        this.props.history.push('/product/' + index);
    }

    resetSearch(){
        let defaultSearch = {
            minYear: 2017,
            maxYear: 2019,
            minAirflow: 5467,
            maxAirflow: 8500,
            minPower: 22,
            maxPower: 60,
            minSound: 35,
            maxSound: 48,
            minDiameter: 56,
            maxDiameter: 60,
        }
        this.setState({search: defaultSearch}, () => { this.search() });
    }

    searchUpdateHandler(e){
        let newSearch = {
            ...this.state.search
        }
        switch(e.target.getAttribute('statename')){
            case 'minYear': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.minYear = 0; }
                    else{ newSearch.minYear = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Year must be a number');
                }
                break;
            }
            case 'maxYear': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.maxYear = 0; }
                    else{ newSearch.maxYear = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Year must be a number');
                }
                break;
            }
            case 'minAirflow': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.minAirflow = 0; }
                    else{ newSearch.minAirflow = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Airflow CFM must be a number');
                }
                break;
            }
            case 'maxAirflow': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.maxAirflow = 0; }
                    else{ newSearch.maxAirflow = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Airflow CFM must be a number');
                }
                break;
            }
            case 'minPower': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.minPower = 0; }
                    else{ newSearch.minPower = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Power Watts must be a number');
                }
                break;
            }
            case 'maxPower': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.maxPower = 0; }
                    else{ newSearch.maxPower = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Power Watts must be a number');
                }
                break;
            }
            case 'minSound': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.minSound = 0; }
                    else{ newSearch.minSound = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Sound dBA must be a number');
                }
                break;
            }
            case 'maxSound': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.maxSound = 0; }
                    else{ newSearch.maxSound = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Sound dBA must be a number');
                }
                break;
            }
            case 'minDiameter': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.minDiameter = 0; }
                    else{ newSearch.minDiameter = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Diameter must be a number');
                }
                break;
            }
            case 'maxDiameter': {
                if(!isNaN(e.target.value)){
                    if(e.target.value.trim() === ""){ newSearch.maxDiameter = 0; }
                    else{ newSearch.maxDiameter = parseInt(e.target.value); }
                    this.setState({search: newSearch}, () => { this.search() });
                }
                else{
                    alert('Diameter must be a number');
                }
                break;
            }
            default: {}
        }
    }

    search(){
        //Should return the list of product indexes that match the search results
        let newSearchList = [];
        let search = this.state.search;
        console.log(search);
        this.state.productList.forEach((product, index) => {
            let shouldShowProduct = true;
            if(product.productYear < search.minYear){ shouldShowProduct = false;}
            if(product.productYear > search.maxYear){ shouldShowProduct = false;}
            if(product.productCFM < search.minAirflow){ shouldShowProduct = false;}
            if(product.productCFM > search.maxAirflow){ shouldShowProduct = false;}
            if(product.productWatts < search.minPower){ shouldShowProduct = false;}
            if(product.productWatts > search.maxPower){ shouldShowProduct = false;}
            if(product.productSound < search.minSound){ shouldShowProduct = false;}
            if(product.productSound > search.maxSound){ shouldShowProduct = false;}
            if(product.productDiameter < search.minDiameter){ shouldShowProduct = false;}
            if(product.productDiameter > search.maxDiameter){ shouldShowProduct = false;}

            if(shouldShowProduct){
                newSearchList.push(index);
            }
        });

        this.setState({searchList: newSearchList});
    }

    renderProduct(index){
        //Renders the HTML for a single product by its array index
        let fans = [fan1, fan2, fan3, fan4];
        let product = this.state.productList[index];
        return (
            <div className="productResultContainer" onClick={() => this.productClicked(index)}>
                <img className="productResultImage" alt='product' src={fans[index]} />
                <p className="productResultMainInfo">{product.productBrand}</p>
                <p className="productResultMainInfo">{product.productSeries}</p>
                <p className="productResultMainInfo">{product.productModelNumber}</p>
                <p className="productResultSubInfo">{product.productCFM} CFM</p>
                <p className="productResultSubInfo">{product.productWatts} W at max speed</p>
                <p className="productResultSubInfo">{product.productSound} dBA at max speed</p>
                <p className="productResultSubInfo">{product.productDiameter}" fan sweep diameter</p>
            </div>
        )
    }

    renderProducts(){
        //Compiles the HTML from all the products
        let productsToShow = this.state.searchList;
        let products = [];
        for(let i=0; i < productsToShow.length; i++){
            products.push(
                <span key={productsToShow[i]}>{this.renderProduct(productsToShow[i])}</span>
            );
        }
        return products;
    }

    render() {
        let username = "User Name";
        if(this.props.loginFirstName !== null && this.props.loginLastName !== null){
            username = this.props.loginFirstName + " " + this.props.loginLastName;
        }

        return (
            <div id="productsComponent">
                <ProductNavbar username={username}/>
                <div id="sideNav">
                    <span>
                        <p style={{display: "inline-block"}}>Search:&nbsp;&nbsp;&nbsp;</p>
                        <Button size="sm" onClick={() => this.resetSearch()} style={{fontSize: 10 + "px"}}>reset</Button>
                    </span>
                    <div className="collapsible productSideNavHeader">Product Type</div>
                    <div className="collapsibleContent" id="productTypeDetails">
                        <span>
                            <p className="productSidebarText">Model year: &nbsp;&nbsp;</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" className="productSidebarInput" value={this.state.search.minYear} statename="minYear" onChange={(e) => this.searchUpdateHandler(e)}></input>
                            -
                            <input type="text" className="productSidebarInput" value={this.state.search.maxYear} statename="maxYear" onChange={(e) => this.searchUpdateHandler(e)}></input>
                        </span>
                    </div>

                    <div className="collapsible productSideNavHeader">Technical Specifications</div>
                    <div className="collapsibleContent" id="technicalSpecificationsDetails">
                        <span>
                            <p className="productSidebarText">Airflow (CFM): &nbsp;&nbsp;</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" className="productSidebarInput"  value={this.state.search.minAirflow} statename="minAirflow" onChange={(e) => this.searchUpdateHandler(e)}></input>
                            -
                            <input type="text" className="productSidebarInput" value={this.state.search.maxAirflow} statename="maxAirflow" onChange={(e) => this.searchUpdateHandler(e)}></input>
                        </span>
                        <br />
                        <span>
                            <p className="productSidebarText">Max Power (W): &nbsp;&nbsp;</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" className="productSidebarInput" value={this.state.search.minPower} statename="minPower" onChange={(e) => this.searchUpdateHandler(e)}></input>
                            -
                            <input type="text" className="productSidebarInput" value={this.state.search.maxPower} statename="maxPower" onChange={(e) => this.searchUpdateHandler(e)}></input>
                        </span>
                        <br />
                        <span>
                            <p className="productSidebarText">Max Sound (dBA): &nbsp;&nbsp;</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" className="productSidebarInput" value={this.state.search.minSound} statename="minSound" onChange={(e) => this.searchUpdateHandler(e)}></input>
                            -
                            <input type="text" className="productSidebarInput" value={this.state.search.maxSound} statename="maxSound" onChange={(e) => this.searchUpdateHandler(e)}></input>
                        </span>
                        <br />
                        <span>
                            <p className="productSidebarText">Fan Sweep Diameter (in): &nbsp;&nbsp;</p>
                            <input type="text" className="productSidebarInput" value={this.state.search.minDiameter} statename="minDiameter" onChange={(e) => this.searchUpdateHandler(e)}></input>
                            -
                            <input type="text" className="productSidebarInput" value={this.state.search.maxDiameter} statename="maxDiameter" onChange={(e) => this.searchUpdateHandler(e)}></input>
                        </span>
                    </div>
                </div>
                <div id="productResults">
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.loggedIn,
        loginFirstName: state.login.firstName,
        loginLastName: state.login.lastName,
        productList: state.product.products
    }
}
const mapDispatchToProps = dispatch => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));