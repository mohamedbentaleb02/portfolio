import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./intellcap.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Intellcap</div>
							<div className="work-subtitle">
								web & mobile developer
							</div>
							<div className="work-duration">mar 2023 - jui 2023</div>
						</div>
						<div className="work">
							<img
								src="./infosat.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">INFOSAT</div>
							<div className="work-subtitle">
								Desktop developer
							</div>
							<div className="work-duration">mar 2022 - jui 2022</div>
						</div>
						<div className="work">
							<img
								src="./damanweb.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">DAMAN WEB</div>
							<div className="work-subtitle">
								Front-end developer
							</div>
							<div className="work-duration">oct 2021 - nov 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
