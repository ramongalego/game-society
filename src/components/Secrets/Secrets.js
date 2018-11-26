import React, { Component, Fragment } from 'react';
import './Secrets.css';
import { secretsContent } from '../../util/constants';

class Secrets extends Component {
  state = {
    width: window.innerWidth
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  renderContentOrder = () => {
    const { currentContent, onCarouselClick } = this.props;

    // Changes the order of who goes first between secrets-left and secrets-right
    if (this.state.width >= 725) {
      return (
        <Fragment>
          <div className='secrets-left'>
            <h3>WHY JOIN US?</h3>
            <h2>{secretsContent[currentContent].title}</h2>
            <p>{secretsContent[currentContent].tagline}</p>
            <img src={`/assets/${secretsContent[currentContent].image}`} alt={secretsContent[currentContent].subtitle} />
            <img className='secrets-left-pixel' src={`/assets/pixel1.png`} alt='sprite1' />
            <div className='dot-container'>
              {secretsContent.map((content, index) => (
                <div
                  key={index}
                  className={`dot ${currentContent === index ? 'dot-selected': ''}`}
                  onClick={() => onCarouselClick(index)} 
                />
              ))}
            </div>
          </div>
          <div className='secrets-right'>
            <img src={`/assets/pixel2.png`} alt='sprite2' />
            <h3>HOW IT WORKS | <span>WHAT IT IS</span></h3>
            <h2>{secretsContent[currentContent].rightContent[0]}</h2>
            <p>{secretsContent[currentContent].rightContent[1]}</p>
            <button>READ MORE</button>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className='secrets-right'>
            <h3>HOW IT WORKS | <span>WHAT IT IS</span></h3>
            <h2>{secretsContent[currentContent].rightContent[0]}</h2>
            <p>{secretsContent[currentContent].rightContent[1]}</p>
            <button>READ MORE</button>
          </div>
          <div className='secrets-left'>
            <h3>WHY JOIN US?</h3>
            <h2>{secretsContent[currentContent].title}</h2>
            <p>{secretsContent[currentContent].tagline}</p>
            <img src={`/assets/${secretsContent[currentContent].image}`} alt={secretsContent[currentContent].subtitle} />
            <div className='dot-container'>
              {secretsContent.map((content, index) => (
                <div
                  key={index}
                  className={`dot ${currentContent === index ? 'dot-selected': ''}`}
                  onClick={() => onCarouselClick(index)} 
                />
              ))}
            </div>
          </div>
        </Fragment>
      );
    }
  }
  
  render() {
    return (
      <div className='secrets-container'>
        {this.renderContentOrder()}
      </div>
    );
  }
};

export default Secrets;