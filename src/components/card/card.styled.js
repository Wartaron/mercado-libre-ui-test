import styled, { css } from 'styled-components';

const SharedStyles = css`
  color: #666666;
`;

export const StyledContainer = styled.div`
  margin: auto;
  padding: 16px;
  padding-bottom: 0;
  width: auto;
`;

export const StyledDivider = styled.div`
  margin-top: 16px;
  border-bottom: 1px solid #eeeeee;
`;

export const StyledImageContainer = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 4px;
  margin-right: 16px;
`;

export const StyledInformationContainer = styled.div`
  padding: 30px;
  padding-bottom: 50px;
`;

export const StyledCard = styled.div`
  color: white;
  z-index: 2;
  text-align: left;
`;

export const StyledParagraph = styled.p`
  text-align: left;
`;

export const CardTitle = styled.h4`
  ${SharedStyles}
  font-size: 18px;
`;

export const CardPriceAndLocationContainer = styled.div`
  ${SharedStyles}

  align-items: center;
  display: flex;
  margin-bottom: 32px;

  & > * {
    margin: 0 16px 0 0;
  }

  & > :last-child {
    position: absolute;
    right: 20%;
  }
`;

export const CardPrice = styled.p`
  font-size: 24px;
`;

export const StyledFreeShipping = styled.img`
  height: 24px;
  width: 24px;
`;
