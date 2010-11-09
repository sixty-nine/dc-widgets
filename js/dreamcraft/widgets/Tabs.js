dreamcraft.Widgets.Tabs = (function () {

  return {
    init: function (id) {

      // Setup the tabs

      $('#'+id+' div.tab').each(function(){
        $(this).click(function(){
          // Remove highlight of other tabs
          $('#'+id+' div.tab').each(function(){
            $(this).removeClass('selected');
          });
          // Highlight current tab
          $(this).addClass('selected');
          // Set the content
          $('#'+id+' .content > div').hide();
          $('#content'+$(this).html()).show();
        });
      });
      // Select first tab at startup
      $('#'+id+' div.tab:first').click();
    }
  };

}());

dreamcraft.Widgets.SubTabs = (function () {

  return {
    init: function (id) {
      $('#'+id+' div.subtab').click(function () {
        $('#'+id+' div.subtab').each(function(){
          $(this).removeClass('selected');
        });
        // Highlight current tab
        $(this).addClass('selected');
        $('#'+id+' div.subcontent > div').hide();
        $('#subcontent'+this.id).show();
      });
      $('#'+id+' div.subtab:first').click();
    }
  };

}());
