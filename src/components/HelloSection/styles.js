import { css, keyframes } from '@emotion/core';

const fadeInUp = keyframes`
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const heartPulse = keyframes`
  0%   { transform: scale(1); }
  15%  { transform: scale(1.3); }
  30%  { transform: scale(1); }
  45%  { transform: scale(1.15); }
  60%  { transform: scale(1); }
  100% { transform: scale(1); }
`;

export const styWrapper = css`
  animation: ${fadeInUp} 0.9s ease-out both;

  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .couple-wrap img {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .couple-wrap img:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 30px rgba(201, 168, 76, 0.4);
  }

  .heart i {
    color: #c9a84c !important;
    animation: ${heartPulse} 2s ease-in-out infinite;
    display: inline-block;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
