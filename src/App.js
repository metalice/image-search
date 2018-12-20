import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./components/searchBar";
import Images from "./components/images";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Provider } from "react-redux";
import store from "./store/store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container fluid>
            <SearchBar />
            <Images />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
