import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import { connect } from 'react-redux';
import { getFoos } from './store/foos';

/**
 * MERN Application
 *
 * Here, we put the "R" in our MERN application.
 * Maybe describe some more stuff here when actually
 * using this boilerplate.
 */
class App extends Component {
  /**
   * Fetch "foos" from the API, when the
   * component mounts.
   */
  componentDidMount() {
    this.props.getFoos();
  }

  /**
   * Render component.
   *
   * @return {Component}
   */
  render() {
    return (
      <div className="app">
        <header>
          <h1>Example MERN App</h1>
        </header>
        <ul>
          {this.props.foos.map(foo => {
            return <li key={foo._id}>{foo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ foos: state.foos }), // Lack of brevity for clarity, could be `({ ...state })`.
  { getFoos }
)(App);
