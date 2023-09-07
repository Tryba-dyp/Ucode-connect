exports.firstUpper = (str) => {
  if (typeof str !== 'string') return '';

  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
