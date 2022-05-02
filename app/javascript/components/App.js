import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Greeting from './Greeting'
import { Provider } from "react-redux";

import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/hello" element={<Greeting greeting="Hello Friend"/>}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
