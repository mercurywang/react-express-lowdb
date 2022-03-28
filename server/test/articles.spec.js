let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');

let should = chai.should();
chai.use(chaiHttp);

describe('App', () => {
  it('Should response status 200', (done) => {
    chai
      .request(app)
      .get('/articles')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
