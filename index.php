<html>
  <head>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/dc-core.js"></script>
    <script type="text/javascript" src="js/dc-widgets.js"></script>
    <link rel="stylesheet" type="text/css" href="css/dc-widgets.css" />
  </head>
  <body>

  <script type="text/javascript">

    new dreamcraft.Widgets.ColorGrid(dreamcraft.Colors.Palette.palette(20));

  </script>
  
  <script type="text/javascript">
  
  
  $(document).ready(function () {
  
    var canvas = dreamcraft.Canvas;

    var imgd = canvas.get_image_data('canvas');
    
    canvas.draw_horizontal_hue_bar(imgd, 10, 185, 300, 25);
    canvas.draw_vertical_hue_bar(imgd, 320, 10, 25, 200);
    
    canvas.draw_sv_grid(imgd, 180, 10, 10, 150);

    canvas.put_image_data('canvas', imgd);
    
  });

  </script>
  <canvas style="border: 1px solid black;" id="canvas" width="400" height="300">
  Fallback content, in case the browser does not support Canvas.
  </canvas>
  
  
  <?php 
    if ($_POST['font-select']) echo "You selected the font: ".$_POST['font-select'].'<br/>';
    if ($_POST['my_select']) echo "You selected the option: ".$_POST['my_select'].'<br/>';
    if ($_POST['color']) echo "You selected the color: ".$_POST['color'].'<br/>';
  ?>
    <br/>
    <form action="index.php" method="post">
      Select a font: 
      <script type="text/javascript">
      new dreamcraft.Widgets.FontSelect('font-select').set_default('<?php echo $_POST['font-select'] ?>');
      </script>
      <br/>
      
      Select an option: 
      <script type="text/javascript">
      new dreamcraft.Widgets.Select('my_select', [['option1', 'Option 1'], ['option2', 'Option 2']], function(e, param){ $('#font').val(param);}).set_default('<?php echo $_POST['my_select'] ?>');
      </script>
      <br/>
      
      Select a color: 
      <script type="text/javascript">
      new dreamcraft.Widgets.ColorSelect('color').set_default('<?php echo $_POST['color'] ?>');
      </script>
      <br/>

      <input name="submit" type="submit" value="submit" />
    </form>
  </body>
</html>