import React from 'react';
import { css, keyframes } from '@emotion/core';

const fallIn = keyframes`
  0%   { transform: translateY(-220px) rotate(-12deg); opacity: 0; }
  65%  { transform: translateY(10px) rotate(3deg); opacity: 1; }
  78%  { transform: translateY(-5px) rotate(-1deg); }
  90%  { transform: translateY(3px) rotate(0.5deg); }
  100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
`;

const floatIdle = keyframes`
  0%   { transform: translateY(0px) rotate(0deg); }
  50%  { transform: translateY(-7px) rotate(0.8deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const sparkle = keyframes`
  0%   { opacity: 0; transform: scale(0); }
  25%  { opacity: 1; transform: scale(1); }
  75%  { opacity: 0.6; transform: scale(0.8); }
  100% { opacity: 0; transform: scale(0); }
`;

const styContainer = css`
  position: absolute;
  bottom: 80px;
  right: 16px;
  width: 120px;
  height: 150px;
  pointer-events: none;
  z-index: 10;

  @media screen and (max-width: 500px) {
    width: 90px;
    height: 115px;
    bottom: 90px;
    right: 10px;
  }
`;

const styRings = css`
  width: 100%;
  height: 100%;
  animation:
    ${fallIn} 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both,
    ${floatIdle} 5s ease-in-out 2.2s infinite;
`;

const styStar = (delay) => css`
  animation: ${sparkle} 2.4s ease-in-out ${delay}s infinite;
  transform-origin: center;
