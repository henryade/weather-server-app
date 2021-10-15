import mongoose from "mongoose";
import {Weather} from "./model";
import chai, {expect} from "chai";
import chaiHttp from "chai-http";
import app from ".";
import { config } from "dotenv";
import { googleGeolocationResponse, searchData, searchQuery, searchResponse, weatherData, weatherQuery, wrongSearchResponse } from "./mocks";
import nock from "nock";
import sinon from "sinon";

config();
const { OPEN_WEATHER_API_APPID, GOOGLE_GEOLOCATION_API_KEY } = process.env; 

chai.use(chaiHttp);

/**
 * Testing Home and Catch All Route
 */
describe('/GET Home', () => {
  context("when the home route is visited", ()=> {
    it('shows the home route', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.an("object");
          expect(res.body).to.have.keys("message");
          expect(res.body.message).to.equal("Home Route");
          done();
        });
    });
  })
  context("when a wrong route is visited", ()=> {
    it('shows a not found message', (done) => {
      chai.request(app)
        .get('/kjenkjndkjndkjnek')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res).to.be.an("object");
          expect(res.body).to.have.keys("message");
          expect(res.body.message).to.equal("Route Not Found");
          done();
        });
    });
  });
});

describe("", ()=> {
  /**
   * Testing Search Route
   */

  describe('/POST Search Route', () => {
    context("when a search request is made", ()=> {
      before(() => {
        nock('https://api.openweathermap.org')
        .get("/data/2.5/weather")
        .query({
          q: searchQuery,
          appid: OPEN_WEATHER_API_APPID
        })
        .reply(200, searchResponse);
      })
      it('responds with a success message', (done) => {
        const stub = sinon.stub(Weather, "create").returns(searchData);
        const stub1 = sinon.stub(Weather, "findOneAndUpdate").returns(null);
        chai.request(app)
          .post(`/search?searchQuery=${searchQuery}`)
          .end((err, res) => {
            stub.restore();
            stub1.restore();
            expect(stub.calledOnce).to.be.true;
            expect(stub1.calledOnce).to.be.true;
            expect(res).to.have.status(200);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "data", "record");
            expect(res.body.message).to.equal("search returned successfully");
            expect(res.body.data.current.dt).to.equal(searchResponse.dt);
            expect(res.body.record).to.equal("new");
            done();
          });
      });
    });

    context("when a duplicate search request is made", ()=> {
      before(() => {
        nock('https://api.openweathermap.org')
        .get("/data/2.5/weather")
        .query({
          q: searchQuery,
          appid: OPEN_WEATHER_API_APPID
        })
        .reply(200, searchResponse);
      })
      it('updates the date of the previously saved search data', (done) => {
        const stub = sinon.stub(Weather, "create").returns(searchData);
        const stub1 = sinon.stub(Weather, "findOneAndUpdate").returns(searchData);
        chai.request(app)
          .post(`/search?searchQuery=${searchQuery}`)
          .end((err, res) => {
            stub.restore();
            stub1.restore();
            expect(stub1.calledOnce).to.be.true;
            expect(stub.calledOnce).to.be.false;
            expect(res).to.have.status(200);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "data", "record");
            expect(res.body.message).to.equal("search returned successfully");
            expect(res.body.record).to.equal("updated");
            done();
          });
        });
    });

    context("when a search request is made and no data is returned", ()=> {
      before(() => {
        nock('https://api.openweathermap.org')
        .get("/data/2.5/weather")
        .query({
          q: searchQuery,
          appid: OPEN_WEATHER_API_APPID
        })
        .reply(200, {});
      })
      it('responds with an error message', (done) => {
        chai.request(app)
          .post(`/search?searchQuery=${searchQuery}`)
          .end((err, res) => {
            console.log(res.body)
            expect(res).to.have.status(400);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "data");
            expect(res.body.message).to.equal("failed to get weather data");
            expect(res.body.data).to.equal(null);
            done();
          });
      });
    });

    context("when a search request is made with no query", ()=> {
      it('responds with an error message', (done) => {
        chai.request(app)
          .post(`/search`)
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "data");
            expect(res.body.message).to.equal("search query missing");
            done();
          });
      });
    });

    context("when a search request is made and no data is returned", ()=> {
      before(() => {
        nock('https://api.openweathermap.org')
        .get("/data/2.5/weather")
        .query({
          q: searchQuery,
          appid: ""
        })
        .replyWithError(400, {error: ""});
      })
      it('responds with an error message', (done) => {
        chai.request(app)
          .post(`/search?searchQuery=${searchQuery}`)
          .end((err, res) => {
            expect(res).to.have.status(500);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "error");
            expect(res.body.message).to.equal("error fetching weather data");
            done();
          });
      });
    });
  });

  /**
   * Testing Search History Route
   */
  describe('/GET Search History Route', () => {
    context("when a search history request is made", ()=> {
      it('responds with a success message', (done) => {
        const stub = sinon.stub(Weather, "find").returns([searchData]);
        chai.request(app)
          .get("/searchHistory")
          .end((err, res) => {
            expect(stub.calledOnce).to.be.true;
            expect(res).to.have.status(200);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "data");
            expect(res.body.message).to.equal("data retrieved successfully");
            expect(res.body.data).to.have.length.above(0);
            stub.restore()
            done();
          });
      });
    });
  });

  /**
 * Testing Weather Route
 */
  describe('/GET Weather Route', () => {
    context("when the weather route is queried", ()=> {
      before(() => {
        nock('https://www.googleapis.com')
        .post("/geolocation/v1/geolocate")
        .query({
          key: GOOGLE_GEOLOCATION_API_KEY
        })
        .reply(200, googleGeolocationResponse);
        nock('https://api.openweathermap.org')
          .get("/data/2.5/onecall/timemachine")
          .query(weatherQuery(OPEN_WEATHER_API_APPID))
          .delay(2000)
          .reply(200, weatherData);
      });
      it('responds with the weather result', (done) => {
        chai.request(app)
          .get("/weather")
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "data");
            expect(res.body.message).to.equal("data fetched successfully");
            expect(res.body.data.current.dt).to.equal(weatherData.current.dt);
            done();
          });
      });
    });

    context("when the google geolocation api doesnt return data", ()=> {
      before(() => {
        nock('https://www.googleapis.com')
        .post("/geolocation/v1/geolocate")
        .query({
          key: GOOGLE_GEOLOCATION_API_KEY
        })
        .reply(200, {});
      })
      it('responds with an error message', (done) => {
        chai.request(app)
          .get("/weather")
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "data");
            expect(res.body.message).to.equal("failed to get latitude and longitude");
            expect(res.body.data).to.equal(null);
            done();
          });
      });
    });

    context("when the open weather api doesnt return data", ()=> {
      before(() => {
        nock('https://www.googleapis.com')
        .post("/geolocation/v1/geolocate")
        .query({
          key: GOOGLE_GEOLOCATION_API_KEY
        })
        .reply(200, googleGeolocationResponse);
        nock('https://api.openweathermap.org')
          .get("/data/2.5/onecall/timemachine")
          .query(weatherQuery(OPEN_WEATHER_API_APPID))
          .delay(2000)
          .reply(200, {});
      });
      it('responds with an error message', (done) => {
        chai.request(app)
          .get("/weather")
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res).to.be.an("object");
            expect(res.body).to.have.keys("message", "data");
            expect(res.body.message).to.equal("failed to get weather data");
            expect(res.body.data).to.equal(null);
            done();
          });
      });
    });
  });
});