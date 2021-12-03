module.exports = function object(shape) {
  return (json) => {
    if (!json || typeof json !== 'object') return false;

    let guards = Object.keys(shape);
    let inputs = Object.keys(json);

    return guards.every((key) => {
      let guard = shape[key];
      let input = json[key];

      switch (typeof guard) {
        case 'function':
          return guard(input);

        case 'object':
          return object(guard)(input);

        default:
          return false;
      }
    });
  };
};
