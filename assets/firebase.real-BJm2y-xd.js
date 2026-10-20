const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-D8d8TPC6.js","./index-CZYznYw5.css"])))=>i.map(i=>d[i]);
import{_ as wn,t as Q,c as xs}from"./index-D8d8TPC6.js";import{r as ve,g as F,_ as yn,a as Fs,b as Bs,d as N,i as Pe,p as In,e as Vs,F as tt,c as _t,C as wt,S as ye,f as yt,q as Ce,E as Et,h as Ws,j as Hs,L as js,k as Tn,l as $s,m as qs,n as Gs,o as zs,s as O,t as Ks,u as Js,v as Xs,w as Ys}from"./index.esm-CgMs5q9O.js";import{doc as p,getDoc as k,getDocs as x,collection as S,setDoc as E,updateDoc as Ie,deleteDoc as kt,onSnapshot as _,initializeFirestore as Qs,memoryLocalCache as Zs,getFirestore as er,writeBatch as ae,query as bn,where as Rn,serverTimestamp as R,runTransaction as oe,Timestamp as tr,FieldPath as nr,connectFirestoreEmulator as sr,enableNetwork as rr,disableNetwork as ir}from"./index.esm-DvDI8AIi.js";var ar="firebase",or="12.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve(ar,or,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="firebasestorage.googleapis.com",kn="storageBucket",cr=2*60*1e3,ur=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends tt{constructor(e,n,s=0){super(ht(e),`Firebase Storage: ${n} (${ht(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,I.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ht(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var y;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(y||(y={}));function ht(t){return"storage/"+t}function vt(){const t="An unknown error occurred, please check the error payload for server response.";return new I(y.UNKNOWN,t)}function lr(t){return new I(y.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dr(t){return new I(y.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(y.UNAUTHENTICATED,t)}function fr(){return new I(y.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pr(t){return new I(y.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gr(){return new I(y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mr(){return new I(y.CANCELED,"User canceled the upload/download.")}function _r(t){return new I(y.INVALID_URL,"Invalid URL '"+t+"'.")}function wr(t){return new I(y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yr(){return new I(y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kn+"' property when initializing the app?")}function Ir(){return new I(y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Tr(){return new I(y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function br(t){return new I(y.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function It(t){return new I(y.INVALID_ARGUMENT,t)}function vn(){return new I(y.APP_DELETED,"The Firebase app was deleted.")}function Rr(t){return new I(y.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ee(t,e){return new I(y.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Re(t){throw new I(y.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=P.makeFromUrl(e,n)}catch{return new P(e,"")}if(s.path==="")return s;throw wr(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),o={bucket:1,path:3};function u(A){A.path_=decodeURIComponent(A.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),w={bucket:1,path:3},T=n===En?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",B=new RegExp(`^https?://${T}/${r}/${b}`,"i"),V=[{regex:c,indices:o,postModify:i},{regex:m,indices:w,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let A=0;A<V.length;A++){const xe=V[A],lt=xe.regex.exec(e);if(lt){const Ms=lt[xe.indices.bucket];let dt=lt[xe.indices.path];dt||(dt=""),s=new P(Ms,dt),xe.postModify(s);break}}if(s==null)throw _r(e);return s}}class Er{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e,n){let s=1,r=null,i=null,a=!1,c=0;function o(){return c===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(m,o())},b)}function d(){i&&clearTimeout(i)}function m(b,...B){if(u){d();return}if(b){d(),l.call(null,b,...B);return}if(o()||a){d(),l.call(null,b,...B);return}s<64&&(s*=2);let V;c===1?(c=2,V=0):V=(s+Math.random())*1e3,h(V)}let w=!1;function T(b){w||(w=!0,d(),!u&&(r!==null?(b||(c=2),clearTimeout(r),h(0)):b||(c=1)))}return h(0),i=setTimeout(()=>{a=!0,T(!0)},n),T}function vr(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){return t!==void 0}function Sr(t){return typeof t=="object"&&!Array.isArray(t)}function At(t){return typeof t=="string"||t instanceof String}function zt(t){return St()&&t instanceof Blob}function St(){return typeof Blob<"u"}function Kt(t,e,n,s){if(s<e)throw It(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw It(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function An(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var ue;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ue||(ue={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,s,r,i,a,c,o,u,l,h,d=!0,m=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=o,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,T)=>{this.resolve_=w,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Fe(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const o=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,u)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===ue.NO_ERROR,o=i.getStatus();if(!c||Pr(o,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===ue.ABORT;s(!1,new Fe(!1,null,l));return}const u=this.successCodes_.indexOf(o)!==-1;s(!0,new Fe(u,i))})},n=(s,r)=>{const i=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const o=this.callback_(c,c.getResponse());Ar(o)?i(o):i()}catch(o){a(o)}else if(c!==null){const o=vt();o.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,o)):a(o)}else if(r.canceled){const o=this.appDelete_?vn():mr();a(o)}else{const o=gr();a(o)}};this.canceled_?n(!1,new Fe(!1,null,!0)):this.backoffId_=kr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&vr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fe{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Or(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Nr(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ur(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Lr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Dr(t,e,n,s,r,i,a=!0,c=!1){const o=An(t.urlParams),u=t.url+o,l=Object.assign({},t.headers);return Ur(l,e),Or(l,n),Nr(l,i),Lr(l,s),new Cr(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xr(...t){const e=Mr();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(St())return new Blob(t);throw new I(y.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Fr(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){if(typeof atob>"u")throw br("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ft{constructor(e,n){this.data=e,this.contentType=n||null}}function Vr(t,e){switch(t){case H.RAW:return new ft(Sn(e));case H.BASE64:case H.BASE64URL:return new ft(Pn(t,e));case H.DATA_URL:return new ft(Hr(e),jr(e))}throw vt()}function Sn(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,a=t.charCodeAt(++n);s=65536|(i&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Wr(t){let e;try{e=decodeURIComponent(t)}catch{throw Ee(H.DATA_URL,"Malformed data URL.")}return Sn(e)}function Pn(t,e){switch(t){case H.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Ee(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case H.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Ee(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Br(e)}catch(r){throw r.message.includes("polyfill")?r:Ee(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Cn{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ee(H.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=$r(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Hr(t){const e=new Cn(t);return e.base64?Pn(H.BASE64,e.rest):Wr(e.rest)}function jr(t){return new Cn(t).contentType}function $r(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){let s=0,r="";zt(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(zt(this.data_)){const s=this.data_,r=Fr(s,e,n);return r===null?null:new te(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new te(s,!0)}}static getBlob(...e){if(St()){const n=e.map(s=>s instanceof te?s.data_:s);return new te(xr.apply(null,n))}else{const n=e.map(a=>At(a)?Vr(H.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(a=>{for(let c=0;c<a.length;c++)r[i++]=a[c]}),new te(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){let e;try{e=JSON.parse(t)}catch{return null}return Sr(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Gr(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Nn(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,e){return e}class v{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||zr}}let Be=null;function Kr(t){return!At(t)||t.length<2?t:Nn(t)}function Un(){if(Be)return Be;const t=[];t.push(new v("bucket")),t.push(new v("generation")),t.push(new v("metageneration")),t.push(new v("name","fullPath",!0));function e(i,a){return Kr(a)}const n=new v("name");n.xform=e,t.push(n);function s(i,a){return a!==void 0?Number(a):a}const r=new v("size");return r.xform=s,t.push(r),t.push(new v("timeCreated")),t.push(new v("updated")),t.push(new v("md5Hash",null,!0)),t.push(new v("cacheControl",null,!0)),t.push(new v("contentDisposition",null,!0)),t.push(new v("contentEncoding",null,!0)),t.push(new v("contentLanguage",null,!0)),t.push(new v("contentType",null,!0)),t.push(new v("metadata","customMetadata",!0)),Be=t,Be}function Jr(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new P(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Xr(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const a=n[i];s[a.local]=a.xform(s,e[a.server])}return Jr(s,t),s}function Ln(t,e,n){const s=On(e);return s===null?null:Xr(t,s,n)}function Yr(t,e,n,s){const r=On(e);if(r===null||!At(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+a(l)+"/o/"+a(h),m=nt(d,n,s),w=An({alt:"media",token:u});return m+w})[0]}function Qr(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Pt{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){if(!t)throw vt()}function Zr(t,e){function n(s,r){const i=Ln(t,r,e);return Dn(i!==null),i}return n}function ei(t,e){function n(s,r){const i=Ln(t,r,e);return Dn(i!==null),Yr(i,r,t.host,t._protocol)}return n}function Mn(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=fr():r=hr():n.getStatus()===402?r=dr(t.bucket):n.getStatus()===403?r=pr(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function xn(t){const e=Mn(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=lr(t.path)),i.serverResponse=r.serverResponse,i}return n}function ti(t,e,n){const s=e.fullServerUrl(),r=nt(s,t.host,t._protocol),i="GET",a=t.maxOperationRetryTime,c=new Pt(r,i,ei(t,n),a);return c.errorHandler=xn(e),c}function ni(t,e){const n=e.fullServerUrl(),s=nt(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function a(o,u){}const c=new Pt(s,r,a,i);return c.successCodes=[200,204],c.errorHandler=xn(e),c}function si(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ri(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=si(null,e)),s}function ii(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let V="";for(let A=0;A<2;A++)V=V+Math.random().toString().slice(2);return V}const o=c();a["Content-Type"]="multipart/related; boundary="+o;const u=ri(e,s,r),l=Qr(u,n),h="--"+o+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+o+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+o+"--",m=te.getBlob(h,s,d);if(m===null)throw Ir();const w={name:u.fullPath},T=nt(i,t.host,t._protocol),b="POST",B=t.maxUploadRetryTime,q=new Pt(T,b,Zr(t,n),B);return q.urlParams=w,q.headers=a,q.body=m.uploadData(),q.errorHandler=Mn(e),q}class ai{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ue.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ue.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ue.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r,i){if(this.sent_)throw Re("cannot .send() more than once");if(Pe(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Re("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Re("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Re("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Re("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class oi extends ai{initXhr(){this.xhr_.responseType="text"}}function Ct(){return new oi}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this._service=e,n instanceof P?this._location=n:this._location=P.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new de(e,n)}get root(){const e=new P(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nn(this._location.path)}get storage(){return this._service}get parent(){const e=qr(this._location.path);if(e===null)return null;const n=new P(this._location.bucket,e);return new de(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Rr(e)}}function ci(t,e,n){t._throwIfRoot("uploadBytes");const s=ii(t.storage,t._location,Un(),new te(e,!0),n);return t.storage.makeRequestWithTokens(s,Ct).then(r=>({metadata:r,ref:t}))}function ui(t){t._throwIfRoot("getDownloadURL");const e=ti(t.storage,t._location,Un());return t.storage.makeRequestWithTokens(e,Ct).then(n=>{if(n===null)throw Tr();return n})}function li(t){t._throwIfRoot("deleteObject");const e=ni(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ct)}function di(t,e){const n=Gr(t._location.path,e),s=new P(t._location.bucket,n);return new de(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){return/^[A-Za-z]+:\/\//.test(t)}function fi(t,e){return new de(t,e)}function Fn(t,e){if(t instanceof Ot){const n=t;if(n._bucket==null)throw yr();const s=new de(n,n._bucket);return e!=null?Fn(s,e):s}else return e!==void 0?di(t,e):t}function pi(t,e){if(e&&hi(e)){if(t instanceof Ot)return fi(t,e);throw It("To use ref(service, url), the first argument must be a Storage instance.")}else return Fn(t,e)}function Jt(t,e){const n=e==null?void 0:e[kn];return n==null?null:P.makeFromBucketSpec(n,t)}function gi(t,e,n,s={}){t.host=`${e}:${n}`;const r=Pe(e);r&&In(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Vs(i,t.app.options.projectId))}class Ot{constructor(e,n,s,r,i,a=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=En,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cr,this._maxUploadRetryTime=ur,this._requests=new Set,r!=null?this._bucket=P.makeFromBucketSpec(r,this._host):this._bucket=Jt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=P.makeFromBucketSpec(this._url,e):this._bucket=Jt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(N(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new de(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new Er(vn());{const a=Dr(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Xt="@firebase/storage",Yt="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="storage";function mi(t,e,n){return t=F(t),ci(t,e,n)}function _i(t){return t=F(t),ui(t)}function wi(t){return t=F(t),li(t)}function Vn(t,e){return t=F(t),pi(t,e)}function yi(t=Bs(),e){t=F(t);const s=yn(t,Bn).getImmediate({identifier:e}),r=Fs("storage");return r&&Wn(s,...r),s}function Wn(t,e,n,s={}){gi(t,e,n,s)}function Ii(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ot(n,s,r,e,ye)}function Ti(){_t(new wt(Bn,Ii,"PUBLIC").setMultipleInstances(!0)),ve(Xt,Yt,""),ve(Xt,Yt,"esm2020")}Ti();function Hn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bi=Hn,jn=new Et("auth","Firebase",Hn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new js("@firebase/auth");function Ri(t,...e){Ge.logLevel<=Tn.WARN&&Ge.warn(`Auth (${ye}): ${t}`,...e)}function He(t,...e){Ge.logLevel<=Tn.ERROR&&Ge.error(`Auth (${ye}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,...e){throw Ut(t,...e)}function D(t,...e){return Ut(t,...e)}function Nt(t,e,n){const s={...bi(),[e]:n};return new Et("auth","Firebase",s).create(e,{appName:t.name})}function ie(t){return Nt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $n(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&$(t,"argument-error"),Nt(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ut(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jn.create(t,...e)}function g(t,e,...n){if(!t)throw Ut(e,...n)}function z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw He(e),new Error(e)}function X(t,e){t||z(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Ei(){return Qt()==="http:"||Qt()==="https:"}function Qt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ei()||$s()||"connection"in navigator)?navigator.onLine:!0}function vi(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.shortDelay=e,this.longDelay=n,X(n>e,"Short delay should be less than long delay!"),this.isMobile=Ws()||Hs()}get(){return ki()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){X(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pi=new Oe(3e4,6e4);function Dt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Te(t,e,n,s,r={}){return Gn(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=Ce({...a,key:t.config.apiKey}).slice(1),o=await t._getAdditionalHeaders();o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:o,...i};return Gs()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Pe(t.emulatorConfig.host)&&(u.credentials="include"),qn.fetch()(await zn(t,t.config.apiHost,n,c),u)})}async function Gn(t,e,n){t._canInitEmulator=!1;const s={...Ai,...e};try{const r=new Oi(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ve(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[o,u]=c.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ve(t,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw Ve(t,"email-already-in-use",a);if(o==="USER_DISABLED")throw Ve(t,"user-disabled",a);const l=s[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nt(t,l,u);$(t,l)}}catch(r){if(r instanceof tt)throw r;$(t,"network-request-failed",{message:String(r)})}}async function Ci(t,e,n,s,r={}){const i=await Te(t,e,n,s,r);return"mfaPendingCredential"in i&&$(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function zn(t,e,n,s){const r=`${e}${n}?${s}`,i=t,a=i.config.emulator?Lt(t.config,r):`${t.config.apiScheme}://${r}`;return Si.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Oi{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(D(this.auth,"network-request-failed")),Pi.get())})}}function Ve(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=D(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return Te(t,"POST","/v1/accounts:delete",e)}async function ze(t,e){return Te(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ui(t,e=!1){const n=F(t),s=await n.getIdToken(e),r=Mt(s);g(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ke(pt(r.auth_time)),issuedAtTime:ke(pt(r.iat)),expirationTime:ke(pt(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pt(t){return Number(t)*1e3}function Mt(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return He("JWT malformed, contained fewer than 3 sections"),null;try{const r=qs(n);return r?JSON.parse(r):(He("Failed to decode base64 JWT payload"),null)}catch(r){return He("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Zt(t){const e=Mt(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof tt&&Li(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Li({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ke(this.lastLoginAt),this.creationTime=ke(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(t){var h;const e=t.auth,n=await t.getIdToken(),s=await Ae(t,ze(e,{idToken:n}));g(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(h=r.providerUserInfo)!=null&&h.length?Kn(r.providerUserInfo):[],a=xi(t.providerData,i),c=t.isAnonymous,o=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?o:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new bt(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function Mi(t){const e=F(t);await Ke(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xi(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Kn(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){const n=await Gn(t,{},async()=>{const s=Ce({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=await zn(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:c,body:s};return t.emulatorConfig&&Pe(t.emulatorConfig.host)&&(o.credentials="include"),qn.fetch()(a,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bi(t,e){return Te(t,"POST","/v2/accounts:revokeToken",Dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");const n=Zt(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Fi(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new pe;return s&&(g(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(g(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(g(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pe,this.toJSON())}_performRefresh(){return z("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class L{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Di(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ae(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ui(this,e)}reload(){return Mi(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new L({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ke(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(N(this.auth.app))return Promise.reject(ie(this.auth));const e=await this.getIdToken();return await Ae(this,Ni(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,o=n._redirectEventId??void 0,u=n.createdAt??void 0,l=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:m,providerData:w,stsTokenManager:T}=n;g(h&&T,e,"internal-error");const b=pe.fromJSON(this.name,T);g(typeof h=="string",e,"internal-error"),ee(s,e.name),ee(r,e.name),g(typeof d=="boolean",e,"internal-error"),g(typeof m=="boolean",e,"internal-error"),ee(i,e.name),ee(a,e.name),ee(c,e.name),ee(o,e.name),ee(u,e.name),ee(l,e.name);const B=new L({uid:h,auth:e,email:r,emailVerified:d,displayName:s,isAnonymous:m,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:b,createdAt:u,lastLoginAt:l});return w&&Array.isArray(w)&&(B.providerData=w.map(q=>({...q}))),o&&(B._redirectEventId=o),B}static async _fromIdTokenResponse(e,n,s=!1){const r=new pe;r.updateFromServerResponse(n);const i=new L({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ke(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];g(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Kn(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new pe;c.updateFromIdToken(s);const o=new L({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new bt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(o,u),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Map;function K(t){X(t instanceof Function,"Expected a class definition");let e=en.get(t);return e?(X(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,en.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jn.type="NONE";const tn=Jn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e,n){return`firebase:${t}:${e}:${n}`}class ge{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=je(this.userKey,r.apiKey,i),this.fullPersistenceKey=je("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ze(this.auth,{idToken:e}).catch(()=>{});return n?L._fromGetAccountInfoResponse(this.auth,n,e):null}return L._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ge(K(tn),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||K(tn);const a=je(s,e.config.apiKey,e.name);let c=null;for(const u of n)try{const l=await u._get(a);if(l){let h;if(typeof l=="string"){const d=await ze(e,{idToken:l}).catch(()=>{});if(!d)break;h=await L._fromGetAccountInfoResponse(e,d,l)}else h=L._fromJSON(e,l);u!==i&&(c=h),i=u;break}}catch{}const o=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!o.length?new ge(i,e,s):(i=o[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new ge(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ts(e))return"Blackberry";if(ns(e))return"Webos";if(Yn(e))return"Safari";if((e.includes("chrome/")||Qn(e))&&!e.includes("edge/"))return"Chrome";if(es(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Xn(t=O()){return/firefox\//i.test(t)}function Yn(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qn(t=O()){return/crios\//i.test(t)}function Zn(t=O()){return/iemobile/i.test(t)}function es(t=O()){return/android/i.test(t)}function ts(t=O()){return/blackberry/i.test(t)}function ns(t=O()){return/webos/i.test(t)}function xt(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vi(t=O()){var e;return xt(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Wi(){return Ks()&&document.documentMode===10}function ss(t=O()){return xt(t)||es(t)||ns(t)||ts(t)||/windows phone/i.test(t)||Zn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e=[]){let n;switch(t){case"Browser":n=nn(O());break;case"Worker":n=`${nn(O())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ye}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const o=e(i);a(o)}catch(o){c(o)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t,e={}){return Te(t,"GET","/v2/passwordPolicy",Dt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=6;class qi{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$i,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sn(this),this.idTokenSubscription=new sn(this),this.beforeStateQueue=new Hi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=K(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ge.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ze(this,{idToken:e}),s=await L._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(N(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===c)&&(o!=null&&o.user)&&(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ke(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(N(this.app))return Promise.reject(ie(this));const n=e?F(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return N(this.app)?Promise.reject(ie(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return N(this.app)?Promise.reject(ie(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(K(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ji(this),n=new qi(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Et("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Bi(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&K(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[K(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,s,r);return()=>{a=!0,o()}}else{const o=e.addObserver(n);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(N(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ri(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function be(t){return F(t)}class sn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Js(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zi(t){Ft=t}function Ki(t){return Ft.loadJS(t)}function Ji(){return Ft.gapiScript}function Xi(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t,e){const n=yn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(yt(i,e??{}))return r;$(r,"already-initialized")}return n.initialize({options:e})}function Qi(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(K);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zi(t,e,n){const s=be(t);g(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!0,i=is(e),{host:a,port:c}=ea(e),o=c===null?"":`:${c}`,u={url:`${i}//${a}${o}/`},l=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){g(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),g(yt(u,s.config.emulator)&&yt(l,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=l,s.settings.appVerificationDisabledForTesting=!0,Pe(a)&&In(`${i}//${a}${o}`)}function is(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ea(t){const e=is(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:rn(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:rn(a)}}}function rn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return z("not implemented")}_getIdTokenResponse(e){return z("not implemented")}_linkToIdToken(e,n){return z("not implemented")}_getReauthenticationResolver(e){return z("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(t,e){return Ci(t,"POST","/v1/accounts:signInWithIdp",Dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="http://localhost";class he extends as{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new he(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const a=new he(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return me(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,me(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,me(e,n)}buildRequest(){const e={requestUri:ta,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ce(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends st{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends Ne{constructor(){super("facebook.com")}static credential(e){return he._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ne.credential(e.oauthAccessToken)}catch{return null}}}ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";ne.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W extends Ne{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return he._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return W.credential(n,s)}catch{return null}}}W.GOOGLE_SIGN_IN_METHOD="google.com";W.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Ne{constructor(){super("github.com")}static credential(e){return he._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return se.credential(e.oauthAccessToken)}catch{return null}}}se.GITHUB_SIGN_IN_METHOD="github.com";se.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends Ne{constructor(){super("twitter.com")}static credential(e,n){return he._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return re.credential(n,s)}catch{return null}}}re.TWITTER_SIGN_IN_METHOD="twitter.com";re.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await L._fromIdTokenResponse(e,s,r),a=an(s);return new _e({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=an(s);return new _e({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function an(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends tt{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Je.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Je(e,n,s,r)}}function os(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Je._fromErrorAndOperation(t,i,e,s):i})}async function na(t,e,n=!1){const s=await Ae(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _e._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e,n=!1){const{auth:s}=t;if(N(s.app))return Promise.reject(ie(s));const r="reauthenticate";try{const i=await Ae(t,os(s,r,e,t),n);g(i.idToken,s,"internal-error");const a=Mt(i.idToken);g(a,s,"internal-error");const{sub:c}=a;return g(t.uid===c,s,"user-mismatch"),_e._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t,e,n=!1){if(N(t.app))return Promise.reject(ie(t));const s="signIn",r=await os(t,s,e),i=await _e._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function ia(t,e,n,s){return F(t).onAuthStateChanged(e,n,s)}function aa(t){return F(t).signOut()}const Xe="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xe,"1"),this.storage.removeItem(Xe),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=1e3,ca=10;class us extends cs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ss(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,o)=>{this.notifyListeners(a,o)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Wi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ca):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},oa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}us.type="LOCAL";const ua=us;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends cs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ls.type="SESSION";const la=ls;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new rt(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async u=>u(n.origin,i)),o=await da(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,o)=>{const u=Bt("",20);r.port1.start();const l=setTimeout(()=>{o(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(d.data.response);break;default:clearTimeout(l),clearTimeout(i),o(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){return window}function fa(t){j().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(){return typeof j().WorkerGlobalScope<"u"&&typeof j().importScripts=="function"}async function pa(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ga(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ma(){return ds()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="firebaseLocalStorageDb",_a=1,Ye="firebaseLocalStorage",fs="fbase_key";class Ue{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function it(t,e){return t.transaction([Ye],e?"readwrite":"readonly").objectStore(Ye)}function wa(){const t=indexedDB.deleteDatabase(hs);return new Ue(t).toPromise()}function ps(){const t=indexedDB.open(hs,_a);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ye,{keyPath:fs})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ye)?e(s):(s.close(),await wa(),e(await ps()))})})}async function on(t,e,n){const s=it(t,!0).put({[fs]:e,value:n});return new Ue(s).toPromise()}async function ya(t,e){const n=it(t,!1).get(e),s=await new Ue(n).toPromise();return s===void 0?null:s.value}function cn(t,e){const n=it(t,!0).delete(e);return new Ue(n).toPromise()}const Ia=800,Ta=3;class gs{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ps(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ta)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return ds()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rt._getInstance(ma()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await pa(),!this.activeServiceWorker)return;this.sender=new ha(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ga()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await on(e,Xe,"1"),await cn(e,Xe)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>on(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ya(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=it(r,!1).getAll();return new Ue(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ia)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gs.type="LOCAL";const ba=gs;new Oe(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return e?K(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends as{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return me(e,this._buildIdpRequest())}_linkToIdToken(e,n){return me(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return me(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ra(t){return ra(t.auth,new Wt(t),t.bypassAuthState)}function Ea(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),sa(n,new Wt(t),t.bypassAuthState)}async function ka(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),na(n,new Wt(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ra;case"linkViaPopup":case"linkViaRedirect":return ka;case"reauthViaPopup":case"reauthViaRedirect":return Ea;default:$(this.auth,"internal-error")}}resolve(e){X(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){X(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Oe(2e3,1e4);async function Aa(t,e,n){if(N(t.app))return Promise.reject(D(t,"operation-not-supported-in-this-environment"));const s=be(t);$n(t,e,st);const r=Vt(s,n);return new ce(s,"signInViaPopup",e,r).executeNotNull()}class ce extends ms{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ce.currentPopupAction&&ce.currentPopupAction.cancel(),ce.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){X(this.filter.length===1,"Popup operations only handle one event");const e=Bt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(D(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(D(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ce.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(D(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,va.get())};e()}}ce.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="pendingRedirect",$e=new Map;class Pa extends ms{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=$e.get(this.auth._key());if(!e){try{const s=await Ca(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}$e.set(this.auth._key(),e)}return this.bypassAuthState||$e.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ca(t,e){const n=ws(e),s=_s(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function Oa(t,e){return _s(t)._set(ws(e),"true")}function Na(t,e){$e.set(t._key(),e)}function _s(t){return K(t._redirectPersistence)}function ws(t){return je(Sa,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e,n){return Ua(t,e,n)}async function Ua(t,e,n){if(N(t.app))return Promise.reject(ie(t));const s=be(t);$n(t,e,st),await s._initializationPromise;const r=Vt(s,n);return await Oa(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function La(t,e){return await be(t)._initializationPromise,ys(t,e,!1)}async function ys(t,e,n=!1){if(N(t.app))return Promise.reject(ie(t));const s=be(t),r=Vt(s,e),a=await new Pa(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=10*60*1e3;class Ma{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xa(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Is(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(D(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Da&&this.cachedEventUids.clear(),this.cachedEventUids.has(ln(e))}saveEventToCache(e){this.cachedEventUids.add(ln(e)),this.lastProcessedEventTime=Date.now()}}function ln(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Is({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xa(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Is(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t,e={}){return Te(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Va=/^https?/;async function Wa(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fa(t);for(const n of e)try{if(Ha(n))return}catch{}$(t,"unauthorized-domain")}function Ha(t){const e=Tt(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!Va.test(n))return!1;if(Ba.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Oe(3e4,6e4);function dn(){const t=j().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $a(t){return new Promise((e,n)=>{var r,i,a;function s(){dn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dn(),n(D(t,"network-request-failed"))},timeout:ja.get()})}if((i=(r=j().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=j().gapi)!=null&&a.load)s();else{const c=Xi("iframefcb");return j()[c]=()=>{gapi.load?s():n(D(t,"network-request-failed"))},Ki(`${Ji()}?onload=${c}`).catch(o=>n(o))}}).catch(e=>{throw qe=null,e})}let qe=null;function qa(t){return qe=qe||$a(t),qe}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Oe(5e3,15e3),za="__/auth/iframe",Ka="emulator/auth/iframe",Ja={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ya(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lt(e,Ka):`https://${t.config.authDomain}/${za}`,s={apiKey:e.apiKey,appName:t.name,v:ye},r=Xa.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ce(s).slice(1)}`}async function Qa(t){const e=await qa(t),n=j().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Ya(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ja,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=D(t,"network-request-failed"),c=j().setTimeout(()=>{i(a)},Ga.get());function o(){j().clearTimeout(c),r(s)}s.ping(o).then(o,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eo=500,to=600,no="_blank",so="http://localhost";class hn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ro(t,e,n,s=eo,r=to){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const o={...Za,width:s.toString(),height:r.toString(),top:i,left:a},u=O().toLowerCase();n&&(c=Qn(u)?no:n),Xn(u)&&(e=e||so,o.scrollbars="yes");const l=Object.entries(o).reduce((d,[m,w])=>`${d}${m}=${w},`,"");if(Vi(u)&&c!=="_self")return io(e||"",c),new hn(null);const h=window.open(e||"",c,l);g(h,t,"popup-blocked");try{h.focus()}catch{}return new hn(h)}function io(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="__/auth/handler",oo="emulator/auth/handler",co=encodeURIComponent("fac");async function fn(t,e,n,s,r,i){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ye,eventId:r};if(e instanceof st){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Xs(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries({}))a[l]=h}if(e instanceof Ne){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const l of Object.keys(c))c[l]===void 0&&delete c[l];const o=await t._getAppCheckToken(),u=o?`#${co}=${encodeURIComponent(o)}`:"";return`${uo(t)}?${Ce(c).slice(1)}${u}`}function uo({config:t}){return t.emulator?Lt(t,oo):`https://${t.authDomain}/${ao}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="webStorageSupport";class lo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=la,this._completeRedirectFn=ys,this._overrideRedirectResult=Na}async _openPopup(e,n,s,r){var a;X((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await fn(e,n,s,Tt(),r);return ro(e,i,Bt())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await fn(e,n,s,Tt(),r);return fa(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(X(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Qa(e),s=new Ma(e);return n.register("authEvent",r=>(g(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gt,{type:gt},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[gt];i!==void 0&&n(!!i),$(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wa(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ss()||Yn()||xt()}}const ho=lo;var pn="@firebase/auth",gn="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function go(t){_t(new wt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;g(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const o={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rs(t)},u=new Gi(s,r,i,o);return Qi(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_t(new wt("auth-internal",e=>{const n=be(e.getProvider("auth").getImmediate());return(s=>new fo(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ve(pn,gn,po(t)),ve(pn,gn,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=5*60;zs("authIdTokenMaxAge");function _o(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}zi({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=D("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",_o().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});go("Browser");const Ts={apiKey:"AIzaSyB8QE3JylXkXWmg_rF2ZuczixnRYJZlRnE",authDomain:"airmore-task-management-app.firebaseapp.com",projectId:"airmore-task-management-app",storageBucket:"airmore-task-management-app.firebasestorage.app",messagingSenderId:"674161520247",appId:"1:674161520247:web:fe0e0f9d0656008fbaa072",measurementId:"G-VFS9X3L72E"},Qe=Ys(Ts),C=Yi(Qe,{persistence:[ba,ua],popupRedirectResolver:ho}),bs={server:0,since:Date.now()},Y=t=>{bs.server+=Math.max(0,t|0)};try{window.__hittatsuReads=bs}catch{}const f=(()=>{try{return Qs(Qe,{localCache:Zs()})}catch(t){return console.warn("Firestore永続キャッシュの初期化に失敗。キャッシュ無しで継続します:",t&&t.message),er(Qe)}})();try{typeof indexedDB<"u"&&indexedDB.deleteDatabase("firestore/[DEFAULT]/"+Ts.projectId+"/main");const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e)||"";n.startsWith("firestore_")&&t.push(n)}t.forEach(e=>localStorage.removeItem(e))}catch{}const Rs=(()=>{try{return/^(localhost|127\.0\.0\.1|[a-z0-9-]+\.localhost)$/.test(location.hostname)&&localStorage.getItem("hittatsu_emulator")==="1"}catch{return!1}})();if(Rs)try{sr(f,"127.0.0.1",8080),Zi(C,"http://127.0.0.1:9099",{disableWarnings:!0}),console.warn("[firebase] エミュレーターに接続しています(開発用)"),window.__fsNetwork={off:()=>ir(f),on:()=>rr(f)}}catch(t){console.warn("[firebase] emulator setup failed",t)}function Do(t){return ia(C,t)}async function wo(){const t=new W;t.setCustomParameters({prompt:"select_account"}),t.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"),t.addScope("https://www.googleapis.com/auth/calendar.readonly"),t.addScope("https://www.googleapis.com/auth/drive.metadata.readonly");try{const e=await Aa(C,t);return Es(e),e.user}catch(e){const n=e&&e.code||"";if(n==="auth/popup-blocked"){const{showPopupBlockedHelp:s}=await wn(async()=>{const{showPopupBlockedHelp:r}=await import("./index-D8d8TPC6.js").then(i=>i.p);return{showPopupBlockedHelp:r}},__vite__mapDeps([0,1]),import.meta.url);return s({what:"Googleへのログイン",onRetry:()=>{wo().catch(()=>{})},altLabel:"このまま画面を切り替えてログイン",onAlt:()=>{un(C,t).catch(()=>{})}}),null}if(n==="auth/cancelled-popup-request"||n==="auth/popup-closed-by-user"||n==="auth/operation-not-supported-in-this-environment")return await un(C,t),null;throw e}}function Es(t){try{const e=W.credentialFromResult(t);e&&e.accessToken&&(window.__sheetsTokenFromLogin={token:e.accessToken,at:Date.now()})}catch{}}async function Mo(){try{const t=await La(C);return t&&Es(t),(t==null?void 0:t.user)||null}catch(t){return console.warn("redirect result:",t),null}}async function xo(){await aa(C)}const J={ADMIN:"admin",EDITOR:"editor",VIEWER:"viewer"};function Fo(t){return t===J.ADMIN||t===J.EDITOR||t===J.VIEWER}function Bo(t){return t===J.ADMIN||t===J.EDITOR}function Vo(t){return t===J.ADMIN}function Wo(){try{const e=new URL(window.location.href).searchParams.get("ws");if(e)return localStorage.setItem("hittatsu_current_ws",e),e}catch{}return localStorage.getItem("hittatsu_current_ws")||null}async function Ho(t){if(!t)return null;const e=await k(p(f,"workspaces",t));return e.exists()?{id:e.id,...e.data()}:null}function jo(t,e){return!t||!e?null:(t.budgetRoles||{})[e]||null}function yo(t,e){if(!t||!e)return!1;const n=(t.authMembers||[]).find(s=>s&&s.email===e);return n&&n.role==="owner"}async function $o(t,e,n){if(!t||!e||!n)return null;const s=(n.budgetRoles||{})[e];if(s)return s;const r=yo(n,e)?J.ADMIN:J.VIEWER;try{const i={...n.budgetRoles||{},[e]:r};return await Ie(p(f,"workspaces",t),{budgetRoles:i}),r}catch(i){return console.warn("ensureRoleAtFirstAccess failed:",i),null}}async function Z(t,e,n,s,r=!0){return oe(f,async i=>{const a=await i.get(t);if(!r&&!a.exists())return!1;const o={...a.exists()?(a.data()||{})[e]||{}:{}};return s==null||s===""?delete o[n]:o[n]=s,r?i.set(t,{...a.exists()?a.data():{},[e]:o,updatedAt:R()}):i.update(t,{[e]:o}),!0})}async function qo(t,e,n){return!t||!e?!1:Z(p(f,"workspaces",t),"userCompanies",e,n,!1)}async function Go(t){if(!t)return[];try{const e=await k(p(f,"workspaces",t,"budget","airmore-budget-v4"));if(!e.exists())return[];const n=e.data()||{};let s=null;try{s=JSON.parse(n.value||"{}")}catch{s={}}return Array.isArray(s.orgs)?s.orgs.map(r=>r.name).filter(Boolean):[]}catch(e){return console.warn("getBudgetOrgs failed:",e),[]}}async function zo(t,e,n){return!t||!e?!1:Z(p(f,"workspaces",t),"budgetRoles",e,n,!1)}function Ko(t,e){return _(p(f,"workspaces",t),n=>{n.exists()?e({id:n.id,...n.data()}):e(null)})}const Io=t=>S(f,"workspaces",t,"budget");async function Jo(t,e){const n=await k(p(f,"workspaces",t,"budget",Ht(e)));return n.exists()?(n.data()||{}).value??null:null}async function Xo(t,e,n){await E(p(f,"workspaces",t,"budget",Ht(e)),{key:e,value:n,updatedAt:R()})}async function Yo(t,e){await kt(p(f,"workspaces",t,"budget",Ht(e)))}function Qo(t,e){return _(Io(t),n=>{const s={};n.forEach(r=>{const i=r.data();s[i.key||r.id]=i.value}),e(s)})}function Ht(t){return String(t).replace(/[/.#$\[\]]/g,"_").slice(0,250)}const ks=new Set(["sarazawa@n-airmore.com"]);function Zo(t){return!!t&&ks.has(t)}function ec(t,e){return t?ks.has(t)?J.ADMIN:(e||{})[t]||null:null}const Rt=()=>p(f,"globalBudget","roles"),we=()=>p(f,"globalBudget","data"),vs=()=>p(f,"globalBudget","userCompanies"),jt=()=>p(f,"globalBudget","menuConfig"),As=()=>p(f,"globalBudget","userDepts"),Ss=()=>p(f,"globalBudget","userTitles"),Ps=()=>p(f,"globalBudget","noticeRead"),Ze=()=>p(f,"globalBudget","orgChart"),Cs=()=>p(f,"globalBudget","userRoles"),et=()=>p(f,"globalBudget","users");function tc(t,e){return _(Rt(),n=>{t(n.exists()?n.data().roles||{}:{})},e)}async function To(t,e){const n=await k(Rt()),r={...n.exists()?n.data().roles||{}:{}};e?r[t]=e:delete r[t],await E(Rt(),{roles:r,updatedAt:R()})}function nc(t,e){return _(we(),t,e)}async function sc(){const t=await k(we());return t.exists()?t.data():null}async function rc(t,e){await E(we(),{value:t,updatedAt:R(),_writer:e})}async function ic(t,e){return oe(f,async n=>{const s=await n.get(we()),r=s.exists()&&(s.data()||{}).value||null,i=t(r);return n.set(we(),{value:i,updatedAt:R(),_writer:e}),i})}function ac(t,e){return _(Cs(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function oc(t,e){await Z(Cs(),"map",String(t).toLowerCase(),e)}function cc(t,e){return _(Ze(),n=>{const s=n.exists()?n.data():{};t({companies:s.companies||[],startMonth:s.startMonth||0})},e)}async function uc(t,e){await E(Ze(),{companies:t||[],startMonth:e||4,updatedAt:R()})}async function lc(t,e){return oe(f,async n=>{const s=await n.get(Ze()),r=s.exists()?s.data()||{}:{},i=t(Array.isArray(r.companies)?r.companies:[]);return n.set(Ze(),{companies:i,startMonth:e||r.startMonth||4,updatedAt:R()}),i})}function dc(t,e){return _(As(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function hc(t,e){return _(Ps(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function fc(t,e){await Z(Ps(),"map",String(t).toLowerCase(),e||[])}function pc(t,e){return _(Ss(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function gc(t,e){await Z(Ss(),"map",String(t).toLowerCase(),e)}async function mc(t,e){await Z(As(),"map",String(t).toLowerCase(),e)}function _c(t,e){return _(vs(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function wc(t,e){return _(jt(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function yc(t,e){const n=String(t||"").toLowerCase();if(!n)return;const s=await k(et()),i=(s.exists()?s.data().map||{}:{})[n];i&&i.name===(e||"")||await Z(et(),"map",n,{email:t,name:e||"",at:new Date().toISOString()})}function Ic(t,e){return _(et(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function Tc(){const t=await k(et());return t.exists()?t.data().map||{}:{}}async function bc(t,e){t&&await E(p(f,"globalBudget","clients"),{map:{[t]:e}},{merge:!0})}async function Rc(){const t=await k(p(f,"globalBudget","clients"));return t.exists()?t.data().map||{}:{}}async function Ec(t){await E(jt(),{map:t,updatedAt:R()})}async function kc(t,e){await Z(jt(),"map",t,e&&e.length?e:void 0)}const at=t=>p(f,"salesWs",t),M=(t,e)=>S(f,"salesWs",t,e);function vc(t,e,n){return _(at(t),s=>e(s.exists()?s.data():null),n)}async function Ac(t,e){await E(at(t),{...e,updatedAt:R()},{merge:!0})}async function Sc(t,e){const n=at(t);return oe(f,async s=>{const r=await s.get(n),i=r.exists()?r.data()||{}:{},a=e(i)||{};return Object.keys(a).length?(r.exists()?s.update(n,{...a,updatedAt:R()}):s.set(n,{...a,updatedAt:R()}),a):{}})}function Pc(t,e,n,s){return _(M(t,e),r=>{r.metadata.fromCache||Y(r.docChanges().length),n(r.docs.map(i=>i.data()))},s)}async function Cc(t,e,n,s){const r=[...n.map(i=>({kind:"set",it:i})),...(s||[]).map(i=>({kind:"del",id:i}))];for(let i=0;i<r.length;i+=400){const a=ae(f);for(const c of r.slice(i,i+400))c.kind==="set"?a.set(p(M(t,e),c.it.id),c.it):a.delete(p(M(t,e),c.id));await a.commit()}}async function Oc(t,e,n,s){const r=new Array(n.length),i=async a=>{const c=p(M(t,e),a.id);return await oe(f,async u=>{const l=await u.get(c),h=s(a,l.exists()?l.data():null);return h==null?null:(u.set(c,h),h)})};for(let a=0;a<n.length;a+=8){const c=n.slice(a,a+8);(await Promise.all(c.map(i))).forEach((u,l)=>r[a+l]=u)}return r}async function Nc(t,e){await E(p(M(t,"attachments"),e.id),e)}async function Uc(t,e,n,s){const r=ae(f);for(const i of n)r.set(p(M(t,"attachments"),i.id),i);r.set(p(M(t,"attachments"),e.id),e);for(let i=n.length;i<(s||0);i++)r.delete(p(M(t,"attachments"),`${e.id}#${i}`));await r.commit()}async function Lc(t,e,n){if(n>0){const s=ae(f);s.delete(p(M(t,"attachments"),e));for(let r=0;r<n;r++)s.delete(p(M(t,"attachments"),`${e}#${r}`));await s.commit();return}await kt(p(M(t,"attachments"),e))}async function Dc(t){return(await x(bn(S(f,"workspaces"),Rn("memberEmails","array-contains",t)))).docs.map(n=>{const s=n.data()||{};return{id:n.id,name:s.wsName||s.profile&&s.profile.companyName||n.id,statuses:Array.isArray(s.statuses)?s.statuses:[],members:(Array.isArray(s.authMembers)?s.authMembers:[]).map(r=>r&&r.name).filter(Boolean),schema:Number(s._schemaVersion||0)}}).sort((n,s)=>n.name.localeCompare(s.name,"ja"))}async function Os(t){try{const e=await k(p(f,"sync3","pm-"+t));return e.exists()&&!!(e.data()||{}).migratedAt}catch{return!1}}async function Mc(t){const e=await Os(t);return(await x(e?S(f,"sync3","pm-"+t,"goals"):S(f,"workspaces",t,"goals"))).docs.map(s=>{const r=s.data()||{};return e&&r._deleted?null:{id:r.id||s.id,name:r.name||"",status:r.status||""}}).filter(Boolean)}async function xc(t,e){const n=p(f,"workspaces",t),s=await Os(t),[r,i,a]=await Promise.all([k(n),x(S(f,"workspaces",t,"tasks")),s?x(S(f,"sync3","pm-"+t,"tasks")):Promise.resolve(null)]),c=r.data()||{},o=new Set(i.docs.map(d=>d.id));a&&a.docs.forEach(d=>o.add(d.id)),(c._tombstones||[]).forEach(d=>d&&d.kind==="tasks"&&d.id&&o.add(d.id));let u=Number(c.seq&&c.seq.dailyTask||0);o.forEach(d=>{const m=/^D-(\d+)$/.exec(d);m&&(u=Math.max(u,Number(m[1])))});let l="";for(let d=0;d<1e3&&(u++,l="D-"+String(u).padStart(3,"0"),!!o.has(l));d++);const h={...e,id:l,_modAt:Date.now()};if(s){const{enc:d}=await wn(async()=>{const{enc:T}=await import("./index-D8d8TPC6.js").then(b=>b.k);return{enc:T}},__vite__mapDeps([0,1]),import.meta.url),{_modAt:m,...w}=h;await E(p(f,"sync3","pm-"+t,"tasks",l),{...d(w),_schema:3,_at:Date.now(),_by:C.currentUser&&C.currentUser.email||"",...U()})}else await E(p(f,"workspaces",t,"tasks",l),h);try{await Ie(n,{"seq.dailyTask":u})}catch(d){console.warn("seq.dailyTask の更新に失敗(タスクは追加済み):",d)}return l}let We=null,mn=!1;const Ns=()=>{if(!We&&(We=yi(Qe),Rs&&!mn)){mn=!0;try{Wn(We,"127.0.0.1",9199)}catch{}}return We};async function Fc(t,e,n){const s=Vn(Ns(),t);return await mi(s,e,{contentType:n||void 0}),await _i(s)}async function Bc(t){try{await wi(Vn(Ns(),t))}catch(e){if(e&&e.code==="storage/object-not-found")return;throw e}}const Le=t=>p(f,"salesMasters",t),le=t=>S(f,"salesWs",t,"masters"),bo=8e5,_n=25e4,Ro=t=>new TextEncoder().encode(t).length,Eo=t=>/exceeds the maximum allowed size|too large|INVALID_ARGUMENT/i.test(String((t==null?void 0:t.message)||t)),Se=new Set;function $t(t){const e=t.find(s=>s._id==="head");if(!e||!e.of)return null;const n=t.filter(s=>s.part!=null&&s.rev===e.rev).sort((s,r)=>s.part-r.part);if(n.length!==e.of||n.some((s,r)=>s.part!==r))return null;try{return JSON.parse(n.map(s=>s.data).join(""))}catch{return null}}const G=(t,e)=>S(f,"salesWs",t,e),mt=25e4;function qt(t){const e={},n=new Map;return t.forEach(s=>{if(s._id.includes("#")){const[r]=s._id.split("#");n.set(r,[...n.get(r)||[],s])}}),t.forEach(s=>{if(!s._id.includes("#")){if(s.chunks){const r=(n.get(s._id)||[]).filter(i=>i.rev===s.rev).sort((i,a)=>i.part-a.part);if(r.length!==s.chunks)return;try{e[s._id]=JSON.parse(r.map(i=>i.data).join(""))}catch{}}else if(s.json!==void 0)try{e[s._id]=JSON.parse(s.json)}catch{}}}),e}async function Vc(t,e){const n=await x(G(t,"mFields")),s=qt(n.docs.map(o=>({_id:o.id,...o.data()}))),r=e(s)||{},i=Object.keys(r);if(!i.length)return{};const a=ae(f),c=new Set(n.docs.map(o=>o.id));for(const o of i){const u=JSON.stringify(r[o]===void 0?null:r[o]),l=String(Date.now());if(c.forEach(h=>{h.startsWith(o+"#")&&a.delete(p(G(t,"mFields"),h))}),u.length<=mt)a.set(p(G(t,"mFields"),o),{json:u,updatedAt:R()});else{const h=[];for(let d=0;d<u.length;d+=mt)h.push(u.slice(d,d+mt));h.forEach((d,m)=>a.set(p(G(t,"mFields"),o+"#"+m),{part:m,rev:l,data:d})),a.set(p(G(t,"mFields"),o),{chunks:h.length,rev:l,updatedAt:R()})}}return await a.commit(),r}function Wc(t,e,n){let s,r,i,a;const c=()=>{if(s===void 0||r===void 0||i===void 0||a===void 0)return;const d={},m=a||{},w=[];for(const[T,b]of Object.entries(m))T==="customers"||T==="products"||T.startsWith("_")||T==="updatedAt"||T in i||(d[T]=b,w.push(T));Object.assign(d,i),d.customers=s.length?s:m.customers||[],d.products=r.length?r:m.products||[],d._legacyLists={customers:!s.length,products:!r.length},d._legacyFields=w,e(d)},o=_(G(t,"mCustomers"),d=>{s=d.docs.map(m=>m.data()),c()},n),u=_(G(t,"mProducts"),d=>{r=d.docs.map(m=>m.data()),c()},n),l=_(G(t,"mFields"),d=>{i=qt(d.docs.map(m=>({_id:m.id,...m.data()}))),c()},n),h=Us(t,d=>{a=d||null,c()},n);return()=>{o(),u(),l(),h()}}function Hc(t,e,n){let s,r;const i=()=>{if(s===void 0||r===void 0)return;const o={},u=[];for(const[l,h]of Object.entries(r||{}))l==="customers"||l==="products"||l.startsWith("_")||l==="updatedAt"||l in s||(o[l]=h,u.push(l));Object.assign(o,s),o._legacyFields=u,e(o)},a=_(G(t,"mFields"),o=>{o.metadata.fromCache||Y(o.docChanges().length),s=qt(o.docs.map(u=>({_id:u.id,...u.data()}))),i()},n),c=Us(t,o=>{r=o||null,i()},n);return()=>{a(),c()}}function Us(t,e,n){let s,r;const i=()=>{s===void 0||r===void 0||e(r||s)},a=_(Le(t),o=>{s=o.exists()?o.data():null,i()},n),c=_(le(t),o=>{const u=o.docs.map(l=>({_id:l.id,...l.data()}));u.some(l=>l._id==="head")?Se.add(t):Se.delete(t),r=$t(u),i()},n);return()=>{a(),c()}}async function ko(t){const e=await x(le(t));if(e.empty)return;const n=ae(f);e.docs.forEach(s=>n.delete(s.ref)),await n.commit(),Se.delete(t)}async function vo(t,e,n){const s=JSON.stringify(e),r=String(Date.now()),i=[];for(let o=0;o<s.length;o+=_n)i.push(s.slice(o,o+_n));const a=ae(f);i.forEach((o,u)=>a.set(p(le(t),"p"+u),{part:u,of:i.length,rev:r,data:o})),(await x(le(t))).docs.forEach(o=>{if(o.id!=="head"&&!/^p\d+$/.test(o.id))return;(o.id==="head"?-1:Number(o.id.slice(1)))>=i.length&&a.delete(o.ref)}),a.set(p(le(t),"head"),{of:i.length,rev:r,updatedAt:R(),_writer:n||""}),await a.commit(),Se.add(t),await kt(Le(t)).catch(()=>{})}async function jc(t,e,n){let s=null;try{const i=await k(Le(t)),c=(await x(le(t))).docs.map(u=>({_id:u.id,...u.data()}));s=(c.some(u=>u._id==="head")?$t(c):null)||(i.exists()?i.data():null)}catch(i){throw i}const r=e(s);return await Ao(t,r,n),r}async function Ao(t,e,n){const s={...e,_writer:n||""};if(Ro(JSON.stringify(s))<bo)try{await E(Le(t),{...s,updatedAt:R()}),Se.has(t)&&await ko(t);return}catch(r){if(!Eo(r))throw r}await vo(t,s,n)}async function $c(t,e){await Z(vs(),"map",t,e)}async function qc(t,e,n){if(!t)throw new Error("email required");await E(p(f,"budgetAccessRequests",t),{email:t,name:e||"",message:n||"",status:"pending",requestedAt:R()})}async function Gc(t){if(!t)return null;const e=await k(p(f,"budgetAccessRequests",t));return e.exists()?e.data():null}function zc(t,e){return _(S(f,"budgetAccessRequests"),n=>{const s=[];n.forEach(r=>s.push({id:r.id,...r.data()})),t(s)},e)}async function Kc(t,e){t&&(await To(t,e||"viewer"),await E(p(f,"budgetAccessRequests",t),{email:t,status:"approved",approvedAt:R(),approvedAs:e||"viewer"},{merge:!0}))}async function Jc(t){t&&await E(p(f,"budgetAccessRequests",t),{email:t,status:"rejected",rejectedAt:R()},{merge:!0})}async function Xc(){const t=await k(we());if(!t.exists())return[];const e=t.data()||{};let n=null;try{n=JSON.parse(e.value||"{}")}catch{n={}}return Array.isArray(n.orgs)?n.orgs.map(s=>s.name).filter(Boolean):[]}const ot=t=>p(f,"sales3",t),Gt=(t,e,n)=>p(f,"sales3",t,e,n),Ls=4,U=()=>({_wt:R(),_cv:Ls}),De=()=>[[["_wt"],R()],[["_cv"],Ls]],fe=(...t)=>t.join("/"),Me=t=>{const e=[];for(const[n,s]of t)e.push(new nr(...n),s===void 0?null:s);return e};function Yc(t,e,n){return _(ot(t),{includeMetadataChanges:!0},s=>e(s.exists()?s.data():null,s.metadata.fromCache),n)}function Qc(t,e,n,s){return Ds("sales3",t,e,n,s)}const So=5*60*1e3;async function Po(t){if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");const e=new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip"));return await new Response(e).text()}async function Co(t,e,n){if(typeof DecompressionStream>"u")return null;const s=await k(p(f,t,e,"_snap",n));if(Y(1),!s.exists())return null;const r=s.data()||{},i=Number(r.chunks)||0;if(!i||!r.at||!r.rev)return null;const a=await Promise.all(Array.from({length:i},(o,u)=>k(p(f,t,e,"_snap",n+"#"+u))));Y(i);const c=[];for(const o of a){const u=o.exists()?o.data():null;if(!u||u.rev!==r.rev||!u.gz)return null;const l=typeof u.gz.toUint8Array=="function"?u.gz.toUint8Array():u.gz;c.push(...JSON.parse(await Po(l)))}return{at:r.at,rows:c}}function Ds(t,e,n,s,r){let i=!1,a=()=>{};const c=()=>{let o=!0;a=_(S(f,t,e,n),{includeMetadataChanges:!0},u=>{u.metadata.fromCache||Y(u.docChanges().length);const l=u.docChanges().map(h=>({id:h.doc.id,data:h.type==="removed"?null:h.doc.data(),pending:h.doc.metadata.hasPendingWrites}));(l.length||o||!u.metadata.fromCache)&&s(l,u.metadata.fromCache,o),o=!1},r)};return(async()=>{let o=null;try{o=await Co(t,e,n)}catch(h){console.warn(`[一覧] まとめを読めませんでした(${t}/${e}/${n})。全件を読みます:`,h&&(h.message||h)),o=null}if(i)return;if(!o)return c();s(o.rows.map(h=>({id:h.id,data:h.data,pending:!1})),!0,!0);const u=typeof o.at.toMillis=="function"?o.at.toMillis():Number(o.at)||0,l=tr.fromMillis(Math.max(0,u-So));a=_(bn(S(f,t,e,n),Rn("_wt",">",l)),{includeMetadataChanges:!0},h=>{h.metadata.fromCache||Y(h.docChanges().length);const d=h.docChanges().map(m=>({id:m.doc.id,data:m.type==="removed"?null:m.doc.data(),pending:m.doc.metadata.hasPendingWrites}));(d.length||!h.metadata.fromCache)&&s(d,h.metadata.fromCache,!1)},r)})(),()=>{i=!0,a()}}async function Zc(t,e,n,s,r,i,a){return Oo("sales3",t,e,n,s,r,i,a)}async function eu(t,e,n,s,r){await Q(Ie(Gt(t,e,n),...Me([...s,[["_at"],Date.now()],[["_by"],r||""],...De()])),fe("sales3",t,e,n))}async function tu(t,e,n,s){await Q(E(Gt(t,e,n),{...s,...U()},{merge:!0}),fe("sales3",t,e,n))}async function nu(t,e){await Q(Ie(ot(t),...Me([...e,[["_at"],Date.now()],...De()])),fe("sales3",t))}async function su(t,e){return oe(f,async n=>{const s=ot(t),r=await n.get(s),i=r.exists()?r.data()||{}:{};if(i.migratedAt)return"done";const a=i.migration||{};return a.at&&Date.now()-a.at<10*60*1e3&&a.by!==e?"wait":(r.exists()?n.update(s,{migration:{by:e,at:Date.now()},...U()}):n.set(s,{_schema:3,migration:{by:e,at:Date.now()},...U()}),"go")})}async function ru(t,e,n){for(let s=0;s<n.length;s+=400){const r=ae(f);n.slice(s,s+400).forEach(i=>r.set(Gt(t,e,i.id),{...i.data,...U()},{merge:!0})),await Q(r.commit())}}async function iu(t,e,n){await E(ot(t),{_schema:3,m:e||{},migratedAt:Date.now(),migration:{by:n,at:Date.now(),done:!0},...U()},{merge:!0})}async function au(t,e){const n=await x(S(f,"salesWs",t,e));return Y(n.size),n.docs.map(s=>s.data())}async function ou(t){const e=await k(at(t));return e.exists()?e.data():null}async function cu(t){let e=null;try{const s=await k(Le(t));e=s.exists()?s.data():null}catch{}let n=null;try{const s=await x(le(t));n=$t(s.docs.map(r=>({_id:r.id,...r.data()})))}catch{}return{inline:e,chunked:n}}const ct=(t,e)=>p(f,t,e),ut=(t,e,n,s)=>p(f,t,e,n,s);function uu(t,e,n,s){return _(ct(t,e),{includeMetadataChanges:!0},r=>{r.metadata.fromCache||Y(1),n(r.exists()?r.data():null,r.metadata.fromCache)},s)}async function lu(t){const e=await x(S(f,t));return Y(e.size),e.docs.map(n=>n.id)}function du(t,e,n,s,r){return Ds(t,e,n,s,r)}async function Oo(t,e,n,s,r,i,a,c){const o=ut(t,e,n,s);return Q(oe(f,async u=>{const l=await u.get(o),h=[[["_at"],Date.now()],[["_by"],c||""],...De()];if(!l.exists())return u.set(o,{...a||{},_schema:3,_at:Date.now(),_by:c||"",...U()},{merge:!0}),{rejected:[],written:r,doc:null};const d=l.data(),{ok:m,rejected:w}=xs(d,r,i||[]);return m.length&&u.update(o,...Me([...m,...h])),{rejected:w,written:m,doc:w.length?d:null}}),fe(t,e,n,s))}async function hu(t,e,n,s,r,i){await Q(Ie(ut(t,e,n,s),...Me([...r,[["_at"],Date.now()],[["_by"],i||C.currentUser&&C.currentUser.email||""],...De()])),fe(t,e,n,s))}async function fu(t,e,n,s,r){await Q(E(ut(t,e,n,s),{...r,_by:r._by||C.currentUser&&C.currentUser.email||"",...U()},{merge:!0}),fe(t,e,n,s))}async function pu(t,e,n){await Q(Ie(ct(t,e),...Me([...n,[["_at"],Date.now()],...De()])),fe(t,e))}async function gu(t,e,n){return oe(f,async s=>{const r=ct(t,e),i=await s.get(r),a=i.exists()?i.data()||{}:{};if(a.migratedAt)return"done";const c=a.migration||{};return c.at&&Date.now()-c.at<10*60*1e3&&c.by!==n?"wait":(i.exists()?s.update(r,{migration:{by:n,at:Date.now()},...U()}):s.set(r,{_schema:3,migration:{by:n,at:Date.now()},...U()}),"go")})}async function mu(t,e,n,s){for(let r=0;r<s.length;r+=400){const i=ae(f);s.slice(r,r+400).forEach(a=>i.set(ut(t,e,n,a.id),{...a.data,...U()},{merge:!0})),await Q(i.commit())}}async function _u(t,e,n,s){await E(ct(t,e),{_schema:3,m:n||{},migratedAt:Date.now(),migration:{by:s,at:Date.now(),done:!0},...U()},{merge:!0})}export{Ls as CLIENT_WRITE_VERSION,J as ROLE,xc as addProjectTask,Qe as app,Kc as approveAccessRequest,C as auth,Yo as bDelete,Jo as bGet,Xo as bSet,Qo as bSubscribe,Vo as canManageRoles,Fo as canRead,Bo as canWrite,Y as countReads,f as db,Lc as deleteSalesAttachment,Bc as deleteStorageFile,Wo as detectCurrentWsId,ec as effectiveRole,$o as ensureRoleAtFirstAccess,Go as getBudgetOrgs,Rc as getClientVersions,Xc as getGlobalBudgetOrgs,sc as getGlobalDataOnce,Tc as getLoginUsers,Gc as getMyAccessRequest,jo as getMyRole,Ho as getWorkspace,Mo as handleRedirectResult,Zo as isBootstrapAdmin,yo as isOwner,Mc as listProjectGoals,Dc as listProjectWorkspaces,lu as listV3Roots,wo as loginGoogle,xo as logout,Vc as mergeMasterFields,Sc as mergeSalesDoc,jc as mergeSalesMasters,cu as readLegacyMastersOnce,au as readSalesCollOnce,ou as readSalesDocOnce,bs as readStats,yc as recordLoginUser,Jc as rejectAccessRequest,bc as reportClientVersion,iu as sales3FinishMigration,su as sales3MigrationLock,ru as sales3WriteMany,rc as setGlobalData,ic as setGlobalDataMerged,fc as setGlobalNoticeRead,uc as setGlobalOrgChart,lc as setGlobalOrgChartMerged,To as setGlobalRole,$c as setGlobalUserCompany,mc as setGlobalUserDept,oc as setGlobalUserRole,gc as setGlobalUserTitle,Ec as setMenuConfig,kc as setMenuConfigKey,zo as setRole,tu as setSales3Item,Ac as setSalesDoc,Ao as setSalesMasters,qo as setUserCompany,fu as setV3Item,qc as submitAccessRequest,zc as subscribeAccessRequests,_c as subscribeGlobalCompanies,nc as subscribeGlobalData,dc as subscribeGlobalDepts,hc as subscribeGlobalNoticeRead,cc as subscribeGlobalOrgChart,tc as subscribeGlobalRoles,pc as subscribeGlobalTitles,Ic as subscribeLoginUsers,Hc as subscribeMasterFields,wc as subscribeMenuConfig,Yc as subscribeSales3Doc,Qc as subscribeSales3List,Pc as subscribeSalesColl,vc as subscribeSalesDoc,Wc as subscribeSalesMasters,ac as subscribeUserRoles,uu as subscribeV3Doc,du as subscribeV3List,Ko as subscribeWorkspace,nu as updateSales3Doc,eu as updateSales3Item,Zc as updateSales3ItemCas,pu as updateV3Doc,hu as updateV3Item,Oo as updateV3ItemCas,Fc as uploadStorageFile,_u as v3FinishMigration,gu as v3MigrationLock,mu as v3WriteMany,Do as watchAuth,Nc as writeSalesAttachment,Uc as writeSalesAttachmentChunked,Cc as writeSalesItems,Oc as writeSalesItemsMerged};
