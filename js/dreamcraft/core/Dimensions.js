dreamcraft.Dimensions = (function () {

  return {

    total_width: function(elt) {
      var element = $(elt);
      var total = element.width();
      total += parseInt(element.css("padding-left"), 10);
      total += parseInt(element.css("padding-right"), 10);
      total += parseInt(element.css("margin-left"), 10);
      total += parseInt(element.css("margin-right"), 10);
      return total;
    },

    outter_width: function(elt) {
      var element = $(elt);
      var total = 0;
      total += parseInt(element.css("padding-left"), 10);
      total += parseInt(element.css("padding-right"), 10);
      total += parseInt(element.css("margin-left"), 10);
      total += parseInt(element.css("margin-right"), 10);
      return total;
    }
  };

}());
