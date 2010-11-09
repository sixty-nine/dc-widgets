$(document).ready(function () {
  // Formfish header color
  new dreamcraft.Widgets.ColorChooser('formfish_header_color', {'height': '134px'}, function (color) {
    $('#formheader').css('background-color', color);
  });
  // Page background color
  new dreamcraft.Widgets.ColorChooser('page_background_color', {'height': '170px'}, function (color) {
    $('#preview').css('background-color', color);
  });
  // Form background color
  new dreamcraft.Widgets.ColorChooser('form_background_color', {'height': '170px'}, function (color) {
    $('#preview .form').css('background-color', color);
  });
  // Field background color
  new dreamcraft.Widgets.ColorChooser('field_background_color', {'height': '170px'}, function (color) {
    $('#preview input').css('background-color', color);
  });
  // Title font
  new dreamcraft.Widgets.ColorChooser('title_font_color', {'height': '170px'}, function (color){
    $('#preview h1').css('color', color);
  });
  new dreamcraft.Widgets.FontSelector('title_font_selector', {},
    function (font, size, bold, italic) {
      if (font) { $('#preview h1').css('font-family', font); }
      if (size) { $('#preview h1').css('font-size', size); }
      $('#preview h1').css('font-weight', bold?'bold':'normal');
      $('#preview h1').css('font-style', italic?'italic':'normal');
    });
  // Text font
  new dreamcraft.Widgets.ColorChooser('text_font_color', {'height': '170px'}, function (color){
    $('#preview div.description').css('color', color);
  });
  new dreamcraft.Widgets.FontSelector('text_font_selector', {},
    function (font, size, bold, italic) {
      if (font) { $('#preview div.description').css('font-family', font); }
      if (size) { $('#preview div.description').css('font-size', size); }
      $('#preview div.description').css('font-weight', bold?'bold':'normal');
      $('#preview div.description').css('font-style', italic?'italic':'normal');
    });
  // Field title font
  new dreamcraft.Widgets.ColorChooser('field_title_font_color', {'height': '170px'}, function (color){
    $('#preview label').css('color', color);
  });
  new dreamcraft.Widgets.FontSelector('field_title_font_selector', {},
    function (font, size, bold, italic) {
      if (font) { $('#preview label').css('font-family', font); }
      if (size) { $('#preview label').css('font-size', size); }
      $('#preview label').css('font-weight', bold?'bold':'normal');
      $('#preview label').css('font-style', italic?'italic':'normal');
    });
  // Field text font
  new dreamcraft.Widgets.ColorChooser('field_text_font_color', {'height': '170px'}, function (color){
    $('#preview input').css('color', color);
  });
  new dreamcraft.Widgets.FontSelector('field_text_font_selector', {},
    function (font, size, bold, italic) {
      if (font) { $('#preview input').css('font-family', font); }
      if (size) { $('#preview input').css('font-size', size); }
      $('#preview input').css('font-weight', bold?'bold':'normal');
      $('#preview input').css('font-style', italic?'italic':'normal');
    });
  // Form border
  new dreamcraft.Widgets.BorderChooser('form_border_chooser', {'width': '210px'}, function (style, size) {
    $('#preview .form').css('border-style', style);
    $('#preview .form').css('border-width', size);
  });
  new dreamcraft.Widgets.ColorChooser('form_border_color', {'height': '170px'}, function (color) {
    $('#preview .form').css('border-color', color);
  });
  // Field border
  new dreamcraft.Widgets.BorderChooser('field_border_chooser', {'width': '210px'}, function (style, size) {
    $('#preview input').css('border-style', style);
    $('#preview input').css('border-width', size);
  });
  new dreamcraft.Widgets.ColorChooser('field_border_color', {'height': '170px'}, function (color) {
    $('#preview input').css('border-color', color);
  });
  // Divider border
  new dreamcraft.Widgets.BorderChooser('divider_border_chooser', {'width': '210px'}, function (style, size) {
    $('#preview div.divider').css('border-bottom-style', style);
    $('#preview div.divider').css('border-bottom-width', size);
  });
  new dreamcraft.Widgets.ColorChooser('divider_border_color', {'height': '170px'}, function (color) {
    $('#preview div.divider').css('border-bottom-color', color);
  });

  // Tabs
  dreamcraft.Widgets.SubTabs.init('contentTemplate');
  dreamcraft.Widgets.SubTabs.init('contentBackgrounds');
  dreamcraft.Widgets.SubTabs.init('contentFonts');
  dreamcraft.Widgets.SubTabs.init('contentBorders');
  dreamcraft.Widgets.Tabs.init('editor');

  // Slider
  $('#slider').click(function(){
    if ($('#editor').is(":visible")) {
      $('#editor').slideUp('slow');
      $('#slider').html('Show editor');
    }
    else {
      $('#editor').slideDown('slow');
      $('#slider').html('Hide editor');
    }
  });

  // Header selector
  $('#header_formfish').click(function () {
    $('#formfish_header_div').siblings().hide();
    $('#formfish_header_div').show();
  });
  $('#header_custom').click(function () {
    $('#custom_header_div').siblings().hide();
    $('#custom_header_div').show();
  });
  $('#header_none').click(function () {
    $('#none_header_div').siblings().hide();
    $('#none_header_div').show();
  });

  // Buttons selector
  $('#button_text').click(function () {
    $('#button_text_div').siblings().hide();
    $('#button_text_div').show();
  });
  $('#button_image').click(function () {
    $('#button_image_div').siblings().hide();
    $('#button_image_div').show();
  });

});
