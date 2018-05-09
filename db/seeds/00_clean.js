exports.seed = function(knex, Promise) {

  const tablesToClean = ['reviews', 'users', 'snacks']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
