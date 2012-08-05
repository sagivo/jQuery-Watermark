/*! jQuery-water v1.01 created by: Yanislav Dimitrov */
$.fn.watermark = function (params) {
    //default values
    var settings = $.extend({
    	'waterAttr' : 'data-water',
        'waterCss': { color: 'Gray' },
        'activeCss':  { color: 'Black' },
	'class':	'watermarked',
    }, params);

	$(this).parents('form').submit(function()
	{
		$(this).find('['+settings.waterAttr+']').each(function() {
			if (($(this).val() == $(this).attr(settings.waterAttr)) || (jQuery.trim($(this).val()).length == 0)) {
                $(this).val("");
                $(this).css(settings.activeCss);
				$(this).removeClass(settings.class);
            }
        });
		return true;	
	});
    //loop
    $(this).each(function () {
        if ($(this).val().length == 0) {
            $(this).css(settings.waterCss);
			$(this).addClass(settings.class);
            $(this).val($(this).attr(settings.waterAttr));
        }
        $(this).unbind("focus").focus(function () {
            if (($(this).val() == $(this).attr(settings.waterAttr)) || (jQuery.trim($(this).val()).length == 0)) {
                $(this).val("");
                $(this).css(settings.activeCss);
				$(this).removeClass(settings.class);
            }
        }).blur(function () {
            if (jQuery.trim($(this).val()).length == 0) {
                $(this).val($(this).attr(settings.waterAttr));
                $(this).css(settings.waterCss);
				$(this).addClass(settings.class);
            }
        });
    });
}