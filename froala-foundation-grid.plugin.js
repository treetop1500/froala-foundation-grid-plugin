/**
* Created by Robert Wade on 9/2/16.
*/
// Define an icon.
$.FroalaEditor.DefineIcon('foundationGridIcon', { NAME: 'th-large'})

// Define a dropdown button.
$.FroalaEditor.RegisterCommand('foundationGridRowDropdown', {
    // Button title.
    title: 'Foundation Grid',

    // Mark the button as a dropdown.
    type: 'dropdown',

    // Specify the icon for the button.
    // If this option is not specified, the button name will be used.
    icon: 'foundationGridIcon',

    // Options for the dropdown.
    options: {
        "12x1" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/1x12.gif' />",
        "2x6" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/2x6.gif' />",
        "3x4" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/3x4.gif' />",
        "4x3" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/4x3.gif' />",
        "6x2" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/6x2.gif' />",
        "7|5" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/7-5.gif' />",
        "5|7" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/5-7.gif' />",
        "8|4" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/8-4.gif' />",
        "4|8" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/4-8.gif' />",
        "9|3" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/9-3.gif' />",
        "3|9" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/3-9.gif' />",
        "10|2" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/10-2.gif' />",
        "2|10" : "<img src='/javascripts/vendor/froala-editor-plugins/treetop1500/froala-foundation-grid-plugin/images/2-10.gif' />",
    },

    // If present, the options property will be ignored.
    // It can be used to define a custom HTML for the dropdown.
    //html: function () {
    // The current context is the editor instance.
    //    return '';
    //},

    // Save the dropdown action into undo stack.
    undo: true,

    // Focus inside the editor before callback.
    focus: true,

    // Refresh the button state after the callback.
    refreshAfterCallback: true,

    // Callback.
    callback: function (cmd, val, params) {
        // The current context is the editor instance.
        //this.html.insertImageHTML("<img src='" + val + '" />');

        var $grid = "<div class='row inserted'>";
        switch (val) {
            case "12x1":
                $grid += repeatColumn(1,12);
                break;
            default:
            case "2x6":
                $grid += repeatColumn(2,6);
                break;
            case "3x4":
                $grid += repeatColumn(3,4);
                break;
            case "4x3":
                $grid += repeatColumn(4,3);
                break;
            case "6x2":
                $grid += repeatColumn(6,2);
                break;
            case "7|5":
                $grid += "<div class='columns medium-7'></div><div class='columns medium-5'></div>";
                break;
            case "5|7":
                $grid += "<div class='columns medium-5'></div><div class='columns medium-7'></div>";
                break;
            case "8|4":
                $grid += "<div class='columns medium-8'></div><div class='columns medium-4'></div>";
                break;
            case "4|8":
                $grid += "<div class='columns medium-4'></div><div class='columns medium-8'></div>";
                break;
            case "9|3":
                $grid += "<div class='columns medium-9'></div><div class='columns medium-3'></div>";
                break;
            case "3|9":
                $grid += "<div class='columns medium-3'></div><div class='columns medium-9'></div>";
                break;
            case "10|2":
                $grid += "<div class='columns medium-10'></div><div class='columns medium-2'></div>";
                break;
            case "2|10":
                $grid += "<div class='columns medium-5'></div><div class='columns medium-10'></div>";
                break;
        }
        $grid += "</div><!-- end row -->";
        this.html.insert($grid);
        this.undo.saveStep();

        function repeatColumn($col,$inc) {
            var $columns = "";
            for ($i = 0; $i < $inc; $i++) {
                $columns += "<div class='columns medium-"+$col+"'></div>";
            }

            return $columns;
        };
    },

    // Called when the dropdown button state might have changed.
    refresh: function ($btn) {
        // The current context is the editor instance.
        //console.log ($btn.selection);
    },

    // Called when the dropdown is shown.
    refreshOnShow: function ($btn, $dropdown) {
        // The current context is the editor instance.
        //console.log (this.selection.element());
    }
});

