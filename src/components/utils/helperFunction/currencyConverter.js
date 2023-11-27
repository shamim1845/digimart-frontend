import { Converter } from "easy-currencies";

const currencyConverter = async ({ amount, from, to }) => {
  const api_key = process.env.REACT_APP_OPENEXCHANGE_API_KEY;
  const converter = new Converter("OpenExchangeRates", api_key);

  const value = await converter.convert(amount, from, to);

  return value.toFixed(2);
};

export default currencyConverter;
