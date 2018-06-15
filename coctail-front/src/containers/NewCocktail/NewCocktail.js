import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import CocktailForm from "../../components/CoctailForm/CocktailForm";
import {createCocktail} from "../../store/actions/cocktails";



class NewCocktail extends Component {
  // componentDidMount () {
  //   this.props.cocktailCreated();
  // }

  createCocktail = (cocktailData, token) => {
    this.props.cocktailCreated(cocktailData, token);
    console.log(this.props.users);
  };

  render() {
  console.log('asdfafsd');
    return (
      <Fragment>
        <PageHeader>New cocktail</PageHeader>
        <CocktailForm
          onSubmit={this.createCocktail}
          user={this.props.users}
          // categories={this.props.categories}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  cocktailCreated: (cocktailData, token) =>  dispatch(createCocktail(cocktailData, token))
  }
);

const mapStateToProps = state => ({
  users: state.users.user
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCocktail);