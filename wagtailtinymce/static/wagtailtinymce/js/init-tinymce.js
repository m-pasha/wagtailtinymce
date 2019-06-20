// https://www.tiny.cloud/docs/configure/editor-appearance/

tinymce.init({
    selector: '#id_body',
    branding: false,
    theme: 'silver',
    menubar: false,
    resize: 'both',

    plugins : 'lists charmap table hr code fullscreen wagtaillink wagtaildoclink wagtailimage wagtailembeds',

    toolbar: 'undo redo | styleselect | h2 h3 h4 h5 | bold italic strikethrough blockquote hr |' +
        'forecolor backcolor | bullist numlist aligncenter | table | charmap |' +
        'wagtaillink wagtaildoclink wagtailimage wagtailembeds |' +
        'code | fullscreen',


    // TABLE
    table_default_attributes: {
        'border': '1'
    },
    table_default_styles: {
        'border-collapse': 'collapse',
        'width': '100%'
    },
    table_responsive_width: true

    // COLOR
    //   color_map: [
    //     "000000", "Black",
    //     "993300", "Burnt orange",
    //     "333300", "Dark olive",
    //     "003300", "Dark green",
    //     "003366", "Dark azure",
    //     "000080", "Navy Blue",
    //     "333399", "Indigo",
    //     "333333", "Very dark gray",
    //     "800000", "Maroon",
    //     "FF6600", "Orange",
    //     "808000", "Olive",
    //     "008000", "Green",
    //     "008080", "Teal",
    //     "0000FF", "Blue",
    //     "666699", "Grayish blue",
    //     "808080", "Gray",
    //     "FF0000", "Red",
    //     "FF9900", "Amber",
    //     "99CC00", "Yellow green",
    //     "339966", "Sea green",
    //     "33CCCC", "Turquoise",
    //     "3366FF", "Royal blue",
    //     "800080", "Purple",
    //     "999999", "Medium gray",
    //     "FF00FF", "Magenta",
    //     "FFCC00", "Gold",
    //     "FFFF00", "Yellow",
    //     "00FF00", "Lime",
    //     "00FFFF", "Aqua",
    //     "00CCFF", "Sky blue",
    //     "993366", "Red violet",
    //     "FFFFFF", "White",
    //     "FF99CC", "Pink",
    //     "FFCC99", "Peach",
    //     "FFFF99", "Light yellow",
    //     "CCFFCC", "Pale green",
    //     "CCFFFF", "Pale cyan",
    //     "99CCFF", "Light sky blue",
    //     "CC99FF", "Plum"
    //     ]

    // CHARMAP
    // charmap_append: OR
    // charmap: [
    //     [0x2615, 'morning coffee']
    // ]

});
