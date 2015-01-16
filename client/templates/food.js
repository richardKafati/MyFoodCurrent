Template.food.events({

  "click .delete": function () {
    Foods.remove(this._id);
  },

  "click .openModal": function () {
    foodNameWithoutSpaces = this.food.replace(/\s+/g, '');
    $('#' + foodNameWithoutSpaces + 'ModalView')
      .modal('show');
  },

  "submit .update-food": function () {
    event.preventDefault();
    console.log("trying to log BUT prevent default not working.");
    console.log(event);
  }

});

Template.food.helpers({

  "foodNameWithoutSpaces" : function (food) {
    return food.replace(/\s+/g, '');
  }

});
