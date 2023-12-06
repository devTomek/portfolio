const careerStartedDate = new Date(2017, 7, 1);
const currentDate = new Date();
const diff = +currentDate - +careerStartedDate;

// 365.25 because the average year is 365.25 days long. Every 4 years, we add a day to account for leap years.
export const experienceYears = Math.floor(
  diff / (1000 * 60 * 60 * 24 * 365.25),
);
