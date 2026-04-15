import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from './styles';

import GroomImg from '@assets/images/novios/raul.jpg';
import BrideImg from '@assets/images/novios/yovana.jpg';

const Groom = GroomImg;
const Bride = BrideImg;

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation
    ? '9 de Mayo de 2026, El Alto, Bolivia'
    : 'Sábado, 9 de Mayo de 2026';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">¡Gloria a Dios!</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Con la bendición de Dios y el amor de nuestras familias, nos complace invitarles a celebrar
                la unión de nuestras vidas en sagrado matrimonio cristiano.
              </p>
              <p className="info" style={{ fontStyle: 'italic', marginTop: '10px' }}>
                "Por eso el hombre dejará a su padre y a su madre, y se unirá a su esposa,
                y los dos llegarán a ser un solo cuerpo."
                <br />
                <strong>— Génesis 2:24</strong>
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="novio" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Raul</h3>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="novia" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Yovana</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
