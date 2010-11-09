dreamcraft.Widgets.FontChooser = function (container_id, options, onchange) {

  options = options || {};

  var font_sizes = [
    ['9px', '9 px'],
    ['10px', '10 px'],
    ['11px', '11 px'],
    ['12px', '12 px'],
    ['14px', '14 px'],
    ['16px', '16 px'],
    ['18px', '18 px'],
    ['20px', '20 px'],
    ['24px', '24 px'],
    ['28px', '28 px'],
    ['32px', '32 px'],
    ['64px', '64 px']
  ];

  var id = dreamcraft.Core.pseudo_uid();
  var height = options['height'] || '170px';
  var width = options['width'] || '305px';
  var font_family, font_size;
  
  var widget_changed = function () {
    onchange(
      font_family.get_value(),
      font_size.get_value(),
      $('#font_bold_'+id).is(':checked'),
      $('#font_italic_'+id).is(':checked'));
  };

  this.render = function () {

    var container = $('#'+container_id);
    //container.addClass('widget_box');
    container.css({
      'height': height,
      'width': width
    });

    container.append('<div style="float: left; margin-right: 25px; height: 100%"><div id="font_family_'+id+'"></div></div>');
    container.append('<div id="font_size_'+id+'" style="float: left;"></div>');

    font_family = new dreamcraft.Widgets.FontList('font_family_'+id, {'height': '80%'}, widget_changed);
    font_size = new dreamcraft.Widgets.List('font_size_'+id, font_sizes, {'height': '100%', 'width': '75px'}, widget_changed);

    var html = '<div style="margin-top: 10px; width: 100%">';
    html += '<div style="width: 50%; float: left;">';
    html += '<input type="checkbox" id="font_bold_'+id+'" /><label for="font_bold_'+id+'">Bold</label>';
    html += '</div>';
    html += '<div style="width: 50%; float: left;">';
    html += '<input type="checkbox" id="font_italic_'+id+'" /><label for="font_italic_'+id+'">Italic</label>';
    html += '</div></div>';
    $('#font_family_'+id).parent().append('<div id="font_styles_'+id+'">'+html+'</div>');
  };

  this.render();
  $('#font_bold_'+id).click(widget_changed);
  $('#font_italic_'+id).click(widget_changed);
}