const File = Object.create(null);

//Data source for the File Explorer page
File.data = {
    menu_file_button: [
        "Opens the menu to access general options about the " +
        "file explorer window. Click to see and again to close."
    ],
    menu_share_button: [
        "Opens the share options on the ribbon below. Click to see."
    ],
    menu_view_button: [
        "Opens the view options on the ribbon below. Click to see."
    ],
    menu_customize_button: [
        "Opens the menu to customize the tool bar on the left. " +
        "Click to see and again to close."
    ],
    menu_home_button: [
        "Opens the basic options on the ribbon below. Click to see."
    ],
    home_pin: [
        "Allows you to create a direct path to the folder you are " +
        "selecting from the quick access list."
    ],
    home_copy: [
        "Allows you to copy the element you are selecting."
    ],
    home_paste: [
        "Allows you to paste in the opened folder the " +
        "element you have previously copied."
    ],
    home_cut: [
        "Allows you to copy the element you are selecting. " +
        "Once copied, this original copy will be deleted."
    ],
    home_copypath: [
        "This copies the path (name of folder it is in) " +
        "which gives access to the selected element."
    ],
    home_pasteshortcut: [
        "Allows you to paste here a link to the element previously copied."
    ],
    home_moveto: [
        "Allows you to move the selected element to another folder."
    ],
    home_copyto: [
        "Allows you to create a copy of the selected element in another folder."
    ],
    home_delete: [
        "This deletes the element you are selecting (in a blue rectangle.)"
    ],
    home_rename: [
        "Allows you to change the selected element's name."
    ],
    home_newfolder: [
        "Allows you to create a new folder in this folder."
    ],
    home_newitem: [
        "Allows you to create another item in this folder"
    ],
    home_easyaccess: [
        "Creates an access to the file from the network for easier access."
    ],
    home_properties: [
        "Opens the selected element's properties."
    ],
    home_open: [
        "Opens the selected element."
    ],
    home_edit: [
        "Opens the required program to modify the selected element."
    ],
    home_history: [
        "Gives you access to your selected element's past. " +
        "This can allow you to restore the original."
    ],
    home_select_all: [
        "Click to select all the elements in the folder."
    ],
    home_select_none: [
        "Click to remove the selection you have made."
    ],
    home_invert: [
        "Click to select only the elements that have not been selected yet."
    ],
    small_view: [
        "Allows a quick change of the element's " +
        "view according to the thumbnails."
    ],
    help_button: [
        "Opens an internet search for help in file explorer."
    ],
    ribbon_button: [
        "Clicking on it opens or closes the ribbon menu underneath."
    ],
    search_back: [
        "Returns to the previously opened folder."
    ],
    search_forward: [
        "Returns to the folder opened before a step back was taken."
    ],
    search_recent: [
        "Opens a list of the recently opened folders."
    ],
    search_up: [
        "Goes to the folder in which the opened folder is located."
    ],
    search_bar: [
        "Click on the name of the folders to access these, " +
        "the arrows to access those in the same folder or type " +
        "directly the name of the folder here."
    ],
    search_recent2: [
        "Opens a list of the recently opened folders' path. " +
        "Clicking on these will open the desired folder."
    ],
    search_refresh: [
        "Reloads the opened folder. Sometimes necessary to see changes " +
        "that have been made to this folder in another window."
    ],
    search_in: [
        "Type here to search an element located in this opened folder."
    ],
    folder_content: [
        "Here you will find all the elements located in the opened folder. " +
        "Those surrounded by a blue rectangle have been selected."
    ],
    folder_list: [
        "Here you will find a list of all the folders in your computer. " +
        "Click the little arrows next to the folder names to see or hide " +
        "the folders located inside these."
    ],
    quick_list: [
        "Here you will find the elements you have pinned to your quick " +
        "access along with the folders which you have visited often recently."
    ],
    share_share: [
        "Allows you to share the selected element with other people. " +
        "May require additional configuration."
    ],
    share_email: [
        "Allows you to send the element by email to someone else."
    ],
    share_zip: [
        "Places the selected elements in a compressed file which " +
        "then makes it easier to send to someone."
    ],
    share_burn: [
        "Only accessible with the additional machine. " +
        "This will burn the element onto the disc."
    ],
    share_print: [
        "Prints the selected element."
    ],
    share_fax: [
        "Sends the element by fax."
    ],
    share_specific: [
        "Allows you to share the file with someone else. " +
        "May require additional configuration."
    ],
    share_remove: [
        "Allows you to remove the shared access to the file of someone."
    ],
    share_advanced: [
        "Opens more advanced settings for sharing a file."
    ],
    view_navigation: [
        "Allows you to modify the navigation pane (list of folders on the left)"
    ],
    view_preview: [
        "Opens a pane on the right with a preview of the selected file."
    ],
    view_details: [
        "Opens a pane on the right with the details of the selected file."
    ],
    view_type: [
        "Allows you to change the view of the elements located in the " +
        "folder according to the thumbnails. The blue one is the selected one."
    ],
    view_sort: [
        "Allows you to sort the files in the folder " +
        "according to different criteria."
    ],
    view_group: [
        "Shows the elements in the folder according to different criteria."
    ],
    view_columns: [
        "When in details view, this allows you to add a column of information."
    ],
    view_size: [
        "When in details view, this allows you to " +
        "scale the columns to a good size."
    ],
    view_what: [
        "Modifies the view of the individual elements in the folder."
    ],
    view_hide: [
        "Hides the selected items. They will not appear anymore " +
        "if the 'Hidden items' checkbox is unchecked."
    ],
    view_options: [
        "Opens the options menu for the selected item."
    ],
    close: [
        "Closes the file explorer window."
    ],
    minimise: [
        "Minimises the file explorer window."
    ],
    maximise: [
        "Maximises/Restores down the file explorer window."
    ]
};


//Retrieve the correct data for the button hovered upon.
File.find = function (string) {
    return File.data[string];
};

//Export the answer
export default Object.freeze(File);
