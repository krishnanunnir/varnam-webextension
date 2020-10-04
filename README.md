# Manglish

## What does it do?

This is a project to provide English to Malyalam transliteration or simply said it converts manglish to malaylam. Have a look at the [website](https://krishnanunnir.github.io/)

## How to integrate to your site?

Include the dependencies in the static folder
```
<script type='text/javascript' src='./static/js/editor_transliterate.js'></script>
<script type='text/javascript' src='./static/js/tribute.js'></script>
<script type='text/javascript' src='./static/js/trix.js'></script> 
<link rel="stylesheet" href="./static/css/tribute.css">
<link rel="stylesheet" href="./static/css/trix.css">
```

Add the trix editor simply by inserting
```
 <trix-editor> </trix-editor>
```

To use this along with your forms, first define a hidden input field in the form and assign it an id. Then reference that id in the editor’s input attribute.

```
<form …>
  <input id="x" type="hidden" name="content">
  <trix-editor input="x"></trix-editor>
</form>
```

Enable Malaylam autocomplete by replacing the element attached to tribute with yours. For example

```
tribute.attach(document.getElementById("editor"));
```
## How this works?

This is a front end to the varnam project with integrated autocomplete. The varnam project api is providing the suggestions, while tribute.js is used to render it as autocomplete in the front end.

## Based on

1. [varnam project](https://github.com/varnamproject/varnamd) - on the backend the suggestions are based on the api hosted by the varnam project
2. [Trix WYSIWYG editor](https://github.com/basecamp/trix)
3. [tribute.js](https://github.com/zurb/tribute)