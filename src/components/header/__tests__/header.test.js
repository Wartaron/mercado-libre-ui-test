//vendors
import React from 'react';
import { shallow } from 'enzyme';

//component
import { Header } from '../header';

//styled components
import {
  LinkImage,
  SearchBar,
  SearchButton,
  SearchIcon,
  StyledHeader,
  TitleHeader,
} from '../header.styled';

const mockText = 'Some text';
let props;

describe('Header', () => {
  beforeEach(() => {
    props = {
      getProductsByQuery: jest.fn(),
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should render correctly', () => {
    const headerComponent = shallow(<Header {...props} />);

    expect(headerComponent.find(SearchBar)).toHaveLength(1);
    expect(headerComponent.find(LinkImage)).toHaveLength(1);
    expect(headerComponent.find(SearchButton)).toHaveLength(1);
  });

  describe('handleGetQuery', () => {
    it('should handle get query and fetch data', () => {
      const headerComponent = shallow(<Header {...props} />);
      headerComponent.setState({ searchParam: mockText });
      const instance = headerComponent.instance();

      instance.handleGetQuery();

      expect(props.getProductsByQuery).toHaveBeenCalled();
      expect(props.history.push).toHaveBeenCalled();
    });
  });

  describe('handleOnKeyDown', () => {
    it('should handle get query and fetch data', () => {
      const headerComponent = shallow(<Header {...props} />);
      headerComponent.setState({ searchParam: mockText });
      const instance = headerComponent.instance();

      instance.handleOnKeyDown({ key: 'Enter' });

      expect(props.getProductsByQuery).toHaveBeenCalled();
      expect(props.history.push).toHaveBeenCalled();
    });
  });

  describe('handleOnChange', () => {
    it('should handle get query and fetch data', () => {
      const headerComponent = shallow(<Header {...props} />);
      headerComponent.setState({ searchParam: mockText });
      const instance = headerComponent.instance();

      instance.handleOnChange({ target: { value: mockText } });

      expect(instance.state.searchParam).toEqual(mockText);
    });
  });
});
