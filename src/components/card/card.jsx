//vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//styled components
import {
  CardDescription,
  CardTitle,
  PreTextOnPrincipalCard,
  StyledCard,
  StyledContainer,
  StyledInformationContainer,
} from './card.styled';

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
      },
    } = this.props;

    return (
      <StyledContainer image={thumbnail}>
        <StyledInformationContainer>
          <StyledCard>
            <CardTitle>{title}</CardTitle>
          </StyledCard>
        </StyledInformationContainer>
      </StyledContainer>
    );
  }
}

export default Card;
