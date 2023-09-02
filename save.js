// const token = ~~[Math.random() * 12345678];
// const token = Math.floor(Math.random() * 12345678);
// const token = Math.ceil(Math.random() * 12345678);
const token = ~~(Math.random() * 12345678);
const image = ["1.png", "2,png", "3png"];

function login(username, callback) {
  setTimeout(() => {
    callback({ username, token });
  }, 3000);
  console.log("login...");
}

function getApi(token, callback) {
  setTimeout(() => {
    if (token) callback({ apiKey: "x76x76xa5x8" });
  }, 3000);
  console.log("getApi...");
}

function imagee(callback) {
  setTimeout(() => {
    callback({ image });
  }, 4000);
  console.log("image..");
}

// ------------------------ \\

login("ilham", function (result) {
  console.log(result);
  getApi(token, function (result) {
    console.log(result);
    imagee(function (result) {
      console.log(result);
    });
  });
});


