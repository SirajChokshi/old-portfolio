import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './Header.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className="header-profile"
    />
  );
};

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li id="title">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              <Image />
              <span style={{ display: 'inline-block' }}>{siteTitle}</span>
            </Link>
          </h1>
        </li>
        <span className={'right-nav'}>
          <li>
            <Link
              activeClassName="active-nav-link"
              data-page-name={'About'}
              to="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active-nav-link"
              data-page-name={'Projects'}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active-nav-link"
              data-page-name={'Blog'}
              partiallyActive={true}
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
