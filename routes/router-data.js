module.exports = function routerData(db) {
  var fleetCollection = db.collection('pmuFleet');
  var visitsCollection = db.collection('pmuVisits');

  return {getFleet, getVisits};

  function getFleet(callback) {
    var fleet = fleetCollection.find({}, {_id:0}).toArray(callback);
    // var visits = visitsCollection.find({});
  }
  function getVisits(callback) {
    var fleet = visitsCollection.find({}, {_id:0}).toArray(callback);
  }
};