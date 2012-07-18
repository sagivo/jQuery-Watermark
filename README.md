jQuery-Watermark
=============

An extra-small ( <1k ) and easy watermark creator for inputs.

install it in 6 easy steps:
--------------

- go to the fridge and drink some beer. 
- include jQuery script:

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
- include jQuert-Watermark script:	 

      <script src="jquery-watermark.min.js" type="text/javascript"></script>
- define your params (if you want):
      var params = { activeCss: { color: 'Black' }, waterCss: {color: 'Gray'}};
  the defaults are:
      'waterCss': { color: 'Gray' },
      'activeCss':  { color: 'Black' }
- from within your code call to the watermark() function on your selector (in this case i sue input fields):
      $("input").water(params);
- go and have another beer.      
    

Contribution
------------

- Sagiv Ofek

License
-------
free for all! :)