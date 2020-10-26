import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, { match }) => ({
  pageName: match.params.pageName,
});

export const BlankPage = (props) => {
  return <h1>{props.pageName}</h1>;
};

export default connect(mapStateToProps)(BlankPage);
