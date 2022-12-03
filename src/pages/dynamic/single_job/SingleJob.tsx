import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Navigation from "../../../components/Navigation";
import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import styles from "./singleJob.module.scss";

const SingleJob: React.FC = () => {
	const {
		state: { jobs, single_job },
		dispatch,
	} = useGeneralContext();

	const { pathname } = useLocation();
	const job_id = pathname.split("/")[2];

	useEffect(() => {
		// @ts-ignore
		let jobs_parsed = JSON.parse(localStorage.getItem("jobs"));
		const job_filter = jobs.filter((j: any) => {
			if (j.id == job_id) {
				return j;
			}
		});

		console.log(job_filter);

		localStorage.setItem("single_job", JSON.stringify(job_filter));
		dispatch({ type: ActionTypes.FETCH_SINGLE_JOB });
	}, []);

	// if (job_id) {
	// 	// todo add notfound error page
	// 	return <Navigate to="/" state={{ from: pathname }} replace />;
	// }
	let displayJob;
	if (single_job.length > 0) {
		// console.log(single_job);
		const {
			id,
			company,
			logo,
			logoBackground,
			position,
			postedAt,
			contract,
			location,
			website,
			apply,
			description,
			// requirements: { content, items },
			// role: { content: role_content, items: role_items },
		} = single_job;
		// console.log(logo);
		// let img = require(`../../../assets/logos/${logo}`);
		displayJob = (
			<div className={styles.job_container}>
				<div className={styles.header}></div>
			</div>
		);
	}

	return (
		<section className={styles.single_job}>
			<Navigation section="single_job_page" />
			<div className={styles.display_job_wrapper}>{displayJob}</div>
		</section>
	);
};

export default SingleJob;
