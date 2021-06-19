let d = "January 01,2021 00:00:00";
const countdown = () => {
  //init
  const countDate = new Date(d).getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //increase year
  if (gap <= 0) {
    const found = d.match(/01,\d{4}/)[0].split(",");
    found[1]++;
    d = d.replace(/01,\d{4}/, found.join(","));
    return;
  }

  //calculate time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculate day
  const txtDay = Math.floor(gap / day);
  const txtHour = Math.floor((gap % day) / hour);
  const txtMinute = Math.floor((gap % hour) / minute);
  const txtSecond = Math.floor((gap % minute) / second);

  //display
  document.querySelector(".day").innerHTML = txtDay;
  document.querySelector(".hour").innerHTML = txtHour;
  document.querySelector(".minute").innerHTML = txtMinute;
  document.querySelector(".second").innerHTML = txtSecond;
};

//Run
setInterval(() => {
  countdown();
}, 1000);
