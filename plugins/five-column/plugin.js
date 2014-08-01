CKEDITOR.plugins.add('five-column', {
  requires: 'widget',

  icons: 'five-column',

  init: function(editor) {
    editor.widgets.add('five-column', {
      allowedContent:
        'div(!c5); ' +
        'div(!c5-col1); ' +
        'div(!c5-col2); ' +
        'div(!c5-col3); ' +
        'div(!c5-col4); ' +
        'div(!c5-col5); ' +
        'div(!c5-col1-in); ' +
        'div(!c5-col2-in); ' +
        'div(!c5-col3-in); ' +
        'div(!c5-col4-in); ' +
        'div(!c5-col5-in)',

      requiredContent: 'div(c5)',

      editables: {
        content_one: {
          selector: '.c5-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_two: {
          selector: '.c5-col2-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_three: {
          selector: '.c5-col3-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_four: {
          selector: '.c5-col4-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_five: {
          selector: '.c5-col5-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
      },

      template:
        '<div class="c5">' +
          '<div class="c5-col1"><div class="c5-col1-in">Text here...</div></div>' +
          '<div class="c5-col2"><div class="c5-col2-in">Text here...</div></div>' +
          '<div class="c5-col3"><div class="c5-col3-in">Text here...</div></div>' +
          '<div class="c5-col4"><div class="c5-col4-in">Text here...</div></div>' +
          '<div class="c5-col5"><div class="c5-col5-in">Text here...</div></div>' +
        '</div>',

      button: 'Create five column content',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass('c5');
      }
    });
  },

  onLoad: function(editor) {
    CKEDITOR.addCss(
      '.c5 {' +
        'width: 100%;' +
        'padding: 3px;' +
        'margin: 5px 0px 15px;' +
        'background: #eee;' +
        'border-radius: 3px;' +
        'border: 1px solid #ddd;' +
        'box-shadow: 0 1px 1px #fff inset;' +
      '}' +
      '.c5:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c5-col1, ' +
      '.c5-col2, ' +
      '.c5-col3, ' +
      '.c5-col4, ' +
      '.c5-col5 {' +
        'box-shadow: 0 1px 1px #ddd inset;' +
        'border-radius: 3px;' +
        'background: #fff;' +
        'float: left;' +
        'width: 18.9%;' +
        'margin: 2px 0.5% 3px;' +
      '}' +
      '.c5-col1:after, ' +
      '.c5-col2:after, ' +
      '.c5-col3:after, ' +
      '.c5-col4:after, ' +
      '.c5-col5:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c5-col1-in, ' +
      '.c5-col2-in, ' +
      '.c5-col3-in, ' +
      '.c5-col4-in, ' +
      '.c5-col5-in {' +
        'padding: 5px 10px;' +
      '}' +
      '.c5-col1-in img, ' +
      '.c5-col2-in img, ' +
      '.c5-col3-in img, ' +
      '.c5-col4-in img, ' +
      '.c5-col5-in img, ' +
        'max-width: 100%;' +
        'height: auto;' +
      '}'
    );
  }

});