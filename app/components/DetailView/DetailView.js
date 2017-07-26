import React, { Component } from 'react';

export class DetailView extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      index: 0
    }
  }

  displayImages() {
    const { imageUrls } = this.props.detail;

    if (!imageUrls) {
      return <p>loading</p>
    } else if (!imageUrls.length) {
      return <p>no images found</p>
    }

    return this.cycleThrough(imageUrls)
  }

  cycleThrough(imageUrls) {
    const { index } = this.state;
    const count = imageUrls.length;
    const newIndex = (index + 1) >= imageUrls.length ? 0 : index + 1

    setTimeout(() => {
      this.setState({index: newIndex});
    }, 2000)

    return <img src={imageUrls[newIndex]} alt=""/>
  }

  render() {

    return (
      <div>
        {this.displayImages()}
      </div>
    )
  }

}
