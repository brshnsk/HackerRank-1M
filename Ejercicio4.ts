/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

function timeConversion(s: string): string {
  let timeMoment = s.slice(-2);
  let time = s.replace(timeMoment, "").split(":");
  let hour: number;

  if (timeMoment === "PM") {
    if (time[0] !== "12") {
      hour = parseInt(time[0]) + 12;
      time[0] = hour.toString();
    }
  }

  if (timeMoment === "AM") {
    if (time[0] === "12") {
      time[0] = "00";
    }
  }

  return time.join(":");
}
