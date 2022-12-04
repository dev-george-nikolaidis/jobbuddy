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
		const job_filter = jobs.filter((j: any) => {
			if (j.id == job_id) {
				return j;
			}
		});

		dispatch({ type: ActionTypes.FETCH_SINGLE_JOB, payload: job_filter });
	}, [job_id]);

	// if (job_id) {
	// 	// todo add notfound error page
	// 	return <Navigate to="/" state={{ from: pathname }} replace />;
	// }
	let displayJob;
	if (single_job.length > 0) {
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
			requirements: { content, items },
			role: { content: role_content, items: role_items },
		} = single_job[0];
		let img = require(`../../../assets/logos/${logo}`);

		console.log(items);

		displayJob = (
			<div className={styles.job_container}>
				<div className={styles.header}>
					<div className={styles.logo_wrapper} style={{ background: logoBackground }}>
						<img src={img} alt="" className={styles.logo} />
					</div>
					<div className={styles.company_text}>
						<p className={styles.company_name}>{company}</p>
						<p className={styles.company_website}>{`${company}.com`}</p>
					</div>
					<button className={styles.btn_single}>Company Site</button>
				</div>
				<div className={styles.job_detail_container}>
					<div className={styles.flex_container}>
						<div className={styles.job_detail_context}>
							<p className={styles.timeline}>{`${postedAt} . ${contract}`}</p>
							<p className={styles.position_text}>{position}</p>
							<p className={styles.position_location}>{location}</p>
						</div>
						<button className={styles.btn_apply}>Apply Now</button>
					</div>
					<p className={styles.description}>{description}</p>
					<h5 className={styles.subtitle}>Requirements</h5>
					<p className={styles.requirement}>{content}</p>
					<ul>
						{items.map((r: any, index: number) => {
							return (
								<li key={index} className={styles.list_item}>
									<span className={styles.list_text}>{r}</span>
								</li>
							);
						})}
					</ul>
				</div>
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
