function CookieControl(options) {
    options = options || { };
    this.options = jQuery.extend(CookieControl.defaultOptions, options);
    this.init(this.options);
}

CookieControl.defaultOptions = {
    'btn-accept': '.btn-cookie-agree',
    'btn-decline': '.btn-cookie-decline',
    'container': '.cookie-control',
    'read-more-btn-open': '+',
    'read-more-btn-close': '-',
    'read-more-btn': '.btn-primary',
    'dropdown': '.dropdown',
    'ga_key': undefined,
    'ga_universal': false,
    'cookie': 'moyo_accepted_cookie',
    'exdays': 100,
    'cb_uid': undefined
};

CookieControl.prototype.init = function(options) {
    var self = this;
    jQuery.noConflict()(function($) {
        self.options.$container = $(options.container);

        if (getCookie(options.cookie) == 1) {
            self.accept();
            return;
        }

        // set visible
        if (self.options.$container.hasClass('hide')) {
            self.options.$container.removeClass('hide');
        }

        options.$container.find(options['btn-accept']).on('click', function() {
           self.accept();
        });
        options.$container.find(options['btn-decline']).on('click', function() {
            self.decline();
        });
        options.$container.find(options['dropdown']).on('show.bs.dropdown', function() {
            self.openListener();
        });
        options.$container.find(options['dropdown']).on('hide.bs.dropdown', function() {
            self.closeListener();
        });
    });
};

CookieControl.prototype.openListener = function() {
    this.options.$container.find(this.options['read-more-btn']).val(this.options['read-more-btn-close']);
};

CookieControl.prototype.closeListener = function() {
    this.options.$container.find(this.options['read-more-btn']).val(this.options['read-more-btn-open']);
};

CookieControl.prototype.accept = function() {
    setCookie(this.options.cookie, 1, this.options.exdays);

    this.options.$container.remove();

    this.getGA();
    this.getCB();
};

CookieControl.prototype.getGA = function() {
    if (!this.options.ga_key) {
        console.log('No Google Analytics Key found!');
        return;
    }

    window._gaq = window._gaq || [];
    window._gaq.push(['_setAccount', this.options.ga_key]);
    window._gaq.push(['_setDomainName', this.options.ga_domain_name]);
    window._gaq.push(['_setAllowLinker', this.options.ga_allow_linker]);
    window._gaq.push(['_trackPageview']);

    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    if (this.options.ga_universal) {
        ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    } else {
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    }
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
};

CookieControl.prototype.getCB = function() {
    if (!this.options.cb_uid) {
        console.log('No Chartbeat key found!');
        return;
    }

    window._sf_async_config = { uid: this.options.cb_uid, domain: this.options.cb_domain, useCanonical: this.options.cb_useCanonical };
    window._sf_endpt = (new Date()).getTime();
    var e = document.createElement('script');
    e.setAttribute('language', 'javascript');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('src','//static.chartbeat.com/js/chartbeat.js');
    document.body.appendChild(e);
};

CookieControl.prototype.decline = function() {
    this.options.$container.remove();
};

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}