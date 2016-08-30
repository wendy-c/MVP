// var data = require('/sampleData.json');
angular.module('pawMe.search', [])
  .controller('searchController', function($scope, $http) {
    $scope.data = data.petfinder.pets.pet;
    $scope.filteredData = data.petfinder.pets.pet;
    $scope.query = {};
    $scope.liked = [];

    // var initalize = function() {
    //   prompt
    // };

    $scope.changeAnimalType = function(type) {
      $scope.query.animal = type;
      console.log(type);
    };

    $scope.filterRequest = function(zip) {
      $scope.filteredData = $scope.data.filter(function(entry) {
        return entry.animal.$t === $scope.query.animal 
          && entry.contact.zip.$t === zip;
      });
      return $scope.filteredData;
    };

    $scope.showAll = function() {
      $scope.filteredData = data.petfinder.pets.pet;
      return $scope.filteredData;
    };


    $scope.addToLike = function(entry) {
      var alreadyInList = false;
      $scope.liked.forEach(function(item) {
        if (item.description.$t === entry.description.$t) {
          alreadyInList = true;
        }
      });
      if (!alreadyInList) {
        $scope.liked.push(entry);
      }        
    };

  });


    //cannot get json data
    // $http.get('app/sampleData.json').then(function(res){
    //   var data = res.data;
    //   console.log(data);
    // });

//console.log("data", JSON.parse(data));
//log in to session
// $http({
//   method: 'GET',
//   url: 'http://api.petfinder.com/auth.getToken',
//   data: {
//     key: 'ef465d7abe45d4e4b28f5a50802d2605',
//     sig: '19f16ce675d44a7b4a91cceca8554e93',
//     format: 'json'
//   }
// })
//   .then(function(res) {
//     console.log('you are now in the session', res);
//   }, function(err) {
//     console.log('there is an error', err);
//   });
// $scope.fetchData = function() {  
// };

// http://api.petfinder.com/my.method?key=12345&arg1=foo&token=67890&sig=abcdef

// $http({
//   method: 'GET',
//   url: 'http://api.petfinder.com/pet.find',
//   data: {
//     key: 'ef465d7abe45d4e4b28f5a50802d2605',
//     sig: '19f16ce675d44a7b4a91cceca8554e93',
//     animal: 'cat',
//     location: 94066,
//     output: 30,
//     format: 'json',
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     }
//   }
// }).then(function(res) {
//   console.log("there is my animal data", res);
//   $scope.content = response.data;
//   $scope.statuscode = response.status;

// }, function(err) {
//   console.log("error", err);
// })

