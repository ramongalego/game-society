import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';
import Phone from '../Phone';
import Television from '../Television';
import { carouselContent } from '../../util/constants';

class Carousel extends Component {
  state = {
    currentContent: 0,
    intervalId: null
  }

  static propTypes = {
    isSecret: PropTypes.bool,
    copyTop: PropTypes.bool,
    copyBottom: PropTypes.bool
  }

  handleCarouselTiming = () => {
    const { currentContent } = this.state;

    currentContent < (carouselContent[0].images.length - 1)
      ? this.setState({ currentContent: currentContent + 1 })
      : this.setState({ currentContent: 0 });
  }

  handleCarouselClick = (index) => {
    this.setState({ currentContent: index });
  }

  componentDidMount() {
    const intervalId = setInterval(this.handleCarouselTiming, 5000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { currentContent } = this.state;
    const { isSecret, copyTop, copyBottom } = this.props;

    if (isSecret) {
      return <div>secret carousel</div>;
    }

    return (
      <Fragment>
        <div>
          <Television currentImage={carouselContent[0].images[currentContent]} />
          {copyTop && <p className='carousel-copy'>{carouselContent[0].copies[currentContent]}</p>}
          <div className='dot-container'>
            {carouselContent[0].images.map((image, index) => (
              <div
                key={image}
                className={`dot ${currentContent === index ? 'dot-selected': ''}`}
                onClick={() => this.handleCarouselClick(index)} />
            ))}
          </div>
          {copyBottom && <p className='carousel-copy'>{carouselContent[0].copies[currentContent]}</p>}
        </div>
        <Phone currentImage={carouselContent[0].images[currentContent]} />
      </Fragment>
    );
  }
}

export default Carousel;
