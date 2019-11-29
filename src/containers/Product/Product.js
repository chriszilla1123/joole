import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import './Product.css';
import ProductNavbar from './../../components/ProductNavbar/ProductNavbar';
import fan1 from './../../assets/fan1.jpg';
import fan2 from './../../assets/fan2.jpg';
import fan3 from './../../assets/fan3.jpg';
import fan4 from './../../assets/fan4.jpg';
import pdfLogo from './../../assets/pdfLogo.png';

class Product extends Component {
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
        ]
    }

    componentDidMount(){
        //Called after component first loads.
        //Simulate click event for the first tab
        this.refs.firstTab.click();
    }

    clickTab(event, tab){
        let tabs = ['productSummaryTab', 'productDetailsTab', 
            'productDocumentationTab', 'productContactTab'];
        let tabContent = document.getElementsByClassName('productPageTabContent');

        //Hide all tab content
        for(let i=0; i < tabContent.length; i++){
            tabContent[i].style.display = "none";
        }

        //Remove 'active' from all buttons
        let tabLinks = document.getElementsByClassName('productPageTabLink');
        for(let i=0; i < tabLinks.length; i++){
            tabLinks[i].className = tabLinks[i].className.replace(" active", "")
        }

        //Show current tab and add 'active' to the button
        let tabField = document.getElementById(tabs[tab-1]);
        tabField.style.display = "block";
        event.currentTarget.className += " active";
    }

    backToCategories() {
        this.props.history.push('/categories');
    }
    
    backToProducts() {
        this.props.history.push('/products');
    }

    render(){ 
        let productIndex = this.props.match.params.id;
        let product = this.state.productList[productIndex]
        let fans = [fan1, fan2, fan3, fan4];
        let productDetails = product.productDetails.split(" | ");
        console.log(productDetails);

        return (
            <div id="productComponent">
                <ProductNavbar />
                <p id="backToCategoriesLink" onClick={() => this.backToCategories()}>
                    &nbsp; Mechanical >
                </p>
                <p id="backToProductsLink" onClick={() => this.backToProducts()}>
                    &nbsp; HVAC Fans >
                </p>
                <p id="productModelNumber">&nbsp; {product.productModelNumber}</p>
                <hr className="thinHr" />
                <span>
                    <img className="productDetailsImage" alt="fan" src={fans[productIndex]} />
                    <p className="productDetailsHeaderText">
                        {product.productBrand} / {product.productSeries} / {product.productModelNumber}
                    </p>
                </span>

                <div className="productPageTabs">
                    <div className="productPageTabLink"onClick={(evt) => this.clickTab(evt, 1)} ref="firstTab">Product Summary</div>
                    <div className="productPageTabLink"onClick={(evt) => this.clickTab(evt, 2)}>Product Details</div>
                    <div className="productPageTabLink"onClick={(evt) => this.clickTab(evt, 3)}>Product Documentation</div>
                    <div className="productPageTabLink"onClick={(evt) => this.clickTab(evt, 4)}>Contact</div>
                </div>

                <div id="productSummaryTab" className="productPageTabContent">
                    <p className="productDetailsHeaderText">Product Summary</p>
                    <br></br>
                    <span className="split">
                        <hr className="thickHr" />
                        <p className="productDetailsSubheaderText">DESCRIPTION</p>
                        <hr className="thickHr"/>

                        <span className="productPageDescriptionLable">
                            Manufacturer
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productBrand}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Series
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productSeries}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Model
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productModelNumber}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <hr className="thickHr" />
                        <p className="productDetailsSubheaderText">TYPE</p>
                        <hr className="thickHr" />

                        <span className="productPageDescriptionLable">
                            Use Type
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productUseType}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Application
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productApplication}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Mounting Location
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productMounting}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Product Accessories
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productAccessories} Light
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Model Year
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productYear}
                            <hr className="thinHr"/>
                        </span>
                        <br />
                    </span>
                    <span className="split">
                        <hr className="thickHr" />
                        <p className="productDetailsSubheaderText">TECHNICAL SPECIFICATIONS</p>
                        <hr className="thickHr" />

                        <span className="productPageDescriptionLable">
                            Airflow (CFM)
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productCFM}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Power (W)
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productWatts}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Max Sound (dBA)
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productSound}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Fan Sweep Diameter
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productDiameter}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <br /><br /><br /><br /><div className="extraBr" />
                    </span>
                </div>
                <div id="productDetailsTab" className="productPageTabContent">
                    <p className="productDetailsHeaderText">Product Details</p>
                    <br></br>

                    <hr className="thickHr" />
                    <p className="productDetailsSubheaderText">SERIES INFORMATION</p>
                    <hr className="thickHr"/>

                    <span className="productPageDescriptionText forceFullWidth darkerBackground">
                        {productDetails[0]}
                        <hr className="thinHr"/>
                    </span>
                    <br />

                    <span className="productPageDescriptionText forceFullWidth">
                        {productDetails[1]}
                        <hr className="thinHr"/>
                    </span>
                    <br />

                    <span className="productPageDescriptionText forceFullWidth darkerBackground">
                        {productDetails[2]}
                        <hr className="thinHr"/>
                    </span>
                    <br />

                    <span className="productPageDescriptionText forceFullWidth">
                        {productDetails[3]}
                        <hr className="thinHr"/>
                    </span>
                    <br />

                    <span className="productPageDescriptionText forceFullWidth darkerBackground">
                        {productDetails[4]}
                        <hr className="thinHr"/>
                    </span>
                    <br />
                </div>
                <div id="productDocumentationTab" className="productPageTabContent">
                    <p className="productDetailsHeaderText">Product Documentation</p>
                    <br></br>
                    <span><img alt="pdfLogo" src={pdfLogo} width="50px" /></span>
                    <span>Download Product Manual (PDF)</span>
                    <br/>
                    <span><img alt="pdfLogo" src={pdfLogo} width="50px" /></span>
                    <span>Download Envrionmental Data Sheet (PDF)</span>
                    <br/>
                    <span><img alt="pdfLogo" src={pdfLogo} width="50px" /></span>
                    <span>Download Technical Specification Data Sheet (PDF)</span>
                    <br/>
                    <span><img alt="pdfLogo" src={pdfLogo} width="50px" /></span>
                    <span>Warranty Information (PDF)</span>
                    <br/>
                </div>
                <div id="productContactTab" className="productPageTabContent">
                    <p className="productDetailsHeaderText">Contact</p>
                    <br></br>

                    <span className="split">
                        <hr className="thickHr" />
                        <p className="productDetailsSubheaderText">SALES REPRESENTATIVE</p>
                        <hr className="thickHr"/>

                        <span className="productPageDescriptionLable">
                            Name
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productContactName}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Phone
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productContactPhone}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Email
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productContactEmail}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Web
                        </span>
                        <span className="productPageDescriptionText">
                            <a href={"http://" + product.productContactWeb}>{product.productContactWeb}</a>
                            <hr className="thinHr"/>
                        </span>
                        <br />
                    </span>
                    <span className="split">
                        <hr className="thickHr" />
                        <p className="productDetailsSubheaderText">MANUFACTURER</p>
                        <hr className="thickHr"/>

                        <span className="productPageDescriptionLable">
                            Department
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productContactDepartment}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Phone
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productContactPhone2}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Email
                        </span>
                        <span className="productPageDescriptionText">
                            {product.productContactEmail2}
                            <hr className="thinHr"/>
                        </span>
                        <br />

                        <span className="productPageDescriptionLable">
                            Web
                        </span>
                        <span className="productPageDescriptionText">
                            <a href={"http://" + product.productContactWeb2}>{product.productContactWeb2}</a>
                            <hr className="thinHr"/>
                        </span>
                        <br />
                    </span>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));