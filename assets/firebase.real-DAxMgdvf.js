const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BTRhCdlt.js","./index-CZYznYw5.css"])))=>i.map(i=>d[i]);
import{_ as wn,t as Y,c as Us}from"./index-BTRhCdlt.js";import{r as ve,g as F,_ as yn,a as Ls,b as Ds,d as N,i as Pe,p as In,e as Ms,F as tt,c as _t,C as wt,S as we,f as yt,q as Ce,E as Et,h as xs,j as Fs,L as Bs,k as Tn,l as Vs,m as Ws,n as Hs,o as js,s as O,t as qs,u as $s,v as Gs,w as zs}from"./index.esm-v97zNOB-.js";import{doc as p,getDoc as v,getDocs as x,collection as S,setDoc as E,updateDoc as ye,deleteDoc as kt,onSnapshot as _,initializeFirestore as Ks,persistentLocalCache as Js,persistentSingleTabManager as Xs,getFirestore as Ys,writeBatch as ie,query as Qs,where as Zs,serverTimestamp as R,runTransaction as ae,FieldPath as er,connectFirestoreEmulator as tr,enableNetwork as nr,disableNetwork as sr}from"./index.esm-4dSbkLWS.js";var rr="firebase",ir="12.16.0";/**
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
 */ve(rr,ir,"app");/**
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
 */const bn="firebasestorage.googleapis.com",Rn="storageBucket",ar=2*60*1e3,or=10*60*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var y;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(y||(y={}));function ht(t){return"storage/"+t}function vt(){const t="An unknown error occurred, please check the error payload for server response.";return new I(y.UNKNOWN,t)}function cr(t){return new I(y.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ur(t){return new I(y.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(y.UNAUTHENTICATED,t)}function dr(){return new I(y.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hr(t){return new I(y.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function fr(){return new I(y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pr(){return new I(y.CANCELED,"User canceled the upload/download.")}function gr(t){return new I(y.INVALID_URL,"Invalid URL '"+t+"'.")}function mr(t){return new I(y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _r(){return new I(y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rn+"' property when initializing the app?")}function wr(){return new I(y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yr(){return new I(y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ir(t){return new I(y.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function It(t){return new I(y.INVALID_ARGUMENT,t)}function En(){return new I(y.APP_DELETED,"The Firebase app was deleted.")}function Tr(t){return new I(y.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ee(t,e){return new I(y.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Re(t){throw new I(y.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class P{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=P.makeFromUrl(e,n)}catch{return new P(e,"")}if(s.path==="")return s;throw mr(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),o={bucket:1,path:3};function u(A){A.path_=decodeURIComponent(A.path)}const l="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${l}/b/${r}/o${d}`,"i"),w={bucket:1,path:3},T=n===bn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",B=new RegExp(`^https?://${T}/${r}/${b}`,"i"),V=[{regex:c,indices:o,postModify:i},{regex:m,indices:w,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let A=0;A<V.length;A++){const xe=V[A],lt=xe.regex.exec(e);if(lt){const Ns=lt[xe.indices.bucket];let dt=lt[xe.indices.path];dt||(dt=""),s=new P(Ns,dt),xe.postModify(s);break}}if(s==null)throw gr(e);return s}}class br{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Rr(t,e,n){let s=1,r=null,i=null,a=!1,c=0;function o(){return c===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function f(b){r=setTimeout(()=>{r=null,t(m,o())},b)}function d(){i&&clearTimeout(i)}function m(b,...B){if(u){d();return}if(b){d(),l.call(null,b,...B);return}if(o()||a){d(),l.call(null,b,...B);return}s<64&&(s*=2);let V;c===1?(c=2,V=0):V=(s+Math.random())*1e3,f(V)}let w=!1;function T(b){w||(w=!0,d(),!u&&(r!==null?(b||(c=2),clearTimeout(r),f(0)):b||(c=1)))}return f(0),i=setTimeout(()=>{a=!0,T(!0)},n),T}function Er(t){t(!1)}/**
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
 */function kr(t){return t!==void 0}function vr(t){return typeof t=="object"&&!Array.isArray(t)}function At(t){return typeof t=="string"||t instanceof String}function zt(t){return St()&&t instanceof Blob}function St(){return typeof Blob<"u"}function Kt(t,e,n,s){if(s<e)throw It(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw It(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function nt(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function kn(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var ce;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ce||(ce={}));/**
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
 */function Ar(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class Sr{constructor(e,n,s,r,i,a,c,o,u,l,f,d=!0,m=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=o,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=f,this.retry=d,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,T)=>{this.resolve_=w,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Fe(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const o=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,u)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===ce.NO_ERROR,o=i.getStatus();if(!c||Ar(o,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===ce.ABORT;s(!1,new Fe(!1,null,l));return}const u=this.successCodes_.indexOf(o)!==-1;s(!0,new Fe(u,i))})},n=(s,r)=>{const i=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const o=this.callback_(c,c.getResponse());kr(o)?i(o):i()}catch(o){a(o)}else if(c!==null){const o=vt();o.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,o)):a(o)}else if(r.canceled){const o=this.appDelete_?En():pr();a(o)}else{const o=fr();a(o)}};this.canceled_?n(!1,new Fe(!1,null,!0)):this.backoffId_=Rr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Er(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fe{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Pr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Cr(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Or(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Nr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ur(t,e,n,s,r,i,a=!0,c=!1){const o=kn(t.urlParams),u=t.url+o,l=Object.assign({},t.headers);return Or(l,e),Pr(l,n),Cr(l,i),Nr(l,s),new Sr(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,a,c)}/**
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
 */function Lr(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Dr(...t){const e=Lr();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(St())return new Blob(t);throw new I(y.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Mr(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function xr(t){if(typeof atob>"u")throw Ir("base-64");return atob(t)}/**
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
 */const H={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ft{constructor(e,n){this.data=e,this.contentType=n||null}}function Fr(t,e){switch(t){case H.RAW:return new ft(vn(e));case H.BASE64:case H.BASE64URL:return new ft(An(t,e));case H.DATA_URL:return new ft(Vr(e),Wr(e))}throw vt()}function vn(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,a=t.charCodeAt(++n);s=65536|(i&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Br(t){let e;try{e=decodeURIComponent(t)}catch{throw Ee(H.DATA_URL,"Malformed data URL.")}return vn(e)}function An(t,e){switch(t){case H.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Ee(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case H.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Ee(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=xr(e)}catch(r){throw r.message.includes("polyfill")?r:Ee(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Sn{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ee(H.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Hr(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Vr(t){const e=new Sn(t);return e.base64?An(H.BASE64,e.rest):Br(e.rest)}function Wr(t){return new Sn(t).contentType}function Hr(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ee{constructor(e,n){let s=0,r="";zt(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(zt(this.data_)){const s=this.data_,r=Mr(s,e,n);return r===null?null:new ee(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ee(s,!0)}}static getBlob(...e){if(St()){const n=e.map(s=>s instanceof ee?s.data_:s);return new ee(Dr.apply(null,n))}else{const n=e.map(a=>At(a)?Fr(H.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(a=>{for(let c=0;c<a.length;c++)r[i++]=a[c]}),new ee(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Pn(t){let e;try{e=JSON.parse(t)}catch{return null}return vr(e)?e:null}/**
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
 */function jr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qr(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Cn(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function $r(t,e){return e}class k{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||$r}}let Be=null;function Gr(t){return!At(t)||t.length<2?t:Cn(t)}function On(){if(Be)return Be;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(i,a){return Gr(a)}const n=new k("name");n.xform=e,t.push(n);function s(i,a){return a!==void 0?Number(a):a}const r=new k("size");return r.xform=s,t.push(r),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),Be=t,Be}function zr(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new P(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Kr(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const a=n[i];s[a.local]=a.xform(s,e[a.server])}return zr(s,t),s}function Nn(t,e,n){const s=Pn(e);return s===null?null:Kr(t,s,n)}function Jr(t,e,n,s){const r=Pn(e);if(r===null||!At(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,f=t.fullPath,d="/b/"+a(l)+"/o/"+a(f),m=nt(d,n,s),w=kn({alt:"media",token:u});return m+w})[0]}function Xr(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Pt{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Un(t){if(!t)throw vt()}function Yr(t,e){function n(s,r){const i=Nn(t,r,e);return Un(i!==null),i}return n}function Qr(t,e){function n(s,r){const i=Nn(t,r,e);return Un(i!==null),Jr(i,r,t.host,t._protocol)}return n}function Ln(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=dr():r=lr():n.getStatus()===402?r=ur(t.bucket):n.getStatus()===403?r=hr(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Dn(t){const e=Ln(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=cr(t.path)),i.serverResponse=r.serverResponse,i}return n}function Zr(t,e,n){const s=e.fullServerUrl(),r=nt(s,t.host,t._protocol),i="GET",a=t.maxOperationRetryTime,c=new Pt(r,i,Qr(t,n),a);return c.errorHandler=Dn(e),c}function ei(t,e){const n=e.fullServerUrl(),s=nt(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function a(o,u){}const c=new Pt(s,r,a,i);return c.successCodes=[200,204],c.errorHandler=Dn(e),c}function ti(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ni(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=ti(null,e)),s}function si(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let V="";for(let A=0;A<2;A++)V=V+Math.random().toString().slice(2);return V}const o=c();a["Content-Type"]="multipart/related; boundary="+o;const u=ni(e,s,r),l=Xr(u,n),f="--"+o+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+o+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+o+"--",m=ee.getBlob(f,s,d);if(m===null)throw wr();const w={name:u.fullPath},T=nt(i,t.host,t._protocol),b="POST",B=t.maxUploadRetryTime,$=new Pt(T,b,Yr(t,n),B);return $.urlParams=w,$.headers=a,$.body=m.uploadData(),$.errorHandler=Ln(e),$}class ri{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ce.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ce.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ce.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r,i){if(this.sent_)throw Re("cannot .send() more than once");if(Pe(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Re("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Re("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Re("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Re("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ii extends ri{initXhr(){this.xhr_.responseType="text"}}function Ct(){return new ii}/**
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
 */class le{constructor(e,n){this._service=e,n instanceof P?this._location=n:this._location=P.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new le(e,n)}get root(){const e=new P(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Cn(this._location.path)}get storage(){return this._service}get parent(){const e=jr(this._location.path);if(e===null)return null;const n=new P(this._location.bucket,e);return new le(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Tr(e)}}function ai(t,e,n){t._throwIfRoot("uploadBytes");const s=si(t.storage,t._location,On(),new ee(e,!0),n);return t.storage.makeRequestWithTokens(s,Ct).then(r=>({metadata:r,ref:t}))}function oi(t){t._throwIfRoot("getDownloadURL");const e=Zr(t.storage,t._location,On());return t.storage.makeRequestWithTokens(e,Ct).then(n=>{if(n===null)throw yr();return n})}function ci(t){t._throwIfRoot("deleteObject");const e=ei(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ct)}function ui(t,e){const n=qr(t._location.path,e),s=new P(t._location.bucket,n);return new le(t.storage,s)}/**
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
 */function li(t){return/^[A-Za-z]+:\/\//.test(t)}function di(t,e){return new le(t,e)}function Mn(t,e){if(t instanceof Ot){const n=t;if(n._bucket==null)throw _r();const s=new le(n,n._bucket);return e!=null?Mn(s,e):s}else return e!==void 0?ui(t,e):t}function hi(t,e){if(e&&li(e)){if(t instanceof Ot)return di(t,e);throw It("To use ref(service, url), the first argument must be a Storage instance.")}else return Mn(t,e)}function Jt(t,e){const n=e==null?void 0:e[Rn];return n==null?null:P.makeFromBucketSpec(n,t)}function fi(t,e,n,s={}){t.host=`${e}:${n}`;const r=Pe(e);r&&In(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Ms(i,t.app.options.projectId))}class Ot{constructor(e,n,s,r,i,a=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=bn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ar,this._maxUploadRetryTime=or,this._requests=new Set,r!=null?this._bucket=P.makeFromBucketSpec(r,this._host):this._bucket=Jt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=P.makeFromBucketSpec(this._url,e):this._bucket=Jt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(N(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new le(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new br(En());{const a=Ur(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Xt="@firebase/storage",Yt="0.14.3";/**
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
 */const xn="storage";function pi(t,e,n){return t=F(t),ai(t,e,n)}function gi(t){return t=F(t),oi(t)}function mi(t){return t=F(t),ci(t)}function Fn(t,e){return t=F(t),hi(t,e)}function _i(t=Ds(),e){t=F(t);const s=yn(t,xn).getImmediate({identifier:e}),r=Ls("storage");return r&&Bn(s,...r),s}function Bn(t,e,n,s={}){fi(t,e,n,s)}function wi(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ot(n,s,r,e,we)}function yi(){_t(new wt(xn,wi,"PUBLIC").setMultipleInstances(!0)),ve(Xt,Yt,""),ve(Xt,Yt,"esm2020")}yi();function Vn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ii=Vn,Wn=new Et("auth","Firebase",Vn());/**
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
 */const Ge=new Bs("@firebase/auth");function Ti(t,...e){Ge.logLevel<=Tn.WARN&&Ge.warn(`Auth (${we}): ${t}`,...e)}function He(t,...e){Ge.logLevel<=Tn.ERROR&&Ge.error(`Auth (${we}): ${t}`,...e)}/**
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
 */function q(t,...e){throw Ut(t,...e)}function D(t,...e){return Ut(t,...e)}function Nt(t,e,n){const s={...Ii(),[e]:n};return new Et("auth","Firebase",s).create(e,{appName:t.name})}function re(t){return Nt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hn(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&q(t,"argument-error"),Nt(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ut(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Wn.create(t,...e)}function g(t,e,...n){if(!t)throw Ut(e,...n)}function z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw He(e),new Error(e)}function X(t,e){t||z(e)}/**
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
 */function Tt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function bi(){return Qt()==="http:"||Qt()==="https:"}function Qt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Ri(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bi()||Vs()||"connection"in navigator)?navigator.onLine:!0}function Ei(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oe{constructor(e,n){this.shortDelay=e,this.longDelay=n,X(n>e,"Short delay should be less than long delay!"),this.isMobile=xs()||Fs()}get(){return Ri()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class jn{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ki={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vi=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ai=new Oe(3e4,6e4);function Dt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ie(t,e,n,s,r={}){return qn(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=Ce({...a,key:t.config.apiKey}).slice(1),o=await t._getAdditionalHeaders();o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:o,...i};return Hs()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Pe(t.emulatorConfig.host)&&(u.credentials="include"),jn.fetch()(await $n(t,t.config.apiHost,n,c),u)})}async function qn(t,e,n){t._canInitEmulator=!1;const s={...ki,...e};try{const r=new Pi(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ve(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[o,u]=c.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ve(t,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw Ve(t,"email-already-in-use",a);if(o==="USER_DISABLED")throw Ve(t,"user-disabled",a);const l=s[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nt(t,l,u);q(t,l)}}catch(r){if(r instanceof tt)throw r;q(t,"network-request-failed",{message:String(r)})}}async function Si(t,e,n,s,r={}){const i=await Ie(t,e,n,s,r);return"mfaPendingCredential"in i&&q(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function $n(t,e,n,s){const r=`${e}${n}?${s}`,i=t,a=i.config.emulator?Lt(t.config,r):`${t.config.apiScheme}://${r}`;return vi.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Pi{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(D(this.auth,"network-request-failed")),Ai.get())})}}function Ve(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=D(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Ci(t,e){return Ie(t,"POST","/v1/accounts:delete",e)}async function ze(t,e){return Ie(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ke(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Oi(t,e=!1){const n=F(t),s=await n.getIdToken(e),r=Mt(s);g(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ke(pt(r.auth_time)),issuedAtTime:ke(pt(r.iat)),expirationTime:ke(pt(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pt(t){return Number(t)*1e3}function Mt(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return He("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ws(n);return r?JSON.parse(r):(He("Failed to decode base64 JWT payload"),null)}catch(r){return He("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Zt(t){const e=Mt(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ae(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof tt&&Ni(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ni({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ui{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Ke(t){var f;const e=t.auth,n=await t.getIdToken(),s=await Ae(t,ze(e,{idToken:n}));g(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(f=r.providerUserInfo)!=null&&f.length?Gn(r.providerUserInfo):[],a=Di(t.providerData,i),c=t.isAnonymous,o=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?o:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new bt(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function Li(t){const e=F(t);await Ke(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Di(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Gn(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Mi(t,e){const n=await qn(t,{},async()=>{const s=Ce({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=await $n(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:c,body:s};return t.emulatorConfig&&Pe(t.emulatorConfig.host)&&(o.credentials="include"),jn.fetch()(a,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xi(t,e){return Ie(t,"POST","/v2/accounts:revokeToken",Dt(t,e))}/**
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
 */class fe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");const n=Zt(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Mi(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new fe;return s&&(g(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(g(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(g(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fe,this.toJSON())}_performRefresh(){return z("not implemented")}}/**
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
 */function Z(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class L{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Ui(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ae(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Oi(this,e)}reload(){return Li(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new L({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ke(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(N(this.auth.app))return Promise.reject(re(this.auth));const e=await this.getIdToken();return await Ae(this,Ci(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,o=n._redirectEventId??void 0,u=n.createdAt??void 0,l=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:w,stsTokenManager:T}=n;g(f&&T,e,"internal-error");const b=fe.fromJSON(this.name,T);g(typeof f=="string",e,"internal-error"),Z(s,e.name),Z(r,e.name),g(typeof d=="boolean",e,"internal-error"),g(typeof m=="boolean",e,"internal-error"),Z(i,e.name),Z(a,e.name),Z(c,e.name),Z(o,e.name),Z(u,e.name),Z(l,e.name);const B=new L({uid:f,auth:e,email:r,emailVerified:d,displayName:s,isAnonymous:m,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:b,createdAt:u,lastLoginAt:l});return w&&Array.isArray(w)&&(B.providerData=w.map($=>({...$}))),o&&(B._redirectEventId=o),B}static async _fromIdTokenResponse(e,n,s=!1){const r=new fe;r.updateFromServerResponse(n);const i=new L({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ke(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];g(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Gn(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new fe;c.updateFromIdToken(s);const o=new L({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new bt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(o,u),o}}/**
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
 */class zn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zn.type="NONE";const tn=zn;/**
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
 */function je(t,e,n){return`firebase:${t}:${e}:${n}`}class pe{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=je(this.userKey,r.apiKey,i),this.fullPersistenceKey=je("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ze(this.auth,{idToken:e}).catch(()=>{});return n?L._fromGetAccountInfoResponse(this.auth,n,e):null}return L._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pe(K(tn),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||K(tn);const a=je(s,e.config.apiKey,e.name);let c=null;for(const u of n)try{const l=await u._get(a);if(l){let f;if(typeof l=="string"){const d=await ze(e,{idToken:l}).catch(()=>{});if(!d)break;f=await L._fromGetAccountInfoResponse(e,d,l)}else f=L._fromJSON(e,l);u!==i&&(c=f),i=u;break}}catch{}const o=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!o.length?new pe(i,e,s):(i=o[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new pe(i,e,s))}}/**
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
 */function nn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zn(e))return"Blackberry";if(es(e))return"Webos";if(Jn(e))return"Safari";if((e.includes("chrome/")||Xn(e))&&!e.includes("edge/"))return"Chrome";if(Qn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Kn(t=O()){return/firefox\//i.test(t)}function Jn(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xn(t=O()){return/crios\//i.test(t)}function Yn(t=O()){return/iemobile/i.test(t)}function Qn(t=O()){return/android/i.test(t)}function Zn(t=O()){return/blackberry/i.test(t)}function es(t=O()){return/webos/i.test(t)}function xt(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fi(t=O()){var e;return xt(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Bi(){return qs()&&document.documentMode===10}function ts(t=O()){return xt(t)||Qn(t)||es(t)||Zn(t)||/windows phone/i.test(t)||Yn(t)}/**
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
 */function ns(t,e=[]){let n;switch(t){case"Browser":n=nn(O());break;case"Worker":n=`${nn(O())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${we}/${s}`}/**
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
 */class Vi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const o=e(i);a(o)}catch(o){c(o)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Wi(t,e={}){return Ie(t,"GET","/v2/passwordPolicy",Dt(t,e))}/**
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
 */const Hi=6;class ji{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Hi,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qi{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sn(this),this.idTokenSubscription=new sn(this),this.beforeStateQueue=new Vi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=K(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ze(this,{idToken:e}),s=await L._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(N(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===c)&&(o!=null&&o.user)&&(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ke(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ei()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(N(this.app))return Promise.reject(re(this));const n=e?F(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return N(this.app)?Promise.reject(re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return N(this.app)?Promise.reject(re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(K(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wi(this),n=new ji(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Et("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xi(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&K(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[K(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,s,r);return()=>{a=!0,o()}}else{const o=e.addObserver(n);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ns(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(N(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ti(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Te(t){return F(t)}class sn{constructor(e){this.auth=e,this.observer=null,this.addObserver=$s(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ft={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $i(t){Ft=t}function Gi(t){return Ft.loadJS(t)}function zi(){return Ft.gapiScript}function Ki(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ji(t,e){const n=yn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(yt(i,e??{}))return r;q(r,"already-initialized")}return n.initialize({options:e})}function Xi(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(K);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Yi(t,e,n){const s=Te(t);g(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!0,i=ss(e),{host:a,port:c}=Qi(e),o=c===null?"":`:${c}`,u={url:`${i}//${a}${o}/`},l=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){g(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),g(yt(u,s.config.emulator)&&yt(l,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=l,s.settings.appVerificationDisabledForTesting=!0,Pe(a)&&In(`${i}//${a}${o}`)}function ss(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Qi(t){const e=ss(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:rn(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:rn(a)}}}function rn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}/**
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
 */class rs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return z("not implemented")}_getIdTokenResponse(e){return z("not implemented")}_linkToIdToken(e,n){return z("not implemented")}_getReauthenticationResolver(e){return z("not implemented")}}/**
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
 */async function ge(t,e){return Si(t,"POST","/v1/accounts:signInWithIdp",Dt(t,e))}/**
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
 */const Zi="http://localhost";class de extends rs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new de(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):q("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const a=new de(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ge(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ge(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ge(e,n)}buildRequest(){const e={requestUri:Zi,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ce(n)}return e}}/**
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
 */class te extends Ne{constructor(){super("facebook.com")}static credential(e){return de._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return te.credential(e.oauthAccessToken)}catch{return null}}}te.FACEBOOK_SIGN_IN_METHOD="facebook.com";te.PROVIDER_ID="facebook.com";/**
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
 */class W extends Ne{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return de._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return W.credential(n,s)}catch{return null}}}W.GOOGLE_SIGN_IN_METHOD="google.com";W.PROVIDER_ID="google.com";/**
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
 */class ne extends Ne{constructor(){super("github.com")}static credential(e){return de._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ne.credential(e.oauthAccessToken)}catch{return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com";ne.PROVIDER_ID="github.com";/**
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
 */class se extends Ne{constructor(){super("twitter.com")}static credential(e,n){return de._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return se.credential(n,s)}catch{return null}}}se.TWITTER_SIGN_IN_METHOD="twitter.com";se.PROVIDER_ID="twitter.com";/**
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
 */class me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await L._fromIdTokenResponse(e,s,r),a=an(s);return new me({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=an(s);return new me({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function an(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Je extends tt{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Je.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Je(e,n,s,r)}}function is(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Je._fromErrorAndOperation(t,i,e,s):i})}async function ea(t,e,n=!1){const s=await Ae(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return me._forOperation(t,"link",s)}/**
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
 */async function ta(t,e,n=!1){const{auth:s}=t;if(N(s.app))return Promise.reject(re(s));const r="reauthenticate";try{const i=await Ae(t,is(s,r,e,t),n);g(i.idToken,s,"internal-error");const a=Mt(i.idToken);g(a,s,"internal-error");const{sub:c}=a;return g(t.uid===c,s,"user-mismatch"),me._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&q(s,"user-mismatch"),i}}/**
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
 */async function na(t,e,n=!1){if(N(t.app))return Promise.reject(re(t));const s="signIn",r=await is(t,s,e),i=await me._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function sa(t,e,n,s){return F(t).onAuthStateChanged(e,n,s)}function ra(t){return F(t).signOut()}const Xe="__sak";/**
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
 */class as{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xe,"1"),this.storage.removeItem(Xe),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ia=1e3,aa=10;class os extends as{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ts(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,o)=>{this.notifyListeners(a,o)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Bi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,aa):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ia)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}os.type="LOCAL";const oa=os;/**
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
 */class cs extends as{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cs.type="SESSION";const ca=cs;/**
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
 */function ua(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new rt(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async u=>u(n.origin,i)),o=await ua(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rt.receivers=[];/**
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
 */class la{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,o)=>{const u=Bt("",20);r.port1.start();const l=setTimeout(()=>{o(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(d.data.response);break;default:clearTimeout(l),clearTimeout(i),o(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function j(){return window}function da(t){j().location.href=t}/**
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
 */function us(){return typeof j().WorkerGlobalScope<"u"&&typeof j().importScripts=="function"}async function ha(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fa(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function pa(){return us()?self:null}/**
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
 */const ls="firebaseLocalStorageDb",ga=1,Ye="firebaseLocalStorage",ds="fbase_key";class Ue{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function it(t,e){return t.transaction([Ye],e?"readwrite":"readonly").objectStore(Ye)}function ma(){const t=indexedDB.deleteDatabase(ls);return new Ue(t).toPromise()}function hs(){const t=indexedDB.open(ls,ga);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ye,{keyPath:ds})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ye)?e(s):(s.close(),await ma(),e(await hs()))})})}async function on(t,e,n){const s=it(t,!0).put({[ds]:e,value:n});return new Ue(s).toPromise()}async function _a(t,e){const n=it(t,!1).get(e),s=await new Ue(n).toPromise();return s===void 0?null:s.value}function cn(t,e){const n=it(t,!0).delete(e);return new Ue(n).toPromise()}const wa=800,ya=3;class fs{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=hs(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ya)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return us()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rt._getInstance(pa()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await ha(),!this.activeServiceWorker)return;this.sender=new la(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fa()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await on(e,Xe,"1"),await cn(e,Xe)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>on(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_a(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=it(r,!1).getAll();return new Ue(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fs.type="LOCAL";const Ia=fs;new Oe(3e4,6e4);/**
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
 */class Wt extends rs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ge(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ge(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ta(t){return na(t.auth,new Wt(t),t.bypassAuthState)}function ba(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ta(n,new Wt(t),t.bypassAuthState)}async function Ra(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ea(n,new Wt(t),t.bypassAuthState)}/**
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
 */class ps{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ta;case"linkViaPopup":case"linkViaRedirect":return Ra;case"reauthViaPopup":case"reauthViaRedirect":return ba;default:q(this.auth,"internal-error")}}resolve(e){X(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){X(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ea=new Oe(2e3,1e4);async function ka(t,e,n){if(N(t.app))return Promise.reject(D(t,"operation-not-supported-in-this-environment"));const s=Te(t);Hn(t,e,st);const r=Vt(s,n);return new oe(s,"signInViaPopup",e,r).executeNotNull()}class oe extends ps{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,oe.currentPopupAction&&oe.currentPopupAction.cancel(),oe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){X(this.filter.length===1,"Popup operations only handle one event");const e=Bt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(D(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(D(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(D(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ea.get())};e()}}oe.currentPopupAction=null;/**
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
 */const va="pendingRedirect",qe=new Map;class Aa extends ps{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=qe.get(this.auth._key());if(!e){try{const s=await Sa(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}qe.set(this.auth._key(),e)}return this.bypassAuthState||qe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sa(t,e){const n=ms(e),s=gs(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function Pa(t,e){return gs(t)._set(ms(e),"true")}function Ca(t,e){qe.set(t._key(),e)}function gs(t){return K(t._redirectPersistence)}function ms(t){return je(va,t.config.apiKey,t.name)}/**
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
 */function un(t,e,n){return Oa(t,e,n)}async function Oa(t,e,n){if(N(t.app))return Promise.reject(re(t));const s=Te(t);Hn(t,e,st),await s._initializationPromise;const r=Vt(s,n);return await Pa(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function Na(t,e){return await Te(t)._initializationPromise,_s(t,e,!1)}async function _s(t,e,n=!1){if(N(t.app))return Promise.reject(re(t));const s=Te(t),r=Vt(s,e),a=await new Aa(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const Ua=10*60*1e3;class La{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Da(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ws(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(D(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ua&&this.cachedEventUids.clear(),this.cachedEventUids.has(ln(e))}saveEventToCache(e){this.cachedEventUids.add(ln(e)),this.lastProcessedEventTime=Date.now()}}function ln(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ws({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Da(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ws(t);default:return!1}}/**
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
 */async function Ma(t,e={}){return Ie(t,"GET","/v1/projects",e)}/**
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
 */const xa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fa=/^https?/;async function Ba(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ma(t);for(const n of e)try{if(Va(n))return}catch{}q(t,"unauthorized-domain")}function Va(t){const e=Tt(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!Fa.test(n))return!1;if(xa.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Wa=new Oe(3e4,6e4);function dn(){const t=j().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ha(t){return new Promise((e,n)=>{var r,i,a;function s(){dn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dn(),n(D(t,"network-request-failed"))},timeout:Wa.get()})}if((i=(r=j().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=j().gapi)!=null&&a.load)s();else{const c=Ki("iframefcb");return j()[c]=()=>{gapi.load?s():n(D(t,"network-request-failed"))},Gi(`${zi()}?onload=${c}`).catch(o=>n(o))}}).catch(e=>{throw $e=null,e})}let $e=null;function ja(t){return $e=$e||Ha(t),$e}/**
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
 */const qa=new Oe(5e3,15e3),$a="__/auth/iframe",Ga="emulator/auth/iframe",za={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ka=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ja(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lt(e,Ga):`https://${t.config.authDomain}/${$a}`,s={apiKey:e.apiKey,appName:t.name,v:we},r=Ka.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ce(s).slice(1)}`}async function Xa(t){const e=await ja(t),n=j().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Ja(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:za,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=D(t,"network-request-failed"),c=j().setTimeout(()=>{i(a)},qa.get());function o(){j().clearTimeout(c),r(s)}s.ping(o).then(o,()=>{i(a)})}))}/**
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
 */const Ya={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qa=500,Za=600,eo="_blank",to="http://localhost";class hn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function no(t,e,n,s=Qa,r=Za){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const o={...Ya,width:s.toString(),height:r.toString(),top:i,left:a},u=O().toLowerCase();n&&(c=Xn(u)?eo:n),Kn(u)&&(e=e||to,o.scrollbars="yes");const l=Object.entries(o).reduce((d,[m,w])=>`${d}${m}=${w},`,"");if(Fi(u)&&c!=="_self")return so(e||"",c),new hn(null);const f=window.open(e||"",c,l);g(f,t,"popup-blocked");try{f.focus()}catch{}return new hn(f)}function so(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ro="__/auth/handler",io="emulator/auth/handler",ao=encodeURIComponent("fac");async function fn(t,e,n,s,r,i){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:we,eventId:r};if(e instanceof st){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Gs(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,f]of Object.entries({}))a[l]=f}if(e instanceof Ne){const l=e.getScopes().filter(f=>f!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const l of Object.keys(c))c[l]===void 0&&delete c[l];const o=await t._getAppCheckToken(),u=o?`#${ao}=${encodeURIComponent(o)}`:"";return`${oo(t)}?${Ce(c).slice(1)}${u}`}function oo({config:t}){return t.emulator?Lt(t,io):`https://${t.authDomain}/${ro}`}/**
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
 */const gt="webStorageSupport";class co{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ca,this._completeRedirectFn=_s,this._overrideRedirectResult=Ca}async _openPopup(e,n,s,r){var a;X((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await fn(e,n,s,Tt(),r);return no(e,i,Bt())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await fn(e,n,s,Tt(),r);return da(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(X(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Xa(e),s=new La(e);return n.register("authEvent",r=>(g(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gt,{type:gt},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[gt];i!==void 0&&n(!!i),q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ba(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ts()||Jn()||xt()}}const uo=co;var pn="@firebase/auth",gn="1.13.3";/**
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
 */class lo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ho(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fo(t){_t(new wt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;g(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const o={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ns(t)},u=new qi(s,r,i,o);return Xi(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_t(new wt("auth-internal",e=>{const n=Te(e.getProvider("auth").getImmediate());return(s=>new lo(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ve(pn,gn,ho(t)),ve(pn,gn,"esm2020")}/**
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
 */const po=5*60;js("authIdTokenMaxAge");function go(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}$i({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=D("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",go().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fo("Browser");const mo={apiKey:"AIzaSyB8QE3JylXkXWmg_rF2ZuczixnRYJZlRnE",authDomain:"airmore-task-management-app.firebaseapp.com",projectId:"airmore-task-management-app",storageBucket:"airmore-task-management-app.firebasestorage.app",messagingSenderId:"674161520247",appId:"1:674161520247:web:fe0e0f9d0656008fbaa072",measurementId:"G-VFS9X3L72E"},Qe=zs(mo),C=Ji(Qe,{persistence:[Ia,oa],popupRedirectResolver:uo}),ys={server:0,since:Date.now()},be=t=>{ys.server+=Math.max(0,t|0)};try{window.__hittatsuReads=ys}catch{}const h=(()=>{try{return Ks(Qe,{localCache:Js({tabManager:Xs({forceOwnership:!1}),cacheSizeBytes:200*1024*1024})})}catch(t){return console.warn("Firestore永続キャッシュの初期化に失敗。キャッシュ無しで継続します:",t&&t.message),Ys(Qe)}})(),Is=(()=>{try{return/^(localhost|127\.0\.0\.1|[a-z0-9-]+\.localhost)$/.test(location.hostname)&&localStorage.getItem("hittatsu_emulator")==="1"}catch{return!1}})();if(Is)try{tr(h,"127.0.0.1",8080),Yi(C,"http://127.0.0.1:9099",{disableWarnings:!0}),console.warn("[firebase] エミュレーターに接続しています(開発用)"),window.__fsNetwork={off:()=>sr(h),on:()=>nr(h)}}catch(t){console.warn("[firebase] emulator setup failed",t)}function Oo(t){return sa(C,t)}async function _o(){const t=new W;t.setCustomParameters({prompt:"select_account"}),t.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"),t.addScope("https://www.googleapis.com/auth/calendar.readonly"),t.addScope("https://www.googleapis.com/auth/drive.metadata.readonly");try{const e=await ka(C,t);return Ts(e),e.user}catch(e){const n=e&&e.code||"";if(n==="auth/popup-blocked"){const{showPopupBlockedHelp:s}=await wn(async()=>{const{showPopupBlockedHelp:r}=await import("./index-BTRhCdlt.js").then(i=>i.p);return{showPopupBlockedHelp:r}},__vite__mapDeps([0,1]),import.meta.url);return s({what:"Googleへのログイン",onRetry:()=>{_o().catch(()=>{})},altLabel:"このまま画面を切り替えてログイン",onAlt:()=>{un(C,t).catch(()=>{})}}),null}if(n==="auth/cancelled-popup-request"||n==="auth/popup-closed-by-user"||n==="auth/operation-not-supported-in-this-environment")return await un(C,t),null;throw e}}function Ts(t){try{const e=W.credentialFromResult(t);e&&e.accessToken&&(window.__sheetsTokenFromLogin={token:e.accessToken,at:Date.now()})}catch{}}async function No(){try{const t=await Na(C);return t&&Ts(t),(t==null?void 0:t.user)||null}catch(t){return console.warn("redirect result:",t),null}}async function Uo(){await ra(C)}const J={ADMIN:"admin",EDITOR:"editor",VIEWER:"viewer"};function Lo(t){return t===J.ADMIN||t===J.EDITOR||t===J.VIEWER}function Do(t){return t===J.ADMIN||t===J.EDITOR}function Mo(t){return t===J.ADMIN}function xo(){try{const e=new URL(window.location.href).searchParams.get("ws");if(e)return localStorage.setItem("hittatsu_current_ws",e),e}catch{}return localStorage.getItem("hittatsu_current_ws")||null}async function Fo(t){if(!t)return null;const e=await v(p(h,"workspaces",t));return e.exists()?{id:e.id,...e.data()}:null}function Bo(t,e){return!t||!e?null:(t.budgetRoles||{})[e]||null}function wo(t,e){if(!t||!e)return!1;const n=(t.authMembers||[]).find(s=>s&&s.email===e);return n&&n.role==="owner"}async function Vo(t,e,n){if(!t||!e||!n)return null;const s=(n.budgetRoles||{})[e];if(s)return s;const r=wo(n,e)?J.ADMIN:J.VIEWER;try{const i={...n.budgetRoles||{},[e]:r};return await ye(p(h,"workspaces",t),{budgetRoles:i}),r}catch(i){return console.warn("ensureRoleAtFirstAccess failed:",i),null}}async function Q(t,e,n,s,r=!0){return ae(h,async i=>{const a=await i.get(t);if(!r&&!a.exists())return!1;const o={...a.exists()?(a.data()||{})[e]||{}:{}};return s==null||s===""?delete o[n]:o[n]=s,r?i.set(t,{...a.exists()?a.data():{},[e]:o,updatedAt:R()}):i.update(t,{[e]:o}),!0})}async function Wo(t,e,n){return!t||!e?!1:Q(p(h,"workspaces",t),"userCompanies",e,n,!1)}async function Ho(t){if(!t)return[];try{const e=await v(p(h,"workspaces",t,"budget","airmore-budget-v4"));if(!e.exists())return[];const n=e.data()||{};let s=null;try{s=JSON.parse(n.value||"{}")}catch{s={}}return Array.isArray(s.orgs)?s.orgs.map(r=>r.name).filter(Boolean):[]}catch(e){return console.warn("getBudgetOrgs failed:",e),[]}}async function jo(t,e,n){return!t||!e?!1:Q(p(h,"workspaces",t),"budgetRoles",e,n,!1)}function qo(t,e){return _(p(h,"workspaces",t),n=>{n.exists()?e({id:n.id,...n.data()}):e(null)})}const yo=t=>S(h,"workspaces",t,"budget");async function $o(t,e){const n=await v(p(h,"workspaces",t,"budget",Ht(e)));return n.exists()?(n.data()||{}).value??null:null}async function Go(t,e,n){await E(p(h,"workspaces",t,"budget",Ht(e)),{key:e,value:n,updatedAt:R()})}async function zo(t,e){await kt(p(h,"workspaces",t,"budget",Ht(e)))}function Ko(t,e){return _(yo(t),n=>{const s={};n.forEach(r=>{const i=r.data();s[i.key||r.id]=i.value}),e(s)})}function Ht(t){return String(t).replace(/[/.#$\[\]]/g,"_").slice(0,250)}const bs=new Set(["sarazawa@n-airmore.com"]);function Jo(t){return!!t&&bs.has(t)}function Xo(t,e){return t?bs.has(t)?J.ADMIN:(e||{})[t]||null:null}const Rt=()=>p(h,"globalBudget","roles"),_e=()=>p(h,"globalBudget","data"),Rs=()=>p(h,"globalBudget","userCompanies"),jt=()=>p(h,"globalBudget","menuConfig"),Es=()=>p(h,"globalBudget","userDepts"),ks=()=>p(h,"globalBudget","userTitles"),vs=()=>p(h,"globalBudget","noticeRead"),Ze=()=>p(h,"globalBudget","orgChart"),As=()=>p(h,"globalBudget","userRoles"),et=()=>p(h,"globalBudget","users");function Yo(t,e){return _(Rt(),n=>{t(n.exists()?n.data().roles||{}:{})},e)}async function Io(t,e){const n=await v(Rt()),r={...n.exists()?n.data().roles||{}:{}};e?r[t]=e:delete r[t],await E(Rt(),{roles:r,updatedAt:R()})}function Qo(t,e){return _(_e(),t,e)}async function Zo(){const t=await v(_e());return t.exists()?t.data():null}async function ec(t,e){await E(_e(),{value:t,updatedAt:R(),_writer:e})}async function tc(t,e){return ae(h,async n=>{const s=await n.get(_e()),r=s.exists()&&(s.data()||{}).value||null,i=t(r);return n.set(_e(),{value:i,updatedAt:R(),_writer:e}),i})}function nc(t,e){return _(As(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function sc(t,e){await Q(As(),"map",String(t).toLowerCase(),e)}function rc(t,e){return _(Ze(),n=>{const s=n.exists()?n.data():{};t({companies:s.companies||[],startMonth:s.startMonth||0})},e)}async function ic(t,e){await E(Ze(),{companies:t||[],startMonth:e||4,updatedAt:R()})}async function ac(t,e){return ae(h,async n=>{const s=await n.get(Ze()),r=s.exists()?s.data()||{}:{},i=t(Array.isArray(r.companies)?r.companies:[]);return n.set(Ze(),{companies:i,startMonth:e||r.startMonth||4,updatedAt:R()}),i})}function oc(t,e){return _(Es(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function cc(t,e){return _(vs(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function uc(t,e){await Q(vs(),"map",String(t).toLowerCase(),e||[])}function lc(t,e){return _(ks(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function dc(t,e){await Q(ks(),"map",String(t).toLowerCase(),e)}async function hc(t,e){await Q(Es(),"map",String(t).toLowerCase(),e)}function fc(t,e){return _(Rs(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function pc(t,e){return _(jt(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function gc(t,e){const n=String(t||"").toLowerCase();if(!n)return;const s=await v(et()),i=(s.exists()?s.data().map||{}:{})[n];i&&i.name===(e||"")||await Q(et(),"map",n,{email:t,name:e||"",at:new Date().toISOString()})}function mc(t,e){return _(et(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function _c(){const t=await v(et());return t.exists()?t.data().map||{}:{}}async function wc(t,e){t&&await E(p(h,"globalBudget","clients"),{map:{[t]:e}},{merge:!0})}async function yc(){const t=await v(p(h,"globalBudget","clients"));return t.exists()?t.data().map||{}:{}}async function Ic(t){await E(jt(),{map:t,updatedAt:R()})}async function Tc(t,e){await Q(jt(),"map",t,e&&e.length?e:void 0)}const at=t=>p(h,"salesWs",t),M=(t,e)=>S(h,"salesWs",t,e);function bc(t,e,n){return _(at(t),s=>e(s.exists()?s.data():null),n)}async function Rc(t,e){await E(at(t),{...e,updatedAt:R()},{merge:!0})}async function Ec(t,e){const n=at(t);return ae(h,async s=>{const r=await s.get(n),i=r.exists()?r.data()||{}:{},a=e(i)||{};return Object.keys(a).length?(r.exists()?s.update(n,{...a,updatedAt:R()}):s.set(n,{...a,updatedAt:R()}),a):{}})}function kc(t,e,n,s){return _(M(t,e),r=>{r.metadata.fromCache||be(r.docChanges().length),n(r.docs.map(i=>i.data()))},s)}async function vc(t,e,n,s){const r=[...n.map(i=>({kind:"set",it:i})),...(s||[]).map(i=>({kind:"del",id:i}))];for(let i=0;i<r.length;i+=400){const a=ie(h);for(const c of r.slice(i,i+400))c.kind==="set"?a.set(p(M(t,e),c.it.id),c.it):a.delete(p(M(t,e),c.id));await a.commit()}}async function Ac(t,e,n,s){const r=new Array(n.length),i=async a=>{const c=p(M(t,e),a.id);return await ae(h,async u=>{const l=await u.get(c),f=s(a,l.exists()?l.data():null);return f==null?null:(u.set(c,f),f)})};for(let a=0;a<n.length;a+=8){const c=n.slice(a,a+8);(await Promise.all(c.map(i))).forEach((u,l)=>r[a+l]=u)}return r}async function Sc(t,e){await E(p(M(t,"attachments"),e.id),e)}async function Pc(t,e,n,s){const r=ie(h);for(const i of n)r.set(p(M(t,"attachments"),i.id),i);r.set(p(M(t,"attachments"),e.id),e);for(let i=n.length;i<(s||0);i++)r.delete(p(M(t,"attachments"),`${e.id}#${i}`));await r.commit()}async function Cc(t,e,n){if(n>0){const s=ie(h);s.delete(p(M(t,"attachments"),e));for(let r=0;r<n;r++)s.delete(p(M(t,"attachments"),`${e}#${r}`));await s.commit();return}await kt(p(M(t,"attachments"),e))}async function Oc(t){return(await x(Qs(S(h,"workspaces"),Zs("memberEmails","array-contains",t)))).docs.map(n=>{const s=n.data()||{};return{id:n.id,name:s.wsName||s.profile&&s.profile.companyName||n.id,statuses:Array.isArray(s.statuses)?s.statuses:[],members:(Array.isArray(s.authMembers)?s.authMembers:[]).map(r=>r&&r.name).filter(Boolean),schema:Number(s._schemaVersion||0)}}).sort((n,s)=>n.name.localeCompare(s.name,"ja"))}async function Ss(t){try{const e=await v(p(h,"sync3","pm-"+t));return e.exists()&&!!(e.data()||{}).migratedAt}catch{return!1}}async function Nc(t){const e=await Ss(t);return(await x(e?S(h,"sync3","pm-"+t,"goals"):S(h,"workspaces",t,"goals"))).docs.map(s=>{const r=s.data()||{};return e&&r._deleted?null:{id:r.id||s.id,name:r.name||"",status:r.status||""}}).filter(Boolean)}async function Uc(t,e){const n=p(h,"workspaces",t),s=await Ss(t),[r,i,a]=await Promise.all([v(n),x(S(h,"workspaces",t,"tasks")),s?x(S(h,"sync3","pm-"+t,"tasks")):Promise.resolve(null)]),c=r.data()||{},o=new Set(i.docs.map(d=>d.id));a&&a.docs.forEach(d=>o.add(d.id)),(c._tombstones||[]).forEach(d=>d&&d.kind==="tasks"&&d.id&&o.add(d.id));let u=Number(c.seq&&c.seq.dailyTask||0);o.forEach(d=>{const m=/^D-(\d+)$/.exec(d);m&&(u=Math.max(u,Number(m[1])))});let l="";for(let d=0;d<1e3&&(u++,l="D-"+String(u).padStart(3,"0"),!!o.has(l));d++);const f={...e,id:l,_modAt:Date.now()};if(s){const{enc:d}=await wn(async()=>{const{enc:T}=await import("./index-BTRhCdlt.js").then(b=>b.h);return{enc:T}},__vite__mapDeps([0,1]),import.meta.url),{_modAt:m,...w}=f;await E(p(h,"sync3","pm-"+t,"tasks",l),{...d(w),_schema:3,_at:Date.now(),_by:C.currentUser&&C.currentUser.email||"",...U()})}else await E(p(h,"workspaces",t,"tasks",l),f);try{await ye(n,{"seq.dailyTask":u})}catch(d){console.warn("seq.dailyTask の更新に失敗(タスクは追加済み):",d)}return l}let We=null,mn=!1;const Ps=()=>{if(!We&&(We=_i(Qe),Is&&!mn)){mn=!0;try{Bn(We,"127.0.0.1",9199)}catch{}}return We};async function Lc(t,e,n){const s=Fn(Ps(),t);return await pi(s,e,{contentType:n||void 0}),await gi(s)}async function Dc(t){try{await mi(Fn(Ps(),t))}catch(e){if(e&&e.code==="storage/object-not-found")return;throw e}}const Le=t=>p(h,"salesMasters",t),ue=t=>S(h,"salesWs",t,"masters"),To=8e5,_n=25e4,bo=t=>new TextEncoder().encode(t).length,Ro=t=>/exceeds the maximum allowed size|too large|INVALID_ARGUMENT/i.test(String((t==null?void 0:t.message)||t)),Se=new Set;function qt(t){const e=t.find(s=>s._id==="head");if(!e||!e.of)return null;const n=t.filter(s=>s.part!=null&&s.rev===e.rev).sort((s,r)=>s.part-r.part);if(n.length!==e.of||n.some((s,r)=>s.part!==r))return null;try{return JSON.parse(n.map(s=>s.data).join(""))}catch{return null}}const G=(t,e)=>S(h,"salesWs",t,e),mt=25e4;function $t(t){const e={},n=new Map;return t.forEach(s=>{if(s._id.includes("#")){const[r]=s._id.split("#");n.set(r,[...n.get(r)||[],s])}}),t.forEach(s=>{if(!s._id.includes("#")){if(s.chunks){const r=(n.get(s._id)||[]).filter(i=>i.rev===s.rev).sort((i,a)=>i.part-a.part);if(r.length!==s.chunks)return;try{e[s._id]=JSON.parse(r.map(i=>i.data).join(""))}catch{}}else if(s.json!==void 0)try{e[s._id]=JSON.parse(s.json)}catch{}}}),e}async function Mc(t,e){const n=await x(G(t,"mFields")),s=$t(n.docs.map(o=>({_id:o.id,...o.data()}))),r=e(s)||{},i=Object.keys(r);if(!i.length)return{};const a=ie(h),c=new Set(n.docs.map(o=>o.id));for(const o of i){const u=JSON.stringify(r[o]===void 0?null:r[o]),l=String(Date.now());if(c.forEach(f=>{f.startsWith(o+"#")&&a.delete(p(G(t,"mFields"),f))}),u.length<=mt)a.set(p(G(t,"mFields"),o),{json:u,updatedAt:R()});else{const f=[];for(let d=0;d<u.length;d+=mt)f.push(u.slice(d,d+mt));f.forEach((d,m)=>a.set(p(G(t,"mFields"),o+"#"+m),{part:m,rev:l,data:d})),a.set(p(G(t,"mFields"),o),{chunks:f.length,rev:l,updatedAt:R()})}}return await a.commit(),r}function xc(t,e,n){let s,r,i,a;const c=()=>{if(s===void 0||r===void 0||i===void 0||a===void 0)return;const d={},m=a||{},w=[];for(const[T,b]of Object.entries(m))T==="customers"||T==="products"||T.startsWith("_")||T==="updatedAt"||T in i||(d[T]=b,w.push(T));Object.assign(d,i),d.customers=s.length?s:m.customers||[],d.products=r.length?r:m.products||[],d._legacyLists={customers:!s.length,products:!r.length},d._legacyFields=w,e(d)},o=_(G(t,"mCustomers"),d=>{s=d.docs.map(m=>m.data()),c()},n),u=_(G(t,"mProducts"),d=>{r=d.docs.map(m=>m.data()),c()},n),l=_(G(t,"mFields"),d=>{i=$t(d.docs.map(m=>({_id:m.id,...m.data()}))),c()},n),f=Cs(t,d=>{a=d||null,c()},n);return()=>{o(),u(),l(),f()}}function Fc(t,e,n){let s,r;const i=()=>{if(s===void 0||r===void 0)return;const o={},u=[];for(const[l,f]of Object.entries(r||{}))l==="customers"||l==="products"||l.startsWith("_")||l==="updatedAt"||l in s||(o[l]=f,u.push(l));Object.assign(o,s),o._legacyFields=u,e(o)},a=_(G(t,"mFields"),o=>{o.metadata.fromCache||be(o.docChanges().length),s=$t(o.docs.map(u=>({_id:u.id,...u.data()}))),i()},n),c=Cs(t,o=>{r=o||null,i()},n);return()=>{a(),c()}}function Cs(t,e,n){let s,r;const i=()=>{s===void 0||r===void 0||e(r||s)},a=_(Le(t),o=>{s=o.exists()?o.data():null,i()},n),c=_(ue(t),o=>{const u=o.docs.map(l=>({_id:l.id,...l.data()}));u.some(l=>l._id==="head")?Se.add(t):Se.delete(t),r=qt(u),i()},n);return()=>{a(),c()}}async function Eo(t){const e=await x(ue(t));if(e.empty)return;const n=ie(h);e.docs.forEach(s=>n.delete(s.ref)),await n.commit(),Se.delete(t)}async function ko(t,e,n){const s=JSON.stringify(e),r=String(Date.now()),i=[];for(let o=0;o<s.length;o+=_n)i.push(s.slice(o,o+_n));const a=ie(h);i.forEach((o,u)=>a.set(p(ue(t),"p"+u),{part:u,of:i.length,rev:r,data:o})),(await x(ue(t))).docs.forEach(o=>{if(o.id!=="head"&&!/^p\d+$/.test(o.id))return;(o.id==="head"?-1:Number(o.id.slice(1)))>=i.length&&a.delete(o.ref)}),a.set(p(ue(t),"head"),{of:i.length,rev:r,updatedAt:R(),_writer:n||""}),await a.commit(),Se.add(t),await kt(Le(t)).catch(()=>{})}async function Bc(t,e,n){let s=null;try{const i=await v(Le(t)),c=(await x(ue(t))).docs.map(u=>({_id:u.id,...u.data()}));s=(c.some(u=>u._id==="head")?qt(c):null)||(i.exists()?i.data():null)}catch(i){throw i}const r=e(s);return await vo(t,r,n),r}async function vo(t,e,n){const s={...e,_writer:n||""};if(bo(JSON.stringify(s))<To)try{await E(Le(t),{...s,updatedAt:R()}),Se.has(t)&&await Eo(t);return}catch(r){if(!Ro(r))throw r}await ko(t,s,n)}async function Vc(t,e){await Q(Rs(),"map",t,e)}async function Wc(t,e,n){if(!t)throw new Error("email required");await E(p(h,"budgetAccessRequests",t),{email:t,name:e||"",message:n||"",status:"pending",requestedAt:R()})}async function Hc(t){if(!t)return null;const e=await v(p(h,"budgetAccessRequests",t));return e.exists()?e.data():null}function jc(t,e){return _(S(h,"budgetAccessRequests"),n=>{const s=[];n.forEach(r=>s.push({id:r.id,...r.data()})),t(s)},e)}async function qc(t,e){t&&(await Io(t,e||"viewer"),await E(p(h,"budgetAccessRequests",t),{email:t,status:"approved",approvedAt:R(),approvedAs:e||"viewer"},{merge:!0}))}async function $c(t){t&&await E(p(h,"budgetAccessRequests",t),{email:t,status:"rejected",rejectedAt:R()},{merge:!0})}async function Gc(){const t=await v(_e());if(!t.exists())return[];const e=t.data()||{};let n=null;try{n=JSON.parse(e.value||"{}")}catch{n={}}return Array.isArray(n.orgs)?n.orgs.map(s=>s.name).filter(Boolean):[]}const ot=t=>p(h,"sales3",t),Gt=(t,e,n)=>p(h,"sales3",t,e,n),Os=4,U=()=>({_wt:R(),_cv:Os}),De=()=>[[["_wt"],R()],[["_cv"],Os]],he=(...t)=>t.join("/"),Me=t=>{const e=[];for(const[n,s]of t)e.push(new er(...n),s===void 0?null:s);return e};function zc(t,e,n){return _(ot(t),{includeMetadataChanges:!0},s=>e(s.exists()?s.data():null,s.metadata.fromCache),n)}function Kc(t,e,n,s){let r=!0;return _(S(h,"sales3",t,e),{includeMetadataChanges:!0},i=>{const a=i.docChanges().map(c=>({id:c.doc.id,data:c.type==="removed"?null:c.doc.data(),pending:c.doc.metadata.hasPendingWrites}));(a.length||r||!i.metadata.fromCache)&&n(a,i.metadata.fromCache,r),r=!1},s)}async function Jc(t,e,n,s,r,i,a){return Ao("sales3",t,e,n,s,r,i,a)}async function Xc(t,e,n,s,r){await Y(ye(Gt(t,e,n),...Me([...s,[["_at"],Date.now()],[["_by"],r||""],...De()])),he("sales3",t,e,n))}async function Yc(t,e,n,s){await Y(E(Gt(t,e,n),{...s,...U()},{merge:!0}),he("sales3",t,e,n))}async function Qc(t,e){await Y(ye(ot(t),...Me([...e,[["_at"],Date.now()],...De()])),he("sales3",t))}async function Zc(t,e){return ae(h,async n=>{const s=ot(t),r=await n.get(s),i=r.exists()?r.data()||{}:{};if(i.migratedAt)return"done";const a=i.migration||{};return a.at&&Date.now()-a.at<10*60*1e3&&a.by!==e?"wait":(r.exists()?n.update(s,{migration:{by:e,at:Date.now()},...U()}):n.set(s,{_schema:3,migration:{by:e,at:Date.now()},...U()}),"go")})}async function eu(t,e,n){for(let s=0;s<n.length;s+=400){const r=ie(h);n.slice(s,s+400).forEach(i=>r.set(Gt(t,e,i.id),{...i.data,...U()},{merge:!0})),await Y(r.commit())}}async function tu(t,e,n){await E(ot(t),{_schema:3,m:e||{},migratedAt:Date.now(),migration:{by:n,at:Date.now(),done:!0},...U()},{merge:!0})}async function nu(t,e){const n=await x(S(h,"salesWs",t,e));return be(n.size),n.docs.map(s=>s.data())}async function su(t){const e=await v(at(t));return e.exists()?e.data():null}async function ru(t){let e=null;try{const s=await v(Le(t));e=s.exists()?s.data():null}catch{}let n=null;try{const s=await x(ue(t));n=qt(s.docs.map(r=>({_id:r.id,...r.data()})))}catch{}return{inline:e,chunked:n}}const ct=(t,e)=>p(h,t,e),ut=(t,e,n,s)=>p(h,t,e,n,s);function iu(t,e,n,s){return _(ct(t,e),{includeMetadataChanges:!0},r=>{r.metadata.fromCache||be(1),n(r.exists()?r.data():null,r.metadata.fromCache)},s)}async function au(t){const e=await x(S(h,t));return be(e.size),e.docs.map(n=>n.id)}function ou(t,e,n,s,r){let i=!0;return _(S(h,t,e,n),{includeMetadataChanges:!0},a=>{a.metadata.fromCache||be(a.docChanges().length);const c=a.docChanges().map(o=>({id:o.doc.id,data:o.type==="removed"?null:o.doc.data(),pending:o.doc.metadata.hasPendingWrites}));(c.length||i||!a.metadata.fromCache)&&s(c,a.metadata.fromCache,i),i=!1},r)}async function Ao(t,e,n,s,r,i,a,c){const o=ut(t,e,n,s);return Y(ae(h,async u=>{const l=await u.get(o),f=[[["_at"],Date.now()],[["_by"],c||""],...De()];if(!l.exists())return u.set(o,{...a||{},_schema:3,_at:Date.now(),_by:c||"",...U()},{merge:!0}),{rejected:[],written:r,doc:null};const d=l.data(),{ok:m,rejected:w}=Us(d,r,i||[]);return m.length&&u.update(o,...Me([...m,...f])),{rejected:w,written:m,doc:w.length?d:null}}),he(t,e,n,s))}async function cu(t,e,n,s,r,i){await Y(ye(ut(t,e,n,s),...Me([...r,[["_at"],Date.now()],[["_by"],i||C.currentUser&&C.currentUser.email||""],...De()])),he(t,e,n,s))}async function uu(t,e,n,s,r){await Y(E(ut(t,e,n,s),{...r,_by:r._by||C.currentUser&&C.currentUser.email||"",...U()},{merge:!0}),he(t,e,n,s))}async function lu(t,e,n){await Y(ye(ct(t,e),...Me([...n,[["_at"],Date.now()],...De()])),he(t,e))}async function du(t,e,n){return ae(h,async s=>{const r=ct(t,e),i=await s.get(r),a=i.exists()?i.data()||{}:{};if(a.migratedAt)return"done";const c=a.migration||{};return c.at&&Date.now()-c.at<10*60*1e3&&c.by!==n?"wait":(i.exists()?s.update(r,{migration:{by:n,at:Date.now()},...U()}):s.set(r,{_schema:3,migration:{by:n,at:Date.now()},...U()}),"go")})}async function hu(t,e,n,s){for(let r=0;r<s.length;r+=400){const i=ie(h);s.slice(r,r+400).forEach(a=>i.set(ut(t,e,n,a.id),{...a.data,...U()},{merge:!0})),await Y(i.commit())}}async function fu(t,e,n,s){await E(ct(t,e),{_schema:3,m:n||{},migratedAt:Date.now(),migration:{by:s,at:Date.now(),done:!0},...U()},{merge:!0})}export{Os as CLIENT_WRITE_VERSION,J as ROLE,Uc as addProjectTask,Qe as app,qc as approveAccessRequest,C as auth,zo as bDelete,$o as bGet,Go as bSet,Ko as bSubscribe,Mo as canManageRoles,Lo as canRead,Do as canWrite,be as countReads,h as db,Cc as deleteSalesAttachment,Dc as deleteStorageFile,xo as detectCurrentWsId,Xo as effectiveRole,Vo as ensureRoleAtFirstAccess,Ho as getBudgetOrgs,yc as getClientVersions,Gc as getGlobalBudgetOrgs,Zo as getGlobalDataOnce,_c as getLoginUsers,Hc as getMyAccessRequest,Bo as getMyRole,Fo as getWorkspace,No as handleRedirectResult,Jo as isBootstrapAdmin,wo as isOwner,Nc as listProjectGoals,Oc as listProjectWorkspaces,au as listV3Roots,_o as loginGoogle,Uo as logout,Mc as mergeMasterFields,Ec as mergeSalesDoc,Bc as mergeSalesMasters,ru as readLegacyMastersOnce,nu as readSalesCollOnce,su as readSalesDocOnce,ys as readStats,gc as recordLoginUser,$c as rejectAccessRequest,wc as reportClientVersion,tu as sales3FinishMigration,Zc as sales3MigrationLock,eu as sales3WriteMany,ec as setGlobalData,tc as setGlobalDataMerged,uc as setGlobalNoticeRead,ic as setGlobalOrgChart,ac as setGlobalOrgChartMerged,Io as setGlobalRole,Vc as setGlobalUserCompany,hc as setGlobalUserDept,sc as setGlobalUserRole,dc as setGlobalUserTitle,Ic as setMenuConfig,Tc as setMenuConfigKey,jo as setRole,Yc as setSales3Item,Rc as setSalesDoc,vo as setSalesMasters,Wo as setUserCompany,uu as setV3Item,Wc as submitAccessRequest,jc as subscribeAccessRequests,fc as subscribeGlobalCompanies,Qo as subscribeGlobalData,oc as subscribeGlobalDepts,cc as subscribeGlobalNoticeRead,rc as subscribeGlobalOrgChart,Yo as subscribeGlobalRoles,lc as subscribeGlobalTitles,mc as subscribeLoginUsers,Fc as subscribeMasterFields,pc as subscribeMenuConfig,zc as subscribeSales3Doc,Kc as subscribeSales3List,kc as subscribeSalesColl,bc as subscribeSalesDoc,xc as subscribeSalesMasters,nc as subscribeUserRoles,iu as subscribeV3Doc,ou as subscribeV3List,qo as subscribeWorkspace,Qc as updateSales3Doc,Xc as updateSales3Item,Jc as updateSales3ItemCas,lu as updateV3Doc,cu as updateV3Item,Ao as updateV3ItemCas,Lc as uploadStorageFile,fu as v3FinishMigration,du as v3MigrationLock,hu as v3WriteMany,Oo as watchAuth,Sc as writeSalesAttachment,Pc as writeSalesAttachmentChunked,vc as writeSalesItems,Ac as writeSalesItemsMerged};
