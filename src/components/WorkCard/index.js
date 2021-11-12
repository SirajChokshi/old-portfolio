import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './WorkCard.css';
import { BsTerminal, BsTerminalFill, BsBook, BsBookHalf } from 'react-icons/bs';
import { GoRepo as Repo, GoLock as RepoMissing } from 'react-icons/go';

const WorkTag = ({ name }) => {
  return (
    <li className="work-tag" data-tag-name={name}>
      {name}
    </li>
  );
};

const WorkCard = ({ id, name, desc, repo, demo, read, tags }) => {
  const [isRepoHovered, hoverRepo] = useState(false);
  const [isDemoHovered, hoverDemo] = useState(false);
  const [isReadHovered, hoverRead] = useState(false);

  return (
    <section id={id} className="work-card">
      <div className="work-card-inner">
        <div className="work-card-body">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
        <div className="work-card-bottom">
          <div className="work-card-bottom-left">
            {repo ? (
              <a
                href={repo}
                rel="noreferrer"
                target={'_blank'}
                onMouseEnter={() => hoverRepo(true)}
                onMouseLeave={() => hoverRepo(false)}
                style={{ marginRight: '15px' }}
              >
                {!isRepoHovered ? (
                  <Repo size="1.3em" style={{ verticalAlign: 'middle' }} />
                ) : (
                  <svg
                    enable-background="new 0 0 15.6 15.6"
                    viewBox="0 0 15.6 15.6"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      verticalAlign: 'middle',
                      width: '1.3em',
                      height: '1.3em',
                    }}
                  >
                    <path d="m13.7 1v11.7c0 .6-.5 1-1 1h-4.9v1.9l-1.5-1.5-1.5 1.5v-1.9h-1.9c-.6 0-1-.5-1-1v-11.7c0-.6.5-1 1-1h9.8c.5 0 .9.4 1 1z" />
                    <path d="m4.1 1.7h2.8v7.5h-2.8z" fill="#fff" />
                    <path
                      clip-rule="evenodd"
                      d="m3.9 1v8.8h8.8v-8.8zm1.9 7.8h-1v-1h1zm0-2h-1v-1h1zm0-1.9h-1v-1h1zm0-2h-1v-1h1z"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="m12.7 12.7v-2h-9.8v2h2v-1h2.9v1z"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <path
                      d="m13.7 1v11.7c0 .6-.5 1-1 1h-4.9v1.9l-1.5-1.5-1.5 1.5v-1.9h-1.9c-.6 0-1-.5-1-1v-11.7c0-.6.5-1 1-1h9.8c.5 0 .9.4 1 1z"
                      fill="none"
                    />
                  </svg>
                )}
                <span style={{ verticalAlign: 'middle' }}> Repository</span>
              </a>
            ) : (
              <a style={{ color: '#8A8A8A', marginRight: '15px' }}>
                <RepoMissing size="1.3em" style={{ verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle' }}> Repository</span>
              </a>
            )}

            {demo && (
              <a
                href={demo}
                rel="noreferrer"
                onMouseEnter={() => hoverDemo(true)}
                onMouseLeave={() => hoverDemo(false)}
                target={'_blank'}
              >
                {!isDemoHovered ? (
                  <BsTerminal
                    size="1.3em"
                    style={{ verticalAlign: 'middle' }}
                  />
                ) : (
                  <BsTerminalFill
                    size="1.3em"
                    style={{ verticalAlign: 'middle' }}
                  />
                )}
                <span style={{ verticalAlign: 'middle' }}> Demo</span>
              </a>
            )}

            {read && (
              <Link
                to={read}
                onMouseEnter={() => hoverRead(true)}
                onMouseLeave={() => hoverRead(false)}
                target={'_blank'}
              >
                {!isReadHovered ? (
                  <BsBook size="1.3em" style={{ verticalAlign: 'middle' }} />
                ) : (
                  <BsBookHalf
                    size="1.3em"
                    style={{ verticalAlign: 'middle' }}
                  />
                )}
                <span style={{ verticalAlign: 'middle' }}> Read More</span>
              </Link>
            )}
          </div>
          <div className="work-card-bottom-right">
            <ul className="work-card-header tags">
              {tags.map(tag => (
                <WorkTag name={tag} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

WorkCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  tags: PropTypes.array,
};

WorkCard.defaultProps = {
  id: ``,
  name: ``,
  desc: ``,
  tags: [],
};

export default WorkCard;
