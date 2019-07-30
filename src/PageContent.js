import React, { useContext} from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function PageContent(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles =  {
      height: "100vh",
      width: "100vw",
      backgroundColor: isDarkMode ? "#272727":"#fff"
    }
    return (
      <div style={styles}>
        {props.children}
      </div>
    );
}

export default PageContent;
