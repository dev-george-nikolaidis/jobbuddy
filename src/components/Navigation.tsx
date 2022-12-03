import styles from "./navigation.module.scss";
import Logo from "../assets/desktop/logo.svg";
import Light_icon from "../assets/desktop/icon-sun.svg";
import Dark_icon from "../assets/desktop/icon-moon.svg";
import { BsToggle2Off, BsToggle2On, BsToggleOff, BsToggleOn } from "react-icons/bs";
import Toggle_on from "../assets/desktop/toggle-on.svg";
import Toggle_off from "../assets/desktop/toggle-off.svg";

// Libraries
import { NavLink } from "react-router-dom";
import { useGeneralContext } from "../context/GeneralContext";
import { useState } from "react";
import SearchBar from "./SearchBar";

interface Props {
	section?: string;
}
const Navigation: React.FC<Props> = ({ section }) => {
	const {
		state: {},
	} = useGeneralContext();

	const [isLightTheme, setIsLightTheme] = useState(true);
	return (
		<nav className={styles.navigation}>
			<div className={styles.nav_wrapper}>
				<div className={styles.logo_wrapper}>
					<NavLink to="/" end>
						<img src={Logo} alt="" className={styles.logo} />
					</NavLink>
				</div>
				<div className={styles.theme_container} onClick={() => setIsLightTheme(!isLightTheme)}>
					<img src={Light_icon} alt="" className={`${styles.light_icon} ${styles.icon}`} />
					{isLightTheme ? <img src={Toggle_on} alt="" /> : <img src={Toggle_off} alt="" />}
					<img src={Dark_icon} alt="" className={`${styles.dark_icon} ${styles.icon}`} />
				</div>
			</div>
			{section ? null : <SearchBar />}
		</nav>
	);
};

export default Navigation;
