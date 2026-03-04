//code for 24 hour format
// const hours = document.getElementById('hours');
// const minutes = document.getElementById('minutes');
// const seconds = document.getElementById('seconds');
// const ampm = document.getElementById('ampm');
// const fill = document.querySelector('.fill');

// function updateClock() {
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();

//   hours.textContent = String(h).padStart(2, '0');
//   minutes.textContent = String(m).padStart(2, '0');
//   seconds.textContent = String(s).padStart(2, '0');
//   ampm.textContent = h >= 12 ? 'PM' : 'AM';

//   // convert minutes to degrees. 60 minutes equals 360 degrees.
//   const degrees = (m / 60) * 360;
//   // update conic gradient so the filled arc matches current minutes.
//   fill.style.background = `conic-gradient(cyan ${degrees}deg, transparent ${degrees}deg)`;
// }

// // run immediately then every second.
// updateClock();
// setInterval(updateClock, 1000);
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');
const fill = document.querySelector('.fill');

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // Determine AM/PM
  ampm.textContent = h >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  h = h % 12;
  h = h ? h : 12; // 0 becomes 12

  // Display values with leading zeros
  hours.textContent = String(h).padStart(2, '0');
  minutes.textContent = String(m).padStart(2, '0');
  seconds.textContent = String(s).padStart(2, '0');

  // Circular progress for minutes
  const degrees = (m / 60) * 360;
  fill.style.background = `conic-gradient(cyan ${degrees}deg, transparent ${degrees}deg)`;
}

// Run immediately, then every second
updateClock();
setInterval(updateClock, 1000);

