const modify = (number) => {
  return number ? (number < 10 ? `0${number}` : number) : "00";
};

// Get countdown by day, hour, minute, second

const showCountdown = (date) => {
  const targetDate = new Date(date);
  const currentDate = new Date();
  let diff = targetDate - currentDate;
  let cd = 1000 * 60 * 60 * 24;
  let ch = 1000 * 60 * 60;
  let cm = 1000 * 60;
  let day = Math.floor(diff / cd);
  let hour = Math.floor((diff - day * cd) / ch);
  let minute = Math.floor((diff - day * cd - hour * ch) / cm);
  let second = Math.floor((diff - day * cd - hour * ch - minute * cm) / 1000);
  let remain = {
    day: day,
    hour: modify(hour),
    minute: modify(minute),
    second: modify(second),
  };
  return remain;
};

export default showCountdown;
