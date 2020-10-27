//vendors
import React from 'react';
import NumberFormat from 'react-number-format';
import { shallow } from 'enzyme';

//component
import { Card } from '../card';

const mockText = 'Some Text';
const mockId = 'ASDER54872';
const mockImageURL =
  'https://e-cdns-images.dzcdn.net/images/talk/b6ac80691de071e89c5175a96d38671b/500x500.jpg';
let props, product;

describe('Card', () => {
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
      product,
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should render correctly', () => {
    const cardComponent = shallow(<Card {...props} />);

    expect(cardComponent.find(NumberFormat)).toHaveLength(1);
    expect(cardComponent.find(NumberFormat).props().value).toEqual(
      props.product.original_price
    );
  });

  it('should render correctly with free shipping', () => {
    product.shipping.free_shipping = true;
    const cardComponent = shallow(<Card {...props} product={product} />);

    expect(cardComponent.find(NumberFormat)).toHaveLength(1);
    expect(cardComponent.find(NumberFormat).props().value).toEqual(
      props.product.original_price
    );
    expect(cardComponent.find('#free-shipping')).toHaveLength(1);
  });

  describe('handleOnClick', () => {
    it('should handle the onClick event', () => {
      const cardComponent = shallow(<Card {...props} />);
      const instance = cardComponent.instance();

      instance.handleOnClick(product.id)();

      expect(props.history.push).toHaveBeenCalled();
    });
  });
});
