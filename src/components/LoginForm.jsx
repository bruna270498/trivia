import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HiOutlineMail } from 'react-icons/hi';
import { MdPersonOutline } from 'react-icons/md';
import { getToken } from '../fetchAPI';
import { addEmail, sendToken } from '../redux/actions';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      botaoDisable: true,
      loginEmail: '',
      loginName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange = ({ target: { name, value } }) => {
    const size = 10;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({ [name]: value }, () => {
      const { loginEmail, loginName } = this.state;
      if (loginEmail.match(regex) && loginName.length >= size) {
        this.setState({ botaoDisable: false });
      } else {
        this.setState({ botaoDisable: true });
      }
    });
  };

  handleButton = async () => {
    const { dispatch, history } = this.props;
    const { loginEmail, loginName } = this.state;
    const objectToken = await getToken();
    dispatch(addEmail(loginEmail, loginName));
    this.setState({
      loginName: ' ',
      loginEmail: '',
    });
    localStorage.setItem('token', objectToken.token);
    dispatch(sendToken(objectToken.token));
    history.push('/main');
  };

  render() {
    const { botaoDisable, loginEmail, loginName } = this.state;
    return (
      <div>
        <h1 className="title1">Login</h1>
        <form>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Nome"
                id="loginName"
                name="loginName"
                onChange={ this.handleChange }
                value={ loginName }
              />
              <span className="icon is-small is-left">
                <MdPersonOutline />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                id="loginEmail"
                name="loginEmail"
                onChange={ this.handleChange }
                value={ loginEmail }
              />
              <span className="icon is-small is-left">
                <HiOutlineMail />
              </span>
            </p>
          </div>
          <button
            type="button"
            data-testid="btn-play"
            disabled={ botaoDisable }
            onClick={ this.handleButton }
            className="button is-black"
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(LoginForm);
