
export function getDoctorByCondition(searchCondition) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?skip=0&limit=10&query=${searchCondition}&location=wa-seattle&user_key=${process.env.API_KEY}`;
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}
export function getDoctorByName(name) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?skip=0&limit=10&name=${name}&location=wa-seattle&user_key=${process.env.API_KEY}`;
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}