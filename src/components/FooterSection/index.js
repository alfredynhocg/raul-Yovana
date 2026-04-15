import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">¡Gracias!</h2>
                <p className="info">
                  Su presencia, oraciones y buenos deseos son el regalo más grande que pueden darnos.
                  Gracias por ser parte de este momento tan especial en nuestras vidas.
                </p>
                <p className="info" style={{ fontStyle: 'italic' }}>
                  "Y todo lo que hagan, de palabra o de obra, háganlo en el nombre del Señor Jesús,
                  dando gracias a Dios el Padre por medio de él."
                  <br />
                  <strong>— Colosenses 3:17</strong>
                </p>
                <p className="info">
                  Con amor y gratitud,
                  <br /> Raul &amp; Yovana
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p style={{ color: '#c9a84c', fontSize: '18px', letterSpacing: '2px', marginBottom: '6px' }}>
                #RaulYYovana2026
              </p>
              <p>
                <small className="block">&copy; 2026 Raul &amp; Yovana</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
