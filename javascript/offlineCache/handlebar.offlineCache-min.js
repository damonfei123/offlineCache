((function(){define("offlineCache/fsLib",["module"],function(a){var b;return window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem,window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder,b=function(){function b(){var b,c,d=this;if(!this.enabled)return;b=this,c=function(b){return a.fs=b,a.fsRoot||(localStorage.fsRoot=b.root.toURL()),a.fsDeferred.resolve(b)},window.requestFileSystem(window.TEMPORARY,a.fileSize,c,this.errorHandler)}var a;return a={localStorageEnable:!!localStorage,fileSize:1048576,fs:null,fsRoot:function(){return localStorage.fsRoot}(),fsDeferred:$.Deferred()},b.prototype.enabled=a.localStorageEnable,b.prototype.errorHandler=function(a){var b;b="";switch(a.code){case FileError.QUOTA_EXCEEDED_ERR:b="QUOTA_EXCEEDED_ERR";break;case FileError.NOT_FOUND_ERR:b="NOT_FOUND_ERR";break;case FileError.SECURITY_ERR:b="SECURITY_ERR";break;case FileError.INVALID_MODIFICATION_ERR:b="INVALID_MODIFICATION_ERR";break;case FileError.INVALID_STATE_ERR:b="INVALID_STATE_ERR";break;default:b="Unknown Error"}return console.log("Error: "+b)},b.prototype.set=function(b,c){var d=this;if(!this.enabled)return;return a.fsDeferred.done(function(a){return localStorage[b]=!0,a.root.getFile(""+b,{create:!0},function(a){return a.createWriter(function(b){return b.onwrite=function(b){return console.log("Write completed ===>",a.toURL())},b.onerror=function(a){return console.log("Write failed: "+a)},b.write(c)},this.errorHandler)})})},b.prototype.get=function(b){var c;return this.enabled?(c=a.fsRoot,c&&localStorage[b]!=null?""+c+"/"+b:null):null},b.prototype.remove=function(a){return this.enabled?(console.log("delete",a),delete localStorage[a]):null},b.prototype.deleteAll=function(){return this.enabled?(console.log("deleteAll"),localStorage.clear()):null},b}(),new b})})).call(this),typeof faultylabs=="undefined"&&(faultylabs={}),faultylabs.MD5=function(a){function b(a){var b=(a>>>0).toString(16);return"00000000".substr(0,8-b.length)+b}function c(a){var b=[];for(var c=0;c<a.length;c++)b=b.concat(k(a[c]));return b}function d(a){var b=[];for(var c=0;c<8;c++)b.push(a&255),a>>>=8;return b}function e(a,b){return a<<b&4294967295|a>>>32-b}function f(a,b,c){return a&b|~a&c}function g(a,b,c){return c&a|~c&b}function h(a,b,c){return a^b^c}function i(a,b,c){return b^(a|~c)}function j(a,b){return a[b+3]<<24|a[b+2]<<16|a[b+1]<<8|a[b]}function k(a){var b=[];for(var c=0;c<a.length;c++)if(a.charCodeAt(c)<=127)b.push(a.charCodeAt(c));else{var d=encodeURIComponent(a.charAt(c)).substr(1).split("%");for(var e=0;e<d.length;e++)b.push(parseInt(d[e],16))}return b}function l(a,c,d,e){var f="",g=0,h=0;for(var i=3;i>=0;i--)h=arguments[i],g=h&255,h>>>=8,g<<=8,g|=h&255,h>>>=8,g<<=8,g|=h&255,h>>>=8,g<<=8,g|=h,f+=b(g);return f}function m(a){var b=new Array(a.length);for(var c=0;c<a.length;c++)b[c]=a[c];return b}function p(a,b){return 4294967295&a+b}function q(){function a(a,b,c,d){var f=v;v=u,u=t,t=p(t,e(p(s,p(a,p(b,c))),d)),s=f}var b=n.length;n.push(128);var c=n.length%64;if(c>56){for(var k=0;k<64-c;k++)n.push(0);c=n.length%64}for(k=0;k<56-c;k++)n.push(0);n=n.concat(d(b*8));var m=1732584193,o=4023233417,q=2562383102,r=271733878,s=0,t=0,u=0,v=0;for(k=0;k<n.length/64;k++){s=m,t=o,u=q,v=r;var w=k*64;a(f(t,u,v),3614090360,j(n,w),7),a(f(t,u,v),3905402710,j(n,w+4),12),a(f(t,u,v),606105819,j(n,w+8),17),a(f(t,u,v),3250441966,j(n,w+12),22),a(f(t,u,v),4118548399,j(n,w+16),7),a(f(t,u,v),1200080426,j(n,w+20),12),a(f(t,u,v),2821735955,j(n,w+24),17),a(f(t,u,v),4249261313,j(n,w+28),22),a(f(t,u,v),1770035416,j(n,w+32),7),a(f(t,u,v),2336552879,j(n,w+36),12),a(f(t,u,v),4294925233,j(n,w+40),17),a(f(t,u,v),2304563134,j(n,w+44),22),a(f(t,u,v),1804603682,j(n,w+48),7),a(f(t,u,v),4254626195,j(n,w+52),12),a(f(t,u,v),2792965006,j(n,w+56),17),a(f(t,u,v),1236535329,j(n,w+60),22),a(g(t,u,v),4129170786,j(n,w+4),5),a(g(t,u,v),3225465664,j(n,w+24),9),a(g(t,u,v),643717713,j(n,w+44),14),a(g(t,u,v),3921069994,j(n,w),20),a(g(t,u,v),3593408605,j(n,w+20),5),a(g(t,u,v),38016083,j(n,w+40),9),a(g(t,u,v),3634488961,j(n,w+60),14),a(g(t,u,v),3889429448,j(n,w+16),20),a(g(t,u,v),568446438,j(n,w+36),5),a(g(t,u,v),3275163606,j(n,w+56),9),a(g(t,u,v),4107603335,j(n,w+12),14),a(g(t,u,v),1163531501,j(n,w+32),20),a(g(t,u,v),2850285829,j(n,w+52),5),a(g(t,u,v),4243563512,j(n,w+8),9),a(g(t,u,v),1735328473,j(n,w+28),14),a(g(t,u,v),2368359562,j(n,w+48),20),a(h(t,u,v),4294588738,j(n,w+20),4),a(h(t,u,v),2272392833,j(n,w+32),11),a(h(t,u,v),1839030562,j(n,w+44),16),a(h(t,u,v),4259657740,j(n,w+56),23),a(h(t,u,v),2763975236,j(n,w+4),4),a(h(t,u,v),1272893353,j(n,w+16),11),a(h(t,u,v),4139469664,j(n,w+28),16),a(h(t,u,v),3200236656,j(n,w+40),23),a(h(t,u,v),681279174,j(n,w+52),4),a(h(t,u,v),3936430074,j(n,w),11),a(h(t,u,v),3572445317,j(n,w+12),16),a(h(t,u,v),76029189,j(n,w+24),23),a(h(t,u,v),3654602809,j(n,w+36),4),a(h(t,u,v),3873151461,j(n,w+48),11),a(h(t,u,v),530742520,j(n,w+60),16),a(h(t,u,v),3299628645,j(n,w+8),23),a(i(t,u,v),4096336452,j(n,w),6),a(i(t,u,v),1126891415,j(n,w+28),10),a(i(t,u,v),2878612391,j(n,w+56),15),a(i(t,u,v),4237533241,j(n,w+20),21),a(i(t,u,v),1700485571,j(n,w+48),6),a(i(t,u,v),2399980690,j(n,w+12),10),a(i(t,u,v),4293915773,j(n,w+40),15),a(i(t,u,v),2240044497,j(n,w+4),21),a(i(t,u,v),1873313359,j(n,w+32),6),a(i(t,u,v),4264355552,j(n,w+60),10),a(i(t,u,v),2734768916,j(n,w+24),15),a(i(t,u,v),1309151649,j(n,w+52),21),a(i(t,u,v),4149444226,j(n,w+16),6),a(i(t,u,v),3174756917,j(n,w+44),10),a(i(t,u,v),718787259,j(n,w+8),15),a(i(t,u,v),3951481745,j(n,w+36),21),m=p(m,s),o=p(o,t),q=p(q,u),r=p(r,v)}return l(r,q,o,m).toUpperCase()}var n=null,o=null;return typeof a=="string"?n=k(a):a.constructor==Array?a.length===0?n=a:typeof a[0]=="string"?n=c(a):typeof a[0]=="number"?n=a:o=typeof a[0]:typeof ArrayBuffer!="undefined"?a instanceof ArrayBuffer?n=m(new Uint8Array(a)):a instanceof Uint8Array||a instanceof Int8Array?n=m(a):a instanceof Uint32Array||a instanceof Int32Array||a instanceof Uint16Array||a instanceof Int16Array||a instanceof Float32Array||a instanceof Float64Array?n=m(new Uint8Array(a.buffer)):o=typeof a:o=typeof a,o&&alert("MD5 type mismatch, cannot process "+o),q()},define("vender/faultylabs.md5/md5",function(){}),function(){define("offlineCache/offlineCache",["offlineCache/fsLib","vender/faultylabs.md5/md5"],function(a){var b,c;return b=function(a){var b,c,d,e,f,g;d=atob(a.split(",")[1]),g=a.split(",")[0].split(":")[1].split(";")[0],b=new ArrayBuffer(d.length),f=new Uint8Array(b),e=0;while(e<d.length)f[e]=d.charCodeAt(e),e++;return c=new window.BlobBuilder,c.append(b),c.getBlob(g)},c=function(){function i(){c=document.createElement("canvas"),console.log("constructor")}var c,d,e,f,g,h;return c=null,d=200,g=[],e=function(){var a;if(g.length===0)return;a=g[0];switch(a.filetype){case"image":return f(a.src);default:return h(a)}},h=function(b){var c,d,f;return d=b!=null?b.content:void 0,d&&(console.log("creating...",b.src),f=faultylabs.MD5(b.src),c=new window.BlobBuilder,c.append(d),a.set(f,c.getBlob("text/plain"))),g.splice(0,1),e.apply(this)},f=function(f){var h;return h=this,$("<img>").load(function(){var i,j,k,l,m,n=this;return l=this,console.log("creating...",l.src),c.width=l.width,c.height=l.height,j=c.getContext("2d"),j.drawImage(l,0,0),k=c.toDataURL("image/png"),f=$(l).data("src"),m=faultylabs.MD5(f),i=b(k),a.set(m,i),g.splice(0,1),_.delay(function(){return e.apply(h)},d)}).error(function(){var a;return a=this,console.log("load error",a.src),f=$(a).data("src"),h["delete"](f),g.splice(0,1),e.apply(h)}).data("src",f).attr("src",f)},i.prototype.create=function(b,c){if(!a.enabled)return;c=$.extend(c,{src:b}),g.push(c);if(g.length===1)return e()},i.prototype.getURL=function(b,c){var d,e;return c==null&&(c={filetype:"txt"}),a.enabled?(d=faultylabs.MD5(b),e=a.get(d),e?e:(this.create(b,c),b)):b},i}(),new c})}.call(this),function(){define("offlineCache/handlebar.offlineCache",["offlineCache/offlineCache"],function(a){return Handlebars.registerHelper("offlineCache",function(b){return b=a.getURL(b,{filetype:"image"}),b})})}.call(this)