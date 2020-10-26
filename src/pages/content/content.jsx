import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//components
import { Cards } from '../../components/cards/cards';

//styled
import { SectionContent } from '../App.styled';

//actions
import { getProductsByQuery } from '../../actions/products.actions';

const mapStateToProps = (state) => ({
  products: state.productsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getProductsByQuery: bindActionCreators(getProductsByQuery, dispatch),
});

export class Content extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="container mw-100 p-3">
        <SectionContent className="mt-3">
          <Cards products={products} />
        </SectionContent>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
