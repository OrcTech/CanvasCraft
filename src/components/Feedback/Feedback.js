/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Feedback.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Feedback extends Component {

  render() {
    return (
      <div className="Feedback">
        <div className="Feedback-container">
          <h1>Sexy Feedback</h1>
        </div>
      </div>
    );
  }

}

export default Feedback;
