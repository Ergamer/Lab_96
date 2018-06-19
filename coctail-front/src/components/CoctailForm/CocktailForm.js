import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "react-bootstrap";
import FormElement from "../UI/Form/FormElement";
import {deleteOneCocktail, getOneCocktail, saveCocktailChanges} from "../../store/actions/cocktails";
import {connect} from "react-redux";

class CocktailForm extends Component {
  state = {
    title: '',
    image: '',
    recipe: '',
    ingredients: [{name: '', amount: ''}]
  };

  submitFormHandler = event => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(this.state).forEach(key => {
      if(key === 'ingredients') {
          formData.append(key, JSON.stringify(this.state[key]));
      } else {
          formData.append(key, this.state[key]);
      }

    });

    console.log(this.props.user.token)

    this.props.onSubmit(formData, this.props.user.token);
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  ingredientsChangeHandler = (id, event) => {
    const ingredients = [...this.state.ingredients];
    const currentObject = ingredients[id];
    currentObject[event.target.name] = event.target.value;
    ingredients[id] = currentObject;
    this.setState({ingredients: ingredients})
  };

  addIngredient = () => {
    let ingredients = [...this.state.ingredients];
    ingredients.push({name: '', amount: ''});
    this.setState({ingredients: ingredients});
  };

  removeIngredients = (id) => {
    this.setState((prevState) => {
      let ingredients = [...prevState.ingredients];
      ingredients.splice(id, 1);
      return {ingredients: ingredients}
    });

  };

  fileChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  };

  render() {
    return (
      <Form horizontal onSubmit={this.submitFormHandler}>

        <FormElement
          propertyName="title"
          title="Cocktail title"
          type="text"
          value={this.state.title}
          changeHandler={this.inputChangeHandler}
          required
        />

        {this.state.ingredients.map((ingredient, key) =>
          <Col smOffset={1} key={key}>
            <Col sm={6} md={6}>
              <FormElement
                propertyName="name"
                title={key === 0 ? 'Ingredients' : ''}
                type="text"
                value={ingredient.name}
                changeHandler={(event) => {
                  this.ingredientsChangeHandler(key, event)
                }}
                placeholder="title"
                required
              />
            </Col>
            <Col sm={6} md={4}>
              <FormElement
                propertyName="amount"
                title="Amount"
                type="text"
                value={ingredient.amount}
                changeHandler={(event) => {
                  this.ingredientsChangeHandler(key, event)
                }}
                placeholder="amount"
                required
              />
            </Col>

            <Col sm={2}>
              <Button style={{display: 'inline'}} onClick={this.removeIngredients} bsStyle="primary" type="button">Remove Ingredient</Button>
            </Col>

          </Col>
        )}

        <Col smOffset={2} sm={10}>
          <Button onClick={this.addIngredient} bsStyle="primary" type="button">Add Ingredient</Button>
        </Col>

        <FormElement
          propertyName="recipe"
          title="Cocktail recipe"
          type="textarea"
          value={this.state.recipe}
          changeHandler={this.inputChangeHandler}
          required
        />

        <FormElement
          propertyName="image"
          title="Cocktail image"
          type="file"
          changeHandler={this.fileChangeHandler}
        />

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsStyle="primary" type="submit">Save</Button>
          </Col>
        </FormGroup>
      </Form>
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
        deleteOneCocktail: (id) => dispatch(deleteOneCocktail(id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CocktailForm);
