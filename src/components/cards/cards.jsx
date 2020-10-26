//vendors
import React, { Component } from 'react';
import { isEmpty } from 'ramda';

//components
import Card from '../card/card';

//utils
import { getTranslation } from '../../utils/translationsUtils';

export class Cards extends Component {
  render() {
    const { products } = this.props;

    return (
      <>
        {!isEmpty(products) && (
          <div className="row">
            {products.map((product, index) => {
              return (
                <div className="col-12 mb-0">
                  <Card product={product} key={index} />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default Cards;
