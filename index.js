module.exports = () => {
  return {
    plugins: [
      ["htm", {
        "pragma": "Tegrity.createComponent"
      }]
    ]
  }
};
