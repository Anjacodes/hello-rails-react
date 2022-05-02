import React from "react"
import PropTypes from "prop-types"

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

function getGreetings() {
  console.log('get Greetings Action')
  return {
    type: GET_GREETINGS_REQUEST
  };
};

class Greeting extends React.Component {
  render () {
    const { greetings } = this.props;
    const greetingsList = greetings.map((greeting) => {
      return <li>{greeting.greeting}</li>
    })

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>get greetings</button>
        <br/>
        <ul>{greetingsList}</ul>

      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
})

const mapDispatchToProps = { getGreetings };

Greeting.propTypes = {
  greeting: PropTypes.node
};
export default connect(structuredSelector, mapDispatchToProps)(Greeting);
