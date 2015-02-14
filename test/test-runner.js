var Mocha = require('mocha')
  , fs = require('fs')
  , path = require('path')
  , glob = require('glob')
  , mocha = new Mocha()

mocha.timeout(3000)
mocha.reporter('spec').ui('bdd')

// Get the relative path (based at the project root) for all *.test.js files
glob.sync(__dirname + '/../**/*.test.js', { cwd: __dirname + '/../' })
  // Filter out any that are dependencies
  .filter(isLocal)
  // Filter out any non-matches if a path filter is passed in
  .filter(matchesPathFilter)
  // Add the tests
  .forEach(addFile)

// Run the tests
mocha.run(function (numFailures) {
  process.exit(numFailures)
})

/*
 * Returns true if the file path does not contain 'node_modules'
 */
function isLocal(filepath) {
  return !/node_modules/.test(filepath)
}

/*
 * Returns true if the file path contains the path filter CLI arg
 * e.g.
 *  $ node test/test-runner lib
 *
 *  Will run:
 *    lib/foo.test.js
 *    components/thing/lib/baz.test.js
 */
function matchesPathFilter(filepath) {
  // Only run tests that match filter
  if (process.argv[2] && filepath.indexOf(process.argv[2]) === -1) return false
  return true
}

/*
 * Adds a test file to the mocha instance
 */
function addFile(filepath) {
  var relativePath = './' + path.relative(__dirname, filepath)
  if (!fs.existsSync(filepath)) return console.log('Tests not found', relativePath)
  console.log('Adding tests', relativePath)
  mocha.addFile(filepath)
}
