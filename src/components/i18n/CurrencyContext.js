import React from "react";
import currencyTypes from "./currencyTypes";

export const CurrencyContext = React.createContext(currencyTypes.USD);

const convertFromUSD = conversionRate => usd => usd * conversionRate;

export class CurrencyContextProvider extends React.Component {
  state = {
    currency: currencyTypes.USD
  };

  changeCurrency = event => {
    const currency = currencyTypes[event.target.value];
    this.setState({ currency });
  };

  render() {
    const providedValue = {
      currency: this.state.currency,
      changeCurrency: this.changeCurrency,
      convertFromUSD: convertFromUSD(this.state.currency.conversionFromUSD)
    };

    return (
      <CurrencyContext.Provider value={providedValue}>
        {this.props.children}
      </CurrencyContext.Provider>
    );
  }
}
