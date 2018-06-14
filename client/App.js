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
    const { foos } = this.props;

    return (
      <div className="app">
        <header>
          <h1>MERN Boilerplate</h1>
        </header>
        {foos.length ? (
          <ul>
            {foos.map(foo => {
              return <li key={foo._id}>{foo.title}</li>;
            })}
          </ul>
        ) : (
          <p>There aren't any "foos" in the database yet.</p>
        )}
        <p>
          Try a <code>POST</code> request via Postman to{' '}
          <code>{'https://localhost:8080/foos'}</code> with a body like{' '}
          <code>{'{"title": "My New Foo"}'}</code>.
        </p>
      </div>
    );
  }
}

export default connect(
  state => ({ foos: state.foos }), // Lack of brevity for clarity, could be `({ ...state })`.
  { getFoos }
)(App);
