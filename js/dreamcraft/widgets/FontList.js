dreamcraft.Widgets.FontList = function (container_id, options, onchange) {

  this.fonts = [
    ['arial', 'Arial'],
    ['arial black', 'Arial Black'],
    ['Bookman Old Style', 'Bookman Old Style'],
    ['comic sans ms', 'Comic'],
    ['century gothic', 'Century Gothic'],
    ['courier new', 'Courier New'],
    ['Garamond', 'Garamond'],
    ['georgia', 'Georgia'],
    ['impact', 'Impact'],
    ['lucida console', 'Lucida Console'],
    ['lucida sans unicode', 'Lucida Sans'],
    ['ms sans serif', 'MS Sans Serif'],
    ['ms serif', 'MS Serif'],
    ['palatino linotype', 'Palatino Linotype'],
    ['tahoma', 'Tahoma'],
    ['times new roman', 'Times'],
    ['trebuchet ms', 'Trebuchet'],
    ['verdana', 'Verdana']
  ];

  var that = new dreamcraft.Widgets.List(container_id, this.fonts, options, onchange, true);

  that.render_item = function(container, val, text) {
    container.append('<div title="'+val+'" style="font-family:'+val+'">'+text+'</div>');
  };

  that.render();

  return that;
}