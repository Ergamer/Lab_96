import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from "react-bootstrap";
import {deleteOneCocktail, getOneCocktail} from "../../store/actions/cocktails";
import {Link} from "react-router-dom";
import './OneCocktail.css';


class OneCocktail extends Component{
    componentDidMount () {
        this.props.getOneCocktail(this.props.match.params.id);

    }

    render () {
        return (
                <Panel>
            {this.props.cocktail ?
                    <Panel.Body>
                        <h1>Cocktail</h1>
                        <div>
                            <img src={'http://localhost:8000/uploads/' + this.props.cocktail.image} alt=""/>
                            <h2>{this.props.cocktail.title}</h2>
                            <div>
                                <h3>Ingredients: </h3>
                                {this.props.cocktail.ingredients.map((ingredient, index) => {
                                    return (
                                        <div key={index}>
                                            <p>{`${ingredient.name} ${ingredient.amount} ml or gr`}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <p><b>Recipe:</b> {this.props.cocktail.recipe}</p>
                            <button className="RemoverButton" onClick={() => this.props.deleteOneCocktail(this.props.cocktail._id)}
                            >Remove cocktail</button>
                            <Link className="LinkEditor" to={"/editor/" + this.props.cocktail._id}>Edit cocktail</Link>
                        </div>
                    </Panel.Body>: null
            }
                </Panel>

        );
    }

}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails.cocktails,
        users: state.users.user,
        cocktail: state.cocktails.cocktail
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getOneCocktail: (id) => dispatch(getOneCocktail(id)),
        deleteOneCocktail: (id) => dispatch(deleteOneCocktail(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(OneCocktail);