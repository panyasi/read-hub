const formatNumber = x => {
  const n = x.toString();
  return n[1] ? n : `0${n}`;
};

const formatDate = (sep = "-") => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${[year, month, day].map(formatNumber).join(sep)}`;
};
const formatWeek = () => {
  return "星期" + "日一二三四五六".charAt(new Date().getDay());
};

module.exports = {
  formatDate: formatDate,
  formatWeek: formatWeek
};
