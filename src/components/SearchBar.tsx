import styles from "./searchBar.module.scss";
import Search_icon from "../assets/desktop/icon-search.svg";
import Search_icon_white from "../assets/desktop/icon-search-white.svg";
import Location from "../assets/desktop/icon-location.svg";
import Filter_icon from "../assets/mobile/icon-filter.svg";
import { useState } from "react";
import { useGeneralContext } from "../context/GeneralContext";
import { ActionTypes } from "../context/Actions";

const SearchBar: React.FC = () => {
	const {
		state: { jobs },
		dispatch,
	} = useGeneralContext();

	const [filter_by_company, set_filter_by_company] = useState("");
	const [filter_by_location, set_filter_by_location] = useState("");
	const [filter_by_fulltime, set_filter_by_fulltime] = useState(false);
	const [filter_by_title, set_filter_by_title] = useState("");

	const handler_filter = () => {
		if (filter_by_company) {
			if (filter_by_location && filter_by_fulltime) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (
						job.company.toLowerCase() === filter_by_company.toLocaleLowerCase() &&
						job.location.toLowerCase() === filter_by_location.toLocaleLowerCase() &&
						job.contract.toLowerCase() === "full time"
					) {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}

			if (filter_by_location) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (job.company.toLowerCase() === filter_by_company.toLocaleLowerCase() && job.location.toLowerCase() === filter_by_location.toLocaleLowerCase()) {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}
			if (filter_by_fulltime) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (job.company.toLowerCase() === filter_by_company.toLocaleLowerCase() && job.contract.toLowerCase() === "full time") {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}

			const filtered_jobs = jobs.filter((job: any) => {
				if (job.company.toLowerCase() === filter_by_company.toLocaleLowerCase()) {
					return job;
				}
				return;
			});

			dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
			return;
		}

		if (filter_by_location) {
			if (filter_by_company && filter_by_fulltime) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (
						job.company.toLowerCase() === filter_by_company.toLocaleLowerCase() &&
						job.location.toLowerCase() === filter_by_location.toLocaleLowerCase() &&
						job.contract.toLowerCase() === "full time"
					) {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}

			if (filter_by_company) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (job.company.toLowerCase() === filter_by_company.toLocaleLowerCase() && job.location.toLowerCase() === filter_by_location.toLocaleLowerCase()) {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}
			if (filter_by_fulltime) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (job.location.toLowerCase() === filter_by_location.toLocaleLowerCase() && job.contract.toLowerCase() === "full time") {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}

			const filtered_jobs = jobs.filter((job: any) => {
				if (job.location.toLowerCase() === filter_by_location.toLocaleLowerCase()) {
					return job;
				}
				return;
			});
			dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
		}

		if (filter_by_fulltime) {
			if (filter_by_location && filter_by_company) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (
						job.company.toLowerCase() === filter_by_company.toLocaleLowerCase() &&
						job.location.toLowerCase() === filter_by_location.toLocaleLowerCase() &&
						job.contract.toLowerCase() === "full time"
					) {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}

			if (filter_by_location) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (job.contract.toLowerCase() === "full time" && job.location.toLowerCase() === filter_by_location.toLocaleLowerCase()) {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}
			if (filter_by_company) {
				const filtered_jobs = jobs.filter((job: any) => {
					if (job.company.toLowerCase() === filter_by_company.toLocaleLowerCase() && job.contract.toLowerCase() === "full time") {
						return job;
					}
				});

				dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
				return;
			}

			const filtered_jobs = jobs.filter((job: any) => {
				if (job.contract.toLowerCase() === "full time") {
					return job;
				}
				return;
			});

			dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
			return;
		}
	};

	const filter_by_title_handler = () => {
		const filtered_jobs = jobs.filter((job: any) => {
			if (job.position.toLowerCase() === filter_by_title.toLocaleLowerCase()) {
				return job;
			}
			return;
		});
		dispatch({ type: ActionTypes.FILTER_JOBS, payload: filtered_jobs });
	};

	return (
		<>
			<div className={styles.search_bar}>
				<div className={styles.input_container}>
					<img src={Search_icon} alt="" className={styles.search_icon} />
					<input
						type="text"
						placeholder="Filter by title, companies, expertise…"
						className={styles.input_text}
						value={filter_by_company}
						onChange={(e) => set_filter_by_company(e.target.value)}
					/>
					<input type="text" placeholder="Filter by title…" className={styles.input_text_tablet} value={filter_by_company} onChange={(e) => set_filter_by_company(e.target.value)} />
				</div>
				<div className={styles.location_container}>
					<img src={Location} alt="" className={styles.location_icon} />
					<input type="text" placeholder="Filter by location…" className={styles.input_location} value={filter_by_location} onChange={(e) => set_filter_by_location(e.target.value)} />
				</div>
				<div className={styles.btn_container}>
					<input type="checkbox" className={styles.input_checkbox} onChange={() => set_filter_by_fulltime(!filter_by_fulltime)} />
					<p className={styles.btn_text}>Full Time Only</p>
					<p className={styles.btn_text_tablet}>Full Time</p>
					<button className={styles.btn_search} onClick={handler_filter}>
						Search
					</button>
				</div>
			</div>

			<div className={styles.search_bar_mobile}>
				<input type="text" placeholder="Filter by title…" className={styles.input_text_tablet} value={filter_by_title} onChange={(e) => set_filter_by_title(e.target.value)} />
				<div className={styles.icons_wrapper}>
					<div className={styles.filter_wrapper}>
						<img src={Filter_icon} alt="" className={styles.filter_icon} />
					</div>
					<div className={styles.search_wrapper_icon} onClick={filter_by_title_handler}>
						<img src={Search_icon_white} alt="" className={styles.search_icon_mobile} />
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
