import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

//components
import { Cards } from '../../components/cards/cards';

//styled
import { SectionContent } from '../App.styled';

//actions
import { getProductsByQuery } from '../../actions/products.actions';

//utils
import { getSearchParams } from '../../utils/stringUtils';

const mapStateToProps = (state, { location }) => ({
  products: state.productsReducer.data,
  query: getSearchParams(location.search),
});

const mapDispatchToProps = (dispatch) => ({
  getProductsByQuery: bindActionCreators(getProductsByQuery, dispatch),
});

export class Content extends React.Component {
  componentDidMount() {
    const { getProductsByQuery, query } = this.props;

    getProductsByQuery({ q: query.search });
  }

  render() {
    const { products } = this.props;

    return (
      <div className="container mw-100">
        <SectionContent>
          <Cards products={products} />
        </SectionContent>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Content)
);
