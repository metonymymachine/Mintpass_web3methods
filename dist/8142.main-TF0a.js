(self.webpackChunkborder=self.webpackChunkborder||[]).push([[8142],{68142:(r,e,t)=>{r.exports=t(75437)},75437:(r,e,t)=>{var n=t(23085).Buffer;const i=t(86589),o=t(13550);var f=function(){};function a(r){return r.startsWith("int[")?"int256"+r.slice(3):"int"===r?"int256":r.startsWith("uint[")?"uint256"+r.slice(4):"uint"===r?"uint256":r.startsWith("fixed[")?"fixed128x128"+r.slice(5):"fixed"===r?"fixed128x128":r.startsWith("ufixed[")?"ufixed128x128"+r.slice(6):"ufixed"===r?"ufixed128x128":r}function u(r){return parseInt(/^\D+(\d+)$/.exec(r)[1],10)}function s(r){var e=/^\D+(\d+)x(\d+)$/.exec(r);return[parseInt(e[1],10),parseInt(e[2],10)]}function c(r){var e=r.match(/(.*)\[(.*?)\]$/);return e?""===e[2]?"dynamic":parseInt(e[2],10):null}function l(r){var e=typeof r;if("string"===e)return i.isHexPrefixed(r)?new o(i.stripHexPrefix(r),16):new o(r,10);if("number"===e)return new o(r);if(r.toArray)return r;throw new Error("Argument is not a number")}function d(r){var e=/^(\w+)\((.*)\)$/.exec(r);if(3!==e.length)throw new Error("Invalid method signature");var t=/^(.+)\):\((.+)$/.exec(e[2]);if(null!==t&&3===t.length)return{method:e[1],args:t[1].split(","),retargs:t[2].split(",")};var n=e[2].split(",");return 1===n.length&&""===n[0]&&(n=[]),{method:e[1],args:n}}function h(r,e){var t,f,a,d;if("address"===r)return h("uint160",l(e));if("bool"===r)return h("uint8",e?1:0);if("string"===r)return h("bytes",n.from(e,"utf8"));if(g(r)){if(void 0===e.length)throw new Error("Not an array?");if("dynamic"!==(t=c(r))&&0!==t&&e.length>t)throw new Error("Elements exceed array size: "+t);for(d in a=[],r=r.slice(0,r.lastIndexOf("[")),"string"==typeof e&&(e=JSON.parse(e)),e)a.push(h(r,e[d]));if("dynamic"===t){var p=h("uint256",e.length);a.unshift(p)}return n.concat(a)}if("bytes"===r)return e=n.from(e),a=n.concat([h("uint256",e.length),e]),e.length%32!=0&&(a=n.concat([a,i.zeros(32-e.length%32)])),a;if(r.startsWith("bytes")){if((t=u(r))<1||t>32)throw new Error("Invalid bytes<N> width: "+t);return i.setLengthRight(e,32)}if(r.startsWith("uint")){if((t=u(r))%8||t<8||t>256)throw new Error("Invalid uint<N> width: "+t);if((f=l(e)).bitLength()>t)throw new Error("Supplied uint exceeds width: "+t+" vs "+f.bitLength());if(f<0)throw new Error("Supplied uint is negative");return f.toArrayLike(n,"be",32)}if(r.startsWith("int")){if((t=u(r))%8||t<8||t>256)throw new Error("Invalid int<N> width: "+t);if((f=l(e)).bitLength()>t)throw new Error("Supplied int exceeds width: "+t+" vs "+f.bitLength());return f.toTwos(256).toArrayLike(n,"be",32)}if(r.startsWith("ufixed")){if(t=s(r),(f=l(e))<0)throw new Error("Supplied ufixed is negative");return h("uint256",f.mul(new o(2).pow(new o(t[1]))))}if(r.startsWith("fixed"))return t=s(r),h("int256",l(e).mul(new o(2).pow(new o(t[1]))));throw new Error("Unsupported or invalid type: "+r)}function p(r,e,t){var i,f,a,u;if("string"==typeof r&&(r=y(r)),"address"===r.name)return p(r.rawType,e,t).toArrayLike(n,"be",20).toString("hex");if("bool"===r.name)return p(r.rawType,e,t).toString()===new o(1).toString();if("string"===r.name){var s=p(r.rawType,e,t);return n.from(s,"utf8").toString()}if(r.isArray){for(a=[],i=r.size,"dynamic"===r.size&&(t=p("uint256",e,t).toNumber(),i=p("uint256",e,t).toNumber(),t+=32),u=0;u<i;u++){var c=p(r.subArray,e,t);a.push(c),t+=r.subArray.memoryUsage}return a}if("bytes"===r.name)return t=p("uint256",e,t).toNumber(),i=p("uint256",e,t).toNumber(),e.slice(t+32,t+32+i);if(r.name.startsWith("bytes"))return e.slice(t,t+r.size);if(r.name.startsWith("uint")){if((f=new o(e.slice(t,t+32),16,"be")).bitLength()>r.size)throw new Error("Decoded int exceeds width: "+r.size+" vs "+f.bitLength());return f}if(r.name.startsWith("int")){if((f=new o(e.slice(t,t+32),16,"be").fromTwos(256)).bitLength()>r.size)throw new Error("Decoded uint exceeds width: "+r.size+" vs "+f.bitLength());return f}if(r.name.startsWith("ufixed")){if(i=new o(2).pow(new o(r.size[1])),!(f=p("uint256",e,t)).mod(i).isZero())throw new Error("Decimals not supported yet");return f.div(i)}if(r.name.startsWith("fixed")){if(i=new o(2).pow(new o(r.size[1])),!(f=p("int256",e,t)).mod(i).isZero())throw new Error("Decimals not supported yet");return f.div(i)}throw new Error("Unsupported or invalid type: "+r.name)}function y(r){var e,t,n;if(g(r)){e=c(r);var i=r.slice(0,r.lastIndexOf("["));return i=y(i),{isArray:!0,name:r,size:e,memoryUsage:"dynamic"===e?32:i.memoryUsage*e,subArray:i}}switch(r){case"address":n="uint160";break;case"bool":n="uint8";break;case"string":n="bytes"}if(t={rawType:n,name:r,memoryUsage:32},r.startsWith("bytes")&&"bytes"!==r||r.startsWith("uint")||r.startsWith("int")?t.size=u(r):(r.startsWith("ufixed")||r.startsWith("fixed"))&&(t.size=s(r)),r.startsWith("bytes")&&"bytes"!==r&&(t.size<1||t.size>32))throw new Error("Invalid bytes<N> width: "+t.size);if((r.startsWith("uint")||r.startsWith("int"))&&(t.size%8||t.size<8||t.size>256))throw new Error("Invalid int/uint<N> width: "+t.size);return t}function v(r){return"string"===r||"bytes"===r||"dynamic"===c(r)}function g(r){return r.lastIndexOf("]")===r.length-1}function w(r,e){return r.startsWith("address")||r.startsWith("bytes")?"0x"+e.toString("hex"):e.toString()}f.eventID=function(r,e){var t=r+"("+e.map(a).join(",")+")";return i.keccak256(n.from(t))},f.methodID=function(r,e){return f.eventID(r,e).slice(0,4)},f.rawEncode=function(r,e){var t=[],i=[],o=0;r.forEach((function(r){if(g(r)){var e=c(r);o+="dynamic"!==e?32*e:32}else o+=32}));for(var f=0;f<r.length;f++){var u=a(r[f]),s=h(u,e[f]);v(u)?(t.push(h("uint256",o)),i.push(s),o+=s.length):t.push(s)}return n.concat(t.concat(i))},f.rawDecode=function(r,e){var t=[];e=n.from(e);for(var i=0,o=0;o<r.length;o++){var f=y(a(r[o])),u=p(f,e,i);i+=f.memoryUsage,t.push(u)}return t},f.simpleEncode=function(r){var e=Array.prototype.slice.call(arguments).slice(1),t=d(r);if(e.length!==t.args.length)throw new Error("Argument count mismatch");return n.concat([f.methodID(t.method,t.args),f.rawEncode(t.args,e)])},f.simpleDecode=function(r,e){var t=d(r);if(!t.retargs)throw new Error("No return values in method");return f.rawDecode(t.retargs,e)},f.stringify=function(r,e){var t=[];for(var n in r){var i=r[n],o=e[n];o=/^[^\[]+\[.*\]$/.test(i)?o.map((function(r){return w(i,r)})).join(", "):w(i,o),t.push(o)}return t},f.solidityHexValue=function(r,e,t){var o,a;if(g(r)){var s=r.replace(/\[.*?\]/,"");if(!g(s)){var d=c(r);if("dynamic"!==d&&0!==d&&e.length>d)throw new Error("Elements exceed array size: "+d)}var h=e.map((function(r){return f.solidityHexValue(s,r,256)}));return n.concat(h)}if("bytes"===r)return e;if("string"===r)return n.from(e,"utf8");if("bool"===r){t=t||8;var p=Array(t/4).join("0");return n.from(e?p+"1":p+"0","hex")}if("address"===r){var y=20;return t&&(y=t/8),i.setLengthLeft(e,y)}if(r.startsWith("bytes")){if((o=u(r))<1||o>32)throw new Error("Invalid bytes<N> width: "+o);return i.setLengthRight(e,o)}if(r.startsWith("uint")){if((o=u(r))%8||o<8||o>256)throw new Error("Invalid uint<N> width: "+o);if((a=l(e)).bitLength()>o)throw new Error("Supplied uint exceeds width: "+o+" vs "+a.bitLength());return t=t||o,a.toArrayLike(n,"be",t/8)}if(r.startsWith("int")){if((o=u(r))%8||o<8||o>256)throw new Error("Invalid int<N> width: "+o);if((a=l(e)).bitLength()>o)throw new Error("Supplied int exceeds width: "+o+" vs "+a.bitLength());return t=t||o,a.toTwos(o).toArrayLike(n,"be",t/8)}throw new Error("Unsupported or invalid type: "+r)},f.solidityPack=function(r,e){if(r.length!==e.length)throw new Error("Number of types are not matching the values");for(var t=[],i=0;i<r.length;i++){var o=a(r[i]),u=e[i];t.push(f.solidityHexValue(o,u,null))}return n.concat(t)},f.soliditySHA3=function(r,e){return i.keccak256(f.solidityPack(r,e))},f.soliditySHA256=function(r,e){return i.sha256(f.solidityPack(r,e))},f.solidityRIPEMD160=function(r,e){return i.ripemd160(f.solidityPack(r,e),!0)},f.fromSerpent=function(r){for(var e,t=[],n=0;n<r.length;n++){var i=r[n];if("s"===i)t.push("bytes");else if("b"===i){for(var o="bytes",f=n+1;f<r.length&&(e=r[f])>="0"&&e<="9";)o+=r[f]-"0",f++;n=f-1,t.push(o)}else if("i"===i)t.push("int256");else{if("a"!==i)throw new Error("Unsupported or invalid type: "+i);t.push("int256[]")}}return t},f.toSerpent=function(r){for(var e=[],t=0;t<r.length;t++){var n=r[t];if("bytes"===n)e.push("s");else if(n.startsWith("bytes"))e.push("b"+u(n));else if("int256"===n)e.push("i");else{if("int256[]"!==n)throw new Error("Unsupported or invalid type: "+n);e.push("a")}}return e.join("")},r.exports=f},30248:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0}),e.importPublic=e.privateToPublic=e.privateToAddress=e.publicToAddress=e.pubToAddress=e.isValidPublic=e.isValidPrivate=e.isPrecompiled=e.generateAddress2=e.generateAddress=e.isValidChecksumAddress=e.toChecksumAddress=e.isZeroAddress=e.isValidAddress=e.zeroAddress=void 0;var i=t(69282),o=t(80884),f=t(83230),a=t(13550),u=t(77124),s=t(91550);e.zeroAddress=function(){var r=u.zeros(20);return u.bufferToHex(r)},e.isValidAddress=function(r){return/^0x[0-9a-fA-F]{40}$/.test(r)},e.isZeroAddress=function(r){return e.zeroAddress()===u.addHexPrefix(r)},e.toChecksumAddress=function(r,e){r=o.stripHexPrefix(r).toLowerCase();for(var t=void 0!==e?e.toString()+"0x":"",n=s.keccak(t+r).toString("hex"),i="0x",f=0;f<r.length;f++)parseInt(n[f],16)>=8?i+=r[f].toUpperCase():i+=r[f];return i},e.isValidChecksumAddress=function(r,t){return e.isValidAddress(r)&&e.toChecksumAddress(r,t)===r},e.generateAddress=function(r,e){r=u.toBuffer(r);var t=new a(e);return t.isZero()?s.rlphash([r,null]).slice(-20):s.rlphash([r,n.from(t.toArray())]).slice(-20)},e.generateAddress2=function(r,e,t){var o=u.toBuffer(r),f=u.toBuffer(e),a=u.toBuffer(t);return i(20===o.length),i(32===f.length),s.keccak256(n.concat([n.from("ff","hex"),o,f,s.keccak256(a)])).slice(-20)},e.isPrecompiled=function(r){var e=u.unpad(r);return 1===e.length&&e[0]>=1&&e[0]<=8},e.isValidPrivate=function(r){return f.privateKeyVerify(r)},e.isValidPublic=function(r,e){return void 0===e&&(e=!1),64===r.length?f.publicKeyVerify(n.concat([n.from([4]),r])):!!e&&f.publicKeyVerify(r)},e.pubToAddress=function(r,e){return void 0===e&&(e=!1),r=u.toBuffer(r),e&&64!==r.length&&(r=f.publicKeyConvert(r,!1).slice(1)),i(64===r.length),s.keccak(r).slice(-20)},e.publicToAddress=e.pubToAddress,e.privateToAddress=function(r){return e.publicToAddress(e.privateToPublic(r))},e.privateToPublic=function(r){return r=u.toBuffer(r),f.publicKeyCreate(r,!1).slice(1)},e.importPublic=function(r){return 64!==(r=u.toBuffer(r)).length&&(r=f.publicKeyConvert(r,!1).slice(1)),r}},77124:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0}),e.baToJSON=e.addHexPrefix=e.toUnsigned=e.fromSigned=e.bufferToHex=e.bufferToInt=e.toBuffer=e.stripZeros=e.unpad=e.setLengthRight=e.setLength=e.setLengthLeft=e.zeros=void 0;var i=t(80884),o=t(13550);e.zeros=function(r){return n.allocUnsafe(r).fill(0)},e.setLengthLeft=function(r,t,n){void 0===n&&(n=!1);var i=e.zeros(t);return r=e.toBuffer(r),n?r.length<t?(r.copy(i),i):r.slice(0,t):r.length<t?(r.copy(i,t-r.length),i):r.slice(-t)},e.setLength=e.setLengthLeft,e.setLengthRight=function(r,t){return e.setLength(r,t,!0)},e.unpad=function(r){for(var e=(r=i.stripHexPrefix(r))[0];r.length>0&&"0"===e.toString();)e=(r=r.slice(1))[0];return r},e.stripZeros=e.unpad,e.toBuffer=function(r){if(!n.isBuffer(r))if(Array.isArray(r))r=n.from(r);else if("string"==typeof r){if(!i.isHexString(r))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: "+r);r=n.from(i.padToEven(i.stripHexPrefix(r)),"hex")}else if("number"==typeof r)r=i.intToBuffer(r);else if(null==r)r=n.allocUnsafe(0);else if(o.isBN(r))r=r.toArrayLike(n);else{if(!r.toArray)throw new Error("invalid type");r=n.from(r.toArray())}return r},e.bufferToInt=function(r){return new o(e.toBuffer(r)).toNumber()},e.bufferToHex=function(r){return"0x"+(r=e.toBuffer(r)).toString("hex")},e.fromSigned=function(r){return new o(r).fromTwos(256)},e.toUnsigned=function(r){return n.from(r.toTwos(256).toArray())},e.addHexPrefix=function(r){return"string"!=typeof r||i.isHexPrefixed(r)?r:"0x"+r},e.baToJSON=function(r){if(n.isBuffer(r))return"0x"+r.toString("hex");if(r instanceof Array){for(var t=[],i=0;i<r.length;i++)t.push(e.baToJSON(r[i]));return t}}},46649:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0}),e.KECCAK256_RLP=e.KECCAK256_RLP_S=e.KECCAK256_RLP_ARRAY=e.KECCAK256_RLP_ARRAY_S=e.KECCAK256_NULL=e.KECCAK256_NULL_S=e.TWO_POW256=e.MAX_INTEGER=void 0;var i=t(13550);e.MAX_INTEGER=new i("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),e.TWO_POW256=new i("10000000000000000000000000000000000000000000000000000000000000000",16),e.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",e.KECCAK256_NULL=n.from(e.KECCAK256_NULL_S,"hex"),e.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",e.KECCAK256_RLP_ARRAY=n.from(e.KECCAK256_RLP_ARRAY_S,"hex"),e.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",e.KECCAK256_RLP=n.from(e.KECCAK256_RLP_S,"hex")},91550:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0}),e.rlphash=e.ripemd160=e.sha256=e.keccak256=e.keccak=void 0;var i=t(82192),o=i.keccak224,f=i.keccak384,a=i.keccak256,u=i.keccak512,s=t(23482),c=t(80884),l=t(51675),d=t(77124);e.keccak=function(r,e){switch(void 0===e&&(e=256),r="string"!=typeof r||c.isHexString(r)?d.toBuffer(r):n.from(r,"utf8"),e||(e=256),e){case 224:return o(r);case 256:return a(r);case 384:return f(r);case 512:return u(r);default:throw new Error("Invald algorithm: keccak"+e)}},e.keccak256=function(r){return e.keccak(r)},e.sha256=function(r){return r=d.toBuffer(r),s("sha256").update(r).digest()},e.ripemd160=function(r,e){r=d.toBuffer(r);var t=s("rmd160").update(r).digest();return!0===e?d.setLength(t,32):t},e.rlphash=function(r){return e.keccak(l.encode(r))}},86589:function(r,e,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(r,e,t,n){void 0===n&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){void 0===n&&(n=t),r[n]=e[t]}),i=this&&this.__exportStar||function(r,e){for(var t in r)"default"===t||e.hasOwnProperty(t)||n(e,r,t)};Object.defineProperty(e,"__esModule",{value:!0}),e.secp256k1=e.rlp=e.BN=void 0;var o=t(83230);e.secp256k1=o;var f=t(80884),a=t(13550);e.BN=a;var u=t(51675);e.rlp=u,Object.assign(e,f),i(t(46649),e),i(t(30248),e),i(t(91550),e),i(t(86232),e),i(t(77124),e),i(t(81113),e)},81113:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0}),e.defineProperties=void 0;var i=t(69282),o=t(80884),f=t(51675),a=t(77124);e.defineProperties=function(r,e,t){if(r.raw=[],r._fields=[],r.toJSON=function(e){if(void 0===e&&(e=!1),e){var t={};return r._fields.forEach((function(e){t[e]="0x"+r[e].toString("hex")})),t}return a.baToJSON(r.raw)},r.serialize=function(){return f.encode(r.raw)},e.forEach((function(e,t){function o(){return r.raw[t]}function f(o){"00"!==(o=a.toBuffer(o)).toString("hex")||e.allowZero||(o=n.allocUnsafe(0)),e.allowLess&&e.length?(o=a.stripZeros(o),i(e.length>=o.length,"The field "+e.name+" must not have more "+e.length+" bytes")):e.allowZero&&0===o.length||!e.length||i(e.length===o.length,"The field "+e.name+" must have byte length of "+e.length),r.raw[t]=o}r._fields.push(e.name),Object.defineProperty(r,e.name,{enumerable:!0,configurable:!0,get:o,set:f}),e.default&&(r[e.name]=e.default),e.alias&&Object.defineProperty(r,e.alias,{enumerable:!1,configurable:!0,set:f,get:o})})),t)if("string"==typeof t&&(t=n.from(o.stripHexPrefix(t),"hex")),n.isBuffer(t)&&(t=f.decode(t)),Array.isArray(t)){if(t.length>r._fields.length)throw new Error("wrong number of fields in data");t.forEach((function(e,t){r[r._fields[t]]=a.toBuffer(e)}))}else{if("object"!=typeof t)throw new Error("invalid data");var u=Object.keys(t);e.forEach((function(e){-1!==u.indexOf(e.name)&&(r[e.name]=t[e.name]),-1!==u.indexOf(e.alias)&&(r[e.alias]=t[e.alias])}))}}},83230:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0}),e.ecdhUnsafe=e.ecdh=e.recover=e.verify=e.sign=e.signatureImportLax=e.signatureImport=e.signatureExport=e.signatureNormalize=e.publicKeyCombine=e.publicKeyTweakMul=e.publicKeyTweakAdd=e.publicKeyVerify=e.publicKeyConvert=e.publicKeyCreate=e.privateKeyTweakMul=e.privateKeyTweakAdd=e.privateKeyModInverse=e.privateKeyNegate=e.privateKeyImport=e.privateKeyExport=e.privateKeyVerify=void 0;var i=t(95053),o=t(78427),f=t(33646);e.privateKeyVerify=function(r){return 32===r.length&&i.privateKeyVerify(Uint8Array.from(r))},e.privateKeyExport=function(r,e){if(32!==r.length)throw new RangeError("private key length is invalid");var t=o.privateKeyExport(r,e);return f.privateKeyExport(r,t,e)},e.privateKeyImport=function(r){if(null!==(r=f.privateKeyImport(r))&&32===r.length&&e.privateKeyVerify(r))return r;throw new Error("couldn't import from DER format")},e.privateKeyNegate=function(r){return n.from(i.privateKeyNegate(Uint8Array.from(r)))},e.privateKeyModInverse=function(r){if(32!==r.length)throw new Error("private key length is invalid");return n.from(o.privateKeyModInverse(Uint8Array.from(r)))},e.privateKeyTweakAdd=function(r,e){return n.from(i.privateKeyTweakAdd(Uint8Array.from(r),e))},e.privateKeyTweakMul=function(r,e){return n.from(i.privateKeyTweakMul(Uint8Array.from(r),Uint8Array.from(e)))},e.publicKeyCreate=function(r,e){return n.from(i.publicKeyCreate(Uint8Array.from(r),e))},e.publicKeyConvert=function(r,e){return n.from(i.publicKeyConvert(Uint8Array.from(r),e))},e.publicKeyVerify=function(r){return(33===r.length||65===r.length)&&i.publicKeyVerify(Uint8Array.from(r))},e.publicKeyTweakAdd=function(r,e,t){return n.from(i.publicKeyTweakAdd(Uint8Array.from(r),Uint8Array.from(e),t))},e.publicKeyTweakMul=function(r,e,t){return n.from(i.publicKeyTweakMul(Uint8Array.from(r),Uint8Array.from(e),t))},e.publicKeyCombine=function(r,e){var t=[];return r.forEach((function(r){t.push(Uint8Array.from(r))})),n.from(i.publicKeyCombine(t,e))},e.signatureNormalize=function(r){return n.from(i.signatureNormalize(Uint8Array.from(r)))},e.signatureExport=function(r){return n.from(i.signatureExport(Uint8Array.from(r)))},e.signatureImport=function(r){return n.from(i.signatureImport(Uint8Array.from(r)))},e.signatureImportLax=function(r){if(0===r.length)throw new RangeError("signature length is invalid");var e=f.signatureImportLax(r);if(null===e)throw new Error("couldn't parse DER signature");return o.signatureImport(e)},e.sign=function(r,e,t){if(null===t)throw new TypeError("options should be an Object");var o=void 0;if(t){if(o={},null===t.data)throw new TypeError("options.data should be a Buffer");if(t.data){if(32!=t.data.length)throw new RangeError("options.data length is invalid");o.data=new Uint8Array(t.data)}if(null===t.noncefn)throw new TypeError("options.noncefn should be a Function");t.noncefn&&(o.noncefn=function(r,e,i,o,f){var a=null!=i?n.from(i):null,u=null!=o?n.from(o):null,s=n.from("");return t.noncefn&&(s=t.noncefn(n.from(r),n.from(e),a,u,f)),new Uint8Array(s)})}var f=i.ecdsaSign(Uint8Array.from(r),Uint8Array.from(e),o);return{signature:n.from(f.signature),recovery:f.recid}},e.verify=function(r,e,t){return i.ecdsaVerify(Uint8Array.from(e),Uint8Array.from(r),t)},e.recover=function(r,e,t,o){return n.from(i.ecdsaRecover(Uint8Array.from(e),t,Uint8Array.from(r),o))},e.ecdh=function(r,e){return n.from(i.ecdh(Uint8Array.from(r),Uint8Array.from(e),{}))},e.ecdhUnsafe=function(r,e,t){if(33!==r.length&&65!==r.length)throw new RangeError("public key length is invalid");if(32!==e.length)throw new RangeError("private key length is invalid");return n.from(o.ecdhUnsafe(Uint8Array.from(r),Uint8Array.from(e),t))}},33646:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0});var i=n.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),o=n.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);e.privateKeyExport=function(r,e,t){void 0===t&&(t=!0);var f=n.from(t?i:o);return r.copy(f,t?8:9),e.copy(f,t?181:214),f},e.privateKeyImport=function(r){var e=r.length,t=0;if(e<t+1||48!==r[t])return null;if(e<(t+=1)+1||!(128&r[t]))return null;var n=127&r[t];if(n<1||n>2)return null;if(e<(t+=1)+n)return null;var i=r[t+n-1]|(n>1?r[t+n-2]<<8:0);return e<(t+=n)+i||e<t+3||2!==r[t]||1!==r[t+1]||1!==r[t+2]||e<(t+=3)+2||4!==r[t]||r[t+1]>32||e<t+2+r[t+1]?null:r.slice(t+2,t+2+r[t+1])},e.signatureImportLax=function(r){var e=n.alloc(32,0),t=n.alloc(32,0),i=r.length,o=0;if(48!==r[o++])return null;var f=r[o++];if(128&f&&(o+=f-128)>i)return null;if(2!==r[o++])return null;var a=r[o++];if(128&a){if(o+(f=a-128)>i)return null;for(;f>0&&0===r[o];o+=1,f-=1);for(a=0;f>0;o+=1,f-=1)a=(a<<8)+r[o]}if(a>i-o)return null;var u=o;if(o+=a,2!==r[o++])return null;var s=r[o++];if(128&s){if(o+(f=s-128)>i)return null;for(;f>0&&0===r[o];o+=1,f-=1);for(s=0;f>0;o+=1,f-=1)s=(s<<8)+r[o]}if(s>i-o)return null;var c=o;for(o+=s;a>0&&0===r[u];a-=1,u+=1);if(a>32)return null;var l=r.slice(u,u+a);for(l.copy(e,32-l.length);s>0&&0===r[c];s-=1,c+=1);if(s>32)return null;var d=r.slice(c,c+s);return d.copy(t,32-d.length),{r:e,s:t}}},78427:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0});var i=t(13550),o=new(0,t(86266).ec)("secp256k1"),f=o.curve;e.privateKeyExport=function(r,e){void 0===e&&(e=!0);var t=new i(r);if(t.ucmp(f.n)>=0)throw new Error("couldn't export to DER format");var n=o.g.mul(t);return a(n.getX(),n.getY(),e)},e.privateKeyModInverse=function(r){var e=new i(r);if(e.ucmp(f.n)>=0||e.isZero())throw new Error("private key range is invalid");return e.invm(f.n).toArrayLike(n,"be",32)},e.signatureImport=function(r){var e=new i(r.r);e.ucmp(f.n)>=0&&(e=new i(0));var t=new i(r.s);return t.ucmp(f.n)>=0&&(t=new i(0)),n.concat([e.toArrayLike(n,"be",32),t.toArrayLike(n,"be",32)])},e.ecdhUnsafe=function(r,e,t){void 0===t&&(t=!0);var n=o.keyFromPublic(r),u=new i(e);if(u.ucmp(f.n)>=0||u.isZero())throw new Error("scalar was invalid (zero or overflow)");var s=n.pub.mul(u);return a(s.getX(),s.getY(),t)};var a=function(r,e,t){var i;return t?((i=n.alloc(33))[0]=e.isOdd()?3:2,r.toArrayLike(n,"be",32).copy(i,1)):((i=n.alloc(65))[0]=4,r.toArrayLike(n,"be",32).copy(i,1),e.toArrayLike(n,"be",32).copy(i,33)),i}},86232:(r,e,t)=>{"use strict";var n=t(23085).Buffer;Object.defineProperty(e,"__esModule",{value:!0}),e.hashPersonalMessage=e.isValidSignature=e.fromRpcSig=e.toRpcSig=e.ecrecover=e.ecsign=void 0;var i=t(83230),o=t(13550),f=t(77124),a=t(91550);function u(r,e){return e?r-(2*e+35):r-27}function s(r){return 0===r||1===r}e.ecsign=function(r,e,t){var n=i.sign(r,e),o=n.recovery;return{r:n.signature.slice(0,32),s:n.signature.slice(32,64),v:t?o+(2*t+35):o+27}},e.ecrecover=function(r,e,t,o,a){var c=n.concat([f.setLength(t,32),f.setLength(o,32)],64),l=u(e,a);if(!s(l))throw new Error("Invalid signature v value");var d=i.recover(r,c,l);return i.publicKeyConvert(d,!1).slice(1)},e.toRpcSig=function(r,e,t,i){if(!s(u(r,i)))throw new Error("Invalid signature v value");return f.bufferToHex(n.concat([f.setLengthLeft(e,32),f.setLengthLeft(t,32),f.toBuffer(r)]))},e.fromRpcSig=function(r){var e=f.toBuffer(r);if(65!==e.length)throw new Error("Invalid signature length");var t=e[64];return t<27&&(t+=27),{v:t,r:e.slice(0,32),s:e.slice(32,64)}},e.isValidSignature=function(r,e,t,n,i){void 0===n&&(n=!0);var f=new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),a=new o("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==e.length||32!==t.length)return!1;if(!s(u(r,i)))return!1;var c=new o(e),l=new o(t);return!(c.isZero()||c.gt(a)||l.isZero()||l.gt(a)||n&&1===l.cmp(f))},e.hashPersonalMessage=function(r){var e=n.from("Ethereum Signed Message:\n"+r.length.toString(),"utf-8");return a.keccak(n.concat([e,r]))}},80884:(r,e,t)=>{"use strict";var n=t(23085).Buffer,i=t(23944),o=t(49604);function f(r){var e=r;if("string"!=typeof e)throw new Error("[ethjs-util] while padding to even, value must be string, is currently "+typeof e+", while padToEven.");return e.length%2&&(e="0"+e),e}function a(r){return"0x"+r.toString(16)}r.exports={arrayContainsArray:function(r,e,t){if(!0!==Array.isArray(r))throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '"+typeof r+"'");if(!0!==Array.isArray(e))throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '"+typeof e+"'");return e[Boolean(t)?"some":"every"]((function(e){return r.indexOf(e)>=0}))},intToBuffer:function(r){var e=a(r);return new n(f(e.slice(2)),"hex")},getBinarySize:function(r){if("string"!=typeof r)throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '"+typeof r+"'.");return n.byteLength(r,"utf8")},isHexPrefixed:i,stripHexPrefix:o,padToEven:f,intToHex:a,fromAscii:function(r){for(var e="",t=0;t<r.length;t++){var n=r.charCodeAt(t).toString(16);e+=n.length<2?"0"+n:n}return"0x"+e},fromUtf8:function(r){return"0x"+f(new n(r,"utf8").toString("hex")).replace(/^0+|0+$/g,"")},toAscii:function(r){var e="",t=0,n=r.length;for("0x"===r.substring(0,2)&&(t=2);t<n;t+=2){var i=parseInt(r.substr(t,2),16);e+=String.fromCharCode(i)}return e},toUtf8:function(r){return new n(f(o(r).replace(/^0+|0+$/g,"")),"hex").toString("utf8")},getKeys:function(r,e,t){if(!Array.isArray(r))throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '"+typeof r+"'");if("string"!=typeof e)throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '"+typeof e+"'.");for(var n=[],i=0;i<r.length;i++){var o=r[i][e];if(t&&!o)o="";else if("string"!=typeof o)throw new Error("invalid abi");n.push(o)}return n},isHexString:function(r,e){return!("string"!=typeof r||!r.match(/^0x[0-9A-Fa-f]*$/)||e&&r.length!==2+2*e)}}}}]);