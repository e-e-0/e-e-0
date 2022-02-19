//Executes the functions when everything is ready
window.addEvent('domready', function() {

    get_url_parameters('target_link');

});

var get_url_parameters = function(target_id) {

    if (window.location.search && $(target_id)) {
        var para = window.location.search;
        var href = $(target_id).href;

        if (window.location.search[0] == '?') {
            para = para.substring(1, para.lenght);
        }

        if (href.test(/\?$/) == true || href.test(/&$/) == true) {
            href = href + para;
        } else if (href.test(/\/$/) == true) {
            href = href + '?' + para;
        } else {
            href = href + '&' + para;
        }

        $(target_id).href = href;
    }
}