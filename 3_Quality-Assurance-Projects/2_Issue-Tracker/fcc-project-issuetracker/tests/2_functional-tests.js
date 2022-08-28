const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);



suite('Functional Tests', function() {
//will be set up during post test and used for delete test
let id1 = "";

  
  suite("POST /api/issues/{project}", function() {
    test("issue with every field", function(done) {
      chai
        .request(server)
        .post("/api/issues/test")
        .send({
          issue_title: "Title : issue with every field",
          issue_text: "text",
          created_by: "Functional Test - issue with every field",
          assigned_to: "Chai",
          status_text: "In QA"
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.issue_title, "Title : issue with every field");
          assert.equal(res.body.issue_text, "text");
          assert.equal(res.body.created_by, "Functional Test - issue with every field");
          assert.equal(res.body.assigned_to, "Chai");
          assert.equal(res.body.status_text, "In QA");
          assert.equal(res.body.project, "test");
          id1 = res.body._id;
          console.log("id 1 has been set as : " + id1);
          done();
        })
    })

    test("issue with only required fields", function(done) {
      chai
      .request(server)
      .post("/api/issues/test")
      .send({
        issue_title: "POST : issue with only required fields",
        issue_text: "text",
        created_by: "Functional Test - issue with only required fields"
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.issue_title, "POST : issue with only required fields");
        assert.equal(res.body.issue_text, "text");
        assert.equal(res.body.created_by, "Functional Test - issue with only required fields");
        assert.equal(res.body.assigned_to, "");
        assert.equal(res.body.status_text, "");
        assert.equal(res.body.project, "test");
        id2 = res.body._id;
        console.log("id 2 has been set as : " + id2);
        done();
      })
    })

    test("missing required fields", function(done) {
        chai
          .request(server)
          .post("/api/issues/test")
          .send({
            issue_title: "missing required fields"
          })
          .end(function(err, res) {
            assert.deepEqual(res.body, { error: 'required field(s) missing' });
            done();
          });
      });
  });

  
  suite("GET /api/issues/{project}", () => {
    test("View issues on a project", function(done) {
      chai
      .request(server)
      .get("/api/issues/test")
      .query({})
      .end((err, res) => {
        assert.isArray(res.body);
        assert.property(res.body[0], "issue_title");
        assert.property(res.body[0], "issue_text");
        assert.property(res.body[0], "created_on");
        assert.property(res.body[0], "updated_on");
        assert.property(res.body[0], "created_by");
        assert.property(res.body[0], "assigned_to");
        assert.property(res.body[0], "open");
        assert.property(res.body[0], "status_text");
        assert.property(res.body[0], "_id");
        done();
      })
    })

    test("View issues on a project with one filter", function(done) {
      chai
      .request(server)
      .get("/api/issues/test")
      .query({ created_by: "Functional Test - issue with every field" })
      .end(function(err, res) {
        res.body.forEach(issueResult => {
          assert.equal(
            issueResult.created_by, "Functional Test - issue with every field"
          );
        });
        done();
      });
    });


    test("View issues on a project with multiple filters", (done) => {
      chai
      .request(server)
      .get("/api/issues/test")
      .query({
        open: true,
        created_by: "Functional Test - issue with every field"
      })
      .end((err, res) => {
        res.body.forEach(issueResult => {
          assert.equal(issueResult.open, true);
          assert.equal(
            issueResult.created_by, "Functional Test - issue with every field"
          );
        })
        done();
      });
    });
  });


  suite("PUT /api/issues/{project}", function() {
    test("Update one field on an issue", function(done) {
      chai
      .request(server)
      .put("/api/issues/test")
      .send({
        _id: id1,
        issue_title: "John Snow",
      })
      .end((err, res) => {
        assert.deepEqual(res.body, {  result: 'successfully updated', '_id': id1 })
        done();
      });
    });

    test("Update multiple fields on an issue", function(done) {
      chai
      .request(server)
      .put("/api/issues/test")
      .send({
        _id: id1,
        issue_title: "John Snow",
        issue_text: "John Snow"
      })
      .end((err, res) => {
        assert.deepEqual(res.body, {  result: 'successfully updated', '_id': id1 })
        done();
      });
    });

    test("Update an issue with missing _id", function(done) {
      chai
      .request(server)
      .put("/api/issues/test")
      .send({
        issue_title: "John Snow"
      })
      .end((err, res) => {
        assert.deepEqual(res.body, { error: 'missing _id' })
        done();
      });
    });

    test("Update an issue with no fields to update", function(done) {
      chai
      .request(server)
      .put("/api/issues/test")
      .send({
        _id: id1,
      })
      .end((err, res) => {
        assert.deepEqual(res.body, { error: 'no update field(s) sent', '_id': id1 })
        done();
      });
    });

    test("Update an issue with an invalid _id", function(done) {
      chai
      .request(server)
      .put("/api/issues/test")
      .send({
        _id: "invalid id",
        issue_title: "John Snow"
      })
      .end((err, res)=> {
        assert.deepEqual(res.body, { error: 'could not update', '_id': "invalid id" });
        done();
      })
    });
  });

  suite("DELETE /api/issues/{project}", function() {
    

    test("Delete an issue", function(done) {
      console.log(id2);
      chai
      .request(server)
      .delete("/api/issues/test")
      .send({
        _id: id1
      })
      .end((err, res) => {
        assert.deepEqual(res.body, { result: 'successfully deleted', '_id': id1 });
        done();
      })
    });
    

    test("Delete an issue with an invalid _id", function(done) {
      chai
      .request(server)
      .delete("/api/issues/test")
      .send({
        _id: "invalid id"
      })
      .end((err, res) => {
        assert.deepEqual(res.body, { error: 'could not delete', '_id': "invalid id" });
        done();
      })
    })

    
    test("Delete an issue with missing _id", (done) => {
      chai
      .request(server)
      .delete("/api/issues/test")
      .send({})
      .end((err, res) => {
        assert.deepEqual(res.body, { error: 'missing _id' });
        done();
      });
    });

  });
  
});
