import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7252277620032388) 0%,
    rgba(0, 0, 0, 0) 77%,
    rgba(0, 0, 0, 0) 84%
  );
`;

export const StyledLink = styled(Link)`
  margin-left: 50px;
`;

export const RightNav = styled.nav`
  right: 50px;
  position: fixed;

  & > a {
    margin-right: 20px;
  }
`;
