import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getImages,
  changeImageReady,
  changeSearchTerm
} from "../store/actions/action";
import { Form, Input, Button } from "semantic-ui-react";

export class searchBar extends Component {
  state = {
    searchTerm: "",
    style: "bar"
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ ...this.state, style: "barClicked" });
    this.props.changeImageReady();
    this.props.changeSearchTerm(this.state.searchTerm);
    this.props.getImages(this.state.searchTerm);
  };

  onChange = e => {
    this.setState({
      ...this.state,
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <Form className={this.state.style} onSubmit={this.onSubmit}>
        <Input
          size="massive"
          onChange={this.onChange}
          placeholder="Search Images..."
        />
        <Button style={{ marginLeft: "10px" }} size="massive" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = { getImages, changeImageReady, changeSearchTerm };

export default connect(
  null,
  mapDispatchToProps
)(searchBar);
