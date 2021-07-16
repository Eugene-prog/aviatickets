class CurrencyUI {
  constructor() {
    this.currency = document.getElementById('currency');
    this.dictionary = {
      USD: '$',
      EUR: '€',
    };
  }

  get currecyValue() {
    return this.currency.value;
  }

  get currencySymbol() {
    return this.dictionary[this.currecyValue];
  }
}

const currencyUI = new CurrencyUI();

export default currencyUI;
