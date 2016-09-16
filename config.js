// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

// my app config
var myapp = {
    //Uncomment the below if you have cloudinary account at https://cloudinary.com/ created and added credentials to node env
    //cloudinary: {},
    //Uncomment the below if you have mailgun account at https://www.mailgun.com/ created and added credentials to node env
    //mailgun: {},
    mysql: {}
};
myapp.port = (process.env.VCAP_APP_PORT || '2368');
myapp.host = (process.env.VCAP_APP_HOST || '127.0.0.1');
myapp.protocol = 'https://';

if (process.env.VCAP_APPLICATION != undefined) {
    var vcap_application = JSON.parse(process.env.VCAP_APPLICATION);
    myapp.route = vcap_application.application_uris[0];
}

if (process.env.VCAP_SERVICES != undefined) {
    var vcap_services = JSON.parse(process.env.VCAP_SERVICES);
    
    if (vcap_services.mysql != undefined) {
        myapp.mysql = vcap_services.mysql[0].credentials;
    } else {
        console.error('Cannot find mysql service');
        process.exit(1);
    }
}

//Uncomment the below if you have cloudinary account at https://cloudinary.com/ created and added credentials to node env
/*if (process.env.CLOUDINARY != undefined)
    myapp.cloudinary = JSON.parse(process.env.CLOUDINARY);

//console.log(myapp.cloudinary);
*/

//Uncomment the below if you have mailgun account at https://www.mailgun.com/ created and added credentials to node env
/*if (process.env.MAILGUN != undefined)
    myapp.mailgun = JSON.parse(process.env.MAILGUN);
*/


// end: my app config


config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: myapp.protocol + myapp.route,
        // Uncomment mail block once you have gotten mailgun credentials and added env variables
        /*mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: myapp.mailgun.user, // mailgun username
                    pass: myapp.mailgun.pass  // mailgun password
                }
            }
        },
        */
        database: {
            client: 'mysql',
            connection: {
                host: myapp.mysql.hostname,
                port: myapp.mysql.port,
                user: myapp.mysql.username,
                password: myapp.mysql.password,
                database: myapp.mysql.name,
                charset: 'utf8'
            },
            pool: {
                min: 2,
                max: 2
            }
        },
        //Uncomment the below if you have cloudinary account at https://cloudinary.com/ created and added credentials to node env
        // Note that local storage will not persist
        /*
        storage: {
            active: 'ghost-cloudinary-store',
            'ghost-cloudinary-store': {
                cloud_name: myapp.cloudinary.cloud_name,
                api_key: myapp.cloudinary.api_key,
                api_secret: myapp.cloudinary.api_secret,
                secure: true
            }
        },
        */
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: myapp.host,
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: myapp.port
        },
        forceAdminSSL: true
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368',

        // Example refferer policy
        // Visit https://www.w3.org/TR/referrer-policy/ for instructions
        // default 'origin-when-cross-origin',
        // referrerPolicy: 'origin-when-cross-origin',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            },
            pool: {
                afterCreate: function (conn, done) {
                    conn.run('PRAGMA synchronous=OFF;' +
                    'PRAGMA journal_mode=MEMORY;' +
                    'PRAGMA locking_mode=EXCLUSIVE;' +
                    'BEGIN EXCLUSIVE; COMMIT;', done);
                }
            },
            useNullAsDefault: true
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
