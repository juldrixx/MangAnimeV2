// src/js/components/AddForm.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";

import { addAnime, addManga } from "../actions/index";

function mapDispatchToProps(dispatch, ownProps) {
    if (ownProps.type === 'anime') {
        return {
            addAnime: anime => dispatch(addAnime(anime))
        };
    }
    else if (ownProps.type === 'manga') {
        return {
            addManga: manga => dispatch(addManga(manga))
        };
    }
}

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
        const id = uuidv1();
        
        this.props.type === 'anime' ? this.props.addAnime({rss_url, id}) : this.props.type === 'manga' && this.props.addManga({rss_url, id});
        this.setState({rss_url: ""});
    }

    render() {
        const {rss_url} = this.state;
        return (
            <form className="col-md-12 nopadding" onSubmit={this.handleSubmit}>
                <div className="input-group">
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

const AddForm = connect(null, mapDispatchToProps)(ConnectedAddForm)

export default AddForm;