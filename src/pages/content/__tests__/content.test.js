//vendors
import React from 'react';
import { shallow } from 'enzyme';

//component
import { Content } from '../content';
import Cards from '../../../components/cards/cards';

const mockText = 'Some Text';
let props;

describe('Content', () => {
  beforeEach(() => {
    props = {
      products: [],
      query: { search: mockText },
      getProductsByQuery: jest.fn(),
    };
  });

  it('should render correctly', () => {
    const content = shallow(<Content {...props} />);

    expect(content.find(Cards)).toHaveLength(1);
  });
});
