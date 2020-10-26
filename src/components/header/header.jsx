//vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

//utils
import { getTranslation } from '../../utils/translationsUtils';

//styled components
import {
  LinkImage,
  SearchBar,
  StyledHeader,
  TitleHeader,
  SearchIcon,
  SearchButton,
} from './header.styled';

//actions
import { getProductsByQuery } from '../../actions/products.actions';

const mapDispatchToProps = (dispatch) => ({
  getProductsByQuery: bindActionCreators(getProductsByQuery, dispatch),
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParam: '',
    };
  }

  handleGetQuery = () => {
    const { getProductsByQuery, history } = this.props;
    const { searchParam } = this.state;

    getProductsByQuery({ q: searchParam });
    history.push(`/items?search=${searchParam}`);
  };

  handleOnChange = (event) => {
    this.setState({
      searchParam: event.target.value,
    });
  };

  handleOnKeyDown = (event) => {
    event.key === 'Enter' && this.handleGetQuery();
  };

  render() {
    const { searchParam } = this.state;

    return (
      <StyledHeader>
        <nav
          className="navbar navbar-expand-lg "
          aria-labelledby="mainmenulabel"
        >
          <TitleHeader id="mainmenulabel">
            {getTranslation('title')}
          </TitleHeader>
          <LinkImage to="/" className="nav-logo" aria-current="page" />
          <SearchBar
            placeholder={getTranslation('header', 'searchBarPlaceHolder')}
            value={searchParam}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnKeyDown}
          />
          <SearchButton onClick={this.handleGetQuery}>
            <SearchIcon></SearchIcon>
          </SearchButton>
        </nav>
      </StyledHeader>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Header));
