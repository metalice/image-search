import React, { Component } from "react";
import { Grid, Image, Modal } from "semantic-ui-react";

export class image extends Component {
  render() {
    return (
      <Grid.Column>
        {this.props.subset.map(el => (
          <Modal key={el.id} trigger={<Image src={el.webformatURL} />}>
            <Modal.Content>
              <Image src={el.largeImageURL} />
            </Modal.Content>
          </Modal>
        ))}
      </Grid.Column>
    );
  }
}

export default image;
