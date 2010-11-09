dreamcraft.Widgets.ColorChooser = function (container_id, options, onchange) {
  
  options = options || {};

  // Calculate the color palette only once
  if (! dreamcraft.Widgets.ColorChooser.colors) {
    dreamcraft.Widgets.ColorChooser.colors = dreamcraft.Colors.Palette.palette(20);
  }

  var id = dreamcraft.Core.pseudo_uid();
  var height = options['height'] || '100px';
  var width = options['width'] || '270px';

  this.render = function () {
    var container = $('#'+container_id);
    container.css({
      'height': height,
      'width': width
    });
    
    container.append('<div class="colors"></div>');
    $('.colors', container).css({
      'border': '1px solid black',
      'height': '100%',
      'width': '170px',
      'overflow-y': 'scroll',
      'float': 'left',
      'padding-left': '1px'
    });

    container.append('<div class="selector"></div>');
    $('.selector', container).css({
      'float': 'left',
      'width': '80px', 
      'margin-left': '10px'
    });
    
    $('.selector', container).append('<div class="color"></div>');
    $('.color', container).css({
      'border': '1px solid black',
      'width': '75px',
      'height': '50px', 
      'background-color': 'red'
    });
    
    $('.selector', container).append('<input type="text" />');
    $('input', container).css({
      'width': '75px',
      'margin-top': '10px',
      'border': '1px solid black'
    });
    
    container.append('<div style="clear: both"></div>');
   
    for(var i = 0; i < dreamcraft.Widgets.ColorChooser.colors.length; i++) {
      for(var j = 0; j < dreamcraft.Widgets.ColorChooser.colors[i].length; j++) {
        $('.colors', container).append('<span style="display: block; float: left; margin-right: 1px; margin-top: 1px; border: 1px solid black; width: 16px; height: 16px; background-color: '+dreamcraft.Widgets.ColorChooser.colors[i][j]+'">&nbsp;</span>');
      }
      $('.colors', container).append('<br/>');
    }
    
    $('.colors span', container).click(function () {
      var color = $(this).css('background-color');
      $('.color', $(this).parent().parent()).css('background-color', color);
      $('input', $(this).parent().parent()).val(dreamcraft.Colors.css_rgb_to_hex(color));
      onchange(color);
    });

    $('input', container).change(function () {
      var color = $(this).val();
      if (dreamcraft.Colors.is_valid_color(color)) {
        $('.color', $(this).parent()).css('background-color', color);
        onchange(color);
      }
    });

  };
  
  this.render();
  
};