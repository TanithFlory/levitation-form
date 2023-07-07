const getLocation = (): Promise<any> | string => {
  if (navigator.geolocation) {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  } else {
    return "Location is not supported on this browser.";
  }
};

export default getLocation;
