//console.log(Foods.find({}, {fields: {foodCategory:1, _id: 0}}));

Meteor.methods({

  /*getFoodImageUrl: function (food) {
    //was trying to make this async but seems as if async callback result cannot be return. Not sure why?
    result = HTTP.get("https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + food + "&rsz=1");
    url = JSON.parse(result.content).responseData.results[0].url;
    return url;
  }*/

  getFoodImageURLandAddFoodToDB: function (food, foodCategory, quantity, quantityDescriptor) {
    //was trying to make this async but seems as if async callback result cannot be return. Not sure why?
    result = HTTP.get("https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + food + "&rsz=1");
    imageUrl = (JSON.parse(result.content).responseData.results[0].url);
    Foods.insert(
      {
        food: food,
        foodCategory: foodCategory,
        quantity: quantity,
        quantityDescriptor: quantityDescriptor,
        imageUrl: imageUrl
      }
    );
  }

});
