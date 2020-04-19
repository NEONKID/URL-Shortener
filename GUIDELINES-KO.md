## Running on your machine

이 가이드는 여러분의 PC 혹은 서버에 개발 혹은 테스트를 위한 가이드입니다. URL-Shortener 애플리케이션을 실행하기 위해 아래의 지침을 참조하세요.



### Prerequistes

* Node.js version 12
* yarn or npm
* PostgreSQL (Recommended, or supported TypeORM DB)



### Installation

1. **먼저 Git 명령어를 이용해 소스 코드를 Clone 합니다**

   ```
   $ git clone https://github.com/NEONKID/URL-Shortener.git
   ```

2. **npm 명령어 혹은 yarn 명령어를 이용해 back-end, front-end 폴더에서 각각 패키지를 설치해주세요**

   ```
   $ cd shurl-back-end
   $ yarn install
   
   $ cd ../shurl-front-end
   $ yarn install
   ```

3. **먼저 Back-end 환경부터 설정에 들어갑니다**

   이 파일은 백엔드 시스템에 필요한 환경 설정이 들어 있는 파일입니다.

   env 폴더 안에는 3가지 환경이 들어 있습니다: development, production, 그리고 testing 환경이라는 3가지 환경으로 구성되어 있으며, testing 환경에서는 ```yarn test``` 명령어에서만 동작합니다. 다른 나머지는 개발 환경과 프로덕션 환경에 따라 DB 등의 설정을 구성하기 위한 편리한 사항이므로, 여러분들이 원하는 환경에서 고치시면 됩니다.

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

   * **LISTEN_PORT**: 백엔드 API 서버의 포트
   * **MAIN_URL**: 클라이언트 URL (Front-end 주소를 입력해주세요)
   * **SSL_KEY_FILE**: SSL 개인키 (SSL을 사용하실 경우에만 설정해주세요)
   * **SSL_CRT_FILE**: SSL 인증서 (SSL을 사용하실 경우에만 설정해주세요)

4. **데이터 베이스와 사용자 생성**

   자세한 지침은 [Creating user, database, and adding access on PostgreSQL](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e) 문서에 나와 있기 때문에 이 문서를 보고 따라하시는 것을 추천합니다. 만약, OS X에서 사용하시고자 한다면,  이 [문서](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb) 를 참고해주세요.

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

   만약, ```shurl``` 데이터베이스의 테이블에 액세스 하고자 한다면, 아래의 명령어를 입력하시고 난 다음, 액세스가 가능합니다. (PostgreSQL의 Cross Database 접근 이슈)

   ```
   postgres=# \c shurl;
   shurl=#
   ```

5. **Front-end 환경 설정**

   이 파일에 있는 환경 설정은 Front-end 환경을 설정하기 위한 것들이 있습니다.

   ```
   # SHURL APP API SERVER
   REACT_APP_API_ENTRYPOINT = http://localhost:1412
   
   # FRONT-END DEVELOPMENT SERVER CONFIG (HTTPS)
   HTTPS = false
   SSL_CRT_FILE =
   SSL_KEY_FILE =
   ```

   Front-end 환경 설정 파일에서 제공하는 HTTPS는 React의 개발 서버에서 제공하는 HTTPS입니다. 만약 이를 사용하기 원한다면, ```HTTPS```의 값을 ```true```로 설정해주세요. 그러고 난 뒤, 개인키와 인증서 파일의 경로를 입력하시면 정상적으로 동작합니다.



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

이 애플리케이션에서는 관리자들의 편의를 위해 관리자 페이지를 제공합니다. 관리자 페이지는 이 애플리케이션의 필수 사용은 아닙니다. 그저 편의를 위해서 제공되는 것이니, 반드시 설치하지는 않으셔도 됩니다.

만약, 관리자 페이지를 사용하기 원한다면, 이 [문서](Appendix-KO.md)를 참고해주세요.

백엔드 서버에 대한 API 문서가 필요한 경우, API 서버를 실행시킨 뒤, doc 이라는 엔드포인트를 사용해주세요. 만약 주소가 ```http://localhost:1412```라면, ```http://localhost:1412/doc```을 입력하시면 됩니다.