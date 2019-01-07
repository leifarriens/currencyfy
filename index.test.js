const currencyfy = {
  src: require('./index'),
  dist: require('./currencyfy.min')
}

// test source version
runTest('src');

// test minified version
runTest('dist');

function runTest(v) {
  console.log(
    `${v}:
    =>`,
    currencyfy[v](1, '€', {
      before: true
    }),
    currencyfy[v](1.5, '€'),
    currencyfy[v](1.95, '$', {
      gap: false,
      spacer: '.'
    }),
    currencyfy[v](10, '$', {
      showzero: true
    })
  )
}
