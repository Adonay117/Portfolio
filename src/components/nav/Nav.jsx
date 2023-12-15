import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";
import '../../css/hover.css'

import { Link} from 'react-scroll';



function Nav() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header><a href="/">
			<div className="logo hvr-grow" >

<svg viewBox="0 0 89 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.125 7.55001V14.7323H55.3396L45.0814 8.76953L44.917 8.67148L34.5005 14.7323H33.5569V7.55001L44.8379 0L56.125 7.55001Z" fill="#B7C974"/>
<path d="M11.3662 20.6706L17.9108 23.5141L17.6003 24.2434L8.09091 31.3583L7.93871 31.4686L9.32677 43.4983L8.9554 44.3686L2.41084 41.5189L0 28.098L11.3662 20.6706Z" fill="#B7C974"/>
<path d="M2.17341 59.9405L8.33443 56.3309L8.73015 57.0173L8.77277 68.9368V69.1267L19.2136 75.1447L19.6885 75.9659L13.5275 79.5754L1.36371 73.5575L1.7229 67.5824L2.17341 59.9405Z" fill="#B7C974"/>
<path d="M87.6119 59.2909L81.4448 55.6813L81.0491 56.3616L81.0065 68.2872V68.4771L70.5656 74.4951L70.0908 75.3163L76.2579 78.9258L88.4155 72.9079L87.6119 59.2909Z" fill="#B7C974"/>
<path d="M77.4877 20.7625L71.004 23.7408L71.3266 24.464L80.97 31.3828L81.1222 31.4931L79.9715 43.5474L80.3673 44.4114L86.851 41.4331L89 27.9632L77.4877 20.7625Z" fill="#B7C974"/>
<path d="M74.4802 32.4246V60.253H63.5158V38.8838L45.0023 28.1287L44.7222 27.9632L25.9287 38.8838V60.7371L44.7222 71.6577L45.0023 55.0317H32.6802V43.6087H56.3502V77.406L45.0023 84L15.2017 66.8715V32.4246L44.8379 15.1981L45.0023 15.2961L55.2605 21.2528L56.3502 21.8901L74.4802 32.4246Z" fill="#B7C974"/>
</svg>
		</div>
		</a>


			<nav ref={navRef}>
			<Link 
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>
	  <Link 
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Work
      </Link>
	  {/* <Link 
        activeClass="active"
        to="design"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Design
      </Link> */}

				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav;