var data = {
  "@encoding": "iso-8859-1",
  "@version": "1.0",
  "petfinder": {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "lastOffset": {
      "$t": "25"
    },
    "pets": {
      "pet": [{
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {
            "$t": "562-862-8844"
          },
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "rabbitrescue@ca.rr.com"
          },
          "city": {
            "$t": "San Bruno"
          },
          "zip": {
            "$t": "94066"
          },
          "fax": {},
          "address1": {
            "$t": "1150 El Camino Real #167"
          }
        },
        "age": {
          "$t": "Young"
        },
        "size": {
          "$t": "M"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35577394/1/?bust=1467731159&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35577394/1/?bust=1467731159&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35577394/1/?bust=1467731159&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35577394/1/?bust=1467731159&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35577394/1/?bust=1467731159&width=50&-t.jpg",
              "@id": "1"
            }]
          }
        },
        "id": {
          "$t": "35577394"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Bunny Rabbit"
          }
        },
        "name": {
          "$t": "Bullseye"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "Please watch my YouTube video.  http://youtu.be/zWz_Yf4JWGU"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA193"
        },
        "lastUpdate": {
          "$t": "2016-08-29T19:45:25Z"
        },
        "animal": {
          "$t": "Rabbit"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/1/?bust=1448410848&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/1/?bust=1448410848&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/1/?bust=1448410848&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/1/?bust=1448410848&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/1/?bust=1448410848&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/2/?bust=1448410849&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/2/?bust=1448410849&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/2/?bust=1448410849&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/2/?bust=1448410849&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/2/?bust=1448410849&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/3/?bust=1448410849&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/3/?bust=1448410849&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/3/?bust=1448410849&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/3/?bust=1448410849&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/32638463/3/?bust=1448410849&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "32638463"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "FOSTER HOMES NEEDED!"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "Camp Cocker Rescue needs foster homes!    \n\n  \n\n   We are looking for foster homes in the Los Angeles and San Francisco areas. A foster home is a temporary home for a dog who is up for adoption. We provide the food and medical care; you provide the love and attention. We have FABULOUS dogs in boarding who would be SO HAPPY to be in a home. You can read more about fostering and fill out an online application here:   http://www.campcocker.com/fostering   \n\n  Thank you for supporting animal rescue! \n\n    campcockercathy@gmail.com   \n\n    www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-05-25T01:26:39Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/1/?bust=1464139635&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/1/?bust=1464139635&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/1/?bust=1464139635&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/1/?bust=1464139635&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/1/?bust=1464139635&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/2/?bust=1464139636&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/2/?bust=1464139636&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/2/?bust=1464139636&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/2/?bust=1464139636&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/2/?bust=1464139636&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/3/?bust=1464139637&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/3/?bust=1464139637&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/3/?bust=1464139637&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/3/?bust=1464139637&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34653022/3/?bust=1464139637&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "34653022"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Dixie"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "To read more about my story and see more photos, check out my webpage Here.  \n\n   Well hello there, my name is Dixie!  \n\n   I was found by animal control in an alley, unable to walk, probably hit by a car. Those nice rescue folks from Camp Cocker came along and got me out of the shelter and rushed me into emergency surgery for my fractured pelvis.  \n\n   I am walking again and I even run and chase squirrels! (yep, I'm an official Squirrel Patrol officer)  \n\n   I was super shy when I first went to my foster home. I was hand shy and wouldn't take treats from anyone's hands. I would flinch if someone rushed to reach for me too quickly, or approached me from the top of my head.  \n\n   After about six weeks of getting to know the people in my foster home, I began to open up and trust more. I now can even take treats from the hands of someone that has earned my trust, can you believe it? That was a big step for me!  Whomever might adopt me, can you please give me a month or so to learn to trust you before you rush me?  I promise you, once I trust you, it will be amazing!  You will see my butt wiggle for the first time and feel so proud of me.  Because I'm shy with strangers, it makes my love all that much worthwhile when I open my heart to you.  \n\n   When I first was introduced to the other doggies in my foster home, I was overwhelmed and nervous.  They just wanted to sniff me and meet be but I would get reactive if they came within two feet of me.  Now I know my foster doggie friends and I am used to them bumping into me and I know they won't hurt me so I no longer am reactive.  \n\n   I hope that my new adopters might be patient with me and if there is another dog in my new home, they will let me go slow and at my own pace, so I can get to know the other doggie and not feel so overwhelmed that I have to be reactive.  You see, I never really had anyone that cared about me before and I didn't have much positive experiences with other doggies.    \n\n   But I'm learning to be social with friendly dogs.  Please don't force me to go to a busy public place like a dog park, it would be too much for me and it might bring up my fears of stranger dogs getting too near to me.   \n\n   I am slow to warm up to new people, so when people meet me who might adopt me, they think I am standoff-ish and not for them.  I hope that one day, I will find some nice adopters who won't mind that I am shy in the beginning, and will give me a chance to warm up to them.  \n\n   I probably would flourish in an adult only home, only because children can make quick unpredictable movements and that would frighten me.  I like a calm predictable home environment.  \n\n  I might be about six to seven years old (that is a guess), and I am house-trained to use a doggie door to go potty in a backyard.  Hey, did you know I can do an Elvis impression? That's right, sometimes my lip gets caught on my tooth and I make an Elvis lip.  Everyone thinks I'm adorable and I hope you will too!  \n\n  I have a cataract growing in my right eye and Camp Cocker Rescue is willing to sponsor the cataract surgery as long as my adopters agree to go to a veterinary ophthalmologist that works with Camp Cocker and gives them a fair rescue price.  My favorite doggie opthalmologist is Dr. Chang in West Los Angeles. Maybe I will get lucky and can get adopted somewhere within an hour or so from there, so he can do my eye surgery?  It's not urgent but I should probably get the surgery done in the next six months or so. Oh those backyard breeders who are ruining my breed, us cockers can get cataracts as young as two years of age, can you believe it? \n\n  If you are interested in meeting me, please read through our adoption process, which you can find by clicking here.  \n\n  Thank you so much for supporting animal rescue and for considering me for adoption!  \n\n   Love 'ya,  \n\n   Wigglebutt Dixie  \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:06:49Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "specialNeeds"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "M"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/1/?bust=1467553051&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/1/?bust=1467553051&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/1/?bust=1467553051&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/1/?bust=1467553051&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/1/?bust=1467553051&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/2/?bust=1467553052&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/2/?bust=1467553052&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/2/?bust=1467553052&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/2/?bust=1467553052&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/2/?bust=1467553052&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/3/?bust=1467553052&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/3/?bust=1467553052&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/3/?bust=1467553052&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/3/?bust=1467553052&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/29140281/3/?bust=1467553052&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "29140281"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Owen"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "Read more about Owen by visiting his webpage! \n\n   Owen is a special dog looking for a special adopter! Owen is a handsome red and white Cocker Spaniel with a goofy underbite, and he is about six years old. He is a smart dog who learns commands and house rules quickly. He is housetrained and gets along well with other dogs.  \n\n   What's so special about Owen? Owen has some fear and handling issues. He will seek out attention, snuggling up to people he knows or going up to strangers in the dog park to have his head scratched, but he does not want to be touched when he is relaxing and not expecting it. Owen's foster has been working with him to desensitize him to touch, with the help of a positive reinforcement/clicker trainer, but whoever adopts Owen will need to continue this work and be prepared to manage his issues long-term.   \n\n   Owen can only be adopted with someone who has a lot of dog experience and is up for the challenge of working with a dog with behavioral issues. Owen cannot live with children.   \n\n   Check out more photos of Owen here.  \n\n  If you are interested in meeting Owen, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here! \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:06:27Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/1/?bust=1470026989&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/1/?bust=1470026989&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/1/?bust=1470026989&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/1/?bust=1470026989&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/1/?bust=1470026989&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/2/?bust=1470026990&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/2/?bust=1470026990&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/2/?bust=1470026990&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/2/?bust=1470026990&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/2/?bust=1470026990&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/3/?bust=1470026992&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/3/?bust=1470026992&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/3/?bust=1470026992&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/3/?bust=1470026992&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35549132/3/?bust=1470026992&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35549132"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Hannah"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "To read more about Hannah and her story, visit  her webpage.  \n\n  Hannah is a beautiful, sweet Cocker Spaniel who was living outside in lousy conditions until Camp Cocker came along and rescued her, along with her entire doggy family. Hannah is now looking for a comfortable home where she'll get some TLC and can be a treasured pet. We estimate Hannah to be approximately 5 years old.  \n\n  Hannah will go potty outdoors if you can give her access to a backyard that has grass in it. Hannah LOVES people and will bond quickly to her person.  She loves to go on walks and has nice mellow energy in the home.  She is a classic cocker spaniel who is a total foody so be sure to keep your snacks and food out of reach.   \n\n  If you are interested in meeting Hannah, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here. \n\n  Thank you so much for supporting animal rescue! \n\n   campcockerinformation@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:07:03Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "specialNeeds"
          }, {
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "M"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/1/?bust=1462674319&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/1/?bust=1462674319&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/1/?bust=1462674319&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/1/?bust=1462674319&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/1/?bust=1462674319&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/2/?bust=1462674320&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/2/?bust=1462674320&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/2/?bust=1462674320&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/2/?bust=1462674320&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/2/?bust=1462674320&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/3/?bust=1462674320&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/3/?bust=1462674320&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/3/?bust=1462674320&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/3/?bust=1462674320&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35066833/3/?bust=1462674320&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35066833"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Zoe"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "Check out Zoe's webpage here!\n\n   Zoe is an elegant black and tan Cocker Spaniel with a white chest who has a calm and sweet, loving disposition. She loves to be on your lap and will bond to her new people quickly and soon be following you around the house. We estimate that Zoe is 6 to 7 years old.    \n\n   Zoe has glaucoma and is blind in one eye. She has limited blurry vision in the other eye.  She is a smart girl and uses her sense of smell to navigate around. She knows how to use a doggie door, but would also do fine being taken out for potty breaks. Zoe would be best for a home that is adult only and has a calm energy.   \n\n   Zoe would do fine with another calm older dog, but she would be in heaven if she were someone's only pampered pooch. Zoe will make an excellent companion for someone who is looking for a dog who will sit at your feet while you read or are on the computer and she loves to sit next to you on the couch while you are watching TV.   She walks well on a leash and loves a leisurely stroll through the neighborhood for exercise and stimulation. She also rides well in the car and enjoys getting out in the world. Zoe is not a candidate for extensive transport, so adopters in California are preferred. \n\n   Check out more photos of Zoe here!  \n\n  If you are interested in meeting Zoe, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here! \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:06:36Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/1/?bust=1470026949&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/1/?bust=1470026949&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/1/?bust=1470026949&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/1/?bust=1470026949&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/1/?bust=1470026949&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/2/?bust=1470026950&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/2/?bust=1470026950&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/2/?bust=1470026950&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/2/?bust=1470026950&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/2/?bust=1470026950&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/3/?bust=1470026952&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/3/?bust=1470026952&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/3/?bust=1470026952&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/3/?bust=1470026952&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34644671/3/?bust=1470026952&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "34644671"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Gretchen"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "To read more about Gretchen's story, please visit her webpage.  \n\n   Gretchen is a gorgeous red/dark buff Cocker Spaniel with a beautiful hound dog face.  Those eyes of hers and long ears, just gorgeous!  She is goofy and silly, and bonds quickly to her people. We estimate Gretchen to be approximately 4 years old, and she will do well in a home where she'll get lots of affection and a stable predictable routine (she thrives on routine).   \n\n   Gretchen entered a high kill shelter after being hit by a car.  Her front right arm was damaged and she needed reconstructive surgery.  Once we rescued her, we rushed her to the orthopedic surgeon who reconstructed the tendons in that arm and repaired the fractured elbow.       \n\n  If you are interested in meeting Gretchen, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here: \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:06:45Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/1/?bust=1460815759&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/1/?bust=1460815759&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/1/?bust=1460815759&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/1/?bust=1460815759&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/1/?bust=1460815759&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/2/?bust=1460815760&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/2/?bust=1460815760&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/2/?bust=1460815760&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/2/?bust=1460815760&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/2/?bust=1460815760&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/3/?bust=1460815760&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/3/?bust=1460815760&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/3/?bust=1460815760&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/3/?bust=1460815760&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34644588/3/?bust=1460815760&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "34644588"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Millie"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "To read more about Millie's story, visit  her webpage. \n\n   Millie is a gorgeous petite white/tan Cocker Spaniel that has the most soulful eyes. She was a breeder dog and ended up in a high kill shelter after many years of being used up. We estimate Millie to be 7-8 years old, but she has the pep and energy of a much younger doggie.  \n\n   We wonder if this is the first time she has ever been allowed to be in a home environment, with the freedom to run around and be a part of the family?  She is very dog friendly and people friendly and has the sweetest most trusting temperament.  She makes you just want to pick her up and kiss her and tell her life will never be bad again.   \n\n   Millie does have some chronic skin problems from never having been cared for properly (and probably never had good nutrition before). She currently needs medicated baths twice a week and has to stay on a grain free, high quality food to get her skin healthy again.   \n\n   She loves going for her one mile walks/hikes with her foster mom and seems to be flourishing with every adventure where she gets to see the world and go places and meet people.  \n\n  If you are interested in meeting Millie, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here. \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:06:41Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Young"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/1/?bust=1470026970&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/1/?bust=1470026970&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/1/?bust=1470026970&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/1/?bust=1470026970&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/1/?bust=1470026970&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/2/?bust=1470026971&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/2/?bust=1470026971&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/2/?bust=1470026971&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/2/?bust=1470026971&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/2/?bust=1470026971&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/3/?bust=1470026972&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/3/?bust=1470026972&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/3/?bust=1470026972&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/3/?bust=1470026972&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/34732227/3/?bust=1470026972&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "34732227"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Morgan"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "To read more about Morgan's story, please go to his webpage. \n\n  Well hello there world . . . my name is Morgan and I'm a sweet and special little fella.  You see, I was rescued from the Riverside, California animal shelter and I had not been very well cared for before.  I might be three to four years old?  \n\n  I'm a little nervous with new situations and I've not spent much time out in the world before.  I have some neurological quirks, like my head that bobs up and down when I lick your face and get excited.  Or my legs which have a wonky way of walking (the vet has ruled out anything mechanical, it seems to be neurological).  \n\n  I am shy at first but I bond quickly with people who are kind to me.  I'm like a little lost baby bird looking for his momma.  Check out this video clip of how gentle I am when I take treats: \n\n https://youtu.be/ohiBXOh3JnA\n\n  I know, I'm simply precious. Don't you want to just scoop me up and make me feel safe and that life is only going to be good for me? \n\n  Y ou can see more photos of me here! \n\n  If you are interested in meeting Morgan, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here. \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:06:54Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": {
            "$t": "altered"
          }
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Young"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/1/?bust=1471195201&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/1/?bust=1471195201&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/1/?bust=1471195201&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/1/?bust=1471195201&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/1/?bust=1471195201&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/2/?bust=1471195201&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/2/?bust=1471195201&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/2/?bust=1471195201&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/2/?bust=1471195201&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/2/?bust=1471195201&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/3/?bust=1471195202&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/3/?bust=1471195202&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/3/?bust=1471195202&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/3/?bust=1471195202&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954470/3/?bust=1471195202&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35954470"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": [{
            "$t": "Cocker Spaniel"
          }, {
            "$t": "Cavalier King Charles Spaniel"
          }]
        },
        "name": {
          "$t": "Quinn"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "To learn more about Quinn's story visit his webpage!  \n\n Quinn is a lovable and spunky little dog. He is a true fighter! We received Quinn after he was hit by a car and needed complete pelvic reconstruction surgery. Despite his pain, Quinn is recovering like a champ! Check out Quinn's webpage for videos and pictures on how well he is doing!\n\n Quinn is good with other dogs and is currently working on his manners! He is young and needs a family who would provide him with the structure he needs.\n\n Quinn may need a knee surgery in the next few months. If Quinn is adopted to a family who lives in the greater Los Angeles area, we will sponsor this surgery through our own vet.\n\n  If you are interested in meeting Quinn, please read about Camp Cocker's adoption process and fill out an online application here! \n\n  Thank you so much for supporting animal rescue! \n\n   campcockerinformation@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "yes"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:07:30Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": {
            "$t": "altered"
          }
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "M"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/1/?bust=1471195167&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/1/?bust=1471195167&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/1/?bust=1471195167&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/1/?bust=1471195167&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/1/?bust=1471195167&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/2/?bust=1471195167&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/2/?bust=1471195167&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/2/?bust=1471195167&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/2/?bust=1471195167&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/2/?bust=1471195167&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/3/?bust=1471195168&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/3/?bust=1471195168&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/3/?bust=1471195168&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/3/?bust=1471195168&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954464/3/?bust=1471195168&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35954464"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Brisa"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "Read more about Brisa's story by visting her webpage!  \n\n   Brisa is an older easy mellow gal, but still has so much life in her. She loves to receive love and go for walks. She is a gorgeous white Cocker Spaniel who we recently rescued. When we rescued Brisa she had 11 mammary tumors. We have removed about 3/4 of them and soon Brisa will have the rest removed, once she is all healed up from this first surgery.   \n\n  If you are interested in meeting Brisa, please read about Camp Cocker's adoption process and fill out an online application here. \n\n  Thank you so much for supporting animal rescue! \n\n   campcockerinformation@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:07:21Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": {
            "$t": "altered"
          }
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "M"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/1/?bust=1471195184&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/1/?bust=1471195184&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/1/?bust=1471195184&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/1/?bust=1471195184&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/1/?bust=1471195184&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/2/?bust=1471195184&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/2/?bust=1471195184&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/2/?bust=1471195184&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/2/?bust=1471195184&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/2/?bust=1471195184&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/3/?bust=1471195185&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/3/?bust=1471195185&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/3/?bust=1471195185&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/3/?bust=1471195185&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35954466/3/?bust=1471195185&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35954466"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Teddy"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "Learn more about Teddy and his story by visiting his webpage!\n\n Teddy is currently under care for his poor ears. \n\n  You see Teddy has suffered from a lifetime of untreated ear infections, to the point where the cartilage in both ears is so hardened that he is now permanently deaf. Imagine if someone filled up your ears with cement and left it to harden? \n\n   Well that's what Teddy feels like - every day he has suffered with what can only be imagined as the most painful migraine ever.  \n\n  Teddy is about to undergo two major ear surgeries where the doctor will completely remove Teddy's ears and ear canals, which will remove a lot of his pain, however he will never be able to hear again. \n\n Despite the life of neglect, Teddy is a character and so loving! He may be a little shy at first, but it sure does not take him long to warm up! \n\n  If you are interested in meeting Teddy, please read about Camp Cocker's adoption process and fill out an online application here! \n\n  Thank you so much for supporting animal rescue! \n\n   campcockerinformation@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:07:26Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "specialNeeds"
          }, {
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/1/?bust=1467553065&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/1/?bust=1467553065&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/1/?bust=1467553065&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/1/?bust=1467553065&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/1/?bust=1467553065&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/2/?bust=1467553065&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/2/?bust=1467553065&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/2/?bust=1467553065&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/2/?bust=1467553065&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/2/?bust=1467553065&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/3/?bust=1467553066&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/3/?bust=1467553066&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/3/?bust=1467553066&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/3/?bust=1467553066&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/32396545/3/?bust=1467553066&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "32396545"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Eli"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "To read more about Eli's story, please click here.   \n\n  \n\n   Eli is approximately six and a half years old.  He is a sweet, affectionate boy that loves all people and children. Eli lives for being held and pet.     \n\n   Eli is a special needs boy because he has neurological issues that require he be on medication every twelve hours for life.  He is housetrained to use a doggie door.  His favorite thing to do is to sleep on the bed and lean in to his person - so he needs someone who doesn't mind that Eli is a bed hog! This sweet boy is a snuggler for sure!   \n\n    Camp Cocker Rescue is looking for a long term foster home for Eli in the Los Angeles area so that they can sponsor his medical bills and stay on top of his long term medical care as it arises.    \n\n  If you are interested in meeting Eli, please read about our adoption process here.  \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:06:31Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "specialNeeds"
          }, {
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/1/?bust=1471195098&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/1/?bust=1471195098&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/1/?bust=1471195098&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/1/?bust=1471195098&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/1/?bust=1471195098&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/2/?bust=1471195099&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/2/?bust=1471195099&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/2/?bust=1471195099&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/2/?bust=1471195099&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/2/?bust=1471195099&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/3/?bust=1471195099&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/3/?bust=1471195099&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/3/?bust=1471195099&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/3/?bust=1471195099&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35121277/3/?bust=1471195099&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35121277"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Brady"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "Read more about my story and see more photos visit my page by clicking here.  \n\n  \n\n  Hi there folks, my name is Brady!  Sometimes my rescuers call me \"Brady Monkey\" (because I act like a total monkey) or sometimes they affectionately call me a \"noodle head\".  \n\n  I'm about six and a half years old and I'm really people friendly and eager to please. I'm super smart too and can learn new things if you have treats and use positive reinforcement methods.   \n\n  I've been having a challenge to getting adopted because of a couple of reasons.  One is that I have seizures and need to be on anti-seizure medication every twelve hours, for life. I also need my bloodwork checked every six months (and that can get expensive).  \n\n  But my seizures are considered controlled as long as I don't ever miss a dose of my medication. \n\n  Okay, well truly, the second challenge to me getting adopted is usually the deal breaker for most adopters. You see, I have separation anxiety.  Not just the mild kind with a little whining or drooling or howling. I've got full on big time anxiety.  Yep, it's true. Someone as sweet as me has a major anxiety disorder.  I've been in a foster home that has to work their schedules around me, so that someone is always here to be at home with me. Or else I need to go with them when they go out. \n\n  I also guard my toys so if there are any other dogs in the home, the rule is no toys. Yep, that's right - all the dog toys in my foster home have been picked up and put away, especially because of me.  I don't really miss the toys anyway, I'd rather have a doggie companion to play with.  (my best friend at Camp Cocker Rescue, another doggie with severe anxiety, maybe that's why we get along so well, we understand each other!)   \n\n  I know I'm not the easiest doggie to have, so I need a really patient and understanding adopter, who can accept me for who I am and not get angry or frustrated with me. \n\n  If you are interested in meeting me, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here  \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:06:58Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "M"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/1/?bust=1471195150&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/1/?bust=1471195150&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/1/?bust=1471195150&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/1/?bust=1471195150&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/1/?bust=1471195150&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/2/?bust=1471195150&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/2/?bust=1471195150&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/2/?bust=1471195150&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/2/?bust=1471195150&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/2/?bust=1471195150&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/3/?bust=1471195151&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/3/?bust=1471195151&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/3/?bust=1471195151&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/3/?bust=1471195151&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563983/3/?bust=1471195151&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35563983"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Rosie"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "To read more about Rosie's story, check out her webpage!   \n\n   Rosie is a sweet, affectionate buff Cocker Spaniel who loves human attention. She will put her paws on your legs to ask for a little love, and she enjoys a good belly rub.   We estimate Rosie to be approximately 7 years old and she is in good health and is house-trained. \n\n   When we rescued Rosie from the shelter, she was extremely overweight. In her foster home, she has been eating healthy food and getting exercise, and she has lost twenty pounds!  \n\n   Whomever adopts this sweet little lady had better be prepared to keep all people food far out of reach.  Rosie is a professional cocker spaniel foody, true to her breed and she will leap up on tables to get to food (it's amazing how agile she is). She is so much more physical capable of jumping and running now that she is no longer obese, but she needs someone deeply committed to not to letting her gain that weight back again. The only treats for Rosie should be healthy things like carrots or veggies.   \n\n   Check out more photos of Rosie here!     \n\n  If you are interested in meeting Rosie, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here! \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:07:17Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "M"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/1/?bust=1471195118&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/1/?bust=1471195118&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/1/?bust=1471195118&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/1/?bust=1471195118&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/1/?bust=1471195118&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/2/?bust=1471195119&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/2/?bust=1471195119&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/2/?bust=1471195119&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/2/?bust=1471195119&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/2/?bust=1471195119&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/3/?bust=1471195119&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/3/?bust=1471195119&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/3/?bust=1471195119&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/3/?bust=1471195119&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563970/3/?bust=1471195119&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35563970"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Lily"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "Read more about Lily's story, visit  her webpage. \n\n   Lily is a pretty Cocker Spaniel girl with white and buff speckled coloring who is approximately 7 years old. She is very affectionate and craves human interaction -- a real \"velcro\" dog. Lily has severe separation anxiety and cannot be left alone.   \n\n   Check out more photos of Lily here: https://picasaweb.google.com/116604454793904722977/LilyJanuary2015?authuser=0&feat=directlink  \n\n  If you are interested in meeting Lily, please read about Camp Cocker's adoption process and adoption fees and fill out an online application here. \n\n  Thank you so much for supporting animal rescue! \n\n   CampCockerCathy@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:07:08Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "specialNeeds"
          }, {
            "$t": "altered"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "CampCockerInformation@gmail.com"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94080"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "M"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/1/?bust=1471377119&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/1/?bust=1471377119&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/1/?bust=1471377119&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/1/?bust=1471377119&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/1/?bust=1471377119&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/2/?bust=1471377120&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/2/?bust=1471377120&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/2/?bust=1471377120&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/2/?bust=1471377120&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/2/?bust=1471377120&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/3/?bust=1471377120&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/3/?bust=1471377120&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/3/?bust=1471377120&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/3/?bust=1471377120&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35563974/3/?bust=1471377120&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35563974"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Cocker Spaniel"
          }
        },
        "name": {
          "$t": "Milo"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "To read more about Milo's story, please visit his webpage. \n\n Meet Milo! When we first took in Milo he was skinny and frail, which was a concern! After a few weeks of not being able to gain weight, Milo was tested and it was confirmed that he Irritable Bowel Disease. This means that his body has a difficult time absorbing nutrients and gaining weight. However, this disease can be controlled with proper food and medical care. We have seen extraordinary results in just a few weeks of treatment!\n\n This disease does not slow Milo down. He loves to play and love on people, however, we believe Milo would be a great fit for a family who can provide him with a lot of structure and who is willing to adhere to his medical needs. \n\n Check out Milo's too-cute-for-words underbite, are those the best teethies ever?\n\n  If you are interested in meeting Milo, please read about Camp Cocker's adoption process and fill out an online application here: \n\n  Thank you so much for supporting animal rescue! \n\n   campcockerinformation@gmail.com  \n\n   www.campcocker.com"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1226"
        },
        "lastUpdate": {
          "$t": "2016-08-19T06:07:13Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {
            "$t": "(650)642-4006"
          },
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "Tina@TnTrescue.org"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94083"
          },
          "fax": {},
          "address1": {
            "$t": "PO Box 5371"
          }
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/1/?bust=1470357931&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/1/?bust=1470357931&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/1/?bust=1470357931&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/1/?bust=1470357931&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/1/?bust=1470357931&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/2/?bust=1470357932&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/2/?bust=1470357932&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/2/?bust=1470357932&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/2/?bust=1470357932&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35868646/2/?bust=1470357932&width=50&-t.jpg",
              "@id": "2"
            }]
          }
        },
        "id": {
          "$t": "35868646"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Xoloitzcuintle (Mexican Hairless)"
          }
        },
        "name": {
          "$t": "Vita"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "More information may be found on our site http://tntrescue.org/\n\nVita is sweet, quiet and even tempered. She's does well with other dogs and social with strangers.Vita will thrive in a quiet home but doesn't appear to have problems with smaller children who visit.  Cats, with close supervision, should be fine too.\nShe is approximately 5 years old, and weighs 14 pounds."
        },
        "mix": {
          "$t": "yes"
        },
        "shelterId": {
          "$t": "CA2403"
        },
        "lastUpdate": {
          "$t": "2016-08-05T00:45:32Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }, {
            "$t": "housetrained"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {
            "$t": "(650)642-4006"
          },
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "Tina@TnTrescue.org"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94083"
          },
          "fax": {},
          "address1": {
            "$t": "PO Box 5371"
          }
        },
        "age": {
          "$t": "Young"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/1/?bust=1471754528&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/1/?bust=1471754528&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/1/?bust=1471754528&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/1/?bust=1471754528&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/1/?bust=1471754528&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/2/?bust=1471754529&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/2/?bust=1471754529&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/2/?bust=1471754529&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/2/?bust=1471754529&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/36013396/2/?bust=1471754529&width=50&-t.jpg",
              "@id": "2"
            }]
          }
        },
        "id": {
          "$t": "36013396"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": [{
            "$t": "Bichon Frise"
          }, {
            "$t": "Poodle"
          }]
        },
        "name": {
          "$t": "Sam"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "More information may be found on our site http://tntrescue.org/"
        },
        "mix": {
          "$t": "yes"
        },
        "shelterId": {
          "$t": "CA2403"
        },
        "lastUpdate": {
          "$t": "2016-08-21T04:42:10Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {
          "option": {
            "$t": "hasShots"
          }
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {
            "$t": "(650)642-4006"
          },
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "Tina@TnTrescue.org"
          },
          "city": {
            "$t": "South San Francisco"
          },
          "zip": {
            "$t": "94083"
          },
          "fax": {},
          "address1": {
            "$t": "PO Box 5371"
          }
        },
        "age": {
          "$t": "Baby"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/1/?bust=1467932651&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/1/?bust=1467932651&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/1/?bust=1467932651&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/1/?bust=1467932651&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/1/?bust=1467932651&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/2/?bust=1467932651&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/2/?bust=1467932651&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/2/?bust=1467932651&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/2/?bust=1467932651&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/2/?bust=1467932651&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/3/?bust=1469335113&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/3/?bust=1469335113&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/3/?bust=1469335113&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/3/?bust=1469335113&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35386229/3/?bust=1469335113&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35386229"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": [{
            "$t": "Chihuahua"
          }, {
            "$t": "Dachshund"
          }]
        },
        "name": {
          "$t": "Millie"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "Please note that puppies that have not been neutered/spayed, are available to homes only within the SF Bay Area.\nMore information may be found on our site http://tntrescue.org/"
        },
        "mix": {
          "$t": "yes"
        },
        "shelterId": {
          "$t": "CA2403"
        },
        "lastUpdate": {
          "$t": "2016-07-24T04:38:33Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }, {
        "options": {},
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "adoptions@northstarrescue.org"
          },
          "city": {
            "$t": "Pacifica"
          },
          "zip": {
            "$t": "94044"
          },
          "fax": {},
          "address1": {
            "$t": "1610 Francisco Blvd."
          }
        },
        "age": {
          "$t": "Young"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/1/?bust=1438034350&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/1/?bust=1438034350&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/1/?bust=1438034350&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/1/?bust=1438034350&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/1/?bust=1438034350&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/2/?bust=1438034351&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/2/?bust=1438034351&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/2/?bust=1438034351&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/2/?bust=1438034351&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/32851461/2/?bust=1438034351&width=50&-t.jpg",
              "@id": "2"
            }]
          }
        },
        "id": {
          "$t": "32851461"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Rat"
          }
        },
        "name": {
          "$t": "Hoarding rats 2-6 months"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "NAME, AGE, GENDER INFO\n\nNOTES SECTION\n\nThis animal is available for adoption at Andy's Pet Shop in San Jose. You do not need an appointment to visit animals at this location, but we recommend calling ahead to confirm the availability of specific animals. You can fill out an adoption application for approval on location, or you can apply online for pre-approval before your visit.\n\nFor adoption fees, requirements and other information, please visit our How to Adopt Section for more information. For more information about our rescue, pet care, and other animals available for adoption, please visit us online at www.NorthStarRescue.org"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1364"
        },
        "lastUpdate": {
          "$t": "2015-07-27T21:59:11Z"
        },
        "animal": {
          "$t": "Small & Furry"
        }
      }, {
        "options": {},
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "adoptions@northstarrescue.org"
          },
          "city": {
            "$t": "Pacifica"
          },
          "zip": {
            "$t": "94044"
          },
          "fax": {},
          "address1": {
            "$t": "1610 Francisco Blvd."
          }
        },
        "age": {
          "$t": "Young"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/1/?bust=1448518795&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/1/?bust=1448518795&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/1/?bust=1448518795&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/1/?bust=1448518795&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/1/?bust=1448518795&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/2/?bust=1448518796&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/2/?bust=1448518796&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/2/?bust=1448518796&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/2/?bust=1448518796&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/2/?bust=1448518796&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/3/?bust=1448518797&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/3/?bust=1448518797&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/3/?bust=1448518797&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/3/?bust=1448518797&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/33881685/3/?bust=1448518797&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "33881685"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Rat"
          }
        },
        "name": {
          "$t": "Two young bonded girls"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "Two bonded, three months old girls.\n\nThose girls are very active and inquisitive! \n\nTo meet them, please contact North Star Rescue today!\n\nFor adoption fees, requirements and other information, please visit our How to Adopt Section for more information. For more information about our rescue, pet care, and other animals available for adoption, please visit us online at www.NorthStarRescue.org"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1364"
        },
        "lastUpdate": {
          "$t": "2015-11-26T06:19:58Z"
        },
        "animal": {
          "$t": "Small & Furry"
        }
      }, {
        "options": {},
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "adoptions@northstarrescue.org"
          },
          "city": {
            "$t": "Pacifica"
          },
          "zip": {
            "$t": "94044"
          },
          "fax": {},
          "address1": {
            "$t": "1610 Francisco Blvd."
          }
        },
        "age": {
          "$t": "Young"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/1/?bust=1448868698&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/1/?bust=1448868698&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/1/?bust=1448868698&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/1/?bust=1448868698&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/1/?bust=1448868698&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/2/?bust=1448868699&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/2/?bust=1448868699&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/2/?bust=1448868699&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/2/?bust=1448868699&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/33903708/2/?bust=1448868699&width=50&-t.jpg",
              "@id": "2"
            }]
          }
        },
        "id": {
          "$t": "33903708"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Rat"
          }
        },
        "name": {
          "$t": "Young fawn boys need new homes!"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "Adorable, full of energy and curious young boys (about 2-3 months old).\n\nSeven fawn berkshires and one fawn hooded. They can be adopted in couples, groups, or be bonded with another male or spayed female.\n\nFor adoption fees, requirements and other information, please visit our How to Adopt Section for more information. For more information about our rescue, pet care, and other animals available for adoption, please visit us online at www.NorthStarRescue.org"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1364"
        },
        "lastUpdate": {
          "$t": "2015-11-30T07:31:39Z"
        },
        "animal": {
          "$t": "Small & Furry"
        }
      }, {
        "options": {},
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {},
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "adoptions@northstarrescue.org"
          },
          "city": {
            "$t": "Pacifica"
          },
          "zip": {
            "$t": "94044"
          },
          "fax": {},
          "address1": {
            "$t": "1610 Francisco Blvd."
          }
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "S"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/1/?bust=1462468304&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/1/?bust=1462468304&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/1/?bust=1462468304&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/1/?bust=1462468304&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/1/?bust=1462468304&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/2/?bust=1462468305&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/2/?bust=1462468305&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/2/?bust=1462468305&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/2/?bust=1462468305&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/2/?bust=1462468305&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/3/?bust=1462468305&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/3/?bust=1462468305&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/3/?bust=1462468305&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/3/?bust=1462468305&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35050059/3/?bust=1462468305&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35050059"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": {
            "$t": "Guinea Pig"
          }
        },
        "name": {
          "$t": "Female guinea pigs"
        },
        "sex": {
          "$t": "F"
        },
        "description": {
          "$t": "We have several groups of female guinea pigs available for adoption to go as a single to be paired with a female or neutered male or to be adopted in pairs. They range from about 6 months-1.5 years. There are abbys, teddys and silkie mixed neutered male who live in this colony.\nEmail us at adoptions@northstarrescue.org or call 650-516-7287 to make an appointment to meet these wonderful piggies.\n\n\nFor adoption fees, requirements and other information, please visit our How to Adopt Section for more information. For more information about our rescue, pet care, and other animals available for adoption, please visit us online at www.NorthStarRescue.org"
        },
        "mix": {
          "$t": "no"
        },
        "shelterId": {
          "$t": "CA1364"
        },
        "lastUpdate": {
          "$t": "2016-05-05T17:11:46Z"
        },
        "animal": {
          "$t": "Small & Furry"
        }
      }, {
        "options": {
          "option": [{
            "$t": "hasShots"
          }, {
            "$t": "altered"
          }]
        },
        "status": {
          "$t": "A"
        },
        "contact": {
          "phone": {
            "$t": "310-455-1901 "
          },
          "state": {
            "$t": "CA"
          },
          "address2": {},
          "email": {
            "$t": "sachianimalrescue@gmail.com"
          },
          "city": {
            "$t": "Pacifica"
          },
          "zip": {
            "$t": "94044"
          },
          "fax": {},
          "address1": {}
        },
        "age": {
          "$t": "Adult"
        },
        "size": {
          "$t": "L"
        },
        "media": {
          "photos": {
            "photo": [{
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/1/?bust=1464543872&width=60&-pnt.jpg",
              "@id": "1"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/1/?bust=1464543872&width=95&-fpm.jpg",
              "@id": "1"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/1/?bust=1464543872&width=500&-x.jpg",
              "@id": "1"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/1/?bust=1464543872&width=300&-pn.jpg",
              "@id": "1"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/1/?bust=1464543872&width=50&-t.jpg",
              "@id": "1"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/2/?bust=1464543873&width=60&-pnt.jpg",
              "@id": "2"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/2/?bust=1464543873&width=95&-fpm.jpg",
              "@id": "2"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/2/?bust=1464543873&width=500&-x.jpg",
              "@id": "2"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/2/?bust=1464543873&width=300&-pn.jpg",
              "@id": "2"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/2/?bust=1464543873&width=50&-t.jpg",
              "@id": "2"
            }, {
              "@size": "pnt",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/3/?bust=1464543873&width=60&-pnt.jpg",
              "@id": "3"
            }, {
              "@size": "fpm",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/3/?bust=1464543873&width=95&-fpm.jpg",
              "@id": "3"
            }, {
              "@size": "x",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/3/?bust=1464543873&width=500&-x.jpg",
              "@id": "3"
            }, {
              "@size": "pn",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/3/?bust=1464543873&width=300&-pn.jpg",
              "@id": "3"
            }, {
              "@size": "t",
              "$t": "http://photos.petfinder.com/photos/pets/35240356/3/?bust=1464543873&width=50&-t.jpg",
              "@id": "3"
            }]
          }
        },
        "id": {
          "$t": "35240356"
        },
        "shelterPetId": {},
        "breeds": {
          "breed": [{
            "$t": "Boxer"
          }, {
            "$t": "Pit Bull Terrier"
          }]
        },
        "name": {
          "$t": "Bear II"
        },
        "sex": {
          "$t": "M"
        },
        "description": {
          "$t": "Bear has come a long way in his time with Sachi. When we first met the big guy, he was short on social skills and like his ursine namesake he appeared to have just wandered in from the forest. Bear has learned the ways of the world quickly though and he's become quite the civilized gent. He's a 3 year old, low maintenance fellow who is just looking for a nice place to call home.\n\nPlease fill out an adoption application. After review, one of our volunteers will contact you to answer your questions and to set up a home check and a meeting with the dogs. Inquiries WITHOUT the application will NOT be answered. Here is the link: http://www.sachianimalrescue.com/adoption-process.html"
        },
        "mix": {
          "$t": "yes"
        },
        "shelterId": {
          "$t": "CA1679"
        },
        "lastUpdate": {
          "$t": "2016-05-29T17:44:34Z"
        },
        "animal": {
          "$t": "Dog"
        }
      }]
    },
    "header": {
      "timestamp": {
        "$t": "2016-08-30T03:01:54Z"
      },
      "status": {
        "message": {},
        "code": {
          "$t": "100"
        }
      },
      "version": {
        "$t": "0.1"
      }
    },
    "@xsi:noNamespaceSchemaLocation": "http://api.petfinder.com/schemas/0.9/petfinder.xsd"
  }
};