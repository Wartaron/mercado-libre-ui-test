//vendors
import React from 'react';
import { shallow } from 'enzyme';

//component
import { Cards } from '../cards';
import Card from '../../card/card';

const mockText = 'Some Text';
const mockId = 'ASDER54872';
const mockImageURL =
  'https://e-cdns-images.dzcdn.net/images/talk/b6ac80691de071e89c5175a96d38671b/500x500.jpg';
let props, product;

describe('Cards', () => {
  beforeEach(() => {
    product = {
      address: { state_name: mockText },
      id: mockId,
      original_price: Math.random(),
      thumbnail: mockImageURL,
      title: mockText,
      shipping: { free_shipping: false },
    };
    props = {
      products: [product],
    };
  });

  it('should render correctly', () => {
    const cardsComponent = shallow(<Cards {...props} />);

    expect(cardsComponent.find(Card)).toHaveLength(1);
  });

  it('should render correctly', () => {
    props.products = [];
    const cardsComponent = shallow(<Cards {...props} />);

    expect(cardsComponent.find(Card)).toHaveLength(0);
  });
});
