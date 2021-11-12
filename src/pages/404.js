import React from 'react';
import { Link, Redirect } from '@reach/router';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => <Redirect noThrow to="/" />;

export default NotFoundPage;
