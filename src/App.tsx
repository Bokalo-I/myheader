import { useState } from 'react';
import './App.scss';
import { Calculator } from './components/Calculator';
import { Header } from './components/Header';

export const  App = () => {
  const [currency, setCurrency] = useState('USD');

  const handleCurrencyChange = (curr: string) => {
    setCurrency(curr);
  }

  return (
      <>
        <Header currency={currency} onCurrencyChange={handleCurrencyChange}/>
        <Calculator currency={currency}/>
      </>
  );
}
