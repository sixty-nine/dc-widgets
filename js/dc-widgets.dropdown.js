/**
 * HTML Select
 */
function dcDropdown(no_render) {

  var object = this;
  var id = dreamcraft.Core.pseudo_uid();

  /**
   * Responsible to display the dropdown content
   * @param parent The dropdown object
   */
  this.render_dropdown = function(parent) {
    
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

    this.render_dropdown(dropdown);
  };

  /**
   * Attach the event handlers to selector elements and
   * registers the selector events.
   */
  this.attach_events = function () {

    // On selector click show the drop down
    $('#selector_'+id).click(function () {
        $('#'+this.id+' .selector_dropdown').toggle();
    });

  }

  // Startup the widget if required
  if (! no_render) {
    this.render_widget();
    this.attach_events();
  }

}


