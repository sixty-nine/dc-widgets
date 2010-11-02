/**
 * Color selector combo
 */
function dcColorSelect(id, onchange) {

  this.colors = [
    ['black', ''], ['#444', ''], ['#666', ''], ['#999', ''],
    ['#ccc', ''], ['#eee', ''], ['white', ''],
    ['#990000', ''], ['#FF0000', ''], ['#FF6600', ''], ['#FF9900', ''],
    ['#FFCC00', ''], ['#FFFF00', ''], ['#CCFF00', ''], ['#99FF00', ''],
    ['#66FF00', ''], ['#33FF00', ''], ['#009900', ''], ['#006600', ''],
    ['#009966', ''], ['#00CC99', ''], ['#00FF99', ''], ['#00FFFF', ''],
    ['#66FFFF', ''], ['#99FFFF', ''], ['#99CCFF', ''], ['#66CCFF', ''],
    ['#00CCFF', ''], ['#3399FF', ''], ['#0066FF', ''], ['#0033FF', ''],
    ['#0000CC', ''], ['#000099', ''], ['#3300FF', ''], ['#6600FF', ''],
    ['#9900FF', ''], ['#CC00FF', ''], ['#FF00FF', ''], ['#FF33FF', ''],
    ['#FF66FF', ''], ['#FF99FF', ''], ['#FFCCFF', ''], ['#FFCCCC', ''],
    ['#FF99CC', ''], ['#FF6699', ''], ['#FF3399', ''], ['#FF0099', ''],
    ['#CC3366', ''], ['#CC3333', ''], ['#663300', ''], ['#993300', ''],
    ['#CC6633', ''], ['#CC9966', ''], ['#FFCC66', ''], ['#FFFF99', ''],
    ['#CCCC66', ''], ['#999933', ''], ['#666600', ''], ['#336633', ''],
    ['#339933', ''], ['#66CC66', ''], ['#99FF99', ''], ['#99FFCC', ''],
    ['#66CCCC', ''], ['#339999', ''], ['#006666', ''], ['#003366', ''],
    ['#336699', ''], ['#6699CC', ''], ['#6666CC', ''], ['#9999FF', ''],
    ['#CC99FF', ''], ['#9966CC', ''], ['#663399', ''], ['#660066', ''],
    ['#660033', ''], ['#993366', ''], ['#CC6699', ''], ['#FF99CC', ''],
    ['#FF9999', ''], ['#FFCC99', ''], ['#CCCC99', ''], ['#CCCC33', ''],
    ['#99CC33', ''], ['#33CC33', ''], ['#33CC66', ''], ['#33CC99', ''],
    ['#33CCCC', ''], ['#3399CC', ''], ['#3366CC', ''], ['#3333CC', ''],
    ['#6633CC', ''], ['#9933CC', ''], ['#CC33CC', ''], ['#CC3399', ''],
  ];

  var that = new dcSelect(id, this.colors, onchange, true);
  var counter = 0;

  that.render_item = function(parent, text, val) {
    counter++;
    if (counter % 8 == 0) parent.append('<br/>');
    parent.append('<span class="selector_item"><input type="hidden" value="'+val+'" /><span style="display: block; float: left; margin-right: 3px; margin-top: 1px; width: 16px; height: 16px; background-color: '+val+';">&nbsp;</span></span>');
  };

  that.render_value = function (parent, text, val) {
    parent.css('background-color', val);
  };

  that.render_widget();
  that.attach_events();

  return that;
}




