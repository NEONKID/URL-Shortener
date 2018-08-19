# ShortenURL-for-Web
[Under Development] Shorten URL for Spring boot (Kotlin)



## Overview

Unlike traditional [ShortenURL(C#)](https://github.com/NEONKID/ShortenURL), this server application was developed to serve clients from a server.



## How to run

This app uses the React.js frontend and the Spring Boot for kotlin backend. In the case of the backend, you should use the gradle command instead of the mvn command because you used Gradle for configuration. You can also run / debug with the IDE program below.

- IntelliJ IDEA
- Eclipse

Or, if you want to create and distribute a war file without IDE tools, you can go ahead and run the build command first.

```bash
gradle build
```

We used React.js for the front end. Detailed library versions can be found in the package.json file. After running the backend, you must build the frontend using the following command:



### In development

```bash
yarn dev
```



### In Production

```bash
yarn build
```

