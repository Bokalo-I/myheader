import us from '../../icons/US.svg';
import eu from '../../icons/EU.svg';
import uk from '../../icons/UK.svg';
import au from '../../icons/AU.svg';
import ca from '../../icons/CA.svg';
import arrow from '../../icons/Stroke 1.svg'
import { useState } from 'react';
import classNames from 'classnames';
import './DropDown.scss';

type Props = {
  currency: string;
  onCurrencyChange: (curr: string) => void;
  onMenuClose?: () => void;
}

export const DropDown: React.FC<Props> = ({ currency, onCurrencyChange, onMenuClose}) => {

  const currencyLogo = {
    'USD': us,
    'EUR': eu,
    'GBP': uk,
    'AUD': au,
    'CAD': ca,
  }

  const currencyArr = ['USD', 'EUR', 'GBP', 'AUD', 'CAD'];

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const handleCurrencyToggle = () => {
    setIsCurrencyOpen((prevState) => !prevState);
  }

  const handleCurrencyChange = (curr: string) => {
    return () => {
      onCurrencyChange(curr);
      setIsCurrencyOpen(false);
      if (onMenuClose) {
        onMenuClose();
      };
    }
  }

  return (
    <><div className='currencyContainer'
      onClick={handleCurrencyToggle}>
      <div className='currencyLogoName'>
        <img
          src={currencyLogo[currency as keyof typeof currencyLogo]}
          alt="logo"
          className='currencyLogo' />
        <p className='currencyName'>{currency}</p>
      </div>
      <button
        className={classNames({
          'currencyButtonClose': !isCurrencyOpen,
          'currencyButtonOpen': isCurrencyOpen,
        })}
      >
        <img src={arrow} alt="logo" />
      </button>
    </div><div id='dropdown' className={classNames('dropDownOpen', {
      'dropDownClose': !isCurrencyOpen,
    })}>
        {true && currencyArr.map((curr) => (
          <div
            key={curr}
            className={classNames('dropDownItem', {
              'isActiveCurr': currency === curr,
            })}
            onClick={handleCurrencyChange(curr)}
          >
            <img className='currencyLogo' src={currencyLogo[curr as keyof typeof currencyLogo]} alt="logo" />
            <p>{curr}</p>
          </div>
        ))}
      </div></>
  )
}