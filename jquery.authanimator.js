(function( $ ) {
    $.fn.AuthAnimator = function(options) {
        var settings = $.extend({
            image_block: '#auth_animator',
            images: {}
        }, options);
        var SetImage = function (field) {
            var len = $(field).val().length * 1;
            set_image = null;
            for (var a = 0; a <= len; a++) {
                if (settings.images[a]) {
                    var set_image = settings.images[a];
                    $("#monster").css('background-image', 'url(' + set_image + ')')
                    console.log({"background-image": 'url("' + set_image + '"")'});
                }
            }
        }

        $.each(settings.images, function(i, item){
            $("body").append("<img style='display:none;' src='" + item + "' />");
        });

        this.each(function() {
            var image_block = $(settings.image_block);
            var field = this;

            $(field).bind('focus', function(){
                SetImage(this);
            });

            $(field).bind('keyup', function(){
                SetImage(this);
            });
        });
    };
})(jQuery);