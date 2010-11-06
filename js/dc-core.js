/**
 * dreamcraft namespace
 */
dreamcraft = function () {

  return {

  };

}();

/**
 * dreamcraft.Core utilities class
 */
dreamcraft.Core = (function () {

  return {

    pseudo_uid: function () {
      return (((1+Math.random())*0x10000)|0).toString(16) +
             (((1+Math.random())*0x10000)|0).toString(16);
    },

    include: function (file) {
      document.write("<script type='text/javascript' src='js/"+file+"'></script>" );
    }

  };

}());

