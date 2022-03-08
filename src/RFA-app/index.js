function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  const startTime = performance.now();
  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime > duration) {
      callback(finalNumber);
    } else {
      const rate = elapsedTime / duration;
      const currentNumber = Math.round(rate * finalNumber);
      callback(currentNumber);
      requestAnimationFrame(updateNumber);
    }
  }
  requestAnimationFrame(updateNumber);
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumber(4000000, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("transaction-count").innerText = formattedNumber;
  });

  animateNumber(98, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("city-count").innerText = formattedNumber;
  });

  animateNumber(1500, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("customer-count").innerText = formattedNumber;
  });
});
