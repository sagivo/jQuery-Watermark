/*! jQuery-water v1.0 created by: Sagiv Ofek */
$.fn.water = function (params) {
    //default values
    var settings = $.extend({
        'waterCss': { color: 'Gray' },
        'activeCss':  { color: 'Black' }
    }, params);

    //loop
    $(this).each(function () {
        if ($(this).val().length == 0) {
            $(this).css(settings.waterCss);
            $(this).val($(this).attr("data-water"));
        }
        $(this).unbind("focus").focus(function () {
            if (($(this).val() == $(this).attr("data-water")) || (jQuery.trim($(this).val()).length == 0)) {
                $(this).val("");
                this.style.color = "Black";
            }
        }).blur(function () {
            if (jQuery.trim($(this).val()).length == 0) {
                $(this).val($(this).attr("data-water"));
                $(this).css(settings.waterCss);
            }
        });
    });
}
