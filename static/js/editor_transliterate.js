window.addEventListener('load', function () {

    function remoteSearch(text, cb) {
        var stringre = new RegExp("[a-zA-Z]+")
        if(!stringre.test(text)){
            return [];
        }
        var URL = "https://api.varnamproject.com/tl/ml/";
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                result = []
                for(i=0;i<data["result"].length;i++)
                {
                    retval = {
                        'key': text,
                        'value':  data["result"][i]
                    }
                    result.push(retval);
                }
                // console.log(result);
                cb(result);
            } else if (xhr.status === 403) {
                cb([]);
            }
            }
        };
        xhr.open("GET", URL + text, true);
        xhr.send();
    }

    var tribute = new Tribute({
        trigger: '@',
      
        // element to target for @mentions
        iframe: null,
      
        // class added in the flyout menu for active item
        selectClass: 'highlight',
      
        // class added to the menu container
        containerClass: 'tribute-container',
      
        // class added to each list item
        itemClass: '',
      
        // function called on select that returns the content to insert
        selectTemplate: function (item) {
            // console.log("settemplate" + item.original.value);
          return item.original.value;
        },
      
        // template for displaying item in menu
        menuItemTemplate: function (item) {
            // console.log("menuitemtemplate" + item.original.value);
          return item.original.value;
        },
      
        // template for when no match is found (optional),
        // If no template is provided, menu is hidden.
        noMatchTemplate: null,
      
        // specify an alternative parent container for the menu
        // container must be a positioned element for the menu to appear correctly ie. `position: relative;`
        // default container is the body
        menuContainer: document.body,
      
        // column to search against in the object (accepts function or string)
        lookup: "key",
      
        // column that contains the content to insert by default
        fillAttr: "value",
      
        // REQUIRED: array of objects to match or a function that returns data (see 'Loading remote data' for an example)
        values: function (text, cb) {
            remoteSearch(text, users => cb(users));
          },
      
        // When your values function is async, an optional loading template to show
        loadingItemTemplate: null,
      
        // specify whether a space is required before the trigger string
        requireLeadingSpace: true,
      
        // specify whether a space is allowed in the middle of mentions
        allowSpaces: false,
      
        // optionally specify a custom suffix for the replace text
        // (defaults to empty space if undefined)
        replaceTextSuffix: '\n',
      
        // specify whether the menu should be positioned.  Set to false and use in conjuction with menuContainer to create an inline menu
        // (defaults to true)
        positionMenu: true,
      
        // when the spacebar is hit, select the current match
        spaceSelectsMatch: false,
      
        // turn tribute into an autocomplete
        autocompleteMode: true,
      
        // Customize the elements used to wrap matched strings within the results list
        // defaults to <span></span> if undefined
        searchOpts: {
          pre: '<span>',
          post: '</span>',
          skip: false // true will skip local search, useful if doing server-side search
        },
        menuItemLimit: 5,
        menuShowMinLength: 0
      });

    tribute.attach(document.getElementById("editor"));
})
