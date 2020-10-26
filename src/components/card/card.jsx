//vendors
import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

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
import freeShipping from '../../assets/ic_shipping.png';

//utils
import { getTranslation } from '../../utils/translationsUtils';

export class Card extends Component {
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
      <StyledContainer>
        <div className="row">
          <div className="col-2">
            <StyledImageContainer src={thumbnail} alt="product-image" />
          </div>
          <div className="col-10">
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
                  {free_shipping && <StyledFreeShipping src={freeShipping} />}
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

export default Card;
