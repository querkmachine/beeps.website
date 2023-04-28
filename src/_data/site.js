const environment = process.env.ENVIRONMENT;

module.exports = function () {
  return {
    name: "beeps",
    domain: environment === "prod" ? "https://beeps.website" : "",
    environment,
  };
};
