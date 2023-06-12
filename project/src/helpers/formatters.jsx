export const formatAmount = (value) => {
  const amount = Number(value);
  const formatedAmount = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
  return formatedAmount;
};
