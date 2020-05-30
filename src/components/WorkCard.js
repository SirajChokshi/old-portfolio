import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import './WorkCard.css'
import { BsTerminal, BsTerminalFill, BsBook, BsBookHalf } from 'react-icons/bs';
import { GoRepo as Repo, GoLock as RepoMissing } from 'react-icons/go';

const WorkTag = ({name}) => {

	return (
		<li className="work-tag" data-tag-name={name}>
			{name}
		</li>
		)
};

const WorkCard = (props) => {

	const [isRepoHovered, hoverRepo] = useState(false);
	const [isDemoHovered, hoverDemo] = useState(false);
	const [isReadHovered, hoverRead] = useState(false);

	return (
	<section id={props.id} className="work-card">
		<div className="work-card-inner">
			<div className="work-card-body">
				<h2>{props.name}</h2>
				<p>
					{props.desc}
				</p>
			</div>
			<div className="work-card-bottom">
				<div className="work-card-bottom-left">
					{props.repo ?
						<a href={props.repo}
							 rel="noreferrer"
							 target={"_blank"}
							 onMouseEnter={() => hoverRepo(true)}
							 onMouseLeave={() => hoverRepo(false)}
							 style={{marginRight: "15px"}}>
							{!isRepoHovered ? <Repo size="1.3em" style={{verticalAlign: "middle"}} /> : <img src={"repoHovered.svg"} style={{verticalAlign: "middle", width: "1.3em", height: "1.3em"}} />}
							<span style={{verticalAlign: "middle"}}> Repository</span>
						</a>
						:
						<a style={{color: "#8A8A8A", marginRight: "15px"}}>
							<RepoMissing size="1.3em" style={{verticalAlign: "middle"}} />
							<span style={{verticalAlign: "middle"}}> Repository</span>
						</a>
					}

					{props.demo && (
						<a href={props.demo}
							 rel="noreferrer"
								onMouseEnter={() => hoverDemo(true)}
								onMouseLeave={() => hoverDemo(false)}
							 target={"_blank"}
						>
							{!isDemoHovered ? <BsTerminal size="1.3em" style={{verticalAlign: "middle"}} /> : <BsTerminalFill size="1.3em" style={{verticalAlign: "middle"}}  />}
							<span style={{verticalAlign: "middle"}}> Demo</span>
						</a>
					)}

					{props.read && (
						<Link to={props.read}
							 onMouseEnter={() => hoverRead(true)}
							 onMouseLeave={() => hoverRead(false)}
							 target={"_blank"}
						>
							{!isReadHovered ? <BsBook size="1.3em" style={{verticalAlign: "middle"}} /> : <BsBookHalf size="1.3em" style={{verticalAlign: "middle"}}  />}
							<span style={{verticalAlign: "middle"}}> Read More</span>
						</Link>
					)}
				</div>
				<div className="work-card-bottom-right">
					<ul className="work-card-header tags">
						{(props.tags).map(tag => (
							<WorkTag name={tag} />
						))}
					</ul>
				</div>
			</div>
		</div>
	</section>
	)
}

WorkCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	year: PropTypes.string,
	desc: PropTypes.string,
	tags: PropTypes.array,
}
  
WorkCard.defaultProps = {
	id: ``,
	name: ``,
	year: ``,
	desc: ``,
	tags: [],
}

export default WorkCard;