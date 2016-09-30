  // (Copied wholesale from the mobile app.)
  .factory('ratingsService', function() {
    //removed return envelope
    var obj = {};
      
      /* @todo Add a check to determine whether or not the specified user has already rated the specified item.
       
      /**
       * @param {Object} ratings
       * @returns {Number} avgRating
       */
      obj.getAvgRating = function(ratings) {
        var ratingsTotal = 0;
        var ratingsCount = this.getRatingsCount(ratings);

        if(ratingsCount === 0) {
          return 0;
        } else {
          for(var rating in ratings) {
            if( ratings.hasOwnProperty(rating) ) {
              ratingsTotal += parseFloat(ratings[rating]);
            }
          }

          return (ratingsTotal / ratingsCount).toFixed(1);
        }
      },

      obj.getUserRating = function(userId, itemType, itemId, userRating) {
        // DELETE IF NOT NEEDED var usersRating = this.
        // Data snapshot???
        // // Get a reference to our posts
        // var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");
        // // Attach an asynchronous callback to read the data at our posts reference
        // ref.on("value", function(snapshot) {
        //   console.log(snapshot.val());
        // }, function (errorObject) {
        //   console.log("The read failed: " + errorObject.code);
        // });

        // Display if true???
        // if(! userRating) {
        //   console.log('User is true.');
        //   ('.userRatingDisplay').css('display','inline');
        // } else {
        //   return 'No user rating';
        //   console.log('No user rating.');
        // }
        return 
        $firebase( new Firebase(dvRef + '/users/' + userId + '/ratings/' + itemType + '/' + itemId + '/' + userRating) );
      
      },

      /**
       * @param {Object} ratings
       * @returns {Number} ratingsCount
       */
      obj.getRatingsCount = function(ratings) {
        return ratings == null
          ? 0
          : Object.keys(ratings).length;
      }
      //removed return envelope
      return obj;
  })