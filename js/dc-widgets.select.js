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

  /**
   * Selector item click event handler
   */
  this.item_click = function() {
    var id = $(this).parent().parent().attr('id');
    var input = $('#'+id+' .selector_value');
    var text = $(this).html();
    var val = $('input', this).val();

    object.render_value(input, text, val);

    $('#'+id+'_value').val(val);
    $('#'+id).trigger('onchange', val);
  };

  /**
   * Set the selected item
   * @param val The value of the item to select
   */
  this.set_default = function (val) {

    $('#selector_'+id+' .selector_item').each(function () {
      if($('input', this).val() == val) {
        $('input', this).click();
        $('#selector_'+id+' .selector_dropdown').hide();
        return;
      }
    });
  };

  /**
   * Display the selector value
   * @param parent The selector_input object
   * @param text The text of the selected item
   * @param val The value of the selected item
   */
  this.render_value = function (parent, text, val) {
    parent.html(text);
  };

  /**
   * Display a single selector item
   * @param parent The selector_dropdown object
   * @param text The text of the selected item
   * @param val The value of the selected item
   */
  this.render_item = function(parent, text, val) {
    parent.append('<span class="selector_item"><input type="hidden" value="'+val+'" />'+text+'</span>');
  };

  /**
   * Display the selector and setup the hidden dropdown
   */
  this.render_widget = function() {

    // Render the base DIV containing the widget and the value holding html input
    document.write('<div id="selector_'+id+'" class="selector"></div>');
    var selector = $('#selector_'+id);

    selector.append('<input type="hidden" name="'+id+'" id="selector_'+id+'_value" value="" />');

    // Render the selector value display field (input) and the arrow to show the dropdown
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

    // Render the dropdown holding the items
    selector.append('<div class="selector_dropdown"></div>');
    var dropdown = $('#selector_'+id+' .selector_dropdown');
    var top = selector.position().top + selector.height() -1;
    dropdown.hide();
    dropdown.css({
      'width': (input.width()-2)+'px',
      'top': top +'px',
      'z-index': 1});

    // Render the select items
    for(var i = 0; i < this.options.length; i++) {
      var text, val;

      // To prevent IE problem
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

  /**
   * Attach the event handlers to selector elements and
   * registers the selector events.
   */
  this.attach_events = function () {

    // On mouse over a select item, highlight it
    $('#selector_'+id+' span').mouseover(function () {
      $(this).addClass('selector_item_selected');
    });

    // On mouse out a select item, remove highlight
    $('#selector_'+id+' span').mouseout(function () {
      $(this).removeClass('selector_item_selected');
    });

    // On select item click, call the handler
    $('#selector_'+id+' .selector_item').click(this.item_click);

    // On selector click show the drop down
    $('#selector_'+id).click(function () {
        $('#'+this.id+' .selector_dropdown').toggle();
    });

    // Select the first item at startup
    $('#selector_'+id+' span:first').click();
    $('#selector_'+id+' .selector_dropdown').hide();

    // Register the selector.onchange event
    if (this.onchange) {
      $('#selector_'+this.id).bind('onchange', this.onchange);
    }
  }

  // Startup the widget if required
  if (! no_render) {
    this.render_widget();
    this.attach_events();
  }

}


