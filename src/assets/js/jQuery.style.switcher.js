!function($){var a,c={hasPreview:!0,defaultThemeId:"jssDefault",fullPath:"assets/dist/css/",cookie:{expires:30,isManagingLoad:!0}},d="jss_selected",b={};b={getItem:function(a){return a&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(c,f,a,d,e,g){if(!c||/^(?:expires|max\-age|path|domain|secure)$/i.test(c))return!1;var b="";if(a)switch(a.constructor){case Number:b=a===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;case String:b="; expires="+a;break;case Date:b="; expires="+a.toUTCString()}return document.cookie=encodeURIComponent(c)+"="+encodeURIComponent(f)+b+(e?"; domain="+e:"")+(d?"; path="+d:"")+(g?"; secure":""),!0},removeItem:function(a,b,c){return!!this.hasItem(a)&&(document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(c?"; domain="+c:"")+(b?"; path="+b:""),!0)},hasItem:function(a){return!!a&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var a=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),c=a.length,b=0;b<c;b++)a[b]=decodeURIComponent(a[b]);return a}},(a=function(a,b){return this.init(a,b)}).prototype={$root:null,config:{},$themeCss:null,defaultTheme:null,init:function(a,b){this.$root=a,this.config=b||{},this.setDefaultTheme(),this.defaultTheme?(this.config.cookie&&this.checkCookie(),this.config.hasPreview&&this.addHoverEvents(),this.addClickEvents()):this.$root.addClass("jssError error level0")},setDefaultTheme:function(){this.$themeCss=$("link[id="+this.config.defaultThemeId+"]"),this.$themeCss.length&&(this.defaultTheme=this.$themeCss.attr("href"))},resetStyle:function(){this.updateStyle(this.defaultTheme)},updateStyle:function(a){this.$themeCss.attr("href",a)},getFullAssetPath:function(a){return this.config.fullPath+a+".css"},checkCookie:function(){var a;this.config.cookie&&this.config.cookie.isManagingLoad&&(a=b.getItem(d))&&(newStyle=this.getFullAssetPath(a),this.updateStyle(newStyle),this.defaultTheme=newStyle)},addHoverEvents:function(){var a=this;this.$root.find("a").hover(function(){var b=$(this).data("theme"),c=a.getFullAssetPath(b);a.updateStyle(c)},function(){a.resetStyle()})},addClickEvents:function(){var a=this;this.$root.find("a").click(function(){var c=$(this).data("theme"),e=a.getFullAssetPath(c);a.updateStyle(e),a.defaultTheme=e,a.config.cookie&&b.setItem(d,c,a.config.cookie.expires,"/")})}},$.fn.styleSwitcher=function(b){return new a(this,$.extend(!0,c,b))}}(jQuery)