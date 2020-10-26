//vendors
import React, { Component } from 'react';

//components
import SecondaryContent from '../secondary-content/secondary-content';

export default class Content extends Component {
  render() {
    return (
      <section className="ajust-content text-white mt-5">
        <div className="container mw-100 p-3">
          <SecondaryContent />
        </div>
      </section>
    );
  }
}
