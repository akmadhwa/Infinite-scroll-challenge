module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "399d7b4607abc71fa56f2cb32e5e41b63fb41df41ae2fea0216369f981fc1117",
  SECRET:
    process.env.SECRET ||
    "9450778d7f5c948c780e091ef0eb2d6d196b938a80f6b6af6b11086eebfd91ef",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
