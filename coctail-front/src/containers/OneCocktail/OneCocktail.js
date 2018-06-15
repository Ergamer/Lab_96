import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from "react-bootstrap";

class OneCocktail extends Component{
    componentDidMount () {
    }

    render () {
        return (
            <Panel>
                <Panel.Body>
                    <h1>Cocktails</h1>
                    {this.props.cocktails.map(cocktail => {
                        return <p onClick={this.props.users ? () => this.props.fetchPostThisTrackInfo(cocktail._id, this.props.users.token) : null}
                                  key={cocktail._id}>{cocktail.number + '. ' + cocktail.title}</p>
                    })}
                </Panel.Body>
            </Panel>
        );
    }

}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails.cocktails,
        users: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {

};

export default connect(mapStateToProps, mapDispatchToProps)(OneCocktail);