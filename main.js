// const token = ~~[Math.random() * 12345678];
// const token = Math.floor(Math.random() * 12345678);
// const token = Math.ceil(Math.random() * 12345678);
const token = ~~(Math.random() * 12345678);
const image = ["1.png", "2,png", "3png"];

function login(username) {
  return new Promise((success, failed) => {
    setTimeout(() => {
      // return { username, token };
      if (username != "muhammad_ilham") failed("data wrong...");
      success({ token });
    }, 1000);
    console.log("login...");
  });
}

function getApi(token) {
  return new Promise((success, failed) => {
    if (!token) failed("token Wrong...");
    setTimeout(() => {
      success({ apiKey: "x76x76xa5x8" });
    }, 1000);
    console.log("getApi...");
  });
}

function imagee(apiKey) {
  return new Promise((success, failed) => {
    if (!apiKey) failed("data key wrong...");
    setTimeout(() => {
      success({ pic: image });
    }, 2000);
    console.log("image..");
  });
}
// ------------------------ \\
async function userLogin() {
  const { token } = await login("muhammad_ilham");
  console.log(token);
  async function userGetApi() {
    const { apiKey } = await getApi(token);
    console.log(apiKey);
    async function userImage() {
      const { pic } = await imagee(image);
      console.log(pic);
    }
    userImage();
  }
  userGetApi();
}

userLogin();
