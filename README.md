# froala-placeholder-image-plugin
A Froala Editor plugin for inserting placeholder images.

##Installation##

###Install Froala Editor###
Get Froala Editor up and running according to the latest instructions here: https://www.froala.com/wysiwyg-editor/docs

###Add the Plugin Script###
Add the script tag to the plugin after jQuery and the main froala js file and before you intialize Froala (below).

    <script type="text/javascript" src="js/froala-placeholder-image.plugin.js"></script>

##Usage##

###Initialize Froala with the new plugin defined###
Add the following before the closing body tag. Note the "placeHoldDropdown" in toolbarButtons.

    $(function() {
        $('textarea.froala').froalaEditor({
            toolbarButtons: [
                'bold', 'italic', 'underline', 'paragraphFormat', 'formatOL',
                'formatUL', 'insertHTML', 'undo', 'redo', 'html','placeHoldDropdown'
            ],
            quickInsertButtons: ['image', 'table', 'ul', 'ol', 'hr']
        });
      });


####Credits####
Thanks to the following sites for providing the Ipsum text used in this plugin.

Kitten: https://placekitten.com/

Cage: https://www.placecage.com/

Murray.: http://www.fillmurray.com/

Dog: http://loremflickr.com

Zombie: http://placezombie.com


