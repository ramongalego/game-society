import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackgroundCopy.css';

class BackgroundCopy extends Component {
  state = {
    currentContent: 0
  }

  static  propTypes = {
    bgCopy: PropTypes.string.isRequired,
    overlayCopy: PropTypes.string,
    overlayCta: PropTypes.string,
    copyColour: PropTypes.string,
    isCarousel: PropTypes.bool,
    patternBg: PropTypes.bool
  }

  render() {
    const { copyColour, bgCopy, overlayCopy, overlayCta, patternBg } = this.props;

    return (
      <div className={`bg-copy-container`}>
        {patternBg &&
          <img 
            className='pattern-bg' 
            src='/assets/pattern-bg.png' 
            alt='pattern' 
          />}

        <h1 className='bg-copy' style={copyColour ? { color: copyColour } : {} }>
          {bgCopy}
        </h1>
        <div className='extra-copy'>
          {overlayCopy && <h2 className={overlayCta ? 'overlay-copy' : 'overlay-single-copy'}>{overlayCopy}</h2>}
          {overlayCta && <h2 className='overlay-cta'>{overlayCta}</h2>}
        </div>
      </div>
    );
  }
};

export default BackgroundCopy;