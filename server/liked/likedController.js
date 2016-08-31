var Liked = require('./likedModel');
module.exports = {
  getLiked: function(req, res) {

  },
  sendLikes: function(req, res) {
  	console.log("storing data------>", req.body);
  	var newPet = new Liked({
  		name: req.body.name.$t,
  		city: req.body.contact.city.$t,
  		email: req.body.contact.email.$t,
  		phone: req.body.contact.phone.$t,
  		description: req.body.description.$t
  	});
  	newPet.save(function(err, newPet) {
  		if (err) {
  			console.error(err);
  		}
  		console.log(newPet);
  	})
  }
};