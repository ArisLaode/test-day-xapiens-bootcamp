const axios = require("axios").default;
const url = "https://mul14.github.io/data/employees.json";

const getData = () =>
  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log({ user: error }));

const getSalary = async () => {
  const user = await getData();
  const above15 = user.filter((e) => e.salary >= 15000000);
  console.log({ above15 });
};
//above 15
console.log("salary:");
getSalary();

const jakarta = async () => {
  const user = await getData();
  const liveJakarta = user.filter((e) => {
    const live = e.addresses.filter((ad) => ad.city === "DKI Jakarta");
    // return (live)
    console.log({ live });
    return live.length ? e : null;
  });
  console.log({ liveJakarta });
};
console.log("live in jakarta:");
jakarta();

const birthday = async () => {
  const user = await getData();
  const userList = user.filter((ad) => {
    const date = new Date(ad.birthday);
    const month = date.getMonth();

    console.log({ month, d: ad.birthday });
    return month === 2 ? ad : null;
  });

  console.log({ userList });
};
birthday();

const absen = async () => {
  const user = await getData();
  const absenUsers = user.filter((ad) => {
    const userAbsen = ad.presence_list.filter((p) => {
      const oct = new Date(p).getMonth();
      //   console.log({ oct, m: p });
      return oct === 9 ? p : null;
    });

    ad.presence_oct = userAbsen;
    ad.presence_oct_count = userAbsen.length;
    return ad;
    // console.log({ userAbsen });
  });
  console.log({ absenUsers });
};

absen();
