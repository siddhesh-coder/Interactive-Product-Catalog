const FormatePrice = ({ price }) => {
  const exchangeRate = 83.04;
  const priceInRupees = price * exchangeRate;

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(priceInRupees);

  return formattedPrice;
};

export default FormatePrice;
