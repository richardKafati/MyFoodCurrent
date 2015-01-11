Session.setDefault("foodCategoriesChecked", []);

Template.foodFilter.events({

  //food category toggles to session array
  "click .filter-foodCategory": function (event) {
    var filter = event.target.value;
    var toggleToTrue = event.target.checked;
    //console.dir(event);

    // get the Array from the session via get
    var catArray = Session.get("foodCategoriesChecked");

    if (toggleToTrue) {
      console.log(toggleToTrue);
      console.log("Adding: " + filter);

      // push new filter to arrray
      catArray.push(filter);

      // uses underscore to manipulate the array http://underscorejs.org/#uniq
      catArray = _.uniq(catArray);

      console.log(catArray);

      // Put Array back into Session Variable for Update
      Session.set("foodCategoriesChecked", catArray);

    } else {
      console.log(toggleToTrue);
      console.log("Removing: " + filter);

      // uses underscore to delete the filter the array http://underscorejs.org/#without
      catArray = _.without(catArray, filter)

      console.log(catArray);

      // Put Array back into Session Variable for Update
      Session.set("foodCategoriesChecked", catArray);
    }
  }

});
