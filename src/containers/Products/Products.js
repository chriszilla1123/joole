import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
//import { Container } from 'react-bootstrap';

import './Products.css';
import ProductNavbar from './../../components/ProductNavbar/ProductNavbar';
import fan1 from './../../assets/fan1.jpg';
import fan2 from './../../assets/fan2.jpg';
import fan3 from './../../assets/fan3.jpg';
import fan4 from './../../assets/fan4.jpg';

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
                "productDetails": "Strong Construction | Made in the USSR",
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
                "productDetails": "Remote Control Included | Steel Mounting Hardware | Made in the USA",
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
                "productDetails": "Wall Mounting Hardware Included | Onboard Sensors - Detect Temperature | Made in the USSR",
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
                "productDetails": "Free-Standing Mounting Hardware Included | Effecient LED lights | Made in the USA",
                "productContactName": "Joe Richardson",
                "productContactPhone": "+1 234 567 8910",
                "productContactEmail": "joe@bigass.com",
                "productContactWeb": "bigass.com",
                "productContactDepartment": "Technical Support",
                "productContactPhone2": "+1 394 943 2248",
                "productContactEmail2": "tech@bigass.com",
                "productContactWeb2": "bigass.com/support"
            }
        ]
    }

    productClicked(index){
        console.log("clicked product: " + index);
    }

    search(){
        //Should return the list of product indexes that match the search results
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
        let products = [];
        for(let i=1; i <= 5; i++){
            products.push(
                <div>{this.renderProduct(i)}</div>
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
                    <div className="collapsible productSideNavHeader">Product Type</div>
                    <div className="collapsibleContent" id="productTypeDetails">
                        <span>
                            <p className="productSidebarText">Model year: &nbsp;&nbsp;</p>
                            <input type="text" className="productSidebarInput"></input>
                            -
                            <input type="text" className="productSidebarInput"></input>
                        </span>
                    </div>

                    <div className="collapsible productSideNavHeader">Technical Specifications</div>
                    <div className="collapsibleContent" id="technicalSpecificationsDetails">
                        <span>
                            <p className="productSidebarText">Airflow (CFM): &nbsp;&nbsp;</p>
                            <input type="text" className="productSidebarInput"></input>
                            -
                            <input type="text" className="productSidebarInput"></input>
                        </span>
                        <br />
                        <span>
                            <p className="productSidebarText">Max Power (W): &nbsp;&nbsp;</p>
                            <input type="text" className="productSidebarInput"></input>
                            -
                            <input type="text" className="productSidebarInput"></input>
                        </span>
                        <br />
                        <span>
                            <p className="productSidebarText">Max Sound (dBA): &nbsp;&nbsp;</p>
                            <input type="text" className="productSidebarInput"></input>
                            -
                            <input type="text" className="productSidebarInput"></input>
                        </span>
                        <br />
                        <span>
                            <p className="productSidebarText">Fan Sweep Diameter (in): &nbsp;&nbsp;</p>
                            <input type="text" className="productSidebarInput"></input>
                            -
                            <input type="text" className="productSidebarInput"></input>
                        </span>
                    </div>
                </div>
                <div id="productResults">
                    {this.renderProduct(0)}
                    {this.renderProduct(1)}
                    {this.renderProduct(2)}
                    {this.renderProduct(3)}

                    {this.renderProduct(3)}

                    {this.renderProduct(3)}
                    {this.renderProduct(3)}
                    {this.renderProduct(3)}
                    {this.renderProduct(3)}

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