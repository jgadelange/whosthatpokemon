#Who's That Pokémon?

A simple browser app in which Pokémon silhouettes are shown to the user and they guess which Pokémon it is, in the original pokemon style.
Can be accessed on http://jgadelange.github.io/whosthatpokemon/

Based on https://github.com/Menardi/whosthatpokemon

##Features

* Silhouettes are generated dynamically in-browser using the canvas tag

##Usage
Normally the silhouette of a random pokemon is shown. With GET parameters you can get different behaviour:

* **pokemon** sets the pokemon to be shown. For example http://jgadelange.github.io/whosthatpokemon/?pokemon=55 shows the silhouette of Golduck
* **reveal** sets the number of seconds to reveal the pokemon after. For example http://jgadelange.github.io/whosthatpokemon/?reveal=3 will show the pokemon after 3 seconds.

It is also possible to load the page in an iframe and send messages using [Cross-document messaging](http://en.wikipedia.org/wiki/Cross-document_messaging) to reveal the pokemon, this is done by sending "reveal#x", where 'x' is the number of seconds to reveal the pokemon after.

## Licence
This code is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported Licence]("http://creativecommons.org/licenses/by-nc-sa/3.0/").

All the Pokémon names, images and sounds are copyrighted by Nintendo.

Flag icons are from http://www.famfamfam.com/lab/icons/flags/