`;

function RingsAnimation() {
  return (
    <div css={styContainer}>
      <svg viewBox="0 0 120 145" fill="none" xmlns="http://www.w3.org/2000/svg" css={styRings}>
        <defs>
          {/* Gradiente metálico anillo izquierdo */}
          <linearGradient id="ringGradL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#fff5cc" />
            <stop offset="25%"  stopColor="#e8c97a" />
            <stop offset="50%"  stopColor="#c9a84c" />
            <stop offset="75%"  stopColor="#e8c97a" />
            <stop offset="100%" stopColor="#f5e199" />
          </linearGradient>
          {/* Gradiente metálico anillo derecho */}
          <linearGradient id="ringGradR" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#f5e199" />
            <stop offset="25%"  stopColor="#e8c97a" />
            <stop offset="50%"  stopColor="#c9a84c" />
            <stop offset="75%"  stopColor="#e8c97a" />
            <stop offset="100%" stopColor="#fff5cc" />
          </linearGradient>
          {/* Gradiente diamante */}
          <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#ffffff" />
            <stop offset="40%"  stopColor="#e8f4ff" />
            <stop offset="100%" stopColor="#c8e6ff" />
          </linearGradient>
          {/* Sombra suave */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Máscara para entrelazado real */}
          <mask id="maskLeft">
            <rect width="120" height="145" fill="white" />
            {/* Oculta la mitad derecha del anillo izquierdo donde se cruza */}
            <circle cx="68" cy="98" r="26" fill="black" />
          </mask>
          <mask id="maskRight">
            <rect width="120" height="145" fill="white" />
            {/* Oculta la mitad izquierda del anillo derecho donde se cruza */}
            <circle cx="52" cy="98" r="26" fill="black" />
          </mask>
        </defs>

        {/* ── ANILLO DERECHO (debajo) ── */}
        <circle cx="68" cy="98" r="26" stroke="url(#ringGradR)" strokeWidth="7" fill="none" filter="url(#glow)" />
        {/* Reflejo interior derecho */}
        <circle cx="68" cy="98" r="26" stroke="#fff5cc" strokeWidth="1.5" strokeDasharray="18 200" strokeDashoffset="-30" fill="none" opacity="0.5" />

        {/* ── ANILLO IZQUIERDO (encima en la zona de cruce) ── */}
        {/* Parte de atrás del anillo izquierdo (oculta donde el derecho pasa por delante) */}
        <circle cx="52" cy="98" r="26" stroke="url(#ringGradL)" strokeWidth="7" fill="none" mask="url(#maskLeft)" />
        {/* Reflejo interior izquierdo */}
        <circle cx="52" cy="98" r="26" stroke="#fff5cc" strokeWidth="1.5" strokeDasharray="18 200" strokeDashoffset="10" fill="none" opacity="0.5" mask="url(#maskLeft)" />
        {/* Arco frontal del anillo izquierdo — pasa por delante del derecho */}
        <path
          d="M 52 72 A 26 26 0 0 1 52 124"
          stroke="url(#ringGradL)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* ── DIAMANTE ── */}
        {/* Cuerpo principal */}
        <polygon points="60,32 75,32 82,48 60,68 38,48 45,32" fill="url(#diamondGrad)" stroke="#b8d4f0" strokeWidth="0.8" />
        {/* Corona superior */}
        <polygon points="60,32 75,32 67.5,22" fill="#e8f4ff" stroke="#b8d4f0" strokeWidth="0.8" />
        {/* Facetas de la corona */}
        <polygon points="60,32 67.5,22 60,26" fill="#c8e6ff" opacity="0.8" />
        <polygon points="75,32 67.5,22 75,26" fill="#ffffff" opacity="0.6" />
        {/* Facetas del pabellón */}
        <polygon points="60,68 38,48 45,55" fill="#a8c8e8" opacity="0.6" />
        <polygon points="60,68 82,48 75,55" fill="#d0e8ff" opacity="0.5" />
        <polygon points="60,68 45,55 55,48 60,62" fill="#b8d8f8" opacity="0.7" />
        <polygon points="60,68 75,55 65,48 60,62" fill="#c8e4ff" opacity="0.6" />
        {/* Cinturón */}
        <line x1="38" y1="48" x2="82" y2="48" stroke="#90b8d8" strokeWidth="0.6" opacity="0.8" />
        {/* Brillo principal */}
        <polygon points="62,34 68,34 65,28" fill="white" opacity="0.9" />
        <polygon points="56,40 63,38 58,46" fill="white" opacity="0.5" />

        {/* ── DESTELLOS ── */}
        {/* Estrella grande — arriba derecha */}
        <g css={styStar(2.0)}>
          <line x1="92" y1="24" x2="92" y2="14" stroke="#fff8dc" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="87" y1="19" x2="97" y2="19" stroke="#fff8dc" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="88.5" y1="15.5" x2="95.5" y2="22.5" stroke="#fff8dc" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
          <line x1="95.5" y1="15.5" x2="88.5" y2="22.5" stroke="#fff8dc" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
        </g>

        {/* Estrella mediana — izquierda */}
        <g css={styStar(3.1)}>
          <line x1="22" y1="80" x2="22" y2="72" stroke="#e8c97a" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="76" x2="26" y2="76" stroke="#e8c97a" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="19.5" y1="73.5" x2="24.5" y2="78.5" stroke="#e8c97a" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
          <line x1="24.5" y1="73.5" x2="19.5" y2="78.5" stroke="#e8c97a" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        </g>

        {/* Estrella pequeña — arriba izquierda del diamante */}
        <g css={styStar(1.4)}>
          <line x1="44" y1="26" x2="44" y2="20" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="41" y1="23" x2="47" y2="23" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Estrella pequeña — abajo derecha */}
        <g css={styStar(2.8)}>
          <line x1="100" y1="112" x2="100" y2="107" stroke="#fff8dc" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="97.5" y1="109.5" x2="102.5" y2="109.5" stroke="#fff8dc" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* ── HALO PULSANTE DEL DIAMANTE ── */}
        <circle cx="60" cy="48" r="3" fill="#e8f4ff" opacity="0">
          <animate attributeName="opacity" values="0;0.9;0" dur="3.5s" begin="2.5s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;18;3" dur="3.5s" begin="2.5s" repeatCount="indefinite" />
        </circle>

      </svg>
    </div>
  );
}

export default RingsAnimation;
