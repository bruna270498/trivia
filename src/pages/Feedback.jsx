import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeedbackForm from '../components/FeedbackForm';

class Feedback extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="game">
        <p data-testid="feedback-text" className="fidTitle">FEEDBACK</p>
        <FeedbackForm history={ history } />
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Feedback);
