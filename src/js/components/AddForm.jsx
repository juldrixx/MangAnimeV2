// src/js/components/AddForm.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { add, clearErrorAdd } from "../actions/index";

const mapStateToProps = (state) => {
    return {
        error_add: state.error_add        
    };
};

class ConnectedAddForm extends Component {
    constructor() {
        super();
        this.state = {
            rss_url: ""
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {rss_url} = this.state;
        this.props.add([this.props.type, this.props.user, rss_url]);
        this.setState({rss_url: ""});
    }

    componentWillReceiveProps(newProps) {
        newProps.error_add && setTimeout(() => {this.props.clearErrorAdd()}, 500);
    }

    render() {
        const {rss_url} = this.state;
        return (
            <form className="col-md-12 nopadding" onSubmit={this.handleSubmit}>
                <div className={"input-group" + (this.props.error_add ? " error" : "")}>
                    <input 
                        type="text" 
                        className="form-control"
                        id="rss_url"
                        value={rss_url}
                        onChange={this.handleChange}
                        placeholder={this.props.type === 'anime' ? 'https://www.jetanime.co/rss/...' : this.props.type === 'manga' && 'http://fanfox.net/rss/...' }
                        aria-label={this.props.type === 'anime' ? 'https://www.jetanime.co/rss/...' : this.props.type === 'manga' && 'http://fanfox.net/rss/...' }
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">Ajouter</button>
                    </div>
                </div>
            </form>
        );
    }
}

const AddForm = connect(mapStateToProps, {add, clearErrorAdd})(ConnectedAddForm)

export default AddForm;