module.exports = function (guard) {
  return (json) => {
    if (!json || typeof json !== 'object') return false;

    let inputs = Object.keys(json);

    if (!inputs.length) return false;

    return inputs.every((key) => {
      let input = json[key];
      return guard(input);
    });
  };
};
