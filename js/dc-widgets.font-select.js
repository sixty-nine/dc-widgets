/**
 * Font combo selector
 */

function dcFontSelect(id, onchange) {

  this.fonts = [
    ['arial', 'Arial'],
    ['comic sans ms', 'Comic'],
    ['century gothic', 'Century Gothic'],
    ['verdana', 'Verdana'],
    ['courier new', 'Courier New'],
    ['georgia', 'Georgia'],
    ['lucida grande', 'Lucida Grande'],
    ['times', 'Times'],
    ['trebuchet', 'Trebuchet']
  ];

  var that = new dcSelect(id, this.fonts, onchange, true);

  that.render_item = function(parent, text, val) {
    parent.append('<span class="selector_item" style="font-family: '+val+'; font-size: 18px;"><input type="hidden" value="'+val+'" />'+text+'</span>');
  };

  that.render_value = function (parent, text, val) {
    parent.html(text);
    parent.css('font-family', val);
  };

  that.render_widget();
  that.attach_events();

  return that;
}

