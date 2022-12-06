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
import { darkTheme, defaultTheme } from "../utils/Themes";

interface Props {
	section?: string;
}
const Navigation: React.FC<Props> = ({ section }) => {
	const {
		state: {},
	} = useGeneralContext();
	const [currentTheme, setCurrentTheme] = useState<any>();

	const theme = localStorage.getItem("theme");
	if (theme) {
		let parsedTheme = JSON.parse(theme);

		if (parsedTheme === "light") {
			document.documentElement.style.cssText = defaultTheme;
		}

		if (parsedTheme === "dark") {
			document.documentElement.style.cssText = darkTheme;
		}
	}
	const handlerClick = () => {
		const theme = localStorage.getItem("theme");
		let parsedTheme = "";
		// console.log(theme);
		// set the initial theme value ,run onces
		if (localStorage.getItem("theme") === null) {
			document.documentElement.style.cssText = darkTheme;
			localStorage.setItem("theme", JSON.stringify("dark"));

			return;
		}
		if (theme) {
			parsedTheme = JSON.parse(theme);
		}

		if (parsedTheme === "light") {
			document.documentElement.style.cssText = darkTheme;
			localStorage.setItem("theme", JSON.stringify("dark"));
			// console.log(parsedTheme);
			setCurrentTheme("dark");

			return;
		}
		// default case
		if (parsedTheme === "dark") {
			document.documentElement.style.cssText = defaultTheme;
			localStorage.setItem("theme", JSON.stringify("light"));
			setCurrentTheme("light");
		}
	};
	return (
		<nav className={styles.navigation}>
			<div className={styles.nav_wrapper}>
				<div className={styles.logo_wrapper}>
					<NavLink to="/" end>
						<img src={Logo} alt="" className={styles.logo} />
					</NavLink>
				</div>
				<div className={styles.theme_container}>
					<img src={Light_icon} alt="" className={`${styles.light_icon} ${styles.icon}`} />
					<span onClick={handlerClick}>{currentTheme === "light" ? <img src={Toggle_on} alt="" /> : <img src={Toggle_off} alt="" />}</span>
					<img src={Dark_icon} alt="" className={`${styles.dark_icon} ${styles.icon}`} />
				</div>
			</div>
			{section ? null : <SearchBar />}
		</nav>
	);
};

export default Navigation;
