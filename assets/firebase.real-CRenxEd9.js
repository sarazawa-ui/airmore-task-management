const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-WbcGJB7p.js","./index-CZYznYw5.css"])))=>i.map(i=>d[i]);
import{_ as ls}from"./index-WbcGJB7p.js";import{r as ye,g as U,_ as en,a as ds,b as hs,d as S,F as $e,i as Ge,p as fs,e as ps,c as it,C as ot,S as fe,f as gs,q as be,E as dt,h as ms,j as _s,L as ws,k as tn,l as ys,m as Is,n as Ts,o as bs,s as v,t as Rs,u as Es,v as ks,w as As}from"./index.esm-v97zNOB-.js";import{doc as g,getDoc as L,getDocs as ie,collection as ee,setDoc as P,updateDoc as nn,deleteDoc as ht,onSnapshot as y,initializeFirestore as vs,persistentLocalCache as Ss,CACHE_SIZE_UNLIMITED as Ps,persistentMultipleTabManager as Cs,getFirestore as Os,writeBatch as pe,query as Ns,where as Us,serverTimestamp as R,runTransaction as Re}from"./index.esm-4dSbkLWS.js";var Ls="firebase",Ds="12.16.0";/**
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
 */ye(Ls,Ds,"app");/**
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
 */const sn="firebasestorage.googleapis.com",rn="storageBucket",Ms=2*60*1e3,xs=10*60*1e3;/**
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
 */class w extends $e{constructor(e,n,s=0){super(et(e),`Firebase Storage: ${n} (${et(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,w.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return et(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_||(_={}));function et(t){return"storage/"+t}function ft(){const t="An unknown error occurred, please check the error payload for server response.";return new w(_.UNKNOWN,t)}function Fs(t){return new w(_.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Bs(t){return new w(_.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Vs(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new w(_.UNAUTHENTICATED,t)}function Ws(){return new w(_.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Hs(t){return new w(_.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qs(){return new w(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function js(){return new w(_.CANCELED,"User canceled the upload/download.")}function $s(t){return new w(_.INVALID_URL,"Invalid URL '"+t+"'.")}function Gs(t){return new w(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zs(){return new w(_.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rn+"' property when initializing the app?")}function Ks(){return new w(_.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Js(){return new w(_.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Xs(t){return new w(_.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function at(t){return new w(_.INVALID_ARGUMENT,t)}function on(){return new w(_.APP_DELETED,"The Firebase app was deleted.")}function Ys(t){return new w(_.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _e(t,e){return new w(_.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function me(t){throw new w(_.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class A{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=A.makeFromUrl(e,n)}catch{return new A(e,"")}if(s.path==="")return s;throw Gs(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function u(k){k.path_=decodeURIComponent(k.path)}const l="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${l}/b/${r}/o${h}`,"i"),I={bucket:1,path:3},T=n===sn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",D=new RegExp(`^https?://${T}/${r}/${b}`,"i"),M=[{regex:c,indices:a,postModify:i},{regex:m,indices:I,postModify:u},{regex:D,indices:{bucket:1,path:2},postModify:u}];for(let k=0;k<M.length;k++){const Se=M[k],Qe=Se.regex.exec(e);if(Qe){const us=Qe[Se.indices.bucket];let Ze=Qe[Se.indices.path];Ze||(Ze=""),s=new A(us,Ze),Se.postModify(s);break}}if(s==null)throw $s(e);return s}}class Qs{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Zs(t,e,n){let s=1,r=null,i=null,o=!1,c=0;function a(){return c===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function d(b){r=setTimeout(()=>{r=null,t(m,a())},b)}function h(){i&&clearTimeout(i)}function m(b,...D){if(u){h();return}if(b){h(),l.call(null,b,...D);return}if(a()||o){h(),l.call(null,b,...D);return}s<64&&(s*=2);let M;c===1?(c=2,M=0):M=(s+Math.random())*1e3,d(M)}let I=!1;function T(b){I||(I=!0,h(),!u&&(r!==null?(b||(c=2),clearTimeout(r),d(0)):b||(c=1)))}return d(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function er(t){t(!1)}/**
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
 */function tr(t){return t!==void 0}function nr(t){return typeof t=="object"&&!Array.isArray(t)}function pt(t){return typeof t=="string"||t instanceof String}function Nt(t){return gt()&&t instanceof Blob}function gt(){return typeof Blob<"u"}function Ut(t,e,n,s){if(s<e)throw at(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw at(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ze(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function an(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var ne;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ne||(ne={}));/**
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
 */function sr(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class rr{constructor(e,n,s,r,i,o,c,a,u,l,d,h=!0,m=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=d,this.retry=h,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,T)=>{this.resolve_=I,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Pe(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const a=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===ne.NO_ERROR,a=i.getStatus();if(!c||sr(a,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===ne.ABORT;s(!1,new Pe(!1,null,l));return}const u=this.successCodes_.indexOf(a)!==-1;s(!0,new Pe(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());tr(a)?i(a):i()}catch(a){o(a)}else if(c!==null){const a=ft();a.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,a)):o(a)}else if(r.canceled){const a=this.appDelete_?on():js();o(a)}else{const a=qs();o(a)}};this.canceled_?n(!1,new Pe(!1,null,!0)):this.backoffId_=Zs(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&er(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pe{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ir(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function or(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ar(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cr(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ur(t,e,n,s,r,i,o=!0,c=!1){const a=an(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return ar(l,e),ir(l,n),or(l,i),cr(l,s),new rr(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,c)}/**
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
 */function lr(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dr(...t){const e=lr();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(gt())return new Blob(t);throw new w(_.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hr(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function fr(t){if(typeof atob>"u")throw Xs("base-64");return atob(t)}/**
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
 */const F={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tt{constructor(e,n){this.data=e,this.contentType=n||null}}function pr(t,e){switch(t){case F.RAW:return new tt(cn(e));case F.BASE64:case F.BASE64URL:return new tt(un(t,e));case F.DATA_URL:return new tt(mr(e),_r(e))}throw ft()}function cn(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function gr(t){let e;try{e=decodeURIComponent(t)}catch{throw _e(F.DATA_URL,"Malformed data URL.")}return cn(e)}function un(t,e){switch(t){case F.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw _e(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case F.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw _e(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=fr(e)}catch(r){throw r.message.includes("polyfill")?r:_e(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ln{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _e(F.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=wr(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function mr(t){const e=new ln(t);return e.base64?un(F.BASE64,e.rest):gr(e.rest)}function _r(t){return new ln(t).contentType}function wr(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class K{constructor(e,n){let s=0,r="";Nt(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Nt(this.data_)){const s=this.data_,r=hr(s,e,n);return r===null?null:new K(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new K(s,!0)}}static getBlob(...e){if(gt()){const n=e.map(s=>s instanceof K?s.data_:s);return new K(dr.apply(null,n))}else{const n=e.map(o=>pt(o)?pr(F.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)r[i++]=o[c]}),new K(r,!0)}}uploadData(){return this.data_}}/**
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
 */function dn(t){let e;try{e=JSON.parse(t)}catch{return null}return nr(e)?e:null}/**
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
 */function yr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ir(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function hn(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Tr(t,e){return e}class E{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Tr}}let Ce=null;function br(t){return!pt(t)||t.length<2?t:hn(t)}function fn(){if(Ce)return Ce;const t=[];t.push(new E("bucket")),t.push(new E("generation")),t.push(new E("metageneration")),t.push(new E("name","fullPath",!0));function e(i,o){return br(o)}const n=new E("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new E("size");return r.xform=s,t.push(r),t.push(new E("timeCreated")),t.push(new E("updated")),t.push(new E("md5Hash",null,!0)),t.push(new E("cacheControl",null,!0)),t.push(new E("contentDisposition",null,!0)),t.push(new E("contentEncoding",null,!0)),t.push(new E("contentLanguage",null,!0)),t.push(new E("contentType",null,!0)),t.push(new E("metadata","customMetadata",!0)),Ce=t,Ce}function Rr(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new A(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Er(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Rr(s,t),s}function pn(t,e,n){const s=dn(e);return s===null?null:Er(t,s,n)}function kr(t,e,n,s){const r=dn(e);if(r===null||!pt(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,d=t.fullPath,h="/b/"+o(l)+"/o/"+o(d),m=ze(h,n,s),I=an({alt:"media",token:u});return m+I})[0]}function Ar(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class mt{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function gn(t){if(!t)throw ft()}function vr(t,e){function n(s,r){const i=pn(t,r,e);return gn(i!==null),i}return n}function Sr(t,e){function n(s,r){const i=pn(t,r,e);return gn(i!==null),kr(i,r,t.host,t._protocol)}return n}function mn(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Ws():r=Vs():n.getStatus()===402?r=Bs(t.bucket):n.getStatus()===403?r=Hs(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function _n(t){const e=mn(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Fs(t.path)),i.serverResponse=r.serverResponse,i}return n}function Pr(t,e,n){const s=e.fullServerUrl(),r=ze(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new mt(r,i,Sr(t,n),o);return c.errorHandler=_n(e),c}function Cr(t,e){const n=e.fullServerUrl(),s=ze(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(a,u){}const c=new mt(s,r,o,i);return c.successCodes=[200,204],c.errorHandler=_n(e),c}function Or(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Nr(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Or(null,e)),s}function Ur(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let k=0;k<2;k++)M=M+Math.random().toString().slice(2);return M}const a=c();o["Content-Type"]="multipart/related; boundary="+a;const u=Nr(e,s,r),l=Ar(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+a+"--",m=K.getBlob(d,s,h);if(m===null)throw Ks();const I={name:u.fullPath},T=ze(i,t.host,t._protocol),b="POST",D=t.maxUploadRetryTime,W=new mt(T,b,vr(t,n),D);return W.urlParams=I,W.headers=o,W.body=m.uploadData(),W.errorHandler=mn(e),W}class Lr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ne.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ne.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ne.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r,i){if(this.sent_)throw me("cannot .send() more than once");if(Ge(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw me("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw me("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw me("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw me("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Dr extends Lr{initXhr(){this.xhr_.responseType="text"}}function _t(){return new Dr}/**
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
 */class se{constructor(e,n){this._service=e,n instanceof A?this._location=n:this._location=A.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new se(e,n)}get root(){const e=new A(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hn(this._location.path)}get storage(){return this._service}get parent(){const e=yr(this._location.path);if(e===null)return null;const n=new A(this._location.bucket,e);return new se(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ys(e)}}function Mr(t,e,n){t._throwIfRoot("uploadBytes");const s=Ur(t.storage,t._location,fn(),new K(e,!0),n);return t.storage.makeRequestWithTokens(s,_t).then(r=>({metadata:r,ref:t}))}function xr(t){t._throwIfRoot("getDownloadURL");const e=Pr(t.storage,t._location,fn());return t.storage.makeRequestWithTokens(e,_t).then(n=>{if(n===null)throw Js();return n})}function Fr(t){t._throwIfRoot("deleteObject");const e=Cr(t.storage,t._location);return t.storage.makeRequestWithTokens(e,_t)}function Br(t,e){const n=Ir(t._location.path,e),s=new A(t._location.bucket,n);return new se(t.storage,s)}/**
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
 */function Vr(t){return/^[A-Za-z]+:\/\//.test(t)}function Wr(t,e){return new se(t,e)}function wn(t,e){if(t instanceof wt){const n=t;if(n._bucket==null)throw zs();const s=new se(n,n._bucket);return e!=null?wn(s,e):s}else return e!==void 0?Br(t,e):t}function Hr(t,e){if(e&&Vr(e)){if(t instanceof wt)return Wr(t,e);throw at("To use ref(service, url), the first argument must be a Storage instance.")}else return wn(t,e)}function Lt(t,e){const n=e==null?void 0:e[rn];return n==null?null:A.makeFromBucketSpec(n,t)}function qr(t,e,n,s={}){t.host=`${e}:${n}`;const r=Ge(e);r&&fs(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:ps(i,t.app.options.projectId))}class wt{constructor(e,n,s,r,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=sn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ms,this._maxUploadRetryTime=xs,this._requests=new Set,r!=null?this._bucket=A.makeFromBucketSpec(r,this._host):this._bucket=Lt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=Lt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ut("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ut("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(S(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new se(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new Qs(on());{const o=ur(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Dt="@firebase/storage",Mt="0.14.3";/**
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
 */const yn="storage";function jr(t,e,n){return t=U(t),Mr(t,e,n)}function $r(t){return t=U(t),xr(t)}function Gr(t){return t=U(t),Fr(t)}function In(t,e){return t=U(t),Hr(t,e)}function zr(t=hs(),e){t=U(t);const s=en(t,yn).getImmediate({identifier:e}),r=ds("storage");return r&&Kr(s,...r),s}function Kr(t,e,n,s={}){qr(t,e,n,s)}function Jr(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new wt(n,s,r,e,fe)}function Xr(){it(new ot(yn,Jr,"PUBLIC").setMultipleInstances(!0)),ye(Dt,Mt,""),ye(Dt,Mt,"esm2020")}Xr();function Tn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yr=Tn,bn=new dt("auth","Firebase",Tn());/**
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
 */const Me=new ws("@firebase/auth");function Qr(t,...e){Me.logLevel<=tn.WARN&&Me.warn(`Auth (${fe}): ${t}`,...e)}function Ne(t,...e){Me.logLevel<=tn.ERROR&&Me.error(`Auth (${fe}): ${t}`,...e)}/**
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
 */function V(t,...e){throw It(t,...e)}function O(t,...e){return It(t,...e)}function yt(t,e,n){const s={...Yr(),[e]:n};return new dt("auth","Firebase",s).create(e,{appName:t.name})}function Z(t){return yt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rn(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&V(t,"argument-error"),yt(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function It(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return bn.create(t,...e)}function p(t,e,...n){if(!t)throw It(e,...n)}function H(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ne(e),new Error(e)}function $(t,e){t||H(e)}/**
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
 */function ct(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Zr(){return xt()==="http:"||xt()==="https:"}function xt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ei(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zr()||ys()||"connection"in navigator)?navigator.onLine:!0}function ti(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ee{constructor(e,n){this.shortDelay=e,this.longDelay=n,$(n>e,"Short delay should be less than long delay!"),this.isMobile=ms()||_s()}get(){return ei()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tt(t,e){$(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class En{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;H("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;H("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;H("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ni={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const si=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ri=new Ee(3e4,6e4);function bt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ge(t,e,n,s,r={}){return kn(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=be({...o,key:t.config.apiKey}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...i};return Ts()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Ge(t.emulatorConfig.host)&&(u.credentials="include"),En.fetch()(await An(t,t.config.apiHost,n,c),u)})}async function kn(t,e,n){t._canInitEmulator=!1;const s={...ni,...e};try{const r=new oi(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oe(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oe(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Oe(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Oe(t,"user-disabled",o);const l=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yt(t,l,u);V(t,l)}}catch(r){if(r instanceof $e)throw r;V(t,"network-request-failed",{message:String(r)})}}async function ii(t,e,n,s,r={}){const i=await ge(t,e,n,s,r);return"mfaPendingCredential"in i&&V(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function An(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Tt(t.config,r):`${t.config.apiScheme}://${r}`;return si.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class oi{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(O(this.auth,"network-request-failed")),ri.get())})}}function Oe(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=O(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function ai(t,e){return ge(t,"POST","/v1/accounts:delete",e)}async function xe(t,e){return ge(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function we(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ci(t,e=!1){const n=U(t),s=await n.getIdToken(e),r=Rt(s);p(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:we(nt(r.auth_time)),issuedAtTime:we(nt(r.iat)),expirationTime:we(nt(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nt(t){return Number(t)*1e3}function Rt(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ne("JWT malformed, contained fewer than 3 sections"),null;try{const r=Is(n);return r?JSON.parse(r):(Ne("Failed to decode base64 JWT payload"),null)}catch(r){return Ne("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ft(t){const e=Rt(t);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ie(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof $e&&ui(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ui({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class li{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ut{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=we(this.lastLoginAt),this.creationTime=we(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fe(t){var d;const e=t.auth,n=await t.getIdToken(),s=await Ie(t,xe(e,{idToken:n}));p(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(d=r.providerUserInfo)!=null&&d.length?vn(r.providerUserInfo):[],o=hi(t.providerData,i),c=t.isAnonymous,a=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),u=c?a:!1,l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ut(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function di(t){const e=U(t);await Fe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hi(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function vn(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function fi(t,e){const n=await kn(t,{},async()=>{const s=be({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await An(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:c,body:s};return t.emulatorConfig&&Ge(t.emulatorConfig.host)&&(a.credentials="include"),En.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pi(t,e){return ge(t,"POST","/v2/accounts:revokeToken",bt(t,e))}/**
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
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ft(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){p(e.length!==0,"internal-error");const n=Ft(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(p(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await fi(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new oe;return s&&(p(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(p(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(p(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return H("not implemented")}}/**
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
 */function z(t,e){p(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class C{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new li(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ut(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ie(this,this.stsTokenManager.getToken(this.auth,e));return p(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ci(this,e)}reload(){return di(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new C({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fe(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(S(this.auth.app))return Promise.reject(Z(this.auth));const e=await this.getIdToken();return await Ie(this,ai(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,l=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:m,providerData:I,stsTokenManager:T}=n;p(d&&T,e,"internal-error");const b=oe.fromJSON(this.name,T);p(typeof d=="string",e,"internal-error"),z(s,e.name),z(r,e.name),p(typeof h=="boolean",e,"internal-error"),p(typeof m=="boolean",e,"internal-error"),z(i,e.name),z(o,e.name),z(c,e.name),z(a,e.name),z(u,e.name),z(l,e.name);const D=new C({uid:d,auth:e,email:r,emailVerified:h,displayName:s,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:b,createdAt:u,lastLoginAt:l});return I&&Array.isArray(I)&&(D.providerData=I.map(W=>({...W}))),a&&(D._redirectEventId=a),D}static async _fromIdTokenResponse(e,n,s=!1){const r=new oe;r.updateFromServerResponse(n);const i=new C({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Fe(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];p(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?vn(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new oe;c.updateFromIdToken(s);const a=new C({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ut(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
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
 */const Bt=new Map;function q(t){$(t instanceof Function,"Expected a class definition");let e=Bt.get(t);return e?($(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bt.set(t,e),e)}/**
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
 */class Sn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sn.type="NONE";const Vt=Sn;/**
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
 */function Ue(t,e,n){return`firebase:${t}:${e}:${n}`}class ae{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ue(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ue("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xe(this.auth,{idToken:e}).catch(()=>{});return n?C._fromGetAccountInfoResponse(this.auth,n,e):null}return C._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ae(q(Vt),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||q(Vt);const o=Ue(s,e.config.apiKey,e.name);let c=null;for(const u of n)try{const l=await u._get(o);if(l){let d;if(typeof l=="string"){const h=await xe(e,{idToken:l}).catch(()=>{});if(!h)break;d=await C._fromGetAccountInfoResponse(e,h,l)}else d=C._fromJSON(e,l);u!==i&&(c=d),i=u;break}}catch{}const a=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new ae(i,e,s):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ae(i,e,s))}}/**
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
 */function Wt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ln(e))return"Blackberry";if(Dn(e))return"Webos";if(Cn(e))return"Safari";if((e.includes("chrome/")||On(e))&&!e.includes("edge/"))return"Chrome";if(Un(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pn(t=v()){return/firefox\//i.test(t)}function Cn(t=v()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function On(t=v()){return/crios\//i.test(t)}function Nn(t=v()){return/iemobile/i.test(t)}function Un(t=v()){return/android/i.test(t)}function Ln(t=v()){return/blackberry/i.test(t)}function Dn(t=v()){return/webos/i.test(t)}function Et(t=v()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gi(t=v()){var e;return Et(t)&&!!((e=window.navigator)!=null&&e.standalone)}function mi(){return Rs()&&document.documentMode===10}function Mn(t=v()){return Et(t)||Un(t)||Dn(t)||Ln(t)||/windows phone/i.test(t)||Nn(t)}/**
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
 */function xn(t,e=[]){let n;switch(t){case"Browser":n=Wt(v());break;case"Worker":n=`${Wt(v())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fe}/${s}`}/**
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
 */class _i{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function wi(t,e={}){return ge(t,"GET","/v2/passwordPolicy",bt(t,e))}/**
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
 */const yi=6;class Ii{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yi,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ti{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ht(this),this.idTokenSubscription=new Ht(this),this.beforeStateQueue=new _i(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=q(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ae.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xe(this,{idToken:e}),s=await C._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(S(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fe(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ti()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(S(this.app))return Promise.reject(Z(this));const n=e?U(e):null;return n&&p(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return S(this.app)?Promise.reject(Z(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return S(this.app)?Promise.reject(Z(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(q(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wi(this),n=new Ii(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await pi(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&q(e)||this._popupRedirectResolver;p(n,this,"argument-error"),this.redirectPersistenceManager=await ae.create(this,[q(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(S(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Qr(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ke(t){return U(t)}class Ht{constructor(e){this.auth=e,this.observer=null,this.addObserver=Es(n=>this.observer=n)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bi(t){kt=t}function Ri(t){return kt.loadJS(t)}function Ei(){return kt.gapiScript}function ki(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ai(t,e){const n=en(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(gs(i,e??{}))return r;V(r,"already-initialized")}return n.initialize({options:e})}function vi(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(q);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class Fn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return H("not implemented")}_getIdTokenResponse(e){return H("not implemented")}_linkToIdToken(e,n){return H("not implemented")}_getReauthenticationResolver(e){return H("not implemented")}}/**
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
 */async function ce(t,e){return ii(t,"POST","/v1/accounts:signInWithIdp",bt(t,e))}/**
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
 */const Si="http://localhost";class re extends Fn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new re(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):V("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new re(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ce(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ce(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ce(e,n)}buildRequest(){const e={requestUri:Si,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=be(n)}return e}}/**
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
 */class Ke{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ae extends Ke{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class J extends Ae{constructor(){super("facebook.com")}static credential(e){return re._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return J.credentialFromTaggedObject(e)}static credentialFromError(e){return J.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return J.credential(e.oauthAccessToken)}catch{return null}}}J.FACEBOOK_SIGN_IN_METHOD="facebook.com";J.PROVIDER_ID="facebook.com";/**
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
 */class x extends Ae{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return re._fromParams({providerId:x.PROVIDER_ID,signInMethod:x.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return x.credentialFromTaggedObject(e)}static credentialFromError(e){return x.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return x.credential(n,s)}catch{return null}}}x.GOOGLE_SIGN_IN_METHOD="google.com";x.PROVIDER_ID="google.com";/**
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
 */class X extends Ae{constructor(){super("github.com")}static credential(e){return re._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X.credential(e.oauthAccessToken)}catch{return null}}}X.GITHUB_SIGN_IN_METHOD="github.com";X.PROVIDER_ID="github.com";/**
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
 */class Y extends Ae{constructor(){super("twitter.com")}static credential(e,n){return re._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Y.credential(n,s)}catch{return null}}}Y.TWITTER_SIGN_IN_METHOD="twitter.com";Y.PROVIDER_ID="twitter.com";/**
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
 */class de{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await C._fromIdTokenResponse(e,s,r),o=qt(s);return new de({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=qt(s);return new de({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function qt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Be extends $e{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Be.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Be(e,n,s,r)}}function Bn(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Be._fromErrorAndOperation(t,i,e,s):i})}async function Pi(t,e,n=!1){const s=await Ie(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return de._forOperation(t,"link",s)}/**
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
 */async function Ci(t,e,n=!1){const{auth:s}=t;if(S(s.app))return Promise.reject(Z(s));const r="reauthenticate";try{const i=await Ie(t,Bn(s,r,e,t),n);p(i.idToken,s,"internal-error");const o=Rt(i.idToken);p(o,s,"internal-error");const{sub:c}=o;return p(t.uid===c,s,"user-mismatch"),de._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&V(s,"user-mismatch"),i}}/**
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
 */async function Oi(t,e,n=!1){if(S(t.app))return Promise.reject(Z(t));const s="signIn",r=await Bn(t,s,e),i=await de._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Ni(t,e,n,s){return U(t).onAuthStateChanged(e,n,s)}function Ui(t){return U(t).signOut()}const Ve="__sak";/**
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
 */class Vn{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ve,"1"),this.storage.removeItem(Ve),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Li=1e3,Di=10;class Wn extends Vn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);mi()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Di):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Li)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wn.type="LOCAL";const Mi=Wn;/**
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
 */class Hn extends Vn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hn.type="SESSION";const xi=Hn;/**
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
 */function Fi(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Je{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Je(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async u=>u(n.origin,i)),a=await Fi(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Je.receivers=[];/**
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
 */function At(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Bi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const u=At("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(h.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function B(){return window}function Vi(t){B().location.href=t}/**
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
 */function qn(){return typeof B().WorkerGlobalScope<"u"&&typeof B().importScripts=="function"}async function Wi(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hi(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qi(){return qn()?self:null}/**
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
 */const jn="firebaseLocalStorageDb",ji=1,We="firebaseLocalStorage",$n="fbase_key";class ve{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xe(t,e){return t.transaction([We],e?"readwrite":"readonly").objectStore(We)}function $i(){const t=indexedDB.deleteDatabase(jn);return new ve(t).toPromise()}function Gn(){const t=indexedDB.open(jn,ji);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(We,{keyPath:$n})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(We)?e(s):(s.close(),await $i(),e(await Gn()))})})}async function jt(t,e,n){const s=Xe(t,!0).put({[$n]:e,value:n});return new ve(s).toPromise()}async function Gi(t,e){const n=Xe(t,!1).get(e),s=await new ve(n).toPromise();return s===void 0?null:s.value}function $t(t,e){const n=Xe(t,!0).delete(e);return new ve(n).toPromise()}const zi=800,Ki=3;class zn{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Gn(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ki)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Je._getInstance(qi()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Wi(),!this.activeServiceWorker)return;this.sender=new Bi(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await jt(e,Ve,"1"),await $t(e,Ve)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>jt(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Gi(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$t(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xe(r,!1).getAll();return new ve(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zi)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zn.type="LOCAL";const Ji=zn;new Ee(3e4,6e4);/**
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
 */function vt(t,e){return e?q(e):(p(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class St extends Fn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ce(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ce(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xi(t){return Oi(t.auth,new St(t),t.bypassAuthState)}function Yi(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),Ci(n,new St(t),t.bypassAuthState)}async function Qi(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),Pi(n,new St(t),t.bypassAuthState)}/**
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
 */class Kn{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xi;case"linkViaPopup":case"linkViaRedirect":return Qi;case"reauthViaPopup":case"reauthViaRedirect":return Yi;default:V(this.auth,"internal-error")}}resolve(e){$(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zi=new Ee(2e3,1e4);async function eo(t,e,n){if(S(t.app))return Promise.reject(O(t,"operation-not-supported-in-this-environment"));const s=ke(t);Rn(t,e,Ke);const r=vt(s,n);return new te(s,"signInViaPopup",e,r).executeNotNull()}class te extends Kn{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,te.currentPopupAction&&te.currentPopupAction.cancel(),te.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){$(this.filter.length===1,"Popup operations only handle one event");const e=At();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(O(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(O(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,te.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(O(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zi.get())};e()}}te.currentPopupAction=null;/**
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
 */const to="pendingRedirect",Le=new Map;class no extends Kn{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Le.get(this.auth._key());if(!e){try{const s=await so(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Le.set(this.auth._key(),e)}return this.bypassAuthState||Le.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function so(t,e){const n=Xn(e),s=Jn(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function ro(t,e){return Jn(t)._set(Xn(e),"true")}function io(t,e){Le.set(t._key(),e)}function Jn(t){return q(t._redirectPersistence)}function Xn(t){return Ue(to,t.config.apiKey,t.name)}/**
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
 */function Gt(t,e,n){return oo(t,e,n)}async function oo(t,e,n){if(S(t.app))return Promise.reject(Z(t));const s=ke(t);Rn(t,e,Ke),await s._initializationPromise;const r=vt(s,n);return await ro(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function ao(t,e){return await ke(t)._initializationPromise,Yn(t,e,!1)}async function Yn(t,e,n=!1){if(S(t.app))return Promise.reject(Z(t));const s=ke(t),r=vt(s,e),o=await new no(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const co=10*60*1e3;class uo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lo(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Qn(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(O(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=co&&this.cachedEventUids.clear(),this.cachedEventUids.has(zt(e))}saveEventToCache(e){this.cachedEventUids.add(zt(e)),this.lastProcessedEventTime=Date.now()}}function zt(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qn({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lo(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qn(t);default:return!1}}/**
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
 */async function ho(t,e={}){return ge(t,"GET","/v1/projects",e)}/**
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
 */const fo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,po=/^https?/;async function go(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ho(t);for(const n of e)try{if(mo(n))return}catch{}V(t,"unauthorized-domain")}function mo(t){const e=ct(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!po.test(n))return!1;if(fo.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const _o=new Ee(3e4,6e4);function Kt(){const t=B().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wo(t){return new Promise((e,n)=>{var r,i,o;function s(){Kt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kt(),n(O(t,"network-request-failed"))},timeout:_o.get()})}if((i=(r=B().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=B().gapi)!=null&&o.load)s();else{const c=ki("iframefcb");return B()[c]=()=>{gapi.load?s():n(O(t,"network-request-failed"))},Ri(`${Ei()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw De=null,e})}let De=null;function yo(t){return De=De||wo(t),De}/**
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
 */const Io=new Ee(5e3,15e3),To="__/auth/iframe",bo="emulator/auth/iframe",Ro={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ko(t){const e=t.config;p(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tt(e,bo):`https://${t.config.authDomain}/${To}`,s={apiKey:e.apiKey,appName:t.name,v:fe},r=Eo.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${be(s).slice(1)}`}async function Ao(t){const e=await yo(t),n=B().gapi;return p(n,t,"internal-error"),e.open({where:document.body,url:ko(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ro,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=O(t,"network-request-failed"),c=B().setTimeout(()=>{i(o)},Io.get());function a(){B().clearTimeout(c),r(s)}s.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const vo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},So=500,Po=600,Co="_blank",Oo="http://localhost";class Jt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function No(t,e,n,s=So,r=Po){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const a={...vo,width:s.toString(),height:r.toString(),top:i,left:o},u=v().toLowerCase();n&&(c=On(u)?Co:n),Pn(u)&&(e=e||Oo,a.scrollbars="yes");const l=Object.entries(a).reduce((h,[m,I])=>`${h}${m}=${I},`,"");if(gi(u)&&c!=="_self")return Uo(e||"",c),new Jt(null);const d=window.open(e||"",c,l);p(d,t,"popup-blocked");try{d.focus()}catch{}return new Jt(d)}function Uo(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Lo="__/auth/handler",Do="emulator/auth/handler",Mo=encodeURIComponent("fac");async function Xt(t,e,n,s,r,i){p(t.config.authDomain,t,"auth-domain-config-required"),p(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fe,eventId:r};if(e instanceof Ke){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ks(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,d]of Object.entries({}))o[l]=d}if(e instanceof Ae){const l=e.getScopes().filter(d=>d!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const l of Object.keys(c))c[l]===void 0&&delete c[l];const a=await t._getAppCheckToken(),u=a?`#${Mo}=${encodeURIComponent(a)}`:"";return`${xo(t)}?${be(c).slice(1)}${u}`}function xo({config:t}){return t.emulator?Tt(t,Do):`https://${t.authDomain}/${Lo}`}/**
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
 */const st="webStorageSupport";class Fo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xi,this._completeRedirectFn=Yn,this._overrideRedirectResult=io}async _openPopup(e,n,s,r){var o;$((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Xt(e,n,s,ct(),r);return No(e,i,At())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Xt(e,n,s,ct(),r);return Vi(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):($(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ao(e),s=new uo(e);return n.register("authEvent",r=>(p(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(st,{type:st},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[st];i!==void 0&&n(!!i),V(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=go(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mn()||Cn()||Et()}}const Bo=Fo;var Yt="@firebase/auth",Qt="1.13.3";/**
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
 */class Vo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wo(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ho(t){it(new ot("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;p(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xn(t)},u=new Ti(s,r,i,a);return vi(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),it(new ot("auth-internal",e=>{const n=ke(e.getProvider("auth").getImmediate());return(s=>new Vo(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ye(Yt,Qt,Wo(t)),ye(Yt,Qt,"esm2020")}/**
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
 */const qo=5*60;bs("authIdTokenMaxAge");function jo(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bi({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=O("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",jo().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ho("Browser");const $o={apiKey:"AIzaSyB8QE3JylXkXWmg_rF2ZuczixnRYJZlRnE",authDomain:"airmore-task-management-app.firebaseapp.com",projectId:"airmore-task-management-app",storageBucket:"airmore-task-management-app.firebasestorage.app",messagingSenderId:"674161520247",appId:"1:674161520247:web:fe0e0f9d0656008fbaa072",measurementId:"G-VFS9X3L72E"},He=As($o),ue=Ai(He,{persistence:[Ji,Mi],popupRedirectResolver:Bo}),f=(()=>{try{return vs(He,{localCache:Ss({tabManager:Cs(),cacheSizeBytes:Ps})})}catch(t){return console.warn("Firestore永続キャッシュの初期化に失敗。キャッシュ無しで継続します:",t&&t.message),Os(He)}})();function aa(t){return Ni(ue,t)}async function Go(){const t=new x;t.setCustomParameters({prompt:"select_account"}),t.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"),t.addScope("https://www.googleapis.com/auth/calendar.readonly"),t.addScope("https://www.googleapis.com/auth/drive.metadata.readonly");try{const e=await eo(ue,t);return Zn(e),e.user}catch(e){const n=e&&e.code||"";if(n==="auth/popup-blocked"){const{showPopupBlockedHelp:s}=await ls(async()=>{const{showPopupBlockedHelp:r}=await import("./index-WbcGJB7p.js").then(i=>i.p);return{showPopupBlockedHelp:r}},__vite__mapDeps([0,1]),import.meta.url);return s({what:"Googleへのログイン",onRetry:()=>{Go().catch(()=>{})},altLabel:"このまま画面を切り替えてログイン",onAlt:()=>{Gt(ue,t).catch(()=>{})}}),null}if(n==="auth/cancelled-popup-request"||n==="auth/popup-closed-by-user"||n==="auth/operation-not-supported-in-this-environment")return await Gt(ue,t),null;throw e}}function Zn(t){try{const e=x.credentialFromResult(t);e&&e.accessToken&&(window.__sheetsTokenFromLogin={token:e.accessToken,at:Date.now()})}catch{}}async function ca(){try{const t=await ao(ue);return t&&Zn(t),(t==null?void 0:t.user)||null}catch(t){return console.warn("redirect result:",t),null}}async function ua(){await Ui(ue)}const j={ADMIN:"admin",EDITOR:"editor",VIEWER:"viewer"};function la(t){return t===j.ADMIN||t===j.EDITOR||t===j.VIEWER}function da(t){return t===j.ADMIN||t===j.EDITOR}function ha(t){return t===j.ADMIN}function fa(){try{const e=new URL(window.location.href).searchParams.get("ws");if(e)return localStorage.setItem("hittatsu_current_ws",e),e}catch{}return localStorage.getItem("hittatsu_current_ws")||null}async function pa(t){if(!t)return null;const e=await L(g(f,"workspaces",t));return e.exists()?{id:e.id,...e.data()}:null}function ga(t,e){return!t||!e?null:(t.budgetRoles||{})[e]||null}function zo(t,e){if(!t||!e)return!1;const n=(t.authMembers||[]).find(s=>s&&s.email===e);return n&&n.role==="owner"}async function ma(t,e,n){if(!t||!e||!n)return null;const s=(n.budgetRoles||{})[e];if(s)return s;const r=zo(n,e)?j.ADMIN:j.VIEWER;try{const i={...n.budgetRoles||{},[e]:r};return await nn(g(f,"workspaces",t),{budgetRoles:i}),r}catch(i){return console.warn("ensureRoleAtFirstAccess failed:",i),null}}async function G(t,e,n,s,r=!0){return Re(f,async i=>{const o=await i.get(t);if(!r&&!o.exists())return!1;const a={...o.exists()?(o.data()||{})[e]||{}:{}};return s==null||s===""?delete a[n]:a[n]=s,r?i.set(t,{...o.exists()?o.data():{},[e]:a,updatedAt:R()}):i.update(t,{[e]:a}),!0})}async function _a(t,e,n){return!t||!e?!1:G(g(f,"workspaces",t),"userCompanies",e,n,!1)}async function wa(t){if(!t)return[];try{const e=await L(g(f,"workspaces",t,"budget","airmore-budget-v4"));if(!e.exists())return[];const n=e.data()||{};let s=null;try{s=JSON.parse(n.value||"{}")}catch{s={}}return Array.isArray(s.orgs)?s.orgs.map(r=>r.name).filter(Boolean):[]}catch(e){return console.warn("getBudgetOrgs failed:",e),[]}}async function ya(t,e,n){return!t||!e?!1:G(g(f,"workspaces",t),"budgetRoles",e,n,!1)}function Ia(t,e){return y(g(f,"workspaces",t),n=>{n.exists()?e({id:n.id,...n.data()}):e(null)})}const Ko=t=>ee(f,"workspaces",t,"budget");async function Ta(t,e){const n=await L(g(f,"workspaces",t,"budget",Pt(e)));return n.exists()?(n.data()||{}).value??null:null}async function ba(t,e,n){await P(g(f,"workspaces",t,"budget",Pt(e)),{key:e,value:n,updatedAt:R()})}async function Ra(t,e){await ht(g(f,"workspaces",t,"budget",Pt(e)))}function Ea(t,e){return y(Ko(t),n=>{const s={};n.forEach(r=>{const i=r.data();s[i.key||r.id]=i.value}),e(s)})}function Pt(t){return String(t).replace(/[/.#$\[\]]/g,"_").slice(0,250)}const es=new Set(["sarazawa@n-airmore.com"]);function ka(t){return!!t&&es.has(t)}function Aa(t,e){return t?es.has(t)?j.ADMIN:(e||{})[t]||null:null}const lt=()=>g(f,"globalBudget","roles"),he=()=>g(f,"globalBudget","data"),ts=()=>g(f,"globalBudget","userCompanies"),Ct=()=>g(f,"globalBudget","menuConfig"),ns=()=>g(f,"globalBudget","userDepts"),ss=()=>g(f,"globalBudget","userTitles"),rs=()=>g(f,"globalBudget","noticeRead"),qe=()=>g(f,"globalBudget","orgChart"),is=()=>g(f,"globalBudget","userRoles"),je=()=>g(f,"globalBudget","users");function va(t,e){return y(lt(),n=>{t(n.exists()?n.data().roles||{}:{})},e)}async function Jo(t,e){const n=await L(lt()),r={...n.exists()?n.data().roles||{}:{}};e?r[t]=e:delete r[t],await P(lt(),{roles:r,updatedAt:R()})}function Sa(t,e){return y(he(),t,e)}async function Pa(){const t=await L(he());return t.exists()?t.data():null}async function Ca(t,e){await P(he(),{value:t,updatedAt:R(),_writer:e})}async function Oa(t,e){return Re(f,async n=>{const s=await n.get(he()),r=s.exists()&&(s.data()||{}).value||null,i=t(r);return n.set(he(),{value:i,updatedAt:R(),_writer:e}),i})}function Na(t,e){return y(is(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function Ua(t,e){await G(is(),"map",String(t).toLowerCase(),e)}function La(t,e){return y(qe(),n=>{const s=n.exists()?n.data():{};t({companies:s.companies||[],startMonth:s.startMonth||0})},e)}async function Da(t,e){await P(qe(),{companies:t||[],startMonth:e||4,updatedAt:R()})}async function Ma(t,e){return Re(f,async n=>{const s=await n.get(qe()),r=s.exists()?s.data()||{}:{},i=t(Array.isArray(r.companies)?r.companies:[]);return n.set(qe(),{companies:i,startMonth:e||r.startMonth||4,updatedAt:R()}),i})}function xa(t,e){return y(ns(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function Fa(t,e){return y(rs(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function Ba(t,e){await G(rs(),"map",String(t).toLowerCase(),e||[])}function Va(t,e){return y(ss(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function Wa(t,e){await G(ss(),"map",String(t).toLowerCase(),e)}async function Ha(t,e){await G(ns(),"map",String(t).toLowerCase(),e)}function qa(t,e){return y(ts(),n=>{t(n.exists()?n.data().map||{}:{})},e)}function ja(t,e){return y(Ct(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function $a(t,e){const n=String(t||"").toLowerCase();if(!n)return;const s=await L(je()),i=(s.exists()?s.data().map||{}:{})[n];i&&i.name===(e||"")||await G(je(),"map",n,{email:t,name:e||"",at:new Date().toISOString()})}function Ga(t,e){return y(je(),n=>{t(n.exists()?n.data().map||{}:{})},e)}async function za(){const t=await L(je());return t.exists()?t.data().map||{}:{}}async function Ka(t){await P(Ct(),{map:t,updatedAt:R()})}async function Ja(t,e){await G(Ct(),"map",t,e&&e.length?e:void 0)}const Ot=t=>g(f,"salesWs",t),N=(t,e)=>ee(f,"salesWs",t,e);function Xa(t,e,n){return y(Ot(t),s=>e(s.exists()?s.data():null),n)}async function Ya(t,e){await P(Ot(t),{...e,updatedAt:R()},{merge:!0})}async function Qa(t,e){const n=Ot(t);return Re(f,async s=>{const r=await s.get(n),i=r.exists()?r.data()||{}:{},o=e(i)||{};return Object.keys(o).length?(r.exists()?s.update(n,{...o,updatedAt:R()}):s.set(n,{...o,updatedAt:R()}),o):{}})}function Za(t,e,n,s){return y(N(t,e),r=>n(r.docs.map(i=>i.data())),s)}async function ec(t,e,n,s){const r=[...n.map(i=>({kind:"set",it:i})),...(s||[]).map(i=>({kind:"del",id:i}))];for(let i=0;i<r.length;i+=400){const o=pe(f);for(const c of r.slice(i,i+400))c.kind==="set"?o.set(g(N(t,e),c.it.id),c.it):o.delete(g(N(t,e),c.id));await o.commit()}}async function tc(t,e,n,s){const r=new Array(n.length),i=async o=>{const c=g(N(t,e),o.id);return await Re(f,async u=>{const l=await u.get(c),d=s(o,l.exists()?l.data():null);return d==null?null:(u.set(c,d),d)})};for(let o=0;o<n.length;o+=8){const c=n.slice(o,o+8);(await Promise.all(c.map(i))).forEach((u,l)=>r[o+l]=u)}return r}async function nc(t,e){await P(g(N(t,"attachments"),e.id),e)}async function sc(t,e,n,s){const r=pe(f);for(const i of n)r.set(g(N(t,"attachments"),i.id),i);r.set(g(N(t,"attachments"),e.id),e);for(let i=n.length;i<(s||0);i++)r.delete(g(N(t,"attachments"),`${e.id}#${i}`));await r.commit()}async function rc(t,e,n){if(n>0){const s=pe(f);s.delete(g(N(t,"attachments"),e));for(let r=0;r<n;r++)s.delete(g(N(t,"attachments"),`${e}#${r}`));await s.commit();return}await ht(g(N(t,"attachments"),e))}async function ic(t){return(await ie(Ns(ee(f,"workspaces"),Us("memberEmails","array-contains",t)))).docs.map(n=>{const s=n.data()||{};return{id:n.id,name:s.wsName||s.profile&&s.profile.companyName||n.id,statuses:Array.isArray(s.statuses)?s.statuses:[],members:(Array.isArray(s.authMembers)?s.authMembers:[]).map(r=>r&&r.name).filter(Boolean),schema:Number(s._schemaVersion||0)}}).sort((n,s)=>n.name.localeCompare(s.name,"ja"))}async function oc(t){return(await ie(ee(f,"workspaces",t,"goals"))).docs.map(n=>{const s=n.data()||{};return{id:s.id||n.id,name:s.name||"",status:s.status||""}})}async function ac(t,e){const n=g(f,"workspaces",t),[s,r]=await Promise.all([L(n),ie(ee(f,"workspaces",t,"tasks"))]),i=s.data()||{},o=new Set(r.docs.map(l=>l.id));(i._tombstones||[]).forEach(l=>l&&l.kind==="tasks"&&l.id&&o.add(l.id));let c=Number(i.seq&&i.seq.dailyTask||0);o.forEach(l=>{const d=/^D-(\d+)$/.exec(l);d&&(c=Math.max(c,Number(d[1])))});let a="";for(let l=0;l<1e3&&(c++,a="D-"+String(c).padStart(3,"0"),!!o.has(a));l++);const u={...e,id:a,_modAt:Date.now()};await P(g(f,"workspaces",t,"tasks",a),u);try{await nn(n,{"seq.dailyTask":c})}catch(l){console.warn("seq.dailyTask の更新に失敗(タスクは追加済み):",l)}return a}let Xo=null;const os=()=>Xo||(Xo=zr(He));async function cc(t,e,n){const s=In(os(),t);return await jr(s,e,{contentType:n||void 0}),await $r(s)}async function uc(t){try{await Gr(In(os(),t))}catch(e){if(e&&e.code==="storage/object-not-found")return;throw e}}const Ye=t=>g(f,"salesMasters",t),le=t=>ee(f,"salesWs",t,"masters"),Yo=8e5,Zt=25e4,Qo=t=>new TextEncoder().encode(t).length,Zo=t=>/exceeds the maximum allowed size|too large|INVALID_ARGUMENT/i.test(String((t==null?void 0:t.message)||t)),Te=new Set;function as(t){const e=t.find(s=>s._id==="head");if(!e||!e.of)return null;const n=t.filter(s=>s.part!=null&&s.rev===e.rev).sort((s,r)=>s.part-r.part);if(n.length!==e.of||n.some((s,r)=>s.part!==r))return null;try{return JSON.parse(n.map(s=>s.data).join(""))}catch{return null}}const Q=(t,e)=>ee(f,"salesWs",t,e),rt=25e4;function cs(t){const e={},n=new Map;return t.forEach(s=>{if(s._id.includes("#")){const[r]=s._id.split("#");n.set(r,[...n.get(r)||[],s])}}),t.forEach(s=>{if(!s._id.includes("#")){if(s.chunks){const r=(n.get(s._id)||[]).filter(i=>i.rev===s.rev).sort((i,o)=>i.part-o.part);if(r.length!==s.chunks)return;try{e[s._id]=JSON.parse(r.map(i=>i.data).join(""))}catch{}}else if(s.json!==void 0)try{e[s._id]=JSON.parse(s.json)}catch{}}}),e}async function lc(t,e){const n=await ie(Q(t,"mFields")),s=cs(n.docs.map(a=>({_id:a.id,...a.data()}))),r=e(s)||{},i=Object.keys(r);if(!i.length)return{};const o=pe(f),c=new Set(n.docs.map(a=>a.id));for(const a of i){const u=JSON.stringify(r[a]===void 0?null:r[a]),l=String(Date.now());if(c.forEach(d=>{d.startsWith(a+"#")&&o.delete(g(Q(t,"mFields"),d))}),u.length<=rt)o.set(g(Q(t,"mFields"),a),{json:u,updatedAt:R()});else{const d=[];for(let h=0;h<u.length;h+=rt)d.push(u.slice(h,h+rt));d.forEach((h,m)=>o.set(g(Q(t,"mFields"),a+"#"+m),{part:m,rev:l,data:h})),o.set(g(Q(t,"mFields"),a),{chunks:d.length,rev:l,updatedAt:R()})}}return await o.commit(),r}function dc(t,e,n){let s,r,i,o;const c=()=>{if(s===void 0||r===void 0||i===void 0||o===void 0)return;const h={},m=o||{},I=[];for(const[T,b]of Object.entries(m))T==="customers"||T==="products"||T.startsWith("_")||T==="updatedAt"||T in i||(h[T]=b,I.push(T));Object.assign(h,i),h.customers=s.length?s:m.customers||[],h.products=r.length?r:m.products||[],h._legacyLists={customers:!s.length,products:!r.length},h._legacyFields=I,e(h)},a=y(Q(t,"mCustomers"),h=>{s=h.docs.map(m=>m.data()),c()},n),u=y(Q(t,"mProducts"),h=>{r=h.docs.map(m=>m.data()),c()},n),l=y(Q(t,"mFields"),h=>{i=cs(h.docs.map(m=>({_id:m.id,...m.data()}))),c()},n),d=ea(t,h=>{o=h||null,c()},n);return()=>{a(),u(),l(),d()}}function ea(t,e,n){let s,r;const i=()=>{s===void 0||r===void 0||e(r||s)},o=y(Ye(t),a=>{s=a.exists()?a.data():null,i()},n),c=y(le(t),a=>{const u=a.docs.map(l=>({_id:l.id,...l.data()}));u.some(l=>l._id==="head")?Te.add(t):Te.delete(t),r=as(u),i()},n);return()=>{o(),c()}}async function ta(t){const e=await ie(le(t));if(e.empty)return;const n=pe(f);e.docs.forEach(s=>n.delete(s.ref)),await n.commit(),Te.delete(t)}async function na(t,e,n){const s=JSON.stringify(e),r=String(Date.now()),i=[];for(let a=0;a<s.length;a+=Zt)i.push(s.slice(a,a+Zt));const o=pe(f);i.forEach((a,u)=>o.set(g(le(t),"p"+u),{part:u,of:i.length,rev:r,data:a})),(await ie(le(t))).docs.forEach(a=>{if(a.id!=="head"&&!/^p\d+$/.test(a.id))return;(a.id==="head"?-1:Number(a.id.slice(1)))>=i.length&&o.delete(a.ref)}),o.set(g(le(t),"head"),{of:i.length,rev:r,updatedAt:R(),_writer:n||""}),await o.commit(),Te.add(t),await ht(Ye(t)).catch(()=>{})}async function hc(t,e,n){let s=null;try{const i=await L(Ye(t)),c=(await ie(le(t))).docs.map(u=>({_id:u.id,...u.data()}));s=(c.some(u=>u._id==="head")?as(c):null)||(i.exists()?i.data():null)}catch(i){throw i}const r=e(s);return await sa(t,r,n),r}async function sa(t,e,n){const s={...e,_writer:n||""};if(Qo(JSON.stringify(s))<Yo)try{await P(Ye(t),{...s,updatedAt:R()}),Te.has(t)&&await ta(t);return}catch(r){if(!Zo(r))throw r}await na(t,s,n)}async function fc(t,e){await G(ts(),"map",t,e)}async function pc(t,e,n){if(!t)throw new Error("email required");await P(g(f,"budgetAccessRequests",t),{email:t,name:e||"",message:n||"",status:"pending",requestedAt:R()})}async function gc(t){if(!t)return null;const e=await L(g(f,"budgetAccessRequests",t));return e.exists()?e.data():null}function mc(t,e){return y(ee(f,"budgetAccessRequests"),n=>{const s=[];n.forEach(r=>s.push({id:r.id,...r.data()})),t(s)},e)}async function _c(t,e){t&&(await Jo(t,e||"viewer"),await P(g(f,"budgetAccessRequests",t),{email:t,status:"approved",approvedAt:R(),approvedAs:e||"viewer"},{merge:!0}))}async function wc(t){t&&await P(g(f,"budgetAccessRequests",t),{email:t,status:"rejected",rejectedAt:R()},{merge:!0})}async function yc(){const t=await L(he());if(!t.exists())return[];const e=t.data()||{};let n=null;try{n=JSON.parse(e.value||"{}")}catch{n={}}return Array.isArray(n.orgs)?n.orgs.map(s=>s.name).filter(Boolean):[]}export{j as ROLE,ac as addProjectTask,He as app,_c as approveAccessRequest,ue as auth,Ra as bDelete,Ta as bGet,ba as bSet,Ea as bSubscribe,ha as canManageRoles,la as canRead,da as canWrite,f as db,rc as deleteSalesAttachment,uc as deleteStorageFile,fa as detectCurrentWsId,Aa as effectiveRole,ma as ensureRoleAtFirstAccess,wa as getBudgetOrgs,yc as getGlobalBudgetOrgs,Pa as getGlobalDataOnce,za as getLoginUsers,gc as getMyAccessRequest,ga as getMyRole,pa as getWorkspace,ca as handleRedirectResult,ka as isBootstrapAdmin,zo as isOwner,oc as listProjectGoals,ic as listProjectWorkspaces,Go as loginGoogle,ua as logout,lc as mergeMasterFields,Qa as mergeSalesDoc,hc as mergeSalesMasters,$a as recordLoginUser,wc as rejectAccessRequest,Ca as setGlobalData,Oa as setGlobalDataMerged,Ba as setGlobalNoticeRead,Da as setGlobalOrgChart,Ma as setGlobalOrgChartMerged,Jo as setGlobalRole,fc as setGlobalUserCompany,Ha as setGlobalUserDept,Ua as setGlobalUserRole,Wa as setGlobalUserTitle,Ka as setMenuConfig,Ja as setMenuConfigKey,ya as setRole,Ya as setSalesDoc,sa as setSalesMasters,_a as setUserCompany,pc as submitAccessRequest,mc as subscribeAccessRequests,qa as subscribeGlobalCompanies,Sa as subscribeGlobalData,xa as subscribeGlobalDepts,Fa as subscribeGlobalNoticeRead,La as subscribeGlobalOrgChart,va as subscribeGlobalRoles,Va as subscribeGlobalTitles,Ga as subscribeLoginUsers,ja as subscribeMenuConfig,Za as subscribeSalesColl,Xa as subscribeSalesDoc,dc as subscribeSalesMasters,Na as subscribeUserRoles,Ia as subscribeWorkspace,cc as uploadStorageFile,aa as watchAuth,nc as writeSalesAttachment,sc as writeSalesAttachmentChunked,ec as writeSalesItems,tc as writeSalesItemsMerged};
