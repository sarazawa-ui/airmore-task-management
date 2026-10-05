const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CXSSGsmt.js","./index-CZYznYw5.css"])))=>i.map(i=>d[i]);
import{_ as Es}from"./index-CXSSGsmt.js";import{r as be,g as L,_ as fn,a as ks,b as As,d as C,i as ke,p as pn,e as vs,F as Je,c as dt,C as ht,S as ge,f as ft,q as Ae,E as wt,h as Ss,j as Ps,L as Cs,k as gn,l as Os,m as Ns,n as Us,o as Ls,s as S,t as Ds,u as Ms,v as xs,w as Fs}from"./index.esm-v97zNOB-.js";import{doc as g,getDoc as P,getDocs as K,collection as D,setDoc as E,updateDoc as me,deleteDoc as yt,onSnapshot as _,initializeFirestore as Bs,persistentLocalCache as Vs,CACHE_SIZE_UNLIMITED as Ws,persistentMultipleTabManager as Hs,getFirestore as js,writeBatch as ne,query as qs,where as $s,serverTimestamp as R,runTransaction as ue,FieldPath as Gs,connectFirestoreEmulator as zs,enableNetwork as Ks,disableNetwork as Js}from"./index.esm-4dSbkLWS.js";var Xs="firebase",Ys="12.16.0";/**
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
 */be(Xs,Ys,"app");/**
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
 */const mn="firebasestorage.googleapis.com",_n="storageBucket",Qs=2*60*1e3,Zs=10*60*1e3;/**
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
 */class y extends Je{constructor(e,n,s=0){super(ot(e),`Firebase Storage: ${n} (${ot(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,y.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ot(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var w;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(w||(w={}));function ot(t){return"storage/"+t}function It(){const t="An unknown error occurred, please check the error payload for server response.";return new y(w.UNKNOWN,t)}function er(t){return new y(w.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tr(t){return new y(w.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new y(w.UNAUTHENTICATED,t)}function sr(){return new y(w.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rr(t){return new y(w.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ir(){return new y(w.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function or(){return new y(w.CANCELED,"User canceled the upload/download.")}function ar(t){return new y(w.INVALID_URL,"Invalid URL '"+t+"'.")}function cr(t){return new y(w.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ur(){return new y(w.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_n+"' property when initializing the app?")}function lr(){return new y(w.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function dr(){return new y(w.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hr(t){return new y(w.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pt(t){return new y(w.INVALID_ARGUMENT,t)}function wn(){return new y(w.APP_DELETED,"The Firebase app was deleted.")}function fr(t){return new y(w.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ie(t,e){return new y(w.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ye(t){throw new y(w.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class v{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=v.makeFromUrl(e,n)}catch{return new v(e,"")}if(s.path==="")return s;throw cr(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function u(A){A.path_=decodeURIComponent(A.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),I={bucket:1,path:3},T=n===mn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",M=new RegExp(`^https?://${T}/${r}/${b}`,"i"),x=[{regex:c,indices:a,postModify:i},{regex:m,indices:I,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let A=0;A<x.length;A++){const Oe=x[A],rt=Oe.regex.exec(e);if(rt){const Rs=rt[Oe.indices.bucket];let it=rt[Oe.indices.path];it||(it=""),s=new v(Rs,it),Oe.postModify(s);break}}if(s==null)throw ar(e);return s}}class pr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function gr(t,e,n){let s=1,r=null,i=null,o=!1,c=0;function a(){return c===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(m,a())},b)}function f(){i&&clearTimeout(i)}function m(b,...M){if(u){f();return}if(b){f(),l.call(null,b,...M);return}if(a()||o){f(),l.call(null,b,...M);return}s<64&&(s*=2);let x;c===1?(c=2,x=0):x=(s+Math.random())*1e3,h(x)}let I=!1;function T(b){I||(I=!0,f(),!u&&(r!==null?(b||(c=2),clearTimeout(r),h(0)):b||(c=1)))}return h(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function mr(t){t(!1)}/**
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
 */function _r(t){return t!==void 0}function wr(t){return typeof t=="object"&&!Array.isArray(t)}function Tt(t){return typeof t=="string"||t instanceof String}function Ht(t){return bt()&&t instanceof Blob}function bt(){return typeof Blob<"u"}function jt(t,e,n,s){if(s<e)throw pt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw pt(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Xe(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function yn(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var re;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(re||(re={}));/**
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
 */function yr(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class Ir{constructor(e,n,s,r,i,o,c,a,u,l,h,f=!0,m=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=f,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,T)=>{this.resolve_=I,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ne(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const a=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===re.NO_ERROR,a=i.getStatus();if(!c||yr(a,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===re.ABORT;s(!1,new Ne(!1,null,l));return}const u=this.successCodes_.indexOf(a)!==-1;s(!0,new Ne(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());_r(a)?i(a):i()}catch(a){o(a)}else if(c!==null){const a=It();a.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,a)):o(a)}else if(r.canceled){const a=this.appDelete_?wn():or();o(a)}else{const a=ir();o(a)}};this.canceled_?n(!1,new Ne(!1,null,!0)):this.backoffId_=gr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ne{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Tr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function br(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Rr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Er(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kr(t,e,n,s,r,i,o=!0,c=!1){const a=yn(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return Rr(l,e),Tr(l,n),br(l,i),Er(l,s),new Ir(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,c)}/**
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
 */function Ar(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vr(...t){const e=Ar();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(bt())return new Blob(t);throw new y(w.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Sr(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Pr(t){if(typeof atob>"u")throw hr("base-64");return atob(t)}/**
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
 */const B={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class at{constructor(e,n){this.data=e,this.contentType=n||null}}function Cr(t,e){switch(t){case B.RAW:return new at(In(e));case B.BASE64:case B.BASE64URL:return new at(Tn(t,e));case B.DATA_URL:return new at(Nr(e),Ur(e))}throw It()}function In(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Or(t){let e;try{e=decodeURIComponent(t)}catch{throw Ie(B.DATA_URL,"Malformed data URL.")}return In(e)}function Tn(t,e){switch(t){case B.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Ie(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case B.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Ie(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Pr(e)}catch(r){throw r.message.includes("polyfill")?r:Ie(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class bn{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ie(B.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Lr(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Nr(t){const e=new bn(t);return e.base64?Tn(B.BASE64,e.rest):Or(e.rest)}function Ur(t){return new bn(t).contentType}function Lr(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Y{constructor(e,n){let s=0,r="";Ht(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ht(this.data_)){const s=this.data_,r=Sr(s,e,n);return r===null?null:new Y(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Y(s,!0)}}static getBlob(...e){if(bt()){const n=e.map(s=>s instanceof Y?s.data_:s);return new Y(vr.apply(null,n))}else{const n=e.map(o=>Tt(o)?Cr(B.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)r[i++]=o[c]}),new Y(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Rn(t){let e;try{e=JSON.parse(t)}catch{return null}return wr(e)?e:null}/**
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
 */function Dr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Mr(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function En(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function xr(t,e){return e}class k{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||xr}}let Ue=null;function Fr(t){return!Tt(t)||t.length<2?t:En(t)}function kn(){if(Ue)return Ue;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(i,o){return Fr(o)}const n=new k("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new k("size");return r.xform=s,t.push(r),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),Ue=t,Ue}function Br(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new v(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Vr(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Br(s,t),s}function An(t,e,n){const s=Rn(e);return s===null?null:Vr(t,s,n)}function Wr(t,e,n,s){const r=Rn(e);if(r===null||!Tt(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),m=Xe(f,n,s),I=yn({alt:"media",token:u});return m+I})[0]}function Hr(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Rt{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function vn(t){if(!t)throw It()}function jr(t,e){function n(s,r){const i=An(t,r,e);return vn(i!==null),i}return n}function qr(t,e){function n(s,r){const i=An(t,r,e);return vn(i!==null),Wr(i,r,t.host,t._protocol)}return n}function Sn(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=sr():r=nr():n.getStatus()===402?r=tr(t.bucket):n.getStatus()===403?r=rr(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Pn(t){const e=Sn(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=er(t.path)),i.serverResponse=r.serverResponse,i}return n}function $r(t,e,n){const s=e.fullServerUrl(),r=Xe(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Rt(r,i,qr(t,n),o);return c.errorHandler=Pn(e),c}function Gr(t,e){const n=e.fullServerUrl(),s=Xe(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(a,u){}const c=new Rt(s,r,o,i);return c.successCodes=[200,204],c.errorHandler=Pn(e),c}function zr(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Kr(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=zr(null,e)),s}function Jr(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let x="";for(let A=0;A<2;A++)x=x+Math.random().toString().slice(2);return x}const a=c();o["Content-Type"]="multipart/related; boundary="+a;const u=Kr(e,s,r),l=Hr(u,n),h="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+a+"--",m=Y.getBlob(h,s,f);if(m===null)throw lr();const I={name:u.fullPath},T=Xe(i,t.host,t._protocol),b="POST",M=t.maxUploadRetryTime,H=new Rt(T,b,jr(t,n),M);return H.urlParams=I,H.headers=o,H.body=m.uploadData(),H.errorHandler=Sn(e),H}class Xr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=re.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=re.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=re.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r,i){if(this.sent_)throw ye("cannot .send() more than once");if(ke(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ye("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ye("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ye("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ye("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Yr extends Xr{initXhr(){this.xhr_.responseType="text"}}function Et(){return new Yr}/**
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
 */class ae{constructor(e,n){this._service=e,n instanceof v?this._location=n:this._location=v.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ae(e,n)}get root(){const e=new v(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return En(this._location.path)}get storage(){return this._service}get parent(){const e=Dr(this._location.path);if(e===null)return null;const n=new v(this._location.bucket,e);return new ae(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fr(e)}}function Qr(t,e,n){t._throwIfRoot("uploadBytes");const s=Jr(t.storage,t._location,kn(),new Y(e,!0),n);return t.storage.makeRequestWithTokens(s,Et).then(r=>({metadata:r,ref:t}))}function Zr(t){t._throwIfRoot("getDownloadURL");const e=$r(t.storage,t._location,kn());return t.storage.makeRequestWithTokens(e,Et).then(n=>{if(n===null)throw dr();return n})}function ei(t){t._throwIfRoot("deleteObject");const e=Gr(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Et)}function ti(t,e){const n=Mr(t._location.path,e),s=new v(t._location.bucket,n);return new ae(t.storage,s)}/**
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
 */function ni(t){return/^[A-Za-z]+:\/\//.test(t)}function si(t,e){return new ae(t,e)}function Cn(t,e){if(t instanceof kt){const n=t;if(n._bucket==null)throw ur();const s=new ae(n,n._bucket);return e!=null?Cn(s,e):s}else return e!==void 0?ti(t,e):t}function ri(t,e){if(e&&ni(e)){if(t instanceof kt)return si(t,e);throw pt("To use ref(service, url), the first argument must be a Storage instance.")}else return Cn(t,e)}function qt(t,e){const n=e==null?void 0:e[_n];return n==null?null:v.makeFromBucketSpec(n,t)}function ii(t,e,n,s={}){t.host=`${e}:${n}`;const r=ke(e);r&&pn(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:vs(i,t.app.options.projectId))}class kt{constructor(e,n,s,r,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=mn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qs,this._maxUploadRetryTime=Zs,this._requests=new Set,r!=null?this._bucket=v.makeFromBucketSpec(r,this._host):this._bucket=qt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=v.makeFromBucketSpec(this._url,e):this._bucket=qt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(C(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ae(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new pr(wn());{const o=kr(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const $t="@firebase/storage",Gt="0.14.3";/**
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
 */const On="storage";function oi(t,e,n){return t=L(t),Qr(t,e,n)}function ai(t){return t=L(t),Zr(t)}function ci(t){return t=L(t),ei(t)}function Nn(t,e){return t=L(t),ri(t,e)}function ui(t=As(),e){t=L(t);const s=fn(t,On).getImmediate({identifier:e}),r=ks("storage");return r&&Un(s,...r),s}function Un(t,e,n,s={}){ii(t,e,n,s)}function li(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new kt(n,s,r,e,ge)}function di(){dt(new ht(On,li,"PUBLIC").setMultipleInstances(!0)),be($t,Gt,""),be($t,Gt,"esm2020")}di();function Ln(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hi=Ln,Dn=new wt("auth","Firebase",Ln());/**
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
 */const Ve=new Cs("@firebase/auth");function fi(t,...e){Ve.logLevel<=gn.WARN&&Ve.warn(`Auth (${ge}): ${t}`,...e)}function Me(t,...e){Ve.logLevel<=gn.ERROR&&Ve.error(`Auth (${ge}): ${t}`,...e)}/**
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
 */function W(t,...e){throw vt(t,...e)}function N(t,...e){return vt(t,...e)}function At(t,e,n){const s={...hi(),[e]:n};return new wt("auth","Firebase",s).create(e,{appName:t.name})}function te(t){return At(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mn(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&W(t,"argument-error"),At(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vt(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Dn.create(t,...e)}function p(t,e,...n){if(!t)throw vt(e,...n)}function q(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Me(e),new Error(e)}function z(t,e){t||q(e)}/**
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
 */function gt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function pi(){return zt()==="http:"||zt()==="https:"}function zt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function gi(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pi()||Os()||"connection"in navigator)?navigator.onLine:!0}function mi(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ve{constructor(e,n){this.shortDelay=e,this.longDelay=n,z(n>e,"Short delay should be less than long delay!"),this.isMobile=Ss()||Ps()}get(){return gi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function St(t,e){z(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xn{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;q("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;q("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;q("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _i={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wi=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yi=new ve(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _e(t,e,n,s,r={}){return Fn(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=Ae({...o,key:t.config.apiKey}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...i};return Us()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&ke(t.emulatorConfig.host)&&(u.credentials="include"),xn.fetch()(await Bn(t,t.config.apiHost,n,c),u)})}async function Fn(t,e,n){t._canInitEmulator=!1;const s={..._i,...e};try{const r=new Ti(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Le(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Le(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Le(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Le(t,"user-disabled",o);const l=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw At(t,l,u);W(t,l)}}catch(r){if(r instanceof Je)throw r;W(t,"network-request-failed",{message:String(r)})}}async function Ii(t,e,n,s,r={}){const i=await _e(t,e,n,s,r);return"mfaPendingCredential"in i&&W(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Bn(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?St(t.config,r):`${t.config.apiScheme}://${r}`;return wi.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Ti{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(N(this.auth,"network-request-failed")),yi.get())})}}function Le(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=N(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function bi(t,e){return _e(t,"POST","/v1/accounts:delete",e)}async function We(t,e){return _e(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Te(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ri(t,e=!1){const n=L(t),s=await n.getIdToken(e),r=Ct(s);p(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Te(ct(r.auth_time)),issuedAtTime:Te(ct(r.iat)),expirationTime:Te(ct(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ct(t){return Number(t)*1e3}function Ct(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Me("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ns(n);return r?JSON.parse(r):(Me("Failed to decode base64 JWT payload"),null)}catch(r){return Me("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Kt(t){const e=Ct(t);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Re(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Je&&Ei(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ei({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ki{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Te(this.lastLoginAt),this.creationTime=Te(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function He(t){var h;const e=t.auth,n=await t.getIdToken(),s=await Re(t,We(e,{idToken:n}));p(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(h=r.providerUserInfo)!=null&&h.length?Vn(r.providerUserInfo):[],o=vi(t.providerData,i),c=t.isAnonymous,a=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),u=c?a:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new mt(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function Ai(t){const e=L(t);await He(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vi(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Vn(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Si(t,e){const n=await Fn(t,{},async()=>{const s=Ae({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Bn(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:c,body:s};return t.emulatorConfig&&ke(t.emulatorConfig.host)&&(a.credentials="include"),xn.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pi(t,e){return _e(t,"POST","/v2/accounts:revokeToken",Pt(t,e))}/**
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
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){p(e.length!==0,"internal-error");const n=Kt(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(p(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Si(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new le;return s&&(p(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(p(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(p(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return q("not implemented")}}/**
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
 */function X(t,e){p(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class O{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new ki(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new mt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Re(this,this.stsTokenManager.getToken(this.auth,e));return p(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ri(this,e)}reload(){return Ai(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new O({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await He(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(C(this.auth.app))return Promise.reject(te(this.auth));const e=await this.getIdToken();return await Re(this,bi(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,l=n.lastLoginAt??void 0,{uid:h,emailVerified:f,isAnonymous:m,providerData:I,stsTokenManager:T}=n;p(h&&T,e,"internal-error");const b=le.fromJSON(this.name,T);p(typeof h=="string",e,"internal-error"),X(s,e.name),X(r,e.name),p(typeof f=="boolean",e,"internal-error"),p(typeof m=="boolean",e,"internal-error"),X(i,e.name),X(o,e.name),X(c,e.name),X(a,e.name),X(u,e.name),X(l,e.name);const M=new O({uid:h,auth:e,email:r,emailVerified:f,displayName:s,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:b,createdAt:u,lastLoginAt:l});return I&&Array.isArray(I)&&(M.providerData=I.map(H=>({...H}))),a&&(M._redirectEventId=a),M}static async _fromIdTokenResponse(e,n,s=!1){const r=new le;r.updateFromServerResponse(n);const i=new O({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await He(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];p(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Vn(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new le;c.updateFromIdToken(s);const a=new O({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new mt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
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
 */const Jt=new Map;function $(t){z(t instanceof Function,"Expected a class definition");let e=Jt.get(t);return e?(z(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jt.set(t,e),e)}/**
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
 */class Wn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wn.type="NONE";const Xt=Wn;/**
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
 */function xe(t,e,n){return`firebase:${t}:${e}:${n}`}class de{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=xe(this.userKey,r.apiKey,i),this.fullPersistenceKey=xe("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await We(this.auth,{idToken:e}).catch(()=>{});return n?O._fromGetAccountInfoResponse(this.auth,n,e):null}return O._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new de($(Xt),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||$(Xt);const o=xe(s,e.config.apiKey,e.name);let c=null;for(const u of n)try{const l=await u._get(o);if(l){let h;if(typeof l=="string"){const f=await We(e,{idToken:l}).catch(()=>{});if(!f)break;h=await O._fromGetAccountInfoResponse(e,f,l)}else h=O._fromJSON(e,l);u!==i&&(c=h),i=u;break}}catch{}const a=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new de(i,e,s):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new de(i,e,s))}}/**
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
 */function Yt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($n(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zn(e))return"Blackberry";if(Kn(e))return"Webos";if(jn(e))return"Safari";if((e.includes("chrome/")||qn(e))&&!e.includes("edge/"))return"Chrome";if(Gn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hn(t=S()){return/firefox\//i.test(t)}function jn(t=S()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qn(t=S()){return/crios\//i.test(t)}function $n(t=S()){return/iemobile/i.test(t)}function Gn(t=S()){return/android/i.test(t)}function zn(t=S()){return/blackberry/i.test(t)}function Kn(t=S()){return/webos/i.test(t)}function Ot(t=S()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ci(t=S()){var e;return Ot(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Oi(){return Ds()&&document.documentMode===10}function Jn(t=S()){return Ot(t)||Gn(t)||Kn(t)||zn(t)||/windows phone/i.test(t)||$n(t)}/**
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
 */function Xn(t,e=[]){let n;switch(t){case"Browser":n=Yt(S());break;case"Worker":n=`${Yt(S())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ge}/${s}`}/**
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
 */class Ni{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Ui(t,e={}){return _e(t,"GET","/v2/passwordPolicy",Pt(t,e))}/**
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
 */const Li=6;class Di{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Li,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Mi{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qt(this),this.idTokenSubscription=new Qt(this),this.beforeStateQueue=new Ni(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await de.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await We(this,{idToken:e}),s=await O._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(C(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await He(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(C(this.app))return Promise.reject(te(this));const n=e?L(e):null;return n&&p(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return C(this.app)?Promise.reject(te(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return C(this.app)?Promise.reject(te(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ui(this),n=new Di(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Pi(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$(e)||this._popupRedirectResolver;p(n,this,"argument-error"),this.redirectPersistenceManager=await de.create(this,[$(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(C(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&fi(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function we(t){return L(t)}class Qt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ms(n=>this.observer=n)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xi(t){Nt=t}function Fi(t){return Nt.loadJS(t)}function Bi(){return Nt.gapiScript}function Vi(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Wi(t,e){const n=fn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ft(i,e??{}))return r;W(r,"already-initialized")}return n.initialize({options:e})}function Hi(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ji(t,e,n){const s=we(t);p(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!0,i=Yn(e),{host:o,port:c}=qi(e),a=c===null?"":`:${c}`,u={url:`${i}//${o}${a}/`},l=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){p(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),p(ft(u,s.config.emulator)&&ft(l,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=l,s.settings.appVerificationDisabledForTesting=!0,ke(o)&&pn(`${i}//${o}${a}`)}function Yn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qi(t){const e=Yn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Zt(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Zt(o)}}}function Zt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}/**
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
 */class Qn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return q("not implemented")}_getIdTokenResponse(e){return q("not implemented")}_linkToIdToken(e,n){return q("not implemented")}_getReauthenticationResolver(e){return q("not implemented")}}/**
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
 */async function he(t,e){return Ii(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
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
 */const $i="http://localhost";class ce extends Qn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):W("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new ce(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return he(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,he(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,he(e,n)}buildRequest(){const e={requestUri:$i,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ae(n)}return e}}/**
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
 */class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Se extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Q extends Se{constructor(){super("facebook.com")}static credential(e){return ce._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.FACEBOOK_SIGN_IN_METHOD="facebook.com";Q.PROVIDER_ID="facebook.com";/**
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
 */class F extends Se{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ce._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return F.credential(n,s)}catch{return null}}}F.GOOGLE_SIGN_IN_METHOD="google.com";F.PROVIDER_ID="google.com";/**
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
 */class Z extends Se{constructor(){super("github.com")}static credential(e){return ce._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Z.credential(e.oauthAccessToken)}catch{return null}}}Z.GITHUB_SIGN_IN_METHOD="github.com";Z.PROVIDER_ID="github.com";/**
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
 */class ee extends Se{constructor(){super("twitter.com")}static credential(e,n){return ce._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ee.credential(n,s)}catch{return null}}}ee.TWITTER_SIGN_IN_METHOD="twitter.com";ee.PROVIDER_ID="twitter.com";/**
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
 */class fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await O._fromIdTokenResponse(e,s,r),o=en(s);return new fe({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=en(s);return new fe({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function en(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class je extends Je{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,je.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new je(e,n,s,r)}}function Zn(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?je._fromErrorAndOperation(t,i,e,s):i})}async function Gi(t,e,n=!1){const s=await Re(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fe._forOperation(t,"link",s)}/**
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
 */async function zi(t,e,n=!1){const{auth:s}=t;if(C(s.app))return Promise.reject(te(s));const r="reauthenticate";try{const i=await Re(t,Zn(s,r,e,t),n);p(i.idToken,s,"internal-error");const o=Ct(i.idToken);p(o,s,"internal-error");const{sub:c}=o;return p(t.uid===c,s,"user-mismatch"),fe._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&W(s,"user-mismatch"),i}}/**
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
 */async function Ki(t,e,n=!1){if(C(t.app))return Promise.reject(te(t));const s="signIn",r=await Zn(t,s,e),i=await fe._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Ji(t,e,n,s){return L(t).onAuthStateChanged(e,n,s)}function Xi(t){return L(t).signOut()}const qe="__sak";/**
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
 */class es{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qe,"1"),this.storage.removeItem(qe),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Yi=1e3,Qi=10;class ts extends es{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Oi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Qi):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Yi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ts.type="LOCAL";const Zi=ts;/**
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
 */class ns extends es{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ns.type="SESSION";const eo=ns;/**
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
 */function to(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qe{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Qe(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async u=>u(n.origin,i)),a=await to(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qe.receivers=[];/**
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
 */function Ut(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class no{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const u=Ut("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(f.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function V(){return window}function so(t){V().location.href=t}/**
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
 */function ss(){return typeof V().WorkerGlobalScope<"u"&&typeof V().importScripts=="function"}async function ro(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function io(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function oo(){return ss()?self:null}/**
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
 */const rs="firebaseLocalStorageDb",ao=1,$e="firebaseLocalStorage",is="fbase_key";class Pe{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ze(t,e){return t.transaction([$e],e?"readwrite":"readonly").objectStore($e)}function co(){const t=indexedDB.deleteDatabase(rs);return new Pe(t).toPromise()}function os(){const t=indexedDB.open(rs,ao);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore($e,{keyPath:is})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains($e)?e(s):(s.close(),await co(),e(await os()))})})}async function tn(t,e,n){const s=Ze(t,!0).put({[is]:e,value:n});return new Pe(s).toPromise()}async function uo(t,e){const n=Ze(t,!1).get(e),s=await new Pe(n).toPromise();return s===void 0?null:s.value}function nn(t,e){const n=Ze(t,!0).delete(e);return new Pe(n).toPromise()}const lo=800,ho=3;class as{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=os(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ho)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return ss()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qe._getInstance(oo()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await ro(),!this.activeServiceWorker)return;this.sender=new no(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||io()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await tn(e,qe,"1"),await nn(e,qe)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>tn(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>uo(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ze(r,!1).getAll();return new Pe(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}as.type="LOCAL";const fo=as;new ve(3e4,6e4);/**
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
 */function Lt(t,e){return e?$(e):(p(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dt extends Qn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return he(e,this._buildIdpRequest())}_linkToIdToken(e,n){return he(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return he(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function po(t){return Ki(t.auth,new Dt(t),t.bypassAuthState)}function go(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),zi(n,new Dt(t),t.bypassAuthState)}async function mo(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),Gi(n,new Dt(t),t.bypassAuthState)}/**
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
 */class cs{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return po;case"linkViaPopup":case"linkViaRedirect":return mo;case"reauthViaPopup":case"reauthViaRedirect":return go;default:W(this.auth,"internal-error")}}resolve(e){z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){z(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _o=new ve(2e3,1e4);async function wo(t,e,n){if(C(t.app))return Promise.reject(N(t,"operation-not-supported-in-this-environment"));const s=we(t);Mn(t,e,Ye);const r=Lt(s,n);return new se(s,"signInViaPopup",e,r).executeNotNull()}class se extends cs{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,se.currentPopupAction&&se.currentPopupAction.cancel(),se.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){z(this.filter.length===1,"Popup operations only handle one event");const e=Ut();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(N(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(N(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,se.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(N(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_o.get())};e()}}se.currentPopupAction=null;/**
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
 */const yo="pendingRedirect",Fe=new Map;class Io extends cs{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Fe.get(this.auth._key());if(!e){try{const s=await To(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Fe.set(this.auth._key(),e)}return this.bypassAuthState||Fe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function To(t,e){const n=ls(e),s=us(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function bo(t,e){return us(t)._set(ls(e),"true")}function Ro(t,e){Fe.set(t._key(),e)}function us(t){return $(t._redirectPersistence)}function ls(t){return xe(yo,t.config.apiKey,t.name)}/**
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
 */function sn(t,e,n){return Eo(t,e,n)}async function Eo(t,e,n){if(C(t.app))return Promise.reject(te(t));const s=we(t);Mn(t,e,Ye),await s._initializationPromise;const r=Lt(s,n);return await bo(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function ko(t,e){return await we(t)._initializationPromise,ds(t,e,!1)}async function ds(t,e,n=!1){if(C(t.app))return Promise.reject(te(t));const s=we(t),r=Lt(s,e),o=await new Io(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Ao=10*60*1e3;class vo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!So(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hs(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(N(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ao&&this.cachedEventUids.clear(),this.cachedEventUids.has(rn(e))}saveEventToCache(e){this.cachedEventUids.add(rn(e)),this.lastProcessedEventTime=Date.now()}}function rn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hs({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function So(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hs(t);default:return!1}}/**
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
 */async function Po(t,e={}){return _e(t,"GET","/v1/projects",e)}/**
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
 */const Co=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oo=/^https?/;async function No(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Po(t);for(const n of e)try{if(Uo(n))return}catch{}W(t,"unauthorized-domain")}function Uo(t){const e=gt(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Oo.test(n))return!1;if(Co.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Lo=new ve(3e4,6e4);function on(){const t=V().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Do(t){return new Promise((e,n)=>{var r,i,o;function s(){on(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{on(),n(N(t,"network-request-failed"))},timeout:Lo.get()})}if((i=(r=V().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=V().gapi)!=null&&o.load)s();else{const c=Vi("iframefcb");return V()[c]=()=>{gapi.load?s():n(N(t,"network-request-failed"))},Fi(`${Bi()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Be=null,e})}let Be=null;function Mo(t){return Be=Be||Do(t),Be}/**
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
 */const xo=new ve(5e3,15e3),Fo="__/auth/iframe",Bo="emulator/auth/iframe",Vo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ho(t){const e=t.config;p(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?St(e,Bo):`https://${t.config.authDomain}/${Fo}`,s={apiKey:e.apiKey,appName:t.name,v:ge},r=Wo.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ae(s).slice(1)}`}async function jo(t){const e=await Mo(t),n=V().gapi;return p(n,t,"internal-error"),e.open({where:document.body,url:Ho(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vo,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=N(t,"network-request-failed"),c=V().setTimeout(()=>{i(o)},xo.get());function a(){V().clearTimeout(c),r(s)}s.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const qo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$o=500,Go=600,zo="_blank",Ko="http://localhost";class an{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jo(t,e,n,s=$o,r=Go){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const a={...qo,width:s.toString(),height:r.toString(),top:i,left:o},u=S().toLowerCase();n&&(c=qn(u)?zo:n),Hn(u)&&(e=e||Ko,a.scrollbars="yes");const l=Object.entries(a).reduce((f,[m,I])=>`${f}${m}=${I},`,"");if(Ci(u)&&c!=="_self")return Xo(e||"",c),new an(null);const h=window.open(e||"",c,l);p(h,t,"popup-blocked");try{h.focus()}catch{}return new an(h)}function Xo(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Yo="__/auth/handler",Qo="emulator/auth/handler",Zo=encodeURIComponent("fac");async function cn(t,e,n,s,r,i){p(t.config.authDomain,t,"auth-domain-config-required"),p(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ge,eventId:r};if(e instanceof Ye){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries({}))o[l]=h}if(e instanceof Se){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const l of Object.keys(c))c[l]===void 0&&delete c[l];const a=await t._getAppCheckToken(),u=a?`#${Zo}=${encodeURIComponent(a)}`:"";return`${ea(t)}?${Ae(c).slice(1)}${u}`}function ea({config:t}){return t.emulator?St(t,Qo):`https://${t.authDomain}/${Yo}`}/**
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
 */const ut="webStorageSupport";class ta{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eo,this._completeRedirectFn=ds,this._overrideRedirectResult=Ro}async _openPopup(e,n,s,r){var o;z((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await cn(e,n,s,gt(),r);return Jo(e,i,Ut())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await cn(e,n,s,gt(),r);return so(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(z(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await jo(e),s=new vo(e);return n.register("authEvent",r=>(p(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ut,{type:ut},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[ut];i!==void 0&&n(!!i),W(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=No(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jn()||jn()||Ot()}}const na=ta;var un="@firebase/auth",ln="1.13.3";/**
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
 */class sa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ra(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ia(t){dt(new ht("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;p(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xn(t)},u=new Mi(s,r,i,a);return Hi(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),dt(new ht("auth-internal",e=>{const n=we(e.getProvider("auth").getImmediate());return(s=>new sa(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),be(un,ln,ra(t)),be(un,ln,"esm2020")}/**
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
 */const oa=5*60;Ls("authIdTokenMaxAge");function aa(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}xi({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=N("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",aa().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ia("Browser");const ca={apiKey:"AIzaSyB8QE3JylXkXWmg_rF2ZuczixnRYJZlRnE",authDomain:"airmore-task-management-app.firebaseapp.com",projectId:"airmore-task-management-app",storageBucket:"airmore-task-management-app.firebasestorage.app",messagingSenderId:"674161520247",appId:"1:674161520247:web:fe0e0f9d0656008fbaa072",measurementId:"G-VFS9X3L72E"},Ge=Fs(ca),ie=Wi(Ge,{persistence:[fo,Zi],popupRedirectResolver:na}),d=(()=>{try{return Bs(Ge,{localCache:Vs({tabManager:Hs(),cacheSizeBytes:Ws})})}catch(t){return console.warn("Firestore永続キャッシュの初期化に失敗。キャッシュ無しで継続します:",t&&t.message),js(Ge)}})(),fs=(()=>{try{return/^(localhost|127\.0\.0\.1|[a-z0-9-]+\.localhost)$/.test(location.hostname)&&localStorage.getItem("hittatsu_emulator")==="1"}catch{return!1}})();if(fs)try{zs(d,"127.0.0.1",8080),ji(ie,"http://127.0.0.1:9099",{disableWarnings:!0}),console.warn("[firebase] エミュレーターに接続しています(開発用)"),window.__fsNetwork={off:()=>Js(d),on:()=>Ks(d)}}catch(t){console.warn("[firebase] emulator setup failed",t)}function ba(t){return Ji(ie,t)}async function ua(){const t=new F;t.setCustomParameters({prompt:"select_account"}),t.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"),t.addScope("https://www.googleapis.com/auth/calendar.readonly"),t.addScope("https://www.googleapis.com/auth/drive.metadata.readonly");try{const e=await wo(ie,t);return ps(e),e.user}catch(e){const n=e&&e.code||"";if(n==="auth/popup-blocked"){const{showPopupBlockedHelp:s}=await Es(async()=>{const{showPopupBlockedHelp:r}=await import("./index-CXSSGsmt.js").then(i=>i.p);return{showPopupBlockedHelp:r}},__vite__mapDeps([0,1]),import.meta.url);return s({what:"Googleへのログイン",onRetry:()=>{ua().catch(()=>{})},altLabel:"このまま画面を切り替えてログイン",onAlt:()=>{sn(ie,t).catch(()=>{})}}),null}if(n==="auth/cancelled-popup-request"||n==="auth/popup-closed-by-user"||n==="auth/operation-not-supported-in-this-environment")return await sn(ie,t),null;throw e}}function ps(t){try{const e=F.credentialFromResult(t);e&&e.accessToken&&(window.__sheetsTokenFromLogin={token:e.accessToken,at:Date.now()})}catch{}}async function Ra(){try{const t=await ko(ie);return t&&ps(t),(t==null?void 0:t.user)||null}catch(t){return console.warn("redirect result:",t),null}}async function Ea(){await Xi(ie)}const G={ADMIN:"admin",EDITOR:"editor",VIEWER:"viewer"};function ka(t){return t===G.ADMIN||t===G.EDITOR||t===G.VIEWER}function Aa(t){return t===G.ADMIN||t===G.EDITOR}function va(t){return t===G.ADMIN}function Sa(){try{const e=new URL(window.location.href).searchParams.get("ws");if(e)return localStorage.setItem("hittatsu_current_ws",e),e}catch{}return localStorage.getItem("hittatsu_current_ws")||null}async function Pa(t){if(!t)return null;const e=await P(g(d,"workspaces",t));return e.exists()?{id:e.id,...e.data()}:null}function Ca(t,e){return!t||!e?null:(t.budgetRoles||{})[e]||null}function la(t,e){if(!t||!e)return!1;const n=(t.authMembers||[]).find(s=>s&&s.email===e);return n&&n.role==="owner"}async function Oa(t,e,n){if(!t||!e||!n)return null;const s=(n.budgetRoles||{})[e];if(s)return s;const r=la(n,e)?G.ADMIN:G.VIEWER;try{const i={...n.budgetRoles||{},[e]:r};return await me(g(d,"workspaces",t),{budgetRoles:i}),r}catch(i){return console.warn("ensureRoleAtFirstAccess failed:",i),null}}async function J(t,e,n,s,r=!0){return ue(d,async i=>{const o=await i.get(t);if(!r&&!o.exists())return!1;const a={...o.exists()?(o.data()||{})[e]||{}:{}};return s==null||s===""?delete a[n]:a[n]=s,r?i.set(t,{...o.exists()?o.data():{},[e]:a,updatedAt:R()}):i.update(t,{[e]:a}),!0})}async function Na(t,e,n){return!t||!e?!1:J(g(d,"workspaces",t),"userCompanies",e,n,!1)}async function Ua(t){if(!t)return[];try{const e=await P(g(d,"workspaces",t,"budget","airmore-budget-v4"));if(!e.exists())return[];const n=e.data()||{};let s=null;try{s=JSON.parse(n.value||"{}")}catch{s={}}return Array.isArray(s.orgs)?s.orgs.map(r=>r.name).filter(Boolean):[]}catch(e){return console.warn("getBudgetOrgs failed:",e),[]}}async function La(t,e,n){return!t||!e?!1:J(g(d,"workspaces",t),"budgetRoles",e,n,!1)}function Da(t,e){return _(g(d,"workspaces",t),n=>{n.exists()?e({id:n.id,...n.data()}):e(null)})}const da=t=>D(d,"workspaces",t,"budget");async function Ma(t,e){const n=await P(g(d,"workspaces",t,"budget",Mt(e)));return n.exists()?(n.data()||{}).value??null:null}async function xa(t,e,n){await E(g(d,"workspaces",t,"budget",Mt(e)),{key:e,value:n,updatedAt:R()})}async function Fa(t,e){await yt(g(d,"workspaces",t,"budget",Mt(e)))}function Ba(t,e){return _(da(t),n=>{const s={};n.forEach(r=>{const i=r.data();s[i.key||r.id]=i.value}),e(s)})}function Mt(t){return String(t).replace(/[/.#$\[\]]/g,"_").slice(0,250)}const gs=new Set(["sarazawa@n-airmore.com"]);function Va(t){return!!t&&gs.has(t)}function Wa(t,e){return t?gs.has(t)?G.ADMIN:(e||{})[t]||null:null}const _t=()=>g(d,"globalBudget","roles"),pe=()=>g(d,"globalBudget","data"),ms=()=>g(d,"globalBudget","userCompanies"),xt=()=>g(d,"globalBudget","menuConfig"),_s=()=>g(d,"globalBudget","userDepts"),ws=()=>g(d,"globalBudget","userTitles"),ys=()=>g(d,"globalBudget","noticeRead"),ze=()=>g(d,"globalBudget","orgChart"),Is=()=>g(d,"globalBudget","userRoles"),Ke=()=>g(d,"globalBudget","users");function Ha(t,e){return _(_t(),n=>{t(n.exists()?n.data().roles||{}:{})},e)}async function ha(t,e){const n=await P(_t()),r={...n.exists()?n.data().roles||{}:{}};e?r[t]=e:delete r[t],await E(_t(),{roles:r,updatedAt:R()})}function ja(t,e){return _(pe(),t,e)}async function qa(){const t=await P(pe());return t.exists()?t.data():null}async function $a(t,e){await E(pe(),{value:t,updatedAt:R(),_writer:e})}async function Ga(t,e){return ue(d,async n=>{const s=await n.get(pe()),r=s.exists()&&(s.data()||{}).value||null,i=t(r);return n.set(pe(),{value:i,updatedAt:R(),_writer:e}),i})}function za(t,e){return _(Is(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function Ka(t,e){await J(Is(),"map",String(t).toLowerCase(),e)}function Ja(t,e){return _(ze(),n=>{const s=n.exists()?n.data():{};t({companies:s.companies||[],startMonth:s.startMonth||0})},e)}async function Xa(t,e){await E(ze(),{companies:t||[],startMonth:e||4,updatedAt:R()})}async function Ya(t,e){return ue(d,async n=>{const s=await n.get(ze()),r=s.exists()?s.data()||{}:{},i=t(Array.isArray(r.companies)?r.companies:[]);return n.set(ze(),{companies:i,startMonth:e||r.startMonth||4,updatedAt:R()}),i})}function Qa(t,e){return _(_s(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function Za(t,e){return _(ys(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function ec(t,e){await J(ys(),"map",String(t).toLowerCase(),e||[])}function tc(t,e){return _(ws(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function nc(t,e){await J(ws(),"map",String(t).toLowerCase(),e)}async function sc(t,e){await J(_s(),"map",String(t).toLowerCase(),e)}function rc(t,e){return _(ms(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function ic(t,e){return _(xt(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function oc(t,e){const n=String(t||"").toLowerCase();if(!n)return;const s=await P(Ke()),i=(s.exists()?s.data().map||{}:{})[n];i&&i.name===(e||"")||await J(Ke(),"map",n,{email:t,name:e||"",at:new Date().toISOString()})}function ac(t,e){return _(Ke(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function cc(){const t=await P(Ke());return t.exists()?t.data().map||{}:{}}async function uc(t){await E(xt(),{map:t,updatedAt:R()})}async function lc(t,e){await J(xt(),"map",t,e&&e.length?e:void 0)}const et=t=>g(d,"salesWs",t),U=(t,e)=>D(d,"salesWs",t,e);function dc(t,e,n){return _(et(t),s=>e(s.exists()?s.data():null),n)}async function hc(t,e){await E(et(t),{...e,updatedAt:R()},{merge:!0})}async function fc(t,e){const n=et(t);return ue(d,async s=>{const r=await s.get(n),i=r.exists()?r.data()||{}:{},o=e(i)||{};return Object.keys(o).length?(r.exists()?s.update(n,{...o,updatedAt:R()}):s.set(n,{...o,updatedAt:R()}),o):{}})}function pc(t,e,n,s){return _(U(t,e),r=>n(r.docs.map(i=>i.data())),s)}async function gc(t,e,n,s){const r=[...n.map(i=>({kind:"set",it:i})),...(s||[]).map(i=>({kind:"del",id:i}))];for(let i=0;i<r.length;i+=400){const o=ne(d);for(const c of r.slice(i,i+400))c.kind==="set"?o.set(g(U(t,e),c.it.id),c.it):o.delete(g(U(t,e),c.id));await o.commit()}}async function mc(t,e,n,s){const r=new Array(n.length),i=async o=>{const c=g(U(t,e),o.id);return await ue(d,async u=>{const l=await u.get(c),h=s(o,l.exists()?l.data():null);return h==null?null:(u.set(c,h),h)})};for(let o=0;o<n.length;o+=8){const c=n.slice(o,o+8);(await Promise.all(c.map(i))).forEach((u,l)=>r[o+l]=u)}return r}async function _c(t,e){await E(g(U(t,"attachments"),e.id),e)}async function wc(t,e,n,s){const r=ne(d);for(const i of n)r.set(g(U(t,"attachments"),i.id),i);r.set(g(U(t,"attachments"),e.id),e);for(let i=n.length;i<(s||0);i++)r.delete(g(U(t,"attachments"),`${e.id}#${i}`));await r.commit()}async function yc(t,e,n){if(n>0){const s=ne(d);s.delete(g(U(t,"attachments"),e));for(let r=0;r<n;r++)s.delete(g(U(t,"attachments"),`${e}#${r}`));await s.commit();return}await yt(g(U(t,"attachments"),e))}async function Ic(t){return(await K(qs(D(d,"workspaces"),$s("memberEmails","array-contains",t)))).docs.map(n=>{const s=n.data()||{};return{id:n.id,name:s.wsName||s.profile&&s.profile.companyName||n.id,statuses:Array.isArray(s.statuses)?s.statuses:[],members:(Array.isArray(s.authMembers)?s.authMembers:[]).map(r=>r&&r.name).filter(Boolean),schema:Number(s._schemaVersion||0)}}).sort((n,s)=>n.name.localeCompare(s.name,"ja"))}async function Tc(t){return(await K(D(d,"workspaces",t,"goals"))).docs.map(n=>{const s=n.data()||{};return{id:s.id||n.id,name:s.name||"",status:s.status||""}})}async function bc(t,e){const n=g(d,"workspaces",t),[s,r]=await Promise.all([P(n),K(D(d,"workspaces",t,"tasks"))]),i=s.data()||{},o=new Set(r.docs.map(l=>l.id));(i._tombstones||[]).forEach(l=>l&&l.kind==="tasks"&&l.id&&o.add(l.id));let c=Number(i.seq&&i.seq.dailyTask||0);o.forEach(l=>{const h=/^D-(\d+)$/.exec(l);h&&(c=Math.max(c,Number(h[1])))});let a="";for(let l=0;l<1e3&&(c++,a="D-"+String(c).padStart(3,"0"),!!o.has(a));l++);const u={...e,id:a,_modAt:Date.now()};await E(g(d,"workspaces",t,"tasks",a),u);try{await me(n,{"seq.dailyTask":c})}catch(l){console.warn("seq.dailyTask の更新に失敗(タスクは追加済み):",l)}return a}let De=null,dn=!1;const Ts=()=>{if(!De&&(De=ui(Ge),fs&&!dn)){dn=!0;try{Un(De,"127.0.0.1",9199)}catch{}}return De};async function Rc(t,e,n){const s=Nn(Ts(),t);return await oi(s,e,{contentType:n||void 0}),await ai(s)}async function Ec(t){try{await ci(Nn(Ts(),t))}catch(e){if(e&&e.code==="storage/object-not-found")return;throw e}}const Ce=t=>g(d,"salesMasters",t),oe=t=>D(d,"salesWs",t,"masters"),fa=8e5,hn=25e4,pa=t=>new TextEncoder().encode(t).length,ga=t=>/exceeds the maximum allowed size|too large|INVALID_ARGUMENT/i.test(String((t==null?void 0:t.message)||t)),Ee=new Set;function Ft(t){const e=t.find(s=>s._id==="head");if(!e||!e.of)return null;const n=t.filter(s=>s.part!=null&&s.rev===e.rev).sort((s,r)=>s.part-r.part);if(n.length!==e.of||n.some((s,r)=>s.part!==r))return null;try{return JSON.parse(n.map(s=>s.data).join(""))}catch{return null}}const j=(t,e)=>D(d,"salesWs",t,e),lt=25e4;function Bt(t){const e={},n=new Map;return t.forEach(s=>{if(s._id.includes("#")){const[r]=s._id.split("#");n.set(r,[...n.get(r)||[],s])}}),t.forEach(s=>{if(!s._id.includes("#")){if(s.chunks){const r=(n.get(s._id)||[]).filter(i=>i.rev===s.rev).sort((i,o)=>i.part-o.part);if(r.length!==s.chunks)return;try{e[s._id]=JSON.parse(r.map(i=>i.data).join(""))}catch{}}else if(s.json!==void 0)try{e[s._id]=JSON.parse(s.json)}catch{}}}),e}async function kc(t,e){const n=await K(j(t,"mFields")),s=Bt(n.docs.map(a=>({_id:a.id,...a.data()}))),r=e(s)||{},i=Object.keys(r);if(!i.length)return{};const o=ne(d),c=new Set(n.docs.map(a=>a.id));for(const a of i){const u=JSON.stringify(r[a]===void 0?null:r[a]),l=String(Date.now());if(c.forEach(h=>{h.startsWith(a+"#")&&o.delete(g(j(t,"mFields"),h))}),u.length<=lt)o.set(g(j(t,"mFields"),a),{json:u,updatedAt:R()});else{const h=[];for(let f=0;f<u.length;f+=lt)h.push(u.slice(f,f+lt));h.forEach((f,m)=>o.set(g(j(t,"mFields"),a+"#"+m),{part:m,rev:l,data:f})),o.set(g(j(t,"mFields"),a),{chunks:h.length,rev:l,updatedAt:R()})}}return await o.commit(),r}function Ac(t,e,n){let s,r,i,o;const c=()=>{if(s===void 0||r===void 0||i===void 0||o===void 0)return;const f={},m=o||{},I=[];for(const[T,b]of Object.entries(m))T==="customers"||T==="products"||T.startsWith("_")||T==="updatedAt"||T in i||(f[T]=b,I.push(T));Object.assign(f,i),f.customers=s.length?s:m.customers||[],f.products=r.length?r:m.products||[],f._legacyLists={customers:!s.length,products:!r.length},f._legacyFields=I,e(f)},a=_(j(t,"mCustomers"),f=>{s=f.docs.map(m=>m.data()),c()},n),u=_(j(t,"mProducts"),f=>{r=f.docs.map(m=>m.data()),c()},n),l=_(j(t,"mFields"),f=>{i=Bt(f.docs.map(m=>({_id:m.id,...m.data()}))),c()},n),h=bs(t,f=>{o=f||null,c()},n);return()=>{a(),u(),l(),h()}}function vc(t,e,n){let s,r;const i=()=>{if(s===void 0||r===void 0)return;const a={},u=[];for(const[l,h]of Object.entries(r||{}))l==="customers"||l==="products"||l.startsWith("_")||l==="updatedAt"||l in s||(a[l]=h,u.push(l));Object.assign(a,s),a._legacyFields=u,e(a)},o=_(j(t,"mFields"),a=>{s=Bt(a.docs.map(u=>({_id:u.id,...u.data()}))),i()},n),c=bs(t,a=>{r=a||null,i()},n);return()=>{o(),c()}}function bs(t,e,n){let s,r;const i=()=>{s===void 0||r===void 0||e(r||s)},o=_(Ce(t),a=>{s=a.exists()?a.data():null,i()},n),c=_(oe(t),a=>{const u=a.docs.map(l=>({_id:l.id,...l.data()}));u.some(l=>l._id==="head")?Ee.add(t):Ee.delete(t),r=Ft(u),i()},n);return()=>{o(),c()}}async function ma(t){const e=await K(oe(t));if(e.empty)return;const n=ne(d);e.docs.forEach(s=>n.delete(s.ref)),await n.commit(),Ee.delete(t)}async function _a(t,e,n){const s=JSON.stringify(e),r=String(Date.now()),i=[];for(let a=0;a<s.length;a+=hn)i.push(s.slice(a,a+hn));const o=ne(d);i.forEach((a,u)=>o.set(g(oe(t),"p"+u),{part:u,of:i.length,rev:r,data:a})),(await K(oe(t))).docs.forEach(a=>{if(a.id!=="head"&&!/^p\d+$/.test(a.id))return;(a.id==="head"?-1:Number(a.id.slice(1)))>=i.length&&o.delete(a.ref)}),o.set(g(oe(t),"head"),{of:i.length,rev:r,updatedAt:R(),_writer:n||""}),await o.commit(),Ee.add(t),await yt(Ce(t)).catch(()=>{})}async function Sc(t,e,n){let s=null;try{const i=await P(Ce(t)),c=(await K(oe(t))).docs.map(u=>({_id:u.id,...u.data()}));s=(c.some(u=>u._id==="head")?Ft(c):null)||(i.exists()?i.data():null)}catch(i){throw i}const r=e(s);return await wa(t,r,n),r}async function wa(t,e,n){const s={...e,_writer:n||""};if(pa(JSON.stringify(s))<fa)try{await E(Ce(t),{...s,updatedAt:R()}),Ee.has(t)&&await ma(t);return}catch(r){if(!ga(r))throw r}await _a(t,s,n)}async function Pc(t,e){await J(ms(),"map",t,e)}async function Cc(t,e,n){if(!t)throw new Error("email required");await E(g(d,"budgetAccessRequests",t),{email:t,name:e||"",message:n||"",status:"pending",requestedAt:R()})}async function Oc(t){if(!t)return null;const e=await P(g(d,"budgetAccessRequests",t));return e.exists()?e.data():null}function Nc(t,e){return _(D(d,"budgetAccessRequests"),n=>{const s=[];n.forEach(r=>s.push({id:r.id,...r.data()})),t(s)},e)}async function Uc(t,e){t&&(await ha(t,e||"viewer"),await E(g(d,"budgetAccessRequests",t),{email:t,status:"approved",approvedAt:R(),approvedAs:e||"viewer"},{merge:!0}))}async function Lc(t){t&&await E(g(d,"budgetAccessRequests",t),{email:t,status:"rejected",rejectedAt:R()},{merge:!0})}async function Dc(){const t=await P(pe());if(!t.exists())return[];const e=t.data()||{};let n=null;try{n=JSON.parse(e.value||"{}")}catch{n={}}return Array.isArray(n.orgs)?n.orgs.map(s=>s.name).filter(Boolean):[]}const tt=t=>g(d,"sales3",t),Vt=(t,e,n)=>g(d,"sales3",t,e,n),nt=t=>{const e=[];for(const[n,s]of t)e.push(new Gs(...n),s===void 0?null:s);return e};function Mc(t,e,n){return _(tt(t),{includeMetadataChanges:!0},s=>e(s.exists()?s.data():null,s.metadata.fromCache),n)}function xc(t,e,n,s){let r=!0;return _(D(d,"sales3",t,e),{includeMetadataChanges:!0},i=>{const o=i.docChanges({includeMetadataChanges:!0}).map(c=>({id:c.doc.id,data:c.type==="removed"?null:c.doc.data(),pending:c.doc.metadata.hasPendingWrites}));(o.length||r||!i.metadata.fromCache)&&n(o,i.metadata.fromCache,r),r=!1},s)}async function Fc(t,e,n,s,r){await me(Vt(t,e,n),...nt([...s,[["_at"],Date.now()],[["_by"],r||""]]))}async function Bc(t,e,n,s){await E(Vt(t,e,n),s,{merge:!0})}async function Vc(t,e){await me(tt(t),...nt([...e,[["_at"],Date.now()]]))}async function Wc(t,e){return ue(d,async n=>{const s=tt(t),r=await n.get(s),i=r.exists()?r.data()||{}:{};if(i.migratedAt)return"done";const o=i.migration||{};return o.at&&Date.now()-o.at<10*60*1e3&&o.by!==e?"wait":(r.exists()?n.update(s,{migration:{by:e,at:Date.now()}}):n.set(s,{_schema:3,migration:{by:e,at:Date.now()}}),"go")})}async function Hc(t,e,n){for(let s=0;s<n.length;s+=400){const r=ne(d);n.slice(s,s+400).forEach(i=>r.set(Vt(t,e,i.id),i.data,{merge:!0})),await r.commit()}}async function jc(t,e,n){await E(tt(t),{_schema:3,m:e||{},migratedAt:Date.now(),migration:{by:n,at:Date.now(),done:!0}},{merge:!0})}async function qc(t,e){return(await K(D(d,"salesWs",t,e))).docs.map(s=>s.data())}async function $c(t){const e=await P(et(t));return e.exists()?e.data():null}async function Gc(t){let e=null;try{const s=await P(Ce(t));e=s.exists()?s.data():null}catch{}let n=null;try{const s=await K(oe(t));n=Ft(s.docs.map(r=>({_id:r.id,...r.data()})))}catch{}return{inline:e,chunked:n}}const st=(t,e)=>g(d,t,e),Wt=(t,e,n,s)=>g(d,t,e,n,s);function zc(t,e,n,s){return _(st(t,e),{includeMetadataChanges:!0},r=>n(r.exists()?r.data():null,r.metadata.fromCache),s)}function Kc(t,e,n,s,r){let i=!0;return _(D(d,t,e,n),{includeMetadataChanges:!0},o=>{const c=o.docChanges({includeMetadataChanges:!0}).map(a=>({id:a.doc.id,data:a.type==="removed"?null:a.doc.data(),pending:a.doc.metadata.hasPendingWrites}));(c.length||i||!o.metadata.fromCache)&&s(c,o.metadata.fromCache,i),i=!1},r)}async function Jc(t,e,n,s,r,i){await me(Wt(t,e,n,s),...nt([...r,[["_at"],Date.now()],[["_by"],i||""]]))}async function Xc(t,e,n,s,r){await E(Wt(t,e,n,s),r,{merge:!0})}async function Yc(t,e,n){await me(st(t,e),...nt([...n,[["_at"],Date.now()]]))}async function Qc(t,e,n){return ue(d,async s=>{const r=st(t,e),i=await s.get(r),o=i.exists()?i.data()||{}:{};if(o.migratedAt)return"done";const c=o.migration||{};return c.at&&Date.now()-c.at<10*60*1e3&&c.by!==n?"wait":(i.exists()?s.update(r,{migration:{by:n,at:Date.now()}}):s.set(r,{_schema:3,migration:{by:n,at:Date.now()}}),"go")})}async function Zc(t,e,n,s){for(let r=0;r<s.length;r+=400){const i=ne(d);s.slice(r,r+400).forEach(o=>i.set(Wt(t,e,n,o.id),o.data,{merge:!0})),await i.commit()}}async function eu(t,e,n,s){await E(st(t,e),{_schema:3,m:n||{},migratedAt:Date.now(),migration:{by:s,at:Date.now(),done:!0}},{merge:!0})}export{G as ROLE,bc as addProjectTask,Ge as app,Uc as approveAccessRequest,ie as auth,Fa as bDelete,Ma as bGet,xa as bSet,Ba as bSubscribe,va as canManageRoles,ka as canRead,Aa as canWrite,d as db,yc as deleteSalesAttachment,Ec as deleteStorageFile,Sa as detectCurrentWsId,Wa as effectiveRole,Oa as ensureRoleAtFirstAccess,Ua as getBudgetOrgs,Dc as getGlobalBudgetOrgs,qa as getGlobalDataOnce,cc as getLoginUsers,Oc as getMyAccessRequest,Ca as getMyRole,Pa as getWorkspace,Ra as handleRedirectResult,Va as isBootstrapAdmin,la as isOwner,Tc as listProjectGoals,Ic as listProjectWorkspaces,ua as loginGoogle,Ea as logout,kc as mergeMasterFields,fc as mergeSalesDoc,Sc as mergeSalesMasters,Gc as readLegacyMastersOnce,qc as readSalesCollOnce,$c as readSalesDocOnce,oc as recordLoginUser,Lc as rejectAccessRequest,jc as sales3FinishMigration,Wc as sales3MigrationLock,Hc as sales3WriteMany,$a as setGlobalData,Ga as setGlobalDataMerged,ec as setGlobalNoticeRead,Xa as setGlobalOrgChart,Ya as setGlobalOrgChartMerged,ha as setGlobalRole,Pc as setGlobalUserCompany,sc as setGlobalUserDept,Ka as setGlobalUserRole,nc as setGlobalUserTitle,uc as setMenuConfig,lc as setMenuConfigKey,La as setRole,Bc as setSales3Item,hc as setSalesDoc,wa as setSalesMasters,Na as setUserCompany,Xc as setV3Item,Cc as submitAccessRequest,Nc as subscribeAccessRequests,rc as subscribeGlobalCompanies,ja as subscribeGlobalData,Qa as subscribeGlobalDepts,Za as subscribeGlobalNoticeRead,Ja as subscribeGlobalOrgChart,Ha as subscribeGlobalRoles,tc as subscribeGlobalTitles,ac as subscribeLoginUsers,vc as subscribeMasterFields,ic as subscribeMenuConfig,Mc as subscribeSales3Doc,xc as subscribeSales3List,pc as subscribeSalesColl,dc as subscribeSalesDoc,Ac as subscribeSalesMasters,za as subscribeUserRoles,zc as subscribeV3Doc,Kc as subscribeV3List,Da as subscribeWorkspace,Vc as updateSales3Doc,Fc as updateSales3Item,Yc as updateV3Doc,Jc as updateV3Item,Rc as uploadStorageFile,eu as v3FinishMigration,Qc as v3MigrationLock,Zc as v3WriteMany,ba as watchAuth,_c as writeSalesAttachment,wc as writeSalesAttachmentChunked,gc as writeSalesItems,mc as writeSalesItemsMerged};
