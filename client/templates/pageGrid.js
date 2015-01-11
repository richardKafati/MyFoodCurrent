Template.pageGrid.helpers({
  foodFilters: function () {
    FoodsDbFoodCategoriesAndIDsNotUnique = Foods.find({}, {fields: {foodCategory: 1}}).fetch();
    console.log(FoodsDbFoodCategoriesAndIDsNotUnique);
    FoodsDbFoodCategoriesValuesNotUnique = _.map(FoodsDbFoodCategoriesAndIDsNotUnique, function (document) {
      return document.foodCategory;
    });
    console.log(FoodsDbFoodCategoriesValuesNotUnique);
    FoodsDbFoodCategoriesValues = _.uniq(FoodsDbFoodCategoriesValuesNotUnique);
    console.log(FoodsDbFoodCategoriesValues);
    return FoodsDbFoodCategoriesValues;
  },

  foodCategoriesChecked: function () {
    console.log(Session.get("foodCategoriesChecked") + "IN THE HELPERRR");
    return Session.get("foodCategoriesChecked");
  },

  foodsOfThatCategory: function () {
    return Foods.find({foodCategory: {$in: [this]}});
  }

});
