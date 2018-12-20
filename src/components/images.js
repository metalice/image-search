import React, { Component } from "react";
import { connect } from "react-redux";
import { getImages } from "../store/actions/action";
import { Grid } from "semantic-ui-react";
import ColumnRender from "./image";

export class images extends Component {
  render() {
    let key = 0;
    let data = "";
    if (this.props.imagesReady) {
      data = this.props.images.map(el => {
        key++;
        return <ColumnRender key={key} subset={el} />;
      });
    } else if (this.props.searchTerm) {
      data = <h1>No Results</h1>;
    }

    return (
      <Grid columns={3} centered padded>
        {data}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images,
  searchTerm: state.searchTerm,
  imagesReady: state.imagesReady
});

const mapDispatchToProps = { getImages };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(images);
