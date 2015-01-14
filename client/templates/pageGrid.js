Template.pageGrid.helpers({
  foodFilters: function () {
    FoodsDbFoodCategoriesAndIDsNotUnique = Foods.find({}, {fields: {foodCategory: 1}}).fetch();
    //console.log(FoodsDbFoodCategoriesAndIDsNotUnique);
    FoodsDbFoodCategoriesValuesNotUnique = _.map(FoodsDbFoodCategoriesAndIDsNotUnique, function (document) {
      return document.foodCategory;
    });
    //console.log(FoodsDbFoodCategoriesValuesNotUnique);
    FoodsDbFoodCategoriesValues = _.uniq(FoodsDbFoodCategoriesValuesNotUnique);
    //console.log(FoodsDbFoodCategoriesValues);
    return FoodsDbFoodCategoriesValues;
  },

  foodCategoriesChecked: function () {
    //console.log(Session.get("foodCategoriesChecked") + "IN THE HELPERRR");
    return Session.get("foodCategoriesChecked");
  },

  foodsOfThatCategory: function (category) {
    return Foods.find({foodCategory: {$in: [category]}});
  }

});

Template.pageGrid.events({

  "submit .add-food": function () {
    event.preventDefault();
    food = event.target.food.value;
    foodCategory = event.target.foodCategory.value;
    quantity = event.target.quantity.value;
    quantityDescriptor = event.target.quantityDescriptor.value;
    Meteor.call("getFoodImageURLandAddFoodToDB", food, foodCategory, quantity, quantityDescriptor);
    event.target.food.value = "";
    event.target.foodCategory.value = "";
    event.target.quantity.value = "";
    event.target.quantityDescriptor.value = "";
  }

});

Template.pageGrid.rendered = function() {
  $('.ui.sticky')
    .sticky({
      context: '#foods-available'
    })
  ;
}
