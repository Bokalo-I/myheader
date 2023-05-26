import { useState } from 'react';
import './Calculator.scss';

type Props = {
  currency: string;
}

export const Calculator: React.FC<Props> = ({ currency }) => {
  const [amount, setAmount] = useState(1);

  const currencyRates = {
    'USD': 1,
    'EUR': 1.07,
    'GBP': 1.24,
    'AUD': 0.65,
    'CAD': 0.74,
  }

  const itemUSDprice = 10;
  const price = (amount * itemUSDprice / currencyRates[currency as keyof typeof currencyRates]).toFixed(2);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+event?.target.value);
  }
  
  const handleFormSubmit = (event: React.FormEvent) =>
    {
      event.preventDefault();
      setAmount(1);
    }

  return (
    <div className='Calculator'>
      <form
        action="POST"
        className='calculatorForm'
        onSubmit={handleFormSubmit}
      >
        <div className='formHeader'>Buy Gold</div>
      <div className="input-box">
        <label>Amount</label>
        <input type="number" min={1} value={amount || ''} onChange={handleAmountChange}/>
      </div><div className="input-box">
          <label>Price</label>
          <input type="text" value={`${currency}: ${price}`} disabled/>
      </div>
      <button type='submit' className='formButton'>
        Submit
      </button>
      </form>
    </div>
  );
};