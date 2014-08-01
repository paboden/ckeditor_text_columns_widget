CKEDITOR.plugins.add('two-column', {
  requires: 'widget',

  icons: 'two-column',

  init: function(editor) {
    editor.widgets.add('two-column', {
      allowedContent:
        'div(!c2); ' +
        'div(!c2-col1); ' +
        'div(!c2-col2); ' +
        'div(!c2-col1-in); ' +
        'div(!c2-col2-in); ',

      requiredContent: 'div(c2)',

      editables: {
        content_one: {
          selector: '.c2-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_two: {
          selector: '.c2-col2-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        }
      },

      template:
        '<div class="c2">' +
          '<div class="c2-col1"><div class="c2-col1-in">Text here...</div></div>' +
          '<div class="c2-col2"><div class="c2-col2-in">Text here...</div></div>' +
        '</div>',

      button: 'Create two column text',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass('c2');
      }
    });
  },

  onLoad: function(editor) {
    CKEDITOR.addCss(
      '.c2 {' +
        'width: 100%;' +
        'padding: 3px;' +
        'margin: 5px 0px 15px;' +
        'background: #eee;' +
        'border-radius: 3px;' +
        'border: 1px solid #ddd;' +
        'box-shadow: 0 1px 1px #fff inset;' +
      '}' +
      '.c2:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c2-col1,' +
      '.c2-col2 {' +
        'border-radius: 3px;' +
        'background: #fff;' +
        'float: left;' +
        'width: 48.9%;' +
        'margin: 2px 0.5% 3px;' +
      '}' +
      '.c2-col1:after,' +
      '.c2-col2:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c2-col1-in,' +
      '.c2-col2-in {' +
        'padding: 5px 10px;' +
      '}' +
      '.c2-col1-in img,' +
      '.c2-col2-in img {' +
        'max-width: 100%;' +
        'height: auto;' +
      '}'
    );
  }

});