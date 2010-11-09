dreamcraft.Widgets.ColorGrid = function (colors) {

  this.id = dreamcraft.Core.pseudo_uid();
  this.colors = colors;

  this.render = function () {

    document.write('<div id="'+this.id+'"></div>')
    var container = $('#'+this.id);

    for(var i = 0; i < this.colors.length; i++) {
      for(var j = 0; j < this.colors[i].length; j++) {
        $(container).append('<span  style="display: block; float: left; margin-right: 3px; margin-top: 1px; width: 16px; height: 16px; background-color: '+this.colors[i][j]+';"');
      }
      $(container).append('<br/>');
    }
  };

  this.render();

  return this;

};

