import React from 'react';
import WishesContainer from './WishesContainer';
import { stySection } from './styles';

function WishesSection() {
  return (
    <div id="fh5co-testimonial" css={stySection}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Mensajes de nuestros seres queridos</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <WishesContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishesSection;
