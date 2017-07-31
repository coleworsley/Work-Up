import React, { Component } from 'react';
import './ExerciseImage.css'

export default class ExerciseImage extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      interval: 2000,
    }
    this.cycleThrough = this.cycleThrough.bind(this)
  }


  componentDidMount() {
    const interval = setInterval(this.cycleThrough, 2000);
    this.setState({interval})
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  cycleThrough() {
    const { imageUrls } = this.props;
    const { index } = this.state;

    let newIndex = index;
    if (imageUrls) {
      newIndex = (index + 1) >= imageUrls.length ? 0 : index + 1;
    }

    this.setState({ index: newIndex })
  }

  render() {
    const { imageUrls } = this.props;
    const { index } = this.state;

    if (!imageUrls) {
      return <p className='detail-placeholder'>Loading</p>
    } else if (!imageUrls.length) {
      return <p className='detail-placeholder'>No images found</p>
    }

    return <img src={imageUrls[index]} className='detail-image'/>
  }
}
