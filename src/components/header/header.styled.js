//vendors
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//assets
import logo from '../../assets/logo.png';
import searchImg from '../../assets/ic_Search@2x.png.png.png';

export const StyledHeader = styled.header`
  background-color: #ffe600;
  font-size: 18px;
  padding: 0 130px;
`;

export const TitleHeader = styled.h1`
  display: none;
`;

export const LinkImage = styled(Link)`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20%;
  height: 40px;
`;

export const SearchBar = styled.input`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 2px 15px;
  padding-right: 32px;
  width: 80%;
  z-index: 998;

  &:focus {
    outline: 0;
  }
`;

export const SearchButton = styled.button`
  background: 0;
  border: 1px solid transparent;
  position: absolute;
  padding: 0;
  margin: 0;
  left: auto;
  right: 2%;
  height: 27px;
  width: 3%;
  z-index: 999;
`;

export const SearchIcon = styled.div`
  z-index: 999;
  background-image: url(${searchImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 50%;
`;
