//vendors
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { getProductDetail } from '../../actions/product-detail.actions';
import { getProductDetailDesc } from '../../actions/product-detail-description.actions';

//utils
import {
  getFirstImage,
  getStateOfProduct,
  getPrice,
  getSoldQuantity,
  getTitle,
} from '../../utils/productUtils';
import { getTranslation } from '../../utils/translationsUtils';

//styled components
import {
  StyledContainer,
  StyledImage,
  StyledBuyButton,
  StyledBuySection,
  StateOfProduct,
  Title,
  NumberFormatStyled,
  DescriptionTitle,
  Description,
  DescriptionContainer,
} from './detail-product.styled';

const mapStateToProps = (state, { match }) => {
  return {
    id: match.params.id,
    product: state.productDetailReducer.data,
    productDesc: state.productDetailDescReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProductDetail: bindActionCreators(getProductDetail, dispatch),
  getProductDetailDesc: bindActionCreators(getProductDetailDesc, dispatch),
});

export class DetailProduct extends React.Component {
  componentDidMount() {
    const { getProductDetail, id, getProductDetailDesc } = this.props;

    getProductDetail({ id });
    getProductDetailDesc({ id });
  }

  render() {
    const {
      id,
      product,
      productDesc: { plain_text },
    } = this.props;

    return (
      <StyledContainer>
        <div className="row">
          <div className="col-9">
            <StyledImage src={getFirstImage(product)} />
          </div>
          <StyledBuySection className="col-3">
            <StateOfProduct>
              {getStateOfProduct(product)} - {getSoldQuantity(product)}{' '}
              {getTranslation('detailProduct', 'sold')}
            </StateOfProduct>
            <Title>{getTitle(product)}</Title>
            <NumberFormatStyled
              value={getPrice(product)}
              prefix={'$'}
              thousandSeparator
              displayType="text"
            />
            <StyledBuyButton>
              {getTranslation('detailProduct', 'buy')}
            </StyledBuyButton>
          </StyledBuySection>
        </div>
        <DescriptionContainer>
          <DescriptionTitle>
            {getTranslation('detailProduct', 'productDescription')}
          </DescriptionTitle>
          <Description>{plain_text}</Description>
        </DescriptionContainer>
      </StyledContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
