const { argv } = require('node:process')

function main() {
  try {
    if (!(argv.length === 3)) {
      throw new Error('Crawler must have exactly one argument')
    }
    console.log(`Crawler is starting at ${argv[2]}`) 
  } catch (err) {
    console.log(err.message)
  }
  
}

main()