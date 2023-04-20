import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { addRank, addScore } from '../redux/actions';

class FeedbackForm extends Component {
  handleButton = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleRanking = () => {
    const { history, dispatch, score, email, nome, assertions } = this.props;
    history.push('/ranking');
    dispatch(addRank(score, assertions, email, nome));
    dispatch(addScore(0, 0));
  };

  render() {
    const { score, email, nome, assertions } = this.props;
    const magicNumber = 3;
    return (
      <div className="fed">
        <p data-testid="header-player-name">{ nome }</p>
        <p data-testid="header-player-email">{ email }</p>
        <p data-testid="feedback-total-score">{ `Punctuation: ${score}` }</p>
        <p data-testid="feedback-total-question">{ `Assertions: ${assertions}` }</p>
        <p data-testid="feedback-text">
          { assertions < magicNumber ? 'Could be better...' : 'Well Done!' }
        </p>

        <button
          type="button"
          className="button is-rounded is-ligh btn"
          data-testid="btn-play-again"
          onClick={ this.handleButton }
        >
          Play Again
        </button>

        <button
          type="button"
          className="button is-rounded is-black btn"
          data-testid="btn-ranking"
          onClick={ this.handleRanking }
        >
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  email: state.email.email,
  nome: state.email.nome,
  assertions: state.player.assertions,
});

FeedbackForm.propTypes = {
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(FeedbackForm);
