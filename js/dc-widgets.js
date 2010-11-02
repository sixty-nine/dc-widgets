/**
 * HTML Select
 */
function dcSelect(id, options, onchange, no_render) {
  
  var object = this;

  this.id = id;
  this.onchange = onchange;
  this.options = options;
  this.text = '';
  this.value = '';
  
  this.item_click = function() {
    var id = $(this).parent().parent().attr('id');
    var input = $('#'+id+' .selector_value');
    var text = $(this).html();
    var val = $('input', this).val();
    
    object.render_value(input, text, val);

    $('#'+id+'_value').val(val);
    $('#'+id).trigger('onchange', val);
  };
  
  this.set_default = function (val) {
  
    $('#selector_'+id+' .selector_item').each(function () {
      if($('input', this).val() == val) {
        $('input', this).click();
        $('#selector_'+id+' .selector_dropdown').hide();
        return;
      }
    });
  };
  
  this.render_value = function (parent, text, val) {
    parent.html(text);
  };
  
  this.render_item = function(parent, text, val) {
    parent.append('<span class="selector_item"><input type="hidden" value="'+val+'" />'+text+'</span>');
  };
  
  this.render_widget = function() {
    document.write('<div id="selector_'+id+'" class="selector"></div>');
    var selector = $('#selector_'+id);

    selector.append('<input type="hidden" name="'+id+'" id="selector_'+id+'_value" value="" />');
    
    selector.append('<div class="selector_input"></div>');
    var input = $('#selector_'+id+' .selector_input');
    
    input.append('<div class="selector_value">&nbsp;</div>');
    var value = $('#selector_'+id+' .selector_value');
    var width = input.width() - 17 - 4;
    value.css({
      'float': 'left',
      'margin-right': '1px',
      'width': width + 'px'
    });

    input.append('<img class="selector_arrow" src="img/combo_arrow.png"/>');
    var image = $('#selector_'+id+' .selector_arrow');


    selector.append('<div class="selector_dropdown"></div>');
    var dropdown = $('#selector_'+id+' .selector_dropdown');
    var top = selector.position().top + selector.height() -1;
    dropdown.hide();
    dropdown.css({
      'width': (input.width()-2)+'px',
      'top': top +'px', 
      'z-index': 1});
    
    for(var i = 0; i < this.options.length; i++) {
      var text, val;
      
      if (options[i] != null) {
        text = this.options[i][1] || '';
        val = this.options[i][0] || '';
      }
      else {
        text = '';
        val = '';
      }
      this.render_item(dropdown, text, val);
    }      
  };
  
  this.attach_events = function () {
    $('#selector_'+id+' span').mouseover(function () {
      $(this).addClass('selector_item_selected');
    });

    $('#selector_'+id+' span').mouseout(function () {
      $(this).removeClass('selector_item_selected');
    });

    $('#selector_'+id+' .selector_item').click(this.item_click);
    
    $('#selector_'+id).click(function () {
        $('#'+this.id+' .selector_dropdown').toggle();
    });

    $('#selector_'+id+' span:first').click();
    $('#selector_'+id+' .selector_dropdown').hide();
    
    if (this.onchange) {
      $('#selector_'+this.id).bind('onchange', this.onchange);
    }
  }
  
  if (! no_render) {
    this.render_widget();
    this.attach_events();
  }
  
}

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

