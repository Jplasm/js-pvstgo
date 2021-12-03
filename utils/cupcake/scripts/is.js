module.exports = function (data) {
  return (json) => {
    return json == data;
  };
};
