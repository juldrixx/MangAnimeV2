// src/js/components/Manga.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import MangaActions from "./MangaActions";
import { update } from "../actions";

const mapStateToProps = (state) => {
    return {
        mangas: state.mangas        
    };
};

class ConnectedManga extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            last_viewed: 0
        };
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({cliked: true});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update([this.props.manga.id, this.state.last_viewed, 'manga']);
        this.setState({cliked: false});
    }

    handleChange = (event) => {
        event.preventDefault();
        event.target.value >= 0 && event.target.value <= this.props.manga.release_number && this.setState({[event.target.id]: event.target.value});
    }

    componentDidMount() {
        this.setState({last_viewed: this.props.manga.last_viewed});
    }

    componentWillReceiveProps(newProps) {
        this.setState({last_viewed: newProps.manga.last_viewed, cliked: false});
    }

    render() {
        const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        const day = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        const {last_viewed} = this.state;
        const {manga} = this.props;
        return (
            <tr>
                <td>{manga.not_completed && "Not Completed"}</td>
                <td title={day[manga.release_date.day_name] + ' à ' + manga.release_date.hour + 'h' + manga.release_date.minute}>{manga.release_date.day + ' ' + month[manga.release_date.month] + ' ' + manga.release_date.year}</td>
                <td>{manga.name}</td>
                {this.state.cliked ?
                <td>
                    <form className="nopadding" onSubmit={this.handleSubmit}>
                        <div className="input-group input-group-sm">
                            <input 
                                type="number" 
                                className="form-control"
                                id="last_viewed"
                                value={last_viewed}
                                onChange={this.handleChange}
                                aria-describedby="basic-addon2"
                                min="0"
                                max={manga.release_number}
                                step="0.1"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">Ok</button>
                            </div>
                        </div>
                    </form>
                </td> : <td onClick={this.handleClick}>{manga.last_viewed}</td>}
                <td>{manga.release_number}</td>
                <td>
                    <MangaActions manga={manga} />
                </td>                    
            </tr>
        );
    }
}

const Manga = connect(mapStateToProps, {update})(ConnectedManga);

export default Manga;