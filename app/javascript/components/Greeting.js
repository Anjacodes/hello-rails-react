import React from "react"
import PropTypes from "prop-types"
class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  greeting: PropTypes.node
};
export default Greeting
