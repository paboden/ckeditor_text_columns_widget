CKEDITOR.plugins.add('three-column', {
  requires: 'widget',

  icons: 'three-column',

  init: function(editor) {
    editor.widgets.add('three-column', {
      allowedContent:
        'div(!c3); ' +
        'div(!c3-col1); ' +
        'div(!c3-col2); ' +
        'div(!c3-col3); ' +
        'div(!c3-col1-in); ' +
        'div(!c3-col2-in); ' +
        'div(!c3-col3-in); ',

      requiredContent: 'div(c3)',

      editables: {
        content_one: {
          selector: '.c3-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_two: {
          selector: '.c3-col2-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_three: {
          selector: '.c3-col3-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        }
      },

      template:
        '<div class="c3">' +
          '<div class="c3-col1"><div class="c3-col1-in">Text here...</div></div>' +
          '<div class="c3-col2"><div class="c3-col2-in">Text here...</div></div>' +
          '<div class="c3-col3"><div class="c3-col3-in">Text here...</div></div>' +
        '</div>',

      button: 'Create three column content',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass('widget-three-col');
      }
    });
  },

  onLoad: function(editor) {
    CKEDITOR.addCss(
      '.c3 {' +
        'width: 100%;' +
        'padding: 3px;' +
        'margin: 5px 0px 15px;' +
        'background: #eee;' +
        'border-radius: 3px;' +
        'border: 1px solid #ddd;' +
        'box-shadow: 0 1px 1px #fff inset;' +
      '}' +
      '.c3:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c3-col1, ' +
      '.c3-col2, ' +
      '.c3-col3 {' +
        'border-radius: 3px;' +
        'background: #fff;' +
        'float: left;' +
        'width: 32.2%;' +
        'margin: 2px 0.5% 3px;' +
      '}' +
      '.c3-col1:after, ' +
      '.c3-col2:after, ' +
      '.c3-col3:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c3-col1-in,' +
      '.c3-col2-in,' +
      '.c3-col3-in {' +
        'padding: 5px 10px;' +
      '}' +
      '.c3-col1-in img, ' +
      '.c3-col2-in img, ' +
      '.c3-col3-in img {' +
        'max-width: 100%;' +
        'height: auto;' +
      '}'
    );
  }

});