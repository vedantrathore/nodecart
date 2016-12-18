# FlipKlone

An open source clone of the [Flipkart](https://www.flipkart.com/) website written in Node.Js and using a MongoDb NoSql Database for storage.

A working demo of the website is deployed on heroku and is available [here](). 

## Installation

First install [Node.Js](https://nodejs.org/) and [Mongodb](https://www.mongodb.com/) then,

1. Clone the repository 
```
$ git clone https://github.com/vedantrathore/flipklone && cd flipklone
```
2. Install the dependencies
```
$ npm install
```
3. Seed the database with fake data
```
$ node seed/Seeder.js
```
4. Start the server
```
$ npm start
```
5. Visit [http://localhost:3000/](http://localhost:3000/) to view the website

### Features and Improvements
 
- [x] User Authentication
- [x] Saving cart and user in Session
- [x] Stripe for Card payments
- [x] CSRF Protection
- [ ] Better User Interface
- [ ] Ajax calls
- [ ] Direct checkout provision
- [ ] Provision for different modes of Payment 
- [ ] Provision for posting Products and becoming seller
- [ ] Review and rating system for each product
- [ ] Product Searching
- [ ] Product category and filtering options
- [ ] Develop REST API
- [ ] Recommendation Engine 

