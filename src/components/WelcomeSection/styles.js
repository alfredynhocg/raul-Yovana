import { css, keyframes } from '@emotion/core';
import Background from '@assets/images/boda_opt.png';

const ringsUnite = keyframes`
  0%   { transform: scale(0.85) translateY(6px); opacity: 0.6; }
  40%  { transform: scale(1.08) translateY(-3px); opacity: 1; }
  60%  { transform: scale(1.04) translateY(-1px); }
  80%  { transform: scale(1.01) translateY(0px); }
  100% { transform: scale(1) translateY(0px); opacity: 1; }
`;

const diamondShine = keyframes`
  0%   { filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
  20%  { filter: drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 16px rgba(255,220,100,0.8)); }
  40%  { filter: drop-shadow(0 0 2px rgba(255,255,255,0.3)); }
  60%  { filter: drop-shadow(0 0 12px rgba(255,255,255,1)) drop-shadow(0 0 24px rgba(200,180,255,0.9)); }
  80%  { filter: drop-shadow(0 0 3px rgba(255,255,255,0.4)); }
  100% { filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
`;

const floatRings = keyframes`
  0%   { transform: translateY(0px) rotate(0deg); }
  50%  { transform: translateY(-6px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const titleReveal = keyframes`
  0%   { opacity: 0; transform: translateY(20px) scale(0.95); letter-spacing: 12px; }
  60%  { opacity: 1; transform: translateY(-3px) scale(1.02); letter-spacing: 4px; }
  100% { opacity: 1; transform: translateY(0px) scale(1); letter-spacing: 2px; }
`;

const titleShimmer = keyframes`
  0%   { background-position: -400px center; }
  100% { background-position: 400px center; }
`;

const subtitleFade = keyframes`
  0%   { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0px); }
`;

const heartBeat = keyframes`
  0%   { transform: scale(1); }
  15%  { transform: scale(1.25); }
  30%  { transform: scale(1); }
  45%  { transform: scale(1.15); }
  60%  { transform: scale(1); }
  100% { transform: scale(1); }
`;

export const styTitleNames = css`
  margin-bottom: 0px;
  font-size: 100px;
  line-height: 1.5;
  font-family: 'Cookie', cursive;
  background: linear-gradient(
    90deg,
    #c9a84c 0%,
    #e8c97a 30%,
    #fff5cc 50%,
    #e8c97a 70%,
    #c9a84c 100%
  );
  background-size: 400px 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation:
    ${titleReveal} 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both,
    ${titleShimmer} 5s ease-in-out 1.8s infinite;

  @media screen and (max-width: 500px) {
    font-size: 54px;
  }

  @media screen and (max-width: 400px) {
    font-size: 40px;
  }
`;

export const stySubtitleBoda = css`
  font-family: 'Cookie', cursive;
  margin: 0;
  font-size: 30px;
  background: linear-gradient(
    90deg,
    #c9a84c 0%,
    #e8c97a 30%,
    #fff5cc 50%,
    #e8c97a 70%,
    #c9a84c 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${subtitleFade} 1s ease-out 0.1s both;

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }

  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`;

export const styHeartAmpersand = css`
  display: inline-block;
  animation: ${heartBeat} 2.5s ease-in-out 2s infinite;
  -webkit-text-fill-color: #e8c97a;
`;

export const styWeddingLogo = css`
  animation:
    ${ringsUnite} 1.4s ease-out both,
    ${diamondShine} 3s ease-in-out 1.6s infinite,
    ${floatRings} 4s ease-in-out 1.6s infinite;
  max-width: 80px;
  margin-bottom: 24px;
  cursor: default;

  &:hover {
    animation:
      ${diamondShine} 0.6s ease-in-out infinite,
      ${floatRings} 1.5s ease-in-out infinite;
  }
`;

export const styHero = css`
  width: 100%;
  height: 100vh;
`;

const radarAnimation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 30px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const upAndDownAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
`;

export const styScrollWrapper = css`
  #scroll {
    display: flex;
    justify-content: center;
    cursor: pointer;

    span {
      position: absolute;
      bottom: 46px;
      text-align: center;
      color: #fff;
    }

    .text {
      animation: ${upAndDownAnimation} 1s infinite alternate;
    }

    @media screen and (max-width: 414px) {
      .text {
        bottom: 80px;
        font-size: 12px;
      }
    }

    @media screen and (max-width: 360px) {
      .text {
        bottom: 60px;
        font-size: 12px;
      }
    }
  }

  .scroll__icon {
    .button {
      position: absolute;
      bottom: 46px;
      left: 50%;
      z-index: 2;
      display: inline-block;
      transform: translate(0, -50%);
      color: #fff;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: opacity 0.3s;

      span::before {
        position: absolute;
        top: -23px;
        left: -22px;
        z-index: -1;
        content: '';
        width: 44px;
        height: 44px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
        border-radius: 100%;
        opacity: 0;
        animation: ${radarAnimation} 3s infinite;
        box-sizing: border-box;
      }

      span::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 16px;
        height: 16px;
        margin: -12px 0 0 -8px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotate(-45deg);
        box-sizing: border-box;
      }
    }

    &button:hover {
      opacity: 0.5;
    }

    @media screen and (max-width: 414px) {
      .button {
        bottom: 80px;
      }
    }

    @media screen and (max-width: 360px) {
      .button {
        bottom: 65px;
      }
    }
  }
`;

export const styBackground = css`
  background-size: cover;
  background-image: url(${Background});
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    .title {
      font-size: 40px;
    }

    .sub-title {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      font-size: 54px;
    }

    .sub-title {
      font-size: 28px;
    }
  }
`;

export const styWrapper = css`
  color: #fff;
  margin-top: 0em;

  h2 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .getting-married {
    margin-top: -12px;
  }

  .to-dearest {
    font-size: 16px;
    color: #f1f1f1b3;
    margin-bottom: 8px;
  }

  .to-dearest-name {
    border-bottom: 1px solid;
    padding-bottom: 12px;
    max-width: 250px;
    margin: auto auto 30px auto;
  }

  .margin__bottom {
    margin-bottom: 3em !important;
  }

  a {
    color: #c9a84c;
  }

  @media screen and (max-width: 330px) {
    img {
      max-width: 40px;
      margin-top: 24px;
      margin-bottom: 8px;
    }

    .to-dearest {
      margin-bottom: 8px;
      font-size: 16px;
    }

    .to-dearest-name {
      margin: auto auto 16px auto;
    }
  }
`;

export const styWrapperCount = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: rgba(30, 20, 10, 0.45);
  border: 1px solid rgba(232, 201, 122, 0.5);
  margin: 8px;
  border-radius: 50%;
  position: relative;
  color: #e8c97a;

  h3 {
    font-size: 30px;
    color: #e8c97a;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    width: 75px;
    height: 75px;
    margin: 4px;
    font-size: 12px;

    h3 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 16px;
    }

    span {
      font-size: 10px;
    }
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;

export const styDivider = css`
  width: 100%;
  max-width: 300px;
  margin: -8px auto 0 auto;
  opacity: 0;
  animation: ${subtitleFade} 1s ease-out 1s both;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .btn {
    background: #c9a84c;
    color: #fff;
    border: none;
  }
`;
