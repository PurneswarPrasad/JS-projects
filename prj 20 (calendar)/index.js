const months = [
  {
    monthNumber: 0,
    monthName: "January",
  },
  {
    monthNumber: 1,
    monthName: "February",
  },
  {
    monthNumber: 2,
    monthName: "March",
  },
  {
    monthNumber: 3,
    monthName: "April",
  },
  {
    monthNumber: 4,
    monthName: "May",
  },
  {
    monthNumber: 5,
    monthName: "June",
  },
  {
    monthNumber: 6,
    monthName: "July",
  },
  {
    monthNumber: 7,
    monthName: "August",
  },
  {
    monthNumber: 8,
    monthName: "September",
  },
  {
    monthNumber: 9,
    monthName: "October",
  },
  {
    monthNumber: 10,
    monthName: "November",
  },
  {
    monthNumber: 11,
    monthName: "December",
  },
];

const days = [
  {
    dayNumber: 0,
    dayName: "Sunday",
  },
  {
    dayNumber: 1,
    dayName: "Monday",
  },
  {
    dayNumber: 2,
    dayName: "Tuesday",
  },
  {
    dayNumber: 3,
    dayName: "Wednesday",
  },
  {
    dayNumber: 4,
    dayName: "Thursday",
  },
  {
    dayNumber: 5,
    dayName: "Friday",
  },
  {
    dayNumber: 6,
    dayName: "Saturday",
  },
];

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const date1 = new Date();

const currentDateNumber =
  date1.getDate() > 9 ? date1.getDate() : "0" + date1.getDate();
const currentDay = date1.getDay();
const currentMonth = date1.getMonth();
const currentYear = date1.getFullYear();

date.innerHTML = currentDateNumber;

day.innerHTML = days.find((d) => d.dayNumber === currentDay).dayName;

month.innerHTML = months.find((m) => m.monthNumber === currentMonth).monthName;

year.innerHTML = currentYear;
