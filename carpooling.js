Cars = new Mongo.Collection("cars");

if (Meteor.isClient) {

  Template.body.events({
    'submit .new-car': function (event) {
      var time =  event.target.time.value;
      var route =  event.target.route.value;
      Cars.insert({
        time: time,
        route: route,
        createdAt: new Date()
      });

      event.target.time.value = "";
      event.target.route.value = "";
    }
  });

  Template.body.helpers({
    cars: function() {
      return Cars.find({}, {sort: {createdAt: -1}});
    }
  });
}

if (Meteor.isServer) {
}
