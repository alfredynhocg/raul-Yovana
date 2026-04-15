import React from 'react';
import QRCode from 'react-qr-code';
import { object } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';

function TicketData({ guest, configData }) {
  return (
    <div css={styWrapper}>
      <div class="container">
        <div class="ticket">
          <div id="qrcode">
            <QRCode value={guest.code} size={250} />
          </div>
        </div>
        <div class="details">
          <div class="tinfo">Nombre</div>
          <div class="tdata name">{guest.name}</div>
          <div class="tinfo">Categoría</div>
          <div class="tdata">{guest.desc}</div>
          <div class="tinfo">Ceremonia / Turno</div>
          <div class="tdata">
            {`${configData.shiftType?.[guest.shift]} / ${guest.shift}` || '09:00 AM - El Alto, Bolivia'}
          </div>
          {/* asistencia */}
          {guest.isAttended ? (
            <>
              <div class="tinfo">Asistió el</div>
              <div class="tdata">
                <span class="badge badge-success">{guest.attendedAt}</span>
              </div>
            </>
          ) : null}
          {/* recuerdo */}
          {guest.isExchanged ? (
            <>
              <div class="tinfo">Recuerdo recibido el</div>
              <div class="tdata">
                <span class="badge badge-success">{guest.exchangedAt}</span>
              </div>
            </>
          ) : null}
          {/* Información importante */}
          <div class="tinfo">Importante</div>
          <div class="tdata additional">
            <ul style={{ paddingLeft: '16px' }}>
              <li>
                Cada invitado debe presentar este código QR a su llegada como registro de asistencia.
              </li>
              <li style={{ textTransform: 'uppercase' }}>
                Esta invitación es válida para
                <span style={{ color: '#c9a84c', textTransform: 'uppercase' }}>
                  {` 2 personas`}
                </span>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <Link to={`/?type=invitation&to=${guest.name}&code=${guest.code}`}>
        <button className="btn primary">{`< Volver al inicio`}</button>
      </Link>
    </div>
  );
}

TicketData.propTypes = {
  guest: object,
  configData: object,
};

TicketData.defaultProps = {
  guest: {},
  configData: {},
};

export default TicketData;
