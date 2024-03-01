 const daysContainer = document.querySelector(".days");
 const nextBtn = document.querySelector(".next-btn");
 const prevBtn = document.querySelector(".prev-btn");
 const month = document.querySelector(".month");
 const todayBtn = document.querySelector(".today-btn");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// get current date
const date = new Date();
console.log(date);
console.log(date.setDate);
console.log(date.getDate);

// get current month
let currentMonth = date.getMonth();
console.log(currentMonth);

// get current year
let currentYear = date.getFullYear();
console.log(currentYear);
// function to render days
function renderCalendar() {
  // get prev month current month and next month days
  date.setDate(1);
  
  const firstDay = new Date(currentYear, currentMonth, 1);
  console.log(firstDay);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  console.log(lastDay);
  const lastDayIndex = lastDay.getDay();
  console.log(lastDayIndex);
  const lastDayDate = lastDay.getDate();
  console.log(lastDayDate);
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  console.log(prevLastDay);
  const prevLastDayDate = prevLastDay.getDate();
  console.log(prevLastDayDate);
  const nextDays = 7 - lastDayIndex - 1;
  console.log(nextDays);

  // update current year and month in header

  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // update days html

  let days = "";

  // prev days html

  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // current month days

  for (let i = 1; i <= lastDayDate; i++) {

    // check if its today then add today class

    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      // if date month year matches add today

      days += `<div class="day today">${i}</div>`;
    } else {
      //else dont add today

      days += `<div class="day ">${i}</div>`;
    }
  }

  // next MOnth days

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  // run this function with every calendar render

  hideTodayBtn();
  daysContainer.innerHTML = days;
}

renderCalendar();

nextBtn.addEventListener("click", () => {

  // increase current month by one

  currentMonth++;
  if (currentMonth > 11) {

    // if month gets greater that 11 make it 0 and increase year by one

    currentMonth = 0;
    currentYear++;
  }
  // rerender calendar

  renderCalendar();
});

// prev monyh btn

prevBtn.addEventListener("click", () => {

  // increase by one

  currentMonth--;

  // check if let than 0 then make it 11 and deacrease year

  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// go to today

todayBtn.addEventListener("click", () => {

  // set month and year to current

  currentMonth = date.getMonth();
  currentYear = date.getFullYear();

  // rerender calendar

  renderCalendar();
});

// lets hide today btn if its already current month and vice versa

function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}