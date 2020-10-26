//vendors
import styled, { css } from 'styled-components';
import NumberFormat from 'react-number-format';

export const StyledContainer = styled.div`
  background-color: #fff;
  margin: 0 130px;
  padding: 32px;
  color: #333333;
  text-align: left;
`;

export const StyledBuySection = styled.div`
  & > * {
    margin-bottom: 32px;
  }
`;

export const StyledImage = styled.img`
  height: 680px;
  width: 680px;
`;

export const StyledBuyButton = styled.button`
  background-color: #3483fa;
  border: none;
  color: #ffffff;
  width: inherit;
  display: block;
  height: 32px;
  border-radius: 4px;
`;

export const StateOfProduct = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
`;

export const Title = styled.h4`
  font-size: 24px;
`;

export const NumberFormatStyled = styled(NumberFormat)`
  font-size: 46px;
  display: block;
`;

export const DescriptionTitle = styled.h4`
  font-size: 28px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #999999;
`;

export const DescriptionContainer = styled.div`
  margin-top: 32px;

  & > * {
    margin-bottom: 32px;
  }
`;
