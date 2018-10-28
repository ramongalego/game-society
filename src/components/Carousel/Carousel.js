import React, { Component, Fragment } from 'react';
import './Carousel.css';
import Phone from '../Phone';
import Television from '../Television';

class Carousel extends Component {
  state = {
    images: ['amazeballs', 'bullshitter'],
    currentImage: 0,
    intervalId: null
  }

  handleCarouselTiming = () => {
    const { currentImage, images } = this.state;

    currentImage < (images.length - 1)
      ? this.setState({ currentImage: currentImage + 1 })
      : this.setState({ currentImage: 0 });
  }

  handleCarouselClick = (index) => {
    this.setState({ currentImage: index });
  }

  componentDidMount() {
    const intervalId = setInterval(this.handleCarouselTiming, 5000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { images, currentImage } = this.state;
    const { isSecret, children } = this.props;

    if (isSecret) {
      return <div>secret carousel</div>;
    }

    return (
      <Fragment>
        <div>
          <Television currentImage={images[currentImage]} />
          <div className='dot-container'>
            {images.map((image, index) => (
              <div
                key={image}
                className={`dot ${currentImage === index ? 'dot-selected': ''}`}
                onClick={() => this.handleCarouselClick(index)} />
            ))}
          </div>
        </div>
        <Phone currentImage={images[currentImage]} />
      </Fragment>
    );
  }
}

export default Carousel;
