import styles from "./searchBar.module.scss";
import Search_icon from "../assets/desktop/icon-search.svg";
import Location from "../assets/desktop/icon-location.svg";

const SearchBar: React.FC = () => {
	return (
		<>
			<div className={styles.search_bar}>
				<div className={styles.input_container}>
					<img src={Search_icon} alt="" className={styles.search_icon} />
					<input type="text" placeholder="Filter by title, companies, expertise…" className={styles.input_text} />
					<input type="text" placeholder="Filter by title…" className={styles.input_text_tablet} />
				</div>
				<div className={styles.location_container}>
					<img src={Location} alt="" className={styles.location_icon} />
					<input type="text" placeholder="Filter by location…" className={styles.input_location} />
				</div>
				<div className={styles.btn_container}>
					<input type="checkbox" className={styles.input_checkbox} />
					<p className={styles.btn_text}>Full Time Only</p>
					<p className={styles.btn_text_tablet}>Full Time</p>
					<button className={styles.btn_search}>Search</button>
				</div>
			</div>

			<div className={styles.search_bar_mobile}></div>
		</>
	);
};

export default SearchBar;
