# dc-widgets

Javascript widgets.

This library provides a customizable combobox, a color selector and a font selector.

This code is in alpha version. 


Author: Daniel Barsotti / info [at] dreamcraft [dot] ch

### Known bugs:

 - Display problems in IE8
 - z-index problem when 2 dropdowns are opened at the same time

### Todo

 - Fix IE display problem
 - Test in IE7, and... brrrr... IE6
 - Make it work with keyboard
 - Write tests

## Usage

<code>
dcSelect(id, options, onchange, no_render)
</code>

 - id = The combobox id. Also used as name for the combobox for form posting.
 - options = Array of options. Each option must be provided as an array containing the option value and the option text.
 - onchange = Function called when the value of the combo is changed.
 - no_render = When this option is set to true, the widget will not automatically display and set its event handlers.

<code>
dcFontSelect(id, onchange)
</code>

 - id = The combobox id. Also used as name for the combobox for form posting.
 - onchange = Function called when the value of the combo is changed.

 <code>
dcColorSelect(id, onchange)
</code>

 - id = The combobox id. Also used as name for the combobox for form posting.
 - onchange = Function called when the value of the combo is changed.
 
## License

You are free to use the full code or part of it for your own projects as 
long as you keep the credits to the original work. Don't forget to send us 
an email, we'd love to hear that people are using this :-)


This work is distributed under the Attribution-NonCommercial-ShareAlike 3.0
license ([http://creativecommons.org/licenses/by-nc-sa/3.0/](http://creativecommons.org/licenses/by-nc-sa/3.0/ "http://creativecommons.org/licenses/by-nc-sa/3.0/"))

You are free:

  - to Share - to copy, distribute and transmit the work
  - to Remix - to adapt the work
  
Under the following conditions:

  - Attribution - You must attribute the work in the manner specified by the 
    author or licensor (but not in any way that suggests that they endorse you 
    or your use of the work). 
  - Noncommercial - You may not use this work for commercial purposes. 
  - Share Alike - If you alter, transform, or build upon this work, you may 
    distribute the resulting work only under the same or similar license to 
    this one. 


The legal terms can be found here: 

  [http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode](http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode "http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode")
