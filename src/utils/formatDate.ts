const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('pt-br');
};
// Intl.DateTimeFormat('pt-BR').format(date); // TODO

export default formatDate;
