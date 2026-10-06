const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CuhRR5uS.js","./index-CZYznYw5.css"])))=>i.map(i=>d[i]);
import{_ as pn,c as Ss}from"./index-CuhRR5uS.js";import{r as Re,g as M,_ as gn,a as Ps,b as Cs,d as O,i as Ae,p as mn,e as Os,F as Ye,c as ft,C as pt,S as ge,f as gt,q as ve,E as It,h as Ns,j as Us,L as Ls,k as _n,l as Ds,m as Ms,n as xs,o as Fs,s as C,t as Bs,u as Vs,v as Ws,w as Hs}from"./index.esm-v97zNOB-.js";import{doc as p,getDoc as A,getDocs as D,collection as S,setDoc as R,updateDoc as me,deleteDoc as Tt,onSnapshot as _,initializeFirestore as js,persistentLocalCache as qs,CACHE_SIZE_UNLIMITED as $s,persistentMultipleTabManager as Gs,getFirestore as zs,writeBatch as se,query as Ks,where as Js,serverTimestamp as E,runTransaction as re,FieldPath as Xs,connectFirestoreEmulator as Ys,enableNetwork as Qs,disableNetwork as Zs}from"./index.esm-4dSbkLWS.js";var er="firebase",tr="12.16.0";/**
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
 */Re(er,tr,"app");/**
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
 */const wn="firebasestorage.googleapis.com",yn="storageBucket",nr=2*60*1e3,sr=10*60*1e3;/**
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
 */class I extends Ye{constructor(e,n,s=0){super(ct(e),`Firebase Storage: ${n} (${ct(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,I.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ct(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var y;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(y||(y={}));function ct(t){return"storage/"+t}function bt(){const t="An unknown error occurred, please check the error payload for server response.";return new I(y.UNKNOWN,t)}function rr(t){return new I(y.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ir(t){return new I(y.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ar(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(y.UNAUTHENTICATED,t)}function or(){return new I(y.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function cr(t){return new I(y.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ur(){return new I(y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lr(){return new I(y.CANCELED,"User canceled the upload/download.")}function dr(t){return new I(y.INVALID_URL,"Invalid URL '"+t+"'.")}function hr(t){return new I(y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function fr(){return new I(y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yn+"' property when initializing the app?")}function pr(){return new I(y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gr(){return new I(y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mr(t){return new I(y.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mt(t){return new I(y.INVALID_ARGUMENT,t)}function In(){return new I(y.APP_DELETED,"The Firebase app was deleted.")}function _r(t){return new I(y.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Te(t,e){return new I(y.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ie(t){throw new I(y.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class P{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=P.makeFromUrl(e,n)}catch{return new P(e,"")}if(s.path==="")return s;throw hr(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+r+a,"i"),o={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const l="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${l}/b/${r}/o${d}`,"i"),w={bucket:1,path:3},T=n===wn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",x=new RegExp(`^https?://${T}/${r}/${b}`,"i"),F=[{regex:c,indices:o,postModify:i},{regex:m,indices:w,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<F.length;v++){const Ue=F[v],at=Ue.regex.exec(e);if(at){const vs=at[Ue.indices.bucket];let ot=at[Ue.indices.path];ot||(ot=""),s=new P(vs,ot),Ue.postModify(s);break}}if(s==null)throw dr(e);return s}}class wr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function yr(t,e,n){let s=1,r=null,i=null,a=!1,c=0;function o(){return c===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function f(b){r=setTimeout(()=>{r=null,t(m,o())},b)}function d(){i&&clearTimeout(i)}function m(b,...x){if(u){d();return}if(b){d(),l.call(null,b,...x);return}if(o()||a){d(),l.call(null,b,...x);return}s<64&&(s*=2);let F;c===1?(c=2,F=0):F=(s+Math.random())*1e3,f(F)}let w=!1;function T(b){w||(w=!0,d(),!u&&(r!==null?(b||(c=2),clearTimeout(r),f(0)):b||(c=1)))}return f(0),i=setTimeout(()=>{a=!0,T(!0)},n),T}function Ir(t){t(!1)}/**
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
 */function Tr(t){return t!==void 0}function br(t){return typeof t=="object"&&!Array.isArray(t)}function Rt(t){return typeof t=="string"||t instanceof String}function jt(t){return Et()&&t instanceof Blob}function Et(){return typeof Blob<"u"}function qt(t,e,n,s){if(s<e)throw mt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw mt(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Qe(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Tn(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var ae;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ae||(ae={}));/**
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
 */function Rr(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class Er{constructor(e,n,s,r,i,a,c,o,u,l,f,d=!0,m=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=o,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=f,this.retry=d,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,T)=>{this.resolve_=w,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Le(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const o=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,u)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===ae.NO_ERROR,o=i.getStatus();if(!c||Rr(o,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===ae.ABORT;s(!1,new Le(!1,null,l));return}const u=this.successCodes_.indexOf(o)!==-1;s(!0,new Le(u,i))})},n=(s,r)=>{const i=this.resolve_,a=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const o=this.callback_(c,c.getResponse());Tr(o)?i(o):i()}catch(o){a(o)}else if(c!==null){const o=bt();o.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,o)):a(o)}else if(r.canceled){const o=this.appDelete_?In():lr();a(o)}else{const o=ur();a(o)}};this.canceled_?n(!1,new Le(!1,null,!0)):this.backoffId_=yr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ir(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Le{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function kr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ar(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Sr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Pr(t,e,n,s,r,i,a=!0,c=!1){const o=Tn(t.urlParams),u=t.url+o,l=Object.assign({},t.headers);return vr(l,e),kr(l,n),Ar(l,i),Sr(l,s),new Er(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,a,c)}/**
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
 */function Cr(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Or(...t){const e=Cr();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Et())return new Blob(t);throw new I(y.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Nr(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Ur(t){if(typeof atob>"u")throw mr("base-64");return atob(t)}/**
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
 */const V={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ut{constructor(e,n){this.data=e,this.contentType=n||null}}function Lr(t,e){switch(t){case V.RAW:return new ut(bn(e));case V.BASE64:case V.BASE64URL:return new ut(Rn(t,e));case V.DATA_URL:return new ut(Mr(e),xr(e))}throw bt()}function bn(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,a=t.charCodeAt(++n);s=65536|(i&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Dr(t){let e;try{e=decodeURIComponent(t)}catch{throw Te(V.DATA_URL,"Malformed data URL.")}return bn(e)}function Rn(t,e){switch(t){case V.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Te(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case V.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Te(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ur(e)}catch(r){throw r.message.includes("polyfill")?r:Te(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class En{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Te(V.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Fr(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Mr(t){const e=new En(t);return e.base64?Rn(V.BASE64,e.rest):Dr(e.rest)}function xr(t){return new En(t).contentType}function Fr(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Q{constructor(e,n){let s=0,r="";jt(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(jt(this.data_)){const s=this.data_,r=Nr(s,e,n);return r===null?null:new Q(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Q(s,!0)}}static getBlob(...e){if(Et()){const n=e.map(s=>s instanceof Q?s.data_:s);return new Q(Or.apply(null,n))}else{const n=e.map(a=>Rt(a)?Lr(V.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(a=>{for(let c=0;c<a.length;c++)r[i++]=a[c]}),new Q(r,!0)}}uploadData(){return this.data_}}/**
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
 */function kn(t){let e;try{e=JSON.parse(t)}catch{return null}return br(e)?e:null}/**
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
 */function Br(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Vr(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function An(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Wr(t,e){return e}class k{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Wr}}let De=null;function Hr(t){return!Rt(t)||t.length<2?t:An(t)}function vn(){if(De)return De;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(i,a){return Hr(a)}const n=new k("name");n.xform=e,t.push(n);function s(i,a){return a!==void 0?Number(a):a}const r=new k("size");return r.xform=s,t.push(r),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),De=t,De}function jr(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new P(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function qr(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const a=n[i];s[a.local]=a.xform(s,e[a.server])}return jr(s,t),s}function Sn(t,e,n){const s=kn(e);return s===null?null:qr(t,s,n)}function $r(t,e,n,s){const r=kn(e);if(r===null||!Rt(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,f=t.fullPath,d="/b/"+a(l)+"/o/"+a(f),m=Qe(d,n,s),w=Tn({alt:"media",token:u});return m+w})[0]}function Gr(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class kt{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Pn(t){if(!t)throw bt()}function zr(t,e){function n(s,r){const i=Sn(t,r,e);return Pn(i!==null),i}return n}function Kr(t,e){function n(s,r){const i=Sn(t,r,e);return Pn(i!==null),$r(i,r,t.host,t._protocol)}return n}function Cn(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=or():r=ar():n.getStatus()===402?r=ir(t.bucket):n.getStatus()===403?r=cr(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function On(t){const e=Cn(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=rr(t.path)),i.serverResponse=r.serverResponse,i}return n}function Jr(t,e,n){const s=e.fullServerUrl(),r=Qe(s,t.host,t._protocol),i="GET",a=t.maxOperationRetryTime,c=new kt(r,i,Kr(t,n),a);return c.errorHandler=On(e),c}function Xr(t,e){const n=e.fullServerUrl(),s=Qe(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function a(o,u){}const c=new kt(s,r,a,i);return c.successCodes=[200,204],c.errorHandler=On(e),c}function Yr(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Qr(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Yr(null,e)),s}function Zr(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let F="";for(let v=0;v<2;v++)F=F+Math.random().toString().slice(2);return F}const o=c();a["Content-Type"]="multipart/related; boundary="+o;const u=Qr(e,s,r),l=Gr(u,n),f="--"+o+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+o+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+o+"--",m=Q.getBlob(f,s,d);if(m===null)throw pr();const w={name:u.fullPath},T=Qe(i,t.host,t._protocol),b="POST",x=t.maxUploadRetryTime,j=new kt(T,b,zr(t,n),x);return j.urlParams=w,j.headers=a,j.body=m.uploadData(),j.errorHandler=Cn(e),j}class ei{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ae.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ae.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ae.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r,i){if(this.sent_)throw Ie("cannot .send() more than once");if(Ae(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ie("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ie("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ie("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ie("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ti extends ei{initXhr(){this.xhr_.responseType="text"}}function At(){return new ti}/**
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
 */class ce{constructor(e,n){this._service=e,n instanceof P?this._location=n:this._location=P.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ce(e,n)}get root(){const e=new P(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return An(this._location.path)}get storage(){return this._service}get parent(){const e=Br(this._location.path);if(e===null)return null;const n=new P(this._location.bucket,e);return new ce(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _r(e)}}function ni(t,e,n){t._throwIfRoot("uploadBytes");const s=Zr(t.storage,t._location,vn(),new Q(e,!0),n);return t.storage.makeRequestWithTokens(s,At).then(r=>({metadata:r,ref:t}))}function si(t){t._throwIfRoot("getDownloadURL");const e=Jr(t.storage,t._location,vn());return t.storage.makeRequestWithTokens(e,At).then(n=>{if(n===null)throw gr();return n})}function ri(t){t._throwIfRoot("deleteObject");const e=Xr(t.storage,t._location);return t.storage.makeRequestWithTokens(e,At)}function ii(t,e){const n=Vr(t._location.path,e),s=new P(t._location.bucket,n);return new ce(t.storage,s)}/**
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
 */function ai(t){return/^[A-Za-z]+:\/\//.test(t)}function oi(t,e){return new ce(t,e)}function Nn(t,e){if(t instanceof vt){const n=t;if(n._bucket==null)throw fr();const s=new ce(n,n._bucket);return e!=null?Nn(s,e):s}else return e!==void 0?ii(t,e):t}function ci(t,e){if(e&&ai(e)){if(t instanceof vt)return oi(t,e);throw mt("To use ref(service, url), the first argument must be a Storage instance.")}else return Nn(t,e)}function $t(t,e){const n=e==null?void 0:e[yn];return n==null?null:P.makeFromBucketSpec(n,t)}function ui(t,e,n,s={}){t.host=`${e}:${n}`;const r=Ae(e);r&&mn(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Os(i,t.app.options.projectId))}class vt{constructor(e,n,s,r,i,a=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=wn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nr,this._maxUploadRetryTime=sr,this._requests=new Set,r!=null?this._bucket=P.makeFromBucketSpec(r,this._host):this._bucket=$t(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=P.makeFromBucketSpec(this._url,e):this._bucket=$t(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(O(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ce(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new wr(In());{const a=Pr(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Gt="@firebase/storage",zt="0.14.3";/**
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
 */const Un="storage";function li(t,e,n){return t=M(t),ni(t,e,n)}function di(t){return t=M(t),si(t)}function hi(t){return t=M(t),ri(t)}function Ln(t,e){return t=M(t),ci(t,e)}function fi(t=Cs(),e){t=M(t);const s=gn(t,Un).getImmediate({identifier:e}),r=Ps("storage");return r&&Dn(s,...r),s}function Dn(t,e,n,s={}){ui(t,e,n,s)}function pi(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new vt(n,s,r,e,ge)}function gi(){ft(new pt(Un,pi,"PUBLIC").setMultipleInstances(!0)),Re(Gt,zt,""),Re(Gt,zt,"esm2020")}gi();function Mn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mi=Mn,xn=new It("auth","Firebase",Mn());/**
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
 */const He=new Ls("@firebase/auth");function _i(t,...e){He.logLevel<=_n.WARN&&He.warn(`Auth (${ge}): ${t}`,...e)}function Fe(t,...e){He.logLevel<=_n.ERROR&&He.error(`Auth (${ge}): ${t}`,...e)}/**
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
 */function H(t,...e){throw Pt(t,...e)}function U(t,...e){return Pt(t,...e)}function St(t,e,n){const s={...mi(),[e]:n};return new It("auth","Firebase",s).create(e,{appName:t.name})}function ne(t){return St(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fn(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&H(t,"argument-error"),St(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pt(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xn.create(t,...e)}function g(t,e,...n){if(!t)throw Pt(e,...n)}function $(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fe(e),new Error(e)}function J(t,e){t||$(e)}/**
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
 */function _t(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function wi(){return Kt()==="http:"||Kt()==="https:"}function Kt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function yi(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wi()||Ds()||"connection"in navigator)?navigator.onLine:!0}function Ii(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Se{constructor(e,n){this.shortDelay=e,this.longDelay=n,J(n>e,"Short delay should be less than long delay!"),this.isMobile=Ns()||Us()}get(){return yi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ct(t,e){J(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bn{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ti={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bi=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ri=new Se(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _e(t,e,n,s,r={}){return Vn(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=ve({...a,key:t.config.apiKey}).slice(1),o=await t._getAdditionalHeaders();o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:o,...i};return xs()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Ae(t.emulatorConfig.host)&&(u.credentials="include"),Bn.fetch()(await Wn(t,t.config.apiHost,n,c),u)})}async function Vn(t,e,n){t._canInitEmulator=!1;const s={...Ti,...e};try{const r=new ki(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Me(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[o,u]=c.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Me(t,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw Me(t,"email-already-in-use",a);if(o==="USER_DISABLED")throw Me(t,"user-disabled",a);const l=s[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw St(t,l,u);H(t,l)}}catch(r){if(r instanceof Ye)throw r;H(t,"network-request-failed",{message:String(r)})}}async function Ei(t,e,n,s,r={}){const i=await _e(t,e,n,s,r);return"mfaPendingCredential"in i&&H(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wn(t,e,n,s){const r=`${e}${n}?${s}`,i=t,a=i.config.emulator?Ct(t.config,r):`${t.config.apiScheme}://${r}`;return bi.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class ki{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(U(this.auth,"network-request-failed")),Ri.get())})}}function Me(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=U(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Ai(t,e){return _e(t,"POST","/v1/accounts:delete",e)}async function je(t,e){return _e(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function be(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vi(t,e=!1){const n=M(t),s=await n.getIdToken(e),r=Nt(s);g(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:be(lt(r.auth_time)),issuedAtTime:be(lt(r.iat)),expirationTime:be(lt(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lt(t){return Number(t)*1e3}function Nt(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Fe("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ms(n);return r?JSON.parse(r):(Fe("Failed to decode base64 JWT payload"),null)}catch(r){return Fe("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Jt(t){const e=Nt(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ee(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ye&&Si(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Si({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Pi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=be(this.lastLoginAt),this.creationTime=be(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qe(t){var f;const e=t.auth,n=await t.getIdToken(),s=await Ee(t,je(e,{idToken:n}));g(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(f=r.providerUserInfo)!=null&&f.length?Hn(r.providerUserInfo):[],a=Oi(t.providerData,i),c=t.isAnonymous,o=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?o:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new wt(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function Ci(t){const e=M(t);await qe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Oi(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Hn(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Ni(t,e){const n=await Vn(t,{},async()=>{const s=ve({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=await Wn(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:c,body:s};return t.emulatorConfig&&Ae(t.emulatorConfig.host)&&(o.credentials="include"),Bn.fetch()(a,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ui(t,e){return _e(t,"POST","/v2/accounts:revokeToken",Ot(t,e))}/**
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
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");const n=Jt(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ni(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new le;return s&&(g(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(g(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(g(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return $("not implemented")}}/**
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
 */function Y(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class N{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Pi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new wt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ee(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vi(this,e)}reload(){return Ci(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new N({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await qe(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(O(this.auth.app))return Promise.reject(ne(this.auth));const e=await this.getIdToken();return await Ee(this,Ai(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,o=n._redirectEventId??void 0,u=n.createdAt??void 0,l=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:w,stsTokenManager:T}=n;g(f&&T,e,"internal-error");const b=le.fromJSON(this.name,T);g(typeof f=="string",e,"internal-error"),Y(s,e.name),Y(r,e.name),g(typeof d=="boolean",e,"internal-error"),g(typeof m=="boolean",e,"internal-error"),Y(i,e.name),Y(a,e.name),Y(c,e.name),Y(o,e.name),Y(u,e.name),Y(l,e.name);const x=new N({uid:f,auth:e,email:r,emailVerified:d,displayName:s,isAnonymous:m,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:b,createdAt:u,lastLoginAt:l});return w&&Array.isArray(w)&&(x.providerData=w.map(j=>({...j}))),o&&(x._redirectEventId=o),x}static async _fromIdTokenResponse(e,n,s=!1){const r=new le;r.updateFromServerResponse(n);const i=new N({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await qe(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];g(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Hn(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new le;c.updateFromIdToken(s);const o=new N({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new wt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(o,u),o}}/**
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
 */const Xt=new Map;function G(t){J(t instanceof Function,"Expected a class definition");let e=Xt.get(t);return e?(J(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xt.set(t,e),e)}/**
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
 */class jn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jn.type="NONE";const Yt=jn;/**
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
 */function Be(t,e,n){return`firebase:${t}:${e}:${n}`}class de{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Be(this.userKey,r.apiKey,i),this.fullPersistenceKey=Be("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await je(this.auth,{idToken:e}).catch(()=>{});return n?N._fromGetAccountInfoResponse(this.auth,n,e):null}return N._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new de(G(Yt),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||G(Yt);const a=Be(s,e.config.apiKey,e.name);let c=null;for(const u of n)try{const l=await u._get(a);if(l){let f;if(typeof l=="string"){const d=await je(e,{idToken:l}).catch(()=>{});if(!d)break;f=await N._fromGetAccountInfoResponse(e,d,l)}else f=N._fromJSON(e,l);u!==i&&(c=f),i=u;break}}catch{}const o=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!o.length?new de(i,e,s):(i=o[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new de(i,e,s))}}/**
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
 */function Qt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jn(e))return"Blackberry";if(Xn(e))return"Webos";if($n(e))return"Safari";if((e.includes("chrome/")||Gn(e))&&!e.includes("edge/"))return"Chrome";if(Kn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qn(t=C()){return/firefox\//i.test(t)}function $n(t=C()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gn(t=C()){return/crios\//i.test(t)}function zn(t=C()){return/iemobile/i.test(t)}function Kn(t=C()){return/android/i.test(t)}function Jn(t=C()){return/blackberry/i.test(t)}function Xn(t=C()){return/webos/i.test(t)}function Ut(t=C()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Li(t=C()){var e;return Ut(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Di(){return Bs()&&document.documentMode===10}function Yn(t=C()){return Ut(t)||Kn(t)||Xn(t)||Jn(t)||/windows phone/i.test(t)||zn(t)}/**
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
 */function Qn(t,e=[]){let n;switch(t){case"Browser":n=Qt(C());break;case"Worker":n=`${Qt(C())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ge}/${s}`}/**
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
 */class Mi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const o=e(i);a(o)}catch(o){c(o)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function xi(t,e={}){return _e(t,"GET","/v2/passwordPolicy",Ot(t,e))}/**
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
 */const Fi=6;class Bi{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Fi,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Vi{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zt(this),this.idTokenSubscription=new Zt(this),this.beforeStateQueue=new Mi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=G(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await de.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await je(this,{idToken:e}),s=await N._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(O(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===c)&&(o!=null&&o.user)&&(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qe(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ii()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(O(this.app))return Promise.reject(ne(this));const n=e?M(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return O(this.app)?Promise.reject(ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return O(this.app)?Promise.reject(ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(G(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xi(this),n=new Bi(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new It("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ui(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&G(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await de.create(this,[G(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,s,r);return()=>{a=!0,o()}}else{const o=e.addObserver(n);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(O(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&_i(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function we(t){return M(t)}class Zt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vs(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wi(t){Lt=t}function Hi(t){return Lt.loadJS(t)}function ji(){return Lt.gapiScript}function qi(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function $i(t,e){const n=gn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(gt(i,e??{}))return r;H(r,"already-initialized")}return n.initialize({options:e})}function Gi(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(G);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function zi(t,e,n){const s=we(t);g(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!0,i=Zn(e),{host:a,port:c}=Ki(e),o=c===null?"":`:${c}`,u={url:`${i}//${a}${o}/`},l=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){g(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),g(gt(u,s.config.emulator)&&gt(l,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=l,s.settings.appVerificationDisabledForTesting=!0,Ae(a)&&mn(`${i}//${a}${o}`)}function Zn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ki(t){const e=Zn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:en(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:en(a)}}}function en(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}/**
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
 */class es{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $("not implemented")}_getIdTokenResponse(e){return $("not implemented")}_linkToIdToken(e,n){return $("not implemented")}_getReauthenticationResolver(e){return $("not implemented")}}/**
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
 */async function he(t,e){return Ei(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
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
 */const Ji="http://localhost";class ue extends es{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):H("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const a=new ue(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return he(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,he(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,he(e,n)}buildRequest(){const e={requestUri:Ji,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ve(n)}return e}}/**
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
 */class Ze{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pe extends Ze{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Z extends Pe{constructor(){super("facebook.com")}static credential(e){return ue._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Z.credential(e.oauthAccessToken)}catch{return null}}}Z.FACEBOOK_SIGN_IN_METHOD="facebook.com";Z.PROVIDER_ID="facebook.com";/**
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
 */class B extends Pe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ue._fromParams({providerId:B.PROVIDER_ID,signInMethod:B.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return B.credentialFromTaggedObject(e)}static credentialFromError(e){return B.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return B.credential(n,s)}catch{return null}}}B.GOOGLE_SIGN_IN_METHOD="google.com";B.PROVIDER_ID="google.com";/**
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
 */class ee extends Pe{constructor(){super("github.com")}static credential(e){return ue._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ee.credential(e.oauthAccessToken)}catch{return null}}}ee.GITHUB_SIGN_IN_METHOD="github.com";ee.PROVIDER_ID="github.com";/**
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
 */class te extends Pe{constructor(){super("twitter.com")}static credential(e,n){return ue._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return te.credential(n,s)}catch{return null}}}te.TWITTER_SIGN_IN_METHOD="twitter.com";te.PROVIDER_ID="twitter.com";/**
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
 */class fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await N._fromIdTokenResponse(e,s,r),a=tn(s);return new fe({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=tn(s);return new fe({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function tn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $e extends Ye{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,$e.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new $e(e,n,s,r)}}function ts(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$e._fromErrorAndOperation(t,i,e,s):i})}async function Xi(t,e,n=!1){const s=await Ee(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fe._forOperation(t,"link",s)}/**
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
 */async function Yi(t,e,n=!1){const{auth:s}=t;if(O(s.app))return Promise.reject(ne(s));const r="reauthenticate";try{const i=await Ee(t,ts(s,r,e,t),n);g(i.idToken,s,"internal-error");const a=Nt(i.idToken);g(a,s,"internal-error");const{sub:c}=a;return g(t.uid===c,s,"user-mismatch"),fe._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&H(s,"user-mismatch"),i}}/**
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
 */async function Qi(t,e,n=!1){if(O(t.app))return Promise.reject(ne(t));const s="signIn",r=await ts(t,s,e),i=await fe._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Zi(t,e,n,s){return M(t).onAuthStateChanged(e,n,s)}function ea(t){return M(t).signOut()}const Ge="__sak";/**
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
 */class ns{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ge,"1"),this.storage.removeItem(Ge),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ta=1e3,na=10;class ss extends ns{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,o)=>{this.notifyListeners(a,o)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Di()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,na):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ta)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ss.type="LOCAL";const sa=ss;/**
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
 */class rs extends ns{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rs.type="SESSION";const ra=rs;/**
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
 */function ia(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new et(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async u=>u(n.origin,i)),o=await ia(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}et.receivers=[];/**
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
 */function Dt(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,o)=>{const u=Dt("",20);r.port1.start();const l=setTimeout(()=>{o(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(d.data.response);break;default:clearTimeout(l),clearTimeout(i),o(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function W(){return window}function oa(t){W().location.href=t}/**
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
 */function is(){return typeof W().WorkerGlobalScope<"u"&&typeof W().importScripts=="function"}async function ca(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ua(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function la(){return is()?self:null}/**
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
 */const as="firebaseLocalStorageDb",da=1,ze="firebaseLocalStorage",os="fbase_key";class Ce{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tt(t,e){return t.transaction([ze],e?"readwrite":"readonly").objectStore(ze)}function ha(){const t=indexedDB.deleteDatabase(as);return new Ce(t).toPromise()}function cs(){const t=indexedDB.open(as,da);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ze,{keyPath:os})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ze)?e(s):(s.close(),await ha(),e(await cs()))})})}async function nn(t,e,n){const s=tt(t,!0).put({[os]:e,value:n});return new Ce(s).toPromise()}async function fa(t,e){const n=tt(t,!1).get(e),s=await new Ce(n).toPromise();return s===void 0?null:s.value}function sn(t,e){const n=tt(t,!0).delete(e);return new Ce(n).toPromise()}const pa=800,ga=3;class us{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=cs(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ga)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return is()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=et._getInstance(la()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await ca(),!this.activeServiceWorker)return;this.sender=new aa(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ua()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await nn(e,Ge,"1"),await sn(e,Ge)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nn(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fa(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=tt(r,!1).getAll();return new Ce(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}us.type="LOCAL";const ma=us;new Se(3e4,6e4);/**
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
 */function Mt(t,e){return e?G(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xt extends es{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return he(e,this._buildIdpRequest())}_linkToIdToken(e,n){return he(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return he(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _a(t){return Qi(t.auth,new xt(t),t.bypassAuthState)}function wa(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),Yi(n,new xt(t),t.bypassAuthState)}async function ya(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),Xi(n,new xt(t),t.bypassAuthState)}/**
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
 */class ls{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _a;case"linkViaPopup":case"linkViaRedirect":return ya;case"reauthViaPopup":case"reauthViaRedirect":return wa;default:H(this.auth,"internal-error")}}resolve(e){J(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){J(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ia=new Se(2e3,1e4);async function Ta(t,e,n){if(O(t.app))return Promise.reject(U(t,"operation-not-supported-in-this-environment"));const s=we(t);Fn(t,e,Ze);const r=Mt(s,n);return new ie(s,"signInViaPopup",e,r).executeNotNull()}class ie extends ls{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ie.currentPopupAction&&ie.currentPopupAction.cancel(),ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){J(this.filter.length===1,"Popup operations only handle one event");const e=Dt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(U(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(U(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(U(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ia.get())};e()}}ie.currentPopupAction=null;/**
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
 */const ba="pendingRedirect",Ve=new Map;class Ra extends ls{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ve.get(this.auth._key());if(!e){try{const s=await Ea(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ve.set(this.auth._key(),e)}return this.bypassAuthState||Ve.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ea(t,e){const n=hs(e),s=ds(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function ka(t,e){return ds(t)._set(hs(e),"true")}function Aa(t,e){Ve.set(t._key(),e)}function ds(t){return G(t._redirectPersistence)}function hs(t){return Be(ba,t.config.apiKey,t.name)}/**
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
 */function rn(t,e,n){return va(t,e,n)}async function va(t,e,n){if(O(t.app))return Promise.reject(ne(t));const s=we(t);Fn(t,e,Ze),await s._initializationPromise;const r=Mt(s,n);return await ka(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function Sa(t,e){return await we(t)._initializationPromise,fs(t,e,!1)}async function fs(t,e,n=!1){if(O(t.app))return Promise.reject(ne(t));const s=we(t),r=Mt(s,e),a=await new Ra(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const Pa=10*60*1e3;class Ca{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Oa(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ps(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(U(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pa&&this.cachedEventUids.clear(),this.cachedEventUids.has(an(e))}saveEventToCache(e){this.cachedEventUids.add(an(e)),this.lastProcessedEventTime=Date.now()}}function an(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ps({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Oa(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ps(t);default:return!1}}/**
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
 */async function Na(t,e={}){return _e(t,"GET","/v1/projects",e)}/**
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
 */const Ua=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,La=/^https?/;async function Da(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Na(t);for(const n of e)try{if(Ma(n))return}catch{}H(t,"unauthorized-domain")}function Ma(t){const e=_t(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!La.test(n))return!1;if(Ua.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const xa=new Se(3e4,6e4);function on(){const t=W().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fa(t){return new Promise((e,n)=>{var r,i,a;function s(){on(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{on(),n(U(t,"network-request-failed"))},timeout:xa.get()})}if((i=(r=W().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=W().gapi)!=null&&a.load)s();else{const c=qi("iframefcb");return W()[c]=()=>{gapi.load?s():n(U(t,"network-request-failed"))},Hi(`${ji()}?onload=${c}`).catch(o=>n(o))}}).catch(e=>{throw We=null,e})}let We=null;function Ba(t){return We=We||Fa(t),We}/**
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
 */const Va=new Se(5e3,15e3),Wa="__/auth/iframe",Ha="emulator/auth/iframe",ja={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $a(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ct(e,Ha):`https://${t.config.authDomain}/${Wa}`,s={apiKey:e.apiKey,appName:t.name,v:ge},r=qa.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ve(s).slice(1)}`}async function Ga(t){const e=await Ba(t),n=W().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:$a(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ja,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=U(t,"network-request-failed"),c=W().setTimeout(()=>{i(a)},Va.get());function o(){W().clearTimeout(c),r(s)}s.ping(o).then(o,()=>{i(a)})}))}/**
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
 */const za={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ka=500,Ja=600,Xa="_blank",Ya="http://localhost";class cn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qa(t,e,n,s=Ka,r=Ja){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const o={...za,width:s.toString(),height:r.toString(),top:i,left:a},u=C().toLowerCase();n&&(c=Gn(u)?Xa:n),qn(u)&&(e=e||Ya,o.scrollbars="yes");const l=Object.entries(o).reduce((d,[m,w])=>`${d}${m}=${w},`,"");if(Li(u)&&c!=="_self")return Za(e||"",c),new cn(null);const f=window.open(e||"",c,l);g(f,t,"popup-blocked");try{f.focus()}catch{}return new cn(f)}function Za(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const eo="__/auth/handler",to="emulator/auth/handler",no=encodeURIComponent("fac");async function un(t,e,n,s,r,i){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ge,eventId:r};if(e instanceof Ze){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Ws(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,f]of Object.entries({}))a[l]=f}if(e instanceof Pe){const l=e.getScopes().filter(f=>f!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const l of Object.keys(c))c[l]===void 0&&delete c[l];const o=await t._getAppCheckToken(),u=o?`#${no}=${encodeURIComponent(o)}`:"";return`${so(t)}?${ve(c).slice(1)}${u}`}function so({config:t}){return t.emulator?Ct(t,to):`https://${t.authDomain}/${eo}`}/**
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
 */const dt="webStorageSupport";class ro{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ra,this._completeRedirectFn=fs,this._overrideRedirectResult=Aa}async _openPopup(e,n,s,r){var a;J((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await un(e,n,s,_t(),r);return Qa(e,i,Dt())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await un(e,n,s,_t(),r);return oa(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(J(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ga(e),s=new Ca(e);return n.register("authEvent",r=>(g(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dt,{type:dt},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[dt];i!==void 0&&n(!!i),H(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Da(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yn()||$n()||Ut()}}const io=ro;var ln="@firebase/auth",dn="1.13.3";/**
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
 */class ao{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oo(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function co(t){ft(new pt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;g(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const o={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qn(t)},u=new Vi(s,r,i,o);return Gi(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ft(new pt("auth-internal",e=>{const n=we(e.getProvider("auth").getImmediate());return(s=>new ao(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(ln,dn,oo(t)),Re(ln,dn,"esm2020")}/**
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
 */const uo=5*60;Fs("authIdTokenMaxAge");function lo(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Wi({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=U("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",lo().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});co("Browser");const ho={apiKey:"AIzaSyB8QE3JylXkXWmg_rF2ZuczixnRYJZlRnE",authDomain:"airmore-task-management-app.firebaseapp.com",projectId:"airmore-task-management-app",storageBucket:"airmore-task-management-app.firebasestorage.app",messagingSenderId:"674161520247",appId:"1:674161520247:web:fe0e0f9d0656008fbaa072",measurementId:"G-VFS9X3L72E"},Ke=Hs(ho),z=$i(Ke,{persistence:[ma,sa],popupRedirectResolver:io}),gs={server:0,since:Date.now()},ye=t=>{gs.server+=Math.max(0,t|0)};try{window.__hittatsuReads=gs}catch{}const h=(()=>{try{return js(Ke,{localCache:qs({tabManager:Gs(),cacheSizeBytes:$s})})}catch(t){return console.warn("Firestore永続キャッシュの初期化に失敗。キャッシュ無しで継続します:",t&&t.message),zs(Ke)}})(),ms=(()=>{try{return/^(localhost|127\.0\.0\.1|[a-z0-9-]+\.localhost)$/.test(location.hostname)&&localStorage.getItem("hittatsu_emulator")==="1"}catch{return!1}})();if(ms)try{Ys(h,"127.0.0.1",8080),zi(z,"http://127.0.0.1:9099",{disableWarnings:!0}),console.warn("[firebase] エミュレーターに接続しています(開発用)"),window.__fsNetwork={off:()=>Zs(h),on:()=>Qs(h)}}catch(t){console.warn("[firebase] emulator setup failed",t)}function vo(t){return Zi(z,t)}async function fo(){const t=new B;t.setCustomParameters({prompt:"select_account"}),t.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"),t.addScope("https://www.googleapis.com/auth/calendar.readonly"),t.addScope("https://www.googleapis.com/auth/drive.metadata.readonly");try{const e=await Ta(z,t);return _s(e),e.user}catch(e){const n=e&&e.code||"";if(n==="auth/popup-blocked"){const{showPopupBlockedHelp:s}=await pn(async()=>{const{showPopupBlockedHelp:r}=await import("./index-CuhRR5uS.js").then(i=>i.p);return{showPopupBlockedHelp:r}},__vite__mapDeps([0,1]),import.meta.url);return s({what:"Googleへのログイン",onRetry:()=>{fo().catch(()=>{})},altLabel:"このまま画面を切り替えてログイン",onAlt:()=>{rn(z,t).catch(()=>{})}}),null}if(n==="auth/cancelled-popup-request"||n==="auth/popup-closed-by-user"||n==="auth/operation-not-supported-in-this-environment")return await rn(z,t),null;throw e}}function _s(t){try{const e=B.credentialFromResult(t);e&&e.accessToken&&(window.__sheetsTokenFromLogin={token:e.accessToken,at:Date.now()})}catch{}}async function So(){try{const t=await Sa(z);return t&&_s(t),(t==null?void 0:t.user)||null}catch(t){return console.warn("redirect result:",t),null}}async function Po(){await ea(z)}const K={ADMIN:"admin",EDITOR:"editor",VIEWER:"viewer"};function Co(t){return t===K.ADMIN||t===K.EDITOR||t===K.VIEWER}function Oo(t){return t===K.ADMIN||t===K.EDITOR}function No(t){return t===K.ADMIN}function Uo(){try{const e=new URL(window.location.href).searchParams.get("ws");if(e)return localStorage.setItem("hittatsu_current_ws",e),e}catch{}return localStorage.getItem("hittatsu_current_ws")||null}async function Lo(t){if(!t)return null;const e=await A(p(h,"workspaces",t));return e.exists()?{id:e.id,...e.data()}:null}function Do(t,e){return!t||!e?null:(t.budgetRoles||{})[e]||null}function po(t,e){if(!t||!e)return!1;const n=(t.authMembers||[]).find(s=>s&&s.email===e);return n&&n.role==="owner"}async function Mo(t,e,n){if(!t||!e||!n)return null;const s=(n.budgetRoles||{})[e];if(s)return s;const r=po(n,e)?K.ADMIN:K.VIEWER;try{const i={...n.budgetRoles||{},[e]:r};return await me(p(h,"workspaces",t),{budgetRoles:i}),r}catch(i){return console.warn("ensureRoleAtFirstAccess failed:",i),null}}async function X(t,e,n,s,r=!0){return re(h,async i=>{const a=await i.get(t);if(!r&&!a.exists())return!1;const o={...a.exists()?(a.data()||{})[e]||{}:{}};return s==null||s===""?delete o[n]:o[n]=s,r?i.set(t,{...a.exists()?a.data():{},[e]:o,updatedAt:E()}):i.update(t,{[e]:o}),!0})}async function xo(t,e,n){return!t||!e?!1:X(p(h,"workspaces",t),"userCompanies",e,n,!1)}async function Fo(t){if(!t)return[];try{const e=await A(p(h,"workspaces",t,"budget","airmore-budget-v4"));if(!e.exists())return[];const n=e.data()||{};let s=null;try{s=JSON.parse(n.value||"{}")}catch{s={}}return Array.isArray(s.orgs)?s.orgs.map(r=>r.name).filter(Boolean):[]}catch(e){return console.warn("getBudgetOrgs failed:",e),[]}}async function Bo(t,e,n){return!t||!e?!1:X(p(h,"workspaces",t),"budgetRoles",e,n,!1)}function Vo(t,e){return _(p(h,"workspaces",t),n=>{n.exists()?e({id:n.id,...n.data()}):e(null)})}const go=t=>S(h,"workspaces",t,"budget");async function Wo(t,e){const n=await A(p(h,"workspaces",t,"budget",Ft(e)));return n.exists()?(n.data()||{}).value??null:null}async function Ho(t,e,n){await R(p(h,"workspaces",t,"budget",Ft(e)),{key:e,value:n,updatedAt:E()})}async function jo(t,e){await Tt(p(h,"workspaces",t,"budget",Ft(e)))}function qo(t,e){return _(go(t),n=>{const s={};n.forEach(r=>{const i=r.data();s[i.key||r.id]=i.value}),e(s)})}function Ft(t){return String(t).replace(/[/.#$\[\]]/g,"_").slice(0,250)}const ws=new Set(["sarazawa@n-airmore.com"]);function $o(t){return!!t&&ws.has(t)}function Go(t,e){return t?ws.has(t)?K.ADMIN:(e||{})[t]||null:null}const yt=()=>p(h,"globalBudget","roles"),pe=()=>p(h,"globalBudget","data"),ys=()=>p(h,"globalBudget","userCompanies"),Bt=()=>p(h,"globalBudget","menuConfig"),Is=()=>p(h,"globalBudget","userDepts"),Ts=()=>p(h,"globalBudget","userTitles"),bs=()=>p(h,"globalBudget","noticeRead"),Je=()=>p(h,"globalBudget","orgChart"),Rs=()=>p(h,"globalBudget","userRoles"),Xe=()=>p(h,"globalBudget","users");function zo(t,e){return _(yt(),n=>{t(n.exists()?n.data().roles||{}:{})},e)}async function mo(t,e){const n=await A(yt()),r={...n.exists()?n.data().roles||{}:{}};e?r[t]=e:delete r[t],await R(yt(),{roles:r,updatedAt:E()})}function Ko(t,e){return _(pe(),t,e)}async function Jo(){const t=await A(pe());return t.exists()?t.data():null}async function Xo(t,e){await R(pe(),{value:t,updatedAt:E(),_writer:e})}async function Yo(t,e){return re(h,async n=>{const s=await n.get(pe()),r=s.exists()&&(s.data()||{}).value||null,i=t(r);return n.set(pe(),{value:i,updatedAt:E(),_writer:e}),i})}function Qo(t,e){return _(Rs(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function Zo(t,e){await X(Rs(),"map",String(t).toLowerCase(),e)}function ec(t,e){return _(Je(),n=>{const s=n.exists()?n.data():{};t({companies:s.companies||[],startMonth:s.startMonth||0})},e)}async function tc(t,e){await R(Je(),{companies:t||[],startMonth:e||4,updatedAt:E()})}async function nc(t,e){return re(h,async n=>{const s=await n.get(Je()),r=s.exists()?s.data()||{}:{},i=t(Array.isArray(r.companies)?r.companies:[]);return n.set(Je(),{companies:i,startMonth:e||r.startMonth||4,updatedAt:E()}),i})}function sc(t,e){return _(Is(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function rc(t,e){return _(bs(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function ic(t,e){await X(bs(),"map",String(t).toLowerCase(),e||[])}function ac(t,e){return _(Ts(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function oc(t,e){await X(Ts(),"map",String(t).toLowerCase(),e)}async function cc(t,e){await X(Is(),"map",String(t).toLowerCase(),e)}function uc(t,e){return _(ys(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function lc(t,e){return _(Bt(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function dc(t,e){const n=String(t||"").toLowerCase();if(!n)return;const s=await A(Xe()),i=(s.exists()?s.data().map||{}:{})[n];i&&i.name===(e||"")||await X(Xe(),"map",n,{email:t,name:e||"",at:new Date().toISOString()})}function hc(t,e){return _(Xe(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function fc(){const t=await A(Xe());return t.exists()?t.data().map||{}:{}}async function pc(t,e){t&&await R(p(h,"globalBudget","clients"),{map:{[t]:e}},{merge:!0})}async function gc(){const t=await A(p(h,"globalBudget","clients"));return t.exists()?t.data().map||{}:{}}async function mc(t){await R(Bt(),{map:t,updatedAt:E()})}async function _c(t,e){await X(Bt(),"map",t,e&&e.length?e:void 0)}const nt=t=>p(h,"salesWs",t),L=(t,e)=>S(h,"salesWs",t,e);function wc(t,e,n){return _(nt(t),s=>e(s.exists()?s.data():null),n)}async function yc(t,e){await R(nt(t),{...e,updatedAt:E()},{merge:!0})}async function Ic(t,e){const n=nt(t);return re(h,async s=>{const r=await s.get(n),i=r.exists()?r.data()||{}:{},a=e(i)||{};return Object.keys(a).length?(r.exists()?s.update(n,{...a,updatedAt:E()}):s.set(n,{...a,updatedAt:E()}),a):{}})}function Tc(t,e,n,s){return _(L(t,e),r=>{r.metadata.fromCache||ye(r.docChanges().length),n(r.docs.map(i=>i.data()))},s)}async function bc(t,e,n,s){const r=[...n.map(i=>({kind:"set",it:i})),...(s||[]).map(i=>({kind:"del",id:i}))];for(let i=0;i<r.length;i+=400){const a=se(h);for(const c of r.slice(i,i+400))c.kind==="set"?a.set(p(L(t,e),c.it.id),c.it):a.delete(p(L(t,e),c.id));await a.commit()}}async function Rc(t,e,n,s){const r=new Array(n.length),i=async a=>{const c=p(L(t,e),a.id);return await re(h,async u=>{const l=await u.get(c),f=s(a,l.exists()?l.data():null);return f==null?null:(u.set(c,f),f)})};for(let a=0;a<n.length;a+=8){const c=n.slice(a,a+8);(await Promise.all(c.map(i))).forEach((u,l)=>r[a+l]=u)}return r}async function Ec(t,e){await R(p(L(t,"attachments"),e.id),e)}async function kc(t,e,n,s){const r=se(h);for(const i of n)r.set(p(L(t,"attachments"),i.id),i);r.set(p(L(t,"attachments"),e.id),e);for(let i=n.length;i<(s||0);i++)r.delete(p(L(t,"attachments"),`${e.id}#${i}`));await r.commit()}async function Ac(t,e,n){if(n>0){const s=se(h);s.delete(p(L(t,"attachments"),e));for(let r=0;r<n;r++)s.delete(p(L(t,"attachments"),`${e}#${r}`));await s.commit();return}await Tt(p(L(t,"attachments"),e))}async function vc(t){return(await D(Ks(S(h,"workspaces"),Js("memberEmails","array-contains",t)))).docs.map(n=>{const s=n.data()||{};return{id:n.id,name:s.wsName||s.profile&&s.profile.companyName||n.id,statuses:Array.isArray(s.statuses)?s.statuses:[],members:(Array.isArray(s.authMembers)?s.authMembers:[]).map(r=>r&&r.name).filter(Boolean),schema:Number(s._schemaVersion||0)}}).sort((n,s)=>n.name.localeCompare(s.name,"ja"))}async function Es(t){try{const e=await A(p(h,"sync3","pm-"+t));return e.exists()&&!!(e.data()||{}).migratedAt}catch{return!1}}async function Sc(t){const e=await Es(t);return(await D(e?S(h,"sync3","pm-"+t,"goals"):S(h,"workspaces",t,"goals"))).docs.map(s=>{const r=s.data()||{};return e&&r._deleted?null:{id:r.id||s.id,name:r.name||"",status:r.status||""}}).filter(Boolean)}async function Pc(t,e){const n=p(h,"workspaces",t),s=await Es(t),[r,i,a]=await Promise.all([A(n),D(S(h,"workspaces",t,"tasks")),s?D(S(h,"sync3","pm-"+t,"tasks")):Promise.resolve(null)]),c=r.data()||{},o=new Set(i.docs.map(d=>d.id));a&&a.docs.forEach(d=>o.add(d.id)),(c._tombstones||[]).forEach(d=>d&&d.kind==="tasks"&&d.id&&o.add(d.id));let u=Number(c.seq&&c.seq.dailyTask||0);o.forEach(d=>{const m=/^D-(\d+)$/.exec(d);m&&(u=Math.max(u,Number(m[1])))});let l="";for(let d=0;d<1e3&&(u++,l="D-"+String(u).padStart(3,"0"),!!o.has(l));d++);const f={...e,id:l,_modAt:Date.now()};if(s){const{enc:d}=await pn(async()=>{const{enc:T}=await import("./index-CuhRR5uS.js").then(b=>b.h);return{enc:T}},__vite__mapDeps([0,1]),import.meta.url),{_modAt:m,...w}=f;await R(p(h,"sync3","pm-"+t,"tasks",l),{...d(w),_schema:3,_at:Date.now(),_by:z.currentUser&&z.currentUser.email||""})}else await R(p(h,"workspaces",t,"tasks",l),f);try{await me(n,{"seq.dailyTask":u})}catch(d){console.warn("seq.dailyTask の更新に失敗(タスクは追加済み):",d)}return l}let xe=null,hn=!1;const ks=()=>{if(!xe&&(xe=fi(Ke),ms&&!hn)){hn=!0;try{Dn(xe,"127.0.0.1",9199)}catch{}}return xe};async function Cc(t,e,n){const s=Ln(ks(),t);return await li(s,e,{contentType:n||void 0}),await di(s)}async function Oc(t){try{await hi(Ln(ks(),t))}catch(e){if(e&&e.code==="storage/object-not-found")return;throw e}}const Oe=t=>p(h,"salesMasters",t),oe=t=>S(h,"salesWs",t,"masters"),_o=8e5,fn=25e4,wo=t=>new TextEncoder().encode(t).length,yo=t=>/exceeds the maximum allowed size|too large|INVALID_ARGUMENT/i.test(String((t==null?void 0:t.message)||t)),ke=new Set;function Vt(t){const e=t.find(s=>s._id==="head");if(!e||!e.of)return null;const n=t.filter(s=>s.part!=null&&s.rev===e.rev).sort((s,r)=>s.part-r.part);if(n.length!==e.of||n.some((s,r)=>s.part!==r))return null;try{return JSON.parse(n.map(s=>s.data).join(""))}catch{return null}}const q=(t,e)=>S(h,"salesWs",t,e),ht=25e4;function Wt(t){const e={},n=new Map;return t.forEach(s=>{if(s._id.includes("#")){const[r]=s._id.split("#");n.set(r,[...n.get(r)||[],s])}}),t.forEach(s=>{if(!s._id.includes("#")){if(s.chunks){const r=(n.get(s._id)||[]).filter(i=>i.rev===s.rev).sort((i,a)=>i.part-a.part);if(r.length!==s.chunks)return;try{e[s._id]=JSON.parse(r.map(i=>i.data).join(""))}catch{}}else if(s.json!==void 0)try{e[s._id]=JSON.parse(s.json)}catch{}}}),e}async function Nc(t,e){const n=await D(q(t,"mFields")),s=Wt(n.docs.map(o=>({_id:o.id,...o.data()}))),r=e(s)||{},i=Object.keys(r);if(!i.length)return{};const a=se(h),c=new Set(n.docs.map(o=>o.id));for(const o of i){const u=JSON.stringify(r[o]===void 0?null:r[o]),l=String(Date.now());if(c.forEach(f=>{f.startsWith(o+"#")&&a.delete(p(q(t,"mFields"),f))}),u.length<=ht)a.set(p(q(t,"mFields"),o),{json:u,updatedAt:E()});else{const f=[];for(let d=0;d<u.length;d+=ht)f.push(u.slice(d,d+ht));f.forEach((d,m)=>a.set(p(q(t,"mFields"),o+"#"+m),{part:m,rev:l,data:d})),a.set(p(q(t,"mFields"),o),{chunks:f.length,rev:l,updatedAt:E()})}}return await a.commit(),r}function Uc(t,e,n){let s,r,i,a;const c=()=>{if(s===void 0||r===void 0||i===void 0||a===void 0)return;const d={},m=a||{},w=[];for(const[T,b]of Object.entries(m))T==="customers"||T==="products"||T.startsWith("_")||T==="updatedAt"||T in i||(d[T]=b,w.push(T));Object.assign(d,i),d.customers=s.length?s:m.customers||[],d.products=r.length?r:m.products||[],d._legacyLists={customers:!s.length,products:!r.length},d._legacyFields=w,e(d)},o=_(q(t,"mCustomers"),d=>{s=d.docs.map(m=>m.data()),c()},n),u=_(q(t,"mProducts"),d=>{r=d.docs.map(m=>m.data()),c()},n),l=_(q(t,"mFields"),d=>{i=Wt(d.docs.map(m=>({_id:m.id,...m.data()}))),c()},n),f=As(t,d=>{a=d||null,c()},n);return()=>{o(),u(),l(),f()}}function Lc(t,e,n){let s,r;const i=()=>{if(s===void 0||r===void 0)return;const o={},u=[];for(const[l,f]of Object.entries(r||{}))l==="customers"||l==="products"||l.startsWith("_")||l==="updatedAt"||l in s||(o[l]=f,u.push(l));Object.assign(o,s),o._legacyFields=u,e(o)},a=_(q(t,"mFields"),o=>{o.metadata.fromCache||ye(o.docChanges().length),s=Wt(o.docs.map(u=>({_id:u.id,...u.data()}))),i()},n),c=As(t,o=>{r=o||null,i()},n);return()=>{a(),c()}}function As(t,e,n){let s,r;const i=()=>{s===void 0||r===void 0||e(r||s)},a=_(Oe(t),o=>{s=o.exists()?o.data():null,i()},n),c=_(oe(t),o=>{const u=o.docs.map(l=>({_id:l.id,...l.data()}));u.some(l=>l._id==="head")?ke.add(t):ke.delete(t),r=Vt(u),i()},n);return()=>{a(),c()}}async function Io(t){const e=await D(oe(t));if(e.empty)return;const n=se(h);e.docs.forEach(s=>n.delete(s.ref)),await n.commit(),ke.delete(t)}async function To(t,e,n){const s=JSON.stringify(e),r=String(Date.now()),i=[];for(let o=0;o<s.length;o+=fn)i.push(s.slice(o,o+fn));const a=se(h);i.forEach((o,u)=>a.set(p(oe(t),"p"+u),{part:u,of:i.length,rev:r,data:o})),(await D(oe(t))).docs.forEach(o=>{if(o.id!=="head"&&!/^p\d+$/.test(o.id))return;(o.id==="head"?-1:Number(o.id.slice(1)))>=i.length&&a.delete(o.ref)}),a.set(p(oe(t),"head"),{of:i.length,rev:r,updatedAt:E(),_writer:n||""}),await a.commit(),ke.add(t),await Tt(Oe(t)).catch(()=>{})}async function Dc(t,e,n){let s=null;try{const i=await A(Oe(t)),c=(await D(oe(t))).docs.map(u=>({_id:u.id,...u.data()}));s=(c.some(u=>u._id==="head")?Vt(c):null)||(i.exists()?i.data():null)}catch(i){throw i}const r=e(s);return await bo(t,r,n),r}async function bo(t,e,n){const s={...e,_writer:n||""};if(wo(JSON.stringify(s))<_o)try{await R(Oe(t),{...s,updatedAt:E()}),ke.has(t)&&await Io(t);return}catch(r){if(!yo(r))throw r}await To(t,s,n)}async function Mc(t,e){await X(ys(),"map",t,e)}async function xc(t,e,n){if(!t)throw new Error("email required");await R(p(h,"budgetAccessRequests",t),{email:t,name:e||"",message:n||"",status:"pending",requestedAt:E()})}async function Fc(t){if(!t)return null;const e=await A(p(h,"budgetAccessRequests",t));return e.exists()?e.data():null}function Bc(t,e){return _(S(h,"budgetAccessRequests"),n=>{const s=[];n.forEach(r=>s.push({id:r.id,...r.data()})),t(s)},e)}async function Vc(t,e){t&&(await mo(t,e||"viewer"),await R(p(h,"budgetAccessRequests",t),{email:t,status:"approved",approvedAt:E(),approvedAs:e||"viewer"},{merge:!0}))}async function Wc(t){t&&await R(p(h,"budgetAccessRequests",t),{email:t,status:"rejected",rejectedAt:E()},{merge:!0})}async function Hc(){const t=await A(pe());if(!t.exists())return[];const e=t.data()||{};let n=null;try{n=JSON.parse(e.value||"{}")}catch{n={}}return Array.isArray(n.orgs)?n.orgs.map(s=>s.name).filter(Boolean):[]}const st=t=>p(h,"sales3",t),Ht=(t,e,n)=>p(h,"sales3",t,e,n),Ne=t=>{const e=[];for(const[n,s]of t)e.push(new Xs(...n),s===void 0?null:s);return e};function jc(t,e,n){return _(st(t),{includeMetadataChanges:!0},s=>e(s.exists()?s.data():null,s.metadata.fromCache),n)}function qc(t,e,n,s){let r=!0;return _(S(h,"sales3",t,e),{includeMetadataChanges:!0},i=>{const a=i.docChanges({includeMetadataChanges:!0}).map(c=>({id:c.doc.id,data:c.type==="removed"?null:c.doc.data(),pending:c.doc.metadata.hasPendingWrites}));(a.length||r||!i.metadata.fromCache)&&n(a,i.metadata.fromCache,r),r=!1},s)}async function $c(t,e,n,s,r,i,a){return Ro("sales3",t,e,n,s,r,i,a)}async function Gc(t,e,n,s,r){await me(Ht(t,e,n),...Ne([...s,[["_at"],Date.now()],[["_by"],r||""]]))}async function zc(t,e,n,s){await R(Ht(t,e,n),s,{merge:!0})}async function Kc(t,e){await me(st(t),...Ne([...e,[["_at"],Date.now()]]))}async function Jc(t,e){return re(h,async n=>{const s=st(t),r=await n.get(s),i=r.exists()?r.data()||{}:{};if(i.migratedAt)return"done";const a=i.migration||{};return a.at&&Date.now()-a.at<10*60*1e3&&a.by!==e?"wait":(r.exists()?n.update(s,{migration:{by:e,at:Date.now()}}):n.set(s,{_schema:3,migration:{by:e,at:Date.now()}}),"go")})}async function Xc(t,e,n){for(let s=0;s<n.length;s+=400){const r=se(h);n.slice(s,s+400).forEach(i=>r.set(Ht(t,e,i.id),i.data,{merge:!0})),await r.commit()}}async function Yc(t,e,n){await R(st(t),{_schema:3,m:e||{},migratedAt:Date.now(),migration:{by:n,at:Date.now(),done:!0}},{merge:!0})}async function Qc(t,e){const n=await D(S(h,"salesWs",t,e));return ye(n.size),n.docs.map(s=>s.data())}async function Zc(t){const e=await A(nt(t));return e.exists()?e.data():null}async function eu(t){let e=null;try{const s=await A(Oe(t));e=s.exists()?s.data():null}catch{}let n=null;try{const s=await D(oe(t));n=Vt(s.docs.map(r=>({_id:r.id,...r.data()})))}catch{}return{inline:e,chunked:n}}const rt=(t,e)=>p(h,t,e),it=(t,e,n,s)=>p(h,t,e,n,s);function tu(t,e,n,s){return _(rt(t,e),{includeMetadataChanges:!0},r=>{r.metadata.fromCache||ye(1),n(r.exists()?r.data():null,r.metadata.fromCache)},s)}async function nu(t){const e=await D(S(h,t));return ye(e.size),e.docs.map(n=>n.id)}function su(t,e,n,s,r){let i=!0;return _(S(h,t,e,n),{includeMetadataChanges:!0},a=>{a.metadata.fromCache||ye(a.docChanges().length);const c=a.docChanges({includeMetadataChanges:!0}).map(o=>({id:o.doc.id,data:o.type==="removed"?null:o.doc.data(),pending:o.doc.metadata.hasPendingWrites}));(c.length||i||!a.metadata.fromCache)&&s(c,a.metadata.fromCache,i),i=!1},r)}async function Ro(t,e,n,s,r,i,a,c){const o=it(t,e,n,s);return re(h,async u=>{const l=await u.get(o),f=[[["_at"],Date.now()],[["_by"],c||""]];if(!l.exists())return u.set(o,{...a||{},_schema:3,_at:Date.now(),_by:c||""},{merge:!0}),{rejected:[],written:r,doc:null};const d=l.data(),{ok:m,rejected:w}=Ss(d,r,i||[]);return m.length&&u.update(o,...Ne([...m,...f])),{rejected:w,written:m,doc:w.length?d:null}})}async function ru(t,e,n,s,r,i){await me(it(t,e,n,s),...Ne([...r,[["_at"],Date.now()],[["_by"],i||""]]))}async function iu(t,e,n,s,r){await R(it(t,e,n,s),r,{merge:!0})}async function au(t,e,n){await me(rt(t,e),...Ne([...n,[["_at"],Date.now()]]))}async function ou(t,e,n){return re(h,async s=>{const r=rt(t,e),i=await s.get(r),a=i.exists()?i.data()||{}:{};if(a.migratedAt)return"done";const c=a.migration||{};return c.at&&Date.now()-c.at<10*60*1e3&&c.by!==n?"wait":(i.exists()?s.update(r,{migration:{by:n,at:Date.now()}}):s.set(r,{_schema:3,migration:{by:n,at:Date.now()}}),"go")})}async function cu(t,e,n,s){for(let r=0;r<s.length;r+=400){const i=se(h);s.slice(r,r+400).forEach(a=>i.set(it(t,e,n,a.id),a.data,{merge:!0})),await i.commit()}}async function uu(t,e,n,s){await R(rt(t,e),{_schema:3,m:n||{},migratedAt:Date.now(),migration:{by:s,at:Date.now(),done:!0}},{merge:!0})}export{K as ROLE,Pc as addProjectTask,Ke as app,Vc as approveAccessRequest,z as auth,jo as bDelete,Wo as bGet,Ho as bSet,qo as bSubscribe,No as canManageRoles,Co as canRead,Oo as canWrite,ye as countReads,h as db,Ac as deleteSalesAttachment,Oc as deleteStorageFile,Uo as detectCurrentWsId,Go as effectiveRole,Mo as ensureRoleAtFirstAccess,Fo as getBudgetOrgs,gc as getClientVersions,Hc as getGlobalBudgetOrgs,Jo as getGlobalDataOnce,fc as getLoginUsers,Fc as getMyAccessRequest,Do as getMyRole,Lo as getWorkspace,So as handleRedirectResult,$o as isBootstrapAdmin,po as isOwner,Sc as listProjectGoals,vc as listProjectWorkspaces,nu as listV3Roots,fo as loginGoogle,Po as logout,Nc as mergeMasterFields,Ic as mergeSalesDoc,Dc as mergeSalesMasters,eu as readLegacyMastersOnce,Qc as readSalesCollOnce,Zc as readSalesDocOnce,gs as readStats,dc as recordLoginUser,Wc as rejectAccessRequest,pc as reportClientVersion,Yc as sales3FinishMigration,Jc as sales3MigrationLock,Xc as sales3WriteMany,Xo as setGlobalData,Yo as setGlobalDataMerged,ic as setGlobalNoticeRead,tc as setGlobalOrgChart,nc as setGlobalOrgChartMerged,mo as setGlobalRole,Mc as setGlobalUserCompany,cc as setGlobalUserDept,Zo as setGlobalUserRole,oc as setGlobalUserTitle,mc as setMenuConfig,_c as setMenuConfigKey,Bo as setRole,zc as setSales3Item,yc as setSalesDoc,bo as setSalesMasters,xo as setUserCompany,iu as setV3Item,xc as submitAccessRequest,Bc as subscribeAccessRequests,uc as subscribeGlobalCompanies,Ko as subscribeGlobalData,sc as subscribeGlobalDepts,rc as subscribeGlobalNoticeRead,ec as subscribeGlobalOrgChart,zo as subscribeGlobalRoles,ac as subscribeGlobalTitles,hc as subscribeLoginUsers,Lc as subscribeMasterFields,lc as subscribeMenuConfig,jc as subscribeSales3Doc,qc as subscribeSales3List,Tc as subscribeSalesColl,wc as subscribeSalesDoc,Uc as subscribeSalesMasters,Qo as subscribeUserRoles,tu as subscribeV3Doc,su as subscribeV3List,Vo as subscribeWorkspace,Kc as updateSales3Doc,Gc as updateSales3Item,$c as updateSales3ItemCas,au as updateV3Doc,ru as updateV3Item,Ro as updateV3ItemCas,Cc as uploadStorageFile,uu as v3FinishMigration,ou as v3MigrationLock,cu as v3WriteMany,vo as watchAuth,Ec as writeSalesAttachment,kc as writeSalesAttachmentChunked,bc as writeSalesItems,Rc as writeSalesItemsMerged};
