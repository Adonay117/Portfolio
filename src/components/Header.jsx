import React from "react";
import Toggle from '../components/Toggle'
function Header(){



  
    return(
       
        <div className="header">
           
          <div className="logo">
            <a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146.19 137.07" className="hvr-grow"><g id="a"/><g id="b"><g id="c"><g><polygon class="d" points="92.19 12.32 92.19 24.04 90.9 24.04 74.05 14.31 73.78 14.15 56.67 24.04 55.12 24.04 55.12 12.32 65.52 5.41 73.65 0 81.79 5.41 92.19 12.32"/><polygon class="d" points="18.67 33.73 29.42 38.37 28.91 39.56 13.29 51.17 13.04 51.35 15.32 70.98 14.71 72.4 3.96 67.75 1.74 55.47 0 45.85 8.19 40.53 18.67 33.73"/><polygon class="d" points="3.57 97.81 13.69 91.92 14.34 93.04 14.41 112.49 14.41 112.8 31.56 122.62 32.34 123.96 22.22 129.85 11.01 124.34 2.24 120.03 2.83 110.28 3.57 97.81"/><polygon class="d" points="143.91 96.75 133.78 90.86 133.13 91.97 133.06 111.43 133.06 111.74 115.91 121.56 115.13 122.9 125.26 128.79 136.46 123.28 145.23 118.97 144.65 109.21 143.91 96.75"/><polygon class="d" points="127.28 33.88 116.63 38.74 117.16 39.92 133 51.21 133.25 51.39 131.36 71.06 132.01 72.47 142.66 67.61 144.64 55.28 146.19 45.63 137.89 40.47 127.28 33.88"/><polygon class="d" points="122.34 52.91 122.34 98.32 104.33 98.32 104.33 63.45 92.56 56.65 73.92 45.9 73.46 45.63 42.59 63.45 42.59 99.11 73.46 116.93 73.92 89.8 53.68 89.8 53.68 71.16 92.56 71.16 92.56 126.31 73.92 137.07 24.97 109.12 24.97 52.91 56.54 34.68 73.65 24.8 73.92 24.96 90.77 34.68 92.56 35.72 122.34 52.91"/></g></g></g></svg>
            </a>

          </div>
          <div className="nav">
          <Toggle/>
            <div className="icons-network"> <a href="https://github.com/Adonay117" target="_blank"><i className="fa-brands fa-github-alt hvr-push"></i> </a><a href="https://codepen.io/Adonay-Aragon" target="_blank"><i className="fab fa-codepen hvr-push" > </i></a> <a href="https://www.linkedin.com/in/adonay-arag%C3%B3n-47856b261/" target="_blank"><i class="fa-brands fa-linkedin hvr-push"></i></a> <a href="mailto:adonayaragon2000@gmail.com?subject=&body="><i className="fa-regular fa-envelope hvr-push"></i></a> </div>
          </div>
        </div>

    
    )

}
export default Header;
