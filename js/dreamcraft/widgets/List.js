dreamcraft.Widgets.List = function (container_id, items, options, onchange, no_render) {

  options = options || {};

  var id = dreamcraft.Core.pseudo_uid();
  var height = options['height'] || '100px';
  var width = options['width'] || '200px';
  
  this.render_item = function (container, val, text) {
    container.append('<div title="'+val+'">'+text+'</div>');
  };

  this.render = function () {

    var container = $('#'+container_id);
    container.addClass('widget_box');
    container.css({
      'height': height,
      'width': width,
      'overflow-y': 'scroll',
      'border': '1px solid black'
    });

    for(var i = 0; i < items.length; i++) {
      this.render_item(container, items[i][0], items[i][1]);
    }

    $('div', container).css({
      'width': '100%'
    });

    $('div', container).click(function () {
      $(this).siblings().removeClass('selected');
      $(this).addClass('selected');
      if (onchange) {
        onchange($(this).attr('title'));
      }
    });

  }

  this.get_value = function () {
    return $('#'+container_id+' div.selected').attr('title');
  };

  if (!no_render) {
    this.render();
  }
  
}