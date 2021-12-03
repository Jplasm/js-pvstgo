module.exports = function (guard) {
  return (json) => {
    if (!Array.isArray(json) || !json.length) return false;

    return json.every((v) => {
      return guard(v);
    });
  };
};
