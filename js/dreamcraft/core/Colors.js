dreamcraft.Colors = (function () {

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

    rgb_to_hex: function (red, green, blue) {
      var decColor = Math.round(red) + 256 * Math.round(green) + 65536 * Math.round(blue);
      return decColor.toString(16);
    },

    css_rgb_to_hex: function (rgb) { 
      var newrgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); 
      if (newrgb) {
        function hex(x) { 
          return ("0" + parseInt(x).toString(16)).slice(-2); 
        } 
        return "#" + hex(newrgb[1]) + hex(newrgb[2]) + hex(newrgb[3]); 
      }
      else {
        return rgb;
      }
    },
    
    is_valid_color: function (colorcode) {

      var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
      return regColorcode.test(colorcode);
    }


  };

}());

dreamcraft.Colors.Palette = (function () {

  return {

    gray_scale: function (steps) {
      steps = steps || 10;
      var palette = [];
      for(var i = 0; i < steps; i ++) {
        var rgb = dreamcraft.Colors.hsv_to_rgb(100, 0, 1-1/(steps-1)*i);
        var hex = dreamcraft.Colors.rgb_to_hex(rgb[0], rgb[1], rgb[2]);
        while (hex.length < 6) {
          hex = '0' + hex;
        }
        palette[i] = '#'+hex;
      }
      return palette;
    },

    hue_scale: function (hue, steps) {
      steps = steps || 10;
      var palette = [];
      var rgb, hex;

      for(var i = 0; i < steps/2; i ++) {
        rgb = dreamcraft.Colors.hsv_to_rgb(hue, 2/  steps*i, 1);
        hex = dreamcraft.Colors.rgb_to_hex(rgb[0], rgb[1], rgb[2]);
        while (hex.length < 6) {
          hex = '0' + hex;
        }
        palette[i] = '#'+hex;
      }
      for(i = 0; i < steps/2; i ++) {
        rgb = dreamcraft.Colors.hsv_to_rgb(hue, 1, 1-(2/  steps*i));
        hex = dreamcraft.Colors.rgb_to_hex(rgb[0], rgb[1], rgb[2]);
        while (hex.length < 6) {
          hex = '0' + hex;
        }
        palette[(steps/2+i)] = '#'+hex;
      }
      return palette;
    },

    palette: function (steps) {
      steps = steps || 10;
      var vsteps = 12;
      var p = [];
      var tmp;
      tmp = this.gray_scale(vsteps-4);
      p = p.concat([tmp]);
      for (var hue = 0; hue < 360; hue += 360/steps) {
        tmp = this.hue_scale(hue, vsteps);

        p = p.concat([tmp.splice(2, tmp.length-4)]);
      }
      return p;
    }
    
  };

}());