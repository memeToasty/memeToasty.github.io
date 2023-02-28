(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hr="150",wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},po=0,ts=1,mo=2,Da=1,go=2,ri=3,$t=0,yt=1,Yt=2,an=0,kn=1,ns=2,is=3,rs=4,_o=5,Bn=100,xo=101,vo=102,ss=103,as=104,Mo=200,yo=201,So=202,bo=203,Ra=204,Ia=205,wo=206,Eo=207,To=208,Ao=209,Lo=210,Co=0,Po=1,Do=2,Nr=3,Ro=4,Io=5,Fo=6,No=7,Wr=0,Uo=1,Oo=2,Zt=0,zo=1,Bo=2,Go=3,ko=4,Vo=5,Fa=300,Wn=301,qn=302,Ur=303,Or=304,Wi=306,Vi=1e3,Pt=1001,zr=1002,ut=1003,os=1004,Ji=1005,Tt=1006,Ho=1007,ci=1008,xn=1009,Wo=1010,qo=1011,Na=1012,Xo=1013,mn=1014,gn=1015,ui=1016,jo=1017,Yo=1018,Vn=1020,Zo=1021,Dt=1023,$o=1024,Ko=1025,_n=1026,Xn=1027,Jo=1028,Qo=1029,el=1030,tl=1031,nl=1033,Qi=33776,er=33777,tr=33778,nr=33779,ls=35840,cs=35841,us=35842,hs=35843,il=36196,ds=37492,fs=37496,ps=37808,ms=37809,gs=37810,_s=37811,xs=37812,vs=37813,Ms=37814,ys=37815,Ss=37816,bs=37817,ws=37818,Es=37819,Ts=37820,As=37821,ir=36492,rl=36283,Ls=36284,Cs=36285,Ps=36286,vn=3e3,Ue=3001,sl=3200,al=3201,Ua=0,ol=1,Ot="srgb",hi="srgb-linear",Oa="display-p3",rr=7680,ll=519,Ds=35044,Rs="300 es",Br=1035;class bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sr=Math.PI/180,Gr=180/Math.PI;function fi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nt[a&255]+nt[a>>8&255]+nt[a>>16&255]+nt[a>>24&255]+"-"+nt[e&255]+nt[e>>8&255]+"-"+nt[e>>16&15|64]+nt[e>>24&255]+"-"+nt[t&63|128]+nt[t>>8&255]+"-"+nt[t>>16&255]+nt[t>>24&255]+nt[n&255]+nt[n>>8&255]+nt[n>>16&255]+nt[n>>24&255]).toLowerCase()}function dt(a,e,t){return Math.max(e,Math.min(t,a))}function cl(a,e){return(a%e+e)%e}function ar(a,e,t){return(1-t)*a+t*e}function Is(a){return(a&a-1)===0&&a!==0}function ul(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function xi(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function _t(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,s,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],x=i[6],w=i[1],M=i[4],S=i[7],E=i[2],L=i[5],D=i[8];return r[0]=o*p+s*w+c*E,r[3]=o*f+s*M+c*L,r[6]=o*x+s*S+c*D,r[1]=l*p+u*w+h*E,r[4]=l*f+u*M+h*L,r[7]=l*x+u*S+h*D,r[2]=d*p+m*w+g*E,r[5]=d*f+m*M+g*L,r[8]=d*x+m*S+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-n*r*u+n*s*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=u*o-s*l,d=s*c-u*r,m=l*r-o*c,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*l-u*n)*p,e[2]=(s*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*r-s*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-i*l,i*c,-i*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(or.makeScale(e,t)),this}rotate(e){return this.premultiply(or.makeRotation(-e)),this}translate(e,t){return this.premultiply(or.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const or=new ht;function za(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function di(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class Mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==d||l!==m||u!==g){let f=1-s;const x=c*d+l*m+u*g+h*p,w=x>=0?1:-1,M=1-x*x;if(M>Number.EPSILON){const E=Math.sqrt(M),L=Math.atan2(E,x*w);f=Math.sin(f*L)/E,s=Math.sin(s*L)/E}const S=s*w;if(c=c*f+d*S,l=l*f+m*S,u=u*f+g*S,h=h*f+p*S,f===1-s){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=s*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-s*m,e[t+2]=l*g+u*m+s*d-c*h,e[t+3]=u*g-s*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(i/2),h=s(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+s+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*s+i*l-r*c,this._y=i*u+o*c+r*s-n*l,this._z=r*u+o*l+n*c-i*s,this._w=o*u-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,c=e.w,l=c*t+o*i-s*n,u=c*n+s*t-r*i,h=c*i+r*n-o*t,d=-r*t-o*n-s*i;return this.x=l*c+d*-r+u*-s-h*-o,this.y=u*c+d*-o+h*-r-l*-s,this.z=h*c+d*-s+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*o-n*c,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new P,Fs=new Mn;function Hn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function cr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const hl=new ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),dl=new ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),sn=new P;function fl(a){return a.convertSRGBToLinear(),sn.set(a.r,a.g,a.b).applyMatrix3(dl),a.setRGB(sn.x,sn.y,sn.z)}function pl(a){return sn.set(a.r,a.g,a.b).applyMatrix3(hl),a.setRGB(sn.x,sn.y,sn.z).convertLinearToSRGB()}const ml={[hi]:a=>a,[Ot]:a=>a.convertSRGBToLinear(),[Oa]:fl},gl={[hi]:a=>a,[Ot]:a=>a.convertLinearToSRGB(),[Oa]:pl},lt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return hi},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=ml[e],i=gl[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Tn;class Ba{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tn===void 0&&(Tn=di("canvas")),Tn.width=e.width,Tn.height=e.height;const n=Tn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=di("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ga{constructor(e=null){this.isSource=!0,this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(ur(i[o].image)):r.push(ur(i[o]))}else r=ur(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ur(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ba.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _l=0;class ft extends bn{constructor(e=ft.DEFAULT_IMAGE,t=ft.DEFAULT_MAPPING,n=Pt,i=Pt,r=Tt,o=ci,s=Dt,c=xn,l=ft.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=fi(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ft.DEFAULT_IMAGE=null;ft.DEFAULT_MAPPING=Fa;ft.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],x=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,S=(m+1)/2,E=(x+1)/2,L=(u+d)/4,D=(h+p)/4,v=(g+f)/4;return M>S&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=L/n,r=D/n):S>E?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=L/i,r=v/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=D/r,i=v/r),this.set(n,i,r,t),this}let w=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(h-p)/w,this.z=(d-u)/w,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yn extends bn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ka extends ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl extends ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>o&&(o=h),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>o&&(o=h),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,s=r.count;o<s;o++)un.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(un)}else n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox),hr.applyMatrix4(e.matrixWorld),this.union(hr);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),vi.subVectors(this.max,Kn),An.subVectors(e.a,Kn),Ln.subVectors(e.b,Kn),Cn.subVectors(e.c,Kn),Qt.subVectors(Ln,An),en.subVectors(Cn,Ln),hn.subVectors(An,Cn);let t=[0,-Qt.z,Qt.y,0,-en.z,en.y,0,-hn.z,hn.y,Qt.z,0,-Qt.x,en.z,0,-en.x,hn.z,0,-hn.x,-Qt.y,Qt.x,0,-en.y,en.x,0,-hn.y,hn.x,0];return!dr(t,An,Ln,Cn,vi)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,An,Ln,Cn,vi))?!1:(Mi.crossVectors(Qt,en),t=[Mi.x,Mi.y,Mi.z],dr(t,An,Ln,Cn,vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kt=[new P,new P,new P,new P,new P,new P,new P,new P],un=new P,hr=new pi,An=new P,Ln=new P,Cn=new P,Qt=new P,en=new P,hn=new P,Kn=new P,vi=new P,Mi=new P,dn=new P;function dr(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){dn.fromArray(a,r);const s=i.x*Math.abs(dn.x)+i.y*Math.abs(dn.y)+i.z*Math.abs(dn.z),c=e.dot(dn),l=t.dot(dn),u=n.dot(dn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const vl=new pi,Jn=new P,fr=new P;class mi{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jn.subVectors(e,this.center);const t=Jn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Jn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jn.copy(e.center).add(fr)),this.expandByPoint(Jn.copy(e.center).sub(fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vt=new P,pr=new P,yi=new P,tn=new P,mr=new P,Si=new P,gr=new P;class qr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vt.copy(this.origin).addScaledVector(this.direction,t),Vt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pr.copy(e).add(t).multiplyScalar(.5),yi.copy(t).sub(e).normalize(),tn.copy(this.origin).sub(pr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(yi),s=tn.dot(this.direction),c=-tn.dot(yi),l=tn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-s,d=o*s-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*s)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+s)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+s)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+s)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+s)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+s)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(pr).addScaledVector(yi,d),m}intersectSphere(e,t){Vt.subVectors(e.center,this.origin);const n=Vt.dot(this.direction),i=Vt.dot(Vt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(s=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vt)!==null}intersectTriangle(e,t,n,i,r){mr.subVectors(t,e),Si.subVectors(n,e),gr.crossVectors(mr,Si);let o=this.direction.dot(gr),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;tn.subVectors(this.origin,e);const c=s*this.direction.dot(Si.crossVectors(tn,Si));if(c<0)return null;const l=s*this.direction.dot(mr.cross(tn));if(l<0||c+l>o)return null;const u=-s*tn.dot(gr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,s,c,l,u,h,d,m,g,p,f){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=s,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=d,x[3]=m,x[7]=g,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pn.setFromMatrixColumn(e,0).length(),r=1/Pn.setFromMatrixColumn(e,1).length(),o=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,g=s*u,p=s*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-s*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d+p*s,t[4]=g*s-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=p+d*s,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d-p*s,t[4]=-o*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=p-d*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=s*u,p=s*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*h,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=s*c,p=s*l;t[0]=c*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*c,m=o*l,g=s*c,p=s*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ml,e,yl)}lookAt(e,t,n){const i=this.elements;return xt.subVectors(e,t),xt.lengthSq()===0&&(xt.z=1),xt.normalize(),nn.crossVectors(n,xt),nn.lengthSq()===0&&(Math.abs(n.z)===1?xt.x+=1e-4:xt.z+=1e-4,xt.normalize(),nn.crossVectors(n,xt)),nn.normalize(),bi.crossVectors(xt,nn),i[0]=nn.x,i[4]=bi.x,i[8]=xt.x,i[1]=nn.y,i[5]=bi.y,i[9]=xt.y,i[2]=nn.z,i[6]=bi.z,i[10]=xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],x=n[14],w=n[3],M=n[7],S=n[11],E=n[15],L=i[0],D=i[4],v=i[8],A=i[12],F=i[1],X=i[5],j=i[9],B=i[13],N=i[2],W=i[6],Y=i[10],J=i[14],q=i[3],Q=i[7],Z=i[11],_e=i[15];return r[0]=o*L+s*F+c*N+l*q,r[4]=o*D+s*X+c*W+l*Q,r[8]=o*v+s*j+c*Y+l*Z,r[12]=o*A+s*B+c*J+l*_e,r[1]=u*L+h*F+d*N+m*q,r[5]=u*D+h*X+d*W+m*Q,r[9]=u*v+h*j+d*Y+m*Z,r[13]=u*A+h*B+d*J+m*_e,r[2]=g*L+p*F+f*N+x*q,r[6]=g*D+p*X+f*W+x*Q,r[10]=g*v+p*j+f*Y+x*Z,r[14]=g*A+p*B+f*J+x*_e,r[3]=w*L+M*F+S*N+E*q,r[7]=w*D+M*X+S*W+E*Q,r[11]=w*v+M*j+S*Y+E*Z,r[15]=w*A+M*B+S*J+E*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],x=e[15];return g*(+r*c*h-i*l*h-r*s*d+n*l*d+i*s*m-n*c*m)+p*(+t*c*m-t*l*d+r*o*d-i*o*m+i*l*u-r*c*u)+f*(+t*l*h-t*s*m-r*o*h+n*o*m+r*s*u-n*l*u)+x*(-i*s*u-t*c*h+t*s*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],x=e[15],w=h*f*l-p*d*l+p*c*m-s*f*m-h*c*x+s*d*x,M=g*d*l-u*f*l-g*c*m+o*f*m+u*c*x-o*d*x,S=u*p*l-g*h*l+g*s*m-o*p*m-u*s*x+o*h*x,E=g*h*c-u*p*c-g*s*d+o*p*d+u*s*f-o*h*f,L=t*w+n*M+i*S+r*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=w*D,e[1]=(p*d*r-h*f*r-p*i*m+n*f*m+h*i*x-n*d*x)*D,e[2]=(s*f*r-p*c*r+p*i*l-n*f*l-s*i*x+n*c*x)*D,e[3]=(h*c*r-s*d*r-h*i*l+n*d*l+s*i*m-n*c*m)*D,e[4]=M*D,e[5]=(u*f*r-g*d*r+g*i*m-t*f*m-u*i*x+t*d*x)*D,e[6]=(g*c*r-o*f*r-g*i*l+t*f*l+o*i*x-t*c*x)*D,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*m+t*c*m)*D,e[8]=S*D,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*x-t*h*x)*D,e[10]=(o*p*r-g*s*r+g*n*l-t*p*l-o*n*x+t*s*x)*D,e[11]=(u*s*r-o*h*r-u*n*l+t*h*l+o*n*m-t*s*m)*D,e[12]=E*D,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*f+t*h*f)*D,e[14]=(g*s*i-o*p*i-g*n*c+t*p*c+o*n*f-t*s*f)*D,e[15]=(o*h*i-u*s*i+u*n*c-t*h*c-o*n*d+t*s*d)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,c=e.z,l=r*o,u=r*s;return this.set(l*o+n,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+n,u*c-i*o,0,l*c-i*s,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,c=t._w,l=r+r,u=o+o,h=s+s,d=r*l,m=r*u,g=r*h,p=o*u,f=o*h,x=s*h,w=c*l,M=c*u,S=c*h,E=n.x,L=n.y,D=n.z;return i[0]=(1-(p+x))*E,i[1]=(m+S)*E,i[2]=(g-M)*E,i[3]=0,i[4]=(m-S)*L,i[5]=(1-(d+x))*L,i[6]=(f+w)*L,i[7]=0,i[8]=(g+M)*D,i[9]=(f-w)*D,i[10]=(1-(d+p))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pn.set(i[0],i[1],i[2]).length();const o=Pn.set(i[4],i[5],i[6]).length(),s=Pn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],At.copy(this);const l=1/r,u=1/o,h=1/s;return At.elements[0]*=l,At.elements[1]*=l,At.elements[2]*=l,At.elements[4]*=u,At.elements[5]*=u,At.elements[6]*=u,At.elements[8]*=h,At.elements[9]*=h,At.elements[10]*=h,t.setFromRotationMatrix(At),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o){const s=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,o){const s=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),h=(t+e)*c,d=(n+i)*l,m=(o+r)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pn=new P,At=new ke,Ml=new P(0,0,0),yl=new P(1,1,1),nn=new P,bi=new P,xt=new P,Ns=new ke,Us=new Mn;class qi{constructor(e=0,t=0,n=0,i=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ns.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ns,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Us.setFromEuler(this),this.setFromQuaternion(Us,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sl=0;const Os=new P,Dn=new Mn,Ht=new ke,wi=new P,Qn=new P,bl=new P,wl=new Mn,zs=new P(1,0,0),Bs=new P(0,1,0),Gs=new P(0,0,1),El={type:"added"},ks={type:"removed"};class qe extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const e=new P,t=new qi,n=new Mn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new ht}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(zs,e)}rotateY(e){return this.rotateOnAxis(Bs,e)}rotateZ(e){return this.rotateOnAxis(Gs,e)}translateOnAxis(e,t){return Os.copy(e).applyQuaternion(this.quaternion),this.position.add(Os.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zs,e)}translateY(e){return this.translateOnAxis(Bs,e)}translateZ(e){return this.translateOnAxis(Gs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ht.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wi.copy(e):wi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ht.lookAt(Qn,wi,this.up):Ht.lookAt(wi,Qn,this.up),this.quaternion.setFromRotationMatrix(Ht),i&&(Ht.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(Ht),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(El)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ks)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ks)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ht.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ht.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ht),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,bl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new P(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lt=new P,Wt=new P,_r=new P,qt=new P,Rn=new P,In=new P,Vs=new P,xr=new P,vr=new P,Mr=new P;class jt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Lt.subVectors(e,t),i.cross(Lt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Lt.subVectors(i,t),Wt.subVectors(n,t),_r.subVectors(e,t);const o=Lt.dot(Lt),s=Lt.dot(Wt),c=Lt.dot(_r),l=Wt.dot(Wt),u=Wt.dot(_r),h=o*l-s*s;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(l*c-s*u)*d,g=(o*u-s*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qt),qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getUV(e,t,n,i,r,o,s,c){return this.getBarycoord(e,t,n,i,qt),c.set(0,0),c.addScaledVector(r,qt.x),c.addScaledVector(o,qt.y),c.addScaledVector(s,qt.z),c}static isFrontFacing(e,t,n,i){return Lt.subVectors(n,t),Wt.subVectors(e,t),Lt.cross(Wt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Lt.cross(Wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return jt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;Rn.subVectors(i,n),In.subVectors(r,n),xr.subVectors(e,n);const c=Rn.dot(xr),l=In.dot(xr);if(c<=0&&l<=0)return t.copy(n);vr.subVectors(e,i);const u=Rn.dot(vr),h=In.dot(vr);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Rn,o);Mr.subVectors(e,r);const m=Rn.dot(Mr),g=In.dot(Mr);if(g>=0&&m<=g)return t.copy(r);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(n).addScaledVector(In,s);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Vs.subVectors(r,i),s=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Vs,s);const x=1/(f+p+d);return o=p*x,s=d*x,t.copy(n).addScaledVector(Rn,o).addScaledVector(In,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tl=0;class Kt extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tl++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=kn,this.side=$t,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ra,this.blendDst=Ia,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==$t&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const c=r[s];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ha={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={h:0,s:0,l:0},Ei={h:0,s:0,l:0};function yr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=cl(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=yr(o,r,e+1/3),this.g=yr(o,r,e),this.b=yr(o,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,lt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,lt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,lt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,lt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Ha[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return lt.fromWorkingColorSpace(it.copy(this),e),dt(it.r*255,0,255)<<16^dt(it.g*255,0,255)<<8^dt(it.b*255,0,255)<<0}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(it.copy(this),t);const n=it.r,i=it.g,r=it.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const u=(s+o)/2;if(s===o)c=0,l=0;else{const h=o-s;switch(l=u<=.5?h/(o+s):h/(2-o-s),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(it.copy(this),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Ot){lt.fromWorkingColorSpace(it.copy(this),e);const t=it.r,n=it.g,i=it.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ct),Ct.h+=e,Ct.s+=t,Ct.l+=n,this.setHSL(Ct.h,Ct.s,Ct.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ct),e.getHSL(Ei);const n=ar(Ct.h,Ei.h,t),i=ar(Ct.s,Ei.s,t),r=ar(Ct.l,Ei.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const it=new De;De.NAMES=Ha;class Xr extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const We=new P,Ti=new Se;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ds,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ti.fromBufferAttribute(this,t),Ti.applyMatrix3(e),this.setXY(t,Ti.x,Ti.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix3(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ds&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wa extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qa extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Al=0;const wt=new ke,Sr=new qe,Fn=new P,vt=new pi,ei=new pi,Qe=new P;class St extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(za(e)?qa:Wa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wt.makeRotationFromQuaternion(e),this.applyMatrix4(wt),this}rotateX(e){return wt.makeRotationX(e),this.applyMatrix4(wt),this}rotateY(e){return wt.makeRotationY(e),this.applyMatrix4(wt),this}rotateZ(e){return wt.makeRotationZ(e),this.applyMatrix4(wt),this}translate(e,t,n){return wt.makeTranslation(e,t,n),this.applyMatrix4(wt),this}scale(e,t,n){return wt.makeScale(e,t,n),this.applyMatrix4(wt),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];vt.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(vt.min,ei.min),vt.expandByPoint(Qe),Qe.addVectors(vt.max,ei.max),vt.expandByPoint(Qe)):(vt.expandByPoint(ei.min),vt.expandByPoint(ei.max))}vt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Qe.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)Qe.fromBufferAttribute(s,l),c&&(Fn.fromBufferAttribute(e,l),Qe.add(Fn)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let F=0;F<s;F++)l[F]=new P,u[F]=new P;const h=new P,d=new P,m=new P,g=new Se,p=new Se,f=new Se,x=new P,w=new P;function M(F,X,j){h.fromArray(i,F*3),d.fromArray(i,X*3),m.fromArray(i,j*3),g.fromArray(o,F*2),p.fromArray(o,X*2),f.fromArray(o,j*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const B=1/(p.x*f.y-f.x*p.y);!isFinite(B)||(x.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(B),w.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(B),l[F].add(x),l[X].add(x),l[j].add(x),u[F].add(w),u[X].add(w),u[j].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let F=0,X=S.length;F<X;++F){const j=S[F],B=j.start,N=j.count;for(let W=B,Y=B+N;W<Y;W+=3)M(n[W+0],n[W+1],n[W+2])}const E=new P,L=new P,D=new P,v=new P;function A(F){D.fromArray(r,F*3),v.copy(D);const X=l[F];E.copy(X),E.sub(D.multiplyScalar(D.dot(X))).normalize(),L.crossVectors(v,X);const B=L.dot(u[F])<0?-1:1;c[F*4]=E.x,c[F*4+1]=E.y,c[F*4+2]=E.z,c[F*4+3]=B}for(let F=0,X=S.length;F<X;++F){const j=S[F],B=j.start,N=j.count;for(let W=B,Y=B+N;W<Y;W+=3)A(n[W+0]),A(n[W+1]),A(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,s=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),s.add(u),c.add(u),l.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,h=s.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,f=c.length;p<f;p++){s.isInterleavedBufferAttribute?m=c[p]*s.data.stride+s.offset:m=c[p]*u;for(let x=0;x<u;x++)d[g++]=l[m++]}return new Bt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=e(c,n);t.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hs=new ke,Ut=new qr,Ai=new mi,Ws=new P,ti=new P,ni=new P,ii=new P,br=new P,Li=new P,Ci=new Se,Pi=new Se,Di=new Se,wr=new P,Ri=new P;class Rt extends qe{constructor(e=new St,t=new Xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){Li.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=s[c],h=r[c];u!==0&&(br.fromBufferAttribute(h,e),o?Li.addScaledVector(br,u):Li.addScaledVector(br.sub(t),u))}t.add(Li)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(r),Ut.copy(e.ray).recast(e.near),Ai.containsPoint(Ut.origin)===!1&&(Ut.intersectSphere(Ai,Ws)===null||Ut.origin.distanceToSquared(Ws)>(e.far-e.near)**2))||(Hs.copy(r).invert(),Ut.copy(e.ray).applyMatrix4(Hs),n.boundingBox!==null&&Ut.intersectsBox(n.boundingBox)===!1))return;let o;const s=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=i[p.materialIndex],x=Math.max(p.start,d.start),w=Math.min(s.count,Math.min(p.start+p.count,d.start+d.count));for(let M=x,S=w;M<S;M+=3){const E=s.getX(M),L=s.getX(M+1),D=s.getX(M+2);o=Ii(this,f,e,Ut,l,u,E,L,D),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const x=s.getX(p),w=s.getX(p+1),M=s.getX(p+2);o=Ii(this,i,e,Ut,l,u,x,w,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=i[p.materialIndex],x=Math.max(p.start,d.start),w=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=x,S=w;M<S;M+=3){const E=M,L=M+1,D=M+2;o=Ii(this,f,e,Ut,l,u,E,L,D),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const x=p,w=p+1,M=p+2;o=Ii(this,i,e,Ut,l,u,x,w,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Ll(a,e,t,n,i,r,o,s){let c;if(e.side===yt?c=n.intersectTriangle(o,r,i,!0,s):c=n.intersectTriangle(i,r,o,e.side===$t,s),c===null)return null;Ri.copy(s),Ri.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Ri);return l<t.near||l>t.far?null:{distance:l,point:Ri.clone(),object:a}}function Ii(a,e,t,n,i,r,o,s,c){a.getVertexPosition(o,ti),a.getVertexPosition(s,ni),a.getVertexPosition(c,ii);const l=Ll(a,e,t,n,ti,ni,ii,wr);if(l){i&&(Ci.fromBufferAttribute(i,o),Pi.fromBufferAttribute(i,s),Di.fromBufferAttribute(i,c),l.uv=jt.getUV(wr,ti,ni,ii,Ci,Pi,Di,new Se)),r&&(Ci.fromBufferAttribute(r,o),Pi.fromBufferAttribute(r,s),Di.fromBufferAttribute(r,c),l.uv2=jt.getUV(wr,ti,ni,ii,Ci,Pi,Di,new Se));const u={a:o,b:s,c,normal:new P,materialIndex:0};jt.getNormal(ti,ni,ii,u.normal),l.face=u}return l}class gi extends St{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(p,f,x,w,M,S,E,L,D,v,A){const F=S/D,X=E/v,j=S/2,B=E/2,N=L/2,W=D+1,Y=v+1;let J=0,q=0;const Q=new P;for(let Z=0;Z<Y;Z++){const _e=Z*X-B;for(let z=0;z<W;z++){const $=z*F-j;Q[p]=$*w,Q[f]=_e*M,Q[x]=N,l.push(Q.x,Q.y,Q.z),Q[p]=0,Q[f]=0,Q[x]=L>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(z/D),h.push(1-Z/v),J+=1}}for(let Z=0;Z<v;Z++)for(let _e=0;_e<D;_e++){const z=d+_e+W*Z,$=d+_e+W*(Z+1),ie=d+(_e+1)+W*(Z+1),U=d+(_e+1)+W*Z;c.push(z,$,U),c.push($,ie,U),q+=6}s.addGroup(m,q,A),m+=q,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jn(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ct(a){const e={};for(let t=0;t<a.length;t++){const n=jn(a[t]);for(const i in n)e[i]=n[i]}return e}function Cl(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Xa(a){return a.getRenderTarget()===null&&a.outputEncoding===Ue?Ot:hi}const Pl={clone:jn,merge:ct};var Dl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dl,this.fragmentShader=Rl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=Cl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ja extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mt extends ja{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nn=-90,Un=1;class Il extends qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Mt(Nn,Un,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Mt(Nn,Un,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Mt(Nn,Un,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new Mt(Nn,Un,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new Mt(Nn,Un,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Mt(Nn,Un,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,s,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Zt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ya extends ft{constructor(e,t,n,i,r,o,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Wn,super(e,t,n,i,r,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fl extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ya(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gi(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:an});r.uniforms.tEquirect.value=t;const o=new Rt(i,r),s=t.minFilter;return t.minFilter===ci&&(t.minFilter=Tt),new Il(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Er=new P,Nl=new P,Ul=new ht;class rn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Er.subVectors(n,t).cross(Nl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ul.getNormalMatrix(e),i=this.coplanarPoint(Er).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new mi,Fi=new P;class jr{constructor(e=new rn,t=new rn,n=new rn,i=new rn,r=new rn,o=new rn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],x=n[13],w=n[14],M=n[15];return t[0].setComponents(s-i,h-c,p-d,M-f).normalize(),t[1].setComponents(s+i,h+c,p+d,M+f).normalize(),t[2].setComponents(s+r,h+l,p+m,M+x).normalize(),t[3].setComponents(s-r,h-l,p-m,M-x).normalize(),t[4].setComponents(s-o,h-u,p-g,M-w).normalize(),t[5].setComponents(s+o,h+u,p+g,M+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fi.x=i.normal.x>0?e.max.x:e.min.x,Fi.y=i.normal.y>0?e.max.y:e.min.y,Fi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Za(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Ol(a,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,m=u.updateRange;a.bindBuffer(h,l),m.count===-1?a.bufferSubData(h,0,d):(t?a.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):a.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(a.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:s,update:c}}class Yr extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),c=Math.floor(i),l=s+1,u=c+1,h=e/s,d=t/c,m=[],g=[],p=[],f=[];for(let x=0;x<u;x++){const w=x*d-o;for(let M=0;M<l;M++){const S=M*h-r;g.push(S,-w,0),p.push(0,0,1),f.push(M/s),f.push(1-x/c)}}for(let x=0;x<c;x++)for(let w=0;w<s;w++){const M=w+l*x,S=w+l*(x+1),E=w+1+l*(x+1),L=w+1+l*x;m.push(M,S,L),m.push(S,E,L)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.widthSegments,e.heightSegments)}}var zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wl="vec3 transformed = vec3( position );",ql=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,jl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ic=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,rc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ac=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,lc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uc="gl_FragColor = linearToOutputTexel( gl_FragColor );",hc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_c=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ec=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ac=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Lc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ic=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Oc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$c=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Jc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,du=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Su=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Au=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Lu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Cu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Du=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ru=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Iu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ou=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$u=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ku=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,th=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ih=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ah=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ch=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ph=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:zl,alphamap_pars_fragment:Bl,alphatest_fragment:Gl,alphatest_pars_fragment:kl,aomap_fragment:Vl,aomap_pars_fragment:Hl,begin_vertex:Wl,beginnormal_vertex:ql,bsdfs:Xl,iridescence_fragment:jl,bumpmap_pars_fragment:Yl,clipping_planes_fragment:Zl,clipping_planes_pars_fragment:$l,clipping_planes_pars_vertex:Kl,clipping_planes_vertex:Jl,color_fragment:Ql,color_pars_fragment:ec,color_pars_vertex:tc,color_vertex:nc,common:ic,cube_uv_reflection_fragment:rc,defaultnormal_vertex:sc,displacementmap_pars_vertex:ac,displacementmap_vertex:oc,emissivemap_fragment:lc,emissivemap_pars_fragment:cc,encodings_fragment:uc,encodings_pars_fragment:hc,envmap_fragment:dc,envmap_common_pars_fragment:fc,envmap_pars_fragment:pc,envmap_pars_vertex:mc,envmap_physical_pars_fragment:Ac,envmap_vertex:gc,fog_vertex:_c,fog_pars_vertex:xc,fog_fragment:vc,fog_pars_fragment:Mc,gradientmap_pars_fragment:yc,lightmap_fragment:Sc,lightmap_pars_fragment:bc,lights_lambert_fragment:wc,lights_lambert_pars_fragment:Ec,lights_pars_begin:Tc,lights_toon_fragment:Lc,lights_toon_pars_fragment:Cc,lights_phong_fragment:Pc,lights_phong_pars_fragment:Dc,lights_physical_fragment:Rc,lights_physical_pars_fragment:Ic,lights_fragment_begin:Fc,lights_fragment_maps:Nc,lights_fragment_end:Uc,logdepthbuf_fragment:Oc,logdepthbuf_pars_fragment:zc,logdepthbuf_pars_vertex:Bc,logdepthbuf_vertex:Gc,map_fragment:kc,map_pars_fragment:Vc,map_particle_fragment:Hc,map_particle_pars_fragment:Wc,metalnessmap_fragment:qc,metalnessmap_pars_fragment:Xc,morphcolor_vertex:jc,morphnormal_vertex:Yc,morphtarget_pars_vertex:Zc,morphtarget_vertex:$c,normal_fragment_begin:Kc,normal_fragment_maps:Jc,normal_pars_fragment:Qc,normal_pars_vertex:eu,normal_vertex:tu,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:iu,clearcoat_normal_fragment_maps:ru,clearcoat_pars_fragment:su,iridescence_pars_fragment:au,output_fragment:ou,packing:lu,premultiplied_alpha_fragment:cu,project_vertex:uu,dithering_fragment:hu,dithering_pars_fragment:du,roughnessmap_fragment:fu,roughnessmap_pars_fragment:pu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:gu,shadowmap_vertex:_u,shadowmask_pars_fragment:xu,skinbase_vertex:vu,skinning_pars_vertex:Mu,skinning_vertex:yu,skinnormal_vertex:Su,specularmap_fragment:bu,specularmap_pars_fragment:wu,tonemapping_fragment:Eu,tonemapping_pars_fragment:Tu,transmission_fragment:Au,transmission_pars_fragment:Lu,uv_pars_fragment:Cu,uv_pars_vertex:Pu,uv_vertex:Du,uv2_pars_fragment:Ru,uv2_pars_vertex:Iu,uv2_vertex:Fu,worldpos_vertex:Nu,background_vert:Uu,background_frag:Ou,backgroundCube_vert:zu,backgroundCube_frag:Bu,cube_vert:Gu,cube_frag:ku,depth_vert:Vu,depth_frag:Hu,distanceRGBA_vert:Wu,distanceRGBA_frag:qu,equirect_vert:Xu,equirect_frag:ju,linedashed_vert:Yu,linedashed_frag:Zu,meshbasic_vert:$u,meshbasic_frag:Ku,meshlambert_vert:Ju,meshlambert_frag:Qu,meshmatcap_vert:eh,meshmatcap_frag:th,meshnormal_vert:nh,meshnormal_frag:ih,meshphong_vert:rh,meshphong_frag:sh,meshphysical_vert:ah,meshphysical_frag:oh,meshtoon_vert:lh,meshtoon_frag:ch,points_vert:uh,points_frag:hh,shadow_vert:dh,shadow_frag:fh,sprite_vert:ph,sprite_frag:mh},ne={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ht},uv2Transform:{value:new ht},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ht}}},zt={basic:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new De(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:ct([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:ct([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new De(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:ct([ne.points,ne.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:ct([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:ct([ne.common,ne.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:ct([ne.sprite,ne.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:ct([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:ct([ne.lights,ne.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};zt.physical={uniforms:ct([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Ni={r:0,b:0,g:0};function gh(a,e,t,n,i,r,o){const s=new De(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(f,x){let w=!1,M=x.isScene===!0?x.background:null;M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M));const S=a.xr,E=S.getSession&&S.getSession();E&&E.environmentBlendMode==="additive"&&(M=null),M===null?p(s,c):M&&M.isColor&&(p(M,1),w=!0),(a.autoClear||w)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Wi)?(u===void 0&&(u=new Rt(new gi(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:jn(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=M.encoding!==Ue,(h!==M||d!==M.version||m!==a.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=a.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Rt(new Yr(2,2),new Sn({name:"BackgroundMaterial",uniforms:jn(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=M.encoding!==Ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==a.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,m=a.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,x){f.getRGB(Ni,Xa(a)),n.buffers.color.setClear(Ni.r,Ni.g,Ni.b,x,o)}return{getClearColor:function(){return s},setClearColor:function(f,x=1){s.set(f),c=x,p(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(s,c)},render:g}}function _h(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},c=f(null);let l=c,u=!1;function h(N,W,Y,J,q){let Q=!1;if(o){const Z=p(J,Y,W);l!==Z&&(l=Z,m(l.object)),Q=x(N,J,Y,q),Q&&w(N,J,Y,q)}else{const Z=W.wireframe===!0;(l.geometry!==J.id||l.program!==Y.id||l.wireframe!==Z)&&(l.geometry=J.id,l.program=Y.id,l.wireframe=Z,Q=!0)}q!==null&&t.update(q,34963),(Q||u)&&(u=!1,v(N,W,Y,J),q!==null&&a.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(N){return n.isWebGL2?a.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?a.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function p(N,W,Y){const J=Y.wireframe===!0;let q=s[N.id];q===void 0&&(q={},s[N.id]=q);let Q=q[W.id];Q===void 0&&(Q={},q[W.id]=Q);let Z=Q[J];return Z===void 0&&(Z=f(d()),Q[J]=Z),Z}function f(N){const W=[],Y=[],J=[];for(let q=0;q<i;q++)W[q]=0,Y[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:J,object:N,attributes:{},index:null}}function x(N,W,Y,J){const q=l.attributes,Q=W.attributes;let Z=0;const _e=Y.getAttributes();for(const z in _e)if(_e[z].location>=0){const ie=q[z];let U=Q[z];if(U===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),ie===void 0||ie.attribute!==U||U&&ie.data!==U.data)return!0;Z++}return l.attributesNum!==Z||l.index!==J}function w(N,W,Y,J){const q={},Q=W.attributes;let Z=0;const _e=Y.getAttributes();for(const z in _e)if(_e[z].location>=0){let ie=Q[z];ie===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));const U={};U.attribute=ie,ie&&ie.data&&(U.data=ie.data),q[z]=U,Z++}l.attributes=q,l.attributesNum=Z,l.index=J}function M(){const N=l.newAttributes;for(let W=0,Y=N.length;W<Y;W++)N[W]=0}function S(N){E(N,0)}function E(N,W){const Y=l.newAttributes,J=l.enabledAttributes,q=l.attributeDivisors;Y[N]=1,J[N]===0&&(a.enableVertexAttribArray(N),J[N]=1),q[N]!==W&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,W),q[N]=W)}function L(){const N=l.newAttributes,W=l.enabledAttributes;for(let Y=0,J=W.length;Y<J;Y++)W[Y]!==N[Y]&&(a.disableVertexAttribArray(Y),W[Y]=0)}function D(N,W,Y,J,q,Q){n.isWebGL2===!0&&(Y===5124||Y===5125)?a.vertexAttribIPointer(N,W,Y,q,Q):a.vertexAttribPointer(N,W,Y,J,q,Q)}function v(N,W,Y,J){if(n.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const q=J.attributes,Q=Y.getAttributes(),Z=W.defaultAttributeValues;for(const _e in Q){const z=Q[_e];if(z.location>=0){let $=q[_e];if($===void 0&&(_e==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),_e==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),$!==void 0){const ie=$.normalized,U=$.itemSize,le=t.get($);if(le===void 0)continue;const ce=le.buffer,he=le.type,ue=le.bytesPerElement;if($.isInterleavedBufferAttribute){const ve=$.data,ye=ve.stride,we=$.offset;if(ve.isInstancedInterleavedBuffer){for(let Re=0;Re<z.locationSize;Re++)E(z.location+Re,ve.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Re=0;Re<z.locationSize;Re++)S(z.location+Re);a.bindBuffer(34962,ce);for(let Re=0;Re<z.locationSize;Re++)D(z.location+Re,U/z.locationSize,he,ie,ye*ue,(we+U/z.locationSize*Re)*ue)}else{if($.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)E(z.location+ve,$.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ve=0;ve<z.locationSize;ve++)S(z.location+ve);a.bindBuffer(34962,ce);for(let ve=0;ve<z.locationSize;ve++)D(z.location+ve,U/z.locationSize,he,ie,U*ue,U/z.locationSize*ve*ue)}}else if(Z!==void 0){const ie=Z[_e];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(z.location,ie);break;case 3:a.vertexAttrib3fv(z.location,ie);break;case 4:a.vertexAttrib4fv(z.location,ie);break;default:a.vertexAttrib1fv(z.location,ie)}}}}L()}function A(){j();for(const N in s){const W=s[N];for(const Y in W){const J=W[Y];for(const q in J)g(J[q].object),delete J[q];delete W[Y]}delete s[N]}}function F(N){if(s[N.id]===void 0)return;const W=s[N.id];for(const Y in W){const J=W[Y];for(const q in J)g(J[q].object),delete J[q];delete W[Y]}delete s[N.id]}function X(N){for(const W in s){const Y=s[W];if(Y[N.id]===void 0)continue;const J=Y[N.id];for(const q in J)g(J[q].object),delete J[q];delete Y[N.id]}}function j(){B(),u=!0,l!==c&&(l=c,m(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:j,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:F,releaseStatesOfProgram:X,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function xh(a,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function s(l,u){a.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,m;if(i)d=a,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=s,this.renderInstances=c}function vh(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),d=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),f=a.getParameter(36347),x=a.getParameter(36348),w=a.getParameter(36349),M=d>0,S=o||e.has("OES_texture_float"),E=M&&S,L=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:L}}function Mh(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new rn,s=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,x=a.get(h);if(!i||g===null||g.length===0||r&&!f)r?u(null):l();else{const w=r?0:n,M=w*4;let S=x.clippingState||null;c.value=S,S=u(g,d,M,m);for(let E=0;E!==M;++E)S[E]=t[E];x.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=c.value,g!==!0||f===null){const x=m+p*4,w=d.matrixWorldInverse;s.getNormalMatrix(w),(f===null||f.length<x)&&(f=new Float32Array(x));for(let M=0,S=m;M!==p;++M,S+=4)o.copy(h[M]).applyMatrix4(w,s),o.normal.toArray(f,S),f[S+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function yh(a){let e=new WeakMap;function t(o,s){return s===Ur?o.mapping=Wn:s===Or&&(o.mapping=qn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Ur||s===Or)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fl(c.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class $a extends ja{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gn=4,qs=[.125,.215,.35,.446,.526,.582],pn=20,Tr=new $a,Xs=new De;let Ar=null;const fn=(1+Math.sqrt(5))/2,zn=1/fn,js=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,fn,zn),new P(0,fn,-zn),new P(zn,0,fn),new P(-zn,0,fn),new P(fn,zn,0),new P(-fn,zn,0)];class Ys{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ar=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ks(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$s(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ar),e.scissorTest=!1,Ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ar=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:ui,format:Dt,encoding:vn,depthBuffer:!1},i=Zs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zs(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sh(r)),this._blurMaterial=bh(r,e,t)}return i}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,n,i){const s=new Mt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xs),u.toneMapping=Zt,u.autoClear=!1;const m=new Xr({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new Rt(new gi,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Xs),p=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(s.up.set(0,c[x],0),s.lookAt(l[x],0,0)):w===1?(s.up.set(0,0,c[x]),s.lookAt(0,l[x],0)):(s.up.set(0,c[x],0),s.lookAt(0,0,l[x]));const M=this._cubeSize;Ui(i,w*M,x>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wn||e.mapping===qn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ks()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$s());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const c=this._cubeSize;Ui(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Tr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=js[(i-1)%js.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rt(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pn-1),p=r/g,f=isFinite(r)?1+Math.floor(u*p):pn;f>pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${pn}`);const x=[];let w=0;for(let D=0;D<pn;++D){const v=D/p,A=Math.exp(-v*v/2);x.push(A),D===0?w+=A:D<f&&(w+=2*A)}for(let D=0;D<x.length;D++)x[D]=x[D]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const S=this._sizeLods[i],E=3*S*(i>M-Gn?i-M+Gn:0),L=4*(this._cubeSize-S);Ui(t,E,L,3*S,2*S),c.setRenderTarget(t),c.render(h,Tr)}}function Sh(a){const e=[],t=[],n=[];let i=a;const r=a-Gn+1+qs.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let c=1/s;o>a-Gn?c=qs[o-a+Gn-1]:o===0&&(c=0),n.push(c);const l=1/(s-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,x=1,w=new Float32Array(p*g*m),M=new Float32Array(f*g*m),S=new Float32Array(x*g*m);for(let L=0;L<m;L++){const D=L%3*2/3-1,v=L>2?0:-1,A=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];w.set(A,p*g*L),M.set(d,f*g*L);const F=[L,L,L,L,L,L];S.set(F,x*g*L)}const E=new St;E.setAttribute("position",new Bt(w,p)),E.setAttribute("uv",new Bt(M,f)),E.setAttribute("faceIndex",new Bt(S,x)),e.push(E),i>Gn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zs(a,e,t){const n=new yn(a,e,t);return n.texture.mapping=Wi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function bh(a,e,t){const n=new Float32Array(pn),i=new P(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function $s(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ks(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wh(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===Ur||c===Or,u=c===Wn||c===qn;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Ys(a)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ys(a));const d=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",r),d.texture}else return null}}}return s}function i(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Eh(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Th(a,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,x=p.length;f<x;f++)e.update(p[f],34962)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let M=0,S=w.length;M<S;M+=3){const E=w[M+0],L=w[M+1],D=w[M+2];d.push(E,L,L,D,D,E)}}else{const w=g.array;p=g.version;for(let M=0,S=w.length/3-1;M<S;M+=3){const E=M+0,L=M+1,D=M+2;d.push(E,L,L,D,D,E)}}const f=new(za(d)?qa:Wa)(d,1);f.version=p;const x=r.get(h);x&&e.remove(x),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:s,update:c,getWireframeAttribute:u}}function Ah(a,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let s,c;function l(d){s=d.type,c=d.bytesPerElement}function u(d,m){a.drawElements(r,m,s,d*c),t.update(m,r,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=a,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,s,d*c,g),t.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Lh(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ch(a,e){return a[0]-e[0]}function Ph(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Dh(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new et,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let f=r.get(u);if(f===void 0||f.count!==p){let W=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",W)};var m=W;f!==void 0&&f.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),S===!0&&(A=2),E===!0&&(A=3);let F=u.attributes.position.count*A,X=1;F>e.maxTextureSize&&(X=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const j=new Float32Array(F*X*4*p),B=new ka(j,F,X,p);B.type=gn,B.needsUpdate=!0;const N=A*4;for(let Y=0;Y<p;Y++){const J=L[Y],q=D[Y],Q=v[Y],Z=F*X*4*Y;for(let _e=0;_e<J.count;_e++){const z=_e*N;M===!0&&(o.fromBufferAttribute(J,_e),j[Z+z+0]=o.x,j[Z+z+1]=o.y,j[Z+z+2]=o.z,j[Z+z+3]=0),S===!0&&(o.fromBufferAttribute(q,_e),j[Z+z+4]=o.x,j[Z+z+5]=o.y,j[Z+z+6]=o.z,j[Z+z+7]=0),E===!0&&(o.fromBufferAttribute(Q,_e),j[Z+z+8]=o.x,j[Z+z+9]=o.y,j[Z+z+10]=o.z,j[Z+z+11]=Q.itemSize===4?o.w:1)}}f={count:p,texture:B,size:new Se(F,X)},r.set(u,f),u.addEventListener("dispose",W)}let x=0;for(let M=0;M<d.length;M++)x+=d[M];const w=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(a,"morphTargetBaseInfluence",w),h.getUniforms().setValue(a,"morphTargetInfluences",d),h.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let S=0;S<g;S++)p[S]=[S,0];n[u.id]=p}for(let S=0;S<g;S++){const E=p[S];E[0]=S,E[1]=d[S]}p.sort(Ph);for(let S=0;S<8;S++)S<g&&p[S][1]?(s[S][0]=p[S][0],s[S][1]=p[S][1]):(s[S][0]=Number.MAX_SAFE_INTEGER,s[S][1]=0);s.sort(Ch);const f=u.morphAttributes.position,x=u.morphAttributes.normal;let w=0;for(let S=0;S<8;S++){const E=s[S],L=E[0],D=E[1];L!==Number.MAX_SAFE_INTEGER&&D?(f&&u.getAttribute("morphTarget"+S)!==f[L]&&u.setAttribute("morphTarget"+S,f[L]),x&&u.getAttribute("morphNormal"+S)!==x[L]&&u.setAttribute("morphNormal"+S,x[L]),i[S]=D,w+=D):(f&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),x&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const M=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(a,"morphTargetBaseInfluence",M),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function Rh(a,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Ka=new ft,Ja=new ka,Qa=new xl,eo=new Ya,Js=[],Qs=[],ea=new Float32Array(16),ta=new Float32Array(9),na=new Float32Array(4);function Yn(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Js[i];if(r===void 0&&(r=new Float32Array(i),Js[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function Xe(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function je(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Xi(a,e){let t=Qs[e];t===void 0&&(t=new Int32Array(e),Qs[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Ih(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Fh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;a.uniform2fv(this.addr,e),je(t,e)}}function Nh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xe(t,e))return;a.uniform3fv(this.addr,e),je(t,e)}}function Uh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;a.uniform4fv(this.addr,e),je(t,e)}}function Oh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),je(t,e)}else{if(Xe(t,n))return;na.set(n),a.uniformMatrix2fv(this.addr,!1,na),je(t,n)}}function zh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),je(t,e)}else{if(Xe(t,n))return;ta.set(n),a.uniformMatrix3fv(this.addr,!1,ta),je(t,n)}}function Bh(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xe(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),je(t,e)}else{if(Xe(t,n))return;ea.set(n),a.uniformMatrix4fv(this.addr,!1,ea),je(t,n)}}function Gh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function kh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;a.uniform2iv(this.addr,e),je(t,e)}}function Vh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;a.uniform3iv(this.addr,e),je(t,e)}}function Hh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;a.uniform4iv(this.addr,e),je(t,e)}}function Wh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function qh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;a.uniform2uiv(this.addr,e),je(t,e)}}function Xh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;a.uniform3uiv(this.addr,e),je(t,e)}}function jh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;a.uniform4uiv(this.addr,e),je(t,e)}}function Yh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ka,i)}function Zh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qa,i)}function $h(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||eo,i)}function Kh(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ja,i)}function Jh(a){switch(a){case 5126:return Ih;case 35664:return Fh;case 35665:return Nh;case 35666:return Uh;case 35674:return Oh;case 35675:return zh;case 35676:return Bh;case 5124:case 35670:return Gh;case 35667:case 35671:return kh;case 35668:case 35672:return Vh;case 35669:case 35673:return Hh;case 5125:return Wh;case 36294:return qh;case 36295:return Xh;case 36296:return jh;case 35678:case 36198:case 36298:case 36306:case 35682:return Yh;case 35679:case 36299:case 36307:return Zh;case 35680:case 36300:case 36308:case 36293:return $h;case 36289:case 36303:case 36311:case 36292:return Kh}}function Qh(a,e){a.uniform1fv(this.addr,e)}function ed(a,e){const t=Yn(e,this.size,2);a.uniform2fv(this.addr,t)}function td(a,e){const t=Yn(e,this.size,3);a.uniform3fv(this.addr,t)}function nd(a,e){const t=Yn(e,this.size,4);a.uniform4fv(this.addr,t)}function id(a,e){const t=Yn(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function rd(a,e){const t=Yn(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function sd(a,e){const t=Yn(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function ad(a,e){a.uniform1iv(this.addr,e)}function od(a,e){a.uniform2iv(this.addr,e)}function ld(a,e){a.uniform3iv(this.addr,e)}function cd(a,e){a.uniform4iv(this.addr,e)}function ud(a,e){a.uniform1uiv(this.addr,e)}function hd(a,e){a.uniform2uiv(this.addr,e)}function dd(a,e){a.uniform3uiv(this.addr,e)}function fd(a,e){a.uniform4uiv(this.addr,e)}function pd(a,e,t){const n=this.cache,i=e.length,r=Xi(t,i);Xe(n,r)||(a.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ka,r[o])}function md(a,e,t){const n=this.cache,i=e.length,r=Xi(t,i);Xe(n,r)||(a.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qa,r[o])}function gd(a,e,t){const n=this.cache,i=e.length,r=Xi(t,i);Xe(n,r)||(a.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||eo,r[o])}function _d(a,e,t){const n=this.cache,i=e.length,r=Xi(t,i);Xe(n,r)||(a.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ja,r[o])}function xd(a){switch(a){case 5126:return Qh;case 35664:return ed;case 35665:return td;case 35666:return nd;case 35674:return id;case 35675:return rd;case 35676:return sd;case 5124:case 35670:return ad;case 35667:case 35671:return od;case 35668:case 35672:return ld;case 35669:case 35673:return cd;case 5125:return ud;case 36294:return hd;case 36295:return dd;case 36296:return fd;case 35678:case 36198:case 36298:case 36306:case 35682:return pd;case 35679:case 36299:case 36307:return md;case 35680:case 36300:case 36308:case 36293:return gd;case 36289:case 36303:case 36311:case 36292:return _d}}class vd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jh(t.type)}}class Md{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xd(t.type)}}class yd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function ia(a,e){a.seq.push(e),a.map[e.id]=e}function Sd(a,e,t){const n=a.name,i=n.length;for(Lr.lastIndex=0;;){const r=Lr.exec(n),o=Lr.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===i){ia(t,l===void 0?new vd(s,a,e):new Md(s,a,e));break}else{let h=t.map[s];h===void 0&&(h=new yd(s),ia(t,h)),t=h}}}class ki{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Sd(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ra(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let bd=0;function wd(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Ed(a){switch(a){case vn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function sa(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+wd(a.getShaderSource(e),o)}else return i}function Td(a,e){const t=Ed(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ad(a,e){let t;switch(e){case zo:t="Linear";break;case Bo:t="Reinhard";break;case Go:t="OptimizedCineon";break;case ko:t="ACESFilmic";break;case Vo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ld(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function Cd(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pd(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function si(a){return a!==""}function aa(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oa(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dd=/^[ \t]*#include +<([\w\d./]+)>/gm;function kr(a){return a.replace(Dd,Rd)}function Rd(a,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return kr(t)}const Id=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function la(a){return a.replace(Id,Fd)}function Fd(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ca(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nd(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===go?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Ud(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Wn:case qn:e="ENVMAP_TYPE_CUBE";break;case Wi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Od(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case qn:e="ENVMAP_MODE_REFRACTION";break}return e}function zd(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Wr:e="ENVMAP_BLENDING_MULTIPLY";break;case Uo:e="ENVMAP_BLENDING_MIX";break;case Oo:e="ENVMAP_BLENDING_ADD";break}return e}function Bd(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gd(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Nd(t),l=Ud(t),u=Od(t),h=zd(t),d=Bd(t),m=t.isWebGL2?"":Ld(t),g=Cd(r),p=i.createProgram();let f,x,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(si).join(`
`),f.length>0&&(f+=`
`),x=[m,g].filter(si).join(`
`),x.length>0&&(x+=`
`)):(f=[ca(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),x=[m,ca(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?be.tonemapping_pars_fragment:"",t.toneMapping!==Zt?Ad("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Td("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),o=kr(o),o=aa(o,t),o=oa(o,t),s=kr(s),s=aa(s,t),s=oa(s,t),o=la(o),s=la(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===Rs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=w+f+o,S=w+x+s,E=ra(i,35633,M),L=ra(i,35632,S);if(i.attachShader(p,E),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),F=i.getShaderInfoLog(E).trim(),X=i.getShaderInfoLog(L).trim();let j=!0,B=!0;if(i.getProgramParameter(p,35714)===!1){j=!1;const N=sa(i,E,"vertex"),W=sa(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+N+`
`+W)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(F===""||X==="")&&(B=!1);B&&(this.diagnostics={runnable:j,programLog:A,vertexShader:{log:F,prefix:f},fragmentShader:{log:X,prefix:x}})}i.deleteShader(E),i.deleteShader(L);let D;this.getUniforms=function(){return D===void 0&&(D=new ki(i,p)),D};let v;return this.getAttributes=function(){return v===void 0&&(v=Pd(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=bd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=L,this}let kd=0;class Vd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hd(e),t.set(e,n)),n}}class Hd{constructor(e){this.id=kd++,this.code=e,this.usedTimes=0}}function Wd(a,e,t,n,i,r,o){const s=new Va,c=new Vd,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,F,X,j){const B=X.fog,N=j.geometry,W=v.isMeshStandardMaterial?X.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),J=!!Y&&Y.mapping===Wi?Y.image.height:null,q=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Z=Q!==void 0?Q.length:0;let _e=0;N.morphAttributes.position!==void 0&&(_e=1),N.morphAttributes.normal!==void 0&&(_e=2),N.morphAttributes.color!==void 0&&(_e=3);let z,$,ie,U;if(q){const ye=zt[q];z=ye.vertexShader,$=ye.fragmentShader}else z=v.vertexShader,$=v.fragmentShader,c.update(v),ie=c.getVertexShaderID(v),U=c.getFragmentShaderID(v);const le=a.getRenderTarget(),ce=v.alphaTest>0,he=v.clearcoat>0,ue=v.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:v.type,vertexShader:z,fragmentShader:$,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:U,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:le===null?a.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:vn,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:J,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ol,tangentSpaceNormalMap:v.normalMapType===Ua,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ue,clearcoat:he,clearcoatMap:he&&!!v.clearcoatMap,clearcoatRoughnessMap:he&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!v.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!v.iridescenceMap,iridescenceThicknessMap:ue&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===kn,alphaMap:!!v.alphaMap,alphaTest:ce,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!B,useFog:v.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:_e,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:Zt,useLegacyLights:a.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yt,flipSided:v.side===yt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)A.push(F),A.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(A,v),w(A,v),A.push(a.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function x(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function w(v,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.map&&s.enable(4),A.matcap&&s.enable(5),A.envMap&&s.enable(6),A.lightMap&&s.enable(7),A.aoMap&&s.enable(8),A.emissiveMap&&s.enable(9),A.bumpMap&&s.enable(10),A.normalMap&&s.enable(11),A.objectSpaceNormalMap&&s.enable(12),A.tangentSpaceNormalMap&&s.enable(13),A.clearcoat&&s.enable(14),A.clearcoatMap&&s.enable(15),A.clearcoatRoughnessMap&&s.enable(16),A.clearcoatNormalMap&&s.enable(17),A.iridescence&&s.enable(18),A.iridescenceMap&&s.enable(19),A.iridescenceThicknessMap&&s.enable(20),A.displacementMap&&s.enable(21),A.specularMap&&s.enable(22),A.roughnessMap&&s.enable(23),A.metalnessMap&&s.enable(24),A.gradientMap&&s.enable(25),A.alphaMap&&s.enable(26),A.alphaTest&&s.enable(27),A.vertexColors&&s.enable(28),A.vertexAlphas&&s.enable(29),A.vertexUvs&&s.enable(30),A.vertexTangents&&s.enable(31),A.uvsVertexOnly&&s.enable(32),v.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.specularIntensityMap&&s.enable(15),A.specularColorMap&&s.enable(16),A.transmission&&s.enable(17),A.transmissionMap&&s.enable(18),A.thicknessMap&&s.enable(19),A.sheen&&s.enable(20),A.sheenColorMap&&s.enable(21),A.sheenRoughnessMap&&s.enable(22),A.decodeVideoTexture&&s.enable(23),A.opaque&&s.enable(24),v.push(s.mask)}function M(v){const A=g[v.type];let F;if(A){const X=zt[A];F=Pl.clone(X.uniforms)}else F=v.uniforms;return F}function S(v,A){let F;for(let X=0,j=l.length;X<j;X++){const B=l[X];if(B.cacheKey===A){F=B,++F.usedTimes;break}}return F===void 0&&(F=new Gd(a,A,v,r),l.push(F)),F}function E(v){if(--v.usedTimes===0){const A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),v.destroy()}}function L(v){c.remove(v)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:S,releaseProgram:E,releaseShaderCache:L,programs:l,dispose:D}}function qd(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Xd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ua(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ha(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,g,p,f){let x=a[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},a[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=f),e++,x}function s(h,d,m,g,p,f){const x=o(h,d,m,g,p,f);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(h,d,m,g,p,f){const x=o(h,d,m,g,p,f);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(h,d){t.length>1&&t.sort(h||Xd),n.length>1&&n.sort(d||ua),i.length>1&&i.sort(d||ua)}function u(){for(let h=e,d=a.length;h<d;h++){const m=a[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:u,sort:l}}function jd(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new ha,a.set(n,[o])):i>=r.length?(o=new ha,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Yd(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function Zd(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let $d=0;function Kd(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Jd(a,e){const t=new Yd,n=Zd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,o=new ke,s=new ke;function c(u,h){let d=0,m=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,f=0,x=0,w=0,M=0,S=0,E=0,L=0,D=0,v=0;u.sort(Kd);const A=h===!0?Math.PI:1;for(let X=0,j=u.length;X<j;X++){const B=u[X],N=B.color,W=B.intensity,Y=B.distance,J=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=N.r*W*A,m+=N.g*W*A,g+=N.b*W*A;else if(B.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(B.sh.coefficients[q],W);else if(B.isDirectionalLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const Q=B.shadow,Z=n.get(B);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=B.shadow.matrix,S++}i.directional[p]=q,p++}else if(B.isSpotLight){const q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(N).multiplyScalar(W*A),q.distance=Y,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,i.spot[x]=q;const Q=B.shadow;if(B.map&&(i.spotLightMap[D]=B.map,D++,Q.updateMatrices(B),B.castShadow&&v++),i.spotLightMatrix[x]=Q.matrix,B.castShadow){const Z=n.get(B);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=J,L++}x++}else if(B.isRectAreaLight){const q=t.get(B);q.color.copy(N).multiplyScalar(W),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),i.rectArea[w]=q,w++}else if(B.isPointLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*A),q.distance=B.distance,q.decay=B.decay,B.castShadow){const Q=B.shadow,Z=n.get(B);Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,i.pointShadow[f]=Z,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=B.shadow.matrix,E++}i.point[f]=q,f++}else if(B.isHemisphereLight){const q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(W*A),q.groundColor.copy(B.groundColor).multiplyScalar(W*A),i.hemi[M]=q,M++}}w>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==p||F.pointLength!==f||F.spotLength!==x||F.rectAreaLength!==w||F.hemiLength!==M||F.numDirectionalShadows!==S||F.numPointShadows!==E||F.numSpotShadows!==L||F.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=w,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=L+D-v,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=v,F.directionalLength=p,F.pointLength=f,F.spotLength=x,F.rectAreaLength=w,F.hemiLength=M,F.numDirectionalShadows=S,F.numPointShadows=E,F.numSpotShadows=L,F.numSpotMaps=D,i.version=$d++)}function l(u,h){let d=0,m=0,g=0,p=0,f=0;const x=h.matrixWorldInverse;for(let w=0,M=u.length;w<M;w++){const S=u[w];if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),d++}else if(S.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),g++}else if(S.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),s.identity(),o.copy(S.matrixWorld),o.premultiply(x),s.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),p++}else if(S.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),m++}else if(S.isHemisphereLight){const E=i.hemi[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(x),f++}}}return{setup:c,setupView:l,state:i}}function da(a,e){const t=new Jd(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function s(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Qd(a,e){let t=new WeakMap;function n(r,o=0){const s=t.get(r);let c;return s===void 0?(c=new da(a,e),t.set(r,[c])):o>=s.length?(c=new da(a,e),s.push(c)):c=s[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class ef extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tf extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sf(a,e,t){let n=new jr;const i=new Se,r=new Se,o=new et,s=new ef({depthPacking:al}),c=new tf,l={},u=t.maxTextureSize,h={[$t]:yt,[yt]:$t,[Yt]:Yt},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:nf,fragmentShader:rf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Rt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da,this.render=function(S,E,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const D=a.getRenderTarget(),v=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),F=a.state;F.setBlending(an),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let X=0,j=S.length;X<j;X++){const B=S[X],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const W=N.getFrameExtents();if(i.multiply(W),r.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,N.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,N.mapSize.y=r.y)),N.map===null){const J=this.type!==ri?{minFilter:ut,magFilter:ut}:{};N.map=new yn(i.x,i.y,J),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}a.setRenderTarget(N.map),a.clear();const Y=N.getViewportCount();for(let J=0;J<Y;J++){const q=N.getViewport(J);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),F.viewport(o),N.updateMatrices(B,J),n=N.getFrustum(),M(E,L,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===ri&&x(N,L),N.needsUpdate=!1}f.needsUpdate=!1,a.setRenderTarget(D,v,A)};function x(S,E){const L=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new yn(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(E,null,L,d,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(E,null,L,m,p,null)}function w(S,E,L,D,v,A){let F=null;const X=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(X!==void 0)F=X;else if(F=L.isPointLight===!0?c:s,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const j=F.uuid,B=E.uuid;let N=l[j];N===void 0&&(N={},l[j]=N);let W=N[B];W===void 0&&(W=F.clone(),N[B]=W),F=W}return F.visible=E.visible,F.wireframe=E.wireframe,A===ri?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:h[E.side],F.alphaMap=E.alphaMap,F.alphaTest=E.alphaTest,F.map=E.map,F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.displacementMap=E.displacementMap,F.displacementScale=E.displacementScale,F.displacementBias=E.displacementBias,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,L.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(L.matrixWorld),F.nearDistance=D,F.farDistance=v),F}function M(S,E,L,D,v){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===ri)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const X=e.update(S),j=S.material;if(Array.isArray(j)){const B=X.groups;for(let N=0,W=B.length;N<W;N++){const Y=B[N],J=j[Y.materialIndex];if(J&&J.visible){const q=w(S,J,D,L.near,L.far,v);a.renderBufferDirect(L,null,X,q,S,Y)}}}else if(j.visible){const B=w(S,j,D,L.near,L.far,v);a.renderBufferDirect(L,null,X,B,S,null)}}const F=S.children;for(let X=0,j=F.length;X<j;X++)M(F[X],E,L,D,v)}}function af(a,e,t){const n=t.isWebGL2;function i(){let C=!1;const V=new et;let K=null;const oe=new et(0,0,0,0);return{setMask:function(de){K!==de&&!C&&(a.colorMask(de,de,de,de),K=de)},setLocked:function(de){C=de},setClear:function(de,ze,Ke,at,Ft){Ft===!0&&(de*=at,ze*=at,Ke*=at),V.set(de,ze,Ke,at),oe.equals(V)===!1&&(a.clearColor(de,ze,Ke,at),oe.copy(V))},reset:function(){C=!1,K=null,oe.set(-1,0,0,0)}}}function r(){let C=!1,V=null,K=null,oe=null;return{setTest:function(de){de?ce(2929):he(2929)},setMask:function(de){V!==de&&!C&&(a.depthMask(de),V=de)},setFunc:function(de){if(K!==de){switch(de){case Co:a.depthFunc(512);break;case Po:a.depthFunc(519);break;case Do:a.depthFunc(513);break;case Nr:a.depthFunc(515);break;case Ro:a.depthFunc(514);break;case Io:a.depthFunc(518);break;case Fo:a.depthFunc(516);break;case No:a.depthFunc(517);break;default:a.depthFunc(515)}K=de}},setLocked:function(de){C=de},setClear:function(de){oe!==de&&(a.clearDepth(de),oe=de)},reset:function(){C=!1,V=null,K=null,oe=null}}}function o(){let C=!1,V=null,K=null,oe=null,de=null,ze=null,Ke=null,at=null,Ft=null;return{setTest:function(Ge){C||(Ge?ce(2960):he(2960))},setMask:function(Ge){V!==Ge&&!C&&(a.stencilMask(Ge),V=Ge)},setFunc:function(Ge,bt,Nt){(K!==Ge||oe!==bt||de!==Nt)&&(a.stencilFunc(Ge,bt,Nt),K=Ge,oe=bt,de=Nt)},setOp:function(Ge,bt,Nt){(ze!==Ge||Ke!==bt||at!==Nt)&&(a.stencilOp(Ge,bt,Nt),ze=Ge,Ke=bt,at=Nt)},setLocked:function(Ge){C=Ge},setClear:function(Ge){Ft!==Ge&&(a.clearStencil(Ge),Ft=Ge)},reset:function(){C=!1,V=null,K=null,oe=null,de=null,ze=null,Ke=null,at=null,Ft=null}}}const s=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,x=!1,w=null,M=null,S=null,E=null,L=null,D=null,v=null,A=!1,F=null,X=null,j=null,B=null,N=null;const W=a.getParameter(35661);let Y=!1,J=0;const q=a.getParameter(7938);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=J>=2);let Q=null,Z={};const _e=a.getParameter(3088),z=a.getParameter(2978),$=new et().fromArray(_e),ie=new et().fromArray(z);function U(C,V,K){const oe=new Uint8Array(4),de=a.createTexture();a.bindTexture(C,de),a.texParameteri(C,10241,9728),a.texParameteri(C,10240,9728);for(let ze=0;ze<K;ze++)a.texImage2D(V+ze,0,6408,1,1,0,6408,5121,oe);return de}const le={};le[3553]=U(3553,3553,1),le[34067]=U(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ce(2929),c.setFunc(Nr),Ze(!1),$e(ts),ce(2884),Ye(an);function ce(C){d[C]!==!0&&(a.enable(C),d[C]=!0)}function he(C){d[C]!==!1&&(a.disable(C),d[C]=!1)}function ue(C,V){return m[C]!==V?(a.bindFramebuffer(C,V),m[C]=V,n&&(C===36009&&(m[36160]=V),C===36160&&(m[36009]=V)),!0):!1}function ve(C,V){let K=p,oe=!1;if(C)if(K=g.get(V),K===void 0&&(K=[],g.set(V,K)),C.isWebGLMultipleRenderTargets){const de=C.texture;if(K.length!==de.length||K[0]!==36064){for(let ze=0,Ke=de.length;ze<Ke;ze++)K[ze]=36064+ze;K.length=de.length,oe=!0}}else K[0]!==36064&&(K[0]=36064,oe=!0);else K[0]!==1029&&(K[0]=1029,oe=!0);oe&&(t.isWebGL2?a.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function ye(C){return f!==C?(a.useProgram(C),f=C,!0):!1}const we={[Bn]:32774,[xo]:32778,[vo]:32779};if(n)we[ss]=32775,we[as]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(we[ss]=C.MIN_EXT,we[as]=C.MAX_EXT)}const Re={[Mo]:0,[yo]:1,[So]:768,[Ra]:770,[Lo]:776,[To]:774,[wo]:772,[bo]:769,[Ia]:771,[Ao]:775,[Eo]:773};function Ye(C,V,K,oe,de,ze,Ke,at){if(C===an){x===!0&&(he(3042),x=!1);return}if(x===!1&&(ce(3042),x=!0),C!==_o){if(C!==w||at!==A){if((M!==Bn||L!==Bn)&&(a.blendEquation(32774),M=Bn,L=Bn),at)switch(C){case kn:a.blendFuncSeparate(1,771,1,771);break;case ns:a.blendFunc(1,1);break;case is:a.blendFuncSeparate(0,769,0,1);break;case rs:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case kn:a.blendFuncSeparate(770,771,1,771);break;case ns:a.blendFunc(770,1);break;case is:a.blendFuncSeparate(0,769,0,1);break;case rs:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,E=null,D=null,v=null,w=C,A=at}return}de=de||V,ze=ze||K,Ke=Ke||oe,(V!==M||de!==L)&&(a.blendEquationSeparate(we[V],we[de]),M=V,L=de),(K!==S||oe!==E||ze!==D||Ke!==v)&&(a.blendFuncSeparate(Re[K],Re[oe],Re[ze],Re[Ke]),S=K,E=oe,D=ze,v=Ke),w=C,A=!1}function rt(C,V){C.side===Yt?he(2884):ce(2884);let K=C.side===yt;V&&(K=!K),Ze(K),C.blending===kn&&C.transparent===!1?Ye(an):Ye(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),s.setMask(C.colorWrite);const oe=C.stencilWrite;l.setTest(oe),oe&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ce(32926):he(32926)}function Ze(C){F!==C&&(C?a.frontFace(2304):a.frontFace(2305),F=C)}function $e(C){C!==po?(ce(2884),C!==X&&(C===ts?a.cullFace(1029):C===mo?a.cullFace(1028):a.cullFace(1032))):he(2884),X=C}function Be(C){C!==j&&(Y&&a.lineWidth(C),j=C)}function Oe(C,V,K){C?(ce(32823),(B!==V||N!==K)&&(a.polygonOffset(V,K),B=V,N=K)):he(32823)}function pt(C){C?ce(3089):he(3089)}function st(C){C===void 0&&(C=33984+W-1),Q!==C&&(a.activeTexture(C),Q=C)}function b(C,V,K){K===void 0&&(Q===null?K=33984+W-1:K=Q);let oe=Z[K];oe===void 0&&(oe={type:void 0,texture:void 0},Z[K]=oe),(oe.type!==C||oe.texture!==V)&&(Q!==K&&(a.activeTexture(K),Q=K),a.bindTexture(C,V||le[C]),oe.type=C,oe.texture=V)}function _(){const C=Z[Q];C!==void 0&&C.type!==void 0&&(a.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function k(){try{a.compressedTexImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{a.compressedTexImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{a.texSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{a.texSubImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function T(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function R(){try{a.texStorage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{a.texStorage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{a.texImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{a.texImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(C){$.equals(C)===!1&&(a.scissor(C.x,C.y,C.z,C.w),$.copy(C))}function pe(C){ie.equals(C)===!1&&(a.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function Ae(C,V){let K=h.get(V);K===void 0&&(K=new WeakMap,h.set(V,K));let oe=K.get(C);oe===void 0&&(oe=a.getUniformBlockIndex(V,C.name),K.set(C,oe))}function Ie(C,V){const oe=h.get(V).get(C);u.get(V)!==oe&&(a.uniformBlockBinding(V,oe,C.__bindingPointIndex),u.set(V,oe))}function Ne(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},Q=null,Z={},m={},g=new WeakMap,p=[],f=null,x=!1,w=null,M=null,S=null,E=null,L=null,D=null,v=null,A=!1,F=null,X=null,j=null,B=null,N=null,$.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:ce,disable:he,bindFramebuffer:ue,drawBuffers:ve,useProgram:ye,setBlending:Ye,setMaterial:rt,setFlipSided:Ze,setCullFace:$e,setLineWidth:Be,setPolygonOffset:Oe,setScissorTest:pt,activeTexture:st,bindTexture:b,unbindTexture:_,compressedTexImage2D:k,compressedTexImage3D:ee,texImage2D:re,texImage3D:fe,updateUBOMapping:Ae,uniformBlockBinding:Ie,texStorage2D:R,texStorage3D:ae,texSubImage2D:te,texSubImage3D:se,compressedTexSubImage2D:ge,compressedTexSubImage3D:T,scissor:me,viewport:pe,reset:Ne}}function of(a,e,t,n,i,r,o){const s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,_){return x?new OffscreenCanvas(b,_):di("canvas")}function M(b,_,k,ee){let te=1;if((b.width>ee||b.height>ee)&&(te=ee/Math.max(b.width,b.height)),te<1||_===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=_?ul:Math.floor,ge=se(te*b.width),T=se(te*b.height);p===void 0&&(p=w(ge,T));const R=k?w(ge,T):p;return R.width=ge,R.height=T,R.getContext("2d").drawImage(b,0,0,ge,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+T+")."),R}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Is(b.width)&&Is(b.height)}function E(b){return s?!1:b.wrapS!==Pt||b.wrapT!==Pt||b.minFilter!==ut&&b.minFilter!==Tt}function L(b,_){return b.generateMipmaps&&_&&b.minFilter!==ut&&b.minFilter!==Tt}function D(b){a.generateMipmap(b)}function v(b,_,k,ee,te=!1){if(s===!1)return _;if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=_;return _===6403&&(k===5126&&(se=33326),k===5131&&(se=33325),k===5121&&(se=33321)),_===33319&&(k===5126&&(se=33328),k===5131&&(se=33327),k===5121&&(se=33323)),_===6408&&(k===5126&&(se=34836),k===5131&&(se=34842),k===5121&&(se=ee===Ue&&te===!1?35907:32856),k===32819&&(se=32854),k===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function A(b,_,k){return L(b,k)===!0||b.isFramebufferTexture&&b.minFilter!==ut&&b.minFilter!==Tt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function F(b){return b===ut||b===os||b===Ji?9728:9729}function X(b){const _=b.target;_.removeEventListener("dispose",X),B(_),_.isVideoTexture&&g.delete(_)}function j(b){const _=b.target;_.removeEventListener("dispose",j),W(_)}function B(b){const _=n.get(b);if(_.__webglInit===void 0)return;const k=b.source,ee=f.get(k);if(ee){const te=ee[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(b),Object.keys(ee).length===0&&f.delete(k)}n.remove(b)}function N(b){const _=n.get(b);a.deleteTexture(_.__webglTexture);const k=b.source,ee=f.get(k);delete ee[_.__cacheKey],o.memory.textures--}function W(b){const _=b.texture,k=n.get(b),ee=n.get(_);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)a.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(a.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&a.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&a.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&a.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,se=_.length;te<se;te++){const ge=n.get(_[te]);ge.__webglTexture&&(a.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(_[te])}n.remove(_),n.remove(b)}let Y=0;function J(){Y=0}function q(){const b=Y;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),Y+=1,b}function Q(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.encoding),_.join()}function Z(b,_){const k=n.get(b);if(b.isVideoTexture&&pt(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(k,b,_);return}}t.bindTexture(3553,k.__webglTexture,33984+_)}function _e(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){he(k,b,_);return}t.bindTexture(35866,k.__webglTexture,33984+_)}function z(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){he(k,b,_);return}t.bindTexture(32879,k.__webglTexture,33984+_)}function $(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ue(k,b,_);return}t.bindTexture(34067,k.__webglTexture,33984+_)}const ie={[Vi]:10497,[Pt]:33071,[zr]:33648},U={[ut]:9728,[os]:9984,[Ji]:9986,[Tt]:9729,[Ho]:9985,[ci]:9987};function le(b,_,k){if(k?(a.texParameteri(b,10242,ie[_.wrapS]),a.texParameteri(b,10243,ie[_.wrapT]),(b===32879||b===35866)&&a.texParameteri(b,32882,ie[_.wrapR]),a.texParameteri(b,10240,U[_.magFilter]),a.texParameteri(b,10241,U[_.minFilter])):(a.texParameteri(b,10242,33071),a.texParameteri(b,10243,33071),(b===32879||b===35866)&&a.texParameteri(b,32882,33071),(_.wrapS!==Pt||_.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(b,10240,F(_.magFilter)),a.texParameteri(b,10241,F(_.minFilter)),_.minFilter!==ut&&_.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===ut||_.minFilter!==Ji&&_.minFilter!==ci||_.type===gn&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===ui&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(a.texParameterf(b,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function ce(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",X));const ee=_.source;let te=f.get(ee);te===void 0&&(te={},f.set(ee,te));const se=Q(_);if(se!==b.__cacheKey){te[se]===void 0&&(te[se]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[se].usedTimes++;const ge=te[b.__cacheKey];ge!==void 0&&(te[b.__cacheKey].usedTimes--,ge.usedTimes===0&&N(_)),b.__cacheKey=se,b.__webglTexture=te[se].texture}return k}function he(b,_,k){let ee=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=35866),_.isData3DTexture&&(ee=32879);const te=ce(b,_),se=_.source;t.bindTexture(ee,b.__webglTexture,33984+k);const ge=n.get(se);if(se.version!==ge.__version||te===!0){t.activeTexture(33984+k),a.pixelStorei(37440,_.flipY),a.pixelStorei(37441,_.premultiplyAlpha),a.pixelStorei(3317,_.unpackAlignment),a.pixelStorei(37443,0);const T=E(_)&&S(_.image)===!1;let R=M(_.image,T,!1,u);R=st(_,R);const ae=S(R)||s,re=r.convert(_.format,_.encoding);let fe=r.convert(_.type),me=v(_.internalFormat,re,fe,_.encoding,_.isVideoTexture);le(ee,_,ae);let pe;const Ae=_.mipmaps,Ie=s&&_.isVideoTexture!==!0,Ne=ge.__version===void 0||te===!0,C=A(_,R,ae);if(_.isDepthTexture)me=6402,s?_.type===gn?me=36012:_.type===mn?me=33190:_.type===Vn?me=35056:me=33189:_.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===_n&&me===6402&&_.type!==Na&&_.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=mn,fe=r.convert(_.type)),_.format===Xn&&me===6402&&(me=34041,_.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Vn,fe=r.convert(_.type))),Ne&&(Ie?t.texStorage2D(3553,1,me,R.width,R.height):t.texImage2D(3553,0,me,R.width,R.height,0,re,fe,null));else if(_.isDataTexture)if(Ae.length>0&&ae){Ie&&Ne&&t.texStorage2D(3553,C,me,Ae[0].width,Ae[0].height);for(let V=0,K=Ae.length;V<K;V++)pe=Ae[V],Ie?t.texSubImage2D(3553,V,0,0,pe.width,pe.height,re,fe,pe.data):t.texImage2D(3553,V,me,pe.width,pe.height,0,re,fe,pe.data);_.generateMipmaps=!1}else Ie?(Ne&&t.texStorage2D(3553,C,me,R.width,R.height),t.texSubImage2D(3553,0,0,0,R.width,R.height,re,fe,R.data)):t.texImage2D(3553,0,me,R.width,R.height,0,re,fe,R.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&Ne&&t.texStorage3D(35866,C,me,Ae[0].width,Ae[0].height,R.depth);for(let V=0,K=Ae.length;V<K;V++)pe=Ae[V],_.format!==Dt?re!==null?Ie?t.compressedTexSubImage3D(35866,V,0,0,0,pe.width,pe.height,R.depth,re,pe.data,0,0):t.compressedTexImage3D(35866,V,me,pe.width,pe.height,R.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage3D(35866,V,0,0,0,pe.width,pe.height,R.depth,re,fe,pe.data):t.texImage3D(35866,V,me,pe.width,pe.height,R.depth,0,re,fe,pe.data)}else{Ie&&Ne&&t.texStorage2D(3553,C,me,Ae[0].width,Ae[0].height);for(let V=0,K=Ae.length;V<K;V++)pe=Ae[V],_.format!==Dt?re!==null?Ie?t.compressedTexSubImage2D(3553,V,0,0,pe.width,pe.height,re,pe.data):t.compressedTexImage2D(3553,V,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(3553,V,0,0,pe.width,pe.height,re,fe,pe.data):t.texImage2D(3553,V,me,pe.width,pe.height,0,re,fe,pe.data)}else if(_.isDataArrayTexture)Ie?(Ne&&t.texStorage3D(35866,C,me,R.width,R.height,R.depth),t.texSubImage3D(35866,0,0,0,0,R.width,R.height,R.depth,re,fe,R.data)):t.texImage3D(35866,0,me,R.width,R.height,R.depth,0,re,fe,R.data);else if(_.isData3DTexture)Ie?(Ne&&t.texStorage3D(32879,C,me,R.width,R.height,R.depth),t.texSubImage3D(32879,0,0,0,0,R.width,R.height,R.depth,re,fe,R.data)):t.texImage3D(32879,0,me,R.width,R.height,R.depth,0,re,fe,R.data);else if(_.isFramebufferTexture){if(Ne)if(Ie)t.texStorage2D(3553,C,me,R.width,R.height);else{let V=R.width,K=R.height;for(let oe=0;oe<C;oe++)t.texImage2D(3553,oe,me,V,K,0,re,fe,null),V>>=1,K>>=1}}else if(Ae.length>0&&ae){Ie&&Ne&&t.texStorage2D(3553,C,me,Ae[0].width,Ae[0].height);for(let V=0,K=Ae.length;V<K;V++)pe=Ae[V],Ie?t.texSubImage2D(3553,V,0,0,re,fe,pe):t.texImage2D(3553,V,me,re,fe,pe);_.generateMipmaps=!1}else Ie?(Ne&&t.texStorage2D(3553,C,me,R.width,R.height),t.texSubImage2D(3553,0,0,0,re,fe,R)):t.texImage2D(3553,0,me,re,fe,R);L(_,ae)&&D(ee),ge.__version=se.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ue(b,_,k){if(_.image.length!==6)return;const ee=ce(b,_),te=_.source;t.bindTexture(34067,b.__webglTexture,33984+k);const se=n.get(te);if(te.version!==se.__version||ee===!0){t.activeTexture(33984+k),a.pixelStorei(37440,_.flipY),a.pixelStorei(37441,_.premultiplyAlpha),a.pixelStorei(3317,_.unpackAlignment),a.pixelStorei(37443,0);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,T=_.image[0]&&_.image[0].isDataTexture,R=[];for(let V=0;V<6;V++)!ge&&!T?R[V]=M(_.image[V],!1,!0,l):R[V]=T?_.image[V].image:_.image[V],R[V]=st(_,R[V]);const ae=R[0],re=S(ae)||s,fe=r.convert(_.format,_.encoding),me=r.convert(_.type),pe=v(_.internalFormat,fe,me,_.encoding),Ae=s&&_.isVideoTexture!==!0,Ie=se.__version===void 0||ee===!0;let Ne=A(_,ae,re);le(34067,_,re);let C;if(ge){Ae&&Ie&&t.texStorage2D(34067,Ne,pe,ae.width,ae.height);for(let V=0;V<6;V++){C=R[V].mipmaps;for(let K=0;K<C.length;K++){const oe=C[K];_.format!==Dt?fe!==null?Ae?t.compressedTexSubImage2D(34069+V,K,0,0,oe.width,oe.height,fe,oe.data):t.compressedTexImage2D(34069+V,K,pe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+V,K,0,0,oe.width,oe.height,fe,me,oe.data):t.texImage2D(34069+V,K,pe,oe.width,oe.height,0,fe,me,oe.data)}}}else{C=_.mipmaps,Ae&&Ie&&(C.length>0&&Ne++,t.texStorage2D(34067,Ne,pe,R[0].width,R[0].height));for(let V=0;V<6;V++)if(T){Ae?t.texSubImage2D(34069+V,0,0,0,R[V].width,R[V].height,fe,me,R[V].data):t.texImage2D(34069+V,0,pe,R[V].width,R[V].height,0,fe,me,R[V].data);for(let K=0;K<C.length;K++){const de=C[K].image[V].image;Ae?t.texSubImage2D(34069+V,K+1,0,0,de.width,de.height,fe,me,de.data):t.texImage2D(34069+V,K+1,pe,de.width,de.height,0,fe,me,de.data)}}else{Ae?t.texSubImage2D(34069+V,0,0,0,fe,me,R[V]):t.texImage2D(34069+V,0,pe,fe,me,R[V]);for(let K=0;K<C.length;K++){const oe=C[K];Ae?t.texSubImage2D(34069+V,K+1,0,0,fe,me,oe.image[V]):t.texImage2D(34069+V,K+1,pe,fe,me,oe.image[V])}}}L(_,re)&&D(34067),se.__version=te.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ve(b,_,k,ee,te){const se=r.convert(k.format,k.encoding),ge=r.convert(k.type),T=v(k.internalFormat,se,ge,k.encoding);n.get(_).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,T,_.width,_.height,_.depth,0,se,ge,null):t.texImage2D(te,0,T,_.width,_.height,0,se,ge,null)),t.bindFramebuffer(36160,b),Oe(_)?d.framebufferTexture2DMultisampleEXT(36160,ee,te,n.get(k).__webglTexture,0,Be(_)):(te===3553||te>=34069&&te<=34074)&&a.framebufferTexture2D(36160,ee,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function ye(b,_,k){if(a.bindRenderbuffer(36161,b),_.depthBuffer&&!_.stencilBuffer){let ee=33189;if(k||Oe(_)){const te=_.depthTexture;te&&te.isDepthTexture&&(te.type===gn?ee=36012:te.type===mn&&(ee=33190));const se=Be(_);Oe(_)?d.renderbufferStorageMultisampleEXT(36161,se,ee,_.width,_.height):a.renderbufferStorageMultisample(36161,se,ee,_.width,_.height)}else a.renderbufferStorage(36161,ee,_.width,_.height);a.framebufferRenderbuffer(36160,36096,36161,b)}else if(_.depthBuffer&&_.stencilBuffer){const ee=Be(_);k&&Oe(_)===!1?a.renderbufferStorageMultisample(36161,ee,35056,_.width,_.height):Oe(_)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,_.width,_.height):a.renderbufferStorage(36161,34041,_.width,_.height),a.framebufferRenderbuffer(36160,33306,36161,b)}else{const ee=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let te=0;te<ee.length;te++){const se=ee[te],ge=r.convert(se.format,se.encoding),T=r.convert(se.type),R=v(se.internalFormat,ge,T,se.encoding),ae=Be(_);k&&Oe(_)===!1?a.renderbufferStorageMultisample(36161,ae,R,_.width,_.height):Oe(_)?d.renderbufferStorageMultisampleEXT(36161,ae,R,_.width,_.height):a.renderbufferStorage(36161,R,_.width,_.height)}}a.bindRenderbuffer(36161,null)}function we(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const ee=n.get(_.depthTexture).__webglTexture,te=Be(_);if(_.depthTexture.format===_n)Oe(_)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(_.depthTexture.format===Xn)Oe(_)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Re(b){const _=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");we(_.__webglFramebuffer,b)}else if(k){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]=a.createRenderbuffer(),ye(_.__webglDepthbuffer[ee],b,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=a.createRenderbuffer(),ye(_.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function Ye(b,_,k){const ee=n.get(b);_!==void 0&&ve(ee.__webglFramebuffer,b,b.texture,36064,3553),k!==void 0&&Re(b)}function rt(b){const _=b.texture,k=n.get(b),ee=n.get(_);b.addEventListener("dispose",j),b.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=_.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,ge=S(b)||s;if(te){k.__webglFramebuffer=[];for(let T=0;T<6;T++)k.__webglFramebuffer[T]=a.createFramebuffer()}else{if(k.__webglFramebuffer=a.createFramebuffer(),se)if(i.drawBuffers){const T=b.texture;for(let R=0,ae=T.length;R<ae;R++){const re=n.get(T[R]);re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&Oe(b)===!1){const T=se?_:[_];k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let R=0;R<T.length;R++){const ae=T[R];k.__webglColorRenderbuffer[R]=a.createRenderbuffer(),a.bindRenderbuffer(36161,k.__webglColorRenderbuffer[R]);const re=r.convert(ae.format,ae.encoding),fe=r.convert(ae.type),me=v(ae.internalFormat,re,fe,ae.encoding,b.isXRRenderTarget===!0),pe=Be(b);a.renderbufferStorageMultisample(36161,pe,me,b.width,b.height),a.framebufferRenderbuffer(36160,36064+R,36161,k.__webglColorRenderbuffer[R])}a.bindRenderbuffer(36161,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),ye(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),le(34067,_,ge);for(let T=0;T<6;T++)ve(k.__webglFramebuffer[T],b,_,36064,34069+T);L(_,ge)&&D(34067),t.unbindTexture()}else if(se){const T=b.texture;for(let R=0,ae=T.length;R<ae;R++){const re=T[R],fe=n.get(re);t.bindTexture(3553,fe.__webglTexture),le(3553,re,ge),ve(k.__webglFramebuffer,b,re,36064+R,3553),L(re,ge)&&D(3553)}t.unbindTexture()}else{let T=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?T=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,ee.__webglTexture),le(T,_,ge),ve(k.__webglFramebuffer,b,_,36064,T),L(_,ge)&&D(T),t.unbindTexture()}b.depthBuffer&&Re(b)}function Ze(b){const _=S(b)||s,k=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0,te=k.length;ee<te;ee++){const se=k[ee];if(L(se,_)){const ge=b.isWebGLCubeRenderTarget?34067:3553,T=n.get(se).__webglTexture;t.bindTexture(ge,T),D(ge),t.unbindTexture()}}}function $e(b){if(s&&b.samples>0&&Oe(b)===!1){const _=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],k=b.width,ee=b.height;let te=16384;const se=[],ge=b.stencilBuffer?33306:36096,T=n.get(b),R=b.isWebGLMultipleRenderTargets===!0;if(R)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ae,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ae,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){se.push(36064+ae),b.depthBuffer&&se.push(ge);const re=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(re===!1&&(b.depthBuffer&&(te|=256),b.stencilBuffer&&(te|=1024)),R&&a.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ae]),re===!0&&(a.invalidateFramebuffer(36008,[ge]),a.invalidateFramebuffer(36009,[ge])),R){const fe=n.get(_[ae]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,fe,0)}a.blitFramebuffer(0,0,k,ee,0,0,k,ee,te,9728),m&&a.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),R)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ae,36161,T.__webglColorRenderbuffer[ae]);const re=n.get(_[ae]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ae,3553,re,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Be(b){return Math.min(h,b.samples)}function Oe(b){const _=n.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pt(b){const _=o.render.frame;g.get(b)!==_&&(g.set(b,_),b.update())}function st(b,_){const k=b.encoding,ee=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Br||k!==vn&&(k===Ue?s===!1?e.has("EXT_sRGB")===!0&&ee===Dt?(b.format=Br,b.minFilter=Tt,b.generateMipmaps=!1):_=Ba.sRGBToLinear(_):(ee!==Dt||te!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),_}this.allocateTextureUnit=q,this.resetTextureUnits=J,this.setTexture2D=Z,this.setTexture2DArray=_e,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Ye,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Oe}function lf(a,e,t){const n=t.isWebGL2;function i(r,o=null){let s;if(r===xn)return 5121;if(r===jo)return 32819;if(r===Yo)return 32820;if(r===Wo)return 5120;if(r===qo)return 5122;if(r===Na)return 5123;if(r===Xo)return 5124;if(r===mn)return 5125;if(r===gn)return 5126;if(r===ui)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Zo)return 6406;if(r===Dt)return 6408;if(r===$o)return 6409;if(r===Ko)return 6410;if(r===_n)return 6402;if(r===Xn)return 34041;if(r===Br)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Jo)return 6403;if(r===Qo)return 36244;if(r===el)return 33319;if(r===tl)return 33320;if(r===nl)return 36249;if(r===Qi||r===er||r===tr||r===nr)if(o===Ue)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Qi)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Qi)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ls||r===cs||r===us||r===hs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===ls)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===us)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===il)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ds||r===fs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===ds)return o===Ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===fs)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ps||r===ms||r===gs||r===_s||r===xs||r===vs||r===Ms||r===ys||r===Ss||r===bs||r===ws||r===Es||r===Ts||r===As)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===ps)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ms)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gs)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_s)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xs)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vs)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ms)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ys)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ss)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bs)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ws)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Es)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ts)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===As)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ir)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===ir)return o===Ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===rl||r===Ls||r===Cs||r===Ps)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===ir)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Ls)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ps)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vn?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class cf extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uf={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),x=this._getHandJoint(l,p);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(uf)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hf extends ft{constructor(e,t,n,i,r,o,s,c,l,u){if(u=u!==void 0?u:_n,u!==_n&&u!==Xn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_n&&(n=mn),n===void 0&&u===Xn&&(n=Vn),super(null,i,r,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ut,this.minFilter=c!==void 0?c:ut,this.flipY=!1,this.generateMipmaps=!1}}class df extends bn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const p=t.getContextAttributes();let f=null,x=null;const w=[],M=[],S=new Set,E=new Map,L=new Mt;L.layers.enable(1),L.viewport=new et;const D=new Mt;D.layers.enable(2),D.viewport=new et;const v=[L,D],A=new cf;A.layers.enable(1),A.layers.enable(2);let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=w[z];return $===void 0&&($=new Cr,w[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=w[z];return $===void 0&&($=new Cr,w[z]=$),$.getGripSpace()},this.getHand=function(z){let $=w[z];return $===void 0&&($=new Cr,w[z]=$),$.getHandSpace()};function j(z){const $=M.indexOf(z.inputSource);if($===-1)return;const ie=w[$];ie!==void 0&&ie.dispatchEvent({type:z.type,data:z.inputSource})}function B(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",N);for(let z=0;z<w.length;z++){const $=M[z];$!==null&&(M[z]=null,w[z].disconnect($))}F=null,X=null,e.setRenderTarget(f),m=null,d=null,h=null,i=null,x=null,_e.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",B),i.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),x=new yn(m.framebufferWidth,m.framebufferHeight,{format:Dt,type:xn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let $=null,ie=null,U=null;p.depth&&(U=p.stencil?35056:33190,$=p.stencil?Xn:_n,ie=p.stencil?Vn:mn);const le={colorFormat:32856,depthFormat:U,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(le),i.updateRenderState({layers:[d]}),x=new yn(d.textureWidth,d.textureHeight,{format:Dt,type:xn,depthTexture:new hf(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ce=e.properties.get(x);ce.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(s),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(z){for(let $=0;$<z.removed.length;$++){const ie=z.removed[$],U=M.indexOf(ie);U>=0&&(M[U]=null,w[U].disconnect(ie))}for(let $=0;$<z.added.length;$++){const ie=z.added[$];let U=M.indexOf(ie);if(U===-1){for(let ce=0;ce<w.length;ce++)if(ce>=M.length){M.push(ie),U=ce;break}else if(M[ce]===null){M[ce]=ie,U=ce;break}if(U===-1)break}const le=w[U];le&&le.connect(ie)}}const W=new P,Y=new P;function J(z,$,ie){W.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(ie.matrixWorld);const U=W.distanceTo(Y),le=$.projectionMatrix.elements,ce=ie.projectionMatrix.elements,he=le[14]/(le[10]-1),ue=le[14]/(le[10]+1),ve=(le[9]+1)/le[5],ye=(le[9]-1)/le[5],we=(le[8]-1)/le[0],Re=(ce[8]+1)/ce[0],Ye=he*we,rt=he*Re,Ze=U/(-we+Re),$e=Ze*-we;$.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX($e),z.translateZ(Ze),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Be=he+Ze,Oe=ue+Ze,pt=Ye-$e,st=rt+(U-$e),b=ve*ue/Oe*Be,_=ye*ue/Oe*Be;z.projectionMatrix.makePerspective(pt,st,b,_,Be,Oe)}function q(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;A.near=D.near=L.near=z.near,A.far=D.far=L.far=z.far,(F!==A.near||X!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,X=A.far);const $=z.parent,ie=A.cameras;q(A,$);for(let le=0;le<ie.length;le++)q(ie[le],$);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),z.matrix.copy(A.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const U=z.children;for(let le=0,ce=U.length;le<ce;le++)U[le].updateMatrixWorld(!0);ie.length===2?J(A,L,D):A.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return S};let Q=null;function Z(z,$){if(u=$.getViewerPose(l||o),g=$,u!==null){const ie=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let U=!1;ie.length!==A.cameras.length&&(A.cameras.length=0,U=!0);for(let le=0;le<ie.length;le++){const ce=ie[le];let he=null;if(m!==null)he=m.getViewport(ce);else{const ve=h.getViewSubImage(d,ce);he=ve.viewport,le===0&&(e.setRenderTargetTextures(x,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(x))}let ue=v[le];ue===void 0&&(ue=new Mt,ue.layers.enable(le),ue.viewport=new et,v[le]=ue),ue.matrix.fromArray(ce.transform.matrix),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.viewport.set(he.x,he.y,he.width,he.height),le===0&&A.matrix.copy(ue.matrix),U===!0&&A.cameras.push(ue)}}for(let ie=0;ie<w.length;ie++){const U=M[ie],le=w[ie];U!==null&&le!==void 0&&le.update(U,$,l||o)}if(Q&&Q(z,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ie=null;for(const U of S)$.detectedPlanes.has(U)||(ie===null&&(ie=[]),ie.push(U));if(ie!==null)for(const U of ie)S.delete(U),E.delete(U),n.dispatchEvent({type:"planeremoved",data:U});for(const U of $.detectedPlanes)if(!S.has(U))S.add(U),E.set(U,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:U});else{const le=E.get(U);U.lastChangedTime>le&&(E.set(U,U.lastChangedTime),n.dispatchEvent({type:"planechanged",data:U}))}}g=null}const _e=new Za;_e.setAnimationLoop(Z),this.setAnimationLoop=function(z){Q=z},this.dispose=function(){}}}function ff(a,e){function t(p,f){f.color.getRGB(p.fogColor.value,Xa(a)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,w,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,M)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?s(p,f,x,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===yt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===yt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const S=a.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*S}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.iridescenceMap?w=f.iridescenceMap:f.iridescenceThicknessMap?w=f.iridescenceThicknessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let M;f.aoMap?M=f.aoMap:f.lightMap&&(M=f.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function s(p,f,x,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=w*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===yt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function pf(a,e,t,n){let i={},r={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function c(w,M){const S=M.program;n.uniformBlockBinding(w,S)}function l(w,M){let S=i[w.id];S===void 0&&(g(w),S=u(w),i[w.id]=S,w.addEventListener("dispose",f));const E=M.program;n.updateUBOMapping(w,E);const L=e.render.frame;r[w.id]!==L&&(d(w),r[w.id]=L)}function u(w){const M=h();w.__bindingPointIndex=M;const S=a.createBuffer(),E=w.__size,L=w.usage;return a.bindBuffer(35345,S),a.bufferData(35345,E,L),a.bindBuffer(35345,null),a.bindBufferBase(35345,M,S),S}function h(){for(let w=0;w<s;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=i[w.id],S=w.uniforms,E=w.__cache;a.bindBuffer(35345,M);for(let L=0,D=S.length;L<D;L++){const v=S[L];if(m(v,L,E)===!0){const A=v.__offset,F=Array.isArray(v.value)?v.value:[v.value];let X=0;for(let j=0;j<F.length;j++){const B=F[j],N=p(B);typeof B=="number"?(v.__data[0]=B,a.bufferSubData(35345,A+X,v.__data)):B.isMatrix3?(v.__data[0]=B.elements[0],v.__data[1]=B.elements[1],v.__data[2]=B.elements[2],v.__data[3]=B.elements[0],v.__data[4]=B.elements[3],v.__data[5]=B.elements[4],v.__data[6]=B.elements[5],v.__data[7]=B.elements[0],v.__data[8]=B.elements[6],v.__data[9]=B.elements[7],v.__data[10]=B.elements[8],v.__data[11]=B.elements[0]):(B.toArray(v.__data,X),X+=N.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,A,v.__data)}}a.bindBuffer(35345,null)}function m(w,M,S){const E=w.value;if(S[M]===void 0){if(typeof E=="number")S[M]=E;else{const L=Array.isArray(E)?E:[E],D=[];for(let v=0;v<L.length;v++)D.push(L[v].clone());S[M]=D}return!0}else if(typeof E=="number"){if(S[M]!==E)return S[M]=E,!0}else{const L=Array.isArray(S[M])?S[M]:[S[M]],D=Array.isArray(E)?E:[E];for(let v=0;v<L.length;v++){const A=L[v];if(A.equals(D[v])===!1)return A.copy(D[v]),!0}}return!1}function g(w){const M=w.uniforms;let S=0;const E=16;let L=0;for(let D=0,v=M.length;D<v;D++){const A=M[D],F={boundary:0,storage:0},X=Array.isArray(A.value)?A.value:[A.value];for(let j=0,B=X.length;j<B;j++){const N=X[j],W=p(N);F.boundary+=W.boundary,F.storage+=W.storage}if(A.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,D>0){L=S%E;const j=E-L;L!==0&&j-F.boundary<0&&(S+=E-L,A.__offset=S)}S+=F.storage}return L=S%E,L>0&&(S+=E-L),w.__size=S,w.__cache={},this}function p(w){const M={boundary:0,storage:0};return typeof w=="number"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function f(w){const M=w.target;M.removeEventListener("dispose",f);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),a.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function x(){for(const w in i)a.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:c,update:l,dispose:x}}function mf(){const a=di("canvas");return a.style.display="block",a}function $r(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:mf(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vn,this.useLegacyLights=!0,this.toneMapping=Zt,this.toneMappingExposure=1;const p=this;let f=!1,x=0,w=0,M=null,S=-1,E=null;const L=new et,D=new et;let v=null,A=e.width,F=e.height,X=1,j=null,B=null;const N=new et(0,0,A,F),W=new et(0,0,A,F);let Y=!1;const J=new jr;let q=!1,Q=!1,Z=null;const _e=new ke,z=new P,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return M===null?X:1}let U=t;function le(y,O){for(let G=0;G<y.length;G++){const I=y[G],H=e.getContext(I,O);if(H!==null)return H}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hr}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",pe,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),U=le(O,y),U===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ce,he,ue,ve,ye,we,Re,Ye,rt,Ze,$e,Be,Oe,pt,st,b,_,k,ee,te,se,ge,T,R;function ae(){ce=new Eh(U),he=new vh(U,ce,a),ce.init(he),ge=new lf(U,ce,he),ue=new af(U,ce,he),ve=new Lh,ye=new qd,we=new of(U,ce,ue,ye,he,ge,ve),Re=new yh(p),Ye=new wh(p),rt=new Ol(U,he),T=new _h(U,ce,rt,he),Ze=new Th(U,rt,ve,T),$e=new Rh(U,Ze,rt,ve),ee=new Dh(U,he,we),b=new Mh(ye),Be=new Wd(p,Re,Ye,ce,he,T,b),Oe=new ff(p,ye),pt=new jd,st=new Qd(ce,he),k=new gh(p,Re,Ye,ue,$e,u,o),_=new sf(p,$e,he),R=new pf(U,ve,he,ue),te=new xh(U,ce,ve,he),se=new Ah(U,ce,ve,he),ve.programs=Be.programs,p.capabilities=he,p.extensions=ce,p.properties=ye,p.renderLists=pt,p.shadowMap=_,p.state=ue,p.info=ve}ae();const re=new df(p,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=ce.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ce.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(A,F,!1))},this.getSize=function(y){return y.set(A,F)},this.setSize=function(y,O,G=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=y,F=O,e.width=Math.floor(y*X),e.height=Math.floor(O*X),G===!0&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(A*X,F*X).floor()},this.setDrawingBufferSize=function(y,O,G){A=y,F=O,X=G,e.width=Math.floor(y*G),e.height=Math.floor(O*G),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(N)},this.setViewport=function(y,O,G,I){y.isVector4?N.set(y.x,y.y,y.z,y.w):N.set(y,O,G,I),ue.viewport(L.copy(N).multiplyScalar(X).floor())},this.getScissor=function(y){return y.copy(W)},this.setScissor=function(y,O,G,I){y.isVector4?W.set(y.x,y.y,y.z,y.w):W.set(y,O,G,I),ue.scissor(D.copy(W).multiplyScalar(X).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(y){ue.setScissorTest(Y=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){B=y},this.getClearColor=function(y){return y.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(y=!0,O=!0,G=!0){let I=0;y&&(I|=16384),O&&(I|=256),G&&(I|=1024),U.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),pt.dispose(),st.dispose(),ye.dispose(),Re.dispose(),Ye.dispose(),$e.dispose(),T.dispose(),R.dispose(),Be.dispose(),re.dispose(),re.removeEventListener("sessionstart",K),re.removeEventListener("sessionend",oe),Z&&(Z.dispose(),Z=null),de.stop()};function fe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const y=ve.autoReset,O=_.enabled,G=_.autoUpdate,I=_.needsUpdate,H=_.type;ae(),ve.autoReset=y,_.enabled=O,_.autoUpdate=G,_.needsUpdate=I,_.type=H}function pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ae(y){const O=y.target;O.removeEventListener("dispose",Ae),Ie(O)}function Ie(y){Ne(y),ye.remove(y)}function Ne(y){const O=ye.get(y).programs;O!==void 0&&(O.forEach(function(G){Be.releaseProgram(G)}),y.isShaderMaterial&&Be.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,G,I,H,xe){O===null&&(O=$);const Me=H.isMesh&&H.matrixWorld.determinant()<0,Ee=co(y,O,G,I,H);ue.setMaterial(I,Me);let Te=G.index,Fe=1;I.wireframe===!0&&(Te=Ze.getWireframeAttribute(G),Fe=2);const Le=G.drawRange,Ce=G.attributes.position;let Ve=Le.start*Fe,mt=(Le.start+Le.count)*Fe;xe!==null&&(Ve=Math.max(Ve,xe.start*Fe),mt=Math.min(mt,(xe.start+xe.count)*Fe)),Te!==null?(Ve=Math.max(Ve,0),mt=Math.min(mt,Te.count)):Ce!=null&&(Ve=Math.max(Ve,0),mt=Math.min(mt,Ce.count));const Gt=mt-Ve;if(Gt<0||Gt===1/0)return;T.setup(H,I,Ee,G,Te);let on,He=te;if(Te!==null&&(on=rt.get(Te),He=se,He.setIndex(on)),H.isMesh)I.wireframe===!0?(ue.setLineWidth(I.wireframeLinewidth*ie()),He.setMode(1)):He.setMode(4);else if(H.isLine){let Pe=I.linewidth;Pe===void 0&&(Pe=1),ue.setLineWidth(Pe*ie()),H.isLineSegments?He.setMode(1):H.isLineLoop?He.setMode(2):He.setMode(3)}else H.isPoints?He.setMode(0):H.isSprite&&He.setMode(4);if(H.isInstancedMesh)He.renderInstances(Ve,Gt,H.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Yi=Math.min(G.instanceCount,Pe);He.renderInstances(Ve,Gt,Yi)}else He.render(Ve,Gt)},this.compile=function(y,O){function G(I,H,xe){I.transparent===!0&&I.side===Yt&&I.forceSinglePass===!1?(I.side=yt,I.needsUpdate=!0,bt(I,H,xe),I.side=$t,I.needsUpdate=!0,bt(I,H,xe),I.side=Yt):bt(I,H,xe)}d=st.get(y),d.init(),g.push(d),y.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(p.useLegacyLights),y.traverse(function(I){const H=I.material;if(H)if(Array.isArray(H))for(let xe=0;xe<H.length;xe++){const Me=H[xe];G(Me,y,I)}else G(H,y,I)}),g.pop(),d=null};let C=null;function V(y){C&&C(y)}function K(){de.stop()}function oe(){de.start()}const de=new Za;de.setAnimationLoop(V),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(y){C=y,re.setAnimationLoop(y),y===null?de.stop():de.start()},re.addEventListener("sessionstart",K),re.addEventListener("sessionend",oe),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,O,M),d=st.get(y,g.length),d.init(),g.push(d),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(_e),Q=this.localClippingEnabled,q=b.init(this.clippingPlanes,Q),h=pt.get(y,m.length),h.init(),m.push(h),ze(y,O,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(j,B),q===!0&&b.beginShadows();const G=d.state.shadowsArray;if(_.render(G,y,O),q===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(h,y),d.setupLights(p.useLegacyLights),O.isArrayCamera){const I=O.cameras;for(let H=0,xe=I.length;H<xe;H++){const Me=I[H];Ke(h,y,Me,Me.viewport)}}else Ke(h,y,O);M!==null&&(we.updateMultisampleRenderTarget(M),we.updateRenderTargetMipmap(M)),y.isScene===!0&&y.onAfterRender(p,y,O),T.resetDefaultState(),S=-1,E=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ze(y,O,G,I){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||J.intersectsSprite(y)){I&&z.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);const Me=$e.update(y),Ee=y.material;Ee.visible&&h.push(y,Me,Ee,G,z.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==ve.render.frame&&(y.skeleton.update(),y.skeleton.frame=ve.render.frame),!y.frustumCulled||J.intersectsObject(y))){I&&z.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);const Me=$e.update(y),Ee=y.material;if(Array.isArray(Ee)){const Te=Me.groups;for(let Fe=0,Le=Te.length;Fe<Le;Fe++){const Ce=Te[Fe],Ve=Ee[Ce.materialIndex];Ve&&Ve.visible&&h.push(y,Me,Ve,G,z.z,Ce)}}else Ee.visible&&h.push(y,Me,Ee,G,z.z,null)}}const xe=y.children;for(let Me=0,Ee=xe.length;Me<Ee;Me++)ze(xe[Me],O,G,I)}function Ke(y,O,G,I){const H=y.opaque,xe=y.transmissive,Me=y.transparent;d.setupLightsView(G),q===!0&&b.setGlobalState(p.clippingPlanes,G),xe.length>0&&at(H,O,G),I&&ue.viewport(L.copy(I)),H.length>0&&Ft(H,O,G),xe.length>0&&Ft(xe,O,G),Me.length>0&&Ft(Me,O,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function at(y,O,G){const I=he.isWebGL2;Z===null&&(Z=new yn(1024,1024,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?ui:xn,minFilter:ci,samples:I&&r===!0?4:0}));const H=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const xe=p.toneMapping;p.toneMapping=Zt,Ft(y,O,G),p.toneMapping=xe,we.updateMultisampleRenderTarget(Z),we.updateRenderTargetMipmap(Z),p.setRenderTarget(H)}function Ft(y,O,G){const I=O.isScene===!0?O.overrideMaterial:null;for(let H=0,xe=y.length;H<xe;H++){const Me=y[H],Ee=Me.object,Te=Me.geometry,Fe=I===null?Me.material:I,Le=Me.group;Ee.layers.test(G.layers)&&Ge(Ee,O,G,Te,Fe,Le)}}function Ge(y,O,G,I,H,xe){y.onBeforeRender(p,O,G,I,H,xe),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(p,O,G,I,y,xe),H.transparent===!0&&H.side===Yt&&H.forceSinglePass===!1?(H.side=yt,H.needsUpdate=!0,p.renderBufferDirect(G,O,I,H,y,xe),H.side=$t,H.needsUpdate=!0,p.renderBufferDirect(G,O,I,H,y,xe),H.side=Yt):p.renderBufferDirect(G,O,I,H,y,xe),y.onAfterRender(p,O,G,I,H,xe)}function bt(y,O,G){O.isScene!==!0&&(O=$);const I=ye.get(y),H=d.state.lights,xe=d.state.shadowsArray,Me=H.state.version,Ee=Be.getParameters(y,H.state,xe,O,G),Te=Be.getProgramCacheKey(Ee);let Fe=I.programs;I.environment=y.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(y.isMeshStandardMaterial?Ye:Re).get(y.envMap||I.environment),Fe===void 0&&(y.addEventListener("dispose",Ae),Fe=new Map,I.programs=Fe);let Le=Fe.get(Te);if(Le!==void 0){if(I.currentProgram===Le&&I.lightsStateVersion===Me)return Nt(y,Ee),Le}else Ee.uniforms=Be.getUniforms(y),y.onBuild(G,Ee,p),y.onBeforeCompile(Ee,p),Le=Be.acquireProgram(Ee,Te),Fe.set(Te,Le),I.uniforms=Ee.uniforms;const Ce=I.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=b.uniform),Nt(y,Ee),I.needsLights=ho(y),I.lightsStateVersion=Me,I.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMap.value=H.state.directionalShadowMap,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotShadowMap.value=H.state.spotShadowMap,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMap.value=H.state.pointShadowMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ve=Le.getUniforms(),mt=ki.seqWithValue(Ve.seq,Ce);return I.currentProgram=Le,I.uniformsList=mt,Le}function Nt(y,O){const G=ye.get(y);G.outputEncoding=O.outputEncoding,G.instancing=O.instancing,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function co(y,O,G,I,H){O.isScene!==!0&&(O=$),we.resetTextureUnits();const xe=O.fog,Me=I.isMeshStandardMaterial?O.environment:null,Ee=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:vn,Te=(I.isMeshStandardMaterial?Ye:Re).get(I.envMap||Me),Fe=I.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!I.normalMap&&!!G.attributes.tangent,Ce=!!G.morphAttributes.position,Ve=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color,Gt=I.toneMapped?p.toneMapping:Zt,on=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,He=on!==void 0?on.length:0,Pe=ye.get(I),Yi=d.state.lights;if(q===!0&&(Q===!0||y!==E)){const gt=y===E&&I.id===S;b.setState(I,y,gt)}let Je=!1;I.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Yi.state.version||Pe.outputEncoding!==Ee||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==Te||I.fog===!0&&Pe.fog!==xe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==b.numPlanes||Pe.numIntersection!==b.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Le||Pe.morphTargets!==Ce||Pe.morphNormals!==Ve||Pe.morphColors!==mt||Pe.toneMapping!==Gt||he.isWebGL2===!0&&Pe.morphTargetsCount!==He)&&(Je=!0):(Je=!0,Pe.__version=I.version);let ln=Pe.currentProgram;Je===!0&&(ln=bt(I,O,H));let Qr=!1,$n=!1,Zi=!1;const ot=ln.getUniforms(),cn=Pe.uniforms;if(ue.useProgram(ln.program)&&(Qr=!0,$n=!0,Zi=!0),I.id!==S&&(S=I.id,$n=!0),Qr||E!==y){if(ot.setValue(U,"projectionMatrix",y.projectionMatrix),he.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),E!==y&&(E=y,$n=!0,Zi=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const gt=ot.map.cameraPosition;gt!==void 0&&gt.setValue(U,z.setFromMatrixPosition(y.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&ot.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||H.isSkinnedMesh)&&ot.setValue(U,"viewMatrix",y.matrixWorldInverse)}if(H.isSkinnedMesh){ot.setOptional(U,H,"bindMatrix"),ot.setOptional(U,H,"bindMatrixInverse");const gt=H.skeleton;gt&&(he.floatVertexTextures?(gt.boneTexture===null&&gt.computeBoneTexture(),ot.setValue(U,"boneTexture",gt.boneTexture,we),ot.setValue(U,"boneTextureSize",gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $i=G.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0&&he.isWebGL2===!0)&&ee.update(H,G,ln),($n||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,ot.setValue(U,"receiveShadow",H.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(cn.envMap.value=Te,cn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),$n&&(ot.setValue(U,"toneMappingExposure",p.toneMappingExposure),Pe.needsLights&&uo(cn,Zi),xe&&I.fog===!0&&Oe.refreshFogUniforms(cn,xe),Oe.refreshMaterialUniforms(cn,I,X,F,Z),ki.upload(U,Pe.uniformsList,cn,we)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ki.upload(U,Pe.uniformsList,cn,we),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&ot.setValue(U,"center",H.center),ot.setValue(U,"modelViewMatrix",H.modelViewMatrix),ot.setValue(U,"normalMatrix",H.normalMatrix),ot.setValue(U,"modelMatrix",H.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const gt=I.uniformsGroups;for(let Ki=0,fo=gt.length;Ki<fo;Ki++)if(he.isWebGL2){const es=gt[Ki];R.update(es,ln),R.bind(es,ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ln}function uo(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function ho(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(y,O,G){ye.get(y.texture).__webglTexture=O,ye.get(y.depthTexture).__webglTexture=G;const I=ye.get(y);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=G===void 0,I.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,O){const G=ye.get(y);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,G=0){M=y,x=O,w=G;let I=!0,H=null,xe=!1,Me=!1;if(y){const Te=ye.get(y);Te.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),I=!1):Te.__webglFramebuffer===void 0?we.setupRenderTarget(y):Te.__hasExternalTextures&&we.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);const Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Le=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(H=Le[O],xe=!0):he.isWebGL2&&y.samples>0&&we.useMultisampledRTT(y)===!1?H=ye.get(y).__webglMultisampledFramebuffer:H=Le,L.copy(y.viewport),D.copy(y.scissor),v=y.scissorTest}else L.copy(N).multiplyScalar(X).floor(),D.copy(W).multiplyScalar(X).floor(),v=Y;if(ue.bindFramebuffer(36160,H)&&he.drawBuffers&&I&&ue.drawBuffers(y,H),ue.viewport(L),ue.scissor(D),ue.setScissorTest(v),xe){const Te=ye.get(y.texture);U.framebufferTexture2D(36160,36064,34069+O,Te.__webglTexture,G)}else if(Me){const Te=ye.get(y.texture),Fe=O||0;U.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,Fe)}S=-1},this.readRenderTargetPixels=function(y,O,G,I,H,xe,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){ue.bindFramebuffer(36160,Ee);try{const Te=y.texture,Fe=Te.format,Le=Te.type;if(Fe!==Dt&&ge.convert(Fe)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Le===ui&&(ce.has("EXT_color_buffer_half_float")||he.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Le!==xn&&ge.convert(Le)!==U.getParameter(35738)&&!(Le===gn&&(he.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-I&&G>=0&&G<=y.height-H&&U.readPixels(O,G,I,H,ge.convert(Fe),ge.convert(Le),xe)}finally{const Te=M!==null?ye.get(M).__webglFramebuffer:null;ue.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(y,O,G=0){const I=Math.pow(2,-G),H=Math.floor(O.image.width*I),xe=Math.floor(O.image.height*I);we.setTexture2D(O,0),U.copyTexSubImage2D(3553,G,0,0,y.x,y.y,H,xe),ue.unbindTexture()},this.copyTextureToTexture=function(y,O,G,I=0){const H=O.image.width,xe=O.image.height,Me=ge.convert(G.format),Ee=ge.convert(G.type);we.setTexture2D(G,0),U.pixelStorei(37440,G.flipY),U.pixelStorei(37441,G.premultiplyAlpha),U.pixelStorei(3317,G.unpackAlignment),O.isDataTexture?U.texSubImage2D(3553,I,y.x,y.y,H,xe,Me,Ee,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(3553,I,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):U.texSubImage2D(3553,I,y.x,y.y,Me,Ee,O.image),I===0&&G.generateMipmaps&&U.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(y,O,G,I,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=y.max.x-y.min.x+1,Me=y.max.y-y.min.y+1,Ee=y.max.z-y.min.z+1,Te=ge.convert(I.format),Fe=ge.convert(I.type);let Le;if(I.isData3DTexture)we.setTexture3D(I,0),Le=32879;else if(I.isDataArrayTexture)we.setTexture2DArray(I,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,I.flipY),U.pixelStorei(37441,I.premultiplyAlpha),U.pixelStorei(3317,I.unpackAlignment);const Ce=U.getParameter(3314),Ve=U.getParameter(32878),mt=U.getParameter(3316),Gt=U.getParameter(3315),on=U.getParameter(32877),He=G.isCompressedTexture?G.mipmaps[0]:G.image;U.pixelStorei(3314,He.width),U.pixelStorei(32878,He.height),U.pixelStorei(3316,y.min.x),U.pixelStorei(3315,y.min.y),U.pixelStorei(32877,y.min.z),G.isDataTexture||G.isData3DTexture?U.texSubImage3D(Le,H,O.x,O.y,O.z,xe,Me,Ee,Te,Fe,He.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,H,O.x,O.y,O.z,xe,Me,Ee,Te,He.data)):U.texSubImage3D(Le,H,O.x,O.y,O.z,xe,Me,Ee,Te,Fe,He),U.pixelStorei(3314,Ce),U.pixelStorei(32878,Ve),U.pixelStorei(3316,mt),U.pixelStorei(3315,Gt),U.pixelStorei(32877,on),H===0&&I.generateMipmaps&&U.generateMipmap(Le),ue.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?we.setTextureCube(y,0):y.isData3DTexture?we.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?we.setTexture2DArray(y,0):we.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){x=0,w=0,M=null,ue.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties($r.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class gf extends $r{}gf.prototype.isWebGL1Renderer=!0;class _f extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class li extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fa=new P,pa=new P,ma=new ke,Pr=new qr,Oi=new mi;class to extends qe{constructor(e=new St,t=new li){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)fa.fromBufferAttribute(t,i-1),pa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fa.distanceTo(pa);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(i),Oi.radius+=r,e.ray.intersectsSphere(Oi)===!1)return;ma.copy(i).invert(),Pr.copy(e.ray).applyMatrix4(ma);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=new P,u=new P,h=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let M=x,S=w-1;M<S;M+=m){const E=g.getX(M),L=g.getX(M+1);if(l.fromBufferAttribute(f,E),u.fromBufferAttribute(f,L),Pr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),w=Math.min(f.count,o.start+o.count);for(let M=x,S=w-1;M<S;M+=m){if(l.fromBufferAttribute(f,M),u.fromBufferAttribute(f,M+1),Pr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const ga=new P,_a=new P;class xa extends to{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ga.fromBufferAttribute(t,i),_a.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ga.distanceTo(_a);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oi extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const va=new ke,Vr=new qr,zi=new mi,Bi=new P;class Dr extends qe{constructor(e=new St,t=new oi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(i),zi.radius+=r,e.ray.intersectsSphere(zi)===!1)return;va.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(va);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,p=m;g<p;g++){const f=l.getX(g);Bi.fromBufferAttribute(h,f),Ma(Bi,f,c,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,p=m;g<p;g++)Bi.fromBufferAttribute(h,g),Ma(Bi,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Ma(a,e,t,n,i,r,o){const s=Vr.distanceSqToPoint(a);if(s<t){const c=new P;Vr.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:o})}}class no extends Kt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Hi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class xf{constructor(e,t,n){const i=this;let r=!1,o=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,s),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const io=new xf;class _i{constructor(e){this.manager=e!==void 0?e:io,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xt={};class vf extends Error{constructor(e,t){super(e),this.response=t}}class ro extends _i{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xt[e]!==void 0){Xt[e].push({onLoad:t,onProgress:n,onError:i});return}Xt[e]=[],Xt[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Xt[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let p=0;const f=new ReadableStream({start(x){w();function w(){h.read().then(({done:M,value:S})=>{if(M)x.close();else{p+=S.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let L=0,D=u.length;L<D;L++){const v=u[L];v.onProgress&&v.onProgress(E)}x.enqueue(S),w()}})}}});return new Response(f)}else throw new vf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,s));case"json":return l.json();default:if(s===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(s),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Hi.add(e,l);const u=Xt[e];delete Xt[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Xt[e];if(u===void 0)throw this.manager.itemError(e),l;delete Xt[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Mf extends _i{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const s=di("img");function c(){u(),Hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class yf extends _i{constructor(e){super(e)}load(e,t,n,i){const r=new ft,o=new Mf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Kr extends qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rr=new ke,ya=new P,Sa=new P;class so{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(ya),Sa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sa),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sf extends so{constructor(){super(new Mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bf extends Kr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Sf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wf extends so{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ef extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new wf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tf extends Kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Af{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ba{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lf extends to{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new St;o.setAttribute("position",new tt(r,3)),o.computeBoundingSphere(),super(o,new li({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const s=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new St;c.setAttribute("position",new tt(s,3)),c.computeBoundingSphere(),this.add(new Rt(c,new Xr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hr);const wa={type:"change"},Ir={type:"start"},Ea={type:"end"};class Cf extends bn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wn.ROTATE,MIDDLE:wn.DOLLY,RIGHT:wn.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",st),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wa),n.update(),r=i.NONE},this.update=function(){const T=new P,R=new Mn().setFromUnitVectors(e.up,new P(0,1,0)),ae=R.clone().invert(),re=new P,fe=new Mn,me=2*Math.PI;return function(){const Ae=n.object.position;T.copy(Ae).sub(n.target),T.applyQuaternion(R),s.setFromVector3(T),n.autoRotate&&r===i.NONE&&A(D()),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let Ie=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;return isFinite(Ie)&&isFinite(Ne)&&(Ie<-Math.PI?Ie+=me:Ie>Math.PI&&(Ie-=me),Ne<-Math.PI?Ne+=me:Ne>Math.PI&&(Ne-=me),Ie<=Ne?s.theta=Math.max(Ie,Math.min(Ne,s.theta)):s.theta=s.theta>(Ie+Ne)/2?Math.max(Ie,s.theta):Math.min(Ne,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=l,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(s),T.applyQuaternion(ae),Ae.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||re.distanceToSquared(n.object.position)>o||8*(1-fe.dot(n.object.quaternion))>o?(n.dispatchEvent(wa),re.copy(n.object.position),fe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",$e),n.domElement.removeEventListener("wheel",pt),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",st),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,s=new ba,c=new ba;let l=1;const u=new P;let h=!1;const d=new Se,m=new Se,g=new Se,p=new Se,f=new Se,x=new Se,w=new Se,M=new Se,S=new Se,E=[],L={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function A(T){c.theta-=T}function F(T){c.phi-=T}const X=function(){const T=new P;return function(ae,re){T.setFromMatrixColumn(re,0),T.multiplyScalar(-ae),u.add(T)}}(),j=function(){const T=new P;return function(ae,re){n.screenSpacePanning===!0?T.setFromMatrixColumn(re,1):(T.setFromMatrixColumn(re,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ae),u.add(T)}}(),B=function(){const T=new P;return function(ae,re){const fe=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;T.copy(me).sub(n.target);let pe=T.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),X(2*ae*pe/fe.clientHeight,n.object.matrix),j(2*re*pe/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(ae*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),j(re*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T){d.set(T.clientX,T.clientY)}function J(T){w.set(T.clientX,T.clientY)}function q(T){p.set(T.clientX,T.clientY)}function Q(T){m.set(T.clientX,T.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const R=n.domElement;A(2*Math.PI*g.x/R.clientHeight),F(2*Math.PI*g.y/R.clientHeight),d.copy(m),n.update()}function Z(T){M.set(T.clientX,T.clientY),S.subVectors(M,w),S.y>0?N(v()):S.y<0&&W(v()),w.copy(M),n.update()}function _e(T){f.set(T.clientX,T.clientY),x.subVectors(f,p).multiplyScalar(n.panSpeed),B(x.x,x.y),p.copy(f),n.update()}function z(T){T.deltaY<0?W(v()):T.deltaY>0&&N(v()),n.update()}function $(T){let R=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),R=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),R=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),R=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),R=!0;break}R&&(T.preventDefault(),n.update())}function ie(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const T=.5*(E[0].pageX+E[1].pageX),R=.5*(E[0].pageY+E[1].pageY);d.set(T,R)}}function U(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const T=.5*(E[0].pageX+E[1].pageX),R=.5*(E[0].pageY+E[1].pageY);p.set(T,R)}}function le(){const T=E[0].pageX-E[1].pageX,R=E[0].pageY-E[1].pageY,ae=Math.sqrt(T*T+R*R);w.set(0,ae)}function ce(){n.enableZoom&&le(),n.enablePan&&U()}function he(){n.enableZoom&&le(),n.enableRotate&&ie()}function ue(T){if(E.length==1)m.set(T.pageX,T.pageY);else{const ae=ge(T),re=.5*(T.pageX+ae.x),fe=.5*(T.pageY+ae.y);m.set(re,fe)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const R=n.domElement;A(2*Math.PI*g.x/R.clientHeight),F(2*Math.PI*g.y/R.clientHeight),d.copy(m)}function ve(T){if(E.length===1)f.set(T.pageX,T.pageY);else{const R=ge(T),ae=.5*(T.pageX+R.x),re=.5*(T.pageY+R.y);f.set(ae,re)}x.subVectors(f,p).multiplyScalar(n.panSpeed),B(x.x,x.y),p.copy(f)}function ye(T){const R=ge(T),ae=T.pageX-R.x,re=T.pageY-R.y,fe=Math.sqrt(ae*ae+re*re);M.set(0,fe),S.set(0,Math.pow(M.y/w.y,n.zoomSpeed)),N(S.y),w.copy(M)}function we(T){n.enableZoom&&ye(T),n.enablePan&&ve(T)}function Re(T){n.enableZoom&&ye(T),n.enableRotate&&ue(T)}function Ye(T){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",rt),n.domElement.addEventListener("pointerup",Ze)),ee(T),T.pointerType==="touch"?b(T):Be(T))}function rt(T){n.enabled!==!1&&(T.pointerType==="touch"?_(T):Oe(T))}function Ze(T){te(T),E.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",rt),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(Ea),r=i.NONE}function $e(T){te(T)}function Be(T){let R;switch(T.button){case 0:R=n.mouseButtons.LEFT;break;case 1:R=n.mouseButtons.MIDDLE;break;case 2:R=n.mouseButtons.RIGHT;break;default:R=-1}switch(R){case wn.DOLLY:if(n.enableZoom===!1)return;J(T),r=i.DOLLY;break;case wn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;q(T),r=i.PAN}else{if(n.enableRotate===!1)return;Y(T),r=i.ROTATE}break;case wn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Y(T),r=i.ROTATE}else{if(n.enablePan===!1)return;q(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ir)}function Oe(T){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(T);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(T);break;case i.PAN:if(n.enablePan===!1)return;_e(T);break}}function pt(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(Ir),z(T),n.dispatchEvent(Ea))}function st(T){n.enabled===!1||n.enablePan===!1||$(T)}function b(T){switch(se(T),E.length){case 1:switch(n.touches.ONE){case En.ROTATE:if(n.enableRotate===!1)return;ie(),r=i.TOUCH_ROTATE;break;case En.PAN:if(n.enablePan===!1)return;U(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case En.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ce(),r=i.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ir)}function _(T){switch(se(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ue(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(T),n.update();break;default:r=i.NONE}}function k(T){n.enabled!==!1&&T.preventDefault()}function ee(T){E.push(T)}function te(T){delete L[T.pointerId];for(let R=0;R<E.length;R++)if(E[R].pointerId==T.pointerId){E.splice(R,1);return}}function se(T){let R=L[T.pointerId];R===void 0&&(R=new Se,L[T.pointerId]=R),R.set(T.pageX,T.pageY)}function ge(T){const R=T.pointerId===E[0].pointerId?E[1]:E[0];return L[R.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",$e),n.domElement.addEventListener("wheel",pt,{passive:!1}),this.update()}}const Pf=/^[og]\s*(.+)?/,Df=/^mtllib /,Rf=/^usemtl /,If=/^usemap /,Ta=/\s+/,Aa=new P,Fr=new P,La=new P,Ca=new P,Et=new P,Gi=new De;function Ff(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const s={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(s),s},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;Aa.fromArray(i,e),Fr.fromArray(i,t),La.fromArray(i,n),Et.subVectors(La,Fr),Ca.subVectors(Aa,Fr),Et.cross(Ca),Et.normalize(),r.push(Et.x,Et.y,Et.z),r.push(Et.x,Et.y,Et.z),r.push(Et.x,Et.y,Et.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,s,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),m=this.parseVertexIndex(n,u);if(this.addVertex(h,d,m),this.addColor(h,d,m),s!==void 0&&s!==""){const g=this.normals.length;h=this.parseNormalIndex(s,g),d=this.parseNormalIndex(c,g),m=this.parseNormalIndex(l,g),this.addNormal(h,d,m)}else this.addFaceNormal(h,d,m);if(i!==void 0&&i!==""){const g=this.uvs.length;h=this.parseUVIndex(i,g),d=this.parseUVIndex(r,g),m=this.parseUVIndex(o,g),this.addUV(h,d,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return a.startObject("",!1),a}class Nf extends _i{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new ro(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(s){try{t(r.parse(s))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Ff;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let s=0,c=n.length;s<c;s++){const l=n[s].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(Ta);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Gi.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(Gi.r,Gi.g,Gi.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=l.slice(1).trim().split(Ta),m=[];for(let p=0,f=d.length;p<f;p++){const x=d[p];if(x.length>0){const w=x.split("/");m.push(w)}}const g=m[0];for(let p=1,f=m.length-1;p<f;p++){const x=m[p],w=m[p+1];t.addFace(g[0],x[0],w[0],g[1],x[1],w[1],g[2],x[2],w[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let d=[];const m=[];if(l.indexOf("/")===-1)d=h;else for(let g=0,p=h.length;g<p;g++){const f=h[g].split("/");f[0]!==""&&d.push(f[0]),f[1]!==""&&m.push(f[1])}t.addLineGeometry(d,m)}else if(u==="p"){const d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((i=Pf.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Rf.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Df.test(l))t.materialLibraries.push(l.substring(7).trim());else if(If.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const d=i[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new ai;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let s=0,c=t.objects.length;s<c;s++){const l=t.objects[s],u=l.geometry,h=l.materials,d=u.type==="Line",m=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const p=new St;p.setAttribute("position",new tt(u.vertices,3)),u.normals.length>0&&p.setAttribute("normal",new tt(u.normals,3)),u.colors.length>0&&(g=!0,p.setAttribute("color",new tt(u.colors,3))),u.hasUVIndices===!0&&p.setAttribute("uv",new tt(u.uvs,2));const f=[];for(let w=0,M=h.length;w<M;w++){const S=h[w],E=S.name+"_"+S.smooth+"_"+g;let L=t.materials[E];if(this.materials!==null){if(L=this.materials.create(S.name),d&&L&&!(L instanceof li)){const D=new li;Kt.prototype.copy.call(D,L),D.color.copy(L.color),L=D}else if(m&&L&&!(L instanceof oi)){const D=new oi({size:10,sizeAttenuation:!1});Kt.prototype.copy.call(D,L),D.color.copy(L.color),D.map=L.map,L=D}}L===void 0&&(d?L=new li:m?L=new oi({size:1,sizeAttenuation:!1}):L=new no,L.name=S.name,L.flatShading=!S.smooth,L.vertexColors=g,t.materials[E]=L),f.push(L)}let x;if(f.length>1){for(let w=0,M=h.length;w<M;w++){const S=h[w];p.addGroup(S.groupStart,S.groupCount,w)}d?x=new xa(p,f):m?x=new Dr(p,f):x=new Rt(p,f)}else d?x=new xa(p,f[0]):m?x=new Dr(p,f[0]):x=new Rt(p,f[0]);x.name=l.name,r.add(x)}else if(t.vertices.length>0){const s=new oi({size:1,sizeAttenuation:!1}),c=new St;c.setAttribute("position",new tt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new tt(t.colors,3)),s.vertexColors=!0);const l=new Dr(c,s);r.add(l)}return r}}class Uf extends _i{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?Af.extractUrlBase(e):this.path,s=new ro(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let i={};const r=/\s+/,o={};for(let c=0;c<n.length;c++){let l=n[c];if(l=l.trim(),l.length===0||l.charAt(0)==="#")continue;const u=l.indexOf(" ");let h=u>=0?l.substring(0,u):l;h=h.toLowerCase();let d=u>=0?l.substring(u+1):"";if(d=d.trim(),h==="newmtl")i={name:d},o[d]=i;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const m=d.split(r,3);i[h]=[parseFloat(m[0]),parseFloat(m[1]),parseFloat(m[2])]}else i[h]=d}const s=new Of(this.resourcePath||t,this.materialOptions);return s.setCrossOrigin(this.crossOrigin),s.setManager(this.manager),s.setMaterials(o),s}}class Of{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:$t,this.wrap=this.options.wrap!==void 0?this.options.wrap:Vi}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const i=e[n],r={};t[n]=r;for(const o in i){let s=!0,c=i[o];const l=o.toLowerCase();switch(l){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(s=!1);break}s&&(r[l]=c)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function r(s,c){return typeof c!="string"||c===""?"":/^https?:\/\//i.test(c)?c:s+c}function o(s,c){if(i[s])return;const l=t.getTextureParams(c,i),u=t.loadTexture(r(t.baseUrl,l.url));u.repeat.copy(l.scale),u.offset.copy(l.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(s==="map"||s==="emissiveMap")&&(u.encoding=Ue),i[s]=u}for(const s in n){const c=n[s];let l;if(c!=="")switch(s.toLowerCase()){case"kd":i.color=new De().fromArray(c).convertSRGBToLinear();break;case"ks":i.specular=new De().fromArray(c).convertSRGBToLinear();break;case"ke":i.emissive=new De().fromArray(c).convertSRGBToLinear();break;case"map_kd":o("map",c);break;case"map_ks":o("specularMap",c);break;case"map_ke":o("emissiveMap",c);break;case"norm":o("normalMap",c);break;case"map_bump":case"bump":o("bumpMap",c);break;case"map_d":o("alphaMap",c),i.transparent=!0;break;case"ns":i.shininess=parseFloat(c);break;case"d":l=parseFloat(c),l<1&&(i.opacity=l,i.transparent=!0);break;case"tr":l=parseFloat(c),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(i.opacity=1-l,i.transparent=!0);break}}return this.materials[e]=new no(i),this.materials[e]}getTextureParams(e,t){const n={scale:new Se(1,1),offset:new Se(0,0)},i=e.split(/\s+/);let r;return r=i.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(i[r+1]),i.splice(r,2)),r=i.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),r=i.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),n.url=i.join(" ").trim(),n}loadTexture(e,t,n,i,r){const o=this.manager!==void 0?this.manager:io;let s=o.getHandler(e);s===null&&(s=new yf(o)),s.setCrossOrigin&&s.setCrossOrigin(this.crossOrigin);const c=s.load(e,n,i,r);return t!==void 0&&(c.mapping=t),c}}function ao(){lo.update(),ji.render(Zn,Jr),requestAnimationFrame(ao)}const Pa=new Nf,zf=new Uf,Bf=document.querySelector("#canvas"),Zn=new _f,Jr=new Mt(75,window.innerWidth/window.innerHeight,.1,1e3),ji=new $r({antialias:!0,canvas:Bf,alpha:!0});ji.setSize(window.innerWidth,window.innerHeight);Zn.add(new Tf(5263440));const Jt=new bf(16777215);Jt.angle=Math.PI/5;Jt.penumbra=.2;Jt.position.set(2,3,3);Jt.castShadow=!0;Jt.shadow.camera.near=3;Jt.shadow.camera.far=10;Jt.shadow.mapSize.width=1024;Jt.shadow.mapSize.height=1024;Zn.add(Jt);const It=new Ef(5591130,1);It.position.set(0,3,0);It.castShadow=!0;It.shadow.camera.near=1;It.shadow.camera.far=10;It.shadow.camera.right=1;It.shadow.camera.left=-1;It.shadow.camera.top=1;It.shadow.camera.bottom=-1;It.shadow.mapSize.width=1024;It.shadow.mapSize.height=1024;Zn.add(It);let oo=new rn(new P(0,0,0));Zn.add(new Lf(oo,2,16777215));zf.load("assets/toasty.mtl",a=>{a.preload();for(const e of Object.values(a.materials))e.side=Yt,e.clippingPlanes=[oo],e.clipShadows=!0,e.clipIntersection=!0;Pa.setMaterials(a),Pa.load("assets/toasty.obj",e=>{Zn.add(e),e.position.y=-1})});ji.localClippingEnabled=!0;const lo=new Cf(Jr,ji.domElement);Jr.position.z=5;lo.update();requestAnimationFrame(ao);
