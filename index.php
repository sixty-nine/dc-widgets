<html>
  <head>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/dc-core.js"></script>
    <script type="text/javascript" src="js/dc-widgets.js"></script>
    <link rel="stylesheet" type="text/css" href="css/dc-widgets.css" />
  </head>
  <body>
  <?php 
    if ($_POST['font-select']) echo "You selected the font: ".$_POST['font-select'].'<br/>';
    if ($_POST['my_select']) echo "You selected the option: ".$_POST['my_select'].'<br/>';
    if ($_POST['color']) echo "You selected the color: ".$_POST['color'].'<br/>';
  ?>
    <br/>
    <form action="index.php" method="post">
      Select a font: 
      <script type="text/javascript">
      new dcFontSelect('font-select').set_default('<?php echo $_POST['font-select'] ?>');
      </script>
      <br/>
      
      Select an option: 
      <script type="text/javascript">
      new dcSelect('my_select', [['option1', 'Option 1'], ['option2', 'Option 2']], function(e, param){ $('#font').val(param);}).set_default('<?php echo $_POST['my_select'] ?>');
      </script>
      <br/>
      
      Select a color: 
      <script type="text/javascript">
        new dcDropdown();
      new dcColorSelect('color').set_default('<?php echo $_POST['color'] ?>');
      </script>
      <br/>

      <input name="submit" type="submit" value="submit" />
    </form>
  </body>
</html>