import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  margin: auto;
  width: 500px;
  height: 330px;

  & > * {
    position: absolute;
    bottom: 0;
    width: inherit;
  }

  ${(props) =>
    props.isPrincipal
      ? css`
          background-color: rgba(0, 0, 0, 0.4);
        `
      : css`
          background-image: url('${props.image}');
          background-position: top;
          background-repeat: no-repeat;
          background-size: cover;
        `}
`;

export const StyledInformationContainer = styled.div`
  padding: 30px;
  padding-bottom: 50px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.0025386863729867093) 5%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const StyledCard = styled.div`
  color: white;
  z-index: 2;
  text-align: left;
`;

export const StyledParagraph = styled.p`
  text-align: left;
`;

export const PreTextOnPrincipalCard = styled.p`
  font-size: 14px;
  margin-bottom: 0;
`;

export const CardTitle = styled.h4`
  font-size: 40px;
  margin-bottom: 16px;
`;

export const CardDescription = styled.p`
  font-size: 18px;
  font-weight: 100;
`;
