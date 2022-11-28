import axios from 'axios';

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds = seconds % 60;
  minutes = minutes % 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24;
  // console.log(days, hours, minutes);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

export const bookShift = async shiftId => {
  return axios.post(`http://10.0.2.2:8080/shifts/${shiftId}/book`);
  // try {
  //   const res = await axios.post(
  //     `http://127.0.0.1:8080/shifts/${shiftId}/book`
  //   );
  //   if(res.status)
  // } catch (e) {
  //   console.log("from booking", e);
  // }
};

export const cancelShift = async shiftId => {
  return await axios.post(`http://10.0.2.2:8080/shifts/${shiftId}/cancel`);
  // try {
  //   const res = await axios.post(
  //     `http://127.0.0.1:8080/shifts/${shiftId}/cancel`
  //   );
  // } catch (e) {
  //   console.log("from cancelling", e);
  // }
};

export const totalShiftHrsCalculator = shifts => {
  // console.log("shifts-", shifts);
  let totalHrs = 0;
  shifts.forEach(({startTime, endTime}) => {
    const diff = Number(endTime) - Number(startTime);

    totalHrs += diff;
  });
  return convertMsToTime(totalHrs);
};
