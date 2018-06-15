import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, PageHeader} from "react-bootstrap";
import {Link} from "react-router-dom";

import {fetchCocktails} from "../../store/actions/cocktails";
import CocktailList from '../../components/CocktailList/CocktailList';

class Cocktails extends Component {
  componentDidMount() {
    this.props.fetchCocktails();
  }

  render() {
        console.log(this.props, '*********');
    return (
      <Fragment>
        <PageHeader>
          Cocktails
          {this.props.user && this.props.user.role === 'admin' &&
          <Link to="/cocktails/new">
            <Button bsStyle="primary" className="pull-right">
              Add cocktail
            </Button>
          </Link>
          }
        </PageHeader>

        {this.props.cocktails.map(cocktail => (
          <CocktailList
            key={cocktail._id}
            id={cocktail._id}
            title={cocktail.title}
            user={cocktail.user}
            image={cocktail.image}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cocktails: state.cocktails.cocktails,
    user: state.users.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCocktails: () => dispatch(fetchCocktails())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);