## Running on your machine

These insturctions will get you a copy of the project up and running on your local machine for development or testing purposes.



### Prerequistes

* Node.js version 12
* yarn or npm
* PostgreSQL (Recommended, or supported TypeORM DB)



### Installation

1. **Clone the Project**

   ```
   $ git clone https://github.com/NEONKID/URL-Shortener.git
   ```

2. **Install packages from npm (included front-end and back-end)**

   ```
   $ cd shurl-back-end
   $ yarn install
   
   $ cd ../shurl-front-end
   $ yarn install
   ```

3. **Modify shurl-back-end/env**

   This file consists environment variables that are needed in back-end system.

   In the env file, three environments are provided: development, production, and testing. In the case of testing, it is operated by the yarn test command. Therefore, the prod configuration file must be modified for operation.

   ```
   # TypeORM Configuration. (DB)
   TYPEORM_CONNECTION = postgres
   TYPEORM_HOST = 127.0.0.1
   TYPEORM_USERNAME = shurl
   TYPEORM_PASSWORD = shurlpw
   TYPEORM_DATABASE = shurl
   TYPEORM_PORT = 5432
   TYPEORM_ENTITIES = ./dist/db/entities/*.entity.js
   TYPEORM_MIGRATIONS = ./dist/db/migrations/*.js
   TYPEORM_LOGGING = true
   TYPEORM_SYNCHRONIZE = false
   TYPEORM_MIGRATIONS_RUN = false
   TYPEORM_MIGRATIONS_DIR = ./dist/db/migrations
   
   # API SERVER Configuration.
   LISTEN_PORT = 1412
   MAIN_URL = http://localhost:3000
   SSL_KEY_FILE =
   SSL_CRT_FILE =
   ```

   * **LISTEN_PORT**: The port to be used by the backend API server
   * **MAIN_URL**: Client address (Front-end)
   * **SSL_KEY_FILE**: Private Key file for SSL (if you use SSL)
   * **SSL_CRT_FILE**: Certification file for SSL (if you use SSL)

4. **Create Database and User**

   [Creating user, database, and adding access on PostgreSQL](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e) is a perfect tutorial for this task. Please read through the article if you are not familar with creating database and user in RDBMS. If you are using macOS, please check [this](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb) article.

   ```
   # Connect to psql
   # macOS: psql postgres
   # ubuntu: sudo -u postgres psql
   # docker: psql -U postgres (Official released image)
   $ psql postgres
   psql(10.4)
   Type "help" for help.
   
   postgres=# CREATE DATABASE shurl
     LC_COLLATE 'C'
     LC_CTYPE 'C'
     ENCODING 'UTF8'
     TEMPLATE template0;
   CREATE DATABASE
   
   postgres=# CREATE USER shurl WITH ENCRYPTED PASSWORD 'shurlpw';
   CREATE ROLE
   
   postgres=# GRANT ALL PRIVILEGES ON DATABASE shurl to shurl;
   GRANT
   ```

   If you want to access the shurl database table from the command line, use the following command.

   ```
   postgres=# \c shurl;
   shurl=#
   ```

5. **Modify shurl-front-end/.env**

   This file consists environment variables that are needed in front-end system.

   ```
   # SHURL APP API SERVER
   REACT_APP_API_ENTRYPOINT = http://localhost:1412
   
   # FRONT-END DEVELOPMENT SERVER CONFIG (HTTPS)
   HTTPS = false
   SSL_CRT_FILE =
   SSL_KEY_FILE =
   ```

   You have the option to test HTTPS on the front-end development server. If you want to use it, set the ```HTTPS``` value to ```true```, then attach the certificate file and key file.



## Start Back-end Development Server

```
$ cd shurl-back-end
$ yarn start:dev
```



## Start Front-end Development Server

```
$ cd shurl-front-end
$ yarn start
```



## Appendix

If you want to view the API documentation for the backend server, you can view the API documentation by running the backend server and accessing the ```doc``` endpoint.