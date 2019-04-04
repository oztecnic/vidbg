var vidbg=function(e){var r={};function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)n.d(t,a,function(r){return e[r]}.bind(null,a));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=2)}([function(e,r,n){function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){a=!0,o=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}for(var a=n(3),o={},i=0,l=Object.keys(a);i<l.length;i++){var u=l[i];o[a[u]]=u}var c={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=c;for(var s=0,h=Object.keys(c);s<h.length;s++){var f=h[s];if(!("channels"in c[f]))throw new Error("missing channels property: "+f);if(!("labels"in c[f]))throw new Error("missing channel labels property: "+f);if(c[f].labels.length!==c[f].channels)throw new Error("channel and label counts mismatch: "+f);var v=c[f],b=v.channels,d=v.labels;delete c[f].channels,delete c[f].labels,Object.defineProperty(c[f],"channels",{value:b}),Object.defineProperty(c[f],"labels",{value:d})}c.rgb.hsl=function(e){var r,n=e[0]/255,t=e[1]/255,a=e[2]/255,o=Math.min(n,t,a),i=Math.max(n,t,a),l=i-o;i===o?r=0:n===i?r=(t-a)/l:t===i?r=2+(a-n)/l:a===i&&(r=4+(n-t)/l),(r=Math.min(60*r,360))<0&&(r+=360);var u=(o+i)/2;return[r,100*(i===o?0:u<=.5?l/(i+o):l/(2-i-o)),100*u]},c.rgb.hsv=function(e){var r,n,t,a,o,i=e[0]/255,l=e[1]/255,u=e[2]/255,c=Math.max(i,l,u),s=c-Math.min(i,l,u),h=function(e){return(c-e)/6/s+.5};return 0===s?(a=0,o=0):(o=s/c,r=h(i),n=h(l),t=h(u),i===c?a=t-n:l===c?a=1/3+r-t:u===c&&(a=2/3+n-r),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},c.rgb.hwb=function(e){var r=e[0],n=e[1],t=e[2];return[c.rgb.hsl(e)[0],100*(1/255*Math.min(r,Math.min(n,t))),100*(t=1-1/255*Math.max(r,Math.max(n,t)))]},c.rgb.cmyk=function(e){var r=e[0]/255,n=e[1]/255,t=e[2]/255,a=Math.min(1-r,1-n,1-t);return[100*((1-r-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*a]},c.rgb.keyword=function(e){var r=o[e];if(r)return r;for(var n,t,i,l=1/0,u=0,c=Object.keys(a);u<c.length;u++){var s=c[u],h=a[s],f=(t=e,i=h,Math.pow(t[0]-i[0],2)+Math.pow(t[1]-i[1],2)+Math.pow(t[2]-i[2],2));f<l&&(l=f,n=s)}return n},c.keyword.rgb=function(e){return a[e]},c.rgb.xyz=function(e){var r=e[0]/255,n=e[1]/255,t=e[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*r+.7152*n+.0722*t),100*(.0193*r+.1192*n+.9505*t)]},c.rgb.lab=function(e){var r=c.rgb.xyz(e),n=r[0],t=r[1],a=r[2];return t/=100,a/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(n-t),200*(t-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},c.hsl.rgb=function(e){var r,n,t,a=e[0]/360,o=e[1]/100,i=e[2]/100;if(0===o)return[t=255*i,t,t];for(var l=2*i-(r=i<.5?i*(1+o):i+o-i*o),u=[0,0,0],c=0;c<3;c++)(n=a+1/3*-(c-1))<0&&n++,n>1&&n--,t=6*n<1?l+6*(r-l)*n:2*n<1?r:3*n<2?l+(r-l)*(2/3-n)*6:l,u[c]=255*t;return u},c.hsl.hsv=function(e){var r=e[0],n=e[1]/100,t=e[2]/100,a=n,o=Math.max(t,.01);return n*=(t*=2)<=1?t:2-t,a*=o<=1?o:2-o,[r,100*(0===t?2*a/(o+a):2*n/(t+n)),100*((t+n)/2)]},c.hsv.rgb=function(e){var r=e[0]/60,n=e[1]/100,t=e[2]/100,a=Math.floor(r)%6,o=r-Math.floor(r),i=255*t*(1-n),l=255*t*(1-n*o),u=255*t*(1-n*(1-o));switch(t*=255,a){case 0:return[t,u,i];case 1:return[l,t,i];case 2:return[i,t,u];case 3:return[i,l,t];case 4:return[u,i,t];case 5:return[t,i,l]}},c.hsv.hsl=function(e){var r,n,t=e[0],a=e[1]/100,o=e[2]/100,i=Math.max(o,.01);n=(2-a)*o;var l=(2-a)*i;return r=a*i,[t,100*(r=(r/=l<=1?l:2-l)||0),100*(n/=2)]},c.hwb.rgb=function(e){var r,n=e[0]/360,t=e[1]/100,a=e[2]/100,o=t+a;o>1&&(t/=o,a/=o);var i=Math.floor(6*n),l=1-a;r=6*n-i,0!=(1&i)&&(r=1-r);var u,c,s,h=t+r*(l-t);switch(i){default:case 6:case 0:u=l,c=h,s=t;break;case 1:u=h,c=l,s=t;break;case 2:u=t,c=l,s=h;break;case 3:u=t,c=h,s=l;break;case 4:u=h,c=t,s=l;break;case 5:u=l,c=t,s=h}return[255*u,255*c,255*s]},c.cmyk.rgb=function(e){var r=e[0]/100,n=e[1]/100,t=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a))]},c.xyz.rgb=function(e){var r,n,t,a=e[0]/100,o=e[1]/100,i=e[2]/100;return n=-.9689*a+1.8758*o+.0415*i,t=.0557*a+-.204*o+1.057*i,r=(r=3.2406*a+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1)),255*(t=Math.min(Math.max(0,t),1))]},c.xyz.lab=function(e){var r=e[0],n=e[1],t=e[2];return n/=100,t/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},c.lab.xyz=function(e){var r,n,t,a=e[0];r=e[1]/500+(n=(a+16)/116),t=n-e[2]/200;var o=Math.pow(n,3),i=Math.pow(r,3),l=Math.pow(t,3);return n=o>.008856?o:(n-16/116)/7.787,r=i>.008856?i:(r-16/116)/7.787,t=l>.008856?l:(t-16/116)/7.787,[r*=95.047,n*=100,t*=108.883]},c.lab.lch=function(e){var r,n=e[0],t=e[1],a=e[2];return(r=360*Math.atan2(a,t)/2/Math.PI)<0&&(r+=360),[n,Math.sqrt(t*t+a*a),r]},c.lch.lab=function(e){var r=e[0],n=e[1],t=e[2]/360*2*Math.PI;return[r,n*Math.cos(t),n*Math.sin(t)]},c.rgb.ansi16=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t(e,3),a=n[0],o=n[1],i=n[2],l=null===r?c.rgb.hsv(e)[2]:r;if(0===(l=Math.round(l/50)))return 30;var u=30+(Math.round(i/255)<<2|Math.round(o/255)<<1|Math.round(a/255));return 2===l&&(u+=60),u},c.hsv.ansi16=function(e){return c.rgb.ansi16(c.hsv.rgb(e),e[2])},c.rgb.ansi256=function(e){var r=e[0],n=e[1],t=e[2];return r===n&&n===t?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5)},c.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),[r=r/10.5*255,r,r];var n=.5*(1+~~(e>50));return[(1&r)*n*255,(r>>1&1)*n*255,(r>>2&1)*n*255]},c.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}var n;return e-=16,[Math.floor(e/36)/5*255,Math.floor((n=e%36)/6)/5*255,n%6/5*255]},c.rgb.hex=function(e){var r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},c.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var n=r[0];3===r[0].length&&(n=n.split("").map(function(e){return e+e}).join(""));var t=parseInt(n,16);return[t>>16&255,t>>8&255,255&t]},c.rgb.hcg=function(e){var r,n=e[0]/255,t=e[1]/255,a=e[2]/255,o=Math.max(Math.max(n,t),a),i=Math.min(Math.min(n,t),a),l=o-i;return r=l<=0?0:o===n?(t-a)/l%6:o===t?2+(a-n)/l:4+(n-t)/l+4,r/=6,[360*(r%=1),100*l,100*(l<1?i/(1-l):0)]},c.hsl.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=n<.5?2*r*n:2*r*(1-n),a=0;return t<1&&(a=(n-.5*t)/(1-t)),[e[0],100*t,100*a]},c.hsv.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=r*n,a=0;return t<1&&(a=(n-t)/(1-t)),[e[0],100*t,100*a]},c.hcg.rgb=function(e){var r=e[0]/360,n=e[1]/100,t=e[2]/100;if(0===n)return[255*t,255*t,255*t];var a,o=[0,0,0],i=r%1*6,l=i%1,u=1-l;switch(Math.floor(i)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=u,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=u,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=u}return a=(1-n)*t,[255*(n*o[0]+a),255*(n*o[1]+a),255*(n*o[2]+a)]},c.hcg.hsv=function(e){var r=e[1]/100,n=r+e[2]/100*(1-r),t=0;return n>0&&(t=r/n),[e[0],100*t,100*n]},c.hcg.hsl=function(e){var r=e[1]/100,n=e[2]/100*(1-r)+.5*r,t=0;return n>0&&n<.5?t=r/(2*n):n>=.5&&n<1&&(t=r/(2*(1-n))),[e[0],100*t,100*n]},c.hcg.hwb=function(e){var r=e[1]/100,n=r+e[2]/100*(1-r);return[e[0],100*(n-r),100*(1-n)]},c.hwb.hcg=function(e){var r=e[1]/100,n=1-e[2]/100,t=n-r,a=0;return t<1&&(a=(n-t)/(1-t)),[e[0],100*t,100*a]},c.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},c.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},c.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},c.gray.hsl=function(e){return[0,0,e[0]]},c.gray.hsv=c.gray.hsl,c.gray.hwb=function(e){return[0,100,e[0]]},c.gray.cmyk=function(e){return[0,0,0,e[0]]},c.gray.lab=function(e){return[e[0],0,0]},c.gray.hex=function(e){var r=255&Math.round(e[0]/100*255),n=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(n.length)+n},c.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,r,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=n(0),o=n(4),i={};Object.keys(a).forEach(function(e){i[e]={},Object.defineProperty(i[e],"channels",{value:a[e].channels}),Object.defineProperty(i[e],"labels",{value:a[e].labels});var r=o(e);Object.keys(r).forEach(function(n){var a=r[n];i[e][n]=function(e){var r=function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];var o=n[0];if(null==o)return o;o.length>1&&(n=o);var i=e(n);if("object"===t(i))for(var l=i.length,u=0;u<l;u++)i[u]=Math.round(i[u]);return i};return"conversion"in e&&(r.conversion=e.conversion),r}(a),i[e][n].raw=function(e){var r=function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];var a=n[0];return null==a?a:(a.length>1&&(n=a),e(n))};return"conversion"in e&&(r.conversion=e.conversion),r}(a)})}),e.exports=i},function(e,r,n){"use strict";n.r(r);var t=n(1),a=n.n(t);function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){l(e,r,n[r])})}return e}function i(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}
/*!
 * vidbg.js v2.0 (https://github.com/blakewilson/vidbg)
 * vidbg.js By Blake Wilson
 * @license Licensed Under MIT (https://github.com/blakewilson/vidbg/blob/master/LICENSE)
 */var u=function(){function e(r,n,t){var i=this;if(function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"createContainer",function(){i.containerEl=document.createElement("div"),i.containerEl.className="vidbg-container",i.createPoster(),i.el.appendChild(i.containerEl)}),l(this,"createOverlay",function(){if(i.overlayEl=document.createElement("div"),i.overlayEl.className="vidbg-overlay",i.options.overlay){var e=a.a.hex.rgb(i.options.overlayColor);i.overlayEl.style.backgroundColor="rgb(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", ").concat(i.options.overlayAlpha,")")}i.containerEl.appendChild(i.overlayEl)}),l(this,"createPoster",function(){i.options.poster&&(i.containerEl.style.backgroundImage="url(".concat(i.options.poster,")"))}),l(this,"createVideo",function(){if(i.videoEl=document.createElement("video"),i.options.mp4){var e=document.createElement("source");e.src=i.options.mp4,e.type="video/mp4",i.videoEl.appendChild(e)}if(i.options.webm){var r=document.createElement("source");r.src=i.options.webm,r.type="video/webm",i.videoEl.appendChild(r)}var n=i.videoEl.play();for(var t in void 0!==n&&n.then(function(){}).catch(function(e){console.log(e),console.error("Autoplay is not supported"),this.videoEl.remove()}),i.videoEl.addEventListener("playing",i.playEvent),i.attributes)i.videoEl[t]=i.attributes[t];i.containerEl.appendChild(i.videoEl)}),l(this,"playEvent",function(e){i.resize(),i.videoEl.style.opacity=1}),l(this,"resize",function(){var e=i.containerEl.offsetWidth,r=i.containerEl.offsetHeight;e/i.videoEl.videoWidth>r/i.videoEl.videoHeight?(i.videoEl.style.width="".concat(e,"px"),i.videoEl.style.height="auto"):(i.videoEl.style.width="auto",i.videoEl.style.height="".concat(r,"px"))}),!r)return console.error("Please provide a selector"),!1;this.el=document.querySelector(r);this.options=o({},{mp4:null,webm:null,poster:null,overlay:!1,overlayColor:"#000",overlayAlpha:.3},n);if(this.attributes=o({},{autoplay:!0,controls:!1,loop:!0,muted:!0,playsInline:!0},t),!this.options.mp4&&!this.options.webm)return console.error("Please provide an mp4, webm, or both."),!1;this.init()}var r,n,t;return r=e,(n=[{key:"init",value:function(){this.el.style.position="relative",this.el.style.zIndex=1,this.createContainer(),this.createVideo(),this.createOverlay(),window.addEventListener("resize",this.resize)}}])&&i(r.prototype,n),t&&i(r,t),e}();r.default=u},function(e,r,n){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,r,n){var t=n(0);function a(e){var r=function(){for(var e={},r=Object.keys(t),n=r.length,a=0;a<n;a++)e[r[a]]={distance:-1,parent:null};return e}(),n=[e];for(r[e].distance=0;n.length;)for(var a=n.pop(),o=Object.keys(t[a]),i=o.length,l=0;l<i;l++){var u=o[l],c=r[u];-1===c.distance&&(c.distance=r[a].distance+1,c.parent=a,n.unshift(u))}return r}function o(e,r){return function(n){return r(e(n))}}function i(e,r){for(var n=[r[e].parent,e],a=t[r[e].parent][e],i=r[e].parent;r[i].parent;)n.unshift(r[i].parent),a=o(t[r[i].parent][i],a),i=r[i].parent;return a.conversion=n,a}e.exports=function(e){for(var r=a(e),n={},t=Object.keys(r),o=t.length,l=0;l<o;l++){var u=t[l];null!==r[u].parent&&(n[u]=i(u,r))}return n}}]).default;