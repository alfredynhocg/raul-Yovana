import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/dinda-indra.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://alfredynhocg.github.io/raul-Yovana/`;
const META_DESCRIPTION = `Con la bendición de Dios, Raul y Yovana se unen en sagrado matrimonio cristiano el 9 de Mayo de 2026 en El Alto, Bolivia.`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Raul ❤️ Yovana</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="La Boda de Raul & Yovana" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="https://alfredynhocg.github.io/raul-Yovana/" />
        <meta property="og:site_name" content="La Boda de Raul & Yovana" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="La Boda de Raul & Yovana" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="https://alfredynhocg.github.io/raul-Yovana/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@alfredynhocg" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
