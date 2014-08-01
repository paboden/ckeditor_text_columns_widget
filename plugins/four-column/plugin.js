CKEDITOR.plugins.add('four-column', {
  requires: 'widget',

  icons: 'four-column',

  init: function(editor) {
    editor.widgets.add('four-column', {
      allowedContent:
        'div(!c4); ' +
        'div(!c4-col1); ' +
        'div(!c4-col2); ' +
        'div(!c4-col3); ' +
        'div(!c4-col4); ' +
        'div(!c4-col1-in); ' +
        'div(!c4-col2-in); ' +
        'div(!c4-col3-in); ' +
        'div(!c4-col4-in); ',

      requiredContent: 'div(c4)',

      editables: {
        content_one: {
          selector: '.c4-col1-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_two: {
          selector: '.c4-col2-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_three: {
          selector: '.c4-col3-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
        content_four: {
          selector: '.c4-col4-in',
          allowedContent: 'h1 h2 h3 h4 h5 h6 p br ul ol li strong em; img[alt,!src,title]; a[!href]; iframe[!href]; object;'
        },
      },

      template:
        '<div class="c4">' +
          '<div class="c4-col1"><div class="c4-col1-in">Text here...</div></div>' +
          '<div class="c4-col2"><div class="c4-col2-in">Text here...</div></div>' +
          '<div class="c4-col3"><div class="c4-col3-in">Text here...</div></div>' +
          '<div class="c4-col4"><div class="c4-col4-in">Text here...</div></div>' +
        '</div>',

      button: 'Create four column content',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass('c4');
      }
    });
  },

  onLoad: function(editor) {
    CKEDITOR.addCss(
      '.c4 {' +
        'width: 100%;' +
        'padding: 3px;' +
        'margin: 5px 0px 15px;' +
        'background: #eee;' +
        'border-radius: 3px;' +
        'border: 1px solid #ddd;' +
        'box-shadow: 0 1px 1px #fff inset;' +
      '}' +
      '.c4:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c4-col1, ' +
      '.c4-col2, ' +
      '.c4-col3, ' +
      '.c4-col4 {' +
        'box-shadow: 0 1px 1px #ddd inset;' +
        'border-radius: 3px;' +
        'background: #fff;' +
        'float: left;' +
        'width: 23.9%;' +
        'margin: 2px 0.5% 3px;' +
      '}' +
      '.c4-col1:after, ' +
      '.c4-col2:after, ' +
      '.c4-col3:after, ' +
      '.c4-col4:after {' +
        'content: "";' +
        'display: table;' +
        'clear: both;' +
      '}' +
      '.c4-col1-in,' +
      '.c4-col2-in,' +
      '.c4-col3-in,' +
      '.c4-col4-in {' +
        'padding: 5px 10px;' +
      '}' +
      '.c4-col1-in img, ' +
      '.c4-col2-in img, ' +
      '.c4-col3-in img, ' +
      '.c4-col4-in img {' +
        'max-width: 100%;' +
        'height: auto;' +
      '}'
    );
  }

});