//vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';

//utils
import { getBreadcrumbConfig } from '../../utils/breadcrumbUtils';

//styled components
import { BreadcrumbContainer } from './breadcrumb.styled';

const mapStateToProps = (state, { location }) => ({
  breadcrumbInfo: state.productsReducer.breadcrumbInfo,
});

export class Breadcrumb extends Component {
  render() {
    const { breadcrumbInfo } = this.props;

    if (isEmpty(breadcrumbInfo)) return <></>;

    return (
      <BreadcrumbContainer>
        {getBreadcrumbConfig(breadcrumbInfo).map((item, index, info) => {
          const isLastItem = index === info.length - 1;
          return (
            <>
              <span id={item.id} className={isLastItem && 'last-item'}>
                {`${item.name} ${isLastItem ? '' : '>'}`}{' '}
              </span>
            </>
          );
        })}
      </BreadcrumbContainer>
    );
  }
}

export default connect(mapStateToProps)(Breadcrumb);
