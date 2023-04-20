import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Ranking extends Component {
  handleButton = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { jogador } = this.props;
    return (
      <div className="divPaiRank">
        <h1 data-testid="ranking-title" className="fidTitle">RANKING</h1>
        <div className="divRanks">
          {jogador?.map(({ score, email, nome, assertions }) => (
            <div className="ranck" key={ nome }>
              <p data-testid="header-player-name">{ nome }</p>
              <p data-testid="header-player-email">{ email }</p>
              <p data-testid="feedback-total-score">{ `Punctuation: ${score}` }</p>
              <p data-testid="feedback-total-question">{ `Assertions: ${assertions}` }</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          data-testid="btn-go-home"
          className="button is-light btn"
          onClick={ this.handleButton }
        >
          Play Again
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    jogador: state.rank,
  };
};

Ranking.propTypes = {
  jogador: PropTypes.shape({
    score: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    assertions: PropTypes.number.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Ranking);
