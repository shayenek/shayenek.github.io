/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
(function ($, win) {
    $.fn.inViewport = function (cb) {
        return this.each(function (i, el) {
            function visPx() {
                var H = $(this).height(),
                    r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
            } visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));


$("#offer").inViewport(function (px) {
    if (px) $(".offer-header-trigger").addClass("animatable-default");
    setTimeout(() => {
        $(".offer-header-span").css("visibility", "visible");  
    }, 1300);
    setTimeout(() => {
        $(".offer-header-span").css("opacity", "1");  
    }, 1300);

    setTimeout(() => {
        if (px) $(".anim-offer-header").addClass("visible fadeInUp");
    }, 500);
    setTimeout(() => {
        if (px) $(".anim-offer-line").css({ "height": "95px", "opacity": "1" });
    }, 1200);
    setTimeout(() => {
        if (px) $(".anim-offer-desc").addClass("visible fadeInUp");
    }, 1600);
    setTimeout(() => {
        if (px) $(".animated-offer-col").addClass("visible fadeInUp");
    }, 2600);
});


$("#portfolio").inViewport(function (px) {
    if (px) $(".portfolio-header-trigger").addClass("animatable-default");
    setTimeout(() => {
        $(".portfolio-header-span").css("visibility", "visible");  
    }, 1300);
    setTimeout(() => {
        $(".portfolio-header-span").css("opacity", "1");  
    }, 1300);

    setTimeout(() => {
        if (px) $(".anim-portfolio-header").addClass("visible fadeInUp");
    }, 500);
    setTimeout(() => {
        if (px) $(".anim-portfolio-line").css({ "height": "95px", "opacity": "1" });
    }, 1200);
    setTimeout(() => {
        if (px) $(".anim-portfolio-desc").addClass("visible fadeInUp");
    }, 1600);

    setTimeout(() => {
        if (px) $(".anim-portfolio-tablabel").addClass("visible fadeInUp");
    }, 1800);

    setTimeout(() => {
        if (!$("#portfolio .grid").hasClass("visible")) {
            if (px) $(".anim-portfolio-item").addClass("fadeInUp");
        }
    }, 2400);

    setTimeout(() => {
        if (px) $("#portfolio .grid").addClass("visible");
    }, 2400);
});





$("#aboutme").inViewport(function (px) {
    if (px) $(".aboutme-header-trigger").addClass("animatable-default");
    setTimeout(() => {
        $(".aboutme-header-span").css("visibility", "visible");  
    }, 1300);
    setTimeout(() => {
        $(".aboutme-header-span").css("opacity", "1");  
    }, 1300);

    setTimeout(() => {
        if (px) $(".anim-aboutme-header").addClass("visible fadeInUp");
    }, 500);
    setTimeout(() => {
        if (px) $(".anim-aboutme-line").css({ "width": "90px", "opacity": "1" });
    }, 800);
    setTimeout(() => {
        if (px) $(".anim-aboutme-desc").addClass("visible fadeInUp");
    }, 1400);
    setTimeout(() => {
        if (px) $(".anim-aboutme-col, .anim-aboutme-col-special").addClass("visible fadeInUp");
    }, 2200);
});


$("#skills").inViewport(function (px) {
    if (px) $(".skills-header-trigger").addClass("animatable-default");
    setTimeout(() => {
        $(".skills-header-span").css("visibility", "visible");  
    }, 1300);
    setTimeout(() => {
        $(".skills-header-span").css("opacity", "1");  
    }, 1300);

    setTimeout(() => {
        if (px) $(".anim-skills-header").addClass("visible fadeInUp");
    }, 500);
    setTimeout(() => {
        if (px) $(".anim-skills-line").css({ "height": "95px", "opacity": "1" });
    }, 1200);

    setTimeout(() => {
        if (px) $(".skill-title").css("visibility", "visible");
        if (px) $(".skill-title").addClass("animatable-white");
    }, 1000);   

    setTimeout(() => {
        if (px) $("#skills .img-container").css("opacity", "1");
    }, 1600);
    
    setTimeout(() => {
        if (px) $('.dot-empty').each(function(){
        var $this = $(this);
        var delay = $this.attr('data-delay');
        $this.css("opacity",'1');
        $this.css("transition",'all .4s ease-in-out '+delay*0.1+'s');
        });

        if (px) $('.dot-highlighted').each(function(){
        var $this = $(this);
        var delay = $this.attr('data-delay');
        setTimeout(() => {
            $this.css("opacity",'1');
            $this.css("transition",'all .4s ease-in-out '+delay*0.1+'s');
        }, 1600);
        setTimeout(() => {
            $this.css("transition",'all .2s ease-in-out');
        }, 4600);
        });
    }, 2000);

    setTimeout(() => {
        if (px) draw();
    }, 1600);
});



$("#contact").inViewport(function (px) {
    if (px) $(".contact-header-trigger").addClass("animatable-default");
    setTimeout(() => {
        $(".contact-header-span").css("visibility", "visible");  
    }, 1300);
    setTimeout(() => {
        $(".contact-header-span").css("opacity", "1");  
    }, 1300);

    setTimeout(() => {
        if (px) $(".anim-contact-header").addClass("visible fadeInUp");
    }, 500);
    setTimeout(() => {
        if (px) $(".anim-contact-line").css({ "height": "95px", "opacity": "1" });
    }, 1200);
    setTimeout(() => {
        if (px) $(".anim-contact-desc").addClass("visible fadeInUp");
    }, 1600);
    setTimeout(() => {
        if (px) $(".anim-contact-col").addClass("visible fadeInUp");
    }, 2000);
    setTimeout(() => {
        if (px) $("#footer hr").css("width", "100%");
    }, 3200);
    setTimeout(() => {
        if (px) $(".anim-contact-footer").addClass("visible fadeInUp");
    }, 3400);
});