jQuery-Watermark
=============

An extra-small ( <1k ) and easy watermark creator for inputs.

Installation
--------------

Go to the fridge and drink some beer. 

Include jQuery script:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>

Download jquery-watermark.min.js script and include it in your page:	 

	<script src="jquery-watermark.min.js" type="text/javascript"></script>

Define your params (if you want):

	var params = { activeCss: { color: 'Black' }, waterCss: {color: 'Gray'}};

The defaults are:

	'waterCss': { color: 'Gray' },
	'activeCss':  { color: 'Black' }

From within your code call to the watermark() function on your selector (in this case i sue input fields):

	$("input").water(params);

Go and have another beer.      
    

Contribution
------------

- Sagiv Ofek

License
-------
free for all! :)