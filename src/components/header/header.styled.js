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
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 20%;
`;

export const SearchBar = styled.input`
  border-radius: 4px;
  border: 1px solid transparent;
  padding-right: 32px;
  padding: 2px 15px;
  width: 80%;
  z-index: 998;

  &:focus {
    outline: 0;
  }
`;

export const SearchButton = styled.button`
  background: 0;
  border: 1px solid transparent;
  height: 27px;
  left: auto;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 2%;
  width: 3%;
  z-index: 999;
`;

export const SearchIcon = styled.div`
  background-image: url(${searchImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 50%;
  z-index: 999;
`;
