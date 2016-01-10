var gql = require('gql')

module.exports = gql.and([
  gql.has('rs10513789', 'T'),
  gql.not(gql.exact('rs10513789', 'TT'))
])
