dreamcraft.Canvas = (function () {

  var canvas, context, width, height;

  return {

    get_image_data: function (id) {

      var canvas = document.getElementById(id);
      var context = canvas.getContext('2d');
      var width = $(canvas).width();
      var height = $(canvas).height();

      if (context.createImageData) {
        return context.createImageData(width, height);
      } else if (context.getImageData) {
        return context.getImageData(0, 0, width, height);
      } else {
        return {'width' : width, 'height' : height, 'data' : new Array(width * height * 4)};
      }
    },

    put_image_data: function (id, imgd) {
      var context = document.getElementById(id).getContext('2d');
      context.putImageData(imgd, 0, 0);
    },

    point: function (imgd, x, y, r, g, b, a) {

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
    },

    draw_horizontal_hue_bar: function (imgd, x, y, width, height) {
      var inc = 360 / width;
      for (var h = 0; h < 360; h += inc) {
        for (var i = 0; i <= height; i++) {
          var rgb = this.Colors.hsv_to_rgb(h, 1, 1);
          this.point(imgd, x + Math.round(h/inc), y + i, rgb[0], rgb[1], rgb[2]);
        }
      }
    },

    draw_vertical_hue_bar: function (imgd, x, y, width, height) {
      var inc = 360 / height;
      for (var h = 0; h < 360; h += inc) {
        for (var i = 0; i <= width; i++) {
          var rgb = this.Colors.hsv_to_rgb(h, 1, 1);
          this.point(imgd, x + i, y + Math.round(h/inc), rgb[0], rgb[1], rgb[2]);
        }
      }
    },

    draw_sv_grid: function (imgd, hue, x, y, size) {
      var inc = 1 / size;
      for (var v = 0; v <= 1; v += inc) {
        for (var s = 0; s <= 1; s += inc) {
          var rgb = this.Colors.hsv_to_rgb(hue, v, s);
          this.point(imgd, x + Math.round(v * size), y + Math.round(s * size), rgb[0], rgb[1], rgb[2]);
        }
      }
    }

  };

}());


dreamcraft.Canvas.Colors = (function () {

  return {

    hsv_to_rgb: function (h, s, v) {
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
    },

    rgb_to_html: function (red, green, blue) {
      var decColor = red + 256 * green + 65536 * blue;
      return decColor.toString(16);
    }
  };

}());

