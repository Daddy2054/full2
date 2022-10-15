# MyStore

Udacity Nanodegree: Full Stack Javascript Developer
course: Angular Fundamentals student:daddy2054

## Application Architecture

This Single Page Application was written using Angular 14. I is a simple skeleton of e-commerce shop. Product list is retrieved from  _src/app/in-memory-data.service.ts_ using HttpClient service. Search bar is provided. Cart functionality and Order confirmation page are implemented. User authentication is implemented using Auth0 technology. Simple routing is implemented using RouterModule. Badge, showing item's amount in the cart is implemented using Angular Material collection.

## How to Deploy

```
$ git clone https://github.com/Daddy2054/my-store
$ cd my-store
$ npm install
```
## How to config

_src/app/app.module.ts_: change dev keys for _AuthModule.forRoot_ for yours.
## How to use

```
$ ng serve
```

