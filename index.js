let cupcake = require('./utils/cupcake/index.js');

let c1 = cupcake.object({
  name: cupcake.string,
  desc: cupcake.string
});

let c2 = cupcake.objectOf(c1)

let test = cupcake.object({
  token: cupcake.string,
  
})