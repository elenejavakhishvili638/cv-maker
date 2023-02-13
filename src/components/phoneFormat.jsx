export const formatNumber = (number) => {
  let formattedNumber = "";
  formattedNumber = number.replace(
    /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
    "$1 $2 $3 $4 $5"
  );
  return formattedNumber;
};
