CKEDITOR.plugins.add('six-column', {
  requires: 'widget',

  icons: 'six-column',

  init: function(editor) {
    editor.widgets.add('six-column', {
      allowedContent:
        'div(!c6); ' +
        'div(!c6-col1); ' +
        'div(!c6-col2); ' +
        'div(!c6-col3); ' +
        'div(!c6-col4); ' +
        'div(!c6-col5); ' +
        'div(!c6-col6); ' +
        'div(!c6-col1-in); ' +
        'div(!c6-col2-in); ' +
        'div(!c6-col3-in); ' +
        'div(!c6-col4-in); ' +
        'div(!c6-col5-in); ' +
        'div(!c6-col6-in)',

      requiredContent: 'div(c6)',

      editables: {
        content_one: {
          selector: '.c6-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; a[!href]; img[!src]; iframe[!href]; object'
        },
        content_two: {
          selector: '.c6-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; a[!href]; img[!src]; iframe[!href]; object'
        },
        content_three: {
          selector: '.c6-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; a[!href]; img[!src]; iframe[!href]; object'
        },
        content_four: {
          selector: '.c6-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; a[!href]; img[!src]; iframe[!href]; object'
        },
        content_five: {
          selector: '.c6-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; a[!href]; img[!src]; iframe[!href]; object'
        },
        content_six: {
          selector: '.c6-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; a[!href]; img[!src]; iframe[!href]; object'
        }
      },

      template:
        '<div class="c6">' +
          '<div class="c6-col1"><div class="c6-col1-in">Text here...</div></div>' +
          '<div class="c6-col2"><div class="c6-col2-in">Text here...</div></div>' +
          '<div class="c6-col3"><div class="c6-col3-in">Text here...</div></div>' +
          '<div class="c6-col4"><div class="c6-col4-in">Text here...</div></div>' +
          '<div class="c6-col5"><div class="c6-col5-in">Text here...</div></div>' +
          '<div class="c6-col6"><div class="c6-col6-in">Text here...</div></div>' +
        '</div>',

      button: 'Create six column content',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass('widget-six-col');
      }
    });
  },

  onLoad: function(editor) {
    CKEDITOR.addCss(
      '.c6 {' +
        'width: 100%;' +
        'padding: 3px;' +
        'margin: 5px 0px 15px;' +
        'background: #eee;' +
        'border-radius: 3px;' +
        'border: 1px solid #ddd;' +
        'box-shadow: 0 1px 1px #fff inset;' +
      '}' +
      '.c6:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c6-col1, ' +
      '.c6-col2, ' +
      '.c6-col3, ' +
      '.c6-col4, ' +
      '.c6-col5, ' +
      '.c6-col6 {' +
        'box-shadow: 0 1px 1px #ddd inset;' +
        'border-radius: 3px;' +
        'background: #fff;' +
        'float: left;' +
        'width: 15.6%;' +
        'margin: 2px 0.5% 3px;' +
      '}' +
      '.c6-col1:after, ' +
      '.c6-col2:after, ' +
      '.c6-col3:after, ' +
      '.c6-col4:after, ' +
      '.c6-col5:after, ' +
      '.c6-col6:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c6-col1-in, ' +
      '.c6-col2-in, ' +
      '.c6-col3-in, ' +
      '.c6-col4-in, ' +
      '.c6-col5-in, ' +
      '.c6-col6-in {' +
        'padding: 5px 10px;' +
      '}' +
      '.c6-col1-in img, ' +
      '.c6-col2-in img, ' +
      '.c6-col3-in img, ' +
      '.c6-col4-in img, ' +
      '.c6-col5-in img, ' +
      '.c6-col6-in img {' +
        'max-width: 100%;' +
        'height: auto;' +
      '}'
    );
  }

});