<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/dc-core.js"></script>
    <script type="text/javascript" src="js/dc-widgets.js"></script>
    <script type="text/javascript" src="js/ff-editor.js"></script>
    <link rel="stylesheet" type="text/css" href="css/dc-widgets.css" />
    <link rel="stylesheet" type="text/css" href="css/ff-editor.css" />
  </head>
  <body>

    <div id="editor">
      <div style="width: 100%; min-width: 700px;">
        <div style="float: left; width: 50%; min-width: 400px;">
          <h2>Template designer</h2>
        </div>
        <div style="float: left; width: 48%; min-width: 300px; text-align: right; padding-top: 10px;">
          <input type="button" class="normal_button" value="CANCEL CHANGES"/>
          <input type="button" class="highlighted_button" value="MODIFY TEMPLATE"/>
        </div>
        <div class="clear"></div>
      </div>
      <div class="navigation">
        <div class="tab selected">Template</div>
        <div class="tab">Header</div>
        <div class="tab">Backgrounds</div>
        <div class="tab">Fonts</div>
        <div class="tab">Borders</div>
        <div class="tab">Buttons</div>
      </div>
      <div class="content">

        <div id="contentTemplate">
          <div class="subnavigation">
            <div id="TemplateName" class="subtab selected">Name</div>
            <div id="TemplateCustomCSS" class="subtab">Custom CSS</div>
          </div>
          <div class="subcontent">

            <div id="subcontentTemplateName">
              <div class="panel_content">
              Name
              </div>
            </div>
            <div id="subcontentTemplateCustomCSS">
              <div class="panel_content">
                <input id="use_custom_css" type="checkbox">
                <label for="use_custom_css">Use custom CSS
                <span class="explain">Download the CSS Form template kit<br/>
                Please note that the custom CSS won't be reflected in the form preview.<span class="explain">
                </label>
                <br/>
                <textarea style="height: 100px; width: 500px; "></textarea>
              </div>
            </div>
          </div>
        </div>
        
        <div id="contentHeader">
          
          <div class="panel_content">
            <h3>Select the form header</h3>
            <div>
              <div style="margin-right: 25px; float: left;">
                <input type="radio" id="header_formfish" name="header" value="formfish" />
                <label for="header_formfish">Formfish
                <span class="explain">Use the default formfish header</span></label>
                <input type="radio" id="header_custom" name="header" value="custom" />
                <label for="header_custom">Custom
                <span class="explain">Use a custom image header</span></label>
                <input type="radio" id="header_none" name="header" value="none" />
                <label for="header_none">None
                <span class="explain">Do not use any header</span></label>
              </div>
              <div style="float: left;">
                <div id="formfish_header_div" style="display: none;">
                  <div id="formfish_header_color"></div>
                </div>
                <div id="custom_header_div" style="display: none;">
                Select the image to use:<br/> 
                </div>
                <div id="none_header_div" style="display: none;">
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
          
        </div>
        
        <div id="contentBackgrounds">
          <div class="subnavigation">
            <div id="PageBackground" class="subtab selected">Page</div>
            <div id="FormBackground" class="subtab">Form</div>
            <div id="FieldBackground" class="subtab">Field</div>
            <div id="HighlightBackground" class="subtab">Highlight</div>
          </div>
          <div class="subcontent">
          
            <div id="subcontentPageBackground">
              <div class="panel_content">
                <div id="page_background_color"></div>
              </div>
            </div>

            <div id="subcontentFormBackground">
              <div class="panel_content">
                <div id="form_background_color"></div>
              </div>
            </div>

            <div id="subcontentFieldBackground">
              <div class="panel_content">
                <div id="field_background_color"></div>
              </div>
            </div>
          
          </div>
        </div>
        
        <div id="contentFonts">
          <div class="subnavigation">
            <div id="TitleFont" class="subtab selected">Title</div>
            <div id="TextFont" class="subtab">Text</div>
            <div class="subtab">Section title</div>
            <div class="subtab">Section text</div>
            <div id="FieldTitleFont" class="subtab">Field title</div>
            <div id="FieldTextFont" class="subtab">Field text</div>
          </div>
          <div class="subcontent">

            <div id="subcontentTitleFont">
              <div class="panel_content">
                <div style="float: left; margin-right: 25px;">
                  <div id="title_font_selector"></div>
                </div>
                <div style="float: left; margin-right: 25px;">
                  <div id="title_font_color"></div>
                </div>
              </div>
            </div>

            <div id="subcontentTextFont">
              <div class="panel_content">
                <div style="float: left; margin-right: 25px;">
                  <div id="text_font_selector"></div>
                </div>
                <div style="float: left; margin-right: 25px;">
                  <div id="text_font_color"></div>
                </div>
              </div>
            </div>

            <div id="subcontentFieldTitleFont">
              <div class="panel_content">
                <div style="float: left; margin-right: 25px;">
                  <div id="field_title_font_selector"></div>
                </div>
                <div style="float: left; margin-right: 25px;">
                  <div id="field_title_font_color"></div>
                </div>
              </div>
            </div>

            <div id="subcontentFieldTextFont">
              <div class="panel_content">
                <div style="float: left; margin-right: 25px;">
                  <div id="field_text_font_selector"></div>
                </div>
                <div style="float: left; margin-right: 25px;">
                  <div id="field_text_font_color"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div id="contentBorders">
          <div class="subnavigation">
            <div id="FormBorder" class="subtab selected">Form</div>
            <div id="FieldBorder" class="subtab">Field</div>
            <div id="DividerBorder" class="subtab">Divider</div>
          </div>
          <div class="subcontent">
          
            <div id="subcontentFormBorder">
              <div class="panel_content">
                <div style="float: left; margin-right: 25px;">
                  <div id="form_border_chooser"></div>
                </div>
                <div style="float: left; margin-right: 25px;">
                  <div id="form_border_color"></div>
                </div>
              </div>
            </div>

            <div id="subcontentFieldBorder">
              <div class="panel_content">
                <div style="float: left; margin-right: 25px;">
                  <div id="field_border_chooser"></div>
                </div>
                <div style="float: left; margin-right: 25px;">
                  <div id="field_border_color"></div>
                </div>
              </div>
            </div>


            <div id="subcontentDividerBorder">
              <div class="panel_content">
                <div style="float: left; margin-right: 25px;">
                  <div id="divider_border_chooser"></div>
                </div>
                <div style="float: left; margin-right: 25px;">
                  <div id="divider_border_color"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div id="contentButtons">
          <div class="panel_content">
            <h3>Select the submit button style:</h3>
            <div>
              <div style="margin-right: 25px; float: left;">
                <input type="radio" id="button_text" name="buttons" value="formfish" />
                <label for="button_text">Text
                <span class="explain">Use a normal button</span></label>
                <input type="radio" id="button_image" name="buttons" value="custom" />
                <label for="button_image">Image
                <span class="explain">Use a custom image button</span></label>
              </div>
              <div style="float: left;">
                <div id="button_text_div" style="display: none;">
                  Submit button text:<br/>
                  <input type="text" value="Submit" />
                </div>
                <div id="button_image_div" style="display: none;">
                  image
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div style="clear:both"></div>
    </div>
    <div id="slider">Hide editor</div>

    <!-- PREVIEW -->

    <div id="preview">
      &nbsp;
      <div class="form" style="margin: auto; width: 70%; margin-top: 25px; padding: 25px;">
        <div id="formheader">
          <div style="width: 60%; height: 50px; background-image: url('/img/formfish_logo.png'); background-repeat: no-repeat;" id="formlogo"></div>
        </div>
        <div class="row_title">
          <h1>Form title</h1>
          <div class="description">Form text</div>
        </div>
        <div class="row">
          <div class="left">
            <label>Form field</label>
          </div>
          <div class="right">
            <input type="text" />
          </div>
        </div>
        <div class="row">
          <div class="left">
            <label>Another form field</label>
          </div>
          <div class="right">
            <input type="text" />
          </div>
        </div>
        <div class="row">
          <div class="divider" style="border-bottom: 1px solid black; margin-top: 25px; margin-bottom: 25px;" />
        </div>
      </div>
    </div>


  </body>
</html>