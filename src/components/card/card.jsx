//vendors
import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { withRouter } from 'react-router-dom';

//styled components
import {
  CardPrice,
  CardPriceAndLocationContainer,
  CardTitle,
  StyledCard,
  StyledContainer,
  StyledDivider,
  StyledFreeShipping,
  StyledImageContainer,
  StyledInformationContainer,
} from './card.styled';

//assets
import freeShippingIcon from '../../assets/ic_shipping.png';

export class Card extends Component {
  handleOnClick = (id) => () => {
    const { history } = this.props;

    history.push(`/items/${id}`);
  };

  render() {
    const {
      product: {
        address: { state_name },
        id,
        original_price,
        thumbnail,
        title,
        shipping: { free_shipping },
      },
    } = this.props;

    return (
      <StyledContainer onClick={this.handleOnClick(id)}>
        <div className="row" id="card-content">
          <div className="col-2" id="product-image-section">
            <StyledImageContainer src={thumbnail} alt="product-image" />
          </div>
          <div className="col-10" id="product-info-section">
            <StyledInformationContainer>
              <StyledCard>
                <CardPriceAndLocationContainer>
                  {original_price && (
                    <CardPrice>
                      <NumberFormat
                        value={original_price}
                        prefix={'$'}
                        thousandSeparator
                        displayType="text"
                      />
                    </CardPrice>
                  )}
                  {free_shipping && (
                    <StyledFreeShipping
                      src={freeShippingIcon}
                      id="free-shipping"
                    />
                  )}
                  <p>{state_name}</p>
                </CardPriceAndLocationContainer>
                <CardTitle>{title}</CardTitle>
              </StyledCard>
            </StyledInformationContainer>
          </div>
        </div>
        <StyledDivider />
      </StyledContainer>
    );
  }
}

export default withRouter(Card);
