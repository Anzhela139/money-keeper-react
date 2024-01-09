const dateFormat = new Intl.DateTimeFormat("ru"); 
const formatDate = (date) => dateFormat.format(new Date(date));
const priceFormatter = new Intl.NumberFormat("ru", {
    maximumSignificantDigits: 3
});

const formatPrice = (price) => priceFormatter.format(price);

export { formatDate, formatPrice };