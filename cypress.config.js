const { defineConfig } = require('cypress')
const mysql = require('mysql')


function queryTestDb(query, config) {                                 //DATABASE
  const connection = mysql.createConnection(config.env.db);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = defineConfig({
  projectId: "355s4r",//for Cypress CLOUD
  retries: {
    runMode: 1,//
    openMode: 0
  },
  env: {
    url: "https://rahulshettyacademy.com/",
    db: {                                                 //DATABASE
      server: '127.0.0.1',
      user: 'root',
      password: "Y1012Jqkhkp",
      database: "myfirstdatabase"
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {                                    //DATABASE
        queryDb: (query) => {
          return queryTestDb(query, config)
        }
      })
    },
    // specPattern: 'cypress/logInForms/*.js',
    specPattern: 'cypress/e2e'
  },
  hideXHRInCommandLog: true,
  chromeWebSecurity: false,
  video: true,
  videosFolder: 'cypress/videos',
  // videoUpodOnPasses:true 
});
