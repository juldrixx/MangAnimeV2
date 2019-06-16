// src/js/components/Anime.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import AnimeActions from "./AnimeActions";
import { update } from "../actions";

const mapStateToProps = (state) => {
    return {
        animes: state.animes        
    };
};

class ConnectedAnime extends Component {
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
        this.props.update([this.props.anime.id, this.state.last_viewed, 'anime']);
        this.setState({cliked: false});
    }

    handleChange = (event) => {
        event.preventDefault();
        event.target.value >= 0 && event.target.value <= this.props.anime.release_number && this.setState({[event.target.id]: event.target.value});
    }

    componentDidMount() {
        this.setState({last_viewed:this.props.anime.last_viewed});
    }

    componentWillReceiveProps(newProps) {
        this.setState({last_viewed: newProps.anime.last_viewed, cliked: false});
    }

    render() {
        const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        const day = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        const {last_viewed} = this.state;
        const {anime} = this.props;
        return (           
            <tr>
                <td>{anime.not_completed && "Not Completed"}</td>
                <td title={day[anime.release_date.day_name] + ' à ' + anime.release_date.hour + 'h' + anime.release_date.minute}>{anime.release_date.day + ' ' + month[anime.release_date.month] + ' ' + anime.release_date.year}</td>
                <td>{anime.name}</td>
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
                                max={anime.release_number}
                                step="0.1"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">Ok</button>
                            </div>
                        </div>
                    </form>
                </td> : <td onClick={this.handleClick}>{anime.last_viewed}</td>}
                <td>{anime.release_number}</td>
                <td>
                    <AnimeActions anime={anime} />
                </td>                    
            </tr>
        );
    }
}

const Anime = connect(mapStateToProps, {update})(ConnectedAnime);

export default Anime;