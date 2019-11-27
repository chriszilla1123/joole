import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Select from 'react-select';

import logo from '../../assets/joole.png';
import './Categories.css';

class Categories extends Component {
    state = {
        controls: {
        },

        topLevelCategories: ["Mechanical"],
        subCategories: ["HVAC Fans"]
    }

    selectHandler = (event) => {
        //After selecting a category, move to product selection page
        this.props.history.push('/products');
    }

    render() {
        let categoryOptions = [
            {value: this.state.topLevelCategories[0], label: this.state.topLevelCategories[0]}
        ]

        let subCategoryOptions = [
            {value: this.state.subCategories[0], label: this.state.subCategories[0]}
        ];

        return (
            <div id="categoriesComponent">
                <br /><br /><br />
                <img src={logo} id="logo" alt="Company Logo"></img>
                <div id="logoText">
                    Building Product Selection Platform
                </div>
                <br /><br />
                <Container fluid>
                    <span id="topSpan">
                        <Select options={categoryOptions} className="topLevelSelect" classNamePrefix="upperElement" 
                        defaultValue={categoryOptions[0]}/>
                    </span>
                    <span id="bottomSpan">
                        <Select options={subCategoryOptions} className="bottonLevelSelect" classNamePrefix="selectElement" onChange={(event) => this.selectHandler(event)}/>
                    </span>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));