import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles =  {
      height: "100vh",
      width: "100vw",
      backgroundColor: isDarkMode ? "#272727":"#fff"
    }
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;
