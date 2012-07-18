jQuery-Watermark
================

small and easy watermark creator for inputs
install it in 7 easy steps:
1. go to the fridge and drink some beer. 
2. include jQuery script:
	 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
3. include jQuert-Watermark script:	 
    <script src="jquery-watermark.min.js" type="text/javascript"></script>
4. define your params (if you want):
	var params = { activeCss: { color: 'Black' }, waterCss: {color: 'Gray'}};
   the defaults are: 
   	'waterCss': { color: 'Gray' },
   	'activeCss':  { color: 'Black' }
5. from within your code call to the watermark() function on your selector (in this case i sue input fields):
	$("input").water(params);
6. go and have another beer.
