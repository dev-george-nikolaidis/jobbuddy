import styles from "./jobs.module.scss";
import { jobs } from "../../data/data";
const Jobs: React.FC = () => {
	console.log(jobs);

	let displayJobs = jobs.map((job: any) => {
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
		} = job;
		let img = require(`../../assets/logos/${logo}`);

		return (
			<div key={id} className={styles.job_container}>
				<div className={styles.logo_wrapper} style={{ background: logoBackground }}>
					<img src={img} alt="" className={styles.logo} />
				</div>
				<div className={styles.text_content}>
					<p className={styles.timeline}>{`${postedAt} . ${contract}`} </p>
					<h5 className={styles.position}>{position}</h5>
					<p className={styles.company_text}>{company}</p>
					<p className={styles.location}>{location}</p>
				</div>
			</div>
		);
	});

	return (
		<section className={styles.jobs}>
			<div className={styles.jobs_container}>{displayJobs}</div>
		</section>
	);
};

export default Jobs;
