import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import ButtonLive from '../WeddingSection/ButtonLive';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();
  if (timeHasRunOut)
    return (
      <>
        <div className="row">
          <div className="col-md-12" style={{ fontSize: '20px', color: '#e8c97a' }}>
            {isEventOver ? '¡La boda ya se celebró!' : '¡La boda está en curso!'}
          </div>
        </div>
        <ButtonLive />
      </>
    );

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Días" number={days} />
      <CountItem text="Horas" number={hours} />
      <CountItem text="Minutos" number={minutes} />
      <CountItem text="Segundos" number={seconds} />
    </div>
  );
}

export default CountContainer;
