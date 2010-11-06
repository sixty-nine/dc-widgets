function dcCanvas (id) {
  
  this.canvas = document.getElementById(id);
  this.context = this.canvas.getContext('2d');
  this.width = $(this.canvas).width();
  this.height = $(this.canvas).height();
  
  this.get_image_data = function () {     

    if (this.context.createImageData) {       
      return this.context.createImageData(this.width, this.height);     
    } else if (this.context.getImageData) {       
      return this.context.getImageData(0, 0, this.width, this.height);     
    } else {       
      return {'width' : this.width, 'height' : this.height, 'data' : new Array(this.width * this.height * 4)};     
    }
  }
  
  this.put_image_data = function(imgd) {
    this.context.putImageData(imgd, 0, 0);  
  }
  
  this.point = function (imgd, x, y, r, g, b, a) {

    // Calculate the pixel offset from the coordinates     
    var idx = (x + (y * imgd.width)) * 4;      

    r = r || 0;
    g = g || 0;
    b = b || 0;
    a = a || 255;
    
    // Modify the graphic data     
    imgd.data[idx] = r;     // Red     
    imgd.data[idx+1] = g;   // Green     
    imgd.data[idx+2] = b;   // Blue     
    imgd.data[idx+3] = a; // Alpha channel   
  }
  
  this.draw_horizontal_hue_bar = function (imgd, x, y, width, height) {
    var inc = 360 / width;
    for (var h = 0; h < 360; h += inc) {
      for (var i = 0; i <= height; i++) {
        var rgb = this.colors.hsv_to_rgb(h, 1, 1);
        this.point(imgd, x + Math.round(h/inc), y + i, rgb[0], rgb[1], rgb[2]);  
      }
    }
  }

  this.draw_vertical_hue_bar = function (imgd, x, y, width, height) {
    var inc = 360 / height;
    for (var h = 0; h < 360; h += inc) {
      for (var i = 0; i <= width; i++) {
        var rgb = this.colors.hsv_to_rgb(h, 1, 1);
        this.point(imgd, x + i, y + Math.round(h/inc), rgb[0], rgb[1], rgb[2]);  
      }
    }
  }
  
  this.draw_sv_grid = function (imgd, hue, x, y, size) {
    var inc = 1 / size;
    for (var v = 0; v <= 1; v += inc) {
      for (var s = 0; s <= 1; s += inc) {
        var rgb = this.colors.hsv_to_rgb(hue, v, s);
        this.point(imgd, x + Math.round(v * size), y + Math.round(s * size), rgb[0], rgb[1], rgb[2]);  
      }
    }
  }

      
  /**
   * dcCanvas.colors
   */ 
   
  this.colors = { };
  
  this.colors.hsv_to_rgb = function (h, s, v) {
    var c = v * s;
    var h1 = h / 60;
    var x = c * (1 - Math.abs((h1 % 2) - 1));
    var m = v - c;
    var rgb;
    
    if (typeof h == 'undefined') rgb = [0, 0, 0];
    else if (h1 < 1) rgb = [c, x, 0];
    else if (h1 < 2) rgb = [x, c, 0];
    else if (h1 < 3) rgb = [0, c, x];
    else if (h1 < 4) rgb = [0, x, c];
    else if (h1 < 5) rgb = [x, 0, c];
    else if (h1 <= 6) rgb = [c, 0, x];
    
    
    return [255 * (rgb[0] + m), 255 * (rgb[1] + m), 255 * (rgb[2] + m)];
  }
  
  this.colors.rgb_to_html = function (red, green, blue) {
    var decColor = red + 256 * green + 65536 * blue;
    return decColor.toString(16);
  }


}
  

