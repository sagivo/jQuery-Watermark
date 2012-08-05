jQuery-Watermark
=============

An extra-small ( <1k ) and easy watermark creator for inputs.

A working demo is under `sample` folder.

Installation
--------------

Go to the fridge and drink some beer. 

Include jQuery script:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>

Download `jquery-watermark.min.js` script and include it in your page:	 

	<script src="jquery-watermark.min.js" type="text/javascript"></script>

Define your params (if you want):

	var params = { waterAttr: 'data-water',class: 'waterMark',activeCss: { 'color': 'Black', 'background-color': 'Blue', 'font-size': '20px' }, waterCss: {color: 'Gray'}};

The defaults are:

	'waterCss': { color: 'Gray' },
	'activeCss':  { color: 'Black' },
	'waterAttr':  'data-water',
	'activeCss': 'watermarked'

From within your code call to the `watermark()` function on your selector (in this case i used input fields). 

	$("input").watermark(params);

Go and have another beer.      
    

Contribution
------------

- Sagiv Ofek ( Patch1 - Yanislav Dimitrov )

License
-------
free for all! :)