dreamcraft.Widgets.BorderChooser = function (container_id, options, onchange) {

  options = options || {};

  var styles = [
    ['none', 'None'],
    ['solid', 'Solid'],
    ['dashed', 'Dashed'],
    ['dotted', 'Dotted'],
    ['double', 'Double'],
    ['groove', 'Groove'],
    ['ridge', 'Ridge'],
    ['inset', 'Inset'],
    ['outset', 'Outset']
  ];

  var sizes = [
    ['1px', '1 px'],
    ['2px', '2 px'],
    ['3px', '3 px'],
    ['4px', '4 px'],
    ['5px', '5 px']
  ];

  var id = dreamcraft.Core.pseudo_uid();
  var height = options['height'] || '170px';
  var width = options['width'] || '270px';
  var style_chooser, size_chooser;

  var widget_changed = function () {
    onchange(
      style_chooser.get_value(),
      size_chooser.get_value()
    );
  };

  this.render = function () {
    var container = $('#'+container_id);
    container.css({
      'height': height,
      'width': width
    });

    container.append('<div id="border_style_'+id+'" style="float: left; margin-right: 25px;"></div>');
    container.append('<div id="border_size_'+id+'" style="float: left;"></div>');

    style_chooser = new dreamcraft.Widgets.List('border_style_'+id, styles, {'height': '100%', 'width': '100px'}, widget_changed);
    size_chooser = new dreamcraft.Widgets.List('border_size_'+id, sizes, {'height': '100%', 'width': '75px'}, widget_changed);

  }

  this.render();
  
}