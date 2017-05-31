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
        "12x1" : "1|1|1|1|1|1|1|1|1|1|1|1",
        "2x6" : "2|2|2|2|2|2",
        "3x4" : "3|3|3|3",
        "4x3" : "4|4|4",
        "6x2" : "<img src='images/6x2.gif' />",
        "7|5" : "7|5",
        "5|7" : "5|7",
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
                break;           }
        $grid += "</div><!-- end row -->"
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

