self.webpackChunk([7],{13:function(n,r,e){(function(r){var t=function(){var n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return function(t){var o,i=void 0!==(t=t||{})?t:{},a={};for(o in i)i.hasOwnProperty(o)&&(a[o]=i[o]);i.arguments=[],i.thisProgram="./this.program",i.quit=function(n,r){throw r},i.preRun=[],i.postRun=[];var u,f,c=!1,l=!1;c="object"==typeof window,l="function"==typeof importScripts,u="object"==typeof{}&&!c&&!l,f=!c&&!u&&!l;var s,p,d="";u?(d=r+"/",i.read=function(n,r){var t;return s||(s=e(!function(){var n=new Error("Cannot find module 'fs'");throw n.code="MODULE_NOT_FOUND",n}())),p||(p=e(!function(){var n=new Error("Cannot find module 'path'");throw n.code="MODULE_NOT_FOUND",n}())),n=p.normalize(n),t=s.readFileSync(n),r?t:t.toString()},i.readBinary=function(n){var r=i.read(n,!0);return r.buffer||(r=new Uint8Array(r)),T(r.buffer),r},{}.argv.length>1&&(i.thisProgram={}.argv[1].replace(/\\/g,"/")),i.arguments={}.argv.slice(2),["on"]("uncaughtException",function(n){if(!(n instanceof Jn))throw n}),["on"]("unhandledRejection",nr),i.quit=function(n){["exit"](n)},i.inspect=function(){return"[Emscripten Module object]"}):f?("undefined"!=typeof read&&(i.read=function(n){return read(n)}),i.readBinary=function(n){var r;return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):(T("object"==typeof(r=read(n,"binary"))),r)},"undefined"!=typeof scriptArgs?i.arguments=scriptArgs:void 0!==arguments&&(i.arguments=arguments),"function"==typeof quit&&(i.quit=function(n){quit(n)})):(c||l)&&(l?d=self.location.href:document.currentScript&&(d=document.currentScript.src),n&&(d=n),d=0!==d.indexOf("blob:")?d.substr(0,d.lastIndexOf("/")+1):"",i.read=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.send(null),r.responseText},l&&(i.readBinary=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),i.readAsync=function(n,r,e){var t=new XMLHttpRequest;t.open("GET",n,!0),t.responseType="arraybuffer",t.onload=function(){200==t.status||0==t.status&&t.response?r(t.response):e()},t.onerror=e,t.send(null)},i.setWindowTitle=function(n){document.title=n});var y=i.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),m=i.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||y);for(o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a=void 0;var v=16;function E(n,r){return r||(r=v),Math.ceil(n/r)*r}var h={"f64-rem":function(n,r){return n%r},debugger:function(){}},g=(new Array(0),!1);function T(n,r){n||nr("Assertion failed: "+r)}var w="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function A(n,r){for(var e=r;n[e];)++e;if(e-r>16&&n.subarray&&w)return w.decode(n.subarray(r,e));for(var t,o,i,a,u,f="";;){if(!(t=n[r++]))return f;if(128&t)if(o=63&n[r++],192!=(224&t))if(i=63&n[r++],224==(240&t)?t=(15&t)<<12|o<<6|i:(a=63&n[r++],240==(248&t)?t=(7&t)<<18|o<<12|i<<6|a:(u=63&n[r++],t=248==(252&t)?(3&t)<<24|o<<18|i<<12|a<<6|u:(1&t)<<30|o<<24|i<<18|a<<12|u<<6|63&n[r++])),t<65536)f+=String.fromCharCode(t);else{var c=t-65536;f+=String.fromCharCode(55296|c>>10,56320|1023&c)}else f+=String.fromCharCode((31&t)<<6|o);else f+=String.fromCharCode(t)}}function b(n){return A(_,n)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var O,C,_,N,S,R,P,I,L,F,D,M,W,U,B=16777216;function k(n,r){return n%r>0&&(n+=r-n%r),n}function x(n){i.buffer=O=n}function H(){i.HEAP8=C=new Int8Array(O),i.HEAP16=N=new Int16Array(O),i.HEAP32=R=new Int32Array(O),i.HEAPU8=_=new Uint8Array(O),i.HEAPU16=S=new Uint16Array(O),i.HEAPU32=P=new Uint32Array(O),i.HEAPF32=I=new Float32Array(O),i.HEAPF64=L=new Float64Array(O)}F=U=0;try{Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get)(new ArrayBuffer(4))}catch(rr){(function(n){return n.byteLength})}var G=i.TOTAL_STACK||5242880,j=i.TOTAL_MEMORY||16777216;function V(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var e=r.func;"number"==typeof e?void 0===r.arg?i.dynCall_v(e):i.dynCall_vi(e,r.arg):e(void 0===r.arg?null:r.arg)}else r()}}j<G&&m("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+j+"! (TOTAL_STACK="+G+")"),i.buffer?O=i.buffer:("object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(i.wasmMemory=new WebAssembly.Memory({initial:j/65536}),O=i.wasmMemory.buffer):O=new ArrayBuffer(j),i.buffer=O),H();var X=[],z=[],K=[],Y=[],q=!1;function Q(n){X.unshift(n)}function Z(n){Y.unshift(n)}var J=0,$=null,nn=null;i.preloadedImages={},i.preloadedAudios={};var rn="data:application/octet-stream;base64,";function en(n){return String.prototype.startsWith?n.startsWith(rn):0===n.indexOf(rn)}!function(){var n="webp_enc.wasm";en(n)||(n=function(n){return i.locateFile?i.locateFile(n,d):d+n}(n));var r={global:null,env:null,asm2wasm:h,parent:i},e=null;function t(){try{if(i.wasmBinary)return new Uint8Array(i.wasmBinary);if(i.readBinary)return i.readBinary(n);throw"both async and sync fetching of the wasm failed"}catch(m){nr(m)}}function o(o,a,u){if("object"!=typeof WebAssembly)return m("no native wasm support detected"),!1;if(!(i.wasmMemory instanceof WebAssembly.Memory))return m("no native wasm Memory in use"),!1;function f(n,r){(e=n.exports).memory&&function(n){var r=i.buffer;n.byteLength<r.byteLength&&m("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");var e=new Int8Array(r);new Int8Array(n).set(e),x(n),H()}(e.memory),i.asm=e,function(n){if(J--,i.monitorRunDependencies&&i.monitorRunDependencies(J),0==J&&(null!==$&&(clearInterval($),$=null),nn)){var r=nn;nn=null,r()}}()}if(a.memory=i.wasmMemory,r.global={NaN:NaN,Infinity:1/0},r["global.Math"]=Math,r.env=a,J++,i.monitorRunDependencies&&i.monitorRunDependencies(J),i.instantiateWasm)try{return i.instantiateWasm(r,f)}catch(rr){return m("Module.instantiateWasm callback failed with error: "+rr),!1}function s(n){f(n.instance,n.module)}function p(e){(i.wasmBinary||!c&&!l||"function"!=typeof fetch?new Promise(function(n,r){n(t())}):fetch(n,{credentials:"same-origin"}).then(function(r){if(!r.ok)throw"failed to load wasm binary file at '"+n+"'";return r.arrayBuffer()}).catch(function(){return t()})).then(function(n){return WebAssembly.instantiate(n,r)}).then(e,function(n){m("failed to asynchronously prepare wasm: "+n),nr(n)})}return i.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||en(n)||"function"!=typeof fetch?p(s):WebAssembly.instantiateStreaming(fetch(n,{credentials:"same-origin"}),r).then(s,function(n){m("wasm streaming compile failed: "+n),m("falling back to ArrayBuffer instantiation"),p(s)}),{}}i.asmPreload=i.asm,i.reallocBuffer=function(n){return function(n){n=k(n,65536);var r=i.buffer.byteLength;try{return-1!==i.wasmMemory.grow((n-r)/65536)?i.buffer=i.wasmMemory.buffer:null}catch(rr){return null}}(n)},i.asm=function(n,r,e){if(!r.table){var t=i.wasmTableSize,a=i.wasmMaxTableSize;"object"==typeof WebAssembly&&"function"==typeof WebAssembly.Table?r.table=void 0!==a?new WebAssembly.Table({initial:t,maximum:a,element:"anyfunc"}):new WebAssembly.Table({initial:t,element:"anyfunc"}):r.table=new Array(t),i.wasmTable=r.table}return r.__memory_base||(r.__memory_base=i.STATIC_BASE),r.__table_base||(r.__table_base=0),o(0,r)}}(),F=38768,z.push({func:function(){Yn()}},{func:function(){Kn()}});function tn(){return!!tn.uncaught_exception}i.STATIC_BASE=1024,i.STATIC_BUMP=37744,F+=16;var on={last:0,caught:[],infos:{},deAdjust:function(n){if(!n||on.infos[n])return n;for(var r in on.infos)for(var e=+r,t=on.infos[e].adjusted,o=t.length,i=0;i<o;i++)if(t[i]===n)return e;return n},addRef:function(n){n&&on.infos[n].refcount++},decRef:function(n){if(n){var r=on.infos[n];T(r.refcount>0),r.refcount--,0!==r.refcount||r.rethrown||(r.destructor&&i.dynCall_vi(r.destructor,n),delete on.infos[n],___cxa_free_exception(n))}},clearRef:function(n){n&&(on.infos[n].refcount=0)}};var an={buffers:[null,[],[]],printChar:function(n,r){var e=an.buffers[n];T(e),0===r||10===r?((1===n?y:m)(A(e,0)),e.length=0):e.push(r)},varargs:0,get:function(n){return an.varargs+=4,R[an.varargs-4>>2]},getStr:function(){return function(n,r){if(0===r||!n)return"";for(var e,t=0,o=0;t|=e=_[n+o>>0],(0!=e||r)&&(o++,!r||o!=r););r||(r=o);var i="";if(t<128){for(var a;r>0;)a=String.fromCharCode.apply(String,_.subarray(n,n+Math.min(r,1024))),i=i?i+a:a,n+=1024,r-=1024;return i}return b(n)}(an.get())},get64:function(){var n=an.get(),r=an.get();return T(n>=0?0===r:-1===r),n},getZero:function(){T(0===an.get())}};var un={};function fn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function cn(n){return this.fromWireType(P[n>>2])}var ln={},sn={},pn={},dn=48,yn=57;function mn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=dn&&r<=yn?"_"+n:n}function vn(n,r){return n=mn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function En(n,r){var e=vn(r,function(n){this.name=r,this.message=n;var e=new Error(n).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))});return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var hn=void 0;function gn(n){throw new hn(n)}function Tn(n,r,e){function t(r){var t=e(r);t.length!==n.length&&gn("Mismatched type converter count");for(var o=0;o<n.length;++o)_n(n[o],t[o])}n.forEach(function(n){pn[n]=r});var o=new Array(r.length),i=[],a=0;r.forEach(function(n,r){sn.hasOwnProperty(n)?o[r]=sn[n]:(i.push(n),ln.hasOwnProperty(n)||(ln[n]=[]),ln[n].push(function(){o[r]=sn[n],++a===i.length&&t(o)}))}),0===i.length&&t(o)}function wn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var An=void 0;function bn(n){for(var r="",e=n;_[e];)r+=An[_[e++]];return r}var On=void 0;function Cn(n){throw new On(n)}function _n(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||Cn('type "'+t+'" must have a positive integer typeid pointer'),sn.hasOwnProperty(n)){if(e.ignoreDuplicateRegistrations)return;Cn("Cannot register type '"+t+"' twice")}if(sn[n]=r,delete pn[n],ln.hasOwnProperty(n)){var o=ln[n];delete ln[n],o.forEach(function(n){n()})}}var Nn=[],Sn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Rn(n){n>4&&0==--Sn[n].refcount&&(Sn[n]=void 0,Nn.push(n))}function Pn(){for(var n=0,r=5;r<Sn.length;++r)void 0!==Sn[r]&&++n;return n}function In(){for(var n=5;n<Sn.length;++n)if(void 0!==Sn[n])return Sn[n];return null}function Ln(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Nn.length?Nn.pop():Sn.length;return Sn[r]={refcount:1,value:n},r}}function Fn(n,r,e){i.hasOwnProperty(n)?((void 0===e||void 0!==i[n].overloadTable&&void 0!==i[n].overloadTable[e])&&Cn("Cannot register public name '"+n+"' twice"),function(n,r,e){if(void 0===n[r].overloadTable){var t=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||Cn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[t.argCount]=t}}(i,n,n),i.hasOwnProperty(e)&&Cn("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),i[n].overloadTable[e]=r):(i[n]=r,void 0!==e&&(i[n].numArguments=e))}function Dn(n,r,e){switch(r){case 0:return function(n){var r=e?C:_;return this.fromWireType(r[n])};case 1:return function(n){var r=e?N:S;return this.fromWireType(r[n>>1])};case 2:return function(n){var r=e?R:P;return this.fromWireType(r[n>>2])};default:throw new TypeError("Unknown integer type: "+n)}}function Mn(n){var r=qn(n),e=bn(r);return Qn(r),e}function Wn(n,r){var e=sn[n];return void 0===e&&Cn(r+" has unknown type "+Mn(n)),e}function Un(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Bn(n,r){switch(r){case 2:return function(n){return this.fromWireType(I[n>>2])};case 3:return function(n){return this.fromWireType(L[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function kn(n,r,e,t,o){var i=r.length;i<2&&Cn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&null!==e,u=!1,f=1;f<r.length;++f)if(null!==r[f]&&void 0===r[f].destructorFunction){u=!0;break}var c="void"!==r[0].name,l="",s="";for(f=0;f<i-2;++f)l+=(0!==f?", ":"")+"arg"+f,s+=(0!==f?", ":"")+"arg"+f+"Wired";var p="return function "+mn(n)+"("+l+") {\nif (arguments.length !== "+(i-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(i-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",y=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],m=[Cn,t,o,fn,r[0],r[1]];a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n");for(f=0;f<i-2;++f)p+="var arg"+f+"Wired = argType"+f+".toWireType("+d+", arg"+f+"); // "+r[f+2].name+"\n",y.push("argType"+f),m.push(r[f+2]);if(a&&(s="thisWired"+(s.length>0?", ":"")+s),p+=(c?"var rv = ":"")+"invoker(fn"+(s.length>0?", ":"")+s+");\n",u)p+="runDestructors(destructors);\n";else for(f=a?1:2;f<r.length;++f){var v=1===f?"thisWired":"arg"+(f-2)+"Wired";null!==r[f].destructorFunction&&(p+=v+"_dtor("+v+"); // "+r[f].name+"\n",y.push(v+"_dtor"),m.push(r[f].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",y.push(p),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var e=vn(n.name||"unknownFunctionName",function(){});e.prototype=n.prototype;var t=new e,o=n.apply(t,r);return o instanceof Object?o:t}(Function,y).apply(null,m)}function xn(n,r){var e;if(n=bn(n),void 0!==i["FUNCTION_TABLE_"+n])e=i["FUNCTION_TABLE_"+n][r];else if("undefined"!=typeof FUNCTION_TABLE)e=FUNCTION_TABLE[r];else{var t=i["dynCall_"+n];void 0===t&&void 0===(t=i["dynCall_"+n.replace(/f/g,"d")])&&Cn("No dynCall invoker for signature: "+n),e=function(e){for(var t=[],o=1;o<n.length;++o)t.push("a"+o);var i="return function dynCall_"+n+"_"+r+"("+t.join(", ")+") {\n";return i+="    return dynCall(rawFunction"+(t.length?", ":"")+t.join(", ")+");\n",i+="};\n",new Function("dynCall","rawFunction",i)(e,r)}(t)}return"function"!=typeof e&&Cn("unknown function pointer with signature "+n+": "+r),e}var Hn=void 0;function Gn(n,r,e){switch(r){case 0:return e?function(n){return C[n]}:function(n){return _[n]};case 1:return e?function(n){return N[n>>1]}:function(n){return S[n>>1]};case 2:return e?function(n){return R[n>>2]}:function(n){return P[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var jn={};var Vn=1,Xn={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};hn=i.InternalError=En(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);An=n}(),On=i.BindingError=En(Error,"BindingError"),i.count_emval_handles=Pn,i.get_first_emval=In,Hn=i.UnboundTypeError=En(Error,"UnboundTypeError"),U=function(n){var r=F;return F=F+n+15&-16,r}(4),D=M=E(F),W=E(D+G),R[U>>2]=W,i.wasmTableSize=258,i.wasmMaxTableSize=258,i.asmGlobalArg={},i.asmLibraryArg={c:nr,J:function(){if(R[U>>2]>2147418112)return!1;var n=j;for(j=Math.max(j,B);j<R[U>>2];)j=j<=536870912?k(2*j,65536):Math.min(k((3*j+2147483648)/4,65536),2147418112);var r=i.reallocBuffer(j);return r&&r.byteLength==j?(x(r),H(),!0):(j=n,!1)},D:function(){return j},u:function(){nr("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+j+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},k:function(n){return Zn(n)},j:function(n,r,e){throw on.infos[n]={ptr:n,adjusted:[n],type:r,destructor:e,refcount:0,caught:!1,rethrown:!1},on.last=n,"uncaught_exception"in tn?tn.uncaught_exception++:tn.uncaught_exception=1,n+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."},i:function(n){return i.___errno_location&&(R[i.___errno_location()>>2]=n),n},p:function(n,r){an.varargs=r;try{var e=an.getStreamFromFD(),t=(an.get(),an.get()),o=an.get(),i=an.get(),a=t;return FS.llseek(e,a,i),R[o>>2]=e.position,e.getdents&&0===a&&0===i&&(e.getdents=null),0}catch(rr){return"undefined"!=typeof FS&&rr instanceof FS.ErrnoError||nr(rr),-rr.errno}},h:function(n,r){an.varargs=r;try{for(var e=an.get(),t=an.get(),o=an.get(),i=0,a=0;a<o;a++){for(var u=R[t+8*a>>2],f=R[t+(8*a+4)>>2],c=0;c<f;c++)an.printChar(e,_[u+c]);i+=f}return i}catch(rr){return"undefined"!=typeof FS&&rr instanceof FS.ErrnoError||nr(rr),-rr.errno}},o:function(n,r){an.varargs=r;try{var e=an.getStreamFromFD();return FS.close(e),0}catch(rr){return"undefined"!=typeof FS&&rr instanceof FS.ErrnoError||nr(rr),-rr.errno}},I:function(n){var r=un[n];delete un[n];var e=r.rawConstructor,t=r.rawDestructor,o=r.fields;Tn([n],o.map(function(n){return n.getterReturnType}).concat(o.map(function(n){return n.setterArgumentType})),function(n){var i={};return o.forEach(function(r,e){var t=r.fieldName,a=n[e],u=r.getter,f=r.getterContext,c=n[e+o.length],l=r.setter,s=r.setterContext;i[t]={read:function(n){return a.fromWireType(u(f,n))},write:function(n,r){var e=[];l(s,n,c.toWireType(e,r)),fn(e)}}}),[{name:r.name,fromWireType:function(n){var r={};for(var e in i)r[e]=i[e].read(n);return t(n),r},toWireType:function(n,r){for(var o in i)if(!(o in r))throw new TypeError("Missing field");var a=e();for(o in i)i[o].write(a,r[o]);return null!==n&&n.push(t,a),a},argPackAdvance:8,readValueFromPointer:cn,destructorFunction:t}]})},H:function(n,r,e,t,o){var i=wn(e);_n(n,{name:r=bn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:o},argPackAdvance:8,readValueFromPointer:function(n){var t;if(1===e)t=C;else if(2===e)t=N;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=R}return this.fromWireType(t[n>>i])},destructorFunction:null})},G:function(n,r){_n(n,{name:r=bn(r),fromWireType:function(n){var r=Sn[n].value;return Rn(n),r},toWireType:function(n,r){return Ln(r)},argPackAdvance:8,readValueFromPointer:cn,destructorFunction:null})},F:function(n,r,e,t){var o=wn(e);function i(){}r=bn(r),i.values={},_n(n,{name:r,constructor:i,fromWireType:function(n){return this.constructor.values[n]},toWireType:function(n,r){return r.value},argPackAdvance:8,readValueFromPointer:Dn(r,o,t),destructorFunction:null}),Fn(r,i)},E:function(n,r,e){var t=Wn(n,"enum");r=bn(r);var o=t.constructor,i=Object.create(t.constructor.prototype,{value:{value:e},constructor:{value:vn(t.name+"_"+r,function(){})}});o.values[e]=i,o[r]=i},n:function(n,r,e){var t=wn(e);_n(n,{name:r=bn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Un(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:Bn(r,t),destructorFunction:null})},g:function(n,r,e,t,o,a){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(R[(r>>2)+t]);return e}(r,e);n=bn(n),o=xn(t,o),Fn(n,function(){!function(n,r){var e=[],t={};throw r.forEach(function n(r){t[r]||sn[r]||(pn[r]?pn[r].forEach(n):(e.push(r),t[r]=!0))}),new Hn(n+": "+e.map(Mn).join([", "]))}("Cannot call "+n+" due to unbound types",u)},r-1),Tn([],u,function(e){var t=[e[0],null].concat(e.slice(1));return function(n,r,e){i.hasOwnProperty(n)||gn("Replacing nonexistant public symbol"),void 0!==i[n].overloadTable&&void 0!==e?i[n].overloadTable[e]=r:(i[n]=r,i[n].argCount=e)}(n,kn(n,t,null,o,a),r-1),[]})},e:function(n,r,e,t,o){r=bn(r),-1===o&&(o=4294967295);var i=wn(e),a=function(n){return n};if(0===t){var u=32-8*e;a=function(n){return n<<u>>>u}}var f=-1!=r.indexOf("unsigned");_n(n,{name:r,fromWireType:a,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+Un(e)+'" to '+this.name);if(e<t||e>o)throw new TypeError('Passing a number "'+Un(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+o+"]!");return f?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:Gn(r,i,0!==t),destructorFunction:null})},d:function(n,r,e){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=P,e=r[n>>=2],o=r[n+1];return new t(r.buffer,o,e)}_n(n,{name:e=bn(e),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},m:function(n,r){var e="std::string"===(r=bn(r));_n(n,{name:r,fromWireType:function(n){var r,t=P[n>>2];if(e){var o=_[n+4+t],i=0;0!=o&&(i=o,_[n+4+t]=0);for(var a=n+4,u=0;u<=t;++u){var f=n+4+u;if(0==_[f]){var c=b(a);void 0===r?r=c:(r+=String.fromCharCode(0),r+=c),a=f+1}}0!=i&&(_[n+4+t]=i)}else{var l=new Array(t);for(u=0;u<t;++u)l[u]=String.fromCharCode(_[n+4+u]);r=l.join("")}return Qn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||Cn("Cannot pass non-string to std::string");var o=(e&&t?function(){return function(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&n.charCodeAt(++e)),t<=127?++r:r+=t<=2047?2:t<=65535?3:t<=2097151?4:t<=67108863?5:6}return r}(r)}:function(){return r.length})(),i=Zn(4+o+1);if(P[i>>2]=o,e&&t)!function(n,r,e){!function(n,r,e,t){if(!(t>0))return 0;for(var o=e+t-1,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),a<=127){if(e>=o)break;r[e++]=a}else if(a<=2047){if(e+1>=o)break;r[e++]=192|a>>6,r[e++]=128|63&a}else if(a<=65535){if(e+2>=o)break;r[e++]=224|a>>12,r[e++]=128|a>>6&63,r[e++]=128|63&a}else if(a<=2097151){if(e+3>=o)break;r[e++]=240|a>>18,r[e++]=128|a>>12&63,r[e++]=128|a>>6&63,r[e++]=128|63&a}else if(a<=67108863){if(e+4>=o)break;r[e++]=248|a>>24,r[e++]=128|a>>18&63,r[e++]=128|a>>12&63,r[e++]=128|a>>6&63,r[e++]=128|63&a}else{if(e+5>=o)break;r[e++]=252|a>>30,r[e++]=128|a>>24&63,r[e++]=128|a>>18&63,r[e++]=128|a>>12&63,r[e++]=128|a>>6&63,r[e++]=128|63&a}}r[e]=0}(n,_,r,e)}(r,i+4,o+1);else if(t)for(var a=0;a<o;++a){var u=r.charCodeAt(a);u>255&&(Qn(i),Cn("String has UTF-16 code units that do not fit in 8 bits")),_[i+4+a]=u}else for(a=0;a<o;++a)_[i+4+a]=r[a];return null!==n&&n.push(Qn,i),i},argPackAdvance:8,readValueFromPointer:cn,destructorFunction:function(n){Qn(n)}})},C:function(n,r,e){var t,o;e=bn(e),2===r?(t=function(){return S},o=1):4===r&&(t=function(){return P},o=2),_n(n,{name:e,fromWireType:function(n){for(var r=t(),e=P[n>>2],i=new Array(e),a=n+4>>o,u=0;u<e;++u)i[u]=String.fromCharCode(r[a+u]);return Qn(n),i.join("")},toWireType:function(n,e){var i=t(),a=e.length,u=Zn(4+a*r);P[u>>2]=a;for(var f=u+4>>o,c=0;c<a;++c)i[f+c]=e.charCodeAt(c);return null!==n&&n.push(Qn,u),u},argPackAdvance:8,readValueFromPointer:cn,destructorFunction:function(n){Qn(n)}})},B:function(n,r,e,t,o,i){un[n]={name:bn(r),rawConstructor:xn(e,t),rawDestructor:xn(o,i),fields:[]}},f:function(n,r,e,t,o,i,a,u,f,c){un[n].fields.push({fieldName:bn(r),getterReturnType:e,getter:xn(t,o),getterContext:i,setterArgumentType:a,setter:xn(u,f),setterContext:c})},A:function(n,r){_n(n,{isVoid:!0,name:r=bn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},z:Rn,y:function(n){n>4&&(Sn[n].refcount+=1)},x:function(n,r){return Ln((n=Wn(n,"_emval_take_value")).readValueFromPointer(r))},l:function(){i.abort()},w:function(n,r,e){return _.set(_.subarray(r,r+e),n),n},v:function(){return function(n){return Math.log(n)/Math.LN10}.apply(null,arguments)},t:function(n){return jn[n]||0},s:function(n,r){return 0==n?Xn.EINVAL:(R[n>>2]=Vn,jn[Vn]=0,Vn++,0)},r:function n(r,e){n.seen||(n.seen={}),r in n.seen||(i.dynCall_v(e),n.seen[r]=1)},q:function(n,r){return n in jn?(jn[n]=r,0):Xn.EINVAL},a:U,b:M};var zn=i.asm(i.asmGlobalArg,i.asmLibraryArg,O);i.asm=zn;var Kn=i.__GLOBAL__sub_I_bind_cpp=function(){return i.asm.K.apply(null,arguments)},Yn=i.__GLOBAL__sub_I_webp_enc_cpp=function(){return i.asm.L.apply(null,arguments)},qn=(i.___errno_location=function(){return i.asm.M.apply(null,arguments)},i.___getTypeName=function(){return i.asm.N.apply(null,arguments)}),Qn=i._free=function(){return i.asm.O.apply(null,arguments)},Zn=i._malloc=function(){return i.asm.P.apply(null,arguments)};i.dynCall_diiii=function(){return i.asm.Q.apply(null,arguments)},i.dynCall_fii=function(){return i.asm.R.apply(null,arguments)},i.dynCall_i=function(){return i.asm.S.apply(null,arguments)},i.dynCall_ii=function(){return i.asm.T.apply(null,arguments)},i.dynCall_iii=function(){return i.asm.U.apply(null,arguments)},i.dynCall_iiii=function(){return i.asm.V.apply(null,arguments)},i.dynCall_iiiiii=function(){return i.asm.W.apply(null,arguments)},i.dynCall_iiiiiii=function(){return i.asm.X.apply(null,arguments)},i.dynCall_v=function(){return i.asm.Y.apply(null,arguments)},i.dynCall_vi=function(){return i.asm.Z.apply(null,arguments)},i.dynCall_viif=function(){return i.asm._.apply(null,arguments)},i.dynCall_viii=function(){return i.asm.$.apply(null,arguments)},i.dynCall_viiii=function(){return i.asm.aa.apply(null,arguments)},i.dynCall_viiiii=function(){return i.asm.ba.apply(null,arguments)},i.dynCall_viiiiii=function(){return i.asm.ca.apply(null,arguments)},i.dynCall_viiiiiiiii=function(){return i.asm.da.apply(null,arguments)};function Jn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function $n(n){function r(){i.calledRun||(i.calledRun=!0,g||(q||(q=!0,V(z)),V(K),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)Z(i.postRun.shift());V(Y)}()))}n=n||i.arguments,J>0||(!function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)Q(i.preRun.shift());V(X)}(),J>0||i.calledRun||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),r()},1)):r()))}function nr(n){throw i.onAbort&&i.onAbort(n),void 0!==n?(y(n),m(n),n=JSON.stringify(n)):n="",g=!0,1,"abort("+n+"). Build with -s ASSERTIONS=1 for more info."}if(i.asm=zn,i.then=function(n){if(i.calledRun)n(i);else{var r=i.onRuntimeInitialized;i.onRuntimeInitialized=function(){r&&r(),n(i)}}return i},Jn.prototype=new Error,Jn.prototype.constructor=Jn,nn=function n(){i.calledRun||$n(),i.calledRun||(nn=n)},i.run=$n,i.abort=nr,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return i.noExitRuntime=!0,$n(),t}}();n.exports=t}).call(this,"/")},14:function(n,r,e){n.exports=e.p+"webp_enc.ea665.wasm"},22:function(n,r,e){"use strict";e.r(r),e.d(r,"encode",function(){return c});var t=e(13),o=e.n(t),i=e(14),a=e.n(i),u=e(0);let f;async function c(n,r){f||(f=Object(u.b)(o.a,a.a));const e=await f,t=e.encode(n.data,n.width,n.height,r),i=new Uint8Array(t);return e.free_result(),i.buffer}}});
//# sourceMappingURL=process-webp-enc.ac9e0.worker.js.map