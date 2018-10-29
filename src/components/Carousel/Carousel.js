import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';
import Phone from '../Phone';
import Television from '../Television';

class Carousel extends Component {
  state = {
    content: [{
      images: ['amazeballs', 'bullshitter'],
      copies: [
        'Mauris convallis mi ipsum, facilisis varius risus ultrices eu. Praesent magna felis, viverra mollis imperdiet non, fringilla nec dolor. Cras eget pulvinar metus. Nam rutrum nisl id imperdiet placerat.', 
        'Curabitur at gravida enim. Integer orci nulla, euismod sed arcu at, efficitur congue felis. Nullam nec consectetur massa. Donec condimentum, libero eu ornare bibendum, ex dui tincidunt dui, quis pharetra diam mi ultrices ante.'
      ],
    }],
    currentContent: 0,
    intervalId: null
  }

  static propTypes = {
    isSecret: PropTypes.bool,
    copyTop: PropTypes.bool,
    copyBottom: PropTypes.bool
  }

  handleCarouselTiming = () => {
    const { currentContent, content } = this.state;

    currentContent < (content[0].images.length - 1)
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
    const { content, currentContent } = this.state;
    const { isSecret, copyTop, copyBottom } = this.props;

    if (isSecret) {
      return <div>secret carousel</div>;
    }

    return (
      <Fragment>
        <div>
          <Television currentImage={content[0].images[currentContent]} />
          {copyTop && <p className='carousel-copy'>{content[0].copies[currentContent]}</p>}
          <div className='dot-container'>
            {content[0].images.map((image, index) => (
              <div
                key={image}
                className={`dot ${currentContent === index ? 'dot-selected': ''}`}
                onClick={() => this.handleCarouselClick(index)} />
            ))}
          </div>
          {copyBottom && <p className='carousel-copy'>{content[0].copies[currentContent]}</p>}
        </div>
        <Phone currentImage={content[0].images[currentContent]} />
      </Fragment>
    );
  }
}

export default Carousel;
