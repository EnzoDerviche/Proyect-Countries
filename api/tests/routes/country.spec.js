const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Activity, Country, conn } = require('../../src/db.js');


const agent = session(app);
const activity = {
  name: 'Sky',
  dificulty: "2",
  duration: 2,
  season: "Verano",
};

describe('countries routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activity.sync({ force: true })
  .then(() => Country.findAll()));
  describe('GET /countries', function()  { 
    it('should return all countries', function () {
      agent.get('/countries')
      .expect(200)
      .expect('Content-Type', /json/) 
      .expect(function(res) {
      expect(res.body).to.have.length(250);
      })
    });
  });
  describe('GET /countries/:id', function() {
    it('should has the property name', () =>{
      agent.get('/countries/ARG')
      .expect(200)
      .expect('Content-Type', /json/) 
      .expect(function(res) {
      expect(res.body).to.haveOwnProperty("name"); // should have a property name as the dog really exists
      })
    });
    it('should has the property continent', () =>{
      agent.get('/countries/ARG')
      .expect(200)
      .expect('Content-Type', /json/) 
      .expect(function(res) {
      expect(res.body).to.haveOwnProperty("continent"); // should have a property name as the dog really exists
      })
    });
    it('should return the correct dog',  ()=>{
      agent.get('/countries/ARG')
      .expect(function(res){
        expect(res.body).to.be.deep.equal( //expects to get the corret dog to route /dogs/1
          {
            name: 'Argentina',
            flag: "https://restcountries.eu/data/arg.svg",
            continent: 'Americas',
            capital: 'Buenos Aires',
            subregion: 'South America',
            area: 2780400,
            population: 43590400,
            activities: [
              
            ]
          }
        );
      })
  
    });
  });
});

