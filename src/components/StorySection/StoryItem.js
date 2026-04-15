import React from 'react';
import { string, bool, number } from 'prop-types';
import { css, keyframes } from '@emotion/core';

const fadeInUp = keyframes`
  0%   { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const iconFloat = keyframes`
  0%   { transform: translateY(0px) scale(1); }
  50%  { transform: translateY(-5px) scale(1.08); }
  100% { transform: translateY(0px) scale(1); }
`;

const iconGlow = keyframes`
  0%   { box-shadow: 0 0 0px rgba(232, 201, 122, 0); }
  50%  { box-shadow: 0 0 18px rgba(232, 201, 122, 0.7), 0 0 32px rgba(201, 168, 76, 0.3); }
  100% { box-shadow: 0 0 0px rgba(232, 201, 122, 0); }
`;

const styItem = css`
  animation: ${fadeInUp} 0.8s ease-out both;
`;

const styBadge = css`
  animation:
    ${iconFloat} 4s ease-in-out infinite,
    ${iconGlow} 4s ease-in-out infinite;
`;

// SVG icons elegantes en blanco, 28x28
const ICONS = [
  // 0 - Cruz (El Primer Encuentro)
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"/>
    <line x1="5" y1="8" x2="19" y2="8"/>
  </svg>,
  // 1 - Libro abierto (Creciendo en Fe)
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>,
  // 2 - Corazón (Un Amor que Floreció)
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>,
  // 3 - Anillo (La Propuesta)
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="15" r="7"/>
    <path d="M8.5 8.5 L10 5 L14 5 L15.5 8.5"/>
    <line x1="10" y1="5" x2="9" y2="8.5"/>
    <line x1="14" y1="5" x2="15" y2="8.5"/>
    <line x1="12" y1="5" x2="12" y2="8"/>
  </svg>,
  // 4 - Personas / familia (Bendición de Familias)
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  // 5 - Iglesia / campanario (¡Sí, acepto!)
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L12 6"/>
    <path d="M10 4 L14 4"/>
    <path d="M5 22 L5 10 L12 6 L19 10 L19 22"/>
    <rect x="9" y="15" width="6" height="7"/>
    <path d="M2 22 L22 22"/>
  </svg>,
];

function StoryItem({ image, title, date, description, isInverted, index }) {
  return (
    <li className={isInverted ? 'timeline-inverted' : ''} css={styItem}>
      <div
        className="timeline-badge"
        css={!image ? styBadge : undefined}
        style={
          image
            ? { backgroundImage: `url(${image})` }
            : {
                background: 'linear-gradient(135deg, #c9a84c, #e8c97a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
        }
      >
        {!image && (
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(1.4)' }}>
            {ICONS[index] || ICONS[0]}
          </span>
        )}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h3 className="timeline-title">{title}</h3>
          <span className="date" style={{ color: '#c9a84c', fontWeight: 600 }}>{date}</span>
        </div>
        <div className="timeline-body">
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}

StoryItem.propTypes = {
  image: string,
  title: string.isRequired,
  date: string.isRequired,
  description: string.isRequired,
  isInverted: bool.isRequired,
  index: number,
};

StoryItem.defaultProps = {
  image: '',
  index: 0,
};

export default React.memo(StoryItem);
