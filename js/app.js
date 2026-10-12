(()=>{var Lh=0,bu=1,Dh=2;var Td=1,Nh=2,$n=3,xi=0,Wt=1,dn=2,vi=0,ba=1,pr=2,xu=3,yu=4,Uh=5,Bi=100,zh=101,Oh=102,Fh=103,Bh=104,kh=200,Hh=201,Vh=202,Gh=203,Jo=204,Ko=205,qh=206,Wh=207,Xh=208,Qh=209,$h=210,jh=211,Yh=212,Zh=213,Jh=214,el=0,tl=1,nl=2,Ma=3,il=4,al=5,sl=6,rl=7,_c=0,Kh=1,ef=2,bi=0,tf=1,nf=2,af=3,Mc=4,sf=5,rf=6,of=7;var Ad=300,Ea=301,Sa=302,ol=303,ll=304,$r=306,wa=1e3,Vi=1001,cl=1002,hn=1003,lf=1004;var Os=1005;var On=1006,vo=1007;var Gi=1008;var Jn=1009,Cd=1010,Rd=1011,us=1012,Ec=1013,qi=1014,Fn=1015,ys=1016,Sc=1017,wc=1018,Ta=1020,Pd=35902,Id=1021,Ld=1022,Cn=1023,Dd=1024,Nd=1025,xa=1026,Aa=1027,Tc=1028,Ac=1029,Ud=1030,Cc=1031;var Rc=1033,cr=33776,ur=33777,dr=33778,hr=33779,ul=35840,dl=35841,hl=35842,fl=35843,pl=36196,ml=37492,gl=37496,vl=37808,bl=37809,xl=37810,yl=37811,_l=37812,Ml=37813,El=37814,Sl=37815,wl=37816,Tl=37817,Al=37818,Cl=37819,Rl=37820,Pl=37821,fr=36492,Il=36494,Ll=36495,zd=36283,Dl=36284,Nl=36285,Ul=36286;var mr=2300,zl=2301,bo=2302,_u=2400,Mu=2401,Eu=2402;var cf=3200,uf=3201;var Pc=0,df=1,gi="",Vt="srgb",Na="srgb-linear",jr="linear",yt="srgb";var ta=7680;var Su=519,hf=512,ff=513,pf=514,Od=515,mf=516,gf=517,vf=518,bf=519,wu=35044;var Tu="300 es",Yn=2e3,gr=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let a=this._listeners[e];if(a!==void 0){let s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let a=i.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xo=Math.PI/180,vr=180/Math.PI;function Ua(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Gt(n,e,t){return Math.max(e,Math.min(t,n))}function xf(n,e){return(n%e+e)%e}function yo(n,e,t){return(1-t)*n+t*e}function Ya(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*a+e.x,this.y=s*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class n{constructor(e,t,i,a,s,o,r,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c)}set(e,t,i,a,s,o,r,l,c){let u=this.elements;return u[0]=e,u[1]=a,u[2]=r,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=a[0],m=a[3],f=a[6],S=a[1],y=a[4],b=a[7],R=a[2],w=a[5],C=a[8];return s[0]=o*v+r*S+l*R,s[3]=o*m+r*y+l*w,s[6]=o*f+r*b+l*C,s[1]=c*v+u*S+d*R,s[4]=c*m+u*y+d*w,s[7]=c*f+u*b+d*C,s[2]=h*v+p*S+g*R,s[5]=h*m+p*y+g*w,s[8]=h*f+p*b+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*r*c-i*s*u+i*r*l+a*s*c-a*o*l}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],d=u*o-r*c,h=r*l-u*s,p=c*s-o*l,g=t*d+i*h+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(a*c-u*i)*v,e[2]=(r*i-a*o)*v,e[3]=h*v,e[4]=(u*t-a*l)*v,e[5]=(a*s-r*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,o,r){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*r)+o+e,-a*c,a*l,-a*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(_o.makeScale(e,t)),this}rotate(e){return this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_o=new nt;function Fd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yf(){let n=br("canvas");return n.style.display="block",n}var Au={};function as(n){n in Au||(Au[n]=!0,console.warn(n))}function _f(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Mf(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ef(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ft={enabled:!0,workingColorSpace:Na,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(n.r=ya(n.r),n.g=ya(n.g),n.b=ya(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===gi?jr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ya(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cu=[.64,.33,.3,.6,.15,.06],Ru=[.2126,.7152,.0722],Pu=[.3127,.329],Iu=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft.define({[Na]:{primaries:Cu,whitePoint:Pu,transfer:jr,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:Ru,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:Cu,whitePoint:Pu,transfer:yt,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:Ru,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}});var na,Ol=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{na===void 0&&(na=br("canvas")),na.width=e.width,na.height=e.height;let i=na.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=na}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sf=0,xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?s.push(Mo(a[o].image)):s.push(Mo(a[o]))}else s=Mo(a);i.url=s}return t||(e.images[this.uuid]=i),i}};function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ol.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wf=0,Jt=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Vi,a=Vi,s=On,o=Gi,r=Cn,l=Jn,c=n.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Ua(),this.name="",this.source=new xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Ad;Jt.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,a=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(p+1)/2,R=(f+1)/2,w=(u+h)/4,C=(d+v)/4,I=(g+m)/4;return y>b&&y>R?y<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(y),a=w/i,s=C/i):b>R?b<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),i=w/a,s=I/a):R<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(R),i=C/s,a=I/s),this.set(i,a,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Jt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let r=0;r<o;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new xr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Fl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},yr=class extends Jt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bl=class extends Jt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,o,r){let l=i[a+0],c=i[a+1],u=i[a+2],d=i[a+3],h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(r===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==p||u!==g){let m=1-r,f=l*h+c*p+u*g+d*v,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let R=Math.sqrt(y),w=Math.atan2(R,f*S);m=Math.sin(m*w)/R,r=Math.sin(r*w)/R}let b=r*S;if(l=l*m+h*b,c=c*m+p*b,u=u*m+g*b,d=d*m+v*b,m===1-r){let R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,s,o){let r=i[a],l=i[a+1],c=i[a+2],u=i[a+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=r*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-r*p,e[t+2]=c*g+u*p+r*h-l*d,e[t+3]=u*g-r*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,a=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(i/2),u=r(a/2),d=r(s/2),h=l(i/2),p=l(a/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],a=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+r+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-a)*p}else if(i>r&&i>d){let p=2*Math.sqrt(1+i-r-d);this._w=(u-l)/p,this._x=.25*p,this._y=(a+o)/p,this._z=(s+c)/p}else if(r>d){let p=2*Math.sqrt(1+r-i-d);this._w=(s-c)/p,this._x=(a+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-r);this._w=(o-a)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,a=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*r+a*c-s*l,this._y=a*u+o*l+s*r-i*c,this._z=s*u+o*c+i*l-a*r,this._w=o*u-i*r-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,a=this._y,s=this._z,o=this._w,r=o*e._w+i*e._x+a*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=i,this._y=a,this._z=s,this;let l=1-r*r;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,r),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=a*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,a=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*a-r*i),u=2*(r*t-s*a),d=2*(s*i-o*t);return this.x=t+l*c+o*d-r*u,this.y=i+l*u+r*c-s*d,this.z=a+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,a=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=a*l-s*r,this.y=s*o-i*l,this.z=i*r-a*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eo=new L,Du=new _i,ei=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}let a=e.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),Bs.subVectors(this.max,Za),ia.subVectors(e.a,Za),aa.subVectors(e.b,Za),sa.subVectors(e.c,Za),ui.subVectors(aa,ia),di.subVectors(sa,aa),Li.subVectors(ia,sa);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Li.z,Li.y,ui.z,0,-ui.x,di.z,0,-di.x,Li.z,0,-Li.x,-ui.y,ui.x,0,-di.y,di.x,0,-Li.y,Li.x,0];return!So(t,ia,aa,sa,Bs)||(t=[1,0,0,0,1,0,0,0,1],!So(t,ia,aa,sa,Bs))?!1:(ks.crossVectors(ui,di),t=[ks.x,ks.y,ks.z],So(t,ia,aa,sa,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new L,new L,new L,new L,new L,new L,new L,new L],wn=new L,Fs=new ei,ia=new L,aa=new L,sa=new L,ui=new L,di=new L,Li=new L,Za=new L,Bs=new L,ks=new L,Di=new L;function So(n,e,t,i,a){for(let s=0,o=n.length-3;s<=o;s+=3){Di.fromArray(n,s);let r=a.x*Math.abs(Di.x)+a.y*Math.abs(Di.y)+a.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}var Tf=new ei,Ja=new L,wo=new L,Wi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tf.setFromPoints(e).getCenter(i);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);let t=Ja.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Ja,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(wo)),this.expandByPoint(Ja.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new L,To=new L,Hs=new L,hi=new L,Ao=new L,Vs=new L,Co=new L,kl=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){To.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(To);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Hs),r=hi.dot(this.direction),l=-hi.dot(Hs),c=hi.lengthSq(),u=Math.abs(1-o*o),d,h,p,g;if(u>0)if(d=o*l-r,h=o*r-l,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,p=d*(d+o*h+2*r)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+r)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+r)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+r)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+r)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+r)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(To).addScaledVector(Hs,h),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let i=qn.dot(this.direction),a=qn.dot(qn)-i*i,s=e.radius*e.radius;if(a>s)return null;let o=Math.sqrt(s-a),r=i-o,l=i+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,o,r,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>a||((s>i||isNaN(i))&&(i=s),(o<a||isNaN(a))&&(a=o),d>=0?(r=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(r=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||r>a)||((r>i||i!==i)&&(i=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,a,s){Ao.subVectors(t,e),Vs.subVectors(i,e),Co.crossVectors(Ao,Vs);let o=this.direction.dot(Co),r;if(o>0){if(a)return null;r=1}else if(o<0)r=-1,o=-o;else return null;hi.subVectors(this.origin,e);let l=r*this.direction.dot(Vs.crossVectors(hi,Vs));if(l<0)return null;let c=r*this.direction.dot(Ao.cross(hi));if(c<0||l+c>o)return null;let u=-r*hi.dot(Co);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class n{constructor(e,t,i,a,s,o,r,l,c,u,d,h,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c,u,d,h,p,g,v,m)}set(e,t,i,a,s,o,r,l,c,u,d,h,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=a,f[1]=s,f[5]=o,f[9]=r,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,a=1/ra.setFromMatrixColumn(e,0).length(),s=1/ra.setFromMatrixColumn(e,1).length(),o=1/ra.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,a=e.y,s=e.z,o=Math.cos(i),r=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*d,g=r*u,v=r*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-r*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h+v*r,t[4]=g*r-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-r,t[2]=p*r-g,t[6]=v+h*r,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h-v*r,t[4]=-o*d,t[8]=g+p*r,t[1]=p+g*r,t[5]=o*u,t[9]=v-h*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,g=r*u,v=r*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,g=r*l,v=r*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-r*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*l,p=o*c,g=r*l,v=r*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=r*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Cf)}lookAt(e,t,i){let a=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),fi.crossVectors(i,cn),fi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),fi.crossVectors(i,cn)),fi.normalize(),Gs.crossVectors(cn,fi),a[0]=fi.x,a[4]=Gs.x,a[8]=cn.x,a[1]=fi.y,a[5]=Gs.y,a[9]=cn.y,a[2]=fi.z,a[6]=Gs.z,a[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],y=i[7],b=i[11],R=i[15],w=a[0],C=a[4],I=a[8],_=a[12],x=a[1],A=a[5],B=a[9],z=a[13],q=a[2],Y=a[6],F=a[10],G=a[14],O=a[3],se=a[7],he=a[11],ve=a[15];return s[0]=o*w+r*x+l*q+c*O,s[4]=o*C+r*A+l*Y+c*se,s[8]=o*I+r*B+l*F+c*he,s[12]=o*_+r*z+l*G+c*ve,s[1]=u*w+d*x+h*q+p*O,s[5]=u*C+d*A+h*Y+p*se,s[9]=u*I+d*B+h*F+p*he,s[13]=u*_+d*z+h*G+p*ve,s[2]=g*w+v*x+m*q+f*O,s[6]=g*C+v*A+m*Y+f*se,s[10]=g*I+v*B+m*F+f*he,s[14]=g*_+v*z+m*G+f*ve,s[3]=S*w+y*x+b*q+R*O,s[7]=S*C+y*A+b*Y+R*se,s[11]=S*I+y*B+b*F+R*he,s[15]=S*_+y*z+b*G+R*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*l*d-a*c*d-s*r*h+i*c*h+a*r*p-i*l*p)+v*(+t*l*p-t*c*h+s*o*h-a*o*p+a*c*u-s*l*u)+m*(+t*c*d-t*r*p-s*o*d+i*o*p+s*r*u-i*c*u)+f*(-a*r*u-t*l*d+t*r*h+a*o*d-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=d*m*c-v*h*c+v*l*p-r*m*p-d*l*f+r*h*f,y=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,b=u*v*c-g*d*c+g*r*p-o*v*p-u*r*f+o*d*f,R=g*d*l-u*v*l-g*r*h+o*v*h+u*r*m-o*d*m,w=t*S+i*y+a*b+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=S*C,e[1]=(v*h*s-d*m*s-v*a*p+i*m*p+d*a*f-i*h*f)*C,e[2]=(r*m*s-v*l*s+v*a*c-i*m*c-r*a*f+i*l*f)*C,e[3]=(d*l*s-r*h*s-d*a*c+i*h*c+r*a*p-i*l*p)*C,e[4]=y*C,e[5]=(u*m*s-g*h*s+g*a*p-t*m*p-u*a*f+t*h*f)*C,e[6]=(g*l*s-o*m*s-g*a*c+t*m*c+o*a*f-t*l*f)*C,e[7]=(o*h*s-u*l*s+u*a*c-t*h*c-o*a*p+t*l*p)*C,e[8]=b*C,e[9]=(g*d*s-u*v*s-g*i*p+t*v*p+u*i*f-t*d*f)*C,e[10]=(o*v*s-g*r*s+g*i*c-t*v*c-o*i*f+t*r*f)*C,e[11]=(u*r*s-o*d*s-u*i*c+t*d*c+o*i*p-t*r*p)*C,e[12]=R*C,e[13]=(u*v*a-g*d*a+g*i*h-t*v*h-u*i*m+t*d*m)*C,e[14]=(g*r*a-o*v*a-g*i*l+t*v*l+o*i*m-t*r*m)*C,e[15]=(o*d*a-u*r*a+u*i*l-t*d*l-o*i*h+t*r*h)*C,this}scale(e){let t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),a=Math.sin(t),s=1-i,o=e.x,r=e.y,l=e.z,c=s*o,u=s*r;return this.set(c*o+i,c*r-a*l,c*l+a*r,0,c*r+a*l,u*r+i,u*l-a*o,0,c*l-a*r,u*l+a*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,o){return this.set(1,i,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){let a=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,u=o+o,d=r+r,h=s*c,p=s*u,g=s*d,v=o*u,m=o*d,f=r*d,S=l*c,y=l*u,b=l*d,R=i.x,w=i.y,C=i.z;return a[0]=(1-(v+f))*R,a[1]=(p+b)*R,a[2]=(g-y)*R,a[3]=0,a[4]=(p-b)*w,a[5]=(1-(h+f))*w,a[6]=(m+S)*w,a[7]=0,a[8]=(g+y)*C,a[9]=(m-S)*C,a[10]=(1-(h+v))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){let a=this.elements,s=ra.set(a[0],a[1],a[2]).length(),o=ra.set(a[4],a[5],a[6]).length(),r=ra.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Tn.copy(this);let c=1/s,u=1/o,d=1/r;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,t.setFromRotationMatrix(Tn),i.x=s,i.y=o,i.z=r,this}makePerspective(e,t,i,a,s,o,r=Yn){let l=this.elements,c=2*s/(t-e),u=2*s/(i-a),d=(t+e)/(t-e),h=(i+a)/(i-a),p,g;if(r===Yn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(r===gr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,o,r=Yn){let l=this.elements,c=1/(t-e),u=1/(i-a),d=1/(o-s),h=(t+e)*c,p=(i+a)*u,g,v;if(r===Yn)g=(o+s)*d,v=-2*d;else if(r===gr)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ra=new L,Tn=new Mt,Af=new L(0,0,0),Cf=new L(1,1,1),fi=new L,Gs=new L,cn=new L,Nu=new Mt,Uu=new _i,Rn=class n{constructor(e=0,t=0,i=0,a=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let a=e.elements,s=a[0],o=a[4],r=a[8],l=a[1],c=a[5],u=a[9],d=a[2],h=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Gt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rf=0,zu=new L,oa=new _i,Wn=new Mt,qs=new L,Ka=new L,Pf=new L,If=new _i,Ou=new L(1,0,0),Fu=new L(0,1,0),Bu=new L(0,0,1),ku={type:"added"},Lf={type:"removed"},la={type:"childadded",child:null},Ro={type:"childremoved",child:null},Nt=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Rn,i=new _i,a=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Mt},normalMatrix:{value:new nt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qs.copy(e):qs.set(e,t,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ka,qs,this.up):Wn.lookAt(qs,Ka,this.up),this.quaternion.setFromRotationMatrix(Wn),a&&(Wn.extractRotation(a.matrixWorld),oa.setFromRotationMatrix(Wn),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),la.child=e,this.dispatchEvent(la),la.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),la.child=e,this.dispatchEvent(la),la.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,If,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));a.material=r}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){let l=this.animations[r];a.animations.push(s(e.animations,l))}}if(t){let r=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function o(r){let l=[];for(let c in r){let u=r[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};Nt.DEFAULT_UP=new L(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new L,Xn=new L,Po=new L,Qn=new L,ca=new L,ua=new L,Hu=new L,Io=new L,Lo=new L,Do=new L,No=new _t,Uo=new _t,zo=new _t,ki=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),An.subVectors(e,t),a.cross(An);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){An.subVectors(a,t),Xn.subVectors(i,t),Po.subVectors(e,t);let o=An.dot(An),r=An.dot(Xn),l=An.dot(Po),c=Xn.dot(Xn),u=Xn.dot(Po),d=o*c-r*r;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(c*l-r*u)*h,g=(o*u-r*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,a,s,o,r,l){return this.getBarycoord(e,t,i,a,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(r,Qn.z),l)}static getInterpolatedAttribute(e,t,i,a,s,o){return No.setScalar(0),Uo.setScalar(0),zo.setScalar(0),No.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,i),zo.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(No,s.x),o.addScaledVector(Uo,s.y),o.addScaledVector(zo,s.z),o}static isFrontFacing(e,t,i,a){return An.subVectors(i,t),Xn.subVectors(e,t),An.cross(Xn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),An.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,a=this.b,s=this.c,o,r;ca.subVectors(a,i),ua.subVectors(s,i),Io.subVectors(e,i);let l=ca.dot(Io),c=ua.dot(Io);if(l<=0&&c<=0)return t.copy(i);Lo.subVectors(e,a);let u=ca.dot(Lo),d=ua.dot(Lo);if(u>=0&&d<=u)return t.copy(a);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ca,o);Do.subVectors(e,s);let p=ca.dot(Do),g=ua.dot(Do);if(g>=0&&p<=g)return t.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(i).addScaledVector(ua,r);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Hu.subVectors(s,a),r=(d-u)/(d-u+(p-g)),t.copy(a).addScaledVector(Hu,r);let f=1/(m+v+h);return o=v*f,r=h*f,t.copy(i).addScaledVector(ca,o).addScaledVector(ua,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=ft.workingColorSpace){if(e=xf(e,1),t=Gt(t,0,1),i=Gt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Oo(o,s,e+1/3),this.g=Oo(o,s,e),this.b=Oo(o,s,e-1/3)}return ft.toWorkingColorSpace(this,a),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=Bd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ft.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Gt(Zt.r*255,0,255))*65536+Math.round(Gt(Zt.g*255,0,255))*256+Math.round(Gt(Zt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Zt.copy(this),t);let i=Zt.r,a=Zt.g,s=Zt.b,o=Math.max(i,a,s),r=Math.min(i,a,s),l,c,u=(r+o)/2;if(r===o)l=0,c=0;else{let d=o-r;switch(c=u<=.5?d/(o+r):d/(2-o-r),o){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Vt){ft.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,i=Zt.g,a=Zt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Ws);let i=yo(pi.h,Ws.h,t),a=yo(pi.s,Ws.s,t),s=yo(pi.l,Ws.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new it;it.NAMES=Bd;var Df=0,Mi=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Ua(),this.name="",this.blending=ba,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Ko,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Ko&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ta&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ta&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ta&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let o=[];for(let r in s){let l=s[r];delete l.metadata,o.push(l)}return o}if(t){let s=a(e.textures),o=a(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wt=class extends Mi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new L,Xs=new ge,fn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wu,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ya(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),a=on(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),a=on(a,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wu&&(e.usage=this.usage),e}};var Mr=class extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Er=class extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Nf=0,vn=new Mt,Fo=new Nt,da=new L,un=new ei,es=new ei,Ft=new L,nn=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?Er:Mr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let a=0,s=e.length;a<s;a++){let o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{for(let i=0,a=t.count;i<a;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let r=t[s];es.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(un.min,es.min),un.expandByPoint(Ft),Ft.addVectors(un.max,es.max),un.expandByPoint(Ft)):(un.expandByPoint(es.min),un.expandByPoint(es.max))}un.getCenter(i);let a=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){let r=t[s],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)Ft.fromBufferAttribute(r,c),l&&(da.fromBufferAttribute(e,c),Ft.add(da)),a=Math.max(a,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),r=[],l=[];for(let I=0;I<i.count;I++)r[I]=new L,l[I]=new L;let c=new L,u=new L,d=new L,h=new ge,p=new ge,g=new ge,v=new L,m=new L;function f(I,_,x){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,_),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,I),p.fromBufferAttribute(s,_),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),p.sub(h),g.sub(h);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),r[I].add(v),r[_].add(v),r[x].add(v),l[I].add(m),l[_].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,_=S.length;I<_;++I){let x=S[I],A=x.start,B=x.count;for(let z=A,q=A+B;z<q;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new L,b=new L,R=new L,w=new L;function C(I){R.fromBufferAttribute(a,I),w.copy(R);let _=r[I];y.copy(_),y.sub(R.multiplyScalar(R.dot(_))).normalize(),b.crossVectors(w,_);let A=b.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,A)}for(let I=0,_=S.length;I<_;++I){let x=S[I],A=x.start,B=x.count;for(let z=A,q=A+B;z<q;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let a=new L,s=new L,o=new L,r=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(a,s),u.cross(d),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),r.add(u),l.add(u),c.add(u),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)a.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(a,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(r,l){let c=r.array,u=r.itemSize,d=r.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?p=l[v]*r.data.stride+r.offset:p=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new fn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,a=this.attributes;for(let r in a){let l=a[r],c=e(l,i);t.setAttribute(r,c)}let s=this.morphAttributes;for(let r in s){let l=[],c=s[r];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let r=0,l=o.length;r<l;r++){let c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(a[l]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let a=e.attributes;for(let c in a){let u=a[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new Mt,Ni=new kl,Qs=new Wi,Gu=new L,$s=new L,js=new L,Ys=new L,Bo=new L,Zs=new L,qu=new L,Js=new L,_e=class extends Nt{constructor(e=new nn,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){let r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);let r=this.morphTargetInfluences;if(s&&r){Zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=r[l],d=s[l];u!==0&&(Bo.fromBufferAttribute(d,e),o?Zs.addScaledVector(Bo,u):Zs.addScaledVector(Bo.sub(t),u))}t.add(Zs)}return t}raycast(e,t){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),Ni.copy(e.ray).recast(e.near),!(Qs.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Qs,Gu)===null||Ni.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(Vu.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let a,s=this.geometry,o=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,R=y;b<R;b+=3){let w=r.getX(b),C=r.getX(b+1),I=r.getX(b+2);a=Ks(this,f,e,i,c,u,d,w,C,I),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let g=Math.max(0,p.start),v=Math.min(r.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let S=r.getX(m),y=r.getX(m+1),b=r.getX(m+2);a=Ks(this,o,e,i,c,u,d,S,y,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,R=y;b<R;b+=3){let w=b,C=b+1,I=b+2;a=Ks(this,f,e,i,c,u,d,w,C,I),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let S=m,y=m+1,b=m+2;a=Ks(this,o,e,i,c,u,d,S,y,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};function Uf(n,e,t,i,a,s,o,r){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,a,!0,r):l=i.intersectTriangle(a,s,o,e.side===xi,r),l===null)return null;Js.copy(r),Js.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:n}}function Ks(n,e,t,i,a,s,o,r,l,c){n.getVertexPosition(r,$s),n.getVertexPosition(l,js),n.getVertexPosition(c,Ys);let u=Uf(n,e,t,i,$s,js,Ys,qu);if(u){let d=new L;ki.getBarycoord(qu,$s,js,Ys,d),a&&(u.uv=ki.getInterpolatedAttribute(a,r,l,c,d,new ge)),s&&(u.uv1=ki.getInterpolatedAttribute(s,r,l,c,d,new ge)),o&&(u.normal=ki.getInterpolatedAttribute(o,r,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:r,b:l,c,normal:new L,materialIndex:0};ki.getNormal($s,js,Ys,h.normal),u.face=h,u.barycoord=d}return u}var gt=class n extends nn{constructor(e=1,t=1,i=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:o};let r=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,a,o,2),g("x","z","y",1,-1,e,i,-t,a,o,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2));function g(v,m,f,S,y,b,R,w,C,I,_){let x=b/C,A=R/I,B=b/2,z=R/2,q=w/2,Y=C+1,F=I+1,G=0,O=0,se=new L;for(let he=0;he<F;he++){let ve=he*A-z;for(let Ce=0;Ce<Y;Ce++){let Xe=Ce*x-B;se[v]=Xe*S,se[m]=ve*y,se[f]=q,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[f]=w>0?1:-1,u.push(se.x,se.y,se.z),d.push(Ce/C),d.push(1-he/I),G+=1}}for(let he=0;he<I;he++)for(let ve=0;ve<C;ve++){let Ce=h+ve+Y*he,Xe=h+ve+Y*(he+1),Z=h+(ve+1)+Y*(he+1),re=h+(ve+1)+Y*he;l.push(Ce,Xe,re),l.push(Xe,Z,re),O+=6}r.addGroup(p,O,_),p+=O,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ca(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=Ca(n[t]);for(let a in i)e[a]=i[a]}return e}function zf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Of={clone:Ca,merge:tn},Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Mi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Sr=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new L,Wu=new ge,Xu=new ge,qt=class extends Sr{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Xu),t.subVectors(Xu,Wu)}setViewOffset(e,t,i,a,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*a/l,t-=o.offsetY*i/c,a*=o.width/l,i*=o.height/c}let r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ha=-90,fa=1,Hl=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new qt(ha,fa,e,t);a.layers=this.layers,this.add(a);let s=new qt(ha,fa,e,t);s.layers=this.layers,this.add(s);let o=new qt(ha,fa,e,t);o.layers=this.layers,this.add(o);let r=new qt(ha,fa,e,t);r.layers=this.layers,this.add(r);let l=new qt(ha,fa,e,t);l.layers=this.layers,this.add(l);let c=new qt(ha,fa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,a,s,o,r,l]=t;for(let c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,r,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,o),e.setRenderTarget(i,2,a),e.render(t,r),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},wr=class extends Jt{constructor(e,t,i,a,s,o,r,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ea,super(e,t,i,a,s,o,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vl=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new wr(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new gt(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:Ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:vi});s.uniforms.tEquirect.value=t;let o=new _e(a,s),r=t.minFilter;return t.minFilter===Gi&&(t.minFilter=On),new Hl(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,a){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(s)}},ko=new L,kf=new L,Hf=new nt,jn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let a=ko.subVectors(i,t).cross(kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ko),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Hf.getNormalMatrix(e),a=this.coplanarPoint(ko).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new Wi,er=new L,ds=class{constructor(e=new jn,t=new jn,i=new jn,a=new jn,s=new jn,o=new jn){this.planes=[e,t,i,a,s,o]}set(e,t,i,a,s,o){let r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(a),r[4].copy(s),r[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn){let i=this.planes,a=e.elements,s=a[0],o=a[1],r=a[2],l=a[3],c=a[4],u=a[5],d=a[6],h=a[7],p=a[8],g=a[9],v=a[10],m=a[11],f=a[12],S=a[13],y=a[14],b=a[15];if(i[0].setComponents(l-s,h-c,m-p,b-f).normalize(),i[1].setComponents(l+s,h+c,m+p,b+f).normalize(),i[2].setComponents(l+o,h+u,m+g,b+S).normalize(),i[3].setComponents(l-o,h-u,m-g,b-S).normalize(),i[4].setComponents(l-r,h-d,m-v,b-y).normalize(),t===Yn)i[5].setComponents(l+r,h+d,m+v,b+y).normalize();else if(t===gr)i[5].setComponents(r,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let a=t[i];if(er.x=a.normal.x>0?e.max.x:e.min.x,er.y=a.normal.y>0?e.max.y:e.min.y,er.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hd(){let n=null,e=!1,t=null,i=null;function a(s,o){t(s,o),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vf(n){let e=new WeakMap;function t(r,l){let c=r.array,u=r.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),r.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:d}}function i(r,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,r),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);let l=e.get(r);l&&(n.deleteBuffer(l.buffer),e.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){let u=e.get(r);(!u||u.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}let c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:a,remove:s,update:o}}var an=class n extends nn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};let s=e/2,o=t/2,r=Math.floor(i),l=Math.floor(a),c=r+1,u=l+1,d=e/r,h=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let S=f*h-o;for(let y=0;y<c;y++){let b=y*d-s;g.push(b,-S,0),v.push(0,0,1),m.push(y/r),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<r;S++){let y=S+c*f,b=S+c*(f+1),R=S+1+c*(f+1),w=S+1+c*f;p.push(y,b,w),p.push(b,R,w)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ym=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Zm=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,o0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,d0=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,f0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,m0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,x0=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:Gf,alphahash_pars_fragment:qf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:Qf,alphatest_pars_fragment:$f,aomap_fragment:jf,aomap_pars_fragment:Yf,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Kf,beginnormal_vertex:ep,bsdfs:tp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:ap,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:up,color_vertex:dp,common:hp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:vp,emissivemap_pars_fragment:bp,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:_p,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Ep,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Up,envmap_vertex:wp,fog_vertex:Tp,fog_pars_vertex:Ap,fog_fragment:Cp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Np,lights_toon_fragment:zp,lights_toon_pars_fragment:Op,lights_phong_fragment:Fp,lights_phong_pars_fragment:Bp,lights_physical_fragment:kp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:qp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:$p,map_fragment:jp,map_pars_fragment:Yp,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:am,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:om,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:vm,premultiplied_alpha_fragment:bm,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:_m,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:wm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Cm,skinning_pars_vertex:Rm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Nm,tonemapping_pars_fragment:Um,transmission_fragment:zm,transmission_pars_fragment:Om,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:km,worldpos_vertex:Hm,background_vert:Vm,background_frag:Gm,backgroundCube_vert:qm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:Qm,depth_vert:$m,depth_frag:jm,distanceRGBA_vert:Ym,distanceRGBA_frag:Zm,equirect_vert:Jm,equirect_frag:Km,linedashed_vert:e0,linedashed_frag:t0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:a0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:o0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:u0,meshphong_frag:d0,meshphysical_vert:h0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:v0,shadow_vert:b0,shadow_frag:x0,sprite_vert:y0,sprite_frag:_0},ye={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},zn={basic:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:tn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:tn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:tn([ye.points,ye.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:tn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:tn([ye.common,ye.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:tn([ye.sprite,ye.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:tn([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:tn([ye.lights,ye.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};zn.physical={uniforms:tn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var tr={r:0,b:0,g:0},zi=new Rn,M0=new Mt;function E0(n,e,t,i,a,s,o){let r=new it(0),l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function v(S){let y=!1,b=g(S);b===null?f(r,l):b&&b.isColor&&(f(b,1),y=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,y){let b=g(y);b&&(b.isCubeTexture||b.mapping===$r)?(u===void 0&&(u=new _e(new gt(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ca(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),zi.copy(y.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(zi)),u.material.toneMapped=ft.getTransfer(b.colorSpace)!==yt,(d!==b||h!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new _e(new an(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ca(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ft.getTransfer(b.colorSpace)!==yt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,y){S.getRGB(tr,kd(n)),i.buffers.color.setClear(tr.r,tr.g,tr.b,y,o)}return{getClearColor:function(){return r},setClearColor:function(S,y=1){r.set(S),l=y,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(r,l)},render:v,addToRenderList:m}}function S0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=h(null),s=a,o=!1;function r(x,A,B,z,q){let Y=!1,F=d(z,B,A);s!==F&&(s=F,c(s.object)),Y=p(x,z,B,q),Y&&g(x,z,B,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,b(x,A,B,z),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,A,B){let z=B.wireframe===!0,q=i[x.id];q===void 0&&(q={},i[x.id]=q);let Y=q[A.id];Y===void 0&&(Y={},q[A.id]=Y);let F=Y[z];return F===void 0&&(F=h(l()),Y[z]=F),F}function h(x){let A=[],B=[],z=[];for(let q=0;q<t;q++)A[q]=0,B[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:B,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,A,B,z){let q=s.attributes,Y=A.attributes,F=0,G=B.getAttributes();for(let O in G)if(G[O].location>=0){let he=q[O],ve=Y[O];if(ve===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;F++}return s.attributesNum!==F||s.index!==z}function g(x,A,B,z){let q={},Y=A.attributes,F=0,G=B.getAttributes();for(let O in G)if(G[O].location>=0){let he=Y[O];he===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));let ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),q[O]=ve,F++}s.attributes=q,s.attributesNum=F,s.index=z}function v(){let x=s.newAttributes;for(let A=0,B=x.length;A<B;A++)x[A]=0}function m(x){f(x,0)}function f(x,A){let B=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;B[x]=1,z[x]===0&&(n.enableVertexAttribArray(x),z[x]=1),q[x]!==A&&(n.vertexAttribDivisor(x,A),q[x]=A)}function S(){let x=s.newAttributes,A=s.enabledAttributes;for(let B=0,z=A.length;B<z;B++)A[B]!==x[B]&&(n.disableVertexAttribArray(B),A[B]=0)}function y(x,A,B,z,q,Y,F){F===!0?n.vertexAttribIPointer(x,A,B,q,Y):n.vertexAttribPointer(x,A,B,z,q,Y)}function b(x,A,B,z){v();let q=z.attributes,Y=B.getAttributes(),F=A.defaultAttributeValues;for(let G in Y){let O=Y[G];if(O.location>=0){let se=q[G];if(se===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let he=se.normalized,ve=se.itemSize,Ce=e.get(se);if(Ce===void 0)continue;let Xe=Ce.buffer,Z=Ce.type,re=Ce.bytesPerElement,be=Z===n.INT||Z===n.UNSIGNED_INT||se.gpuType===Ec;if(se.isInterleavedBufferAttribute){let de=se.data,Be=de.stride,Le=se.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<O.locationSize;ke++)f(O.location+ke,de.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<O.locationSize;ke++)m(O.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ke=0;ke<O.locationSize;ke++)y(O.location+ke,ve/O.locationSize,Z,he,Be*re,(Le+ve/O.locationSize*ke)*re,be)}else{if(se.isInstancedBufferAttribute){for(let de=0;de<O.locationSize;de++)f(O.location+de,se.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let de=0;de<O.locationSize;de++)m(O.location+de);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let de=0;de<O.locationSize;de++)y(O.location+de,ve/O.locationSize,Z,he,ve*re,ve/O.locationSize*de*re,be)}}else if(F!==void 0){let he=F[G];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(O.location,he);break;case 3:n.vertexAttrib3fv(O.location,he);break;case 4:n.vertexAttrib4fv(O.location,he);break;default:n.vertexAttrib1fv(O.location,he)}}}}S()}function R(){I();for(let x in i){let A=i[x];for(let B in A){let z=A[B];for(let q in z)u(z[q].object),delete z[q];delete A[B]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;let A=i[x.id];for(let B in A){let z=A[B];for(let q in z)u(z[q].object),delete z[q];delete A[B]}delete i[x.id]}function C(x){for(let A in i){let B=i[A];if(B[x.id]===void 0)continue;let z=B[x.id];for(let q in z)u(z[q].object),delete z[q];delete B[x.id]}}function I(){_(),o=!0,s!==a&&(s=a,c(s.object))}function _(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:I,resetDefaultState:_,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function w0(n,e,t){let i;function a(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function r(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=a,this.render=s,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function T0(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(C){return!(C!==Cn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(C){let I=C===ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!I)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:R,maxSamples:w}}function A0(n){let e=this,t=null,i=0,a=!1,s=!1,o=new jn,r=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||a;return a=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!a||g===null||g.length===0||s&&!m)s?u(null):c();else{let S=s?0:i,y=S*4,b=f.clippingState||null;l.value=b,b=u(g,h,y,p);for(let R=0;R!==y;++R)b[R]=t[R];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,S=h.matrixWorldInverse;r.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,b=p;y!==v;++y,b+=4)o.copy(d[y]).applyMatrix4(S,r),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function C0(n){let e=new WeakMap;function t(o,r){return r===ol?o.mapping=Ea:r===ll&&(o.mapping=Sa),o}function i(o){if(o&&o.isTexture){let r=o.mapping;if(r===ol||r===ll)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",a),t(c.texture,o.mapping)}else return null}}return o}function a(o){let r=o.target;r.removeEventListener("dispose",a);let l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Tr=class extends Sr{constructor(e=-1,t=1,i=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-e,o=i+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ga=4,Qu=[.125,.215,.35,.446,.526,.582],Hi=20,Ho=new Tr,$u=new it,Vo=null,Go=0,qo=0,Wo=!1,Fi=(1+Math.sqrt(5))/2,pa=1/Fi,ju=[new L(-Fi,pa,0),new L(Fi,pa,0),new L(-pa,0,Fi),new L(pa,0,Fi),new L(0,Fi,-pa),new L(0,Fi,pa),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,Go,qo),this._renderer.xr.enabled=Wo,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ea||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:ys,format:Cn,colorSpace:Na,depthBuffer:!1},a=Yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R0(s)),this._blurMaterial=P0(s,e,t)}return a}_compileMaterial(e){let t=new _e(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,a){let r=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor($u),u.toneMapping=bi,u.autoClear=!1;let p=new wt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new _e(new gt,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy($u),v=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(r.up.set(0,l[f],0),r.lookAt(c[f],0,0)):S===1?(r.up.set(0,0,l[f]),r.lookAt(0,c[f],0)):(r.up.set(0,l[f],0),r.lookAt(0,0,c[f]));let y=this._cubeSize;nr(a,S*y,f>2?y:0,y,y),u.setRenderTarget(a),v&&u.render(g,r),u.render(e,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,a=e.mapping===Ea||e.mapping===Sa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let s=a?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;let l=this._cubeSize;nr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ho)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let a=this._lodPlanes.length;for(let s=1;s<a;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=ju[(a-s-1)%ju.length];this._blur(e,s-1,s,o,r)}t.autoClear=i}_blur(e,t,i,a,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",s),this._halfBlur(o,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,o,r){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new _e(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Hi;m>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let f=[],S=0;for(let C=0;C<Hi;++C){let I=C/v,_=Math.exp(-I*I/2);f.push(_),C===0?S+=_:C<m&&(S+=2*_)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",r&&(h.poleAxis.value=r);let{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;let b=this._sizeLods[a],R=3*b*(a>y-ga?a-y+ga:0),w=4*(this._cubeSize-b);nr(t,R,w,3*b,2*b),l.setRenderTarget(t),l.render(d,Ho)}};function R0(n){let e=[],t=[],i=[],a=n,s=n-ga+1+Qu.length;for(let o=0;o<s;o++){let r=Math.pow(2,a);t.push(r);let l=1/r;o>n-ga?l=Qu[o-n+ga-1]:o===0&&(l=0),i.push(l);let c=1/(r-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*p),y=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,I=w>2?0:-1,_=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];S.set(_,v*g*w),y.set(h,m*g*w);let x=[w,w,w,w,w,w];b.set(x,f*g*w)}let R=new nn;R.setAttribute("position",new fn(S,v)),R.setAttribute("uv",new fn(y,m)),R.setAttribute("faceIndex",new fn(b,f)),e.push(R),a>ga&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yu(n,e,t){let i=new Kn(n,e,t);return i.texture.mapping=$r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function P0(n,e,t){let i=new Float32Array(Hi),a=new L(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Zu(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ju(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function I0(n){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){let l=r.mapping,c=l===ol||l===ll,u=l===Ea||l===Sa;if(c||u){let d=e.get(r),h=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==h)return t===null&&(t=new Ar(n)),d=c?t.fromEquirectangular(r,d):t.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),d.texture;if(d!==void 0)return d.texture;{let p=r.image;return c&&p&&p.height>0||u&&p&&a(p)?(t===null&&(t=new Ar(n)),d=c?t.fromEquirectangular(r):t.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),r.addEventListener("dispose",s),d.texture):null}}}return r}function a(r){let l=0,c=6;for(let u=0;u<c;u++)r[u]!==void 0&&l++;return l===c}function s(r){let l=r.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function L0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let a=t(i);return a===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function D0(n,e,t,i){let a={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete a[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function r(d,h){return a[h.id]===!0||(h.addEventListener("dispose",o),a[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(d){let h=[],p=d.index,g=d.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let y=0,b=S.length;y<b;y+=3){let R=S[y+0],w=S[y+1],C=S[y+2];h.push(R,w,w,C,C,R)}}else if(g!==void 0){let S=g.array;v=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){let R=y+0,w=y+1,C=y+2;h.push(R,w,w,C,C,R)}}else return;let m=new(Fd(h)?Er:Mr)(h,1);m.version=v;let f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:u}}function N0(n,e,t){let i;function a(h){i=h}let s,o;function r(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(h,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*v[S];t.update(f,i,1)}}this.setMode=a,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function U0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,r){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=r*(s/3);break;case n.LINES:t.lines+=r*(s/2);break;case n.LINE_STRIP:t.lines+=r*(s-1);break;case n.LINE_LOOP:t.lines+=r*s;break;case n.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function z0(n,e,t){let i=new WeakMap,a=new _t;function s(o,r,l){let c=o.morphTargetInfluences,u=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(r);if(h===void 0||h.count!==d){let _=function(){C.dispose(),i.delete(r),r.removeEventListener("dispose",_)};h!==void 0&&h.texture.dispose();let p=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,v=r.morphAttributes.color!==void 0,m=r.morphAttributes.position||[],f=r.morphAttributes.normal||[],S=r.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let b=r.attributes.position.count*y,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*R*4*d),C=new yr(w,b,R,d);C.type=Fn,C.needsUpdate=!0;let I=y*4;for(let x=0;x<d;x++){let A=m[x],B=f[x],z=S[x],q=b*R*4*x;for(let Y=0;Y<A.count;Y++){let F=Y*I;p===!0&&(a.fromBufferAttribute(A,Y),w[q+F+0]=a.x,w[q+F+1]=a.y,w[q+F+2]=a.z,w[q+F+3]=0),g===!0&&(a.fromBufferAttribute(B,Y),w[q+F+4]=a.x,w[q+F+5]=a.y,w[q+F+6]=a.z,w[q+F+7]=0),v===!0&&(a.fromBufferAttribute(z,Y),w[q+F+8]=a.x,w[q+F+9]=a.y,w[q+F+10]=a.z,w[q+F+11]=z.itemSize===4?a.w:1)}}h={count:d,texture:C,size:new ge(b,R)},i.set(r,h),r.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=r.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function O0(n,e,t,i){let a=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return d}function o(){a=new WeakMap}function r(l){let c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Cr=class extends Jt{constructor(e,t,i,a,s,o,r,l,c,u=xa){if(u!==xa&&u!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xa&&(i=qi),i===void 0&&u===Aa&&(i=Ta),super(null,a,s,o,r,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vd=new Jt,Ku=new Cr(1,1),Gd=new yr,qd=new Bl,Wd=new wr,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),ad=new Float32Array(4);function za(n,e,t){let i=n[0];if(i<=0||i>0)return n;let a=e*t,s=ed[a];if(s===void 0&&(s=new Float32Array(a),ed[a]=s),e!==0){i.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,n[o].toArray(s,r)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yr(n,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function F0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function B0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function k0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function H0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function V0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ut(t,i))return;ad.set(i),n.uniformMatrix2fv(this.addr,!1,ad),zt(t,i)}}function G0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ut(t,i))return;id.set(i),n.uniformMatrix3fv(this.addr,!1,id),zt(t,i)}}function q0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ut(t,i))return;nd.set(i),n.uniformMatrix4fv(this.addr,!1,nd),zt(t,i)}}function W0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function X0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function Q0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function $0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function j0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Y0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function Z0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function J0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function K0(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(Ku.compareFunction=Od,s=Ku):s=Vd,t.setTexture2D(e||s,a)}function eg(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||qd,a)}function tg(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Wd,a)}function ng(n,e,t){let i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Gd,a)}function ig(n){switch(n){case 5126:return F0;case 35664:return B0;case 35665:return k0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return q0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return Q0;case 35669:case 35673:return $0;case 5125:return j0;case 36294:return Y0;case 36295:return Z0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function ag(n,e){n.uniform1fv(this.addr,e)}function sg(n,e){let t=za(e,this.size,2);n.uniform2fv(this.addr,t)}function rg(n,e){let t=za(e,this.size,3);n.uniform3fv(this.addr,t)}function og(n,e){let t=za(e,this.size,4);n.uniform4fv(this.addr,t)}function lg(n,e){let t=za(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cg(n,e){let t=za(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ug(n,e){let t=za(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dg(n,e){n.uniform1iv(this.addr,e)}function hg(n,e){n.uniform2iv(this.addr,e)}function fg(n,e){n.uniform3iv(this.addr,e)}function pg(n,e){n.uniform4iv(this.addr,e)}function mg(n,e){n.uniform1uiv(this.addr,e)}function gg(n,e){n.uniform2uiv(this.addr,e)}function vg(n,e){n.uniform3uiv(this.addr,e)}function bg(n,e){n.uniform4uiv(this.addr,e)}function xg(n,e,t){let i=this.cache,a=e.length,s=Yr(t,a);Ut(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||Vd,s[o])}function yg(n,e,t){let i=this.cache,a=e.length,s=Yr(t,a);Ut(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||qd,s[o])}function _g(n,e,t){let i=this.cache,a=e.length,s=Yr(t,a);Ut(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||Wd,s[o])}function Mg(n,e,t){let i=this.cache,a=e.length,s=Yr(t,a);Ut(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||Gd,s[o])}function Eg(n){switch(n){case 5126:return ag;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return hg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return vg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return Mg}}var Gl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}},ql=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eg(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let a=this.seq;for(let s=0,o=a.length;s!==o;++s){let r=a[s];r.setValue(e,t[r.id],i)}}},Xo=/(\w+)(\])?(\[|\.)?/g;function sd(n,e){n.seq.push(e),n.map[e.id]=e}function Sg(n,e,t){let i=n.name,a=i.length;for(Xo.lastIndex=0;;){let s=Xo.exec(i),o=Xo.lastIndex,r=s[1],l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){sd(t,c===void 0?new Gl(r,n,e):new ql(r,n,e));break}else{let d=t.map[r];d===void 0&&(d=new Wl(r),sd(t,d)),t=d}}}var _a=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);Sg(s,o,this)}}setValue(e,t,i,a){let s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){let a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,o=t.length;s!==o;++s){let r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){let i=[];for(let a=0,s=e.length;a!==s;++a){let o=e[a];o.id in t&&i.push(o)}return i}};function rd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var wg=37297,Tg=0;function Ag(n,e){let t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){let r=o+1;i.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return i.join(`
`)}var od=new nt;function Cg(n){ft._getMatrix(od,ft.workingColorSpace,n);let e=`mat3( ${od.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case jr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ld(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Ag(n.getShaderSource(e),o)}else return a}function Rg(n,e){let t=Cg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pg(n,e){let t;switch(e){case tf:t="Linear";break;case nf:t="Reinhard";break;case af:t="Cineon";break;case Mc:t="ACESFilmic";break;case rf:t="AgX";break;case of:t="Neutral";break;case sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ir=new L;function Ig(){ft.getLuminanceCoefficients(ir);let n=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Dg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ng(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=n.getActiveAttrib(e,a),o=s.name,r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:r}}return t}function ss(n){return n!==""}function cd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(n){return n.replace(Ug,Og)}var zg=new Map;function Og(n,e){let t=at[e];if(t===void 0){let i=zg.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xl(t)}var Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(n){return n.replace(Fg,Bg)}function Bg(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function hd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function Hg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ea:case Sa:e="ENVMAP_TYPE_CUBE";break;case $r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vg(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Sa&&(e="ENVMAP_MODE_REFRACTION"),e}function Gg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case ef:e="ENVMAP_BLENDING_ADD";break}return e}function qg(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Wg(n,e,t,i){let a=n.getContext(),s=t.defines,o=t.vertexShader,r=t.fragmentShader,l=kg(t),c=Hg(t),u=Vg(t),d=Gg(t),h=qg(t),p=Lg(t),g=Dg(s),v=a.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(m=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?at.tonemapping_pars_fragment:"",t.toneMapping!==bi?Pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),Ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=Xl(o),o=cd(o,t),o=ud(o,t),r=Xl(r),r=cd(r,t),r=ud(r,t),o=dd(o),r=dd(r),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=S+m+o,b=S+f+r,R=rd(a,a.VERTEX_SHADER,y),w=rd(a,a.FRAGMENT_SHADER,b);a.attachShader(v,R),a.attachShader(v,w),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function C(A){if(n.debug.checkShaderErrors){let B=a.getProgramInfoLog(v).trim(),z=a.getShaderInfoLog(R).trim(),q=a.getShaderInfoLog(w).trim(),Y=!0,F=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,v,R,w);else{let G=ld(a,R,"vertex"),O=ld(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+G+`
`+O)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||q==="")&&(F=!1);F&&(A.diagnostics={runnable:Y,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:f}})}a.deleteShader(R),a.deleteShader(w),I=new _a(a,v),_=Ng(a,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=a.getProgramParameter(v,wg)),x},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}var Xg=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $l(e),t.set(e,i)),i}},$l=class{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}};function Qg(n,e,t,i,a,s,o){let r=new _r,l=new Ql,c=new Set,u=[],d=a.logarithmicDepthBuffer,h=a.vertexTextures,p=a.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,x,A,B,z){let q=B.fog,Y=z.geometry,F=_.isMeshStandardMaterial?B.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||F),O=G&&G.mapping===$r?G.image.height:null,se=g[_.type];_.precision!==null&&(p=a.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=he!==void 0?he.length:0,Ce=0;Y.morphAttributes.position!==void 0&&(Ce=1),Y.morphAttributes.normal!==void 0&&(Ce=2),Y.morphAttributes.color!==void 0&&(Ce=3);let Xe,Z,re,be;if(se){let dt=zn[se];Xe=dt.vertexShader,Z=dt.fragmentShader}else Xe=_.vertexShader,Z=_.fragmentShader,l.update(_),re=l.getVertexShaderID(_),be=l.getFragmentShaderID(_);let de=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),Le=z.isInstancedMesh===!0,ke=z.isBatchedMesh===!0,ot=!!_.map,j=!!_.matcap,le=!!G,P=!!_.aoMap,ze=!!_.lightMap,oe=!!_.bumpMap,Me=!!_.normalMap,pe=!!_.displacementMap,qe=!!_.emissiveMap,fe=!!_.metalnessMap,T=!!_.roughnessMap,M=_.anisotropy>0,k=_.clearcoat>0,J=_.dispersion>0,te=_.iridescence>0,K=_.sheen>0,De=_.transmission>0,xe=M&&!!_.anisotropyMap,Ae=k&&!!_.clearcoatMap,rt=k&&!!_.clearcoatNormalMap,ce=k&&!!_.clearcoatRoughnessMap,Pe=te&&!!_.iridescenceMap,Ve=te&&!!_.iridescenceThicknessMap,Qe=K&&!!_.sheenColorMap,Re=K&&!!_.sheenRoughnessMap,ct=!!_.specularMap,Je=!!_.specularColorMap,xt=!!_.specularIntensityMap,D=De&&!!_.transmissionMap,Ee=De&&!!_.thicknessMap,$=!!_.gradientMap,ne=!!_.alphaMap,Se=_.alphaTest>0,Te=!!_.alphaHash,Ke=!!_.extensions,vt=bi;_.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(vt=n.toneMapping);let Ot={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:Xe,fragmentShader:Z,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:ke,batchingColor:ke&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Na,alphaToCoverage:!!_.alphaToCoverage,map:ot,matcap:j,envMap:le,envMapMode:le&&G.mapping,envMapCubeUVHeight:O,aoMap:P,lightMap:ze,bumpMap:oe,normalMap:Me,displacementMap:h&&pe,emissiveMap:qe,normalMapObjectSpace:Me&&_.normalMapType===df,normalMapTangentSpace:Me&&_.normalMapType===Pc,metalnessMap:fe,roughnessMap:T,anisotropy:M,anisotropyMap:xe,clearcoat:k,clearcoatMap:Ae,clearcoatNormalMap:rt,clearcoatRoughnessMap:ce,dispersion:J,iridescence:te,iridescenceMap:Pe,iridescenceThicknessMap:Ve,sheen:K,sheenColorMap:Qe,sheenRoughnessMap:Re,specularMap:ct,specularColorMap:Je,specularIntensityMap:xt,transmission:De,transmissionMap:D,thicknessMap:Ee,gradientMap:$,opaque:_.transparent===!1&&_.blending===ba&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:Se,alphaHash:Te,combine:_.combine,mapUv:ot&&v(_.map.channel),aoMapUv:P&&v(_.aoMap.channel),lightMapUv:ze&&v(_.lightMap.channel),bumpMapUv:oe&&v(_.bumpMap.channel),normalMapUv:Me&&v(_.normalMap.channel),displacementMapUv:pe&&v(_.displacementMap.channel),emissiveMapUv:qe&&v(_.emissiveMap.channel),metalnessMapUv:fe&&v(_.metalnessMap.channel),roughnessMapUv:T&&v(_.roughnessMap.channel),anisotropyMapUv:xe&&v(_.anisotropyMap.channel),clearcoatMapUv:Ae&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(_.sheenRoughnessMap.channel),specularMapUv:ct&&v(_.specularMap.channel),specularColorMapUv:Je&&v(_.specularColorMap.channel),specularIntensityMapUv:xt&&v(_.specularIntensityMap.channel),transmissionMapUv:D&&v(_.transmissionMap.channel),thicknessMapUv:Ee&&v(_.thicknessMap.channel),alphaMapUv:ne&&v(_.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Me||M),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(ot||ne),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Be,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ce,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:ot&&_.map.isVideoTexture===!0&&ft.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:qe&&_.emissiveMap.isVideoTexture===!0&&ft.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===dn,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ke&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&_.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)x.push(A),x.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(S(x,_),y(x,_),x.push(n.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function S(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function y(_,x){r.disableAll(),x.supportsVertexTextures&&r.enable(0),x.instancing&&r.enable(1),x.instancingColor&&r.enable(2),x.instancingMorph&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),x.dispersion&&r.enable(20),x.batchingColor&&r.enable(21),_.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reverseDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),_.push(r.mask)}function b(_){let x=g[_.type],A;if(x){let B=zn[x];A=Of.clone(B.uniforms)}else A=_.uniforms;return A}function R(_,x){let A;for(let B=0,z=u.length;B<z;B++){let q=u[B];if(q.cacheKey===x){A=q,++A.usedTimes;break}}return A===void 0&&(A=new Wg(n,x,_,s),u.push(A)),A}function w(_){if(--_.usedTimes===0){let x=u.indexOf(_);u[x]=u[u.length-1],u.pop(),_.destroy()}}function C(_){l.remove(_)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:I}}function $g(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function i(o){n.delete(o)}function a(o,r,l){n.get(o)[r]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function jg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pd(){let n=[],e=0,t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function o(d,h,p,g,v,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function r(d,h,p,g,v,m){let f=o(d,h,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):t.push(f)}function l(d,h,p,g,v,m){let f=o(d,h,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||jg),i.length>1&&i.sort(h||fd),a.length>1&&a.sort(h||fd)}function u(){for(let d=e,h=n.length;d<h;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:r,unshift:l,finish:u,sort:c}}function Yg(){let n=new WeakMap;function e(i,a){let s=n.get(i),o;return s===void 0?(o=new pd,n.set(i,[o])):a>=s.length?(o=new pd,s.push(o)):o=s[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new it};break;case"SpotLight":t={position:new L,direction:new L,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Jg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Kg=0;function ev(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tv(n){let e=new Zg,t=Jg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let a=new L,s=new Mt,o=new Mt;function r(c){let u=0,d=0,h=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,S=0,y=0,b=0,R=0,w=0,C=0;c.sort(ev);for(let _=0,x=c.length;_<x;_++){let A=c[_],B=A.color,z=A.intensity,q=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=B.r*z,d+=B.g*z,h+=B.b*z;else if(A.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],z);C++}else if(A.isDirectionalLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let G=A.shadow,O=t.get(A);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=A.shadow.matrix,S++}i.directional[p]=F,p++}else if(A.isSpotLight){let F=e.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(B).multiplyScalar(z),F.distance=q,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,i.spot[v]=F;let G=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,G.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[v]=G.matrix,A.castShadow){let O=t.get(A);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=Y,b++}v++}else if(A.isRectAreaLight){let F=e.get(A);F.color.copy(B).multiplyScalar(z),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=F,m++}else if(A.isPointLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){let G=A.shadow,O=t.get(A);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=A.shadow.matrix,y++}i.point[g]=F,g++}else if(A.isHemisphereLight){let F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(z),F.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[f]=F,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==b||I.numSpotMaps!==R||I.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=b,I.numSpotMaps=R,I.numLightProbes=C,i.version=Kg++)}function l(c,u){let d=0,h=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let y=c[f];if(y.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),d++}else if(y.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let b=i.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){let b=i.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:i}}function md(n){let e=new tv(n),t=[],i=[];function a(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function r(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:o}}function nv(n){let e=new WeakMap;function t(a,s=0){let o=e.get(a),r;return o===void 0?(r=new md(n),e.set(a,[r])):s>=o.length?(r=new md(n),o.push(r)):r=o[s],r}function i(){e=new WeakMap}return{get:t,dispose:i}}var jl=class extends Mi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yl=class extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`;function sv(n,e,t){let i=new ds,a=new ge,s=new ge,o=new _t,r=new jl({depthPacking:uf}),l=new Yl,c={},u=t.maxTextureSize,d={[xi]:Wt,[Wt]:xi,[dn]:dn},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:iv,fragmentShader:av}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _e(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let f=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let _=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),B=n.state;B.setBlending(vi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=f!==$n&&this.type===$n,q=f===$n&&this.type!==$n;for(let Y=0,F=w.length;Y<F;Y++){let G=w[Y],O=G.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);let se=O.getFrameExtents();if(a.multiply(se),s.copy(O.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/se.x),a.x=s.x*se.x,O.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/se.y),a.y=s.y*se.y,O.mapSize.y=s.y)),O.map===null||z===!0||q===!0){let ve=this.type!==$n?{minFilter:hn,magFilter:hn}:{};O.map!==null&&O.map.dispose(),O.map=new Kn(a.x,a.y,ve),O.map.texture.name=G.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();let he=O.getViewportCount();for(let ve=0;ve<he;ve++){let Ce=O.getViewport(ve);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),B.viewport(o),O.updateMatrices(G,ve),i=O.getFrustum(),b(C,I,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===$n&&S(O,I),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(_,x,A)};function S(w,C){let I=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kn(a.x,a.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,I,h,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,I,p,v,null)}function y(w,C,I,_){let x=null,A=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)x=A;else if(x=I.isPointLight===!0?l:r,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let B=x.uuid,z=C.uuid,q=c[B];q===void 0&&(q={},c[B]=q);let Y=q[z];Y===void 0&&(Y=x.clone(),q[z]=Y,C.addEventListener("dispose",R)),x=Y}if(x.visible=C.visible,x.wireframe=C.wireframe,_===$n?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let B=n.properties.get(x);B.light=I}return x}function b(w,C,I,_,x){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===$n)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let z=e.update(w),q=w.material;if(Array.isArray(q)){let Y=z.groups;for(let F=0,G=Y.length;F<G;F++){let O=Y[F],se=q[O.materialIndex];if(se&&se.visible){let he=y(w,se,_,x);w.onBeforeShadow(n,w,C,I,z,he,O),n.renderBufferDirect(I,null,z,he,w,O),w.onAfterShadow(n,w,C,I,z,he,O)}}}else if(q.visible){let Y=y(w,q,_,x);w.onBeforeShadow(n,w,C,I,z,Y,null),n.renderBufferDirect(I,null,z,Y,w,null),w.onAfterShadow(n,w,C,I,z,Y,null)}}let B=w.children;for(let z=0,q=B.length;z<q;z++)b(B[z],C,I,_,x)}function R(w){w.target.removeEventListener("dispose",R);for(let I in c){let _=c[I],x=w.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}var rv={[el]:tl,[nl]:sl,[il]:rl,[Ma]:al,[tl]:el,[sl]:nl,[rl]:il,[al]:Ma};function ov(n,e){function t(){let D=!1,Ee=new _t,$=null,ne=new _t(0,0,0,0);return{setMask:function(Se){$!==Se&&!D&&(n.colorMask(Se,Se,Se,Se),$=Se)},setLocked:function(Se){D=Se},setClear:function(Se,Te,Ke,vt,Ot){Ot===!0&&(Se*=vt,Te*=vt,Ke*=vt),Ee.set(Se,Te,Ke,vt),ne.equals(Ee)===!1&&(n.clearColor(Se,Te,Ke,vt),ne.copy(Ee))},reset:function(){D=!1,$=null,ne.set(-1,0,0,0)}}}function i(){let D=!1,Ee=!1,$=null,ne=null,Se=null;return{setReversed:function(Te){if(Ee!==Te){let Ke=e.get("EXT_clip_control");Ee?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);let vt=Se;Se=null,this.setClear(vt)}Ee=Te},getReversed:function(){return Ee},setTest:function(Te){Te?de(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Te){$!==Te&&!D&&(n.depthMask(Te),$=Te)},setFunc:function(Te){if(Ee&&(Te=rv[Te]),ne!==Te){switch(Te){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case Ma:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=Te}},setLocked:function(Te){D=Te},setClear:function(Te){Se!==Te&&(Ee&&(Te=1-Te),n.clearDepth(Te),Se=Te)},reset:function(){D=!1,$=null,ne=null,Se=null,Ee=!1}}}function a(){let D=!1,Ee=null,$=null,ne=null,Se=null,Te=null,Ke=null,vt=null,Ot=null;return{setTest:function(dt){D||(dt?de(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(dt){Ee!==dt&&!D&&(n.stencilMask(dt),Ee=dt)},setFunc:function(dt,rn,En){($!==dt||ne!==rn||Se!==En)&&(n.stencilFunc(dt,rn,En),$=dt,ne=rn,Se=En)},setOp:function(dt,rn,En){(Te!==dt||Ke!==rn||vt!==En)&&(n.stencilOp(dt,rn,En),Te=dt,Ke=rn,vt=En)},setLocked:function(dt){D=dt},setClear:function(dt){Ot!==dt&&(n.clearStencil(dt),Ot=dt)},reset:function(){D=!1,Ee=null,$=null,ne=null,Se=null,Te=null,Ke=null,vt=null,Ot=null}}}let s=new t,o=new i,r=new a,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,y=null,b=null,R=null,w=null,C=new it(0,0,0),I=0,_=!1,x=null,A=null,B=null,z=null,q=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,G=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=G>=2);let se=null,he={},ve=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Xe=new _t().fromArray(ve),Z=new _t().fromArray(Ce);function re(D,Ee,$,ne){let Se=new Uint8Array(4),Te=n.createTexture();n.bindTexture(D,Te),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<$;Ke++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ee+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Te}let be={};be[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),de(n.DEPTH_TEST),o.setFunc(Ma),oe(!1),Me(bu),de(n.CULL_FACE),P(vi);function de(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Be(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Le(D,Ee){return d[D]!==Ee?(n.bindFramebuffer(D,Ee),d[D]=Ee,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ee),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ke(D,Ee){let $=p,ne=!1;if(D){$=h.get(Ee),$===void 0&&($=[],h.set(Ee,$));let Se=D.textures;if($.length!==Se.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ke=Se.length;Te<Ke;Te++)$[Te]=n.COLOR_ATTACHMENT0+Te;$.length=Se.length,ne=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ne=!0);ne&&n.drawBuffers($)}function ot(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let j={[Bi]:n.FUNC_ADD,[zh]:n.FUNC_SUBTRACT,[Oh]:n.FUNC_REVERSE_SUBTRACT};j[Fh]=n.MIN,j[Bh]=n.MAX;let le={[kh]:n.ZERO,[Hh]:n.ONE,[Vh]:n.SRC_COLOR,[Jo]:n.SRC_ALPHA,[$h]:n.SRC_ALPHA_SATURATE,[Xh]:n.DST_COLOR,[qh]:n.DST_ALPHA,[Gh]:n.ONE_MINUS_SRC_COLOR,[Ko]:n.ONE_MINUS_SRC_ALPHA,[Qh]:n.ONE_MINUS_DST_COLOR,[Wh]:n.ONE_MINUS_DST_ALPHA,[jh]:n.CONSTANT_COLOR,[Yh]:n.ONE_MINUS_CONSTANT_COLOR,[Zh]:n.CONSTANT_ALPHA,[Jh]:n.ONE_MINUS_CONSTANT_ALPHA};function P(D,Ee,$,ne,Se,Te,Ke,vt,Ot,dt){if(D===vi){v===!0&&(Be(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),D!==Uh){if(D!==m||dt!==_){if((f!==Bi||b!==Bi)&&(n.blendEquation(n.FUNC_ADD),f=Bi,b=Bi),dt)switch(D){case ba:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pr:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,y=null,R=null,w=null,C.set(0,0,0),I=0,m=D,_=dt}return}Se=Se||Ee,Te=Te||$,Ke=Ke||ne,(Ee!==f||Se!==b)&&(n.blendEquationSeparate(j[Ee],j[Se]),f=Ee,b=Se),($!==S||ne!==y||Te!==R||Ke!==w)&&(n.blendFuncSeparate(le[$],le[ne],le[Te],le[Ke]),S=$,y=ne,R=Te,w=Ke),(vt.equals(C)===!1||Ot!==I)&&(n.blendColor(vt.r,vt.g,vt.b,Ot),C.copy(vt),I=Ot),m=D,_=!1}function ze(D,Ee){D.side===dn?Be(n.CULL_FACE):de(n.CULL_FACE);let $=D.side===Wt;Ee&&($=!$),oe($),D.blending===ba&&D.transparent===!1?P(vi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let ne=D.stencilWrite;r.setTest(ne),ne&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),qe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(D){x!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),x=D)}function Me(D){D!==Lh?(de(n.CULL_FACE),D!==A&&(D===bu?n.cullFace(n.BACK):D===Dh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),A=D}function pe(D){D!==B&&(F&&n.lineWidth(D),B=D)}function qe(D,Ee,$){D?(de(n.POLYGON_OFFSET_FILL),(z!==Ee||q!==$)&&(n.polygonOffset(Ee,$),z=Ee,q=$)):Be(n.POLYGON_OFFSET_FILL)}function fe(D){D?de(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function T(D){D===void 0&&(D=n.TEXTURE0+Y-1),se!==D&&(n.activeTexture(D),se=D)}function M(D,Ee,$){$===void 0&&(se===null?$=n.TEXTURE0+Y-1:$=se);let ne=he[$];ne===void 0&&(ne={type:void 0,texture:void 0},he[$]=ne),(ne.type!==D||ne.texture!==Ee)&&(se!==$&&(n.activeTexture($),se=$),n.bindTexture(D,Ee||be[D]),ne.type=D,ne.texture=Ee)}function k(){let D=he[se];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(D){Xe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function Re(D){Z.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function ct(D,Ee){let $=c.get(Ee);$===void 0&&($=new WeakMap,c.set(Ee,$));let ne=$.get(D);ne===void 0&&(ne=n.getUniformBlockIndex(Ee,D.name),$.set(D,ne))}function Je(D,Ee){let ne=c.get(Ee).get(D);l.get(Ee)!==ne&&(n.uniformBlockBinding(Ee,ne,D.__bindingPointIndex),l.set(Ee,ne))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,he={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,y=null,b=null,R=null,w=null,C=new it(0,0,0),I=0,_=!1,x=null,A=null,B=null,z=null,q=null,Xe.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:de,disable:Be,bindFramebuffer:Le,drawBuffers:ke,useProgram:ot,setBlending:P,setMaterial:ze,setFlipSided:oe,setCullFace:Me,setLineWidth:pe,setPolygonOffset:qe,setScissorTest:fe,activeTexture:T,bindTexture:M,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:Pe,texImage3D:Ve,updateUBOMapping:ct,uniformBlockBinding:Je,texStorage2D:rt,texStorage3D:ce,texSubImage2D:K,texSubImage3D:De,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ae,scissor:Qe,viewport:Re,reset:xt}}function gd(n,e,t,i){let a=lv(i);switch(t){case Id:return n*e;case Dd:return n*e;case Nd:return n*e*2;case Tc:return n*e/a.components*a.byteLength;case Ac:return n*e/a.components*a.byteLength;case Ud:return n*e*2/a.components*a.byteLength;case Cc:return n*e*2/a.components*a.byteLength;case Ld:return n*e*3/a.components*a.byteLength;case Cn:return n*e*4/a.components*a.byteLength;case Rc:return n*e*4/a.components*a.byteLength;case cr:case ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dr:case hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:case fl:return Math.max(n,16)*Math.max(e,8)/4;case ul:case hl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fr:case Il:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zd:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nl:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lv(n){switch(n){case Jn:case Cd:return{byteLength:1,components:1};case us:case Rd:case ys:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case qi:case Ec:case Fn:return{byteLength:4,components:1};case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function cv(n,e,t,i,a,s,o){let r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):br("canvas")}function v(T,M,k){let J=1,te=fe(T);if((te.width>k||te.height>k)&&(J=k/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let K=Math.floor(J*te.width),De=Math.floor(J*te.height);d===void 0&&(d=g(K,De));let xe=M?g(K,De):d;return xe.width=K,xe.height=De,xe.getContext("2d").drawImage(T,0,0,K,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+De+")."),xe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,M,k,J,te=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=M;if(M===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),M===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),M===n.RGBA){let De=te?jr:ft.getTransfer(J);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=De===yt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(T,M){let k;return T?M===null||M===qi||M===Ta?k=n.DEPTH24_STENCIL8:M===Fn?k=n.DEPTH32F_STENCIL8:M===us&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qi||M===Ta?k=n.DEPTH_COMPONENT24:M===Fn?k=n.DEPTH_COMPONENT32F:M===us&&(k=n.DEPTH_COMPONENT16),k}function R(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){let M=T.target;M.removeEventListener("dispose",w),I(M),M.isVideoTexture&&u.delete(M)}function C(T){let M=T.target;M.removeEventListener("dispose",C),x(M)}function I(T){let M=i.get(T);if(M.__webglInit===void 0)return;let k=T.source,J=h.get(k);if(J){let te=J[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&_(T),Object.keys(J).length===0&&h.delete(k)}i.remove(T)}function _(T){let M=i.get(T);n.deleteTexture(M.__webglTexture);let k=T.source,J=h.get(k);delete J[M.__cacheKey],o.memory.textures--}function x(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let te=0;te<M.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[J][te]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=T.textures;for(let J=0,te=k.length;J<te;J++){let K=i.get(k[J]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(T)}let A=0;function B(){A=0}function z(){let T=A;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),A+=1,T}function q(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Y(T,M){let k=i.get(T);if(T.isVideoTexture&&pe(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,T,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function F(T,M){let k=i.get(T);if(T.version>0&&k.__version!==T.version){Z(k,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function G(T,M){let k=i.get(T);if(T.version>0&&k.__version!==T.version){Z(k,T,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function O(T,M){let k=i.get(T);if(T.version>0&&k.__version!==T.version){re(k,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let se={[wa]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},he={[hn]:n.NEAREST,[lf]:n.NEAREST_MIPMAP_NEAREST,[Os]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[vo]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},ve={[hf]:n.NEVER,[bf]:n.ALWAYS,[ff]:n.LESS,[Od]:n.LEQUAL,[pf]:n.EQUAL,[vf]:n.GEQUAL,[mf]:n.GREATER,[gf]:n.NOTEQUAL};function Ce(T,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===vo||M.magFilter===Os||M.magFilter===Gi||M.minFilter===On||M.minFilter===vo||M.minFilter===Os||M.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,se[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,se[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,se[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,he[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==Os&&M.minFilter!==Gi||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(T,M){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));let J=M.source,te=h.get(J);te===void 0&&(te={},h.set(J,te));let K=q(M);if(K!==T.__cacheKey){te[K]===void 0&&(te[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[K].usedTimes++;let De=te[T.__cacheKey];De!==void 0&&(te[T.__cacheKey].usedTimes--,De.usedTimes===0&&_(M)),T.__cacheKey=K,T.__webglTexture=te[K].texture}return k}function Z(T,M,k){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);let te=Xe(T,M),K=M.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+k);let De=i.get(K);if(K.version!==De.__version||te===!0){t.activeTexture(n.TEXTURE0+k);let xe=ft.getPrimaries(ft.workingColorSpace),Ae=M.colorSpace===gi?null:ft.getPrimaries(M.colorSpace),rt=M.colorSpace===gi||xe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ce=v(M.image,!1,a.maxTextureSize);ce=qe(M,ce);let Pe=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type),Qe=y(M.internalFormat,Pe,Ve,M.colorSpace,M.isVideoTexture);Ce(J,M);let Re,ct=M.mipmaps,Je=M.isVideoTexture!==!0,xt=De.__version===void 0||te===!0,D=K.dataReady,Ee=R(M,ce);if(M.isDepthTexture)Qe=b(M.format===Aa,M.type),xt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Qe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Qe,ce.width,ce.height,0,Pe,Ve,null));else if(M.isDataTexture)if(ct.length>0){Je&&xt&&t.texStorage2D(n.TEXTURE_2D,Ee,Qe,ct[0].width,ct[0].height);for(let $=0,ne=ct.length;$<ne;$++)Re=ct[$],Je?D&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,Pe,Ve,Re.data):t.texImage2D(n.TEXTURE_2D,$,Qe,Re.width,Re.height,0,Pe,Ve,Re.data);M.generateMipmaps=!1}else Je?(xt&&t.texStorage2D(n.TEXTURE_2D,Ee,Qe,ce.width,ce.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Pe,Ve,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Qe,ce.width,ce.height,0,Pe,Ve,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Qe,ct[0].width,ct[0].height,ce.depth);for(let $=0,ne=ct.length;$<ne;$++)if(Re=ct[$],M.format!==Cn)if(Pe!==null)if(Je){if(D)if(M.layerUpdates.size>0){let Se=gd(Re.width,Re.height,M.format,M.type);for(let Te of M.layerUpdates){let Ke=Re.data.subarray(Te*Se/Re.data.BYTES_PER_ELEMENT,(Te+1)*Se/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Te,Re.width,Re.height,1,Pe,Ke)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,ce.depth,Pe,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Qe,Re.width,Re.height,ce.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,ce.depth,Pe,Ve,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Qe,Re.width,Re.height,ce.depth,0,Pe,Ve,Re.data)}else{Je&&xt&&t.texStorage2D(n.TEXTURE_2D,Ee,Qe,ct[0].width,ct[0].height);for(let $=0,ne=ct.length;$<ne;$++)Re=ct[$],M.format!==Cn?Pe!==null?Je?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Qe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?D&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,Pe,Ve,Re.data):t.texImage2D(n.TEXTURE_2D,$,Qe,Re.width,Re.height,0,Pe,Ve,Re.data)}else if(M.isDataArrayTexture)if(Je){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Qe,ce.width,ce.height,ce.depth),D)if(M.layerUpdates.size>0){let $=gd(ce.width,ce.height,M.format,M.type);for(let ne of M.layerUpdates){let Se=ce.data.subarray(ne*$/ce.data.BYTES_PER_ELEMENT,(ne+1)*$/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,ce.width,ce.height,1,Pe,Ve,Se)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Pe,Ve,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Qe,ce.width,ce.height,ce.depth,0,Pe,Ve,ce.data);else if(M.isData3DTexture)Je?(xt&&t.texStorage3D(n.TEXTURE_3D,Ee,Qe,ce.width,ce.height,ce.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Pe,Ve,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Qe,ce.width,ce.height,ce.depth,0,Pe,Ve,ce.data);else if(M.isFramebufferTexture){if(xt)if(Je)t.texStorage2D(n.TEXTURE_2D,Ee,Qe,ce.width,ce.height);else{let $=ce.width,ne=ce.height;for(let Se=0;Se<Ee;Se++)t.texImage2D(n.TEXTURE_2D,Se,Qe,$,ne,0,Pe,Ve,null),$>>=1,ne>>=1}}else if(ct.length>0){if(Je&&xt){let $=fe(ct[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Qe,$.width,$.height)}for(let $=0,ne=ct.length;$<ne;$++)Re=ct[$],Je?D&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Pe,Ve,Re):t.texImage2D(n.TEXTURE_2D,$,Qe,Pe,Ve,Re);M.generateMipmaps=!1}else if(Je){if(xt){let $=fe(ce);t.texStorage2D(n.TEXTURE_2D,Ee,Qe,$.width,$.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ve,ce)}else t.texImage2D(n.TEXTURE_2D,0,Qe,Pe,Ve,ce);m(M)&&f(J),De.__version=K.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function re(T,M,k){if(M.image.length!==6)return;let J=Xe(T,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);let K=i.get(te);if(te.version!==K.__version||J===!0){t.activeTexture(n.TEXTURE0+k);let De=ft.getPrimaries(ft.workingColorSpace),xe=M.colorSpace===gi?null:ft.getPrimaries(M.colorSpace),Ae=M.colorSpace===gi||De===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let rt=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let ne=0;ne<6;ne++)!rt&&!ce?Pe[ne]=v(M.image[ne],!0,a.maxCubemapSize):Pe[ne]=ce?M.image[ne].image:M.image[ne],Pe[ne]=qe(M,Pe[ne]);let Ve=Pe[0],Qe=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),ct=y(M.internalFormat,Qe,Re,M.colorSpace),Je=M.isVideoTexture!==!0,xt=K.__version===void 0||J===!0,D=te.dataReady,Ee=R(M,Ve);Ce(n.TEXTURE_CUBE_MAP,M);let $;if(rt){Je&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ct,Ve.width,Ve.height);for(let ne=0;ne<6;ne++){$=Pe[ne].mipmaps;for(let Se=0;Se<$.length;Se++){let Te=$[Se];M.format!==Cn?Qe!==null?Je?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,Te.width,Te.height,Qe,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,ct,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,Te.width,Te.height,Qe,Re,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,ct,Te.width,Te.height,0,Qe,Re,Te.data)}}}else{if($=M.mipmaps,Je&&xt){$.length>0&&Ee++;let ne=fe(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ct,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ce){Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Pe[ne].width,Pe[ne].height,Qe,Re,Pe[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ct,Pe[ne].width,Pe[ne].height,0,Qe,Re,Pe[ne].data);for(let Se=0;Se<$.length;Se++){let Ke=$[Se].image[ne].image;Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,Ke.width,Ke.height,Qe,Re,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,ct,Ke.width,Ke.height,0,Qe,Re,Ke.data)}}else{Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Qe,Re,Pe[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ct,Qe,Re,Pe[ne]);for(let Se=0;Se<$.length;Se++){let Te=$[Se];Je?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,Qe,Re,Te.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,ct,Qe,Re,Te.image[ne])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),K.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function be(T,M,k,J,te,K){let De=s.convert(k.format,k.colorSpace),xe=s.convert(k.type),Ae=y(k.internalFormat,De,xe,k.colorSpace),rt=i.get(M),ce=i.get(k);if(ce.__renderTarget=M,!rt.__hasExternalTextures){let Pe=Math.max(1,M.width>>K),Ve=Math.max(1,M.height>>K);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,K,Ae,Pe,Ve,M.depth,0,De,xe,null):t.texImage2D(te,K,Ae,Pe,Ve,0,De,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Me(M)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,te,ce.__webglTexture,0,oe(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,te,ce.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(T,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){let J=M.depthTexture,te=J&&J.isDepthTexture?J.type:null,K=b(M.stencilBuffer,te),De=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=oe(M);Me(M)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,K,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,T)}else{let J=M.textures;for(let te=0;te<J.length;te++){let K=J[te],De=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),Ae=y(K.internalFormat,De,xe,K.colorSpace),rt=oe(M);k&&Me(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Ae,M.width,M.height):Me(M)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,Ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let te=J.__webglTexture,K=oe(M);if(M.depthTexture.format===xa)Me(M)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===Aa)Me(M)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Le(T){let M=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=J}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Be(M.__webglFramebuffer,T)}else if(k){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),de(M.__webglDepthbuffer[J],T,!1);else{let te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),de(M.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(T,M,k){let J=i.get(T);M!==void 0&&be(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Le(T)}function ot(T){let M=T.texture,k=i.get(T),J=i.get(M);T.addEventListener("dispose",C);let te=T.textures,K=T.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)k.__webglFramebuffer[xe][Ae]=n.createFramebuffer()}else k.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)k.__webglFramebuffer[xe]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(De)for(let xe=0,Ae=te.length;xe<Ae;xe++){let rt=i.get(te[xe]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Me(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xe=0;xe<te.length;xe++){let Ae=te[xe];k.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[xe]);let rt=s.convert(Ae.format,Ae.colorSpace),ce=s.convert(Ae.type),Pe=y(Ae.internalFormat,rt,ce,Ae.colorSpace,T.isXRRenderTarget===!0),Ve=oe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Pe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,k.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),de(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)be(k.__webglFramebuffer[xe][Ae],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else be(k.__webglFramebuffer[xe],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,Ae=te.length;xe<Ae;xe++){let rt=te[xe],ce=i.get(rt);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Ce(n.TEXTURE_2D,rt),be(k.__webglFramebuffer,T,rt,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),m(rt)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,J.__webglTexture),Ce(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)be(k.__webglFramebuffer[Ae],T,M,n.COLOR_ATTACHMENT0,xe,Ae);else be(k.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,xe,0);m(M)&&f(xe),t.unbindTexture()}T.depthBuffer&&Le(T)}function j(T){let M=T.textures;for(let k=0,J=M.length;k<J;k++){let te=M[k];if(m(te)){let K=S(T),De=i.get(te).__webglTexture;t.bindTexture(K,De),f(K),t.unbindTexture()}}}let le=[],P=[];function ze(T){if(T.samples>0){if(Me(T)===!1){let M=T.textures,k=T.width,J=T.height,te=n.COLOR_BUFFER_BIT,K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(T),xe=M.length>1;if(xe)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ae]);let rt=i.get(M[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,k,J,0,0,k,J,te,n.NEAREST),l===!0&&(le.length=0,P.length=0,le.push(n.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(le.push(K),P.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ae]);let rt=i.get(M[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,rt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function oe(T){return Math.min(a.maxSamples,T.samples)}function Me(T){let M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(T){let M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function qe(T,M){let k=T.colorSpace,J=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Na&&k!==gi&&(ft.getTransfer(k)===yt?(J!==Cn||te!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function fe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=O,this.rebindTextures=ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Me}function uv(n,e){function t(i,a=gi){let s,o=ft.getTransfer(a);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cd)return n.BYTE;if(i===Rd)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===ys)return n.HALF_FLOAT;if(i===Id)return n.ALPHA;if(i===Ld)return n.RGB;if(i===Cn)return n.RGBA;if(i===Dd)return n.LUMINANCE;if(i===Nd)return n.LUMINANCE_ALPHA;if(i===xa)return n.DEPTH_COMPONENT;if(i===Aa)return n.DEPTH_STENCIL;if(i===Tc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Ud)return n.RG;if(i===Cc)return n.RG_INTEGER;if(i===Rc)return n.RGBA_INTEGER;if(i===cr||i===ur||i===dr||i===hr)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===dl||i===hl||i===fl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pl||i===ml)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vl||i===bl||i===xl||i===yl||i===_l||i===Ml||i===El||i===Sl||i===wl||i===Tl||i===Al||i===Cl||i===Rl||i===Pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===El)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fr||i===Il||i===Ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fr)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zd||i===Dl||i===Nl||i===Ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Zl=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},dv={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,o=null,r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(dv)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let a=new Jt,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bn({vertexShader:hv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _e(new an(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends yi{constructor(e,t){super();let i=this,a=null,s=1,o=null,r="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,v=new Jl,m=t.getContextAttributes(),f=null,S=null,y=[],b=[],R=new ge,w=null,C=new qt;C.viewport=new _t;let I=new qt;I.viewport=new _t;let _=[C,I],x=new Zl,A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=y[Z];return re===void 0&&(re=new rs,y[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=y[Z];return re===void 0&&(re=new rs,y[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=y[Z];return re===void 0&&(re=new rs,y[Z]=re),re.getHandSpace()};function z(Z){let re=b.indexOf(Z.inputSource);if(re===-1)return;let be=y[re];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||o),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<y.length;Z++){let re=b[Z];re!==null&&(b[Z]=null,y[Z].disconnect(re))}A=null,B=null,v.reset(),e.setRenderTarget(f),p=null,h=null,d=null,a=null,S=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(f=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",q),a.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),a.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,re),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Kn(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,be=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Aa:xa,be=m.stencil?Ta:qi);let Be={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(a,t),h=d.createProjectionLayer(Be),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Kn(h.textureWidth,h.textureHeight,{format:Cn,type:Jn,depthTexture:new Cr(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),Xe.setContext(a),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(Z){for(let re=0;re<Z.removed.length;re++){let be=Z.removed[re],de=b.indexOf(be);de>=0&&(b[de]=null,y[de].disconnect(be))}for(let re=0;re<Z.added.length;re++){let be=Z.added[re],de=b.indexOf(be);if(de===-1){for(let Le=0;Le<y.length;Le++)if(Le>=b.length){b.push(be),de=Le;break}else if(b[Le]===null){b[Le]=be,de=Le;break}if(de===-1)break}let Be=y[de];Be&&Be.connect(be)}}let F=new L,G=new L;function O(Z,re,be){F.setFromMatrixPosition(re.matrixWorld),G.setFromMatrixPosition(be.matrixWorld);let de=F.distanceTo(G),Be=re.projectionMatrix.elements,Le=be.projectionMatrix.elements,ke=Be[14]/(Be[10]-1),ot=Be[14]/(Be[10]+1),j=(Be[9]+1)/Be[5],le=(Be[9]-1)/Be[5],P=(Be[8]-1)/Be[0],ze=(Le[8]+1)/Le[0],oe=ke*P,Me=ke*ze,pe=de/(-P+ze),qe=pe*-P;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qe),Z.translateZ(pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Be[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let fe=ke+pe,T=ot+pe,M=oe-qe,k=Me+(de-qe),J=j*ot/T*fe,te=le*ot/T*fe;Z.projectionMatrix.makePerspective(M,k,J,te,fe,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let re=Z.near,be=Z.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(be=v.depthFar)),x.near=I.near=C.near=re,x.far=I.far=C.far=be,(A!==x.near||B!==x.far)&&(a.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,B=x.far),C.layers.mask=Z.layers.mask|2,I.layers.mask=Z.layers.mask|4,x.layers.mask=C.layers.mask|I.layers.mask;let de=Z.parent,Be=x.cameras;se(x,de);for(let Le=0;Le<Be.length;Le++)se(Be[Le],de);Be.length===2?O(x,C,I):x.projectionMatrix.copy(C.projectionMatrix),he(Z,x,de)};function he(Z,re,be){be===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ve=null;function Ce(Z,re){if(u=re.getViewerPose(c||o),g=re,u!==null){let be=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let de=!1;be.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let Le=0;Le<be.length;Le++){let ke=be[Le],ot=null;if(p!==null)ot=p.getViewport(ke);else{let le=d.getViewSubImage(h,ke);ot=le.viewport,Le===0&&(e.setRenderTargetTextures(S,le.colorTexture,h.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(S))}let j=_[Le];j===void 0&&(j=new qt,j.layers.enable(Le),j.viewport=new _t,_[Le]=j),j.matrix.fromArray(ke.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ke.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ot.x,ot.y,ot.width,ot.height),Le===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(j)}let Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")){let Le=d.getDepthInformation(be[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,a.renderState)}}for(let be=0;be<y.length;be++){let de=b[be],Be=y[be];de!==null&&Be!==void 0&&Be.update(de,re,c||o)}ve&&ve(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let Xe=new Hd;Xe.setAnimationLoop(Ce),this.setAnimationLoop=function(Z){ve=Z},this.dispose=function(){}}},Oi=new Rn,pv=new Mt;function mv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,S,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?l(m,f,S,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),y=S.envMap,b=S.envMapRotation;y&&(m.envMap.value=y,Oi.copy(b),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function gv(n,e,t,i){let a={},s={},o=[],r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let b=y.program;i.uniformBlockBinding(S,b)}function c(S,y){let b=a[S.id];b===void 0&&(g(S),b=u(S),a[S.id]=b,S.addEventListener("dispose",m));let R=y.program;i.updateUBOMapping(S,R);let w=e.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function u(S){let y=d();S.__bindingPointIndex=y;let b=n.createBuffer(),R=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function d(){for(let S=0;S<r;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let y=a[S.id],b=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,C=b.length;w<C;w++){let I=Array.isArray(b[w])?b[w]:[b[w]];for(let _=0,x=I.length;_<x;_++){let A=I[_];if(p(A,w,_,R)===!0){let B=A.__offset,z=Array.isArray(A.value)?A.value:[A.value],q=0;for(let Y=0;Y<z.length;Y++){let F=z[Y],G=v(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,B+q,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,q),q+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,y,b,R){let w=S.value,C=y+"_"+b;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{let I=R[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(S){let y=S.uniforms,b=0,R=16;for(let C=0,I=y.length;C<I;C++){let _=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,A=_.length;x<A;x++){let B=_[x],z=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Y=z.length;q<Y;q++){let F=z[q],G=v(F),O=b%R,se=O%G.boundary,he=O+se;b+=se,he!==0&&R-he<G.storage&&(b+=R-he),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=G.storage}}}let w=b%R;return w>0&&(b+=R-w),S.__size=b,S.__cache={},this}function v(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(a[y.id]),delete a[y.id],delete s[y.id]}function f(){for(let S in a)n.deleteBuffer(a[S]);o=[],a={},s={}}return{bind:l,update:c,dispose:f}}var Rr=class{constructor(e={}){let{canvas:t=yf(),context:i=null,depth:a=!0,stencil:s=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=bi,this.toneMappingExposure=1;let b=this,R=!1,w=0,C=0,I=null,_=-1,x=null,A=new _t,B=new _t,z=null,q=new it(0),Y=0,F=t.width,G=t.height,O=1,se=null,he=null,ve=new _t(0,0,F,G),Ce=new _t(0,0,F,G),Xe=!1,Z=new ds,re=!1,be=!1,de=new Mt,Be=new Mt,Le=new L,ke=new _t,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function le(){return I===null?O:1}let P=i;function ze(E,N){return t.getContext(E,N)}try{let E={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Te,!1),P===null){let N="webgl2";if(P=ze(N,E),P===null)throw ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let oe,Me,pe,qe,fe,T,M,k,J,te,K,De,xe,Ae,rt,ce,Pe,Ve,Qe,Re,ct,Je,xt,D;function Ee(){oe=new L0(P),oe.init(),Je=new uv(P,oe),Me=new T0(P,oe,e,Je),pe=new ov(P,oe),Me.reverseDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),qe=new U0(P),fe=new $g,T=new cv(P,oe,pe,fe,Me,Je,qe),M=new C0(b),k=new I0(b),J=new Vf(P),xt=new S0(P,J),te=new D0(P,J,qe,xt),K=new O0(P,te,J,qe),Qe=new z0(P,Me,T),ce=new A0(fe),De=new Qg(b,M,k,oe,Me,xt,ce),xe=new mv(b,fe),Ae=new Yg,rt=new nv(oe),Ve=new E0(b,M,k,pe,K,p,l),Pe=new sv(b,K,Me),D=new gv(P,qe,Me,pe),Re=new w0(P,oe,qe),ct=new N0(P,oe,qe),qe.programs=De.programs,b.capabilities=Me,b.extensions=oe,b.properties=fe,b.renderLists=Ae,b.shadowMap=Pe,b.state=pe,b.info=qe}Ee();let $=new Kl(b,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(F,G,!1))},this.getSize=function(E){return E.set(F,G)},this.setSize=function(E,N,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,G=N,t.width=Math.floor(E*O),t.height=Math.floor(N*O),W===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(F*O,G*O).floor()},this.setDrawingBufferSize=function(E,N,W){F=E,G=N,O=W,t.width=Math.floor(E*W),t.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,N,W,X){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,N,W,X),pe.viewport(A.copy(ve).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(Ce)},this.setScissor=function(E,N,W,X){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,N,W,X),pe.scissor(B.copy(Ce).multiplyScalar(O).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(E){pe.setScissorTest(Xe=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(E=!0,N=!0,W=!0){let X=0;if(E){let U=!1;if(I!==null){let ue=I.texture.format;U=ue===Rc||ue===Cc||ue===Ac}if(U){let ue=I.texture.type,we=ue===Jn||ue===qi||ue===us||ue===Ta||ue===Sc||ue===wc,Oe=Ve.getClearColor(),Ne=Ve.getClearAlpha(),je=Oe.r,Ye=Oe.g,Fe=Oe.b;we?(g[0]=je,g[1]=Ye,g[2]=Fe,g[3]=Ne,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=je,v[1]=Ye,v[2]=Fe,v[3]=Ne,P.clearBufferiv(P.COLOR,0,v))}else X|=P.COLOR_BUFFER_BIT}N&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ae.dispose(),rt.dispose(),fe.dispose(),M.dispose(),k.dispose(),K.dispose(),xt.dispose(),D.dispose(),De.dispose(),$.dispose(),$.removeEventListener("sessionstart",Pi),$.removeEventListener("sessionend",Wa),$t.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=qe.autoReset,N=Pe.enabled,W=Pe.autoUpdate,X=Pe.needsUpdate,U=Pe.type;Ee(),qe.autoReset=E,Pe.enabled=N,Pe.autoUpdate=W,Pe.needsUpdate=X,Pe.type=U}function Te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ke(E){let N=E.target;N.removeEventListener("dispose",Ke),vt(N)}function vt(E){Ot(E),fe.remove(E)}function Ot(E){let N=fe.get(E).programs;N!==void 0&&(N.forEach(function(W){De.releaseProgram(W)}),E.isShaderMaterial&&De.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,X,U,ue){N===null&&(N=ot);let we=U.isMesh&&U.matrixWorld.determinant()<0,Oe=ea(E,N,W,X,U);pe.setMaterial(X,we);let Ne=W.index,je=1;if(X.wireframe===!0){if(Ne=te.getWireframeAttribute(W),Ne===void 0)return;je=2}let Ye=W.drawRange,Fe=W.attributes.position,ht=Ye.start*je,Et=(Ye.start+Ye.count)*je;ue!==null&&(ht=Math.max(ht,ue.start*je),Et=Math.min(Et,(ue.start+ue.count)*je)),Ne!==null?(ht=Math.max(ht,0),Et=Math.min(Et,Ne.count)):Fe!=null&&(ht=Math.max(ht,0),Et=Math.min(Et,Fe.count));let V=Et-ht;if(V<0||V===1/0)return;xt.setup(U,X,Oe,W,Ne);let H,ae=Re;if(Ne!==null&&(H=J.get(Ne),ae=ct,ae.setIndex(H)),U.isMesh)X.wireframe===!0?(pe.setLineWidth(X.wireframeLinewidth*le()),ae.setMode(P.LINES)):ae.setMode(P.TRIANGLES);else if(U.isLine){let ie=X.linewidth;ie===void 0&&(ie=1),pe.setLineWidth(ie*le()),U.isLineSegments?ae.setMode(P.LINES):U.isLineLoop?ae.setMode(P.LINE_LOOP):ae.setMode(P.LINE_STRIP)}else U.isPoints?ae.setMode(P.POINTS):U.isSprite&&ae.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ae.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ae.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let ie=U._multiDrawStarts,Ge=U._multiDrawCounts,He=U._multiDrawCount,tt=Ne?J.get(Ne).bytesPerElement:1,jt=fe.get(X).currentProgram.getUniforms();for(let Ht=0;Ht<He;Ht++)jt.setValue(P,"_gl_DrawID",Ht),ae.render(ie[Ht]/tt,Ge[Ht])}else if(U.isInstancedMesh)ae.renderInstances(ht,V,U.count);else if(W.isInstancedBufferGeometry){let ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ge=Math.min(W.instanceCount,ie);ae.renderInstances(ht,V,Ge)}else ae.render(ht,V)};function dt(E,N,W){E.transparent===!0&&E.side===dn&&E.forceSinglePass===!1?(E.side=Wt,E.needsUpdate=!0,ri(E,N,W),E.side=xi,E.needsUpdate=!0,ri(E,N,W),E.side=dn):ri(E,N,W)}this.compile=function(E,N,W=null){W===null&&(W=E),f=rt.get(W),f.init(N),y.push(f),W.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),E!==W&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let X=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ue=U.material;if(ue)if(Array.isArray(ue))for(let we=0;we<ue.length;we++){let Oe=ue[we];dt(Oe,W,U),X.add(Oe)}else dt(ue,W,U),X.add(ue)}),y.pop(),f=null,X},this.compileAsync=function(E,N,W=null){let X=this.compile(E,N,W);return new Promise(U=>{function ue(){if(X.forEach(function(we){fe.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){U(E);return}setTimeout(ue,10)}oe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let rn=null;function En(E){rn&&rn(E)}function Pi(){$t.stop()}function Wa(){$t.start()}let $t=new Hd;$t.setAnimationLoop(En),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(E){rn=E,$.setAnimationLoop(E),E===null?$t.stop():$t.start()},$.addEventListener("sessionstart",Pi),$.addEventListener("sessionend",Wa),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,N,I),f=rt.get(E,y.length),f.init(N),y.push(f),Be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Be),be=this.localClippingEnabled,re=ce.init(this.clippingPlanes,be),m=Ae.get(E,S.length),m.init(),S.push(m),$.enabled===!0&&$.isPresenting===!0){let ue=b.xr.getDepthSensingMesh();ue!==null&&Xa(ue,N,-1/0,b.sortObjects)}Xa(E,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(se,he),j=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,j&&Ve.addToRenderList(m,E),this.info.render.frame++,re===!0&&ce.beginShadows();let W=f.state.shadowsArray;Pe.render(W,E,N),re===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){let ue=N.cameras;if(U.length>0)for(let we=0,Oe=ue.length;we<Oe;we++){let Ne=ue[we];Qa(X,U,E,Ne)}j&&Ve.render(E);for(let we=0,Oe=ue.length;we<Oe;we++){let Ne=ue[we];Us(m,E,Ne,Ne.viewport)}}else U.length>0&&Qa(X,U,E,N),j&&Ve.render(E),Us(m,E,N);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(b,E,N),xt.resetDefaultState(),_=-1,x=null,y.pop(),y.length>0?(f=y[y.length-1],re===!0&&ce.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Xa(E,N,W,X){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){X&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Be);let we=K.update(E),Oe=E.material;Oe.visible&&m.push(E,we,Oe,W,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){let we=K.update(E),Oe=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ke.copy(we.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(Be)),Array.isArray(Oe)){let Ne=we.groups;for(let je=0,Ye=Ne.length;je<Ye;je++){let Fe=Ne[je],ht=Oe[Fe.materialIndex];ht&&ht.visible&&m.push(E,we,ht,W,ke.z,Fe)}}else Oe.visible&&m.push(E,we,Oe,W,ke.z,null)}}let ue=E.children;for(let we=0,Oe=ue.length;we<Oe;we++)Xa(ue[we],N,W,X)}function Us(E,N,W,X){let U=E.opaque,ue=E.transmissive,we=E.transparent;f.setupLightsView(W),re===!0&&ce.setGlobalState(b.clippingPlanes,W),X&&pe.viewport(A.copy(X)),U.length>0&&Sn(U,N,W),ue.length>0&&Sn(ue,N,W),we.length>0&&Sn(we,N,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Qa(E,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Kn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?ys:Jn,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let ue=f.state.transmissionRenderTarget[X.id],we=X.viewport||A;ue.setSize(we.z,we.w);let Oe=b.getRenderTarget();b.setRenderTarget(ue),b.getClearColor(q),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),j&&Ve.render(W);let Ne=b.toneMapping;b.toneMapping=bi;let je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),re===!0&&ce.setGlobalState(b.clippingPlanes,X),Sn(E,W,X),T.updateMultisampleRenderTarget(ue),T.updateRenderTargetMipmap(ue),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Fe=0,ht=N.length;Fe<ht;Fe++){let Et=N[Fe],V=Et.object,H=Et.geometry,ae=Et.material,ie=Et.group;if(ae.side===dn&&V.layers.test(X.layers)){let Ge=ae.side;ae.side=Wt,ae.needsUpdate=!0,$a(V,W,X,H,ae,ie),ae.side=Ge,ae.needsUpdate=!0,Ye=!0}}Ye===!0&&(T.updateMultisampleRenderTarget(ue),T.updateRenderTargetMipmap(ue))}b.setRenderTarget(Oe),b.setClearColor(q,Y),je!==void 0&&(X.viewport=je),b.toneMapping=Ne}function Sn(E,N,W){let X=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ue=E.length;U<ue;U++){let we=E[U],Oe=we.object,Ne=we.geometry,je=X===null?we.material:X,Ye=we.group;Oe.layers.test(W.layers)&&$a(Oe,N,W,Ne,je,Ye)}}function $a(E,N,W,X,U,ue){E.onBeforeRender(b,N,W,X,U,ue),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(b,N,W,X,E,ue),U.transparent===!0&&U.side===dn&&U.forceSinglePass===!1?(U.side=Wt,U.needsUpdate=!0,b.renderBufferDirect(W,N,X,U,E,ue),U.side=xi,U.needsUpdate=!0,b.renderBufferDirect(W,N,X,U,E,ue),U.side=dn):b.renderBufferDirect(W,N,X,U,E,ue),E.onAfterRender(b,N,W,X,U,ue)}function ri(E,N,W){N.isScene!==!0&&(N=ot);let X=fe.get(E),U=f.state.lights,ue=f.state.shadowsArray,we=U.state.version,Oe=De.getParameters(E,U.state,ue,N,W),Ne=De.getProgramCacheKey(Oe),je=X.programs;X.environment=E.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(E.isMeshStandardMaterial?k:M).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",Ke),je=new Map,X.programs=je);let Ye=je.get(Ne);if(Ye!==void 0){if(X.currentProgram===Ye&&X.lightsStateVersion===we)return bt(E,Oe),Ye}else Oe.uniforms=De.getUniforms(E),E.onBeforeCompile(Oe,b),Ye=De.acquireProgram(Oe,Ne),je.set(Ne,Ye),X.uniforms=Oe.uniforms;let Fe=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=ce.uniform),bt(E,Oe),X.needsLights=et(E),X.lightsStateVersion=we,X.needsLights&&(Fe.ambientLightColor.value=U.state.ambient,Fe.lightProbe.value=U.state.probe,Fe.directionalLights.value=U.state.directional,Fe.directionalLightShadows.value=U.state.directionalShadow,Fe.spotLights.value=U.state.spot,Fe.spotLightShadows.value=U.state.spotShadow,Fe.rectAreaLights.value=U.state.rectArea,Fe.ltc_1.value=U.state.rectAreaLTC1,Fe.ltc_2.value=U.state.rectAreaLTC2,Fe.pointLights.value=U.state.point,Fe.pointLightShadows.value=U.state.pointShadow,Fe.hemisphereLights.value=U.state.hemi,Fe.directionalShadowMap.value=U.state.directionalShadowMap,Fe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Fe.spotShadowMap.value=U.state.spotShadowMap,Fe.spotLightMatrix.value=U.state.spotLightMatrix,Fe.spotLightMap.value=U.state.spotLightMap,Fe.pointShadowMap.value=U.state.pointShadowMap,Fe.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=Ye,X.uniformsList=null,Ye}function zs(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=_a.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function bt(E,N){let W=fe.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function ea(E,N,W,X,U){N.isScene!==!0&&(N=ot),T.resetTextureUnits();let ue=N.fog,we=X.isMeshStandardMaterial?N.environment:null,Oe=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Na,Ne=(X.isMeshStandardMaterial?k:M).get(X.envMap||we),je=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!W.morphAttributes.position,ht=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color,V=bi;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(V=b.toneMapping);let H=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=H!==void 0?H.length:0,ie=fe.get(X),Ge=f.state.lights;if(re===!0&&(be===!0||E!==x)){let gn=E===x&&X.id===_;ce.setState(X,E,gn)}let He=!1;X.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Ge.state.version||ie.outputColorSpace!==Oe||U.isBatchedMesh&&ie.batching===!1||!U.isBatchedMesh&&ie.batching===!0||U.isBatchedMesh&&ie.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ie.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ie.instancing===!1||!U.isInstancedMesh&&ie.instancing===!0||U.isSkinnedMesh&&ie.skinning===!1||!U.isSkinnedMesh&&ie.skinning===!0||U.isInstancedMesh&&ie.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ie.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ie.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ie.instancingMorph===!1&&U.morphTexture!==null||ie.envMap!==Ne||X.fog===!0&&ie.fog!==ue||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==ce.numPlanes||ie.numIntersection!==ce.numIntersection)||ie.vertexAlphas!==je||ie.vertexTangents!==Ye||ie.morphTargets!==Fe||ie.morphNormals!==ht||ie.morphColors!==Et||ie.toneMapping!==V||ie.morphTargetsCount!==ae)&&(He=!0):(He=!0,ie.__version=X.version);let tt=ie.currentProgram;He===!0&&(tt=ri(X,N,U));let jt=!1,Ht=!1,oi=!1,St=tt.getUniforms(),Un=ie.uniforms;if(pe.useProgram(tt.program)&&(jt=!0,Ht=!0,oi=!0),X.id!==_&&(_=X.id,Ht=!0),jt||x!==E){pe.buffers.depth.getReversed()?(de.copy(E.projectionMatrix),Mf(de),Ef(de),St.setValue(P,"projectionMatrix",de)):St.setValue(P,"projectionMatrix",E.projectionMatrix),St.setValue(P,"viewMatrix",E.matrixWorldInverse);let li=St.map.cameraPosition;li!==void 0&&li.setValue(P,Le.setFromMatrixPosition(E.matrixWorld)),Me.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&St.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Ht=!0,oi=!0)}if(U.isSkinnedMesh){St.setOptional(P,U,"bindMatrix"),St.setOptional(P,U,"bindMatrixInverse");let gn=U.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),St.setValue(P,"boneTexture",gn.boneTexture,T))}U.isBatchedMesh&&(St.setOptional(P,U,"batchingTexture"),St.setValue(P,"batchingTexture",U._matricesTexture,T),St.setOptional(P,U,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",U._indirectTexture,T),St.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",U._colorsTexture,T));let ja=W.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0)&&Qe.update(U,W,tt),(Ht||ie.receiveShadow!==U.receiveShadow)&&(ie.receiveShadow=U.receiveShadow,St.setValue(P,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Un.envMap.value=Ne,Un.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Un.envMapIntensity.value=N.environmentIntensity),Ht&&(St.setValue(P,"toneMappingExposure",b.toneMappingExposure),ie.needsLights&&Ii(Un,oi),ue&&X.fog===!0&&xe.refreshFogUniforms(Un,ue),xe.refreshMaterialUniforms(Un,X,O,G,f.state.transmissionRenderTarget[E.id]),_a.upload(P,zs(ie),Un,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_a.upload(P,zs(ie),Un,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&St.setValue(P,"center",U.center),St.setValue(P,"modelViewMatrix",U.modelViewMatrix),St.setValue(P,"normalMatrix",U.normalMatrix),St.setValue(P,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let gn=X.uniformsGroups;for(let li=0,ci=gn.length;li<ci;li++){let vu=gn[li];D.update(vu,tt),D.bind(vu,tt)}}return tt}function Ii(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function et(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,N,W){fe.get(E.texture).__webglTexture=N,fe.get(E.depthTexture).__webglTexture=W;let X=fe.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let W=fe.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,W=0){I=E,w=N,C=W;let X=!0,U=null,ue=!1,we=!1;if(E){let Ne=fe.get(E);if(Ne.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(Ne.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Ne.__hasExternalTextures)T.rebindTextures(E,fe.get(E.texture).__webglTexture,fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Fe=E.depthTexture;if(Ne.__boundDepthTexture!==Fe){if(Fe!==null&&fe.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(we=!0);let Ye=fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ye[N])?U=Ye[N][W]:U=Ye[N],ue=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?U=fe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?U=Ye[W]:U=Ye,A.copy(E.viewport),B.copy(E.scissor),z=E.scissorTest}else A.copy(ve).multiplyScalar(O).floor(),B.copy(Ce).multiplyScalar(O).floor(),z=Xe;if(pe.bindFramebuffer(P.FRAMEBUFFER,U)&&X&&pe.drawBuffers(E,U),pe.viewport(A),pe.scissor(B),pe.setScissorTest(z),ue){let Ne=fe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,W)}else if(we){let Ne=fe.get(E.texture),je=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ne.__webglTexture,W||0,je)}_=-1},this.readRenderTargetPixels=function(E,N,W,X,U,ue,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe){pe.bindFramebuffer(P.FRAMEBUFFER,Oe);try{let Ne=E.texture,je=Ne.format,Ye=Ne.type;if(!Me.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-X&&W>=0&&W<=E.height-U&&P.readPixels(N,W,X,U,Je.convert(je),Je.convert(Ye),ue)}finally{let Ne=I!==null?fe.get(I).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,X,U,ue,we){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe){let Ne=E.texture,je=Ne.format,Ye=Ne.type;if(!Me.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-X&&W>=0&&W<=E.height-U){pe.bindFramebuffer(P.FRAMEBUFFER,Oe);let Fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.bufferData(P.PIXEL_PACK_BUFFER,ue.byteLength,P.STREAM_READ),P.readPixels(N,W,X,U,Je.convert(je),Je.convert(Ye),0);let ht=I!==null?fe.get(I).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,ht);let Et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await _f(P,Et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ue),P.deleteBuffer(Fe),P.deleteSync(Et),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,W=0){E.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let X=Math.pow(2,-W),U=Math.floor(E.image.width*X),ue=Math.floor(E.image.height*X),we=N!==null?N.x:0,Oe=N!==null?N.y:0;T.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,we,Oe,U,ue),pe.unbindTexture()},this.copyTextureToTexture=function(E,N,W=null,X=null,U=0){E.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,W=null);let ue,we,Oe,Ne,je,Ye,Fe,ht,Et,V=E.isCompressedTexture?E.mipmaps[U]:E.image;W!==null?(ue=W.max.x-W.min.x,we=W.max.y-W.min.y,Oe=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,je=W.min.y,Ye=W.isBox3?W.min.z:0):(ue=V.width,we=V.height,Oe=V.depth||1,Ne=0,je=0,Ye=0),X!==null?(Fe=X.x,ht=X.y,Et=X.z):(Fe=0,ht=0,Et=0);let H=Je.convert(N.format),ae=Je.convert(N.type),ie;N.isData3DTexture?(T.setTexture3D(N,0),ie=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),ie=P.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),ie=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let Ge=P.getParameter(P.UNPACK_ROW_LENGTH),He=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tt=P.getParameter(P.UNPACK_SKIP_PIXELS),jt=P.getParameter(P.UNPACK_SKIP_ROWS),Ht=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,V.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,V.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ye);let oi=E.isDataArrayTexture||E.isData3DTexture,St=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Un=fe.get(E),ja=fe.get(N),gn=fe.get(Un.__renderTarget),li=fe.get(ja.__renderTarget);pe.bindFramebuffer(P.READ_FRAMEBUFFER,gn.__webglFramebuffer),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<Oe;ci++)oi&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(E).__webglTexture,U,Ye+ci),E.isDepthTexture?(St&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(N).__webglTexture,U,Et+ci),P.blitFramebuffer(Ne,je,ue,we,Fe,ht,ue,we,P.DEPTH_BUFFER_BIT,P.NEAREST)):St?P.copyTexSubImage3D(ie,U,Fe,ht,Et+ci,Ne,je,ue,we):P.copyTexSubImage2D(ie,U,Fe,ht,Et+ci,Ne,je,ue,we);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else St?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(ie,U,Fe,ht,Et,ue,we,Oe,H,ae,V.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(ie,U,Fe,ht,Et,ue,we,Oe,H,V.data):P.texSubImage3D(ie,U,Fe,ht,Et,ue,we,Oe,H,ae,V):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Fe,ht,ue,we,H,ae,V.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Fe,ht,V.width,V.height,H,V.data):P.texSubImage2D(P.TEXTURE_2D,U,Fe,ht,ue,we,H,ae,V);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ge),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,He),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ht),U===0&&N.generateMipmaps&&P.generateMipmap(ie),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,N,W=null,X=null,U=0){return E.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,W,X,U)},this.initRenderTarget=function(E){fe.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,pe.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Pr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ir=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ec=class extends Jt{constructor(e=null,t=1,i=1,a,s,o,r,l,c=hn,u=hn,d,h){super(null,o,r,l,c,u,a,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lr=class extends fn{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ma=new Mt,vd=new Mt,ar=[],bd=new ei,vv=new Mt,ts=new _e,ns=new Wi,Ra=class extends _e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,vv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ma),bd.copy(e.boundingBox).applyMatrix4(ma),this.boundingBox.union(bd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ma),ns.copy(e.boundingSphere).applyMatrix4(ma),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let r=0;r<i.length;r++)i[r]=a[o+r]}raycast(e,t){let i=this.matrixWorld,a=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(i),e.ray.intersectsSphere(ns)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,ma),vd.multiplyMatrices(i,ma),ts.matrixWorld=vd,ts.raycast(e,ar);for(let o=0,r=ar.length;o<r;o++){let l=ar[o];l.instanceId=s,l.object=this,t.push(l)}ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new ec(new Float32Array(a*this.count),a,this.count,Tc,Fn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let r=this.geometry.morphTargetsRelative?1:1-o,l=a*e;s[l]=r,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Pa=class extends Jt{constructor(e,t,i,a,s,o,r,l,c){super(e,t,i,a,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,a=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),a=0,s=i.length,o;t?o=t:o=e*i[s-1];let r=0,l=s-1,c;for(;r<=l;)if(a=Math.floor(r+(l-r)/2),c=i[a]-o,c<0)r=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===o)return a/(s-1);let u=i[a],h=i[a+1]-u,p=(o-u)/h;return(a+p)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);let o=this.getPoint(a),r=this.getPoint(s),l=t||(o.isVector2?new ge:new L);return l.copy(r).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,a=[],s=[],o=[],r=new L,l=new Mt;for(let p=0;p<=e;p++){let g=p/e;a[p]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(a[0].x),d=Math.abs(a[0].y),h=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),r.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],r),o[0].crossVectors(a[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),r.crossVectors(a[p-1],a[p]),r.length()>Number.EPSILON){r.normalize();let g=Math.acos(Gt(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(r,g))}o[p].crossVectors(a[p],s[p])}if(t===!0){let p=Math.acos(Gt(s[0].dot(s[e]),-1,1));p/=e,a[0].dot(r.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(a[g],p*g)),o[g].crossVectors(a[g],s[g])}return{tangents:a,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hs=class extends bn{constructor(e=0,t=0,i=1,a=1,s=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new ge){let i=t,a=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(o?s=0:s=a),this.aClockwise===!0&&!o&&(s===a?s=-a:s=s-a);let r=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tc=class extends hs{constructor(e,t,i,a,s,o){super(e,t,i,i,a,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lc(){let n=0,e=0,t=0,i=0;function a(s,o,r,l){n=s,e=r,t=-3*s+3*o-2*r-l,i=2*s-2*o+r+l}return{initCatmullRom:function(s,o,r,l,c){a(o,r,c*(r-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,r,l,c,u,d){let h=(o-s)/c-(r-s)/(c+u)+(r-o)/u,p=(r-o)/u-(l-o)/(u+d)+(l-r)/d;h*=u,p*=u,a(o,r,h,p)},calc:function(s){let o=s*s,r=o*s;return n+e*s+t*o+i*r}}}var sr=new L,Qo=new Lc,$o=new Lc,jo=new Lc,fs=class extends bn{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new L){let i=t,a=this.points,s=a.length,o=(s-(this.closed?0:1))*e,r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:l===0&&r===s-1&&(r=s-2,l=1);let c,u;this.closed||r>0?c=a[(r-1)%s]:(sr.subVectors(a[0],a[1]).add(a[0]),c=sr);let d=a[r%s],h=a[(r+1)%s];if(this.closed||r+2<s?u=a[(r+2)%s]:(sr.subVectors(a[s-1],a[s-2]).add(a[s-1]),u=sr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Qo.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,m),$o.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,m),jo.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),$o.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),jo.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Qo.calc(l),$o.calc(l),jo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(new L().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xd(n,e,t,i,a){let s=(i-e)*.5,o=(a-t)*.5,r=n*n,l=n*r;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*r+s*n+t}function bv(n,e){let t=1-n;return t*t*e}function xv(n,e){return 2*(1-n)*n*e}function yv(n,e){return n*n*e}function os(n,e,t,i){return bv(n,e)+xv(n,t)+yv(n,i)}function _v(n,e){let t=1-n;return t*t*t*e}function Mv(n,e){let t=1-n;return 3*t*t*n*e}function Ev(n,e){return 3*(1-n)*n*n*e}function Sv(n,e){return n*n*n*e}function ls(n,e,t,i,a){return _v(n,e)+Mv(n,t)+Ev(n,i)+Sv(n,a)}var Dr=class extends bn{constructor(e=new ge,t=new ge,i=new ge,a=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new ge){let i=t,a=this.v0,s=this.v1,o=this.v2,r=this.v3;return i.set(ls(e,a.x,s.x,o.x,r.x),ls(e,a.y,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nc=class extends bn{constructor(e=new L,t=new L,i=new L,a=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new L){let i=t,a=this.v0,s=this.v1,o=this.v2,r=this.v3;return i.set(ls(e,a.x,s.x,o.x,r.x),ls(e,a.y,s.y,o.y,r.y),ls(e,a.z,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nr=class extends bn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends bn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends bn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,a=this.v0,s=this.v1,o=this.v2;return i.set(os(e,a.x,s.x,o.x),os(e,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends bn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,a=this.v0,s=this.v1,o=this.v2;return i.set(os(e,a.x,s.x,o.x),os(e,a.y,s.y,o.y),os(e,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,a=this.points,s=(a.length-1)*e,o=Math.floor(s),r=s-o,l=a[o===0?o:o-1],c=a[o],u=a[o>a.length-2?a.length-1:o+1],d=a[o>a.length-3?a.length-1:o+2];return i.set(xd(r,l.x,c.x,u.x,d.x),xd(r,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let a=e.points[t];this.points.push(new ge().fromArray(a))}return this}},Fr=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:fs,CubicBezierCurve:Dr,CubicBezierCurve3:nc,EllipseCurve:hs,LineCurve:Nr,LineCurve3:ic,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:zr,SplineCurve:Or}),ac=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),a=this.getCurveLengths(),s=0;for(;s<a.length;){if(a[s]>=i){let o=a[s]-i,r=this.curves[s],l=r.getLength(),c=l===0?0:1-o/l;return r.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let a=0,s=this.curves;a<s.length;a++){let o=s[a],r=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(r);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let a=e.curves[t];this.curves.push(new Fr[a.type]().fromJSON(a))}return this}},ps=class extends ac{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Nr(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){let s=new Ur(this.currentPoint.clone(),new ge(e,t),new ge(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,o){let r=new Dr(this.currentPoint.clone(),new ge(e,t),new ge(i,a),new ge(s,o));return this.curves.push(r),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Or(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,o){let r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,i,a,s,o),this}absarc(e,t,i,a,s,o){return this.absellipse(e,t,i,i,a,s,o),this}ellipse(e,t,i,a,s,o,r,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,a,s,o,r,l),this}absellipse(e,t,i,a,s,o,r,l){let c=new hs(e,t,i,a,s,o,r,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},sc=class n extends nn{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,i=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:a},t=Math.floor(t),a=Gt(a,0,Math.PI*2);let s=[],o=[],r=[],l=[],c=[],u=1/t,d=new L,h=new ge,p=new L,g=new L,v=new L,m=0,f=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,f=e[S+1].y-e[S].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,f=e[S+1].y-e[S].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let S=0;S<=t;S++){let y=i+S*u*a,b=Math.sin(y),R=Math.cos(y);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*b,d.y=e[w].y,d.z=e[w].x*R,o.push(d.x,d.y,d.z),h.x=S/t,h.y=w/(e.length-1),r.push(h.x,h.y);let C=l[3*w+0]*b,I=l[3*w+1],_=l[3*w+0]*R;c.push(C,I,_)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){let b=y+S*e.length,R=b,w=b+e.length,C=b+e.length+1,I=b+1;s.push(R,w,I),s.push(C,I,w)}this.setIndex(s),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(r,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Xi=class n extends sc{constructor(e=1,t=1,i=4,a=8){let s=new ps;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),a),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:a}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Br=class n extends nn{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);let s=[],o=[],r=[],l=[],c=new L,u=new ge;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*a;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),r.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(r,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ln=class n extends nn{constructor(e=1,t=1,i=1,a=32,s=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:l};let c=this;a=Math.floor(a),s=Math.floor(s);let u=[],d=[],h=[],p=[],g=0,v=[],m=i/2,f=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function S(){let b=new L,R=new L,w=0,C=(t-e)/i;for(let I=0;I<=s;I++){let _=[],x=I/s,A=x*(t-e)+e;for(let B=0;B<=a;B++){let z=B/a,q=z*l+r,Y=Math.sin(q),F=Math.cos(q);R.x=A*Y,R.y=-x*i+m,R.z=A*F,d.push(R.x,R.y,R.z),b.set(Y,C,F).normalize(),h.push(b.x,b.y,b.z),p.push(z,1-x),_.push(g++)}v.push(_)}for(let I=0;I<a;I++)for(let _=0;_<s;_++){let x=v[_][I],A=v[_+1][I],B=v[_+1][I+1],z=v[_][I+1];(e>0||_!==0)&&(u.push(x,A,z),w+=3),(t>0||_!==s-1)&&(u.push(A,B,z),w+=3)}c.addGroup(f,w,0),f+=w}function y(b){let R=g,w=new ge,C=new L,I=0,_=b===!0?e:t,x=b===!0?1:-1;for(let B=1;B<=a;B++)d.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),g++;let A=g;for(let B=0;B<=a;B++){let q=B/a*l+r,Y=Math.cos(q),F=Math.sin(q);C.x=_*F,C.y=m*x,C.z=_*Y,d.push(C.x,C.y,C.z),h.push(0,x,0),w.x=Y*.5+.5,w.y=F*.5*x+.5,p.push(w.x,w.y),g++}for(let B=0;B<a;B++){let z=R+B,q=A+B;b===!0?u.push(q,q+1,z):u.push(q+1,q,z),I+=3}c.addGroup(f,I,b===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qi=class n extends ln{constructor(e=1,t=1,i=32,a=1,s=!1,o=0,r=Math.PI*2){super(0,e,t,i,a,s,o,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:r}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ia=class extends ps{constructor(e){super(e),this.uuid=Ua(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let a=e.holes[t];this.holes.push(new ps().fromJSON(a))}return this}},wv={triangulate:function(n,e,t=2){let i=e&&e.length,a=i?e[0]*t:n.length,s=Xd(n,0,a,t,!0),o=[];if(!s||s.next===s.prev)return o;let r,l,c,u,d,h,p;if(i&&(s=Pv(n,e,s,t)),n.length>80*t){r=c=n[0],l=u=n[1];for(let g=t;g<a;g+=t)d=n[g],h=n[g+1],d<r&&(r=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-r,u-l),p=p!==0?32767/p:0}return ms(s,o,t,r,l,p,0),o}};function Xd(n,e,t,i,a){let s,o;if(a===Hv(n,e,t,i)>0)for(s=e;s<t;s+=i)o=yd(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=yd(s,n[s],n[s+1],o);return o&&Zr(o,o.next)&&(vs(o),o=o.next),o}function $i(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Zr(t,t.next)||At(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ms(n,e,t,i,a,s,o){if(!n)return;!o&&s&&Uv(n,i,a,s);let r=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Av(n,i,a,s):Tv(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),vs(n),n=c.next,r=c.next;continue}if(n=c,n===r){o?o===1?(n=Cv($i(n),e,t),ms(n,e,t,i,a,s,2)):o===2&&Rv(n,e,t,i,a,s):ms($i(n),e,t,i,a,s,1);break}}}function Tv(n){let e=n.prev,t=n,i=n.next;if(At(e,t,i)>=0)return!1;let a=e.x,s=t.x,o=i.x,r=e.y,l=t.y,c=i.y,u=a<s?a<o?a:o:s<o?s:o,d=r<l?r<c?r:c:l<c?l:c,h=a>s?a>o?a:o:s>o?s:o,p=r>l?r>c?r:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&va(a,r,s,l,o,c,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Av(n,e,t,i){let a=n.prev,s=n,o=n.next;if(At(a,s,o)>=0)return!1;let r=a.x,l=s.x,c=o.x,u=a.y,d=s.y,h=o.y,p=r<l?r<c?r:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,v=r>l?r>c?r:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,f=rc(p,g,e,t,i),S=rc(v,m,e,t,i),y=n.prevZ,b=n.nextZ;for(;y&&y.z>=f&&b&&b.z<=S;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==a&&y!==o&&va(r,u,l,d,c,h,y.x,y.y)&&At(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==a&&b!==o&&va(r,u,l,d,c,h,b.x,b.y)&&At(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==a&&y!==o&&va(r,u,l,d,c,h,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==a&&b!==o&&va(r,u,l,d,c,h,b.x,b.y)&&At(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Cv(n,e,t){let i=n;do{let a=i.prev,s=i.next.next;!Zr(a,s)&&Qd(a,i,i.next,s)&&gs(a,s)&&gs(s,a)&&(e.push(a.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),vs(i),vs(i.next),i=n=s),i=i.next}while(i!==n);return $i(i)}function Rv(n,e,t,i,a,s){let o=n;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&Fv(o,r)){let l=$d(o,r);o=$i(o,o.next),l=$i(l,l.next),ms(o,e,t,i,a,s,0),ms(l,e,t,i,a,s,0);return}r=r.next}o=o.next}while(o!==n)}function Pv(n,e,t,i){let a=[],s,o,r,l,c;for(s=0,o=e.length;s<o;s++)r=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Xd(n,r,l,i,!1),c===c.next&&(c.steiner=!0),a.push(Ov(c));for(a.sort(Iv),s=0;s<a.length;s++)t=Lv(a[s],t);return t}function Iv(n,e){return n.x-e.x}function Lv(n,e){let t=Dv(n,e);if(!t)return e;let i=$d(t,n);return $i(i,i.next),$i(t,t.next)}function Dv(n,e){let t=e,i=-1/0,a,s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,a=t.x<t.next.x?t:t.next,h===s))return a}t=t.next}while(t!==e);if(!a)return null;let r=a,l=a.x,c=a.y,u=1/0,d;t=a;do s>=t.x&&t.x>=l&&s!==t.x&&va(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),gs(t,n)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Nv(a,t)))&&(a=t,u=d)),t=t.next;while(t!==r);return a}function Nv(n,e){return At(n.prev,n,e.prev)<0&&At(e.next,n,n.next)<0}function Uv(n,e,t,i){let a=n;do a.z===0&&(a.z=rc(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,zv(a)}function zv(n){let e,t,i,a,s,o,r,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,r=0,e=0;e<c&&(r++,i=i.nextZ,!!i);e++);for(l=c;r>0||l>0&&i;)r!==0&&(l===0||!i||t.z<=i.z)?(a=t,t=t.nextZ,r--):(a=i,i=i.nextZ,l--),s?s.nextZ=a:n=a,a.prevZ=s,s=a;t=i}s.nextZ=null,c*=2}while(o>1);return n}function rc(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ov(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function va(n,e,t,i,a,s,o,r){return(a-o)*(e-r)>=(n-o)*(s-r)&&(n-o)*(i-r)>=(t-o)*(e-r)&&(t-o)*(s-r)>=(a-o)*(i-r)}function Fv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Bv(n,e)&&(gs(n,e)&&gs(e,n)&&kv(n,e)&&(At(n.prev,n,e.prev)||At(n,e.prev,e))||Zr(n,e)&&At(n.prev,n,n.next)>0&&At(e.prev,e,e.next)>0)}function At(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Zr(n,e){return n.x===e.x&&n.y===e.y}function Qd(n,e,t,i){let a=or(At(n,e,t)),s=or(At(n,e,i)),o=or(At(t,i,n)),r=or(At(t,i,e));return!!(a!==s&&o!==r||a===0&&rr(n,t,e)||s===0&&rr(n,i,e)||o===0&&rr(t,n,i)||r===0&&rr(t,e,i))}function rr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function or(n){return n>0?1:n<0?-1:0}function Bv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Qd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function gs(n,e){return At(n.prev,n,n.next)<0?At(n,e,n.next)>=0&&At(n,n.prev,e)>=0:At(n,e,n.prev)<0||At(n,n.next,e)<0}function kv(n,e){let t=n,i=!1,a=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&a<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function $d(n,e){let t=new oc(n.i,n.x,n.y),i=new oc(e.i,e.x,e.y),a=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function yd(n,e,t,i){let a=new oc(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function vs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function oc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hv(n,e,t,i){let a=0;for(let s=e,o=t-i;s<t;s+=i)a+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return a}var cs=class n{static area(e){let t=e.length,i=0;for(let a=t-1,s=0;s<t;a=s++)i+=e[a].x*e[s].y-e[s].x*e[a].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],a=[],s=[];_d(e),Md(i,e);let o=e.length;t.forEach(_d);for(let l=0;l<t.length;l++)a.push(o),o+=t[l].length,Md(i,t[l]);let r=wv.triangulate(i,a);for(let l=0;l<r.length;l+=3)s.push(r.slice(l,l+3));return s}};function _d(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Md(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var bs=class n extends nn{constructor(e=new Ia([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,a=[],s=[];for(let r=0,l=e.length;r<l;r++){let c=e[r];o(c)}this.setAttribute("position",new pt(a,3)),this.setAttribute("uv",new pt(s,2)),this.computeVertexNormals();function o(r){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Vv,y,b=!1,R,w,C,I;f&&(y=f.getSpacedPoints(u),b=!0,h=!1,R=f.computeFrenetFrames(u,!1),w=new L,C=new L,I=new L),h||(m=0,p=0,g=0,v=0);let _=r.extractPoints(c),x=_.shape,A=_.holes;if(!cs.isClockWise(x)){x=x.reverse();for(let j=0,le=A.length;j<le;j++){let P=A[j];cs.isClockWise(P)&&(A[j]=P.reverse())}}let z=cs.triangulateShape(x,A),q=x;for(let j=0,le=A.length;j<le;j++){let P=A[j];x=x.concat(P)}function Y(j,le,P){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(le,P)}let F=x.length,G=z.length;function O(j,le,P){let ze,oe,Me,pe=j.x-le.x,qe=j.y-le.y,fe=P.x-j.x,T=P.y-j.y,M=pe*pe+qe*qe,k=pe*T-qe*fe;if(Math.abs(k)>Number.EPSILON){let J=Math.sqrt(M),te=Math.sqrt(fe*fe+T*T),K=le.x-qe/J,De=le.y+pe/J,xe=P.x-T/te,Ae=P.y+fe/te,rt=((xe-K)*T-(Ae-De)*fe)/(pe*T-qe*fe);ze=K+pe*rt-j.x,oe=De+qe*rt-j.y;let ce=ze*ze+oe*oe;if(ce<=2)return new ge(ze,oe);Me=Math.sqrt(ce/2)}else{let J=!1;pe>Number.EPSILON?fe>Number.EPSILON&&(J=!0):pe<-Number.EPSILON?fe<-Number.EPSILON&&(J=!0):Math.sign(qe)===Math.sign(T)&&(J=!0),J?(ze=-qe,oe=pe,Me=Math.sqrt(M)):(ze=pe,oe=qe,Me=Math.sqrt(M/2))}return new ge(ze/Me,oe/Me)}let se=[];for(let j=0,le=q.length,P=le-1,ze=j+1;j<le;j++,P++,ze++)P===le&&(P=0),ze===le&&(ze=0),se[j]=O(q[j],q[P],q[ze]);let he=[],ve,Ce=se.concat();for(let j=0,le=A.length;j<le;j++){let P=A[j];ve=[];for(let ze=0,oe=P.length,Me=oe-1,pe=ze+1;ze<oe;ze++,Me++,pe++)Me===oe&&(Me=0),pe===oe&&(pe=0),ve[ze]=O(P[ze],P[Me],P[pe]);he.push(ve),Ce=Ce.concat(ve)}for(let j=0;j<m;j++){let le=j/m,P=p*Math.cos(le*Math.PI/2),ze=g*Math.sin(le*Math.PI/2)+v;for(let oe=0,Me=q.length;oe<Me;oe++){let pe=Y(q[oe],se[oe],ze);de(pe.x,pe.y,-P)}for(let oe=0,Me=A.length;oe<Me;oe++){let pe=A[oe];ve=he[oe];for(let qe=0,fe=pe.length;qe<fe;qe++){let T=Y(pe[qe],ve[qe],ze);de(T.x,T.y,-P)}}}let Xe=g+v;for(let j=0;j<F;j++){let le=h?Y(x[j],Ce[j],Xe):x[j];b?(C.copy(R.normals[0]).multiplyScalar(le.x),w.copy(R.binormals[0]).multiplyScalar(le.y),I.copy(y[0]).add(C).add(w),de(I.x,I.y,I.z)):de(le.x,le.y,0)}for(let j=1;j<=u;j++)for(let le=0;le<F;le++){let P=h?Y(x[le],Ce[le],Xe):x[le];b?(C.copy(R.normals[j]).multiplyScalar(P.x),w.copy(R.binormals[j]).multiplyScalar(P.y),I.copy(y[j]).add(C).add(w),de(I.x,I.y,I.z)):de(P.x,P.y,d/u*j)}for(let j=m-1;j>=0;j--){let le=j/m,P=p*Math.cos(le*Math.PI/2),ze=g*Math.sin(le*Math.PI/2)+v;for(let oe=0,Me=q.length;oe<Me;oe++){let pe=Y(q[oe],se[oe],ze);de(pe.x,pe.y,d+P)}for(let oe=0,Me=A.length;oe<Me;oe++){let pe=A[oe];ve=he[oe];for(let qe=0,fe=pe.length;qe<fe;qe++){let T=Y(pe[qe],ve[qe],ze);b?de(T.x,T.y+y[u-1].y,y[u-1].x+P):de(T.x,T.y,d+P)}}}Z(),re();function Z(){let j=a.length/3;if(h){let le=0,P=F*le;for(let ze=0;ze<G;ze++){let oe=z[ze];Be(oe[2]+P,oe[1]+P,oe[0]+P)}le=u+m*2,P=F*le;for(let ze=0;ze<G;ze++){let oe=z[ze];Be(oe[0]+P,oe[1]+P,oe[2]+P)}}else{for(let le=0;le<G;le++){let P=z[le];Be(P[2],P[1],P[0])}for(let le=0;le<G;le++){let P=z[le];Be(P[0]+F*u,P[1]+F*u,P[2]+F*u)}}i.addGroup(j,a.length/3-j,0)}function re(){let j=a.length/3,le=0;be(q,le),le+=q.length;for(let P=0,ze=A.length;P<ze;P++){let oe=A[P];be(oe,le),le+=oe.length}i.addGroup(j,a.length/3-j,1)}function be(j,le){let P=j.length;for(;--P>=0;){let ze=P,oe=P-1;oe<0&&(oe=j.length-1);for(let Me=0,pe=u+m*2;Me<pe;Me++){let qe=F*Me,fe=F*(Me+1),T=le+ze+qe,M=le+oe+qe,k=le+oe+fe,J=le+ze+fe;Le(T,M,k,J)}}}function de(j,le,P){l.push(j),l.push(le),l.push(P)}function Be(j,le,P){ke(j),ke(le),ke(P);let ze=a.length/3,oe=S.generateTopUV(i,a,ze-3,ze-2,ze-1);ot(oe[0]),ot(oe[1]),ot(oe[2])}function Le(j,le,P,ze){ke(j),ke(le),ke(ze),ke(le),ke(P),ke(ze);let oe=a.length/3,Me=S.generateSideWallUV(i,a,oe-6,oe-3,oe-2,oe-1);ot(Me[0]),ot(Me[1]),ot(Me[3]),ot(Me[1]),ot(Me[2]),ot(Me[3])}function ke(j){a.push(l[j*3+0]),a.push(l[j*3+1]),a.push(l[j*3+2])}function ot(j){s.push(j.x),s.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Gv(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let r=t[e.shapes[s]];i.push(r)}let a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new Fr[a.type]().fromJSON(a)),new n(i,e.options)}},Vv={generateTopUV:function(n,e,t,i,a){let s=e[t*3],o=e[t*3+1],r=e[i*3],l=e[i*3+1],c=e[a*3],u=e[a*3+1];return[new ge(s,o),new ge(r,l),new ge(c,u)]},generateSideWallUV:function(n,e,t,i,a,s){let o=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[a*3],p=e[a*3+1],g=e[a*3+2],v=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(r-u)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-d),new ge(h,1-g),new ge(v,1-f)]:[new ge(r,1-l),new ge(u,1-d),new ge(p,1-g),new ge(m,1-f)]}};function Gv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kr=class n extends nn{constructor(e=.5,t=1,i=32,a=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:o},i=Math.max(3,i),a=Math.max(1,a);let r=[],l=[],c=[],u=[],d=e,h=(t-e)/a,p=new L,g=new ge;for(let v=0;v<=a;v++){for(let m=0;m<=i;m++){let f=s+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<a;v++){let m=v*(i+1);for(let f=0;f<i;f++){let S=f+m,y=S,b=S+i+1,R=S+i+2,w=S+1;r.push(y,b,w),r.push(b,R,w)}}this.setIndex(r),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Pn=class n extends nn{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+r,Math.PI),c=0,u=[],d=new L,h=new L,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let S=[],y=f/i,b=0;f===0&&o===0?b=.5/t:f===i&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let w=R/t;d.x=-e*Math.cos(a+w*s)*Math.sin(o+y*r),d.y=e*Math.cos(o+y*r),d.z=e*Math.sin(a+w*s)*Math.sin(o+y*r),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(w+b,1-y),S.push(c++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){let y=u[f][S+1],b=u[f][S],R=u[f+1][S],w=u[f+1][S+1];(f!==0||o>0)&&p.push(y,b,w),(f!==i-1||l<Math.PI)&&p.push(b,R,w)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ei=class n extends nn{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);let o=[],r=[],l=[],c=[],u=new L,d=new L,h=new L;for(let p=0;p<=i;p++)for(let g=0;g<=a;g++){let v=g/a*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),r.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/a),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=a;g++){let v=(a+1)*p+g-1,m=(a+1)*(p-1)+g-1,f=(a+1)*(p-1)+g,S=(a+1)*p+g;o.push(v,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Hr=class n extends nn{constructor(e=new zr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:a,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let r=new L,l=new L,c=new ge,u=new L,d=[],h=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function v(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),S(),f()}function m(y){u=e.getPointAt(y/t,u);let b=o.normals[y],R=o.binormals[y];for(let w=0;w<=a;w++){let C=w/a*Math.PI*2,I=Math.sin(C),_=-Math.cos(C);l.x=_*b.x+I*R.x,l.y=_*b.y+I*R.y,l.z=_*b.z+I*R.z,l.normalize(),h.push(l.x,l.y,l.z),r.x=u.x+i*l.x,r.y=u.y+i*l.y,r.z=u.z+i*l.z,d.push(r.x,r.y,r.z)}}function f(){for(let y=1;y<=t;y++)for(let b=1;b<=a;b++){let R=(a+1)*(y-1)+(b-1),w=(a+1)*y+(b-1),C=(a+1)*y+b,I=(a+1)*(y-1)+b;g.push(R,w,I),g.push(w,C,I)}}function S(){for(let y=0;y<=t;y++)for(let b=0;b<=a;b++)c.x=y/t,c.y=b/a,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Fr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Xt=class extends Mi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vr=class extends Mi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function lr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var La=class{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,a=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<a)){for(let r=i+2;;){if(a===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=a,a=t[++i],e<a)break e}o=t.length;break t}if(!(e>=s)){let r=t[1];e<r&&(i=2,s=r);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let r=i+o>>>1;e<t[r]?o=r:i=r+1}if(a=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=e*a;for(let o=0;o!==a;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lc=class extends La{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(e,t,i){let a=this.parameterPositions,s=e-2,o=e+1,r=a[s],l=a[o];if(r===void 0)switch(this.getSettings_().endingStart){case Mu:s=e,r=2*t-i;break;case Eu:s=a.length-2,r=t+a[s]-a[s+1];break;default:s=e,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mu:o=e,l=2*i-t;break;case Eu:o=1,l=i+a[1]-a[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,a){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(a-t),v=g*g,m=v*g,f=-h*m+2*h*v-h*g,S=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,b=p*m-p*v;for(let R=0;R!==r;++R)s[R]=f*o[u+R]+S*o[c+R]+y*o[l+R]+b*o[d+R];return s}},cc=class extends La{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,u=(i-t)/(a-t),d=1-u;for(let h=0;h!==r;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}},uc=class extends La{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case zl:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return zl;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){let i=this.times,a=i.length,s=0,o=a-1;for(;s!==a&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==a){s>=o&&(o=Math.max(o,1),s=o-1);let r=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*r,o*r)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let r=0;r!==s;r++){let l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,o),e=!1;break}o=l}if(a!==void 0&&qv(a))for(let r=0,l=a.length;r!==l;++r){let c=a[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===bo,s=e.length-1,o=1;for(let r=1;r<s;++r){let l=!1,c=e[r],u=e[r+1];if(c!==u&&(r!==1||c!==e[0]))if(a)l=!0;else{let d=r*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[p+g]){l=!0;break}}}if(l){if(r!==o){e[o]=e[r];let d=r*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let r=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[r+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=zl;var ji=class extends In{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=mr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends In{};dc.prototype.ValueTypeName="color";var hc=class extends In{};hc.prototype.ValueTypeName="number";var fc=class extends La{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=(i-t)/(a-t),c=e*r;for(let u=c+r;c!==u;c+=4)_i.slerpFlat(s,0,o,c-r,o,c,l);return s}},Gr=class extends In{InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends In{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=mr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends In{};pc.prototype.ValueTypeName="vector";var mc=class{constructor(e,t,i){let a=this,s=!1,o=0,r=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){r++,s===!1&&a.onStart!==void 0&&a.onStart(u,o,r),s=!0},this.itemEnd=function(u){o++,a.onProgress!==void 0&&a.onProgress(u,o,r),o===r&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Wv=new mc,gc=class{constructor(e){this.manager=e!==void 0?e:Wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(a,s){i.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},qr=class extends Da{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yo=new Mt,Ed=new L,Sd=new L,xs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ed),Sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sd),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vc=class extends xs{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=vr*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||a!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=a,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Wr=class extends Da{constructor(e,t,i=0,a=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=i,this.angle=a,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wd=new Mt,is=new L,Zo=new L,bc=class extends xs{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,a=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),i.position.copy(is),Zo.copy(i.position),Zo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Zo),i.updateMatrixWorld(),a.makeTranslation(-is.x,-is.y,-is.z),wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}},Xr=class extends Da{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new bc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xc=class extends xs{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new xc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Dc="\\[\\]\\.:\\/",Xv=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",Qv="[^"+Dc.replace("\\.","")+"]",$v=/((?:WC+[\/:])*)/.source.replace("WC",Nc),jv=/(WCOD+)?/.source.replace("WCOD",Qv),Yv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Zv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Jv=new RegExp("^"+$v+jv+Yv+Zv+"$"),Kv=["material","materials","bones","map"],yc=class{constructor(e,t,i){let a=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xv,"")}static parseTrackName(e){let t=Jv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);Kv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let r=s[o];if(r.name===t||r.uuid===t)return r;let l=i(r.children);if(l)return l}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,a=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[a];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=yc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Jr(n=512){let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=n/2;t.translate(i,i);let a=c=>{t.beginPath();for(let u=0;u<6;u++){let d=Math.PI/6+u*Math.PI/3;t.lineTo(Math.cos(d)*c,Math.sin(d)*c)}t.closePath()},s=t.createRadialGradient(0,0,i*.1,0,0,i);s.addColorStop(0,"rgba(40,120,255,.9)"),s.addColorStop(1,"rgba(0,10,60,0)"),t.fillStyle=s,t.fillRect(-i,-i,n,n),a(i*.86),s=t.createLinearGradient(0,-i,0,i),s.addColorStop(0,"#2a8cff"),s.addColorStop(1,"#06167a"),t.fillStyle=s,t.fill(),t.lineWidth=i*.05,t.strokeStyle="#bff2ff",t.stroke(),a(i*.72),t.lineWidth=i*.015,t.strokeStyle="#19b8ff",t.stroke();let o=i*.32,r=-i*.38,l=c=>[Math.cos(Math.PI/6+c*Math.PI/3)*o,r+Math.sin(Math.PI/6+c*Math.PI/3)*o];return[[[5,0],"#ffffff"],[[0,1,2],"#7fc8ff"],[[2,3,4],"#2a6aff"]].forEach(([c,u],d)=>{t.fillStyle=u,t.beginPath(),d===0?(t.moveTo(...l(4)),t.lineTo(...l(5)),t.lineTo(...l(0)),t.lineTo(0,r)):(c.forEach(h=>t.lineTo(...l(h))),t.lineTo(0,r)),t.closePath(),t.fill()}),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff",t.shadowColor="#00c8ff",t.shadowBlur=i*.08,t.font=`900 ${i*.2}px Arial Black, Impact, sans-serif`,t.fillText("EL",0,i*.1),t.font=`900 ${i*.34}px Arial Black, Impact, sans-serif`,t.fillText("CAZADOR",0,i*.42,i*1.62),t.shadowBlur=0,t.fillStyle="#ff2a6a",t.fillRect(-i*.5,i*.62,i,i*.04),e}var eo="Dani Ortuño",Oa=n=>n,It=[{id:"inteligente",nombre:"Teodoro Quesada",apodo:"El Inteligente",nivel:.86,rapidez:2.6,fuerte:"Geografía e historia",bio:"Dicen que tiene el cociente intelectual más alto del plató. Él dice que es modestia contarlo.",aspecto:Oa({traje:1381916,camisa:1052688,corbata:12587050,pelo:2763306,piel:14725264,gafas:!1}),frases:{intro:"Buenas tardes. Soy El Inteligente, y esta tarde no se me escapa nadie.",oferta:"Te ofrezco una cantidad que no vas a ver en tu vida. Atrévete a subir.",caza:"Cazado. La inteligencia siempre llega antes.",escapa:"Te has escapado. Hoy te has ganado mi respeto.",burla:"Esa me la sabía hasta mi gato.",final:"Dos minutos son una eternidad para una mente como la mía.",gana:"Inteligencia uno, equipo cero. Buenas tardes.",pierde:"Hoy habéis sido más inteligentes que yo. Enhorabuena."}},{id:"brujula",nombre:"Amparo Lledó",apodo:"La Brújula",nivel:.88,rapidez:2.9,fuerte:"Ciencia y literatura",bio:"Serena y metódica. Siempre señala el norte… y la respuesta correcta.",aspecto:Oa({traje:1714762,camisa:15790320,corbata:null,pelo:5913122,piel:15780008,melena:!0,gafas:!0}),frases:{intro:"Soy La Brújula. Yo nunca pierdo el rumbo.",oferta:"Mi oferta alta es generosa. La pregunta es si tú eres valiente.",caza:"Te he encontrado. Siempre encuentro el camino.",escapa:"Has llegado a casa. Bien navegado.",burla:"Te has desviado bastante, ¿eh?",final:"Veamos hacia dónde apunta la aguja.",gana:"Rumbo cumplido. Hasta la próxima.",pierde:"Me habéis desorientado. ¡Bravo!"}},{id:"muro",nombre:"Fermín Arriaga",apodo:"El Muro",nivel:.84,rapidez:2.4,fuerte:"Deportes y cine",bio:"Grande, tranquilo y con una memoria de hormigón armado. Por aquí no pasa nadie.",aspecto:Oa({traje:2763306,camisa:1710618,corbata:3815994,pelo:1118481,piel:13146224}),frases:{intro:"Soy El Muro. Y contra un muro no se corre: se choca.",oferta:"Coge la baja si quieres. Igual te sirve de poco.",caza:"Choque frontal. Cazado.",escapa:"Has saltado el muro. No pasa muy a menudo.",burla:"Ni un rasguño me has hecho.",final:"Ladrillo a ladrillo, voy a por vosotros.",gana:"El Muro sigue en pie.",pierde:"Me habéis derribado. Chapó."}},{id:"esfinge",nombre:"Begoña Solís",apodo:"La Esfinge",nivel:.9,rapidez:3.1,fuerte:"Arte y mitología",bio:"Enigmática, elegante y casi imposible de leer. Nadie la ha visto dudar.",aspecto:Oa({traje:3803690,camisa:1052688,corbata:null,pelo:657930,piel:15253664,melena:!0,falda:!0}),frases:{intro:"Soy La Esfinge. Responded a mis enigmas… si podéis.",oferta:"Mi enigma de hoy: ¿te atreves con la oferta alta?",caza:"Enigma resuelto. Y tú, cazado.",escapa:"Has descifrado el camino a casa.",burla:"Qué previsible.",final:"El tiempo es arena. Y yo la controlo.",gana:"La Esfinge guarda silencio… y gana.",pierde:"Habéis resuelto mi enigma. Me inclino."}},{id:"relampago",nombre:"Quique Montoro",apodo:"El Relámpago",nivel:.8,rapidez:1.8,fuerte:"Música y televisión",bio:"El pulsador más rápido del plató. Responde antes de que acabe la pregunta… y a veces acierta.",aspecto:Oa({traje:670346,camisa:16777215,corbata:16765466,pelo:11561514,piel:15911072}),frases:{intro:"¡Soy El Relámpago! Parpadea y ya te he cazado.",oferta:"¡Rápido, rápido, decide! Que me aburro.",caza:"¡Zas! ¡Cazado a la velocidad de la luz!",escapa:"Me has ganado en una carrera. Increíble.",burla:"¡Demasiado lento!",final:"¡Dos minutos! Me sobran uno y medio.",gana:"¡Rayo y trueno! ¡Gano yo!",pierde:"¡Me habéis dejado sin chispa!"}},{id:"catedratica",nombre:"Carmela Ibarra",apodo:"La Catedrática",nivel:.87,rapidez:2.8,fuerte:"Lengua e historia",bio:"Corrige la ortografía de los rótulos y la pronunciación de todo el equipo. Implacable pero entrañable.",aspecto:Oa({traje:4864554,camisa:16314592,corbata:null,pelo:13421772,piel:15780008,melena:!0,gafas:!0,falda:!0}),frases:{intro:"Soy La Catedrática. Hoy toca examen, y yo pongo las notas.",oferta:"Suspenso asegurado si te quedas en la baja. Sube nota.",caza:"Suspenso. Cazado.",escapa:"Aprobado con nota. Puedes irte a casa.",burla:"Se dice así, por cierto.",final:"Último examen del curso. Sentaos.",gana:"Matrícula de honor para mí.",pierde:"Sobresaliente para el equipo. Me rindo."}}],Kr=(n,e,t,i={})=>({nombre:"Concursante",rol:"Concursante",aspecto:Object.assign({traje:n,camisa:15266047,corbata:null,pelo:e,piel:t,pantalon:2238522},i)}),kn={pres:{nombre:eo,rol:"Presentador",aspecto:{traje:1712694,camisa:16777215,corbata:null,pelo:2759698,piel:15251600,tarjetas:!0}},pili:{nombre:"Pili",rol:"Regidora",aspecto:{traje:2105380,camisa:3355443,corbata:null,pelo:9059098,piel:15911080,melena:!0,cascos:!0}},chema:{nombre:"Chema",rol:"Técnico de sonido",aspecto:{traje:4020778,camisa:2236962,corbata:null,pelo:1118481,piel:13146224,cascos:!0,gafas:!0}},marga:{nombre:"Marga",rol:"Maquilladora",aspecto:{traje:9051996,camisa:16769264,corbata:null,pelo:14266970,piel:15911080,melena:!0,falda:!0}},ramon:{nombre:"Don Ramón",rol:"El jefe",aspecto:{traje:4868682,corbata:9048080,pelo:13421772,piel:15251608,gafas:!0}},encarna:{nombre:"Encarna",rol:"Público",aspecto:{traje:11553322,camisa:16765088,corbata:null,pelo:5913130,piel:15253664,melena:!0,falda:!0}},c0:Kr(2779786,2759184,14198912),c1:Kr(9054810,6961690,15911080,{melena:!0}),c2:Kr(3832378,1118481,11038794),c3:Kr(12618266,13148240,15780008,{melena:!0,gafas:!0})};for(let n of It)kn[n.id]={nombre:n.apodo,rol:"Cazador · "+n.nombre,aspecto:n.aspecto};var Uc=[["Marta","Enfermera","Zaragoza"],["Rubén","Profesor de Historia","Cáceres"],["Lucía","Ingeniera","Vigo"],["Paco","Taxista jubilado","Málaga"],["Nerea","Estudiante de Medicina","Bilbao"],["Andrés","Panadero","Valladolid"],["Rocío","Abogada","Sevilla"],["Jordi","Bibliotecario","Girona"],["Inés","Veterinaria","Logroño"],["Toni","Cocinero","Palma"]],Yd=[["Lola Brillo","humorista"],["Rubén Trazo","deportista olímpico"],["Mar Estela","presentadora"],["Teo Fogón","chef televisivo"],["Alba Rima","escritora"],["Nacho Compás","cantante"],["Vera Plató","actriz"],["Íñigo Gol","exfutbolista"]],Zd=["Fundación Sonrisas","Banco de Libros Solidario","Asociación Patitas","Mares Limpios","Abuelos en Red","Cocinas Solidarias"],Ln={e2020:{id:"e2020",nombre:"2020–2024 (clásica)",cadena:"La 1",porAcierto:1e3,ofertas:"clasica"},e2024:{id:"e2024",nombre:"2024–2025 (nuevas reglas)",cadena:"La 1 / La 2",porAcierto:200,ofertas:"nueva"}},Fa=[{id:"normal",emoji:"🎯",name:"Normal"},{id:"navidad",emoji:"🎄",name:"Navidad",banner:"ESPECIAL NAVIDAD"},{id:"aniversario",emoji:"🎂",name:"Aniversario",banner:"ESPECIAL 1.000 PROGRAMAS"},{id:"verano",emoji:"☀️",name:"Verano",banner:"ESPECIAL VERANO"}],sn={saludo:["¡Buenas tardes y bienvenidos a El Cazador!","¡Hola a todos! Esto es El Cazador, y yo soy Dani Ortuño."],equipo:"Hoy tenemos un equipo de cuatro valientes dispuestos a ganarle al cazador. ¡Un aplauso para ellos!",cazadorEntra:"Y ahora… ¿quién será el cazador de hoy? ¡Recibámoslo!",acumulacion:"Empezamos con la ronda de acumulación: un minuto para contestar todas las preguntas que puedas.",tiempo:"¡Se acabó el tiempo!",tablero:"Pasamos al tablero. El cazador te va a hacer sus ofertas.",cazado:["¡Oh, no! ¡El cazador te ha cazado!","Lo siento, el cazador te ha alcanzado."],casa:["¡Estás en casa! ¡Pasas a la caza final!","¡Has llegado a casa! ¡Enhorabuena!"],final:"Llegamos a la caza final. Dos minutos para avanzar todo lo que podáis. Pulsad antes de responder.",finalCazador:"Ahora le toca al cazador. Tiene dos minutos para alcanzaros. Si falla, podéis hacerle retroceder.",ganaEquipo:"¡Increíble! ¡El cazador no os ha alcanzado! ¡Os repartís el bote!",ganaCazador:"El cazador os ha alcanzado. Hoy el premio se queda en el plató.",despedida:"Esto ha sido todo por hoy. ¡Gracias por jugar! Hasta mañana en El Cazador.",bien:["¡Correcto!","¡Bien!","¡Sí!","¡Muy bien!"],mal:["No.","Incorrecto.","No era esa."],numerica:"Pregunta numérica de desempate. Escribid la cifra más aproximada.",todosCazados:"Os ha cazado a todos. Pero uno de vosotros jugará la caza final por cuatro mil euros."},Bt=(n,e,t)=>({id:n,titulo:e,pasos:t}),to={oculta:[Bt("o1","El tablero que baja solo",[["pili","Dani, hoy estrenamos el tablero motorizado. Súbete a la casilla de casa.","casa"],["pres","¿Motorizado? Oye, que esto se está inclinando más…","casa"],["chema","Uy, se me ha ido el mando. ¡Vamos cuesta abajo!","tablero"],["pres","¡Que llego a casa sin contestar ninguna pregunta!","casa"],["pili","¡Inocente, inocente! ¡Cámara oculta!","wide"]]),Bt("o2","El cazador en pijama",[["pres","Recibimos al cazador de hoy…","pres"],["inteligente","(El Inteligente aparece en pijama de rayas y zapatillas de conejito)","cazador"],["inteligente","Es que me habéis llamado a las siete de la mañana.","cazador"],["pres","¡Que estamos en directo!","pres"],["ramon","¡Inocente, inocente!","wide"]]),Bt("o3","La cabina roja que se cierra",[["muro","Me subo a mi cabina… ¡eh! ¿Quién ha cerrado la puerta?","cazador"],["chema","Es una cabina insonorizada nueva, Fermín. Solo te oímos por el pulsador.","wide"],["muro","¡Pues dejadme salir, que me toca cazar!","cazador"],["pili","¡Cámara oculta! ¡El Muro, encerrado!","wide"]]),Bt("o4","Las preguntas del revés",[["pres","Primera pregunta: ¿cuál es la capital de… Francia? Respuestas: París, Roma y… ¿Madrid?","pres"],["c0","París.","casa"],["pres","Incorrecto… según mi tarjeta es Roma. ¿Pero quién ha hecho estas tarjetas?","pres"],["marga","¡Las ha hecho mi sobrino! ¡Inocente!","wide"]]),Bt("o5","El público imitador",[["relampago","¡Soy El Relámpago!","cazador"],["encarna","(Todo el público grita a la vez: ¡Soy El Relámpago!)","grada"],["relampago","Oye, que el apodo es mío.","cazador"],["encarna","¡Cámara oculta, Quique! ¡Ensayamos toda la tarde!","grada"]]),Bt("o6","Las luces rosas para siempre",[["chema","Dani, se ha quedado atascado el cara a cara: la pared no deja de ser rosa.","wide"],["pres","Pues haremos un programa entero en rosa. Muy elegante.","pres"],["chema","(La pared se pone a parpadear con todos los colores del arcoíris)","wide"],["pres","¡Esto ya es una discoteca!","pres"],["chema","¡Inocente, inocente!","wide"]])],tomas:[Bt("t1","Casa, casita",[["pres","Y con esta respuesta… ¡estás en casita! Perdón, en casa.","casa"],["pili","¡Corten! Dani, que no es El Cazador infantil.","wide"],["pres","Es que me ha salido el lado tierno. Repetimos.","pres"]]),Bt("t2","El pulsador rebelde",[["pres","¡Caza final! Pulsad cuando sepáis la respuesta…","duelo"],["c1","(Pulsa) ¡Uy! Se ha quedado pegado.","mesa"],["chema","Suena sin parar… ¡piiii!","wide"],["pili","¡Corten! ¡Que alguien desenchufe el pulsador!","wide"]]),Bt("t3","El nombre equivocado",[["pres","Recibimos a La Brújula… ¡no, espera! ¡A El Inteligente!","pres"],["brujula","Dani, soy yo. Llevo gafas; El Inteligente, no.","cazador"],["pili","¡Corten!","wide"],["pres","Es que con las luces de la cabina todos parecéis rojos.","pres"]]),Bt("t4","Risa en la cabina",[["esfinge","Soy La Esfinge… (se ríe) no puedo… ¡soy la Esfinge!","cazador"],["pres","La Esfinge riéndose. Esto no lo ha visto nadie.","pres"],["pili","¡Corten! Diez minutos y agua para todos.","wide"]]),Bt("t5","El tropiezo en la cuesta",[["c0","Subo al tablero y… ¡ay!","casa"],["pres","¿Estás bien? Esta rampa es más resbaladiza que las preguntas.","casa"],["pili","¡Corten! ¡Que traigan la alfombrilla!","wide"]]),Bt("t6","La oferta imposible",[["catedratica","Mi oferta alta es de… un millón de euros.","cazador"],["pres","Carmela, que no tenemos tanto presupuesto.","pres"],["catedratica","Pues lo pago yo, que estoy muy segura.","cazador"],["pili","¡Corten! ¡Producción, que nos arruinamos!","wide"]])],fuera:[Bt("f1","En maquillaje",[["marga","Quieto, Dani, que te brilla la frente como la pared de cubos.","pres"],["pres","Es por los focos, Marga. Los de tres luces queman muchísimo.","pres"],["marga","Pues más polvos. Hoy vas mate total.","pres"]]),Bt("f2","Ensayo del tablero",[["chema","Probando las luces del tablero: casilla uno, dos, tres… casa.","tablero"],["pili","La casilla cinco parpadea. ¿Es un fallo?","tablero"],["chema","No, es que está nerviosa. Como los concursantes.","wide"]]),Bt("f3","Los cazadores en el catering",[["inteligente","¿Quién se ha comido mi bocadillo?","wide"],["relampago","Yo no. Bueno, yo sí. Pero muy rápido.","wide"],["brujula","Te lo dije, Teodoro: siempre hay que marcarlo con nombre.","wide"]]),Bt("f4","Repaso de preguntas",[["pres","Pili, la pregunta ochenta y tres, ¿cómo se pronuncia este río?","pres"],["catedratica","Se pronuncia con acento en la e. Te lo apunto.","wide"],["pres","Gracias, profesora.","pres"]]),Bt("f5","El jefe visita el plató",[["ramon","Dani, el programa va de maravilla. Pero quiero más tensión en la caza final.","pres"],["pres","¿Más? Si ayer el cazador ganó por un segundo.","pres"],["ramon","Pues la próxima vez, por medio segundo.","pres"]]),Bt("f6","Calentamiento de cazadores",[["muro","Flexiones de dedos para el pulsador: uno, dos…","cazador"],["esfinge","Yo medito. El pulsador viene a mí.","cazador"],["relampago","Yo ya he pulsado. ¿Ha empezado?","cazador"]])]},zc=[{id:"estanoche",titulo:"Esta tarde",lineas:["Esta tarde, después del telediario…","Cuatro concursantes. Un cazador. Un tablero.","El Cazador. Con Dani Ortuño."]},{id:"casting",titulo:"Casting",lineas:["¿Te crees más rápido que un cazador?","¿Sabrías llegar a casa con la oferta alta?","Apúntate al casting de El Cazador."]},{id:"noche",titulo:"La noche de los cazadores",lineas:["Este viernes, un concursante contra cinco cazadores.","Un reloj de ajedrez. Sesenta segundos.","La noche de los cazadores."]},{id:"stars",titulo:"El cazador Stars",lineas:["Esta semana, famosos contra cazadores.","Todo lo que ganen será para una ONG.","El Cazador Stars."]},{id:"nuevo",titulo:"Los cazadores",lineas:["El Inteligente. La Brújula. El Muro.","La Esfinge. El Relámpago. La Catedrática.","¿Quién te cazará a ti?"]}],Oc=[{id:"pl1",titulo:"Próximo programa",lineas:["Hola, soy Dani Ortuño. Mañana un equipo de cuatro amigas quiere ir a por la oferta alta en todas las rondas.","¿Lo conseguirán? No te lo pierdas."]},{id:"pl2",titulo:"El bote",lineas:["El bote de la caza final no para de crecer: cinco mil euros más cada programa.","¿Quién se lo llevará? Te espero."]},{id:"pl3",titulo:"Desde el tablero",lineas:["Esto es el tablero: arriba, el cazador; abajo, casa.","En medio, tus nervios. Juega con nosotros desde el sofá."]}],Fc=[{id:"a1",titulo:"Zapatillas Escapada",lineas:["¿El cazador te pisa los talones?","Zapatillas Escapada: para llegar a casa antes que nadie."]},{id:"a2",titulo:"Cerrojos Casa Segura",lineas:["Cuando llegues a casa, que no entre nadie.","Cerrojos Casa Segura. Ni el cazador."]},{id:"a3",titulo:"Relojes Dos Minutos",lineas:["Relojes Dos Minutos: nunca se paran.","Bueno, solo cuando el cazador falla."]}],_s=[{id:"m1",tipo:"publico",titulo:"El cazador desayuna enciclopedias",lineas:["Dicen que los cazadores desayunan enciclopedias.","Yo he visto a uno mojando un atlas en el café con leche.","Y luego se quejaba de que la Patagonia estaba muy seca."]},{id:"m2",tipo:"telefono",titulo:"El pulsador de casa",lineas:["Mi madre ve el programa con un pulsador que se ha hecho con una sartén.","Cada vez que sabe una respuesta, le da un golpe a la sartén.","Los vecinos ya no saben si concursa o si está haciendo una tortilla."]},{id:"m3",tipo:"normas",titulo:"Las normas cambian",lineas:["Antes había oferta alta, media y baja.","Luego llegaron la mitad, el doble y el cuádruple.","Yo estoy esperando la oferta «invito yo a cenar»."]},{id:"m4",tipo:"publico",titulo:"La cuesta del tablero",lineas:["Este tablero tiene más pendiente que la cuesta de enero.","El otro día un concursante llegó a casa sin responder: se resbaló.","Le dimos el premio por valentía."]}],Bc=[["2009","The Chase","El formato nace en el Reino Unido (ITV) en 2009 y se exporta a muchos países. Un equipo de concursantes se enfrenta a un experto en preguntas: el cazador."],["10 feb 2020","Estreno en La 1","El Cazador se estrena en La 1 de Televisión Española el 10 de febrero de 2020, presentado por Ion Aramendi."],["2020–2024","Las reglas clásicas","Cuatro concursantes. Un minuto de acumulación a mil euros por acierto. En el tablero, ofertas alta, media y baja a seis, cinco o cuatro pasos de casa. Preguntas de tres opciones en los pulsadores; si te cazan, quedas eliminado. Si cazan a todos, uno juega la final por cuatro mil euros."],["2020–2024","La caza final","Dos minutos con pulsador: un paso por acierto y un paso de ventaja por cada concursante que llega. Después el cazador tiene dos minutos; cada fallo suyo da a los concursantes la opción de hacerle retroceder. Si no los alcanza, se reparten el premio."],["17 ene 2022","La noche de los cazadores","Llega la versión de «Beat The Chasers»: un concursante contra entre dos y cinco cazadores, cinco preguntas de acumulación, pujas de tiempo contra dinero y un duelo de sesenta segundos con reloj de ajedrez."],["2022","Rodrigo Vázquez","Rodrigo Vázquez toma el relevo de Ion Aramendi al frente del programa, que presentará hasta el final en 2026."],["11 abr 2024","El cazador Stars","Arranca la versión con famosos que juegan por ONG, con mil euros de consolación. La presentan Rodrigo Vázquez en 2024 y Gorka Rodríguez en 2024 y 2025, hasta el 10 de noviembre de 2025."],["abr 2024","Nuevas reglas","Acumulación a doscientos euros por acierto. Ofertas mitad, cantidad, doble y cuádruple, con tres, dos, uno o cero pasos de ventaja y de cuatro a siete pasos. El dinero se asegura al escapar y la final es por un bote que empieza en veinte mil euros y sube cinco mil por programa, tres mil en Stars. Quien más acierta en la final vuelve al día siguiente."],["25 abr 2025","Último programa en La 1","El Cazador se despide de La 1 el 25 de abril de 2025."],["12 may 2025","Paso a La 2","El 12 de mayo de 2025 el concurso continúa en La 2."],["dic 2025","Especiales de Navidad","Del 25 de diciembre de 2025 al 6 de enero de 2026 se emiten especiales navideños."],["6 ene 2026","El final","El último programa se emite el 6 de enero de 2026, tras catorce temporadas y mil ciento veintinueve programas."],["Hoy","Este juego","Un juego de fans hecho por Iker. Presentador y cazadores inventados, con voces sintéticas genéricas. No es oficial ni está afiliado al programa."]],Si={pubSale:"Nos vamos a publicidad. ¡No se vayan, que volvemos enseguida!",pubVuelve:"¡Ya estamos de vuelta! Seguimos con El Cazador.",apertura:["¡Público, un aplauso muy fuerte, que empezamos!","Bienvenidos al plató más azul de la tarde."],entraConc:"Y ahora, recibimos a nuestro equipo. ¡Adelante, a la mesa!",chistes:["¿Sabéis por qué el cazador nunca juega al escondite? Porque siempre encuentra a todo el mundo.","Mi perro se sabe todas las respuestas, pero solo pulsa con la nariz.","Dicen que el tablero tiene siete pasos. Yo cuento ocho cuando llevo prisa.","El otro día pregunté al público cuánto son dos más dos. El cazador contestó antes."],coproBien:["¡Bien! ¡Yo también lo sabía!","¡Qué crack! Así da gusto.","Un pasito más hacia casa.","¡Toma ya!"],coproMal:["¡Ay, no! ¡Qué pena!","Era difícil, ¿eh?","Yo habría dicho lo mismo."],coproPregunta:["Esta me la sé… creo.","Uf, qué nervios.","Piénsalo bien, que el cazador aprieta."]};var ti=(n,e=0)=>new Vr({color:n,emissive:e}),Jd=(n,e,t)=>{let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let a=new Pa(i);return a.colorSpace=Vt,a.anisotropy=4,a};function no(n,e,t){let i=new Pt,a=new _e(new Xi(n,e,3,8),t);return a.position.y=-e/2-n*.5,i.add(a),i}function Kd(n,e){n.fillStyle="#1a1a1a",n.beginPath(),n.ellipse(42,54,9,12,0,0,7),n.fill(),n.beginPath(),n.ellipse(86,54,9,12,0,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(45,50,3.5,0,7),n.fill(),n.beginPath(),n.arc(89,50,3.5,0,7),n.fill(),n.strokeStyle="#3a2414",n.lineWidth=5,n.lineCap="round",n.beginPath(),n.moveTo(30,34),n.lineTo(54,30),n.stroke(),n.beginPath(),n.moveTo(74,30),n.lineTo(98,34),n.stroke(),e?(n.fillStyle="#8a1c1c",n.beginPath(),n.moveTo(38,82),n.quadraticCurveTo(64,112,90,82),n.closePath(),n.fill(),n.fillStyle="#fff",n.fillRect(44,82,40,7)):(n.strokeStyle="#8a1c1c",n.lineWidth=5,n.beginPath(),n.moveTo(44,86),n.quadraticCurveTo(64,96,84,86),n.stroke())}function kc(n){let e=ti(n.piel??15911072,2757640),t=ti(n.traje??1778496,329488),i=ti(n.camisa??16777215),a=ti(n.corbata??2775807,662080),s=ti(1118481),o=ti(n.pelo??3810324),r=new Pt,l=new Pt;r.add(l);let c=n.falda?e:ti(n.pantalon??n.traje??1778496),u=no(.09,.62,c),d=no(.09,.62,c);u.position.set(-.11,.88,0),d.position.set(.11,.88,0),l.add(u,d);for(let _ of[u,d]){let x=new _e(new gt(.13,.08,.26),s);x.position.set(0,-.84,.05),_.add(x)}let h=new _e(new Xi(.21,.42,4,12),t);if(h.position.y=1.17,h.scale.set(1,1,.72),l.add(h),n.falda){let _=new _e(new ln(.2,.32,.45,16),t);_.position.y=.82,l.add(_)}let p=new _e(new an(.16,.36),i);if(p.position.set(0,1.3,.155),l.add(p),n.pajarita)for(let _ of[-1,1]){let x=new _e(new Qi(.045,.08,4),a);x.rotation.z=_*Math.PI/2,x.position.set(_*.04,1.46,.165),l.add(x)}else if(n.corbata!==null){let _=new _e(new an(.06,.3),a);_.position.set(0,1.29,.158),l.add(_)}for(let _ of[-1,1]){let x=new _e(new an(.06,.3),t);x.position.set(_*.075,1.3,.16),x.rotation.z=_*.25,l.add(x)}let g=no(.07,.5,t),v=no(.07,.5,t);g.position.set(-.29,1.44,0),g.rotation.z=-.12,v.position.set(.29,1.44,0),v.rotation.z=.12,l.add(g,v);for(let _ of[g,v]){let x=new _e(new Pn(.07,8,6),e);x.position.y=-.66,_.add(x)}let m=new _e(new ln(.06,.07,.12,8),e);m.position.y=1.52,l.add(m);let f=new Pt;f.position.y=1.7,l.add(f);let S=new _e(new Pn(.16,16,12),e);S.scale.set(.92,1.08,.98),f.add(S);let y=Jd(128,128,_=>Kd(_,!0)),b=Jd(128,128,_=>Kd(_,!1)),R=new _e(new Br(.13,20),new wt({map:b,transparent:!0}));R.position.set(0,-.01,.152),f.add(R);let w=new _e(new Pn(.165,14,8,0,Math.PI*2,0,Math.PI*.55),o);w.position.y=.03,w.scale.set(1,1.05,1.02),f.add(w);let C=new _e(new Qi(.08,.16,8),o);if(C.position.set(.02,.17,.08),C.rotation.set(.9,0,-.3),f.add(C),n.melena){let _=new _e(new ln(.17,.2,.32,14,1,!0,Math.PI*.25,Math.PI*1.5),o);_.material.side=dn,_.position.set(0,-.1,-.02),f.add(_)}for(let _ of[-1,1]){let x=new _e(new Pn(.035,6,6),e);x.scale.set(.6,1,1),x.position.set(_*.15,-.01,0),f.add(x)}if(n.gafas){let _=new wt({color:1118481});for(let A of[-1,1]){let B=new _e(new kr(.035,.05,12),_);B.position.set(A*.055,.02,.158),f.add(B)}let x=new _e(new gt(.2,.012,.01),_);x.position.set(0,.03,.16),f.add(x)}if(n.cascos){let _=ti(2236962),x=new _e(new Ei(.17,.02,6,16,Math.PI),_);x.position.y=.02,f.add(x);for(let A of[-1,1]){let B=new _e(new ln(.05,.05,.04,12),_);B.rotation.z=Math.PI/2,B.position.set(A*.17,0,0),f.add(B)}}if(n.tarjetas){let _=new _e(new gt(.1,.14,.01),ti(2775807,662080));_.position.set(0,-.7,.06),_.rotation.x=-.5,v.add(_)}let I={root:r,body:l,legL:u,legR:d,armL:g,armR:v,head:f,face:R,caraA:y,caraB:b,habla:!1,sentado:!1,t:Math.random()*10,gesto:0};return I.update=_=>{I.t+=_;let x=I.t;if(R.material.map=I.habla&&Math.sin(x*16)>0?y:b,f.rotation.y=Math.sin(x*.7)*.12+(I.habla?Math.sin(x*3.1)*.08:0),f.rotation.x=I.habla?Math.sin(x*5)*.05:0,l.position.y=I.sentado?0:Math.sin(x*1.6)*.006,I.sentado)u.rotation.x=d.rotation.x=-1.45,g.rotation.x=v.rotation.x=-.6;else if(I.anda){let A=Math.sin(x*8)*.5;u.rotation.x=A,d.rotation.x=-A,g.rotation.x=-A*.8,v.rotation.x=A*.8,l.position.y=Math.abs(Math.cos(x*8))*.03}else u.rotation.x=d.rotation.x=0,g.rotation.x=0,v.rotation.x=I.habla?-.3+Math.sin(x*2.5)*.25:0;I.gesto>0?(I.gesto-=_,v.rotation.z=.12+2.6*Math.min(1,I.gesto),g.rotation.z=-.12-2.6*Math.min(1,I.gesto)):(v.rotation.z=.12,g.rotation.z=-.12)},I}var Ms=(n,e,t)=>{let i=document.createElement("canvas");return i.width=n,i.height=e,t(i.getContext("2d"),n,e),i},Ba=n=>{let e=new Pa(n);return e.colorSpace=Vt,e.anisotropy=4,e};function eb(n,e,t,i,a){let s=i*Math.sqrt(3),o=i*1.5;for(let r=-1,l=0;r*o<t+i;r++,l++)for(let c=-1;c*s<e+i;c++){let u=c*s+(l%2?s/2:0),d=r*o,h=g=>[u+i*Math.cos(Math.PI/6+g*Math.PI/3),d+i*Math.sin(Math.PI/6+g*Math.PI/3)];[[h(5),h(0),[u,d],h(4)],[h(0),h(1),h(2),[u,d]],[[u,d],h(2),h(3),h(4)]].forEach((g,v)=>{n.fillStyle=a[(v+(c*7+r*3&3?0:1))%3],n.beginPath(),g.forEach(([m,f])=>n.lineTo(m,f)),n.closePath(),n.fill(),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=2,n.stroke()})}}function eh(n,e="media",t="es"){let i=new Rr({canvas:n,antialias:e!=="baja",preserveDrawingBuffer:!0});i.setPixelRatio(Math.min(devicePixelRatio,e==="alta"?2:1)),i.toneMapping=Mc,i.toneMappingExposure=1.1;let a=new Ir;a.background=new it(131852),a.fog=new Pr(131852,26,60);let s=new qt(50,1,.1,200);a.add(new qr(11585791,1054768,1.3));let o=new Qr(16777215,1.5);o.position.set(2,10,12),a.add(o);let r={es:new Pt,uk:new Pt};a.add(r.es,r.uk);let l=new Xt({color:15922426,metalness:.15,roughness:.25}),c=new wt({color:1685759}),u=new wt({color:8382719}),d=new Xt({color:724506,metalness:.6,roughness:.3}),h=Ba(Ms(1024,1024,V=>{V.fillStyle="#e9eef8",V.fillRect(0,0,1024,1024),V.strokeStyle="#b8c4dc",V.lineWidth=6;for(let H=0;H<=1024;H+=128)V.beginPath(),V.moveTo(H,0),V.lineTo(H,1024),V.stroke(),V.beginPath(),V.moveTo(0,H),V.lineTo(1024,H),V.stroke()}));h.wrapS=h.wrapT=wa,h.repeat.set(3,2);let p=new Xt({map:h,metalness:.3,roughness:.12,emissive:5925520,emissiveIntensity:.15}),g=new _e(new gt(22,.3,13),p);g.position.set(-3,.15,1.5),a.add(g);let v=new _e(new gt(22.2,.12,13.2),c);v.position.set(-3,.06,1.5),a.add(v);let m=new _e(new an(120,120),new Xt({color:197642,roughness:.4,metalness:.5}));m.rotation.x=-Math.PI/2,a.add(m);let f=Ba(Ms(1024,512,(V,H,ae)=>{V.fillStyle="#000",V.fillRect(0,0,H,ae),eb(V,H,ae,46,["#ffffff","#9aa4c8","#4a5480"])}));f.wrapS=wa,f.repeat.set(3,1);let S=new Xt({map:f,color:2779903,emissive:2779903,emissiveMap:f,emissiveIntensity:.9,roughness:.5}),y=new _e(new ln(24,24,7,64,1,!0,Math.PI*.78,Math.PI*.44),S);y.material.side=Wt,y.position.set(-2,3.5+.3,14),r.es.add(y);let b=new wt({color:16777215}),R=[];for(let V=-8;V<=8;V++){let H=Math.PI+V*.052,ae=-2+Math.sin(H)*22.5,ie=14+Math.cos(H)*22.5,Ge=new _e(new Ei(1.25,.07,6,6),b);if(Ge.position.set(ae,8.6,ie),Ge.rotation.y=-H+Math.PI,Ge.rotation.z=Math.PI/6,r.es.add(Ge),V%2===0){let He=new Pt;He.position.set(ae,7.1,ie+.6);for(let tt=0;tt<3;tt++){let jt=new _e(new Pn(.16,10,8),new wt({color:[16726666,16777215,9067263][tt]}));jt.position.set(Math.cos(tt*2.09)*.3,Math.sin(tt*2.09)*.3,0),He.add(jt)}r.es.add(He),R.push(He)}}let w=new _e(new Ei(22.4,.06,4,120,Math.PI*.44),c);w.rotation.x=Math.PI/2,w.rotation.z=Math.PI*.28-Math.PI*.5+Math.PI*.5,w.position.set(-2,.7+6.6,14),r.es.add(w);let C=new Ra(new Pn(.07,6,5),new wt({color:16760944}),160),I=new Mt;for(let V=0;V<160;V++){let H=Math.PI*.8+V/159*Math.PI*.4,ae=-2+Math.sin(H)*23.6,ie=14+Math.cos(H)*23.6;I.makeTranslation(ae,1.6+Math.sin(V*.9)*.05,ie),C.setMatrixAt(V,I)}r.es.add(C);let _=Ba(Ms(1024,256,(V,H,ae)=>{let ie=V.createLinearGradient(0,0,0,ae);ie.addColorStop(0,"#0a1a6a"),ie.addColorStop(1,"#2a5aff"),V.fillStyle=ie,V.fillRect(0,0,H,ae);for(let Ge=0;Ge<900;Ge++)V.fillStyle=`rgba(255,255,255,${Math.random()*.6})`,V.fillRect(Math.random()*H,Math.random()*ae,3+Math.random()*6,2+Math.random()*4)})),x=new _e(new ln(24,24,3.2,64,1,!0,Math.PI*.75,Math.PI*.5),new wt({map:_,side:Wt}));x.position.set(-2,2,14),r.uk.add(x);let A=new wt({color:10502399}),B=new Ia;for(let V=0;V<10;V++){let H=V%2?.18:.45,ae=V/10*Math.PI*2-Math.PI/2;V?B.lineTo(Math.cos(ae)*H,Math.sin(ae)*H):B.moveTo(Math.cos(ae)*H,Math.sin(ae)*H)}let z=new Xt({color:15265012,metalness:1,roughness:.2,emissive:6711927});for(let V=-12;V<=12;V++){let H=Math.PI+V*.036,ae=-2+Math.sin(H)*23,ie=14+Math.cos(H)*23,Ge=new _e(new gt(.35,5,.2),A);if(Ge.position.set(ae,6.2+V%3*.4,ie),Ge.rotation.y=H,r.uk.add(Ge),V%3===0){let He=new _e(new bs(B,{depth:.08,bevelEnabled:!1}),z);He.position.set(ae,5.6,ie+.5),He.rotation.y=H+Math.PI,r.uk.add(He)}}let q=new _e(new ln(8,8.2,.32,64),new Xt({color:1711674,metalness:.5,roughness:.25}));q.position.set(-4,.17,1),r.uk.add(q);let Y=new _e(new Ei(8.1,.06,6,96),new wt({color:16777215}));Y.rotation.x=Math.PI/2,Y.position.set(-4,.33,1),r.uk.add(Y);let F=new Pt;F.position.set(-7,.3,-2.2),a.add(F);let G=new _e(new gt(6.4,.12,1.1),l);G.position.y=1.1,F.add(G);let O=new _e(new gt(6.2,1.05,.9),l);O.position.y=.53,F.add(O);let se=Ms(1024,160,()=>{}),he=Ba(se),ve=new _e(new an(6,.95),new wt({map:he}));ve.position.set(0,.55,.46),F.add(ve);let Ce=new _e(new gt(6.44,.03,1.14),c);Ce.position.y=1.17,F.add(Ce);let Xe={nombres:["","","",""],dinero:"0 €",estados:[]};function Z(V={}){Object.assign(Xe,V);let H=se.getContext("2d"),ae=Ye==="uk",ie=H.createLinearGradient(0,0,0,160);ie.addColorStop(0,ae?"#1a1060":"#0a2a9a"),ie.addColorStop(1,ae?"#4a2aa0":"#0a1458"),H.fillStyle=ie,H.fillRect(0,0,1024,160),H.textAlign="center",H.textBaseline="middle",Xe.nombres.forEach((Ge,He)=>{let tt=128+He*256,jt=Xe.estados[He];H.fillStyle=jt==="cazado"?"#5a0a1a":jt==="casa"?"#0a6a3a":"#062070",H.strokeStyle="#8fd8ff",H.lineWidth=3,H.fillRect(tt-100,10,200,40),H.strokeRect(tt-100,10,200,40),H.fillStyle="#fff",H.font="700 24px Arial",H.fillText((Ge||"").toUpperCase(),tt,31,190)}),H.font="900 72px Arial Black, Arial",H.fillStyle="#fff",H.shadowColor="#5ad0ff",H.shadowBlur=18,H.fillText(ae?Xe.dinero.replace(/(.*) €/,"£$1").replace(/\./g,","):Xe.dinero,512,108),H.shadowBlur=0,he.needsUpdate=!0}let re=new Pt;re.position.set(-1.6,.3,1.2),re.rotation.y=-.6,a.add(re);let be=new _e(new ln(.28,.4,1.1,6),l);be.position.y=.55,re.add(be);let de=new _e(new gt(.7,.06,.5),l);de.position.y=1.12,de.rotation.x=.3,re.add(de);let Be=new _e(new ln(.41,.41,.04,6),c);Be.position.y=.05,re.add(Be);let Le=11,ke=3,ot=2.9,j=new Pt;j.position.set(1.4,1.15,2.6),j.rotation.order="YXZ",j.rotation.y=.72,j.rotation.x=Math.atan2(ot,Le),a.add(j);let le=new _e(new gt(ke+.8,.3,Le+.4),l);le.position.set(0,-.15,-Le/2),j.add(le);for(let V of[-1,1]){let H=new _e(new gt(.08,.1,Le+.4),c);H.position.set(V*(ke/2+.42),-.12,-Le/2),j.add(H)}let P=Ms(256,1024,()=>{}),ze=Ba(P),oe=new _e(new an(ke,Le),new wt({map:ze}));oe.rotation.x=-Math.PI/2,oe.position.set(0,.01,-Le/2),j.add(oe);let Me={filas:8,cazador:-1,conc:-1,etiqueta:"",textos:{}};function pe(V={}){Object.assign(Me,V);let H=P.getContext("2d"),ae=Ye==="uk",ie=Me.filas,Ge=110,He=(1024-Ge)/ie;H.fillStyle=ae?"#0a0a2a":"#020a3a",H.fillRect(0,0,256,1024),H.textAlign="center",H.textBaseline="middle";for(let tt=0;tt<ie;tt++){let jt=tt*He,Ht=ae?"#1a1a5a":"#0a2a9a";Me.cazador>=0&&tt<=Me.cazador&&(Ht=ae?"#e01a6a":"#d0102a"),tt===Me.conc&&(Ht=ae?"#2a6aff":"#19b8ff"),H.fillStyle=Ht,H.fillRect(8,jt+6,240,He-12),H.fillStyle="rgba(255,255,255,.75)",H.fillRect(8,jt+He-8,240,3);let oi=tt===Me.conc?Me.etiqueta:Me.textos[tt];oi&&(H.fillStyle="#fff",H.font="900 38px Arial Black, Arial",H.fillText(oi,128,jt+He/2,230))}H.fillStyle=ae?"#2a2a8a":"#1a4aff",H.fillRect(8,1024-Ge+4,240,Ge-10),H.fillStyle="#fff",H.font="900 52px Arial Black, Arial",H.fillText(ae?"HOME":"CASA",128,1024-Ge/2),ze.needsUpdate=!0}let qe=new Nt;qe.position.set(0,0,-Le-.2),j.add(qe),a.updateMatrixWorld(!0);let fe=qe.getWorldPosition(new L),T=new Pt;T.position.set(fe.x+Math.sin(j.rotation.y)*-1.4,0,fe.z+Math.cos(j.rotation.y)*-1.4),T.rotation.y=j.rotation.y,a.add(T);let M=new Xt({color:16718410,emissive:16718410,emissiveIntensity:.7,roughness:.4}),k=new _e(new gt(3.2,fe.y,2.6),d);k.position.y=fe.y/2,T.add(k);let J=new _e(new gt(3.3,.08,2.7),new wt({color:16730730}));J.position.y=fe.y,T.add(J);let te=new Ia;te.moveTo(-1.7,0),te.lineTo(1.7,0),te.lineTo(1.7,.7),te.lineTo(-1,.7),te.lineTo(-1,3),te.lineTo(1.7,3),te.lineTo(1.7,3.7),te.lineTo(-1.7,3.7),te.closePath();let K=new _e(new bs(te,{depth:2.6,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12}),M);K.rotation.y=Math.PI/2,K.position.set(1.3,fe.y+.05,1.3),T.add(K);let De=new _e(new gt(3,.9,.1),new Xt({color:16747168,transparent:!0,opacity:.45}));De.position.set(0,fe.y+.5,1.25),T.add(De);let xe=new wt({color:16738970}),Ae=new _e(new an(2.4,2.2),xe);Ae.position.set(0,fe.y+1.85,-1.05),T.add(Ae);let rt=new wt({color:16765148});for(let[V,H,ae,ie]of[[0,fe.y+3.85,3.6,.06],[0,fe.y+.02,3.6,.06],[-1.75,fe.y+1.9,.06,3.8]]){let Ge=new _e(new gt(ae,ie,.06),rt);Ge.position.set(V,H,1.45),T.add(Ge)}let ce=new _e(new gt(1.6,.95,.5),new Xt({color:1706514,emissive:5244952,roughness:.3}));ce.position.set(0,fe.y+.5,.55),T.add(ce);let Pe=new _e(new gt(1.7,.05,.6),rt);Pe.position.set(0,fe.y+.98,.55),T.add(Pe);for(let V=0;V<8;V++){let H=new _e(new gt(.9,.08,.35),d);H.position.set(2.05,fe.y*(V+1)/8,1-V*.3),T.add(H);let ae=new _e(new gt(.9,.02,.03),c);ae.position.set(2.05,fe.y*(V+1)/8+.05,1.17-V*.3),T.add(ae)}let Ve=new Pt;j.add(Ve);let Qe=V=>[-Math.sin(Math.PI*V)*1.6,-Math.sin(Math.PI*V)*1.1],Re=new an(ke,Le,1,48);Re.rotateX(-Math.PI/2),Re.translate(0,.02,-Le/2);let ct=V=>{let H=V.attributes.position;for(let ae=0;ae<H.count;ae++){let ie=-H.getZ(ae)/Le,[Ge,He]=Qe(Math.min(1,Math.max(0,ie)));H.setX(ae,H.getX(ae)+Ge),H.setY(ae,H.getY(ae)+He)}return H.needsUpdate=!0,V.computeVertexNormals(),V};Ve.add(new _e(ct(Re),new wt({map:ze})));let Je=new gt(ke+.8,.3,Le+.4,1,1,48);Je.translate(0,-.15,-Le/2),Ve.add(new _e(ct(Je),new Xt({color:15921407,roughness:.25})));for(let V of[-1,1]){let H=[];for(let ae=0;ae<=40;ae++){let ie=ae/40,[Ge,He]=Qe(ie);H.push(new L(V*(ke/2+.42)+Ge,He+.02,-ie*Le))}Ve.add(new _e(new Hr(new fs(H),60,.06,6),new wt({color:16743128})))}let xt=[le,oe,...j.children.filter(V=>V!==Ve&&V!==qe&&V!==le&&V!==oe)],D=new Xi(.16,.3,3,6),Ee=new Pn(.12,8,6),$=e==="baja"?120:260,ne=new Ra(D,new Xt({roughness:.8}),$),Se=new Ra(Ee,new Xt({color:14198920}),$);a.add(ne,Se);let Te=[ne,Se],Ke=new it,vt=0;for(let V=0;V<5;V++){let H=10.5+V*1.1,ae=.3+V*.5,ie=new _e(new gt(20,ae,1.1),new Xt({color:1053738}));ie.position.set(-3,ae/2,H),a.add(ie);let Ge=new _e(new gt(20,.04,.04),c);Ge.position.set(-3,ae+.02,H-.55),a.add(Ge);for(let He=0;He<40&&vt<$;He++){if(Math.random()<.1)continue;let tt=-12.5+He*.48;I.makeTranslation(tt,ae+.35,H),ne.setMatrixAt(vt,I),ne.setColorAt(vt,Ke.setHSL(Math.random(),.45,.3+Math.random()*.3)),I.makeTranslation(tt,ae+.75,H),Se.setMatrixAt(vt,I),vt++}}ne.count=Se.count=vt;let Ot=Ba(Jr(1024)),dt=new _e(new an(4,4),new wt({map:Ot,transparent:!0}));dt.position.set(-6,5.6,-9.4),a.add(dt);let rn=[],En=new wt({color:13624575,transparent:!0,opacity:.1,blending:pr,depthWrite:!1,side:dn});for(let V=0;V<12;V++){let H=new _e(new Qi(.9,12,16,1,!0),En);H.geometry.translate(0,-6,0);let ae=-16+V*2.6;H.position.set(ae,9,-8+Math.abs(ae+2)*.25),H.userData={a:V,f:.3+Math.random()*.4},a.add(H),rn.push(H)}let Pi=new Wr(16777215,300,40,.6,.5,1);Pi.position.set(-2,13,8),Pi.target.position.set(-2,0,0),a.add(Pi,Pi.target);let Wa=new Xr(16722522,30,14);Wa.position.set(T.position.x,fe.y+3,T.position.z+1),a.add(Wa);let $t={},Xa=V=>{let H=kc(kn[V].aspecto||{});return H.root.userData=H,H.root.visible=!1,a.add(H.root),$t[V]=H.root,H.root};Object.keys(kn).forEach(Xa);let Us=(V,H)=>{let ae=$t[V],ie=ae.position.clone(),Ge=ae.rotation.y,He=ae.visible;a.remove(ae);let tt=kc(H||kn[V].aspecto);return tt.root.userData=tt,a.add(tt.root),$t[V]=tt.root,tt.root.position.copy(ie),tt.root.rotation.y=Ge,tt.root.visible=He,tt.root},Qa=(V,H,ae,ie,Ge)=>{V.position.set(H,ae,ie),V.rotation.y=Ge,V.visible=!0,V.userData.sentado=!1},Sn=j.localToWorld(new L(-ke/2-.9,0,-.6)),$a=j.localToWorld(new L(ke/2+.9,0,-.8)),ri={mesa:[0,1,2,3].map(V=>[F.position.x-2.3+V*1.53,.3,F.position.z-.85,0]),atril:[re.position.x+.5,.3,re.position.z-.5,-.7],casa:[Sn.x,.3,Sn.z,j.rotation.y+Math.PI+.4],casaPres:[$a.x,.3,$a.z,j.rotation.y+Math.PI-.4],cazador:[T.position.x,fe.y+.05,T.position.z,j.rotation.y+Math.PI],centro:[-3,.3,3,0]},zs=(V,H,ae)=>{let ie=$t[V];if(!ie)return;let Ge=ae==null?ri[H]:ri[H][ae];Qa(ie,Ge[0],Ge[1],Ge[2],Ge[3])},bt=(V,H,ae)=>new L(V,H,ae),ea=T.position,Ii={wide:[bt(-4,5,15),bt(-1,1.8,-2)],mesa:[bt(-7,2.4,4.5),bt(-7,1.6,-2.6)],pres:[bt(-3.6,2,4.4),bt(-1.2,1.8,.6)],pres2:[bt(-1,1.9,6.5),bt(-1.2,1.7,.7)],tablero:[bt(-3,7,9),bt(5,2,-2)],casa:[bt(Sn.x+Math.sin(j.rotation.y+Math.PI+.4)*3.4-.8,1.9,Sn.z+Math.cos(j.rotation.y+Math.PI+.4)*3.4+1.2),bt(Sn.x,1.35,Sn.z)],cazador:[bt(ea.x-4,fe.y+2.2,ea.z+4.5),bt(ea.x,fe.y+1.6,ea.z)],duelo:[bt(-4,4,8),bt(4,2.4,-3)],grada:[bt(-3,2.5,4),bt(-3,2,13)],logo:[bt(-6,5,-2),bt(-6,5.6,-9.4)],cenital:[bt(-1,18,2.1),bt(-1,0,2)],copro:[bt(-3.5,1.9,6),bt(-2.4,1.6,2.2)],dos:[bt(-2.5,2.5,7.5),bt(-2,1.5,0)]},et={modo:"orbita",t:0,desde:null,hacia:null,mira:new L,dur:1.4,orbitR:14,orbitH:5,yaw:0,pitch:0};s.position.copy(Ii.wide[0]),s.lookAt(Ii.wide[1]);let E=(V,H=1.2)=>{let ae=Ii[V]||Ii.wide;et.modo="plano",et.t=0,et.dur=H,et.desde=[s.position.clone(),et.mira.clone()],et.hacia=ae},N=(V=14,H=5)=>{et.modo="orbita",et.orbitR=V,et.orbitH=H},W=()=>{et.modo="libre",s.position.set(-3,1.7,8),et.yaw=0,et.pitch=0},X=0,U=0,ue=0,we=!0,Oe=new it(2779903),Ne={x:0,z:0};function je(V){ue+=V;let H=n.clientWidth,ae=n.clientHeight;(H!==X||ae!==U)&&(X=H,U=ae,i.setSize(H,ae,!1),s.aspect=H/ae,s.fov=H/ae<1.2?65:50,s.updateProjectionMatrix());for(let ie of rn){let Ge=ie.userData;ie.rotation.x=Math.sin(ue*Ge.f+Ge.a)*.35,ie.rotation.z=Math.cos(ue*Ge.f*.8+Ge.a)*.35,ie.visible=we}S.color.lerp(Oe,Math.min(1,V*2)),S.emissive.copy(S.color);for(let ie in $t)$t[ie].visible&&$t[ie].userData.update(V);if(et.modo==="orbita"){let ie=ue*.08;s.position.set(-2+Math.sin(ie)*et.orbitR*.8,et.orbitH+Math.sin(ue*.3)*.5,2+Math.abs(Math.cos(ie))*et.orbitR*.8),et.mira.set(-1,1.6,-1)}else if(et.modo==="plano"){et.t=Math.min(1,et.t+V/et.dur);let ie=et.t<.5?2*et.t*et.t:1-Math.pow(-2*et.t+2,2)/2;s.position.lerpVectors(et.desde[0],et.hacia[0],ie),et.mira.lerpVectors(et.desde[1],et.hacia[1],ie),s.position.x+=Math.sin(ue*.4)*.04}else if(et.modo==="libre"){let ie=new L(Math.sin(et.yaw),0,-Math.cos(et.yaw)),Ge=new L(-ie.z,0,ie.x);s.position.addScaledVector(ie,-Ne.z*V*4).addScaledVector(Ge,Ne.x*V*4),s.position.y=1.7,et.mira.copy(s.position).add(new L(Math.sin(et.yaw)*Math.cos(et.pitch),Math.sin(et.pitch),-Math.cos(et.yaw)*Math.cos(et.pitch)))}s.lookAt(et.mira),i.render(a,s)}let Ye="es",Fe=V=>{Ye=V==="uk"?"uk":"es";let H=Ye==="uk";r.es.visible=!H,r.uk.visible=H,Ve.visible=H,xt.forEach(ae=>ae.visible=!H),g.visible=v.visible=!H,M.color.setHex(H?16734896:16718410),M.emissive.copy(M.color),c.color.setHex(H?12611839:1685759),a.background.setHex(H?328206:131852),Z(),pe()},ht=V=>Oe.setHex(V==="rosa"?16722586:V==="rojo"?16718378:2779903);return Fe(t),{recreaFigura:Us,aplicaEstilo:Fe,ponLogo:V=>{let H=new Jt(V);H.colorSpace=Vt,H.needsUpdate=!0,dt.material.map=H,dt.material.needsUpdate=!0},dePie:Qa,ponEn:zs,PUESTOS:ri,pintaMesa:Z,pintaTablero:pe,tono:ht,gradas:V=>Te.forEach(H=>H.visible=V),renderer:i,scene:a,camera:s,frame:je,plano:E,orbita:N,libre:W,cam:et,mueve:Ne,figuras:$t,PLANOS:Ii,toggleLuces:()=>we=!we}}var mn=Uint8Array,ka=Uint16Array,tb=Int32Array,th=new mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nh=new mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),nb=new mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ih=function(n,e){for(var t=new ka(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var a=new tb(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)a[s]=s-t[i]<<5|i;return{b:t,r:a}},ah=ih(th,2),sh=ah.b,ib=ah.r;sh[28]=258,ib[258]=28;var rh=ih(nh,0),ab=rh.b,lx=rh.r,qc=new ka(32768);for(mt=0;mt<32768;++mt)ni=(mt&43690)>>1|(mt&21845)<<1,ni=(ni&52428)>>2|(ni&13107)<<2,ni=(ni&61680)>>4|(ni&3855)<<4,qc[mt]=((ni&65280)>>8|(ni&255)<<8)>>1;var ni,mt,Es=(function(n,e,t){for(var i=n.length,a=0,s=new ka(e);a<i;++a)n[a]&&++s[n[a]-1];var o=new ka(e);for(a=1;a<e;++a)o[a]=o[a-1]+s[a-1]<<1;var r;if(t){r=new ka(1<<e);var l=15-e;for(a=0;a<i;++a)if(n[a])for(var c=a<<4|n[a],u=e-n[a],d=o[n[a]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)r[qc[d]>>l]=c}else for(r=new ka(i),a=0;a<i;++a)n[a]&&(r[a]=qc[o[n[a]-1]++]>>15-n[a]);return r}),Ss=new mn(288);for(mt=0;mt<144;++mt)Ss[mt]=8;var mt;for(mt=144;mt<256;++mt)Ss[mt]=9;var mt;for(mt=256;mt<280;++mt)Ss[mt]=7;var mt;for(mt=280;mt<288;++mt)Ss[mt]=8;var mt,oh=new mn(32);for(mt=0;mt<32;++mt)oh[mt]=5;var mt;var sb=Es(Ss,9,1);var rb=Es(oh,5,1),Hc=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Dn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Vc=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},ob=function(n){return(n+7)/8|0},Xc=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new mn(n.subarray(e,t))};var lb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],pn=function(n,e,t){var i=new Error(e||lb[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,pn),!t)throw i;return i},cb=function(n,e,t,i){var a=n.length,s=i?i.length:0;if(!a||e.f&&!e.l)return t||new mn(0);var o=!t,r=o||e.i!=2,l=e.i;o&&(t=new mn(a*3));var c=function(ot){var j=t.length;if(ot>j){var le=new mn(Math.max(j*2,ot));le.set(t),t=le}},u=e.f||0,d=e.p||0,h=e.b||0,p=e.l,g=e.d,v=e.m,m=e.n,f=a*8;do{if(!p){u=Dn(n,d,1);var S=Dn(n,d+1,3);if(d+=3,S)if(S==1)p=sb,g=rb,v=9,m=5;else if(S==2){var w=Dn(n,d,31)+257,C=Dn(n,d+10,15)+4,I=w+Dn(n,d+5,31)+1;d+=14;for(var _=new mn(I),x=new mn(19),A=0;A<C;++A)x[nb[A]]=Dn(n,d+A*3,7);d+=C*3;for(var B=Hc(x),z=(1<<B)-1,q=Es(x,B,1),A=0;A<I;){var Y=q[Dn(n,d,z)];d+=Y&15;var y=Y>>4;if(y<16)_[A++]=y;else{var F=0,G=0;for(y==16?(G=3+Dn(n,d,3),d+=2,F=_[A-1]):y==17?(G=3+Dn(n,d,7),d+=3):y==18&&(G=11+Dn(n,d,127),d+=7);G--;)_[A++]=F}}var O=_.subarray(0,w),se=_.subarray(w);v=Hc(O),m=Hc(se),p=Es(O,v,1),g=Es(se,m,1)}else pn(1);else{var y=ob(d)+4,b=n[y-4]|n[y-3]<<8,R=y+b;if(R>a){l&&pn(0);break}r&&c(h+b),t.set(n.subarray(y,R),h),e.b=h+=b,e.p=d=R*8,e.f=u;continue}if(d>f){l&&pn(0);break}}r&&c(h+131072);for(var he=(1<<v)-1,ve=(1<<m)-1,Ce=d;;Ce=d){var F=p[Vc(n,d)&he],Xe=F>>4;if(d+=F&15,d>f){l&&pn(0);break}if(F||pn(2),Xe<256)t[h++]=Xe;else if(Xe==256){Ce=d,p=null;break}else{var Z=Xe-254;if(Xe>264){var A=Xe-257,re=th[A];Z=Dn(n,d,(1<<re)-1)+sh[A],d+=re}var be=g[Vc(n,d)&ve],de=be>>4;be||pn(3),d+=be&15;var se=ab[de];if(de>3){var re=nh[de];se+=Vc(n,d)&(1<<re)-1,d+=re}if(d>f){l&&pn(0);break}r&&c(h+131072);var Be=h+Z;if(h<se){var Le=s-se,ke=Math.min(se,Be);for(Le+h<0&&pn(3);h<ke;++h)t[h]=i[Le+h]}for(;h<Be;++h)t[h]=t[h-se]}}e.l=p,e.p=Ce,e.b=h,e.f=u,p&&(u=1,e.m=v,e.d=g,e.n=m)}while(!u);return h!=t.length&&o?Xc(t,0,h):t.subarray(0,h)};var ub=new mn(0);var Hn=function(n,e){return n[e]|n[e+1]<<8},xn=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},Gc=function(n,e){return xn(n,e)+xn(n,e+4)*4294967296};function db(n,e){return cb(n,{i:2},e&&e.out,e&&e.dictionary)}var Wc=typeof TextDecoder<"u"&&new TextDecoder,hb=0;try{Wc.decode(ub,{stream:!0}),hb=1}catch{}var fb=function(n){for(var e="",t=0;;){var i=n[t++],a=(i>127)+(i>223)+(i>239);if(t+a>n.length)return{s:e,r:Xc(n,t-1)};a?a==3?(i=((i&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):a&1?e+=String.fromCharCode((i&31)<<6|n[t++]&63):e+=String.fromCharCode((i&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(i)}};function pb(n,e){if(e){for(var t="",i=0;i<n.length;i+=16384)t+=String.fromCharCode.apply(null,n.subarray(i,i+16384));return t}else{if(Wc)return Wc.decode(n);var a=fb(n),s=a.s,t=a.r;return t.length&&pn(8),s}}var mb=function(n,e){return e+30+Hn(n,e+26)+Hn(n,e+28)},gb=function(n,e,t){var i=Hn(n,e+28),a=Hn(n,e+30),s=pb(n.subarray(e+46,e+46+i),!(Hn(n,e+8)&2048)),o=e+46+i,r=vb(n,o,a,t,xn(n,e+20),xn(n,e+24),xn(n,e+42)),l=r[0],c=r[1],u=r[2];return[Hn(n,e+10),l,c,s,o+a+Hn(n,e+32),u]},vb=function(n,e,t,i,a,s,o){var r=a==4294967295,l=s==4294967295,c=o==4294967295,u=e+t,d=r+l+c;if(i&&d){for(;e+4<u;e+=4+Hn(n,e+2))if(Hn(n,e)==1)return[r?Gc(n,e+4+8*l):a,l?Gc(n,e+4):s,c?Gc(n,e+4+8*(l+r)):o,1];i<2&&pn(13)}return[a,s,o,0]};function lh(n,e){for(var t={},i=n.length-22;xn(n,i)!=101010256;--i)(!i||n.length-i>65558)&&pn(13);var a=Hn(n,i+8);if(!a)return{};var s=xn(n,i+16),o=xn(n,i-20)==117853008;if(o){var r=xn(n,i-12);o=xn(n,r)==101075792,o&&(a=xn(n,r+32),s=xn(n,r+48))}for(var l=e&&e.filter,c=0;c<a;++c){var u=gb(n,s,o),d=u[0],h=u[1],p=u[2],g=u[3],v=u[4],m=u[5],f=mb(n,m);s=v,(!l||l({name:g,size:h,originalSize:p,compression:d}))&&(d?d==8?t[g]=db(n.subarray(f,f+h),{out:new mn(p)}):pn(14,"unknown compression type "+d):t[g]=Xc(n,f,f+h))}return t}var Qc=()=>new Promise((n,e)=>{let t=indexedDB.open("cz_recursos",1);t.onupgradeneeded=()=>t.result.createObjectStore("r"),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)});async function ii(n,e){let t=await Qc();await new Promise((i,a)=>{let s=t.transaction("r","readwrite");s.objectStore("r").put(e,n),s.oncomplete=i,s.onerror=()=>a(s.error)}),Qt.cache[n]=e}async function io(n){let e=await Qc();await new Promise(t=>{let i=e.transaction("r","readwrite");n?i.objectStore("r").delete(n):i.objectStore("r").clear(),i.oncomplete=t,i.onerror=t}),n?delete Qt.cache[n]:Qt.cache={}}async function ch(){try{let n=await Qc();await new Promise(e=>{let t=n.transaction("r"),i=t.objectStore("r"),a=i.openCursor();a.onsuccess=()=>{let s=a.result;s?(Qt.cache[s.key]=s.value,s.continue()):e()},a.onerror=e})}catch{}}var Qt={cache:{}},ws=[["tema","Menú principal","mus_tc_intro_bed"],["cabecera","Cabecera / títulos","mus_tc_pre_and_titles"],["conoce","Presentación de los cazadores","mus_tc_who_is_chaser"],["entrada","Entrada del cazador","mus_tc_chaser_walk_on"],["acumulacion","Ronda de acumulación (1 minuto)","mus_tc_round_1_bed"],["haciaAcum","Entrada a la acumulación","sfx_tc_into_comp_whoosh"],["acumBote","Bote de la acumulación","sfx_tc_cash_builder_gfx"],["finTiempo","Fin del tiempo","sfx_tc_builder_timeup"],["ofertas","Ofertas del cazador","sfx_tc_cash_chosen_up"],["tablero","Cara a cara (tablero)","mus_tc_chase_question_bed"],["eligeC","Respuesta del concursante","sfx_chase_lock_in_cont"],["eligeZ","Respuesta del cazador","sfx_chase_lock_in_chaser"],["revelaC","Revela respuesta del concursante","sfx_tc_cont_answer_reveal"],["revelaZ","Revela respuesta del cazador","sfx_tc_chsr_answer_reveal"],["avanzaC","Avanza el concursante","sfx_tc_cont_moves"],["avanzaZ","Avanza el cazador","sfx_tc_chsr_moves"],["cazado","Cazado","sfx_tc_chsr_catch"],["casa","Llega a casa","sfx_tc_cont_win_chase"],["eleccion","Elección","sfx_tc_cont_choice"],["final","Caza final (2 minutos)","mus_tc_eng_game_2_mins"],["respFinalC","Acierto en la final (equipo)","sfx_tc_end_game_cont_answer"],["respFinalZ","Acierto en la final (cazador)","sfx_tc_end_game_chsr_answer"],["reloj","Aparece el reloj","sfx_tc_clock_appear"],["paraReloj","Para el reloj","sfx_tc_stop_the_clock"],["cuenta5","Últimos 5 segundos","sfx_5_sec_countdown"],["ganaEquipo","Gana el equipo","sfx_cont_win_string"],["corto","Golpe corto","sfx_short_string_v2"],["letsPlay","«Let's play»","sfx_lets_play"],["startClock","«Start the clock»","sfx_start_the_clock"],["tiempoYa","«Your time starts now»","sfx_your_time_start_now"],["enMarcha","«You're up and running»","sfx_youre_up_and_running"],["puedes","«You can do it»","sfx_you_can_do_it"],["amigos","«Have you got any friends»","sfx_have_you_got_any_friends"],["extra","Extra","sfx_spare_26"]];async function uh(n){let e=lh(new Uint8Array(await n.arrayBuffer())),t=JSON.parse(new TextDecoder().decode(e["project.json"])),i=[],a=new Set;for(let s of t.targets)for(let o of s.sounds||[])a.has(o.md5ext)||!e[o.md5ext]||(a.add(o.md5ext),i.push({nombre:o.name,blob:new Blob([e[o.md5ext]],{type:o.dataFormat==="mp3"?"audio/mpeg":"audio/wav"})}));return i}async function dh(n){let e=0;for(let t of n){let i=t.name.replace(/\.[^.]+$/,"");ws.some(a=>a[0].toLowerCase()===i.toLowerCase())&&(await ii("snd:"+ws.find(a=>a[0].toLowerCase()===i.toLowerCase())[0],t),e++)}return e}var ao={cadena:"Show Time TV",anuncios:[{id:"brillotex",marca:"Brillotex",producto:"Limpiador Brillotex Turbo",lema:"¡Brilla tanto que tendrás que ponerte gafas de sol!",color:["#00b4ff","#0040a0"],dibujo:"botella",voz:"sharvard",lineas:["¿Tu cocina está más sucia que la mochila de un adolescente?","Llega Brillotex Turbo. Una pasada, y todo brilla.","Brillotex Turbo. ¡Brilla tanto que tendrás que ponerte gafas de sol!"]},{id:"patatin",marca:"Patatín",producto:"Patatas Patatín sabor tortilla",lema:"¡Crujen tanto que se oyen en el piso de arriba!",color:["#ffd21a","#e05a00"],dibujo:"bolsa",voz:"ald",lineas:["¿Tortilla o patatas fritas? ¿Por qué elegir?","Nuevas Patatín sabor tortilla de patatas. Con cebolla o sin cebolla, tú decides.","Patatín. ¡Crujen tanto que se oyen en el piso de arriba!"]},{id:"dormilon",marca:"Dormilón",producto:"Colchón Dormilón Nube 3000",lema:"Dormirás tan bien que llegarás tarde a todo.",color:["#8a7aff","#2a1a7a"],dibujo:"colchon",voz:"daniela",lineas:["¿Das más vueltas en la cama que una moneda en el aire?","Colchón Dormilón Nube 3000. Tan blandito que parece hecho de nubes de verdad.","Dormilón. Dormirás tan bien que llegarás tarde a todo."]},{id:"turbocalcetin",marca:"Calcetinator",producto:"Calcetines Calcetinator antipérdida",lema:"Nunca más un calcetín solo.",color:["#ff5aa0","#7a0a3a"],dibujo:"calcetin",voz:"carlfm",lineas:["Metes dos calcetines en la lavadora… y sale uno. ¿Te suena?","Calcetinator. Los primeros calcetines con imán. Siempre van juntos, como los buenos amigos.","Calcetinator. Nunca más un calcetín solo."]},{id:"yogurin",marca:"Yogurín",producto:"Yogur Yogurín de churros con chocolate",lema:"El desayuno y la merienda, en un solo yogur.",color:["#ffb070","#7a3a10"],dibujo:"yogur",voz:"daniela",lineas:["¿Churros con chocolate para desayunar? ¿Y por qué no en un yogur?","Nuevo Yogurín sabor churros con chocolate. Sin aceite, sin grasa y sin madrugar.","Yogurín. El desayuno y la merienda, en un solo yogur."]},{id:"megafon",marca:"Megafón",producto:"Teléfono Megafón Ladrillo X",lema:"Tan resistente que puedes construir una casa con él.",color:["#3ac85a","#0a4a1a"],dibujo:"movil",voz:"ald",lineas:["¿Se te rompe el móvil cada vez que se te cae?","Megafón Ladrillo X. Batería para un mes, pantalla irrompible y pesa como un ladrillo. Porque es un ladrillo.","Megafón. Tan resistente que puedes construir una casa con él."]},{id:"gominola",marca:"Saltarín",producto:"Gominolas Saltarín que saltan solas",lema:"¡Tan divertidas que se escapan de la bolsa!",color:["#ff3a3a","#ffd23a"],dibujo:"gominolas",voz:"sharvard",lineas:["¡Atención, niños y mayores! Llegan las gominolas que saltan solas.","Gominolas Saltarín. Abres la bolsa… y boing, boing, directas a tu boca.","Saltarín. ¡Tan divertidas que se escapan de la bolsa!"]},{id:"aspirapelusa",marca:"Pelusín",producto:"Robot aspirador Pelusín que canta",lema:"Limpia tu casa y te canta una canción.",color:["#c8ccd8","#3a4050"],dibujo:"robot",voz:"carlfm",lineas:["¿Limpiar la casa te aburre? Pelusín lo hace por ti.","El robot aspirador que limpia, friega y además te canta mientras trabaja. La la la.","Pelusín. Limpia tu casa y te canta una canción."]}],cortinillas:{publicidad:"Publicidad",min1:"Volvemos en un minuto",seg30:"Volvemos en treinta segundos",anuncios3:"Tres anuncios",anuncio1:"Un anuncio",volvemos:"Volvemos con ¡Ahora caigo!"}};var bb=Object.assign({},ao.cortinillas,{volvemos:"Volvemos con El Cazador"}),Zi=ao.cadena||"Show Time TV",Ha=ao.anuncios,jc,fh,ph=(n,e)=>{jc=n,fh=e},As=class extends Error{},xb=(n,e,t,i,a,s)=>{n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+a,s),n.arcTo(e+i,t+a,e,t+a,s),n.arcTo(e,t+a,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()};function yb(n="entra"){try{let e=jc.ctx,t=e.currentTime+.02;(n==="entra"?[523,659,784,1047]:n==="sale"?[1047,784,659,880]:[784,988]).forEach((a,s)=>{let o=e.createOscillator(),r=e.createGain();o.type="triangle",o.frequency.value=a,r.gain.setValueAtTime(0,t+s*.13),r.gain.linearRampToValueAtTime(.18,t+s*.13+.02),r.gain.exponentialRampToValueAtTime(.001,t+s*.13+.5),o.connect(r),r.connect(e.destination),o.start(t+s*.13),o.stop(t+s*.13+.55)})}catch{}}function mh(n,e,t,i,a=1){n.save(),n.globalAlpha=a,n.translate(e,t);let s=i*.5;n.fillStyle="#ffd23a",n.beginPath();for(let o=0;o<10;o++){let r=o%2?s*.45:s,l=-Math.PI/2+o*Math.PI/5;n.lineTo(Math.cos(l)*r,Math.sin(l)*r)}n.closePath(),n.fill(),n.lineWidth=i*.05,n.strokeStyle="#a0500a",n.stroke(),n.font=`900 ${i*.34}px "Arial Black", Arial, sans-serif`,n.textAlign="left",n.textBaseline="middle",n.lineWidth=i*.08,n.strokeStyle="#2a0a5a",n.strokeText("SHOW TIME",s*1.15,-i*.12),n.fillStyle="#fff",n.fillText("SHOW TIME",s*1.15,-i*.12),n.font=`900 ${i*.28}px "Arial Black", Arial, sans-serif`,n.fillStyle="#ff5ad0",n.strokeText("TV",s*1.15,i*.24),n.fillText("TV",s*1.15,i*.24),n.restore()}function wi(n,e,t,i,a,s="#fff",o="#1a0a3a",r){n.font=`900 ${a}px "Arial Black", Arial, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=a*.16,n.strokeStyle=o,n.strokeText(e,t,i,r),n.fillStyle=s,n.fillText(e,t,i,r)}function _b(n,e,t,i){if(!i)return;n.save(),n.font=`700 ${Math.round(t*.04)}px system-ui, Arial`;let a=Math.min(e*.9,n.measureText(i).width+30);n.fillStyle="rgba(0,0,0,.6)",n.fillRect((e-a)/2,t*.88,a,t*.07),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.fillText(i,e/2,t*.915,e*.88),n.restore()}var $c=class{constructor(e){this.ses=e,this.vivo=!0,this.dibujo=null,this.t0=performance.now(),this.sub="";let t=this.div=document.createElement("div");t.id="showtime",t.style.cssText="position:fixed;inset:0;z-index:70;background:#000;cursor:pointer",this.c=document.createElement("canvas"),this.c.style.cssText="position:absolute;inset:0;width:100%;height:100%";let i=document.createElement("button");i.className="tbtn",i.id="stSaltar",i.textContent="Saltar ⏭",i.style.cssText="position:absolute;right:14px;bottom:14px;z-index:2",i.onclick=o=>{o.stopPropagation(),this.vivo=!1},t.append(this.c,i),document.body.appendChild(t);let a=()=>{let o=Math.min(2,devicePixelRatio||1);this.c.width=innerWidth*o,this.c.height=innerHeight*o};a(),this.tam=a,addEventListener("resize",a);let s=()=>{if(!this.div.isConnected)return;let o=this.c.getContext("2d"),r=this.c.width,l=this.c.height,c=(performance.now()-this.t0)/1e3;o.clearRect(0,0,r,l);try{this.dibujo&&this.dibujo(o,r,l,c)}catch{}this.marca&&mh(o,r*.86,l*.07,l*.06,.85),_b(o,r,l,this.sub),requestAnimationFrame(s)};requestAnimationFrame(s)}w(e){return new Promise((t,i)=>{let a=performance.now(),s=()=>{if(!this.vivo||!this.ses.alive)return i(new As);performance.now()-a>=e?t():setTimeout(s,50)};s()})}async habla(e,t){let i=fh(e,t);await Promise.race([i,new Promise((a,s)=>{let o=setInterval(()=>{(!this.vivo||!this.ses.alive)&&(clearInterval(o),s(new As))},60);i.then(()=>{clearInterval(o),a()})})])}escena(e,t=!0){this.dibujo=e,this.t0=performance.now(),this.marca=t,this.sub=""}cerrar(){removeEventListener("resize",this.tam),this.div.style.transition="opacity .3s",this.div.style.opacity="0",setTimeout(()=>this.div.remove(),320)}};async function Vn(n,e){let t={publicidad:["PUBLICIDAD",""],min1:["VOLVEMOS EN","1 MINUTO"],seg30:["VOLVEMOS EN","30 SEGUNDOS"],anuncios3:["3","ANUNCIOS"],anuncio1:["1","ANUNCIO"],volvemos:["VOLVEMOS CON","¿QUIÉN QUIERE SER MILLONARIO?"]}[e];yb(e==="volvemos"?"sale":"entra"),n.escena((i,a,s,o)=>{let r=i.createLinearGradient(0,0,a,s);r.addColorStop(0,"#2a0a6a"),r.addColorStop(.6,"#8a1ab0"),r.addColorStop(1,"#ff3a9a"),i.fillStyle=r,i.fillRect(0,0,a,s),i.save(),i.translate(a/2,s/2),i.rotate(o*.3);for(let d=0;d<16;d++)i.rotate(Math.PI/8),i.fillStyle=d%2?"rgba(255,210,60,.12)":"rgba(255,255,255,.05)",i.beginPath(),i.moveTo(0,0),i.lineTo(-a*.12,-a),i.lineTo(a*.12,-a),i.fill();i.restore();let l=Math.min(1,o/.45),c=1-Math.pow(1-l,3);mh(i,a*.5-s*.17,s*.2,s*.16*c),/^\d$/.test(t[0])?(i.save(),i.translate(a/2,s*.55),i.scale(c,c),i.fillStyle="#ffd23a",i.beginPath(),i.arc(0,0,s*.16,0,7),i.fill(),i.lineWidth=s*.02,i.strokeStyle="#fff",i.stroke(),i.lineWidth=s*.012,i.beginPath(),i.arc(0,0,s*.2,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,o/2.6)),i.stroke(),i.restore(),wi(i,t[0],a/2,s*.56,s*.22*c,"#2a0a5a","#fff"),wi(i,t[1],a/2,s*.82,s*.09*c,"#fff")):(wi(i,t[0],a/2-(1-c)*a,s*.52,s*(t[1]?.1:.17),"#fff","#2a0a5a",a*.9),t[1]&&wi(i,t[1],a/2+(1-c)*a,s*.68,s*.09,"#ffd23a","#2a0a5a",a*.9))},!1),await n.habla(bb[e],"st_daniela"),await n.w(500)}function Mb(n,e,t,i,a,s,o){n.save(),n.translate(t,i),n.rotate(Math.sin(s*2)*.08);let r=(c,u,d,h)=>{n.fillStyle="rgba(255,255,255,.35)",n.fillRect(c,u,d,h)},l=(c,u,d,h=.1)=>{xb(n,-c/2,-u/2,c,u,a*h),n.fillStyle=d,n.fill(),n.lineWidth=a*.03,n.strokeStyle="#0008",n.stroke()};if(e==="botella")l(a*.5,a*.9,o[0]),n.fillStyle=o[1],n.fillRect(-a*.1,-a*.62,a*.2,a*.18),r(-a*.18,-a*.35,a*.08,a*.6);else if(e==="bolsa"){n.beginPath(),n.moveTo(-a*.4,-a*.5),n.lineTo(a*.4,-a*.5),n.lineTo(a*.46,a*.5),n.lineTo(-a*.46,a*.5),n.closePath(),n.fillStyle=o[0],n.fill(),n.lineWidth=a*.03,n.strokeStyle="#0008",n.stroke();for(let c=0;c<5;c++)n.fillStyle="#ffe08a",n.beginPath(),n.ellipse(-a*.2+c*a*.1,a*.1+Math.sin(s*4+c)*a*.05,a*.08,a*.05,c,0,7),n.fill()}else if(e==="colchon"){l(a*1.1,a*.35,"#f4f4ff",.12),n.strokeStyle=o[0],n.lineWidth=a*.02;for(let c=-4;c<=4;c++)n.beginPath(),n.moveTo(c*a*.12,-a*.15),n.lineTo(c*a*.12,a*.15),n.stroke();for(let c=0;c<3;c++)n.fillStyle="rgba(255,255,255,.9)",n.beginPath(),n.arc(-a*.3+c*a*.3,-a*.4-Math.sin(s*2+c)*a*.05,a*.12,0,7),n.fill()}else if(e==="calcetin")for(let c of[-.2,.2])n.save(),n.translate(c*a,0),n.fillStyle=o[0],n.fillRect(-a*.12,-a*.45,a*.24,a*.6),n.beginPath(),n.ellipse(c<0?-a*.05:a*.05,a*.2,a*.22,a*.13,0,0,7),n.fill(),n.fillStyle="#fff",n.fillRect(-a*.12,-a*.45,a*.24,a*.08),n.restore();else if(e==="yogur")n.beginPath(),n.moveTo(-a*.3,-a*.35),n.lineTo(a*.3,-a*.35),n.lineTo(a*.24,a*.4),n.lineTo(-a*.24,a*.4),n.closePath(),n.fillStyle="#fff",n.fill(),n.strokeStyle="#0006",n.lineWidth=a*.03,n.stroke(),n.fillStyle=o[0],n.fillRect(-a*.27,-a*.1,a*.54,a*.2),n.fillStyle="#c0c4cc",n.fillRect(-a*.33,-a*.42,a*.66,a*.08);else if(e==="movil")l(a*.5,a*.9,"#7a4a2a",.04),l(a*.36,a*.5,"#1a2a4a",.03),r(-a*.15,-a*.2,a*.05,a*.4);else if(e==="gominolas")for(let c=0;c<7;c++){let u=-Math.abs(Math.sin(s*5+c))*a*.4;n.fillStyle=["#ff3a3a","#ffd23a","#3ac85a","#3a8aff","#ff5ad0"][c%5],n.beginPath(),n.ellipse(-a*.45+c*a*.15,a*.2+u,a*.07,a*.1,0,0,7),n.fill()}else e==="robot"&&(n.fillStyle=o[0],n.beginPath(),n.arc(0,0,a*.42,0,7),n.fill(),n.lineWidth=a*.04,n.strokeStyle=o[1],n.stroke(),n.fillStyle=o[1],n.beginPath(),n.arc(0,-a*.1,a*.12,0,7),n.fill(),n.fillStyle="#3aff8a",n.beginPath(),n.arc(0,-a*.1,a*.05,0,7),n.fill());n.restore()}async function Ts(n,e){let t=0;n.escena((i,a,s,o)=>{let r=i.createRadialGradient(a/2,s/2,10,a/2,s/2,a*.7);r.addColorStop(0,e.color[0]),r.addColorStop(1,e.color[1]),i.fillStyle=r,i.fillRect(0,0,a,s);for(let c=0;c<24;c++)i.fillStyle="rgba(255,255,255,.08)",i.beginPath(),i.arc(c*137%100/100*a,(c*71+o*40)%100/100*s,s*.02+c%4*s*.01,0,7),i.fill();let l=Math.min(1,o/.6);Mb(i,e.dibujo,a*(t<2?.3:.5),s*(t<2?.5:.42),s*.45*(.6+.4*l),o,e.color),t<2?(wi(i,e.marca.toUpperCase(),a*.68,s*.38,s*.12,"#fff","#000",a*.5),wi(i,e.producto,a*.68,s*.52,s*.045,"#ffe","#000",a*.55)):(wi(i,e.marca.toUpperCase(),a/2,s*.14,s*.11,"#fff","#000",a*.8),wi(i,e.lema,a/2,s*.74,s*.05,"#ffd23a","#000",a*.92)),i.font=`600 ${s*.022}px system-ui`,i.fillStyle="rgba(255,255,255,.7)",i.textAlign="left",i.fillText("Anuncio inventado · marca y producto ficticios",a*.02,s*.97)});for(let i=0;i<e.lineas.length;i++)t=i,n.sub=e.lineas[i],await n.habla(e.lineas[i],"st_"+e.voz),await n.w(250);await n.w(900)}var hh=n=>n.slice().sort(()=>Math.random()-.5);async function Yc(n="pausa",e){let t=new $c(e);jc.stopMusic();try{if(n.startsWith("anuncio:"))await Ts(t,Ha.find(i=>i.id===n.slice(8))||Ha[0]);else if(n==="cortinillas")for(let i of["publicidad","min1","anuncios3","seg30","anuncio1","volvemos"])await Vn(t,i);else if(n==="corta"){let i=hh(Ha);await Vn(t,"publicidad"),await Vn(t,"anuncio1"),await Ts(t,i[0]),await Vn(t,"volvemos")}else{let i=hh(Ha);await Vn(t,"publicidad"),await Vn(t,"min1"),await Vn(t,"anuncios3"),await Ts(t,i[0]),await Ts(t,i[1]),await Vn(t,"seg30"),await Vn(t,"anuncio1"),await Ts(t,i[2]),await Vn(t,"volvemos")}}catch(i){if(!(i instanceof As))throw t.cerrar(),i}t.cerrar()}var Zc=[["¿En qué cadena se estrenó El Cazador en 2020?","La 1","Antena 3","Cuatro"],["¿Qué productoras hicieron El Cazador?","Mediacrest e ITV Studios","Gestmusic y Banijay","Globomedia y Zeppelin"],["¿En qué año terminó El Cazador en La 2?","2026","2024","2022"],["¿Qué spin-off de El Cazador tenía a famosos como concursantes?","El cazador Stars","La noche de los cazadores","El cazador Kids"],["¿En qué año se estrenó La noche de los cazadores?","2022","2020","2024"],["¿Cuánto sumaba cada acierto en la acumulación hasta abril de 2024?","1.000 €","500 €","200 €"],["¿Cuánto suma cada acierto en la acumulación desde abril de 2024?","200 €","1.000 €","100 €"],["¿Con cuánto empieza el bote de la caza final en la mecánica nueva?","20.000 €","10.000 €","50.000 €"],["¿Cuánto aumenta el bote por programa en la mecánica nueva?","5.000 €","1.000 €","10.000 €"],["¿Cuántas preguntas hay que acertar jugando por la mitad en la mecánica nueva?","4","5","6"],["¿Qué pasa si el cazador falla en la caza final?","Hay rebote para el equipo","Pierde 10 segundos","El equipo gana directamente"],["¿Cuántos cazadores como máximo se enfrentan a un concursante en La noche de los cazadores?","5","3","7"],["¿Cuántos segundos tiene el concursante en el duelo de La noche de los cazadores?","60","90","45"],["¿Cómo se llama en España el concurso británico «Countdown»?","Cifras y letras","Saber y ganar","Pasapalabra"],["¿Qué concurso de TVE de los años 70 y 80 terminaba con una subasta?","Un, dos, tres","El precio justo","La ruleta de la suerte"],["¿Qué concurso presentaba Joaquín Prat con «¡A jugar!»?","El precio justo","Un, dos, tres","Waku Waku"],["¿En qué año nació Antena 3 Televisión?","1989","1982","1995"],["¿En qué año empezó a emitir TV3?","1983","1990","1975"],["¿Qué año marcó la llegada de las televisiones privadas a España?","1990","1980","2000"],["¿Qué cantante española ganó un Grammy Latino con «El mal querer»?","Rosalía","Aitana","Lola Índigo"],["¿En qué ciudad se celebra el festival de cine de San Sebastián?","San Sebastián","Málaga","Valladolid"],["¿Qué premio entrega la Academia de cine española?","Goya","Max","Ondas"],["¿Qué premio reconoce las artes escénicas en España?","Premios Max","Premios Goya","Premios Ondas"],["¿Qué grupo cantaba «Lucha de gigantes»?","Nacha Pop","Mecano","Radio Futura"],["¿Qué grupo cantaba «Hijo de la Luna»?","Mecano","La Oreja de Van Gogh","Presuntos Implicados"],["¿Qué grupo donostiarra cantaba «Rosas»?","La Oreja de Van Gogh","Duncan Dhu","Amaral"],["¿Qué dúo zaragozano canta «Sin ti no soy nada»?","Amaral","Estopa","Los Secretos"],["¿Qué hermanos de Cornellà forman Estopa?","Los Muñoz","Los Gasol","Los Iglesias"],["¿Qué película de 2018 trata de un equipo de baloncesto con discapacidad intelectual?","Campeones","Ocho apellidos vascos","Toc Toc"],["¿Qué película española de 2014 es la más taquillera del cine español?","Ocho apellidos vascos","Lo imposible","Torrente 4"],["¿Qué personaje interpretaba Santiago Segura en su saga más famosa?","Torrente","Mortadelo","Alatriste"],["¿Qué personajes de Ibáñez son agentes de la T.I.A.?","Mortadelo y Filemón","Zipi y Zape","Pepe Gotera y Otilio"],["¿Qué cómic belga tiene a un reportero con un perro llamado Milú?","Tintín","Astérix","Spirou"],["¿Qué galo bebe una poción mágica?","Astérix","Obélix","Panorámix"],["¿Qué saga de cine tiene a Indiana Jones como arqueólogo?","Indiana Jones","Jurassic Park","Regreso al futuro"],["¿En qué película un DeLorean viaja en el tiempo?","Regreso al futuro","Terminator","Matrix"],["¿Qué famoso festival de música se celebra en Benicàssim?","FIB","Primavera Sound","Mad Cool"],["¿Qué plataforma creó la serie «Stranger Things»?","Netflix","HBO","Disney+"],["¿Qué famoso concurso de talentos tiene sillas giratorias?","La Voz","Got Talent","Operación Triunfo"],["¿Qué país tiene más husos horarios en su territorio, contando ultramar?","Francia","Rusia","Estados Unidos"],["¿Qué planeta tarda más en dar una vuelta al Sol?","Neptuno","Saturno","Urano"],["¿En qué año se celebró el primer Mundial de fútbol?","1930","1920","1950"],["¿Cuál de estos ríos es más largo?","Nilo","Danubio","Misisipi"],["¿Qué elemento químico tiene el símbolo K?","Potasio","Kriptón","Calcio"],["¿Qué pintor se cortó parte de una oreja?","Van Gogh","Monet","Gauguin"],["¿Cuál es la lengua con más hablantes nativos del mundo?","Chino mandarín","Inglés","Español"],["¿Qué órgano produce la insulina?","Páncreas","Hígado","Riñón"],["¿En qué ciudad se firmó el tratado que creó la Unión Europea en 1992?","Maastricht","Roma","Lisboa"],["¿Qué escritor creó al detective Hércules Poirot?","Agatha Christie","Arthur Conan Doyle","Georges Simenon"],["¿Qué instrumento mide los terremotos?","Sismógrafo","Barómetro","Anemómetro"],["¿Cuál de estas comunidades autónomas no tiene costa?","La Rioja","Cantabria","Murcia"],["¿Cuántos huesos tiene aproximadamente un adulto?","206","156","306"],["¿Qué país regaló la Estatua de la Libertad a Estados Unidos?","Francia","Reino Unido","España"],["¿En qué continente está Mongolia?","Asia","Europa","Oceanía"],["¿De qué color es la caja negra de los aviones?","Naranja","Negra","Roja"],["¿Cuál es el metal más abundante en la corteza terrestre?","Aluminio","Hierro","Cobre"],["¿Qué compositor escribió «Las cuatro estaciones»?","Vivaldi","Bach","Mozart"],["¿Qué provincia española tiene más municipios?","Burgos","Madrid","Barcelona"],["¿En qué año se inauguró el AVE Madrid-Sevilla?","1992","1986","2000"],["¿Cuál es el país más pequeño del mundo?","Ciudad del Vaticano","Mónaco","San Marino"],["¿Qué gas es más abundante en la atmósfera terrestre?","Nitrógeno","Oxígeno","Dióxido de carbono"],["¿Cómo se llamaba el barco de Darwin?","Beagle","Victoria","Endeavour"],["¿Qué famoso cuadro pintó Edvard Munch?","El grito","La noche estrellada","El beso"],["¿Qué deporte practicaba Severiano Ballesteros?","Golf","Tenis","Pelota vasca"],["¿Cuántos jugadores forman un equipo de voleibol en pista?","Seis","Cinco","Siete"],["¿Qué isla canaria es la más oriental?","Lanzarote","Fuerteventura","Gran Canaria"],["¿Qué ciudad era la capital del Imperio azteca?","Tenochtitlan","Cuzco","Chichén Itzá"],["¿Quién escribió «Rayuela»?","Julio Cortázar","Jorge Luis Borges","Mario Vargas Llosa"],["¿Qué vitamina abunda en los cítricos?","Vitamina C","Vitamina A","Vitamina K"],["¿Qué palabra significa «miedo a los espacios cerrados»?","Claustrofobia","Agorafobia","Acrofobia"],["¿Qué es un dromedario?","Un camélido con una joroba","Un camélido con dos jorobas","Un antílope africano"],["¿Cuál es el hueso más pequeño del cuerpo humano?","Estribo","Martillo","Yunque"],["¿Qué país tiene más islas del mundo?","Suecia","Noruega","Indonesia"],["¿En qué siglo vivió Cervantes?","XVI-XVII","XIV-XV","XVIII"],["¿Qué famoso arquitecto diseñó la Casa Milà, «La Pedrera»?","Gaudí","Domènech i Montaner","Puig i Cadafalch"],["¿Cuál de estos animales es un marsupial?","Koala","Panda rojo","Mapache"],["¿Cómo se llama el miedo irracional a las arañas?","Aracnofobia","Hidrofobia","Ofidiofobia"],["¿En qué año se proclamó la Segunda República española?","1931","1923","1936"],["¿Qué selección ganó el primer Mundial de fútbol de la historia?","Uruguay","Brasil","Italia"],["¿Qué escritor español ganó el Nobel de Literatura en 1989?","Camilo José Cela","Vicente Aleixandre","Juan Ramón Jiménez"],["¿Qué es la clorofila?","Un pigmento verde de las plantas","Una hormona humana","Un mineral"],["¿Cuál es la moneda oficial del Reino Unido?","Libra esterlina","Euro","Corona"],["¿Cuál es la moneda oficial de Japón?","Yen","Yuan","Won"],["¿Cuál es la moneda oficial de Suiza?","Franco suizo","Euro","Corona"],["¿En qué país está la región de la Toscana?","Italia","Francia","Grecia"],["¿De qué está hecho principalmente el vidrio?","Arena","Arcilla","Cal"],["¿Qué filósofo dijo «Pienso, luego existo»?","Descartes","Kant","Platón"],["¿Cuál de estos países no tiene salida al mar?","Bolivia","Ecuador","Uruguay"],["¿Qué parte de la flor se convierte en fruto?","Ovario","Pétalo","Estambre"],["¿Qué número romano es la D?","500","50","1000"],["¿Qué número romano es la L?","50","100","500"],["¿En qué país se encuentra el monte Kilimanjaro?","Tanzania","Kenia","Etiopía"],["¿Qué era el «Spirit of St. Louis»?","Un avión","Un barco","Un tren"],["¿Cuántas estrellas tiene la bandera de la Unión Europea?","12","15","27"],["¿Qué ciudad es conocida como «la Ciudad Eterna»?","Roma","Atenas","Jerusalén"],["¿Cuál es el animal nacional de Escocia?","Unicornio","León","Ciervo"],["¿Qué inventó Isaac Peral?","Un submarino","Un helicóptero","Un telégrafo"],["¿Qué inventó Juan de la Cierva?","El autogiro","El submarino","El futbolín"],["¿Qué es un haiku?","Un poema japonés breve","Una danza china","Un plato coreano"],["¿Quién pintó «La maja desnuda»?","Goya","Velázquez","Murillo"],["¿Cuántos corazones tiene un pulpo?","Tres","Uno","Dos"],["¿Qué país tiene la mayor población del mundo desde 2023, según la ONU?","India","China","Estados Unidos"],["¿Qué famosa calle madrileña se conoce como «el Broadway español»?","Gran Vía","Calle de Alcalá","Paseo de la Castellana"],["¿Qué ciudad acogió los primeros Juegos Olímpicos modernos en 1896?","Atenas","París","Londres"],["¿Cuál es el planeta más caliente del sistema solar?","Venus","Mercurio","Marte"],["¿Qué tipo de animal es la tarántula?","Araña","Insecto","Escorpión"],["¿Qué pieza de ajedrez solo puede moverse en diagonal?","Alfil","Torre","Caballo"],["¿Cuántas casillas tiene un tablero de ajedrez?","64","81","100"],["¿Qué color se obtiene al mezclar azul y amarillo?","Verde","Morado","Naranja"],["¿Qué color se obtiene al mezclar rojo y azul?","Morado","Verde","Marrón"],["¿Qué famosa ópera compuso Bizet?","Carmen","Aida","La Traviata"],["¿Quién compuso «Aida»?","Verdi","Puccini","Wagner"],["¿Qué país inventó los fuegos artificiales?","China","India","Italia"],["¿Qué es un sextante?","Un instrumento de navegación","Un tipo de verso","Un reloj de arena"],["¿Quién escribió «La vida es sueño»?","Calderón de la Barca","Lope de Vega","Tirso de Molina"],["¿Quién escribió «Fuenteovejuna»?","Lope de Vega","Calderón de la Barca","Quevedo"],["¿Qué rey español mandó construir El Escorial?","Felipe II","Carlos I","Felipe V"],["¿En qué ciudad murió Cervantes?","Madrid","Alcalá de Henares","Valladolid"],["¿En qué ciudad nació Cervantes?","Alcalá de Henares","Toledo","Madrid"],["¿Qué es la Tizona?","La espada del Cid","Un barco de Colón","Una corona visigoda"],["¿Qué animal aparece en el escudo de Madrid junto al madroño?","Oso","León","Águila"],["¿En qué provincia está Doñana?","Huelva","Cádiz","Sevilla"],["¿Cuál es el aeropuerto con más pasajeros de España?","Madrid-Barajas","Barcelona-El Prat","Palma de Mallorca"],["¿De qué color es la sangre de un pulpo?","Azul","Verde","Roja"],["¿Qué país tiene forma alargada y estrecha en Sudamérica?","Chile","Perú","Paraguay"],["¿Qué famoso naturalista viajó a las islas Galápagos?","Darwin","Humboldt","Linneo"],["¿Cuántos minutos dura un partido oficial de fútbol sin prórroga?","90","80","100"],["¿Cuántos sets hay que ganar en un partido masculino de Grand Slam?","Tres","Dos","Cuatro"],["¿Qué tenista español ganó 14 veces Roland Garros?","Rafa Nadal","Carlos Moyá","David Ferrer"],["¿Cuál es la distancia oficial de un maratón?","42,195 km","40 km","45,5 km"],["¿Qué selección ganó el Mundial de 2022?","Argentina","Francia","Brasil"],["¿En qué ciudad se celebraron los Juegos Olímpicos de 2024?","París","Los Ángeles","Tokio"],["¿Qué famoso navegante portugués dio nombre a un estrecho del sur de América?","Magallanes","Vasco da Gama","Cabral"],["¿Quién completó la primera vuelta al mundo tras la muerte de Magallanes?","Juan Sebastián Elcano","Hernán Cortés","Américo Vespucio"],["¿Qué conquistador derrotó al Imperio azteca?","Hernán Cortés","Francisco Pizarro","Pedro de Valdivia"],["¿Qué conquistador derrotó al Imperio inca?","Francisco Pizarro","Hernán Cortés","Núñez de Balboa"],["¿Qué océano descubrió Núñez de Balboa para los europeos?","Pacífico","Índico","Atlántico"],["¿Qué se celebra el 12 de octubre en España?","Fiesta Nacional","Día de la Constitución","Día del Trabajo"],["¿Qué se celebra el 6 de diciembre en España?","Día de la Constitución","Fiesta Nacional","Inmaculada"],["¿Cuántas comunidades autónomas tiene España?","17","15","19"],["¿Cuántas provincias tiene España?","50","52","48"],["¿Cuál es la comunidad autónoma más extensa?","Castilla y León","Andalucía","Castilla-La Mancha"],["¿Qué comunidad autónoma tiene más habitantes?","Andalucía","Cataluña","Madrid"],["¿Qué lengua cooficial se habla en Galicia?","Gallego","Asturiano","Catalán"],["¿Cuál es el parque nacional más visitado de España?","Teide","Ordesa","Doñana"],["¿Qué mar baña la costa de Almería?","Mediterráneo","Cantábrico","Atlántico"],["¿Qué mar baña la costa de Santander?","Cantábrico","Mediterráneo","Mar del Norte"],["¿Qué ciudad española es conocida como «la ciudad del Turia»?","Valencia","Teruel","Castellón"],["¿Cuál es el gentilicio de los nacidos en Huelva?","Onubense","Hispalense","Gaditano"],["¿Cuál es el gentilicio de los nacidos en Cádiz?","Gaditano","Malagueño","Onubense"],["¿Cuál es el gentilicio de los nacidos en Alcalá de Henares?","Complutense","Arriacense","Abulense"],["¿Cuál es el gentilicio de los nacidos en Ávila?","Abulense","Avilés","Ovetense"],["¿Cuál es el gentilicio de los nacidos en Oviedo?","Ovetense","Oscense","Orensano"],["¿Cuál es el gentilicio de los nacidos en Huesca?","Oscense","Onubense","Ovetense"],["¿Qué ingrediente NO lleva la tortilla de patatas clásica?","Harina","Huevo","Patata"],["¿Qué es el «pimentón de la Vera»?","Una especia","Un queso","Un vino"],["¿De qué comunidad es típico el pulpo a feira?","Galicia","Asturias","Cantabria"],["¿Con qué se elabora tradicionalmente la horchata valenciana?","Chufa","Almendra","Arroz"],["¿Qué uva se usa principalmente en el vino de Rioja?","Tempranillo","Albariño","Verdejo"],["¿Qué es un «chotis»?","Un baile madrileño","Un dulce gallego","Un sombrero andaluz"],["¿Qué artista español es famoso por sus esculturas de hierro, como «El peine del viento»?","Eduardo Chillida","Jorge Oteiza","Pablo Serrano"],["¿En qué ciudad está «El peine del viento»?","San Sebastián","Bilbao","Gijón"],["¿Qué cineasta español dirigió «Todo sobre mi madre»?","Pedro Almodóvar","Alejandro Amenábar","Luis Buñuel"],["¿Qué película de Amenábar ganó el Óscar a mejor película extranjera?","Mar adentro","Los otros","Tesis"],["¿Qué grupo representó a España en Eurovisión 1973 con «Eres tú»?","Mocedades","Los Bravos","Parchís"],["¿Con qué canción ganó Massiel Eurovisión en 1968?","La, la, la","Vivo cantando","Eres tú"],["¿Qué superhéroe lleva un escudo con estrellas y barras?","Capitán América","Thor","Iron Man"],["¿Cómo se llama la princesa de la saga Zelda?","Zelda","Peach","Daisy"],["¿Qué fontanero es la mascota de Nintendo?","Mario","Luigi","Wario"],["¿Qué compañía creó el iPhone?","Apple","Samsung","Nokia"],["¿Qué significa «www» en las direcciones web?","World Wide Web","Wide World Web","Web World Wide"],["¿Qué red social se representa con un pájaro azul en su antiguo logo?","Twitter","Facebook","Instagram"],["¿Cuántos bits forman un byte?","8","4","16"],["¿Qué científico propuso un modelo del átomo en forma de sistema solar?","Rutherford","Dalton","Newton"],["¿Cuál es el único mamífero capaz de volar activamente?","Murciélago","Ardilla voladora","Colugo"],["¿Qué animal es el más longevo de estos?","Tortuga gigante","Elefante","Loro gris"],["¿Cómo se llama la cría del ciervo?","Cervatillo","Lebrato","Gazapo"],["¿Cómo se llama la cría del conejo?","Gazapo","Lechón","Cabrito"],["¿Cuál de estos animales es herbívoro?","Hipopótamo","Hiena","Orca"],["¿Qué ave es capaz de volar hacia atrás?","Colibrí","Halcón","Golondrina"],["¿Cuál es el ave más grande del mundo?","Avestruz","Cóndor","Albatros"],["¿Qué animal tiene rayas blancas y negras?","Cebra","Okapi","Tapir"],["¿Qué capa de la atmósfera contiene la capa de ozono?","Estratosfera","Troposfera","Mesosfera"],["¿Qué científico descubrió la radiactividad del radio junto a Pierre Curie?","Marie Curie","Lise Meitner","Rosalind Franklin"],["¿Cuál es la fórmula química de la sal común?","NaCl","KCl","CaCO3"],["¿Cuánto mide aproximadamente la circunferencia de la Tierra en el ecuador?","40.000 km","25.000 km","60.000 km"],["¿Qué planeta tiene el día más largo?","Venus","Júpiter","Mercurio"],["¿Cuál es la galaxia en la que vivimos?","Vía Láctea","Andrómeda","Triángulo"],["¿Qué es un año luz?","Una distancia","Un tiempo","Una velocidad"],["¿Quién pintó «El nacimiento de Venus»?","Botticelli","Rafael","Tiziano"],["¿Qué edificio fue diseñado por Frank Gehry en Bilbao?","Museo Guggenheim","Palacio Euskalduna","Torre Iberdrola"],["¿Qué estilo arquitectónico tiene la catedral de Burgos?","Gótico","Románico","Barroco"],["¿Qué estilo es típico de la Alhambra?","Nazarí","Gótico","Neoclásico"],["¿Qué famoso poeta escribió «Campos de Castilla»?","Antonio Machado","Gustavo Adolfo Bécquer","Rosalía de Castro"],["¿Quién escribió las «Rimas y leyendas»?","Bécquer","Espronceda","Zorrilla"],["¿Quién escribió «Don Juan Tenorio»?","José Zorrilla","Tirso de Molina","Espronceda"],["¿Qué obra de Tirso de Molina presenta al primer Don Juan?","El burlador de Sevilla","El caballero de Olmedo","El alcalde de Zalamea"],["¿Qué escritora gallega escribió «Cantares gallegos»?","Rosalía de Castro","Emilia Pardo Bazán","Concepción Arenal"],["¿Quién escribió «Los pazos de Ulloa»?","Emilia Pardo Bazán","Rosalía de Castro","Carmen Laforet"],["¿Quién escribió «Nada», ganadora del primer Premio Nadal?","Carmen Laforet","Ana María Matute","Carmen Martín Gaite"],["¿Cuál es la obra más famosa de Fernando de Rojas?","La Celestina","El Buscón","La Galatea"],["¿Qué escritor creó al capitán Alatriste?","Arturo Pérez-Reverte","Javier Marías","Eduardo Mendoza"],["¿Qué escritor escribió «La sombra del viento»?","Carlos Ruiz Zafón","Ildefonso Falcones","Javier Cercas"],["¿Cuál es el río más largo de la península ibérica?","Tajo","Guadalquivir","Ebro"],["¿Cuántos lados tiene un hexágono?","Seis","Nueve","Ocho"],["¿Qué planeta es conocido como el planeta rojo?","Marte","Venus","Saturno"],["¿En qué ciudad está la Sagrada Familia?","Barcelona","Madrid","Valencia"],["¿Qué instrumento tiene teclas blancas y negras?","Piano","Violín","Arpa"],["¿Cuál es el océano más grande del mundo?","Pacífico","Índico","Atlántico"],["¿De qué color es la clorofila?","Verde","Azul","Amarilla"],["¿Qué animal es el rey de la sabana según la tradición?","León","Hipopótamo","Elefante"],["¿Cuántos minutos tiene una hora?","Sesenta","Treinta","Cien"],["¿Qué idioma se habla oficialmente en Brasil?","Portugués","Italiano","Español"],["¿En qué continente está Egipto?","África","Asia","América"],["¿Quién escribió «Don Quijote de la Mancha»?","Miguel de Cervantes","Lope de Vega","Quevedo"],["¿Qué gas respiramos para vivir?","Oxígeno","Neón","Helio"],["¿Cuál es la capital de Italia?","Roma","Nápoles","Milán"],["¿Cuántas patas tiene una araña?","Ocho","Diez","Doce"],["¿Qué fruta es típica de Canarias y se exporta mucho?","Plátano","Cereza","Naranja"],["¿Qué deporte practica un tenista?","Tenis","Golf","Bádminton"],["¿Cuál es el metal de las medallas de primer puesto?","Oro","Cobre","Platino"],["¿Qué se celebra el 25 de diciembre?","Navidad","Año Nuevo","Reyes"],["¿Qué órgano bombea la sangre?","Corazón","Pulmón","Estómago"],["¿Cuál es la moneda oficial de España?","Euro","Peseta","Libra"],["¿Qué ave es símbolo de la paz?","Paloma","Águila","Gorrión"],["¿En qué país están las pirámides de Guiza?","Egipto","México","Sudán"],["¿Cuál es el resultado de 7 × 8?","56","64","58"],["¿Qué estación del año empieza en junio en España?","Verano","Ninguna","Otoño"],["¿Cuál es la capital de Francia?","París","Burdeos","Niza"],["¿Qué pintor creó «Las Meninas»?","Velázquez","Zurbarán","El Greco"],["¿Cuántos jugadores tiene un equipo de fútbol en el campo?","Once","Nueve","Diez"],["¿Cómo se llama la cría de la vaca?","Ternero","Cordero","Cabrito"],["¿Qué mar baña Valencia?","Mediterráneo","Atlántico","Cantábrico"],["¿Qué famoso detective vivía en Baker Street?","Sherlock Holmes","Sam Spade","Colombo"],["¿Cuál es el animal terrestre más rápido?","Guepardo","Liebre","Avestruz"],["¿Qué parte de la planta absorbe el agua del suelo?","Raíz","Fruto","Flor"],["¿Cuál es la comunidad autónoma más extensa de España?","Castilla y León","Andalucía","Extremadura"],["¿En qué deporte se usa un «tee»?","Golf","Polo","Béisbol"],["¿Qué científico formuló la teoría de la relatividad?","Albert Einstein","Niels Bohr","Isaac Newton"],["¿Qué tipo de animal es una ballena?","Mamífero","Molusco","Reptil"],["¿Cuál es el país más poblado de América del Sur?","Brasil","Argentina","Perú"],["¿Qué color se obtiene mezclando azul y amarillo?","Verde","Naranja","Marrón"],["¿Cuál es la lengua cooficial de Galicia?","Gallego","Euskera","Catalán"],["¿Cuántos días tiene un año bisiesto?","366","360","367"],["¿Qué edificio de Granada es Patrimonio de la Humanidad?","La Alhambra","El Pilar","El Escorial"],["¿Qué vitamina aporta principalmente el sol?","Vitamina D","Vitamina K","Vitamina C"],["¿Cuál es la capital de Portugal?","Lisboa","Oporto","Coímbra"],["¿Qué hueso es el más largo del cuerpo humano?","Fémur","Radio","Peroné"],["¿Quién pintó «La Gioconda»?","Leonardo da Vinci","Miguel Ángel","Tiziano"],["¿En qué año llegó el hombre a la Luna por primera vez?","1969","1959","1975"],["¿Cuál es el elemento químico de símbolo «Fe»?","Hierro","Fermio","Fósforo"],["¿Qué escritor creó el personaje de Macondo y los Buendía?","Gabriel García Márquez","Juan Rulfo","Isabel Allende"],["¿Cuál es la capital de Australia?","Canberra","Perth","Sídney"],["¿Cuántos huesos tiene aproximadamente un adulto humano?","206","196","226"],["¿En qué año cayó el muro de Berlín?","1989","1991","1987"],["¿Cuál es el planeta con más lunas conocidas a día de hoy?","Saturno","Júpiter","Marte"],["¿Qué pintor español firmó el «Guernica»?","Picasso","Sorolla","Dalí"],["¿Qué reyes financiaron el primer viaje de Colón?","Reyes Católicos","Felipe V y Bárbara","Carlos V e Isabel"],["¿Cuál es la montaña más alta de España?","Teide","Veleta","Mulhacén"],["¿Qué filósofo griego fue maestro de Alejandro Magno?","Aristóteles","Heráclito","Pitágoras"],["¿Cuál es el idioma con más hablantes nativos del mundo?","Chino mandarín","Hindi","Árabe"],["¿Qué poeta escribió «Romancero gitano»?","Federico García Lorca","Luis Cernuda","Rafael Alberti"],["¿Qué unidad mide la resistencia eléctrica?","Ohmio","Julio","Voltio"],["¿Cuál es el desierto cálido más grande del mundo?","Sáhara","Kalahari","Gobi"],["¿En qué año comenzó la Guerra Civil española?","1936","1939","1931"],["¿Qué científica ganó dos premios Nobel en distintas ciencias?","Marie Curie","Ada Lovelace","Lise Meitner"],["¿Cuál es la capital de Canadá?","Ottawa","Montreal","Toronto"],["¿Qué músico compuso la «Novena Sinfonía» con el «Himno de la alegría»?","Beethoven","Mahler","Wagner"],["¿Cuál es el lago más grande de África?","Victoria","Chad","Turkana"],["¿Qué arquitecto diseñó el Museo Guggenheim de Bilbao?","Frank Gehry","Norman Foster","Rafael Moneo"],["¿En qué país nació el pintor Frida Kahlo?","México","Cuba","Colombia"],["¿Cuál es el segundo planeta más cercano al Sol?","Venus","Mercurio","Tierra"],["¿Qué emperador romano nació en Itálica, cerca de Sevilla?","Trajano","Tiberio","Augusto"],["¿Qué escritor inglés escribió «1984»?","George Orwell","Oscar Wilde","H. G. Wells"],["¿Cuántas cuerdas tiene un violín?","Cuatro","Cinco","Seis"],["¿Qué partícula subatómica tiene carga negativa?","Electrón","Neutrino","Protón"],["¿Qué ciudad es la capital de Japón y su mayor urbe?","Tokio","Kioto","Osaka"],["¿Qué país tiene forma de bota en el mapa?","Italia","Chile","Croacia"],["¿Qué rey español abdicó en 2014?","Juan Carlos I","Alfonso XIII","Felipe VI"],["¿Cuál es la fórmula química del agua?","H2O","H2O2","NaCl"],["¿Qué navegante completó la primera vuelta al mundo tras la muerte de Magallanes?","Juan Sebastián Elcano","Américo Vespucio","Hernán Cortés"],["¿Qué ciudad italiana está construida sobre canales?","Venecia","Florencia","Pisa"],["¿Cuántos grados suman los ángulos de un triángulo?","180","90","270"],["¿De qué país es originaria la paella?","España","Italia","Portugal"],["¿Qué escritor creó a Harry Potter?","J. K. Rowling","J. R. R. Tolkien","Philip Pullman"],["¿Cuál es la capital de Japón?","Tokio","Kioto","Osaka"],["¿Cuántos años tiene un siglo?","Cien","Mil","Diez"],["¿Qué animal produce la seda?","El gusano de seda","La abeja","La araña"],["¿En qué país está la Torre de Pisa?","Italia","Grecia","Francia"],["¿Cómo se llama el satélite natural de la Tierra?","La Luna","Fobos","Titán"],["¿Qué color tiene la bandera de Japón además del blanco?","Rojo","Verde","Azul"],["¿Cuál es el plural de «lápiz»?","Lápices","Lápizs","Lápizes"],["¿Qué metal es líquido a temperatura ambiente?","Mercurio","Plomo","Estaño"],["¿Qué instrumento tocaba Paco de Lucía?","Guitarra","Piano","Violín"],["¿Cuál es la capital de Argentina?","Buenos Aires","Rosario","Córdoba"],["¿Cuántas caras tiene un cubo?","Seis","Ocho","Cuatro"],["¿Qué país regaló la Estatua de la Libertad a EE. UU.?","Francia","Reino Unido","España"],["¿En qué ciudad se celebra la Tomatina?","Buñol","Requena","Xàtiva"],["¿Qué gas expulsamos al respirar?","Dióxido de carbono","Helio","Oxígeno"],["¿De qué animal es el caviar más famoso?","Esturión","Atún","Salmón"],["¿Qué planeta tiene los anillos más visibles?","Saturno","Marte","Venus"],["¿Quién pintó «La noche estrellada»?","Van Gogh","Monet","Cézanne"],["¿Cuál es la capital de Rusia?","Moscú","San Petersburgo","Kiev"],["¿Qué ciudad es conocida como la Ciudad Condal?","Barcelona","Girona","Tarragona"],["¿Cuántos días tiene febrero en un año no bisiesto?","28","29","30"],["¿Qué océano separa Europa de América?","Atlántico","Índico","Pacífico"],["¿Cuál es el animal símbolo de Australia más conocido?","Canguro","Koala","Emú"],["¿Qué escritor creó a Sancho Panza?","Cervantes","Lope de Vega","Quevedo"],["¿Qué país tiene más habitantes del mundo según la ONU desde 2023?","India","Estados Unidos","China"],["¿En qué deporte destacó Rafa Nadal?","Tenis","Fútbol","Golf"],["¿Qué selección ganó el Mundial de fútbol de 2010?","España","Alemania","Holanda"],["¿Cuál es el nombre del himno de Francia?","La Marsellesa","La Parisina","La Internacional"],["¿Qué color resulta de mezclar rojo y blanco?","Rosa","Naranja","Granate"],["¿Qué ciudad española tiene la Catedral con el Botafumeiro?","Santiago de Compostela","Burgos","León"],["¿Qué ave pone los huevos más grandes?","Avestruz","Águila","Gallina"],["¿Cuántos lados tiene un triángulo?","Tres","Dos","Cuatro"],["¿Cuál es la lengua oficial de Austria?","Alemán","Húngaro","Austriaco"],["¿Qué estación sigue al invierno?","Primavera","Verano","Otoño"],["¿Qué país tiene como capital Lima?","Perú","Bolivia","Chile"],["¿Qué país tiene como capital Bogotá?","Colombia","Ecuador","Venezuela"],["¿Qué país tiene como capital Santiago?","Chile","Uruguay","Argentina"],["¿Cómo se llama el tren de alta velocidad español?","AVE","TGV","ICE"],["¿Qué número romano es la «L»?","50","500","100"],["¿Qué número romano es la «M»?","1000","500","100"],["¿Qué número romano es la «C»?","100","50","1000"],["¿Qué cantante es conocida como «La Faraona»?","Lola Flores","Rocío Jurado","Isabel Pantoja"],["¿Qué tipo de animal es la anaconda?","Serpiente","Pez","Lagarto"],["¿En qué país está Machu Picchu?","Perú","México","Bolivia"],["¿Qué fruta se usa para hacer la sidra?","Manzana","Pera","Uva"],["¿Qué bebida se obtiene de la uva fermentada?","Vino","Sidra","Cerveza"],["¿Cuál es el hueso que protege el cerebro?","Cráneo","Esternón","Pelvis"],["¿De qué color es el caballo blanco de Santiago?","Blanco","Marrón","Negro"],["¿Cuál es el océano que baña la costa este de África?","Índico","Pacífico","Ártico"],["¿Qué famoso museo de París alberga la Gioconda?","Louvre","Pompidou","Orsay"],["¿Qué país inventó la pizza margarita?","Italia","Francia","Grecia"],["¿Cuál es el planeta más grande del sistema solar?","Júpiter","Neptuno","Saturno"],["¿Qué instrumento mide la temperatura?","Termómetro","Higrómetro","Barómetro"],["¿Qué instrumento mide la presión atmosférica?","Barómetro","Termómetro","Anemómetro"],["¿Cuántos meses tienen 31 días?","Siete","Ocho","Seis"],["¿Qué continente se conoce como el Viejo Continente?","Europa","Asia","África"],["¿Cómo se llama el miedo a las arañas?","Aracnofobia","Claustrofobia","Acrofobia"],["¿Cómo se llama el miedo a las alturas?","Acrofobia","Agorafobia","Hidrofobia"],["¿Qué escritor escribió «La vida es sueño»?","Calderón de la Barca","Tirso de Molina","Lope de Vega"],["¿Qué rey mandó construir El Escorial?","Felipe II","Carlos I","Felipe IV"],["¿En qué ciudad está la Puerta del Sol?","Madrid","Toledo","Salamanca"],["¿En qué ciudad está la Plaza del Obradoiro?","Santiago de Compostela","Lugo","Oviedo"],["¿En qué ciudad está la Concha, la famosa playa?","San Sebastián","Santander","Gijón"],["¿Cuál es la capital de La Rioja?","Logroño","Haro","Calahorra"],["¿Cuál es la capital de Extremadura?","Mérida","Cáceres","Badajoz"],["¿Cuál es la capital de Cantabria?","Santander","Torrelavega","Laredo"],["¿Qué mineral es la sal común?","Cloruro de sodio","Carbonato cálcico","Cuarzo"],["¿Cómo se llama la cría del caballo?","Potro","Cordero","Ternero"],["¿Cómo se llama la cría de la oveja?","Cordero","Cabrito","Potro"],["¿Cómo se llama la casa del perro?","Caseta","Cuadra","Madriguera"],["¿Cómo se llama la casa de las abejas?","Colmena","Nido","Hormiguero"],["¿Qué deporte se juega en Wimbledon?","Tenis","Golf","Críquet"],["¿Qué ciudad acogió los Juegos Olímpicos de 1992?","Barcelona","Sevilla","Madrid"],["¿Qué ciudad acogió la Expo de 1992?","Sevilla","Barcelona","Zaragoza"],["¿Qué ciudad acogió la Expo de 2008?","Zaragoza","Bilbao","Valencia"],["¿Qué animal es Bambi?","Un ciervo","Un conejo","Un zorro"],["¿Cuántas notas musicales hay en la escala básica?","Siete","Ocho","Cinco"],["¿Qué nota sigue a «do»?","Re","Mi","Si"],["¿Qué gas da a los globos la capacidad de flotar?","Helio","Oxígeno","Nitrógeno"],["¿Cómo se llama el punto más alto de una montaña?","Cumbre","Falda","Ladera"],["¿Qué país tiene un maple, la hoja de arce, en la bandera?","Canadá","Japón","Suiza"],["¿Qué país tiene una cruz blanca sobre fondo rojo en la bandera?","Suiza","Noruega","Suecia"],["¿Qué estrecho separa España de Marruecos?","Estrecho de Gibraltar","Estrecho de Bering","Bósforo"],["¿Quién fue el primer presidente de los Estados Unidos?","George Washington","Thomas Jefferson","Abraham Lincoln"],["¿Qué invento español sirve para limpiar suelos con palo y cubo?","La fregona","La escoba","El chupa chups"],["¿Qué país es el mayor productor de aceite de oliva?","España","Italia","Grecia"],["¿Cuál es el gentilicio de Huelva?","Onubense","Olvense","Huelveño"],["¿Cuál es el gentilicio de Guadalajara?","Alcarreño o guadalajareño","Alcalaíno","Guadalajarino"],["¿Cuál es el gentilicio de Salamanca?","Salmantino","Charro de Ávila","Salamanqués"],["¿Cuántos jugadores tiene un equipo de balonmano en pista?","Siete","Cinco","Seis"],["¿Qué es más grande, un océano o un mar?","Un océano","Son iguales","Un mar"],["¿Cuál es la letra número uno del abecedario?","A","Z","B"],["¿Qué animal se asocia con la lentitud?","Tortuga","Liebre","Gacela"],["¿Cómo se llama el hijo de tu tío?","Primo","Sobrino","Cuñado"],["¿Cómo se llama el padre de tu madre?","Abuelo","Suegro","Tío"],["¿Qué sentido se relaciona con la nariz?","Olfato","Gusto","Tacto"],["¿Cuántas horas tiene un día?","24","48","12"],["¿Cuál es el resultado de 9 al cuadrado?","81","72","18"],["¿Cuál es la raíz cuadrada de 144?","12","11","14"],["¿Qué país tiene forma alargada entre los Andes y el Pacífico?","Chile","Ecuador","Perú"],["¿Qué se conmemora el 12 de octubre en España?","Fiesta Nacional","Día de la Constitución","Día del Trabajo"],["¿Qué se conmemora el 6 de diciembre en España?","Día de la Constitución","Fiesta Nacional","Inmaculada"],["¿Qué rey mago trae la mirra según la tradición?","Baltasar","Melchor","Gaspar"],["¿Qué día empieza el sorteo de la Lotería de Navidad?","22 de diciembre","24 de diciembre","20 de diciembre"],["¿Cuántos premios «Gordo» hay en el sorteo de Navidad?","Uno","Tres","Cinco"],["¿De qué ciudad es típico el turrón de Jijona?","Alicante","Valencia","Murcia"],["¿Qué escritor creó «Cuento de Navidad»?","Charles Dickens","Mark Twain","Lewis Carroll"],["¿Qué se celebra el 1 de enero en Viena con un famoso concierto?","Año Nuevo","Reyes","Nochebuena"],["¿Qué marcha suena al final del Concierto de Año Nuevo de Viena?","Marcha Radetzky","Marcha nupcial","Marcha turca"],["¿Qué santo inspiró la figura de Papá Noel?","San Nicolás","San Valentín","San Jorge"],["¿Cuántos renos tiran del trineo de Papá Noel contando a Rudolph?","Nueve","Siete","Doce"],["¿Qué compositor escribió el ballet «El cascanueces»?","Chaikovski","Stravinski","Prokófiev"],["¿En qué país se originó la tradición del árbol de Navidad moderno?","Alemania","Italia","Francia"],["¿Qué se come tradicionalmente en Nochebuena en Galicia?","Bacalao","Pulpo","Cocido"],["¿Qué día termina oficialmente la Navidad en el calendario litúrgico?","Bautismo del Señor","6 de enero","31 de diciembre"],["¿Qué villancico dice «ande, ande, ande, la marimorena»?","La marimorena","Campana sobre campana","Hacia Belén va una burra"],["¿Qué villancico dice «hacia Belén va una burra»?","Arre borriquito","Los peces en el río","Ya vienen los Reyes"],["¿En qué mes se celebra la Navidad ortodoxa en Rusia?","Enero","Diciembre","Febrero"],["¿Qué dulce navideño italiano es un bizcocho alto con frutas?","Panettone","Tiramisú","Cannoli"],["¿Qué se hace tradicionalmente con la ropa interior roja en Nochevieja?","Estrenarla","Regalarla","Quemarla"],["¿Qué ciudad española monta uno de los belenes más famosos en su ayuntamiento?","Madrid","Bilbao","Oviedo"],["¿Qué personaje verde roba la Navidad en el cuento del Dr. Seuss?","El Grinch","Shrek","Hulk"],["¿Qué significa «geofagia»?","Comer tierra","Comer mapas","Comer hierba"],["¿Cuál es la capital de Nueva Zelanda?","Wellington","Auckland","Christchurch"],["¿Cómo se llama la cría de la ballena?","Ballenato","Cachorro","Lechón"],["¿En qué continente es autóctona la llama?","América del Sur","África","Asia"],["¿En qué año pisó el ser humano la Luna por última vez?","1972","1978","1984"],["¿A qué huele, según se dice, el veneno cianuro?","A almendras amargas","A café","A naranja"],["¿En qué país está la estación de esquí de Klosters?","Suiza","Italia","Andorra"],["¿Qué significa la «T» de las siglas inglesas NATO (OTAN)?","Tratado","Tecnología","Transporte"],["¿Qué animal es «grenouille» en francés?","Rana","Caracol","Caballo"],["¿Cuál es el estado miembro más septentrional de la Unión Europea?","Finlandia","Polonia","Alemania"],["¿Qué pingüino vive en aguas ecuatoriales?","El de Galápagos","El macaroni","El emperador"],["¿Qué animal se llama angula cuando es joven?","La anguila","El salmón","La sardina"],["¿A qué presidente de EE. UU. intentó asesinar John Hinckley?","Ronald Reagan","Richard Nixon","Bill Clinton"],["¿Dónde estaba Isabel II de vacaciones cuando se convirtió en reina?","En Kenia","En Australia","En la India"],["¿De qué país fue Leopoldo I el primer rey en 1831?","Bélgica","Noruega","Grecia"],["¿Qué piedra es famosa en las canteras italianas de Carrara?","Mármol","Granito","Pizarra"],["¿Cuál es el nombre actual del país antes conocido como Ceilán?","Sri Lanka","Indonesia","Tailandia"],["¿Con el soberano de qué país se casó la actriz Grace Kelly?","Mónaco","Bélgica","Luxemburgo"],["¿En qué periodo histórico tuvo lugar el «Reinado del Terror»?","La Revolución francesa","La guerra de Secesión","La Reconquista"],["¿Qué país devolvió Macao a China en 1999?","Portugal","Reino Unido","Francia"],["¿Qué significa «dorsalgia»?","Dolor de espalda","Dolor de nariz","Dolor de muelas"],["¿De qué país fue Golda Meir la primera mujer primera ministra?","Israel","Polonia","Australia"],["¿Qué empresa finlandesa de telecomunicaciones nació en 1865 como fábrica de pasta de papel?","Nokia","Motorola","Ericsson"],["¿De qué país han sido primeros ministros Paul Keating y John Howard?","Australia","Canadá","Nueva Zelanda"],["¿Qué palabra, que significa «que estrangula», acompaña a «boa» en el nombre de una serpiente?","Constrictor","Asfixiadora","Estranguladora"],["¿En qué finca británica se descifraban los códigos durante la Segunda Guerra Mundial?","Bletchley Park","Hyde Park","Thorpe Park"],["En un trasplante cardiopulmonar se sustituyen el corazón y… ¿qué más?","Los pulmones","Los riñones","El hígado"],["Según la leyenda, ¿de qué metal deben ser las balas para matar a un hombre lobo?","Plata","Oro","Hierro"],["¿Qué científico británico da nombre a una unidad de energía?","James Joule","Isaac Newton","Paul Dirac"],["¿Qué vitamina es necesaria para la coagulación de la sangre?","La K","La A","La D"],["¿Cuál de estos animales está extinguido?","La paloma migratoria","El búfalo cafre","El leopardo de las nieves"],["¿En qué ciudad india está el Taj Mahal?","Agra","Bombay","Delhi"],["¿Qué rey sucedió a Isabel I de Inglaterra en 1603?","Jacobo I","Jorge I","Carlos I"],["¿Qué imperio derrocó el conquistador Hernán Cortés?","El azteca","El maya","El inca"],["¿En qué periodo geológico se extinguieron los dinosaurios?","Cretácico","Devónico","Jurásico"],["¿Cuál es la capital del estado de Texas?","Austin","Dallas","Houston"],["¿Dónde está el palacio de Potala?","En el Tíbet","En Camboya","En Vietnam"],["¿En qué año se inauguró la torre Eiffel?","1889","1859","1909"],["¿Qué ave tiene el nombre científico «Pica pica»?","La urraca","El chochín","El cuco"],["¿Quién fue presidente de Sudáfrica desde 1999?","Thabo Mbeki","Nelson Mandela","Jacob Zuma"],["¿En qué cordillera está el paso de Roncesvalles?","Los Pirineos","Los Alpes","El Cáucaso"],["¿Con qué dios romano estaba casada la diosa Juno?","Júpiter","Marte","Neptuno"],["¿Cuál de estos países NO es miembro de la OTAN?","Irlanda","Portugal","Turquía"],["¿De qué glándula es una inflamación el bocio?","Tiroides","Suprarrenal","Hipófisis"],["¿Qué red social creó Jack Dorsey?","Twitter","Facebook","LinkedIn"],["¿Qué tipo de animal es el nóctulo?","Murciélago","Búho","Tritón"],["¿Cuál de estos países tiene mayor densidad de población?","Mónaco","Singapur","Luxemburgo"],["¿Con quién compartió Nelson Mandela el Nobel de la Paz de 1993?","F. W. de Klerk","Desmond Tutu","Thabo Mbeki"],["¿Qué ciudad estaba en la antigua República Democrática Alemana?","Leipzig","Colonia","Hamburgo"],["¿Contra el gobierno de qué país lucharon «la Contra»?","Nicaragua","Venezuela","Colombia"],["¿En qué estado de EE. UU. está Roswell, famoso por el incidente ovni de 1947?","Nuevo México","Nevada","Arizona"],["¿Quién fue el primer secretario general de la ONU?","Trygve Lie","Kofi Annan","Dag Hammarskjöld"],["¿Cuál es el segundo elemento más abundante en la corteza terrestre, tras el oxígeno?","Silicio","Aluminio","Carbono"],["¿Qué tipo de criatura es Shrek?","Un ogro","Un trol","Un duende"],["¿Qué película protagonizaron Bruce Willis y Samuel L. Jackson en el año 2000?","El protegido","Pulp Fiction 2","Armageddon"],["¿Cómo se llama el arte japonés de arreglar flores?","Ikebana","Origami","Bonsái"],["¿Qué raza de perro es Lassie?","Collie","Pointer","Dálmata"],["¿Cuál de estos NO es un pez plano?","El bacalao","El rodaballo","El lenguado"],["¿Qué significan las siglas «p. p. m.» en mecanografía?","Pulsaciones por minuto","Palabras por mes","Páginas por minuto"],["¿Con qué película ganó Kevin Costner el Óscar al mejor director en 1991?","Bailando con lobos","Robin Hood","Waterworld"],["¿Qué compositor se quedó sordo y siguió componiendo?","Beethoven","Mozart","Vivaldi"],["¿En qué ciudad nació Mozart?","Salzburgo","Viena","Praga"],["¿Qué banda británica cantaba «Bohemian Rhapsody»?","Queen","The Beatles","The Rolling Stones"],["¿Qué instrumento tocaba Jimi Hendrix?","Guitarra","Batería","Piano"],["¿Cuántos jugadores tiene un equipo de rugby a quince en el campo?","Quince","Once","Trece"],["¿En qué deporte se disputa la Copa Ryder?","Golf","Tenis","Vela"],["¿Qué país ganó el primer Mundial de fútbol, en 1930?","Uruguay","Brasil","Argentina"],["¿En qué ciudad se celebraron los Juegos Olímpicos de 1992?","Barcelona","Atlanta","Seúl"],["¿Cuántos puntos vale un tiro libre en baloncesto?","Uno","Dos","Tres"],["¿En qué deporte destacó Severiano Ballesteros?","Golf","Tenis","Ciclismo"],["¿Qué ciclista español ganó cinco Tours de Francia seguidos?","Miguel Induráin","Pedro Delgado","Alberto Contador"],["¿Cuál es el hueso más largo del cuerpo humano?","El fémur","La tibia","El húmero"],["¿Qué gas respiran las plantas para hacer la fotosíntesis?","Dióxido de carbono","Oxígeno","Nitrógeno"],["¿Cuál es el símbolo químico del oro?","Au","Ag","Or"],["¿Cuál es el símbolo químico del hierro?","Fe","Hi","Ir"],["¿A qué temperatura hierve el agua al nivel del mar?","100 grados","90 grados","120 grados"],["¿Quién formuló la teoría de la relatividad?","Albert Einstein","Isaac Newton","Niels Bohr"],["¿Cuántas patas tiene un insecto?","Seis","Ocho","Cuatro"],["¿Qué órgano filtra la sangre y produce la orina?","Los riñones","El hígado","El bazo"],["¿En qué provincia está el Teide?","Santa Cruz de Tenerife","Las Palmas","La Gomera"],["¿Cuál es la capital de Turquía?","Ankara","Estambul","Esmirna"],["¿En qué país está la ciudad de Marrakech?","Marruecos","Túnez","Argelia"],["¿Qué océano es el más grande?","El Pacífico","El Atlántico","El Índico"],["¿Cuál es el país más grande del mundo?","Rusia","Canadá","China"],["¿Qué desierto es el más grande de África?","El Sáhara","El Kalahari","El Namib"],["¿En qué ciudad está la Alhambra?","Granada","Córdoba","Sevilla"],["¿Qué río pasa por Sevilla?","El Guadalquivir","El Guadiana","El Tajo"],["¿En qué año llegó Colón a América?","1492","1498","1512"],["¿Quién pintó «Las meninas»?","Velázquez","Goya","El Greco"],["¿Quién pintó el «Guernica»?","Picasso","Dalí","Miró"],["¿Quién escribió «Cien años de soledad»?","Gabriel García Márquez","Mario Vargas Llosa","Julio Cortázar"],["¿Quién escribió «Romeo y Julieta»?","William Shakespeare","Charles Dickens","Oscar Wilde"],["¿En qué año se aprobó la Constitución española vigente?","1978","1975","1982"],["¿Qué reina financió el viaje de Colón?","Isabel la Católica","Juana la Loca","Isabel II"],["¿Qué emperador romano dio nombre al mes de julio?","Julio César","Augusto","Nerón"],["¿En qué ciudad se firmó el tratado que creó la Comunidad Económica Europea en 1957?","Roma","París","Bruselas"],["¿Qué faraón tenía la tumba descubierta por Howard Carter en 1922?","Tutankamón","Ramsés II","Keops"],["¿Quién fue el primer hombre en pisar la Luna?","Neil Armstrong","Buzz Aldrin","Yuri Gagarin"],["¿Quién fue el primer ser humano en viajar al espacio?","Yuri Gagarin","Neil Armstrong","John Glenn"],["¿Qué famoso barco se hundió en 1912?","El Titanic","El Lusitania","El Britannic"],["¿Cuál es el metal líquido a temperatura ambiente?","El mercurio","El plomo","El estaño"],["¿Qué vitamina produce la piel con la luz del sol?","La D","La C","La B12"],["¿Cuántos colores tiene el arcoíris?","Siete","Seis","Ocho"],["¿Qué se mide en decibelios?","El sonido","La luz","La presión"],["¿Cuántos minutos tiene un día?","1.440","1.240","1.640"],["¿Qué número romano es la M?","1.000","500","100"],["¿Qué personaje de dibujos vive en una piña debajo del mar?","Bob Esponja","Patricio","Nemo"],["¿En qué saga aparece Hogwarts?","Harry Potter","El señor de los anillos","Las crónicas de Narnia"],["¿Qué superhéroe es Bruce Wayne?","Batman","Superman","Spiderman"],["¿Cómo se llama el dragón de la película de Disney «Mulán»?","Mushu","Rayo","Elliot"],["¿Qué actor español ganó el Óscar por «No es país para viejos»?","Javier Bardem","Antonio Banderas","Eduardo Noriega"],["¿Qué director español dirigió «Todo sobre mi madre»?","Pedro Almodóvar","Alejandro Amenábar","Fernando Trueba"],["¿Cuántos jugadores tiene un equipo de balonmano en el campo?","Siete","Seis","Ocho"],["¿Qué tenista español ha ganado más veces Roland Garros?","Rafa Nadal","Carlos Moyá","Carlos Alcaraz"],["¿En qué país se inventó el papel?","China","Egipto","Grecia"],["¿Qué idioma se habla en Brasil?","Portugués","Español","Brasileño"],["¿Cuál es la moneda del Reino Unido?","La libra esterlina","El euro","El dólar"],["¿Qué animal es el símbolo de WWF?","El panda","El koala","El tigre"],["¿Cuál es el ave nacional de Australia, que no vuela?","El emú","El kiwi","El avestruz"],["¿Qué fruta seca se obtiene de la ciruela?","La ciruela pasa","La pasa","El dátil"],["¿De qué planta se obtiene el tequila?","El agave","La caña de azúcar","El maíz"],["¿De qué país es típico el «haggis»?","Escocia","Irlanda","Gales"],["¿De qué país es típica la paella?","España","Italia","Portugal"]],gh=[["¿En qué año empezó a emitir regularmente Televisión Española?","1956",[]],["¿Cómo se llama la segunda cadena pública de TVE?","La 2",["La dos"]],["¿De qué país es el formato original de El Cazador, «The Chase»?","Reino Unido",["Inglaterra","Gran Bretaña"]],["¿Cómo se llama el formato británico en el que se basa La noche de los cazadores?","Beat the Chasers",[]],["¿Cuántos concursantes forman el equipo en El Cazador?","4",["Cuatro"]],["¿Cuánto dura la ronda de acumulación?","1 minuto",["Un minuto","60 segundos"]],["¿Cuánto dura la caza final para el equipo?","2 minutos",["Dos minutos","120 segundos"]],["¿Cómo se llama la casilla final del tablero?","Casa",["La casa"]],["¿Qué concurso de TVE presentaba Mayra Gómez Kemp con «la calabaza Ruperta»?","Un, dos, tres",["Un dos tres"]],["¿Cómo se llamaba la mascota del Un, dos, tres con forma de calabaza?","Ruperta",[]],["¿Qué concurso de letras y números lleva décadas en La 2?","Cifras y letras",["Saber y ganar"]],["¿Qué concurso de La 2 presentó durante décadas Jordi Hurtado?","Saber y ganar",[]],["¿Qué concurso de Antena 3 tiene un rosco?","Pasapalabra",[]],["¿Qué concurso tenía ruleta y panel de letras?","La ruleta de la suerte",["Ruleta de la suerte"]],["¿Qué concurso preguntaba «¿Quién quiere ser...?»","Millonario",["Quién quiere ser millonario"]],["¿Qué cantante española canta «Despechá»?","Rosalía",[]],["¿Quién compuso y canta «Mediterráneo» (1971)?","Joan Manuel Serrat",["Serrat"]],["¿Qué cantante colombiana canta «Waka Waka»?","Shakira",[]],["¿Qué artista canta «Bailando» con Gente de Zona?","Enrique Iglesias",[]],["¿Qué grupo cantaba «La flaca»?","Jarabe de Palo",[]],["¿Qué grupo cantaba «Devuélveme a mi chica»?","Hombres G",[]],["¿Qué banda británica liderada por Freddie Mercury cantaba «Bohemian Rhapsody»?","Queen",[]],["¿Qué cantante británica canta «Rolling in the Deep»?","Adele",[]],["¿Qué cantante estadounidense protagonizó «The Eras Tour»?","Taylor Swift",[]],["¿Qué película de animación tiene una reina de hielo llamada Elsa?","Frozen",[]],["¿Qué juguete vaquero protagoniza «Toy Story»?","Woody",[]],["¿Qué saga tiene a Luke Skywalker como protagonista?","Star Wars",["La guerra de las galaxias"]],["¿Qué actor español ganó un Óscar por «No es país para viejos»?","Javier Bardem",["Bardem"]],["¿Qué actriz española ganó un Óscar por «Vicky Cristina Barcelona»?","Penélope Cruz",[]],["¿Qué actor español es el Gato con Botas en la versión original de «Shrek»?","Antonio Banderas",["Banderas"]],["¿Qué serie española trata de un atraco a la Fábrica de Moneda y Timbre?","La casa de papel",[]],["¿Qué serie española transcurre en un instituto llamado Las Encinas?","Élite",[]],["¿Qué serie de TVE cuenta la historia de una familia desde 1968?","Cuéntame",["Cuéntame cómo pasó"]],["¿Qué ogro verde vive en un pantano?","Shrek",[]],["¿Qué superhéroe arácnido es Peter Parker?","Spider-Man",["Spiderman","Hombre Araña"]],["¿Qué mago es el villano de «El señor de los anillos» con un ojo de fuego?","Sauron",[]],["¿Cuál es la capital de Portugal?","Lisboa",[]],["¿Cuál es la capital de Italia?","Roma",[]],["¿Cuál es la capital de Alemania?","Berlín",[]],["¿Cuál es la capital de Noruega?","Oslo",[]],["¿Cuál es la capital de Suecia?","Estocolmo",[]],["¿Cuál es la capital de Finlandia?","Helsinki",[]],["¿Cuál es la capital de Dinamarca?","Copenhague",[]],["¿Cuál es la capital de Polonia?","Varsovia",[]],["¿Cuál es la capital de Hungría?","Budapest",[]],["¿Cuál es la capital de Austria?","Viena",[]],["¿Cuál es la capital de Grecia?","Atenas",[]],["¿Cuál es la capital de Irlanda?","Dublín",[]],["¿Cuál es la capital de Bélgica?","Bruselas",[]],["¿Cuál es la capital de los Países Bajos?","Ámsterdam",[]],["¿Cuál es la capital de Suiza?","Berna",[]],["¿Cuál es la capital de la República Checa?","Praga",[]],["¿Cuál es la capital de Rumanía?","Bucarest",[]],["¿Cuál es la capital de Bulgaria?","Sofía",[]],["¿Cuál es la capital de Croacia?","Zagreb",[]],["¿Cuál es la capital de Turquía?","Ankara",[]],["¿Cuál es la capital de Egipto?","El Cairo",["Cairo"]],["¿Cuál es la capital de Marruecos?","Rabat",[]],["¿Cuál es la capital de Japón?","Tokio",[]],["¿Cuál es la capital de China?","Pekín",["Beijing"]],["¿Cuál es la capital de Canadá?","Ottawa",[]],["¿Cuál es la capital de Australia?","Canberra",[]],["¿Cuál es la capital de Argentina?","Buenos Aires",[]],["¿Cuál es la capital de Chile?","Santiago",["Santiago de Chile"]],["¿Cuál es la capital de Perú?","Lima",[]],["¿Cuál es la capital de Colombia?","Bogotá",[]],["¿Cuál es la capital de Venezuela?","Caracas",[]],["¿Cuál es la capital de Ecuador?","Quito",[]],["¿Cuál es la capital de Uruguay?","Montevideo",[]],["¿Cuál es la capital de Paraguay?","Asunción",[]],["¿Cuál es la capital de Cuba?","La Habana",["Habana"]],["¿Cuál es la capital de México?","Ciudad de México",["México DF"]],["¿Cuál es la capital de Brasil?","Brasilia",[]],["¿Cuál es la capital de Rusia?","Moscú",[]],["¿Cuál es la capital de la India?","Nueva Delhi",[]],["¿Cuál es la capital de Kenia?","Nairobi",[]],["¿Cuál es la capital de Islandia?","Reikiavik",[]],["¿Cuál es la capital de Escocia?","Edimburgo",[]],["¿En qué ciudad española está la Alhambra?","Granada",[]],["¿En qué ciudad está la Sagrada Familia?","Barcelona",[]],["¿En qué ciudad está el Museo Guggenheim de España?","Bilbao",[]],["¿En qué ciudad está la Mezquita-Catedral más famosa de España?","Córdoba",[]],["¿Qué ciudad española es famosa por su acueducto romano?","Segovia",[]],["¿En qué ciudad se celebran los Sanfermines?","Pamplona",[]],["¿Qué ciudad española tiene la Torre de Hércules?","A Coruña",["La Coruña","Coruña"]],["¿En qué ciudad está la Giralda?","Sevilla",[]],["¿Qué ciudad gallega es meta del Camino de Santiago?","Santiago de Compostela",["Santiago"]],["¿En qué ciudad se celebran las Fallas?","Valencia",[]],["¿Qué ciudad italiana es famosa por sus canales y góndolas?","Venecia",[]],["¿En qué ciudad está la torre inclinada más famosa del mundo?","Pisa",[]],["¿En qué ciudad está la Estatua de la Libertad?","Nueva York",[]],["¿En qué ciudad está el Coliseo?","Roma",[]],["¿En qué ciudad está la Torre Eiffel?","París",[]],["¿En qué ciudad está el Big Ben?","Londres",[]],["¿Qué ciudad española tiene la Ciudad de las Artes y las Ciencias?","Valencia",[]],["¿En qué ciudad nació Picasso?","Málaga",[]],["¿Qué ciudad castellana es famosa por sus casas colgadas?","Cuenca",[]],["¿En qué ciudad está la Puerta de Brandeburgo?","Berlín",[]],["¿En qué país están las pirámides de Giza?","Egipto",[]],["¿En qué país está Machu Picchu?","Perú",[]],["¿En qué país se encuentra el Taj Mahal?","India",[]],["¿Qué país tiene forma de bota?","Italia",[]],["¿En qué país nació Mozart?","Austria",[]],["¿Qué país ganó el Mundial de fútbol de 2010?","España",[]],["¿En qué país se inventó la pizza margarita?","Italia",[]],["¿Qué país es conocido como el país del sol naciente?","Japón",[]],["¿En qué país está la ciudad de Marrakech?","Marruecos",[]],["¿Qué país tiene más habitantes de Sudamérica?","Brasil",[]],["¿De qué país es originario el tango?","Argentina",[]],["¿Qué país tiene como símbolo la hoja de arce?","Canadá",[]],["¿En qué país está el desierto de Atacama?","Chile",[]],["¿Qué país organizó los Juegos Olímpicos de 1992?","España",[]],["¿En qué país está Petra?","Jordania",[]],["¿De qué país es el sushi?","Japón",[]],["¿En qué país vive el canguro en libertad?","Australia",[]],["¿Qué país tiene la bandera con un círculo rojo sobre fondo blanco?","Japón",[]],["¿De qué país es la ciudad de Oporto?","Portugal",[]],["¿En qué país está el volcán Etna?","Italia",[]],["¿Cuál es el río más largo de España?","Tajo",[]],["¿Qué río pasa por Sevilla?","Guadalquivir",[]],["¿Qué río pasa por Zaragoza?","Ebro",[]],["¿Qué río pasa por Valladolid?","Pisuerga",[]],["¿Qué río pasa por París?","Sena",[]],["¿Qué río pasa por Londres?","Támesis",[]],["¿Qué río pasa por Roma?","Tíber",[]],["¿Cuál es el río más caudaloso del mundo?","Amazonas",[]],["¿Cuál es la montaña más alta del mundo?","Everest",[]],["¿Cuál es el pico más alto de España?","Teide",[]],["¿Cuál es el pico más alto de la península ibérica?","Mulhacén",[]],["¿Qué cordillera separa España de Francia?","Pirineos",[]],["¿Qué cordillera recorre Sudamérica de norte a sur?","Andes",[]],["¿Cuál es el océano más grande?","Pacífico",[]],["¿Qué mar separa Europa de África?","Mediterráneo",[]],["¿Cuál es el desierto más grande de África?","Sahara",[]],["¿En qué isla está el Teide?","Tenerife",[]],["¿Cuál es la isla más grande de las Baleares?","Mallorca",[]],["¿Cuál es el lago más grande de África?","Victoria",[]],["¿Qué estrecho separa España de Marruecos?","Gibraltar",[]],["¿Quién escribió «Don Quijote de la Mancha»?","Cervantes",["Miguel de Cervantes"]],["¿Quién pintó «Las meninas»?","Velázquez",["Diego Velázquez"]],["¿Quién pintó «Guernica»?","Picasso",["Pablo Picasso"]],["¿Quién pintó «La Gioconda»?","Leonardo da Vinci",["Leonardo","Da Vinci"]],["¿Quién escribió «Romeo y Julieta»?","Shakespeare",["William Shakespeare"]],["¿Quién formuló la teoría de la relatividad?","Einstein",["Albert Einstein"]],["¿Quién descubrió la penicilina?","Fleming",["Alexander Fleming"]],["¿Quién escribió «Cien años de soledad»?","García Márquez",["Gabriel García Márquez"]],["¿Quién pintó «La persistencia de la memoria», con relojes blandos?","Dalí",["Salvador Dalí"]],["¿Quién compuso la Novena Sinfonía con el «Himno de la alegría»?","Beethoven",[]],["¿Quién llegó a América en 1492?","Colón",["Cristóbal Colón"]],["¿Quién fue el primer hombre en pisar la Luna?","Armstrong",["Neil Armstrong"]],["¿Quién escribió «La casa de Bernarda Alba»?","Lorca",["García Lorca","Federico García Lorca"]],["¿Quién pintó «Los fusilamientos del 3 de mayo»?","Goya",["Francisco de Goya"]],["¿Quién propuso la teoría de la evolución por selección natural?","Darwin",["Charles Darwin"]],["¿Qué científica ganó dos premios Nobel, de Física y de Química?","Marie Curie",["Curie"]],["¿Quién escribió «La Regenta»?","Clarín",["Leopoldo Alas"]],["¿Quién diseñó el Park Güell?","Gaudí",["Antoni Gaudí"]],["¿Quién escribió «El Lazarillo de Tormes»?","Anónimo",["Autor anónimo"]],["¿Quién pintó «El jardín de las delicias»?","El Bosco",["Bosco"]],["¿Quién escribió «Fortunata y Jacinta»?","Galdós",["Benito Pérez Galdós"]],["¿Qué filósofo griego fue maestro de Alejandro Magno?","Aristóteles",[]],["¿Quién inventó el teléfono, según la versión más conocida?","Graham Bell",["Alexander Graham Bell","Bell"]],["¿Quién escribió «Platero y yo»?","Juan Ramón Jiménez",[]],["¿Quién fue el primer emperador romano?","Augusto",["Octavio Augusto"]],["¿Cuál es el animal terrestre más rápido?","Guepardo",[]],["¿Cuál es el mamífero más grande del mundo?","Ballena azul",[]],["¿Qué animal es el símbolo de WWF?","Panda",["Oso panda"]],["¿Qué ave no vuela y vive en la Antártida?","Pingüino",[]],["¿Cómo se llama la cría del caballo?","Potro",[]],["¿Cómo se llama la cría de la vaca?","Ternero",["Becerro"]],["¿Qué animal fabrica la miel?","Abeja",[]],["¿Qué animal es conocido como el rey de la selva?","León",[]],["¿Cuál es el animal más alto del mundo?","Jirafa",[]],["¿Qué mamífero vuela?","Murciélago",[]],["¿Qué animal tiene ocho brazos?","Pulpo",[]],["¿Qué reptil puede cambiar de color?","Camaleón",[]],["¿Qué animal es el lince ibérico: un felino o un cánido?","Felino",[]],["¿Qué ave es el símbolo de la paz?","Paloma",[]],["¿Qué animal es el protagonista de «Moby Dick»?","Ballena",["Cachalote"]],["¿Cómo se llama la hembra del jabalí?","Jabalina",[]],["¿Qué animal pone huevos y es mamífero, el ornitorrinco o el castor?","Ornitorrinco",[]],["¿Cómo se llama la mariposa en su fase de larva?","Oruga",[]],["¿Qué animal es el mejor amigo del hombre, según el refrán?","Perro",[]],["¿Cuál es el símbolo químico del oro?","Au",[]],["¿Cuál es el símbolo químico del agua?","H2O",[]],["¿Cuál es el símbolo químico del hierro?","Fe",[]],["¿Cuál es el símbolo químico del sodio?","Na",[]],["¿Qué gas respiramos para vivir?","Oxígeno",[]],["¿Qué gas expulsan las plantas durante la fotosíntesis?","Oxígeno",[]],["¿Cuál es el planeta más grande del sistema solar?","Júpiter",[]],["¿Cuál es el planeta más cercano al Sol?","Mercurio",[]],["¿Qué planeta es conocido como el planeta rojo?","Marte",[]],["¿Qué planeta tiene los anillos más famosos?","Saturno",[]],["¿Cuál es la estrella más cercana a la Tierra?","Sol",["El Sol"]],["¿Cómo se llama el satélite natural de la Tierra?","Luna",["La Luna"]],["¿Cuál es el hueso más largo del cuerpo humano?","Fémur",[]],["¿Qué órgano bombea la sangre?","Corazón",[]],["¿Qué órgano del cuerpo humano es el más grande?","Piel",["La piel"]],["¿Qué vitamina produce el cuerpo con la luz del sol?","Vitamina D",["D"]],["¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?","Newton",[]],["¿Qué partícula del átomo tiene carga negativa?","Electrón",[]],["¿A qué temperatura hierve el agua al nivel del mar, en grados Celsius?","100",["Cien"]],["¿Qué instrumento mide la presión atmosférica?","Barómetro",[]],["¿Cómo se llama el proceso por el que el agua pasa de líquido a gas?","Evaporación",["Vaporización"]],["¿Cuántos cromosomas tiene normalmente una célula humana?","46",["Cuarenta y seis"]],["¿Qué tipo de sangre es el donante universal?","0 negativo",["Cero negativo","O negativo"]],["¿Qué científico enunció la ley de la gravitación universal?","Newton",["Isaac Newton"]],["¿Cuántos lados tiene un hexágono?","6",["Seis"]],["¿Cuántos lados tiene un octógono?","8",["Ocho"]],["¿Cuántos jugadores tiene un equipo de fútbol en el campo?","11",["Once"]],["¿Cuántos jugadores tiene un equipo de baloncesto en la pista?","5",["Cinco"]],["¿Cuántos días tiene un año bisiesto?","366",["Trescientos sesenta y seis"]],["¿Cuántos minutos tiene una hora?","60",["Sesenta"]],["¿Cuántos meses tienen 31 días?","7",["Siete"]],["¿Cuántas patas tiene una araña?","8",["Ocho"]],["¿Cuántas patas tiene un insecto?","6",["Seis"]],["¿Cuántos colores tiene el arcoíris?","7",["Siete"]],["¿Cuántos años tiene un siglo?","100",["Cien"]],["¿Cuántos años son unas bodas de plata?","25",["Veinticinco"]],["¿Cuántos años son unas bodas de oro?","50",["Cincuenta"]],["¿Cuál es la raíz cuadrada de 81?","9",["Nueve"]],["¿Cuánto es 7 por 8?","56",["Cincuenta y seis"]],["¿Cuántos grados tiene un ángulo recto?","90",["Noventa"]],["¿Cuántas cartas tiene una baraja francesa sin comodines?","52",["Cincuenta y dos"]],["¿Cuántos ceros tiene un millón?","6",["Seis"]],["¿Cuántas cuerdas tiene una guitarra española?","6",["Seis"]],["¿Cuántos dientes tiene un adulto con todas las muelas del juicio?","32",["Treinta y dos"]],["¿Cuánto es la mitad de 250?","125",["Ciento veinticinco"]],["¿Cuántos segundos tiene un minuto?","60",["Sesenta"]],["¿En qué deporte se usa un tee?","Golf",[]],["¿En qué deporte destacó Rafa Nadal?","Tenis",[]],["¿En qué deporte se disputa el Tour de Francia?","Ciclismo",[]],["¿En qué deporte se hace un home run?","Béisbol",[]],["¿En qué deporte se lanza una jabalina?","Atletismo",[]],["¿En qué deporte se marca un ensayo?","Rugby",[]],["¿En qué deporte compite Fernando Alonso?","Fórmula 1",["Automovilismo","F1"]],["¿Cada cuántos años se celebran los Juegos Olímpicos de verano?","4",["Cuatro"]],["¿Cómo se llama el estadio del Real Madrid?","Santiago Bernabéu",["Bernabéu"]],["¿Cómo se llama el estadio del FC Barcelona?","Camp Nou",["Spotify Camp Nou"]],["¿En qué deporte se usa un tatami?","Judo",["Kárate"]],["¿En qué deporte destacó Pau Gasol?","Baloncesto",[]],["¿Cuántos puntos vale un triple en baloncesto?","3",["Tres"]],["¿En qué deporte se usan los términos «set» y «deuce»?","Tenis",[]],["¿En qué ciudad se juega el torneo de tenis de Roland Garros?","París",[]],["¿En qué deporte es famoso Carlos Alcaraz?","Tenis",[]],["¿Qué país ganó la Eurocopa de 2024?","España",[]],["¿En qué deporte se usan las palabras «spare» y «strike»?","Bolos",[]],["¿Cuál es el ingrediente principal del guacamole?","Aguacate",[]],["¿De qué país es típica la paella?","España",[]],["¿Qué fruta lleva la tarta Tatin?","Manzana",[]],["¿Con qué se hace el pan tradicionalmente?","Harina",["Trigo"]],["¿Qué legumbre es la base del hummus?","Garbanzo",["Garbanzos"]],["¿Qué se obtiene al prensar aceitunas?","Aceite",["Aceite de oliva"]],["¿Qué hortaliza es la base del gazpacho junto al pepino y el pimiento?","Tomate",[]],["¿De qué región española es típica la fabada?","Asturias",[]],["¿Con leche de qué animal se hace el queso manchego?","Oveja",[]],["¿Qué bebida se obtiene de la fermentación de la uva?","Vino",[]],["¿Qué dulce navideño se hace con almendra y miel?","Turrón",[]],["¿Qué fruto seco se usa en el mazapán?","Almendra",[]],["¿De qué fruta se hace la sidra?","Manzana",[]],["¿Qué cereal es la base del sushi?","Arroz",[]],["¿De qué país es típico el croissant?","Francia",[]],["¿En qué año llegó Colón a América?","1492",[]],["¿En qué año cayó el Muro de Berlín?","1989",[]],["¿En qué año empezó la Segunda Guerra Mundial?","1939",[]],["¿En qué año terminó la Segunda Guerra Mundial?","1945",[]],["¿En qué año se aprobó la Constitución española actual?","1978",[]],["¿En qué año llegó el hombre a la Luna?","1969",[]],["¿En qué año entró España en la Comunidad Económica Europea?","1986",[]],["¿En qué año comenzó la Revolución francesa?","1789",[]],["¿En qué año se descubrió la tumba de Tutankamón?","1922",[]],["¿En qué año se celebró la Expo de Sevilla?","1992",[]],["¿En qué año entró en circulación el euro en monedas y billetes?","2002",[]],["¿En qué año se hundió el Titanic?","1912",[]],["¿Qué civilización construyó Machu Picchu?","Inca",["Incas"]],["¿Qué reyes son conocidos como los Reyes Católicos?","Isabel y Fernando",["Isabel I y Fernando II"]],["¿Qué imperio tenía su capital en Constantinopla?","Bizantino",["Imperio bizantino"]],["¿Qué emperador francés fue derrotado en Waterloo?","Napoleón",["Napoleón Bonaparte"]],["¿En qué batalla de 1805 murió el almirante Nelson?","Trafalgar",[]],["¿Qué pueblo construyó la Gran Muralla?","China",["Chinos"]],["¿En qué museo de Madrid está «Las meninas»?","Prado",["Museo del Prado"]],["¿En qué museo está «La Gioconda»?","Louvre",["Museo del Louvre"]],["¿Qué instrumento tocaba Paco de Lucía?","Guitarra",[]],["¿Cuántas teclas tiene un piano estándar?","88",["Ochenta y ocho"]],["¿Qué idioma se habla en Brasil?","Portugués",[]],["¿Qué idioma oficial tiene Austria?","Alemán",[]],["¿Cuántas letras tiene el abecedario español?","27",["Veintisiete"]],["¿Cómo se llama el escudero de Don Quijote?","Sancho Panza",["Sancho"]],["¿Cómo se llama el caballo de Don Quijote?","Rocinante",[]],["¿Qué personaje de cuento perdió un zapato de cristal?","Cenicienta",[]],["¿Qué personaje vive en el País de Nunca Jamás?","Peter Pan",[]],["¿Cómo se llama el muñeco de madera al que le crece la nariz?","Pinocho",[]],["¿Qué detective creó Arthur Conan Doyle?","Sherlock Holmes",["Holmes"]],["¿Qué mago estudia en Hogwarts?","Harry Potter",[]],["¿Qué superhéroe es Bruce Wayne?","Batman",[]],["¿Qué superhéroe es Clark Kent?","Superman",[]],["¿En qué ciudad viven los Simpson?","Springfield",[]],["¿Cómo se llama el ratón más famoso de Disney?","Mickey",["Mickey Mouse"]],["¿Qué grupo británico cantaba «Yesterday»?","The Beatles",["Beatles"]],["¿Qué cantante es conocido como el Rey del Pop?","Michael Jackson",[]],["¿Qué palabra es un palíndromo: «reconocer» o «reconocido»?","Reconocer",[]],["¿Cuál es el plural de «el régimen»?","Los regímenes",["Regímenes"]],["¿El Sol es una estrella o un planeta?","Estrella",[]],["¿El tomate es botánicamente fruta o tubérculo?","Fruta",[]],["¿Qué es más grande, un átomo o una célula?","Una célula",[]],["¿El delfín es mamífero o pez?","Mamífero",[]],["¿Cuál es más antigua, la Alhambra o el Guggenheim?","La Alhambra",[]],["¿Galicia limita con Portugal o con Francia?","Portugal",[]],["¿Mozart era austriaco o alemán de nacimiento?","Austriaco",[]],["¿La ballena azul es el animal más grande o el más rápido?","El más grande",[]],["¿El agua hierve a 100 o a 90 grados al nivel del mar?","100 grados",[]],["¿La Luna tiene luz propia?","No",[]],["¿Picasso nació en Málaga o en Barcelona?","Málaga",[]],["¿Un kilo son mil o cien gramos?","Mil gramos",[]],["¿El pingüino vive en el polo sur o en el polo norte?","Polo sur",[]],["¿La Giralda está en Sevilla o en Córdoba?","Sevilla",[]],["¿El euro entró en circulación en 2002 o en 1998?","2002",[]],["¿Cuántos aros tiene la bandera olímpica: cinco o seis?","Cinco",[]],["¿La Tierra gira alrededor del Sol o al revés?","La Tierra alrededor del Sol",[]],["¿El ajedrez tiene 64 o 100 casillas?","64",[]],["¿Un decenio son diez o cien años?","Diez años",[]],["¿Shakespeare escribió «Hamlet» o «Fausto»?","Hamlet",[]],["¿La sangre arterial va desde o hacia el corazón?","Desde el corazón",[]],["¿Una docena son doce o diez unidades?","Doce",[]],["¿El Cantábrico baña Asturias o Murcia?","Asturias",[]],["¿El oso panda es originario de China o de Japón?","China",[]],["¿El triángulo equilátero tiene sus lados iguales o distintos?","Iguales",[]],["¿La capital de Suiza es Berna o Ginebra?","Berna",[]],["¿El cóndor es un ave o un reptil?","Un ave",[]],["¿Neil Armstrong fue astronauta o aviador de carreras?","Astronauta",[]],["¿La paella valenciana lleva arroz o pasta?","Arroz",[]],["¿Cuál es más pesado, un kilo de hierro o un kilo de paja?","Pesan lo mismo",[]],["¿El Everest está en el Himalaya o en los Andes?","Himalaya",[]],["¿El Nilo desemboca en el Mediterráneo o en el mar Rojo?","Mediterráneo",[]],["¿El murciélago ve con ecolocalización o con rayos X?","Ecolocalización",[]],["¿«Cien años de soledad» es una novela o un poemario?","Novela",[]],["¿Velázquez fue pintor de Felipe IV o de Carlos III?","Felipe IV",[]],["¿El diamante está formado por carbono o por silicio?","Carbono",[]],["¿Bilbao está en Vizcaya o en Guipúzcoa?","Vizcaya",[]],["¿Un octógono tiene ocho o diez lados?","Ocho",[]],["¿El corazón humano tiene cuatro o tres cavidades?","Cuatro",[]],["¿El tango es originario de Argentina o de Cuba?","Argentina",[]],["¿El flamenco es Patrimonio de la Humanidad: sí o no?","Sí",[]],["¿La Estatua de la Libertad fue un regalo de Francia o de Inglaterra?","Francia",[]],["¿Las abejas producen miel o cera solamente?","Miel",[]],["¿El caballo de Don Quijote se llamaba Rocinante o Babieca?","Rocinante",[]],["¿El Cid cabalgaba a Babieca o a Rocinante?","Babieca",[]],["¿El rayo suele verse antes o después de oír el trueno?","Antes",[]],["¿El sonido viaja más rápido en el agua o en el aire?","En el agua",[]],["¿La capital de Marruecos es Rabat o Casablanca?","Rabat",[]],["¿El hielo flota o se hunde en el agua?","Flota",[]],["¿Júpiter es un planeta gaseoso o rocoso?","Gaseoso",[]],["¿La Mezquita-catedral está en Córdoba o en Granada?","Córdoba",[]],["¿El kiwi es también un ave de Nueva Zelanda?","Sí",[]],["¿Cuántos jugadores hay en pista en un equipo de baloncesto: cinco o seis?","Cinco",[]],["¿El Quijote se publicó en el siglo XVII o en el XIX?","Siglo XVII",[]],["¿La fotosíntesis la hacen las plantas o los hongos?","Las plantas",[]],["¿El lince ibérico es un felino o un cánido?","Felino",[]],["¿Mercurio es el planeta más cercano al Sol o el más lejano?","El más cercano",[]],["¿La primera vuelta al mundo terminó en Sanlúcar o en Cádiz?","Sanlúcar de Barrameda",[]],["¿Un litro equivale a un decímetro cúbico o a un metro cúbico?","Un decímetro cúbico",[]],["¿El Teide está en Tenerife o en Gran Canaria?","Tenerife",[]],["¿La sardana es un baile catalán o gallego?","Catalán",[]],["¿La muñeira es un baile gallego o vasco?","Gallego",[]],["¿El aurresku es un baile vasco o andaluz?","Vasco",[]],["¿La jota es típica de Aragón o de Canarias?","Aragón",[]],["¿Los koalas comen eucalipto o bambú?","Eucalipto",[]],["¿El camello tiene dos jorobas o una?","Dos",[]],["¿El dromedario tiene una joroba o dos?","Una",[]],["¿La ONU tiene su sede principal en Nueva York o en Ginebra?","Nueva York",[]],["¿La Vía Láctea es una galaxia o una nebulosa?","Una galaxia",[]],["¿El número pi empieza por 3,14 o por 3,41?","3,14",[]],["¿Un pentágono tiene cinco o seis lados?","Cinco",[]],["¿El Guadalquivir pasa por Sevilla o por Málaga?","Sevilla",[]],["¿El Ebro desemboca en Tarragona o en Castellón?","Tarragona",[]],["¿«La casa de Bernarda Alba» es de Lorca o de Valle-Inclán?","Lorca",[]],["¿Beethoven se quedó sordo o ciego?","Sordo",[]],["¿El sushi es típico de Japón o de Tailandia?","Japón",[]],["¿Los tiburones tienen huesos o cartílago?","Cartílago",[]],["¿El ácido del estómago es clorhídrico o sulfúrico?","Clorhídrico",[]],["¿La capital de Grecia es Atenas o Esparta?","Atenas",[]],["¿El Danubio pasa por Viena o por París?","Viena",[]],["¿El Támesis pasa por Londres o por Edimburgo?","Londres",[]],["¿El Sena pasa por París o por Lyon?","París",[]],["¿La Torre de Hércules está en A Coruña o en Gijón?","A Coruña",[]],["¿El acueducto romano más famoso de España está en Segovia o en Ávila?","Segovia",[]],["¿Las murallas medievales más famosas de Castilla están en Ávila o en Soria?","Ávila",[]],["¿Las Fallas son en Valencia o en Alicante?","Valencia",[]],["¿Las Hogueras de San Juan son típicas de Alicante o de Lugo?","Alicante",[]],["¿La Feria de Abril se celebra en Sevilla o en Jerez?","Sevilla",[]],["¿Las ballenas respiran por branquias o por pulmones?","Pulmones",[]],["¿El hipopótamo es herbívoro o carnívoro?","Herbívoro",[]],["¿Una tonelada son mil o cien kilos?","Mil kilos",[]],["¿Un siglo tiene cien o mil años?","Cien años",[]],["¿El ADN está en el núcleo de la célula o en la membrana?","En el núcleo",[]],["¿La gasolina es un derivado del petróleo o del carbón?","Petróleo",[]],["¿La Puerta de Alcalá está en Madrid o en Alcalá de Henares?","Madrid",[]],["¿Cervantes nació en Alcalá de Henares o en Toledo?","Alcalá de Henares",[]],["¿Goya nació en Aragón o en Andalucía?","Aragón",[]],["¿Antoni Gaudí fue arquitecto o escultor principalmente?","Arquitecto",[]],["¿El piano es de cuerda percutida o de viento?","Cuerda percutida",[]],["¿Las tortugas son reptiles o anfibios?","Reptiles",[]],["¿Las ranas son anfibios o reptiles?","Anfibios",[]],["¿El Atlántico es más grande que el Índico?","Sí",[]],["¿La Antártida es un continente o un océano?","Un continente",[]],["¿El arco iris tiene siete o nueve colores tradicionales?","Siete",[]],["¿Cuántas uvas se comen en Nochevieja en España?","12",["Doce"]],["¿Qué día se celebra la Nochebuena?","24 de diciembre",["24"]],["¿Qué día llegan los Reyes Magos?","6 de enero",["6"]],["¿Qué rey mago es el más conocido por llevar oro?","Melchor",[]],["¿Qué animal tira del trineo de Papá Noel?","Reno",["Renos"]],["¿Cómo se llama el reno de la nariz roja?","Rudolph",["Rodolfo"]],["¿Qué dulce navideño típico de Toledo se hace con almendra?","Mazapán",[]],["¿Qué se le pone a un árbol de Navidad en la punta?","Estrella",["Una estrella"]],["¿En qué ciudad nació Jesús según la tradición?","Belén",[]],["¿Qué sorteo se celebra el 22 de diciembre en España?","Lotería de Navidad",["El Gordo","Lotería"]],["¿Cómo se llama el premio mayor de la Lotería de Navidad?","El Gordo",["Gordo"]],["¿Qué personaje vasco trae los regalos en Navidad?","Olentzero",[]],["¿Qué tronco trae regalos en Cataluña?","Tió",["Tió de Nadal","Caga tió"]],["¿Qué dulce con forma de anillo se come el día de Reyes?","Roscón",["Roscón de Reyes"]],["¿Qué se esconde dentro del roscón además del regalo?","Haba",["Una haba"]],["¿Desde qué plaza madrileña se retransmiten las campanadas?","Puerta del Sol",["Sol"]],["¿Qué planta navideña tiene hojas rojas?","Flor de Pascua",["Poinsetia"]],["¿Qué día es el Día de los Santos Inocentes?","28 de diciembre",["28"]],["¿Qué personaje de Dickens odiaba la Navidad?","Scrooge",["Ebenezer Scrooge"]],["¿Qué color es el traje de Papá Noel?","Rojo",[]],["¿En qué país vive Papá Noel según la tradición finlandesa?","Finlandia",["Laponia"]],["¿Qué figura del belén se pone el 6 de enero?","Reyes Magos",["Los Reyes Magos"]],["¿Cuántos días de Navidad cuenta la canción inglesa «The Twelve Days of Christmas»?","12",["Doce"]],["¿Qué película navideña tiene a un niño solo en casa?","Solo en casa",[]],["¿Qué se come en las campanadas al ritmo de cada una?","Uvas",[]],["¿Qué bebida espumosa se brinda en Nochevieja?","Cava",["Champán"]]],vh=[["¿En qué año se inauguró la Torre Eiffel?",1889,"año"],["¿Cuántos metros mide de altura la Torre Eiffel, aproximadamente, sin antenas?",300,"metros"],["¿Cuántos kilómetros de longitud tiene el río Tajo?",1007,"km"],["¿Cuántos metros de altitud tiene el Teide?",3715,"metros"],["¿Cuántos metros de altitud tiene el Everest?",8849,"metros"],["¿En qué año se publicó la primera parte del Quijote?",1605,"año"],["¿Cuántos habitantes tiene aproximadamente España, en millones?",49,"millones"],["¿Cuántos kilómetros separan Madrid y Barcelona en línea recta, aproximadamente?",505,"km"],["¿Cuántas teclas tiene un piano de cola estándar?",88,"teclas"],["¿En qué año se fundó el Real Madrid?",1902,"año"],["¿En qué año se fundó el FC Barcelona?",1899,"año"],["¿Cuántos países forman la Unión Europea en 2026?",27,"países"],["¿Cuántos huesos tiene el cuerpo humano adulto?",206,"huesos"],["¿A cuántos grados Fahrenheit hierve el agua al nivel del mar?",212,"°F"],["¿En qué año se emitió la primera emisión regular de TVE?",1956,"año"],["¿Cuántos kilómetros mide el Camino de Santiago francés desde Saint-Jean-Pied-de-Port, aproximadamente?",780,"km"],["¿Cuántos días tarda la Luna en dar una vuelta a la Tierra, aproximadamente?",27,"días"],["¿Cuántos metros tiene de altura la Giralda con su remate?",104,"metros"],["¿En qué año llegó Cristóbal Colón por primera vez a América?",1492,"año"],["¿Cuántos escalones tiene la escalera principal de la Estatua de la Libertad hasta la corona?",354,"escalones"],["¿Cuántas islas forman el archipiélago canario habitadas, contando La Graciosa?",8,"islas"],["¿Cuántos kilómetros cuadrados tiene España, en miles?",506,"mil km²"],["¿En qué año murió Miguel de Cervantes?",1616,"año"],["¿Cuántos goles marcó España en total en el Mundial de 2010?",8,"goles"],["¿Cuántas sinfonías compuso Beethoven?",9,"sinfonías"],["¿Cuántos años duró la Guerra de los Cien Años?",116,"años"],["¿Cuántos metros mide una piscina olímpica de largo?",50,"metros"],["¿Cuántos kilómetros por segundo recorre la luz, aproximadamente, en miles?",300,"mil km/s"],["¿Cuántos jugadores hay en total en un partido de rugby a quince en el campo?",30,"jugadores"],["¿En qué año se aprobó la Constitución española vigente?",1978,"año"],["¿Cuántas provincias tiene Andalucía?",8,"provincias"],["¿Cuántos kilómetros de costa tiene España aproximadamente, en miles?",8,"mil km"],["¿Cuántos metros mide el estadio Santiago Bernabéu de largo de terreno de juego?",105,"metros"],["¿Cuántos días tiene un año en Marte, aproximadamente?",687,"días"],["¿En qué año se celebraron los Juegos Olímpicos de Barcelona?",1992,"año"],["¿Cuántos grados mide la suma de los ángulos de un triángulo?",180,"grados"],["¿Cuántos kilos pesa aproximadamente un litro de agua?",1,"kg"],["¿Cuántas casillas tiene el tablero del Monopoly?",40,"casillas"],["¿Cuántos metros mide la Gran Pirámide de Giza, aproximadamente, hoy?",139,"metros"],["¿En qué año pisó el hombre la Luna por primera vez?",1969,"año"]];var bh={"83aea8b1":1.93,"2e2b9a03":3.03,"239707bc":4.73,"909c9370":2.69,a4717f68:5.07,e0a47ae6:1.2,"86818f15":3.16,b8287526:2.3,"40b49264":2.22,c9b2dcb9:2.8,"59e5abaa":2.19,"8ed668a3":5.04,"5c628cc0":5.25,"3f25ad05":3.87,b753adf9:3.42,b4623e81:3.89,"70e5b5aa":.76,"62de19bd":.47,d0b109b3:.39,b0450504:.71,"523d6bdc":.37,"4b120dd5":.84,"11b5fc2b":.78,d8899472:3.45,"3117d43b":4.47,a9fc9708:3.42,"0b308c42":2.32,"96e54e62":2.61,"292dd3f7":2.06,"2ac18f52":3.37,"6f0e32de":4.39,"58f475cb":3.68,ca22a504:3.76,"1967f88e":4.57,"29b6bc42":1.72,"6f78901a":1.57,e30f6b7b:1.52,cc1b96de:.71,"7ffae551":1.36,"2b6410fa":1.2,c08682f7:1.41,"084446f4":1.07,bf8a4529:1.02,"71ef201c":1.96,"014fd76b":14.45,bf413bce:14.26,"643f95cb":8.54,e3811b3b:16.98,"85323d91":4,b58e89ff:8.83,ad10d9e0:14.32,"58e6600f":12.77,41341176:4.36,"5ef5dfb6":1.93,"307e16e0":1.8,"0200d3b3":2.8,"7491f2d4":4.75,"8d85e676":3,fe76e58b:2.59,"3ddde836":2.12,a82dfc04:2.35,fe0b1f79:2.87,b30c98ea:2.32,"9d34a32a":3.37,"66dbbd42":1.49,"09630ff2":1.38,"57acce1e":4.31,"3d2c1478":3.68,"46b65b86":2.12,"3fa06987":2.66,"82237ad6":1.7,"02aa7d79":2.72,"34d129c3":1.46,"5f238318":2.01,"2cb595e8":3.87,bf3ae359:1.62,f0b96397:1.44,"8ca0e7d2":2.74,"1389bcb4":2.61,ceaf77d2:2.04,"22a3f33c":1.8,"3ea93083":.97,eae7b147:2.17,"9edd7a05":1.78,"8e5af363":2.25,"80c689f4":3.66,"9522aadc":1.8,"3c03bf51":1.57,f81bfc34:2.9,"82b4567f":3.58,d0472a67:2.77,"413a33eb":2.9,"9e2e6542":1.25,c84f0798:3.21,"50dd1063":2.32,d1b79916:2.09,"9bd08038":4.49,cfe1af7e:1.8,"6739b7f4":1.67,c86ee352:3.81,d083bb11:3.29,"1907ed39":1.31,"1b77cfe6":2.43,c4472e70:1.75,"650fa940":2.3,a51ce394:1.59,"17063e6b":2.38,bbed9d7c:5.28,"2873136b":1.88,da06e55f:1.52,"07dde4df":3.92,"50355f79":2.48,dd755594:2.98,"3153cb15":2.51,"82c59754":2.38,"8bdc6c9a":1.54,f2b9184c:6.56,f4749f19:1.23,e802c48f:3.89,"6a6b0f29":2.95,a162a731:3.94,"79519c26":2.43,"20210ca5":2.04,b08eb635:4.44,ef6ba0fe:2.46,"9fb1e884":3.63,"3f9e42ea":2.56,"484f6461":1.25,"6799d986":1.78,"0e25add7":2.9,"85d6f22b":4.41,cba15f42:2.74,b4ed7d6f:1.54,"9e4d80b0":3.06,eed1ca12:2.64,"82afe69d":2.46,"61c67bc3":2.66,"40354b4b":1.36,"33f66053":2.27,"9d5fa83b":3.13,"853772a1":3.94,"819cd0ae":.63,a7180864:2.82,e169fadc:2.35,"675b28b4":2.69,"67c5db97":2.43,c1e91bf9:8.07,"3df31d38":3.47,"2e9aecd3":2.01,"1fd5aba2":2.48,"3eeef694":2.17,"947d0091":2.32,"9dc0427a":2.46,"271e39d5":4.44,"0249e960":3.24,d5e5c9d9:2.8,eeff03e7:4.6,"9527b7ca":2.38,"9e8f0e2f":3.08,"4f0bb560":4.57,e4b99ceb:3.84,"46c53cbb":4.36,a0dd55a9:3,"6dab202a":2.48,"48982c02":1.12,"4b06949b":11.26,"84f0de1a":2.43,"27dc964c":3.08,"4b6a90df":6.01,"8ec88e84":2.06,35497632:2.25,"4d5ccfa6":2.3,"6f40c2ee":3.34,f0feae1e:1.99,"182d80be":1.85,aef5cd72:2.25,"9f412aac":1.91,b6135b09:3.42,"93f7dc59":2.64,a02422ca:1.59,"4ee9897c":2.61,d35ede47:2.48,"7216c34f":1.31,"63d0774b":3.21,c5617700:3.55,a31d0942:1.1,"4d37e866":1.93,b028bf7d:3.19,"136fd21a":2.06,f5bf9d7f:2.82,"624a85bd":2.53,"126ba088":2.51,14185423:5.46,"598addab":2.04,e1f1314c:4.23,cfab34f4:1.65,"4152840a":3.29,"65325cfc":2.87,b35f7584:2.4,"935849bc":2.8,"0e179f6b":2.53,df636cc2:3.13,"2a50e80a":2.98,"3dfe4bb8":3.13,"84f762cb":2.01,db1634fd:2.59,e2371277:2.04,"889101aa":2.48,"55d0bfda":3.74,"6888dd54":1.78,"57a66508":8.05,e248bbfc:5.98,"83aaaad8":14.08,"8f58dac4":11.94,e06608ea:10.29,e53e1066:6.35,"9f5d1c7f":11.96,"8726305b":17.95,"7f7acfc2":3.66,"6b221c91":3.21,a23fabc0:5.3,"77a0521a":6.53,cd6b01b6:7.37,"2057227e":3.27,b60d0254:3.32,"1206e2b9":3.97,ed616ae0:3.32,"5f7a20d3":5.9,"3e0a0d06":3.76,c8da81e6:2.53,"3b16561b":4,"7f7f6920":2.98,"390a3c21":3.34,dded0680:5.22,"6518e517":2.72,"7af7bb17":3,"1f0877a7":4.05,"26b8feb3":2.93,"891d485e":3.19,ae64b11b:8.28,"4fc6e264":4.55,"1d609813":4.28,"13a812b4":4.31,b604ad0c:3.19,a32dc92a:2.77,"52d8a569":5.15,"0238439e":3.16,"0d9d5d70":.76,"5f0be084":1.31,"4a691c0e":1.67,"8a7d887f":1.07,dcab22cf:.84,"184f7482":1.36,"6902d2e3":1.33,"1e0c5caa":1.15,"7fa421da":1.57,d2574c82:1.52,"0b4511ca":4.57,"6bf80448":1.36,cda46e2b:2.61,"59f3b966":1.72,cd8edfd1:1.93,"8f57f384":2.87,"6cadfa75":2.43,"3ed9eeef":3.58,f6070eb6:3.27,"89c3ff74":2.95,"212154b7":2.74,bf6b7d59:3.45,65655019:2.17,f9ad0d71:4.1,edd6750c:3.55,ec6e6beb:2.53,"1bec84f1":3.87,b2f0fd19:2.56,"2f282d26":2.01,f11ab600:2.19,bd88e0c5:2.87,"34feeec9":2.69,a7ab2a31:3.13,"6e89aca4":2.3,"31f99bf9":2.38,"6ff83d8f":2.01,a1c07d9b:1.67,e9771c01:1.96,"7b173203":2.12,"47b33a62":1.85,"863eeb9d":4.44,"568c94e6":3.79,a86652d6:3.16,b8debf58:2.56,c88d2e64:2.87,a813c285:1.62,"3f46d569":2.46,"3a5151ae":2.22,f8d0553d:2.66,"00d8f474":2.17,"84fb902a":2.64,"2895baf4":3.37,"6c21a950":2.35,"60af5ed8":2.48,e1c18b28:1.72,"271461f0":1.96,"257e4b13":1.91,"09c73132":2.22,"742b5654":1.65,b7268b43:4.28,fee7bc40:2.17,"83f251d9":1.85,"5c7055ea":2.3,f5ec2283:2.27,e63558f8:2.72,"3f3cb56d":1.46,"5cd543c5":2.22,"00e3e85f":2.46,b5187d97:2.17,"65cf5bbb":2.27,"5aa43325":2.4,d923f337:1.8,"318d2f6e":2.22,c226856d:1.59,"17ada348":1.93,"0309340b":2.06,ff912854:2.66,"1a6d519c":1.83,"60e5095f":2.27,f6b84b94:1.2,"0597ca01":1.85,e47bbd69:2.48,c458bee9:1.07,"5155a269":2.09,a9a7943b:1.72,d14835e1:1.62,"3b02f0de":2.48,"417c924a":1.83,"75f128f9":2.09,e9a63e87:2.56,"60d736ad":2.8,"51470be6":4.05,d35a421a:1.15,d3ce8c43:2.06,"48950ca9":1.65,d6fa0861:1.72,"741f41eb":2.04,"11c49d30":2.06,"5bc48ba3":2.14,20802415:1.93,c287f6bb:1.88,"5918ecb2":1.78,d92d3dea:1.41,"3796e63c":2.19,ce99dce4:2.12,"7fe63ec8":2.3,"933607b2":2.17,"5827c61c":1.8,ca14b524:1.28,ec8fc6a1:1.46,"04bdbd6b":.89,"72c0fc4b":1.38,"5bfe6f68":1.65,"069fdefa":3.94,"6f4a4f7c":2.87,28438129:4.21,d7c91108:2.22,"9892b9f6":1.67,a70464b2:2.4,d88f9a7f:2.09,"4883d770":2.12,f31f13b7:2.46,"83e6b9e4":1.52,b2a7e616:1.18,"655f562d":2.12,ceda0de1:1.12,"1db8f2bd":1.54,a2e4559a:1.49,"2c2c888c":2.06,"7029fce6":1.52,"31a95a00":1.59,"86c3e522":.91,"19a614fc":2.69,fef2e559:1.49,"5bebefa0":2.19,b22269cd:1.93,77233167:2.59,cf0d0d20:2.59,a9f395b4:2.95,cfc3d13b:3,d01c4b45:2.72,"5112c4da":1.93,"5ecd5c48":2.27,11761833:3.24,"2369f858":3.21,"8b3df36d":3.21,"7f817723":2.09,"2c204776":2.04,aac9476d:2.53,b1312cfb:2.17,"2bdeb986":2.22,"856ca027":2.01,"00b0ec54":1.52,a7355a48:2.14,"7b762491":2.22,"06b7f4f2":2.01,"8a53f564":2.12,"0346f0b2":1.57,"617dc5a1":1.72,98949199:2.8,"6088d54e":2.3,"1065dd6a":2.32,b58defcc:2.74,"263a5248":2.22,"0ac9cfc1":2.35,"8e471266":2.3,"679ba220":2.61,dcbdd49b:1.41,"7e5ffd60":2.17,dfe9a5fc:2.66,e054c454:2.56,"3e2111a5":1.02,"0879385d":3.71,"6ea1f702":1.91,"6ffc8220":2.48,"8e565a02":3.16,"4ea29389":4.18,"28eacb5c":3.34,ef260489:2.43,"463dd1ba":2.06,c3599339:1.96,"93ed71f2":1.59,"0a1349d1":3.27,"4cf19f66":3.16,c649f060:1.46,"33ea705d":3.03,"61f3e025":2.51,ecd9e4cb:1.88,bf36e513:1.96,"56ba0f17":1.83,"49440bef":1.65,"1e6c8b3b":1.8,f2221e8d:1.65,e9da1e8a:2.06,f8957cc8:2.46,"34609c8b":3.74,"33049eb7":1.96,"2ffd4db7":3.03,"27a20b5f":1.78,"7c3565da":1.75,"65025ea1":.94,"124b494b":1.7,"43b80c94":2.48,"315a8cf9":2.46,"1d71a98e":1.62,c33c9d69:2.01,cd099165:1.93,"5659be72":1.57,"1c63385a":2.59,a4f1d0f4:2.35,"547190cc":1.52,"4e526d2c":2.82,"7090decb":2.53,fcaaa312:2.04,d2a00872:2.04,"2a70244d":2.43,"2c422eba":1.49,ac050b59:2.43,"5d7190b3":1.93,a1778166:2.32,"668907dc":1.85,"58e12ae6":1.57,"27f05fba":2.43,"435afe46":1.46,a66679d3:2.09,"02ed6e8b":1.62,f96135db:1.88,bc07772e:1.49,"7ae3e3a4":1.46,ccf72000:1.49,"9a742c5d":2.27,"31c1f18d":1.65,b108407c:2.3,b2d9b259:1.93,b60e2a1d:1.52,ac644264:1.65,aecba7f4:1.38,"45b65dfa":2.04,f0c67973:1.72,"41fceeef":2.17,"0eb9d182":1.46,"037691de":1.57,"45c61363":2.46,"93b88013":1.46,"152cb3ce":1.2,fb5f1fdc:2.19,"6f566299":1.96,"6921b562":2.4,"5caefd44":2.43,"2fabc4d4":1.44,c6040641:2.56,"8a444dc6":1.65,"44c0c6e0":2.25,"6d8bcefc":2.09,"5d818d1f":1.91,b6f18868:1.91,"4e633536":2.4,f7b893c4:2.19,"81cc32ec":1.52,e5ffeb2a:2.01,d65b2754:1.25,a5f63069:2.53,"165bf99a":2.17,"72cb6119":2.66,"1c95a95e":1.57,b8808559:2.51,"9a75b06f":1.72,"9de776c1":2.64,"2b725569":1.83,cc68611b:2.19,ff594ce3:1.72,b674e220:2.51,"800ac963":2.38,"408a448d":2.17,"1435f16d":2.01,"904eff96":2.19,ec9b18e3:2.12,"573c8400":2.9,d805d408:1.36,b067b19b:3.06,"3fa9f92b":1.78,"37c3b178":2.59,f4218a88:2.06,"45a92522":2.17,"50509a80":2.59,"96a47a11":2.95,"00065346":1.31,"56a535e3":2.3,e347eed7:2.32,"8bd93b57":1.91,d2a1931b:2.09,fe164e23:1.62,"2c094333":3.71,cb10693a:2.46,"750fe356":2.27,a988c0a5:1.8,"1585ed6f":1.49,af5926ce:1.38,cef26444:1.46,e6f0281c:1.44,"490b7dac":1.72,"75ce8b5c":2.09,f7fa7944:2.53,"0f31aae2":1.38,"2713c868":2.12,"5610c59e":1.85,"38ddfbdf":1.57,dadb48e1:1.57,"61c5d3d7":2.9,"53aaa14b":1.93,fa6092b9:1.54,"6c5123ca":1.85,"57ba3868":2.12,"37d46086":1.44,"1c5da9a0":1.57,"41cabfac":2.17,"1038773d":2.59,"28ea8366":1.72,ff45dade:2.51,d11e5b73:1.57,"577b03f2":3.55,"67f58811":1.78,"7f0d355b":2.56,f94bc015:1.91,a7f7069a:2.12,"1ab04244":2.56,"252d8545":1.91,"798308cc":1.65,a30b58c6:2.01,"3adc85ae":1.36,"577d614f":1.67,faf380d6:1.57,"06b446c6":1.85,af24a34d:2.27,"592a35d3":1.46,d91bf4c9:1.41,ec3c3479:1.88,d4d2f953:1.78,c555b985:1.59,af823c58:2.04,"8a12955e":2.09,c1db1e1f:1.83,"7b545cf9":2.17,ab9b069b:2.12,"1733c59d":2.17,ba62d9cb:1.88,"02564022":2.22,d7f2fc6c:1.72,"0cd98ca4":2.09,dd9ed86f:1.99,"5c844213":2.32,"4e91504b":1.67,b397c4d2:1.72,e438a869:1.93,"5e3f601b":1.8,"6b5aab47":1.8,"6e75d82f":2.09,d44d1fde:2.38,b05f7856:1.65,"4d022eea":1.57,"03bdb6a9":1.65,"3110b250":1.41,"2802678d":1.65,d208d575:1.67,"6ed251ae":1.54,"43bfd02e":1.75,"8267afd3":1.65,"75e04a24":3.45,"4286aaf9":2.66,"4600c0cc":2.19,c3d2eb9f:.97,"5747424d":2.25,a84f426b:1.12,"4da9c14d":2.25,c9b5bfbe:2.19,a3b0edb2:2.72,fe9c3eb1:3.03,"044220b0":1.96,d6d8d4c6:2.46,"4378fe14":2.9,"10edb954":2.43,ba4b8690:1.57,"10e2210c":1.8,"4a3bf5da":1.75,"58a57fdd":2.72,"86841e32":2.06,b72f42de:1.96,"31c5065a":1.67,fbbab691:1.54,a8205164:1.72,f7bbf505:1.85,"100c2087":1.41,b4d8c340:2.09,"8c1ece04":2.3,"5c46457b":2.74,e926fc4e:2.04,"594319d9":2.19,"69b3b1af":2.06,e23baee4:2.46,"52e3dcde":2.3,"2d770ac6":2.09,"3d8f731e":1.75,"804fb898":2.85,def8f56f:2.69,"6b06a913":2.01,"28b70443":3.27,"0c60d15f":2.46,f4f3cdf4:3.11,f8bdb337:2.48,"984f3309":3.32,"6303369f":3.06,"5b224776":2.06,"181f9ea3":2.9,c9f1ba80:2.74,"556a52a4":3.34,"3cd14e52":3.45,"4a6463a7":3.6,"3038837a":1.36,bd6f345a:1.8,de1d2839:1.62,d4426042:2.01,"441e325a":2.59,"3a3de773":2.27,"1696fae2":2.27,dde45a0b:2.61,"215fd7f5":1.91,"030833bf":2.87,"3fe9a369":2.06,"9feef521":2.09,"8f16aabe":3.16,"22b5cffd":3.06,"98d72ec1":3.66,93629251:2.74,"543c58b9":2.82,"5445dbad":2.48,"5c7afe5a":2.66,"6164ad2f":3.11,af2cf565:1.44,"77226f2f":3.08,dd23393b:5.3,"8625a031":2.95,"265c727f":4.18,e8f06100:3.79,d1bff524:3.13,f521b0e9:3.45,be43ed86:3.03,"30c88798":2.74,"726cdd50":1.72,"627c487c":1.88,"4a7c8949":3.19,"5d3eff76":2.22,"64414d74":2.85,f3393f1a:2.01,"20fce8ae":1.62,"44e411d8":2.17,"184483ee":2.09,c642d36e:3.42,"06670455":2.19,d44836ad:2.43,be6d36a0:2.17,"5fef074b":2.14,a9533c9e:1.78,"6aa45c6e":1.75,e4142ebd:2.56,"4c6936f7":3.92,"63fd479a":2.93,"89af21dd":2.17,"0cb8bb89":5.09,"625f94be":2.48,"9d91faa6":3.63,"52f16ab7":1.41,"47101efd":4.02,c40f2067:2.4,ee158a9c:1.85,"4ed29988":1.57,f6296167:2.43,ce2738af:4.55,f1e50b2a:2.53,"4d58bf56":1.41,ab703c22:2.35,"34247ee3":2.04,"71f88a63":2.87,"75a30aea":1.85,"7c97cf2a":3.47,c1ebd884:3.81,"406ccc3f":2.51,"2db2d7dd":2.04,"06e164d5":2.77,"3b43fb86":2.01,cfc7ba9c:2.64,"13f65d52":1.78,"9c4a2de3":1.85,ba5b202f:2.35,"3999dc17":2.17,e0f3fb82:1.65,"1d158f86":2.17,"0a4a3327":1.59,"27790e85":1.38,"8c20b719":1.93,"670b9cf6":1.52,a53b4e64:1.8,"33741a45":1.96,bb26b047:1.54,bcc5236a:1.33,"8115a503":1.8,d76d59be:1.36,"621acc64":1.23,d23da5b1:1.65,d9f086da:1.62,"9f6b2c74":2.51,dba81ee6:1.83,"7195eebc":2.27,"449e9d41":5.22,c3dac551:4.21,"276d268f":1.96,"5b23a8f6":2.3,d48c8bc9:2.35,e128eec1:2.04,a8f89d37:2.51,f252eecd:1.75,"55d666b9":1.46,"9a6cfa57":1.57,a2d1b706:2.77,"8a9aff57":1.52,"3e8535bd":1.38,a63ae87b:2.53,"1292dc65":2.74,cc7dbf8a:2.66,"093788a3":2.69,facacfdf:2.66,acaa873a:1.72,"6aed9d47":1.52,aec52100:1.7,"48b177f1":2.64,"7328b186":2.43,fd5dd70b:2.01,"8bb6d5af":1.78,c0f61284:1.7,a7d17ed4:1.57,66384710:2.95,"9e8f27fd":2.4,"77c372e1":2.9,"40611b47":3.45,b6e8c0a5:2.3,e0446ba8:1.8,"102c18a7":1.93,"33fe2846":1.93,"0c7fa18f":3.42,"2e300a37":3.34,d9778638:2.64,"8c9465fd":2.87,"29e80045":2.3,"434aa97d":2.35,"978fa57b":1.8,"7e9eeac4":2.01,c3e4870d:3.34,d9e4f040:2.01,db215719:2.17,"4b66f7d1":1.44,"64065fa8":1.93,d2ff63db:3.63,a74e7c0d:2.32,abab5d93:2.72,"4d3a680c":2.93,be597bf7:1.99,"3aaeee03":2.4,"3d3e3b3b":2.64,e770069e:2.77,"2c8c5c7a":3.13,e74046f3:3.08,"760cb6c7":3.08,"1d584abd":4.26,"1a7a5a94":1.96,"6e26417c":1.62,"7b2bc1b5":3.08,fae18448:1.49,e7e08b37:1.46,eb0db470:1.38,"248f29f2":1.54,"1be3e462":1.54,"42f549ac":1.54,d4b28198:1.44,"5980cf41":1.62,d3a31ed7:1.36,ec86ba9f:1.49,"3c1f3715":1.44,dffbc460:2.04,eda3c356:1.46,"558e0e91":2.04,"767ff507":1.44,"281a45bd":1.46,e1c9154c:1.41,"8c4e59fa":1.54,"1ab045b5":1.59,b464a699:1.38,d8b11c93:1.38,"53491a43":1.28,fe3c445c:1.52,"0336aa85":1.52,e9acb959:1.46,cd2b4a1c:1.44,"6514f5e2":1.44,a762a8fd:1.28,"5ecaa89b":1.49,"7c4fbb51":1.54,"48ead6fa":1.41,d849a108:1.36,a153a8c3:1.65,dbadc217:1.49,"3c1ccb47":1.83,a457ec5a:2.43,"9b4e5e92":2.82,fc9b12d9:2.53,"7fcf1308":2.17,f7f9b764:2.09,"979aab8f":1.52,f4f455a9:2.51,"975cc94e":2.22,"1f6306f9":2.77,"546714a2":2.69,"793eef7d":2.06,"75795b67":1.65,"7baebd0e":2.04,c11bea34:1.49,"16797bae":3.11,52850399:1.54,"65a90e30":2.8,"3165e404":2.14,"766c9aed":2.17,"746e0bfe":1.83,"019855b2":1.46,c442b701:1.38,"9b381c93":2.46,c84117d4:2.17,"05542701":2.46,"7338ae41":2.22,f379edc7:1.85,"0cf72ee8":2.06,"66a7053e":1.96,fc9a5810:3.45,ea65e283:1.28,"6804728d":1.38,"26dded40":1.99,"268048b8":3.08,"24b322bf":1.78,"0231b1b1":1.54,"4bb131d7":1.75,cc207725:1.36,a976d36e:1.57,"4abb11e7":1.31,e60897fb:1.44,fc5f7a27:1.25,"7b68ddc5":2.14,c941085b:1.62,"72c3e1f1":1.65,cd1692a3:2.3,d5672273:1.85,"5fad600f":2.27,"1eca6350":1.54,"057bc6fd":1.54,d137b753:1.85,"542aa60f":1.36,e3548aa2:2.35,"375c6f89":1.2,"1a9390b6":1.57,"4c3f9d71":3.03,"7300a3f3":2.74,bda6c356:2.53,"7982b1da":1.93,e200dd71:2.14,"0222ce0f":2.82,"8638c944":2.95,"90364d08":1.38,f26c9eb3:1.28,"5f2f3e5b":1.83,"4d362cb1":1.83,d3b6dae6:1.8,"753f6f7a":2.51,d31676fb:1.54,"7278925e":1.75,"1d76c131":1.88,"390a28c5":1.91,"7a69c628":1.36,"1d23b7ce":2.32,"4a5fb0cc":1.72,cd6dc79d:1.07,"92442b9b":1.52,a6dc4c8c:1.72,d5699f61:2.82,"05b0cf3d":1.49,"1ad0eb61":1.96,c5ab8a50:1.62,"10ddab46":3.6,"688f8d9a":2.09,"614bf9b7":2.59,dde8a270:1.8,b10d541e:1.88,"10d9179e":2.77,a15c7f9d:1.93,d5693ea1:2.22,c025d2e8:1.7,"0eda981a":2.27,"46c959f9":2.35,e6897c2b:3,cd395baa:2.12,"0b984316":3.55,d68b0f2b:2.85,"026329e8":2.64,a3dc25e2:2.06,"4ca84cf5":2.8,"060849fb":1.62,b14ae733:2.69,"22fc275b":1.85,"494cabf5":1.78,e717a42c:1.88,d4f4bff5:1.2,"7d227edb":1.85,"0462901e":2.69,ebf7a055:1.44,fc0da0d3:1.96,71364997:2.77,"089b31b5":1.83,fdc3aed0:1.65,"2a1557e2":2.38,"23be52e8":1.57,dc5599be:1.75,fc5ddd78:1.72,f00a4d86:2.01,a382fbc9:2.8,"7de92f30":1.96,a18f1f4d:2.14,"84d3ae66":1.57,cacd73ff:1.72,"7369b04d":2.27,"87bd8761":2.35,"664ed57a":2.93,"12e10dfb":1.93,"93a537de":2.46,"0d6ea107":2.38,f9992138:2.27,eadf4e5b:1.52,"91be183c":1.78,"4691065f":1.7,d6ae77ab:1.78,d754b359:3.42,"3b050827":2.09,e332e1df:2.12,"379f580e":2.17,"9866d0d5":2.14,"48e2a197":1.78,bed045f4:1.57,c06a9bd5:1.72,"60f4eb37":1.75,"8cb4198f":1.72,76530996:2.04,"3fff3420":2.17,"885a8832":2.32,fff69043:1.65,"2d210f78":2.69,"216f072f":2.12,c46558f3:2.3,e9ce1be8:2.01,"721605ac":2.93,f3e7b8b6:1.67,f046cfe2:2.04,c18fead4:2.64,"73b13074":2.25,c6d4e9eb:2.3,"0d6faf12":3.08,da525950:1.75,edb95812:2.12,"9b019970":1.57,"891e39a3":1.72,dd8e7b4c:1.83,"882313a9":1.96,"857f981e":2.01,d74a582c:1.85,96389502:2.38,f0593886:2.27,b41d4db0:2.53,"02b2a2d4":1.91,40844467:1.36,"4b043cbb":1.36,"09f02d94":1.59,"1c92e5ec":2.09,"2d6229aa":1.93,afcf940b:2.22,a7e1b44f:3,93434360:1.59,"143c5419":1.88,"982b0bdc":2.66,"61c392bc":2.19,"2c52ae64":1.7,"41d4bd55":2.38,"76034fcc":2.22,"0c8f336a":2.35,"0a0b23ec":2.8,cee74d3a:2.72,"0c201559":1.36,e92b02e0:1.88,"8ba9235a":1.65,"82aaabd3":2.66,dd9673b6:1.88,"9723e1d0":3.76,"7bbf9ca7":2.9,b12cbdb4:2.64,"4ec58ce0":2.46,caa936ff:1.75,"34067a65":1.85,d26af9f0:2.3,edbcea98:2.01,"2639c849":2.09,"8fd4be08":2.43,"6ddb4983":3.11,aaed55f8:2.09,a4ab1322:1.93,bea9e7c3:2.66,eb4830af:2.04,defac819:2.72,debba6f2:2.38,"3e434bd1":2.9,"72bed8f9":2.93,"8bd34428":2.48,"3ab45246":2.61,a74639fd:2.43,"4dc31f2f":1.85,f4bbe7cc:1.88,"60a052ec":2.46,"3069795b":2.51,"71ca7302":3.24,"19421e37":3.27,a5f87ec0:2.19,"6b350d8a":2.66,a31b6fc5:2.22,"78511a14":2.66,"7147173b":2.72,"9c00b146":2.51,"6012826c":2.09,"1ddd554c":2.17,b442c5b5:2.51,a4510bf2:2.17,b1298ce9:3.68,a2498dd5:3.19,"107ef94e":2.53,"7a626de8":2.19,fde7ba60:3.06,cab17e87:2.93,"84c4f1be":2.87,b696cbd4:2.12,"3deaa354":2.17,"83d42f3c":2.09,a2d448aa:2.35,db597a35:2.04,"6e13a957":2.09,"1eda03c1":1.75,e289ad1b:2.09,"58e0913f":2.9,"35ea66db":2.56,da51a962:3.27,adeb4776:2.12,"3d2781f1":2.19,"3de0a91e":2.25,"986559a8":2.74,"7c33a1b6":1.72,"98f60186":2.17,"1e6e2311":2.04,"4987cc9a":2.66,"69a23cad":2.09,be9f1176:1.99,"85f2b589":2.3,"2d238c02":1.83,"6a46fbc9":2.17,c43c387a:3.32,"8e988fcf":3.63,"4e676681":2.14,"3667d7ae":2.61,bc8b7271:2.53,"9b58bc31":2.53,"9b190c08":2.01,"994c34f9":1.8,"304b4e83":1.75,"2ae0926f":2.51,"355b26f5":2.64,"7a8ec248":2.82,"3e1a1093":2.25,f4258cb8:1.91,"844a474e":2.77,"706eb2ec":2.09,e626ef28:2.01,d608e154:2.01,a1e8316f:2.04,"9809e7c5":2.17,"59f3a3ea":2.87,"8fb9efd2":2.14,86442391:1.7,e21a6590:1.65,cd096837:2.27,a64c6c6b:2.17,"756a8fd7":1.99,d1d772a1:2.53,d9c4c457:2.38,"391140d7":2.25,"228f7c86":2.82,a4c475ed:2.35,ac907da2:2.32,"8ba10d53":1.88,"70008cdc":2.56,e3c1f56a:2.56,e8bcb11a:2.9,da256140:2.19,c7b61204:2.22,"550d7455":2.01,"1837d607":1.72,abd3cec6:2.93,"8b725f64":2.12,bee82b6c:3.94,"1240184c":2.51,"83a0bf66":2.35,e27f0f41:2.04,f43e45b8:2.01,"088690d4":3.66,"0c2e0dd2":2.61,eb63dda1:2.01,ac26beba:2.04,"07d77115":2.38,"6266c15e":2.93,"15313a36":3.76,"702c33f7":1.85,"14942aa4":1.85,"5ef5c229":2.09,dae7f68a:3.03,"88fbcd58":2.01,f689cc6f:2.72,"2e781156":2.82,11608720:4.86,"48bd78fd":3.42,"57daf5b0":2.61,c036ec28:2.8,"7f6334a1":3.89,"594720a2":3.94,"4840cf5c":2.53,"8bcb26d1":1.91,78343290:2.95,"1abd137a":1.85,dc2158b3:2.01,"821ebec6":2.56,b9a1fb23:3.55,"304e84e4":3.5,"7fcb7691":1.8,"622ceb6c":3.32,"88a1630e":3.66,e22256b3:2.59,18144191:2.69,"56abf5f9":2.66,"6a8591d2":2.51,"33c469c7":2.19,"457656de":3.29,"09c340e6":2.56};var wh="1.1",Ze=n=>document.getElementById(n),Dt=n=>n[Math.floor(Math.random()*n.length)],Mn=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.random()*(e+1)|0;[n[e],n[t]]=[n[t],n[e]]}return n},Ie=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),su=!!window.AndroidKb||/; wv\)/.test(navigator.userAgent),oo=n=>`gfx/${n}.png`,me=Object.assign({music:!0,musicVol:.5,sfx:!0,sfxVol:.8,publico:!0,publicoVol:.7,gradas:!0,voz:!0,vozCaz:!0,lee:!0,leeVel:"normal",chistes:!0,monologo:!0,quality:"media",era:"e2020",cabecera:"cab3d",apertura:!0,publicidad:!0,copro:!0,presSorpresa:!1,especial:"normal",plato:"es",sonidosClasico:!1,misPreguntas:!0,cazador:"azar",respuestas:"escribir",juegas:"solo",acelerar:!1},JSON.parse(localStorage.getItem("cz_opts")||"{}")),ai=()=>localStorage.setItem("cz_opts",JSON.stringify(me)),Q={ctx:new(window.AudioContext||window.webkitAudioContext),mus:null,sueltos:new Set,tono(n,e,t="sine",i=.2,a=0){if(!me.sfx)return;let s=this.ctx,o=s.createOscillator(),r=s.createGain();o.type=t,o.frequency.value=n,r.gain.setValueAtTime(0,s.currentTime+a),r.gain.linearRampToValueAtTime(i*me.sfxVol,s.currentTime+a+.02),r.gain.exponentialRampToValueAtTime(.001,s.currentTime+a+e),o.connect(r).connect(s.destination),o.start(s.currentTime+a),o.stop(s.currentTime+a+e+.05)},url(n){let e=Qt.cache["snd:"+n];if(e)return(this._u=this._u||{})[n]||(this._u[n]=URL.createObjectURL(e));let t=ws.find(i=>i[0]===n);return me.sonidosClasico&&t?"snd/"+t[2]+".mp3":null},snd(n,{loop:e=!1,tag:t="sfx",vol:i=1}={}){if(t==="sfx"?!me.sfx:!me.music)return null;let a=this.url(n);if(!a)return null;let s=new Audio(a);return s.loop=e,s.volume=Math.min(1,i*(t==="sfx"?me.sfxVol:me.musicVol)),s.play().catch(()=>{}),t==="sfx"&&(this.sueltos.add(s),s.onended=()=>this.sueltos.delete(s)),s},play(n){let e={Bien:"respFinalC",Mal:"extra",Elige:"eligeC",Golpe:"corto",Fanfarria:"ganaEquipo",Cazado:"cazado",Casa:"casa",AvanzaC:"avanzaC",AvanzaZ:"avanzaZ",RevelaC:"revelaC",RevelaZ:"revelaZ",EligeZ:"eligeZ",Reloj:"reloj",Para:"paraReloj",FinTiempo:"finTiempo",Oferta:"ofertas",Whoosh:"haciaAcum",BienZ:"respFinalZ",Cuenta5:"cuenta5"}[n];e&&this.snd(e)||(n==="Tecla"?this.tono(880,.08,"triangle",.15):n==="Bien"||n==="Casa"||n==="AvanzaC"?[523,659,784].forEach((t,i)=>this.tono(t,.4,"triangle",.22,i*.08)):n==="Mal"||n==="Cazado"?[300,220,160].forEach((t,i)=>this.tono(t,.6,"sawtooth",.12,i*.18)):n==="AvanzaZ"||n==="BienZ"?[220,180].forEach((t,i)=>this.tono(t,.3,"square",.1,i*.1)):n==="Golpe"||n==="Whoosh"?(this.tono(55,1.2,"sine",.5),this.tono(110,.8,"triangle",.2)):n==="Fanfarria"?[392,523,659,784,1047].forEach((t,i)=>this.tono(t,.5,"square",.1,i*.14)):this.tono(440,.2,"sine",.15))},stopAll(){this.stopMusic(),this.sueltos.forEach(n=>n.pause()),this.sueltos.clear()},playMusic(n="menu"){if(this.stopMusic(),!me.music)return;let e={menu:"tema",cabecera:"cabecera",despedida:"cabecera",conoce:"conoce",entrada:"entrada",acumulacion:"acumulacion",tablero:"tablero",final:"final",tension:"tablero"}[n]||"tema";if(n==="cabecera"||n==="despedida"){let l=Qt.cache.cabecera_propia;if(l){let c=new Audio(URL.createObjectURL(l));c.volume=me.musicVol,c.play().catch(()=>{}),this.mus={a:c};return}}let t=this.snd(e,{loop:!["cabecera","despedida","entrada","final","acumulacion"].includes(n),tag:"music",vol:.8});if(t){this.mus={a:t};return}let i=this.ctx,a=i.createGain();a.gain.value=1e-4,a.connect(i.destination),a.gain.linearRampToValueAtTime(.07*me.musicVol,i.currentTime+2);let o=(n==="tablero"||n==="final"?[55,82.4,110,116.5]:[73.4,110,146.8,174.6]).map((l,c)=>{let u=i.createOscillator(),d=i.createOscillator(),h=i.createGain();u.type=c%2?"sawtooth":"sine",u.frequency.value=l,d.frequency.value=.1+c*.07,h.gain.value=l*.006,d.connect(h).connect(u.frequency);let p=i.createBiquadFilter();return p.type="lowpass",p.frequency.value=700,u.connect(p).connect(a),u.start(),d.start(),[u,d]}),r=null;n!=="menu"&&(r=setInterval(()=>this.tono(49,.25,"sine",.25),700)),this.mus={g:a,os:o,pulso:r}},stopMusic(){let n=this.mus;if(n){if(this.mus=null,n.a){n.a.pause();return}clearInterval(n.pulso);try{n.g.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.4),n.os.forEach(([e,t])=>{e.stop(this.ctx.currentTime+.5),t.stop(this.ctx.currentTime+.5)})}catch{}}},aplauso(n=2){if(!me.sfx||!me.publico)return;let e=this.ctx,t=e.sampleRate*n,i=e.createBuffer(1,t,e.sampleRate),a=i.getChannelData(0);for(let l=0;l<t;l++)a[l]=(Math.random()*2-1)*(Math.random()<.3?1:.2)*Math.min(1,(t-l)/(e.sampleRate*.6));let s=e.createBufferSource(),o=e.createGain(),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=2e3,o.gain.value=.35*me.publicoVol,s.buffer=i,s.connect(r).connect(o).connect(e.destination),s.start()},oooh(){!me.sfx||!me.publico||[0,.1,.2].forEach(n=>this.tono(180+Math.random()*40,1.4,"sine",.12*me.publicoVol,n))}},Eb=n=>{n=n.normalize("NFC").trim();let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")},Ji=null;function po(n,e="pres"){return new Promise(t=>{let i=ee&&ee.figuras[e];i&&(i.userData.habla=!0);let a=()=>{i&&(i.userData.habla=!1),t()},s=n.replace(/[«»]/g,""),o=Eb(s),r=bh[o],l=Math.max(1400,n.length*(me.leeVel==="rapida"?42:58)),c=It.some(u=>u.id===e);if(!me.voz||c&&!me.vozCaz||/^\(/.test(n))return setTimeout(a,l);if(r){Ji=new Audio("voz/"+o+".mp3"),Ji.playbackRate=me.leeVel==="rapida"?1.15:1,Ji.onended=a,Ji.onerror=()=>setTimeout(a,l),Ji.play().catch(()=>setTimeout(a,l));return}setTimeout(a,l)})}var ru=()=>{Ji&&Ji.pause(),window.speechSynthesis&&speechSynthesis.cancel()},Ue={bocadillo(n,e){let t=Ze("bubble");if(!e)return t.classList.add("hidden");t.querySelector("b").textContent=n==="pres"?en.presentador:(kn[n]||kn.pres).nombre,t.querySelector("span").textContent=e,t.classList.remove("hidden"),t.style.left="36%",t.style.top="8%",t.style.transform="translateX(-50%)"},toast(n,e=1800){let t=Ze("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(this._t),this._t=setTimeout(()=>t.classList.add("hidden"),e)},rotulo(n,e=""){let t=Ze("lower3");if(!n)return t.classList.add("hidden");t.innerHTML=`<div><b>${Ie(n)}</b>${e?`<br><small>${Ie(e)}</small>`:""}</div>`,t.classList.remove("hidden")},actions(n){let e=Ze("actions");e.innerHTML="";for(let t of n||[]){let i=document.createElement("button");i.className="btn "+(t.cls||""),i.textContent=t.label,i.onclick=a=>{a.stopPropagation(),Q.play("Tecla"),t.fn()},e.appendChild(i)}},limpia(){this.bocadillo(),this.rotulo(),this.actions([]),Ze("mq").innerHTML="",Ze("hint").classList.add("hidden")}};async function Va(n,e=!1){let t=document.createElement("div");t.className="swoosh"+(e?" roja":""),Ze("mq").appendChild(t),Q.play("Whoosh");for(let i=0;i<26;i++)t.style.setProperty("--sw",`url(${new URL(oo("anim_swoosh"+String(i).padStart(2,"0")),document.baseURI).href})`),await n.espera(28);t.remove()}var ee=null,Ai=null,Sb="title",Ps=class extends Error{},wb=()=>{Ai&&(Ai.alive=!1),ru();let n={alive:!0};return n.espera=e=>new Promise((t,i)=>setTimeout(()=>n.alive?t():i(new Ps),e)),n.ok=()=>{if(!n.alive)throw new Ps},Ai=n,n};async function We(n,e,t,i){n.ok(),i&&ee.plano(i),Ue.bocadillo(e,t),await po(t,e),n.ok(),await n.espera(220)}var Tb=["pili","chema","marga","ramon","encarna"],si=It[0];function Ns(n){for(let e of Object.keys(ee.figuras))ee.figuras[e].visible=!1;ee.ponEn("pres","atril");for(let e=0;e<4;e++)ee.ponEn("c"+e,"mesa",e);n&&(si=n,ee.ponEn(n.id,"cazador")),ee.tono("azul")}function mo(n){let e=n&&It.find(t=>t.id===n)?n:me.cazador;return It.find(t=>t.id===e)||Dt(It)}function ut(n,e){Ze("menu").classList.add("hidden"),Ze("topbar").classList.remove("hidden"),Ue.limpia(),qa=!1,Q.stopMusic();let t=wb(),i={clasico:Ab,programa:Kc,stars:Kc,entrenamiento:Db,cazafinal:Nb,noche:Ub,explorar:Eh,paseo:Eh,monologos:Ob,oculta:eu,tomas:eu,fuera:eu,promos:tu,promosleo:tu,promocadena:tu,publicidad:Bb,historia:kb,cazadores:zb};Ns(mo(n==="cazadores"?e:null)),ee.pintaTablero({cazador:-1,conc:-1,textos:{}}),(i[n]||Kc)(t,n,e).catch(a=>{a instanceof Ps||console.error(a)})}async function Ab(n){let e=Ze("c3d");e.style.visibility="hidden";let t=document.createElement("div");t.id="clasico",t.className="clasico",Ze("mq").appendChild(t);let i=()=>{e.style.visibility=""},a=setInterval(()=>{n.alive||(i(),clearInterval(a),t.remove())},300),s=d=>(t.innerHTML=d,t),o=d=>{t.className="clasico "+d},r=d=>new Promise(h=>{d.forEach((p,g)=>p.onclick=v=>{v.stopPropagation(),Q.play("Tecla"),h(g)})}),l=Ri(),c=Ln[me.era]||Ln.e2020,u=null;try{o("cl-portada"),Q.playMusic("cabecera"),await Va(n),s(`<div class="cltit">EL CAZADOR</div><div class="clsub">CLÁSICO</div><div class="clcaz">${It.map((G,O)=>`<button class="tcans" data-i="${O}"><b>${Ie(G.apodo)}</b> ${Ie(G.nombre)}</button>`).join("")}</div>`);let d=await r([...t.querySelectorAll(".clcaz button")]),h=It[d];n.ok(),o("cl-caz"),Q.playMusic("entrada"),s(`<div class="tcname caz"><b>${Ie(h.apodo)}</b><small>${Ie(h.nombre)} · Fuerte en ${Ie(h.fuerte)}</small></div>`),Ue.bocadillo(h.id,h.frases.intro),await po(h.frases.intro,h.id),n.ok(),Ue.bocadillo(),await n.espera(600),await Va(n),o("cl-cb"),Q.play("Oferta"),Q.playMusic("acumulacion");let p=60,g=0,v=performance.now();s(`<div class="cbzona"><div class="cbcab"><div class="cbname">${Ie(l)}</div><div class="cbtimer"><span class="t">1:00</span><span class="d">0 €</span></div></div><div class="cbq"></div><div class="cbr"></div></div>`);let m=setInterval(()=>{p=Math.max(0,60-(performance.now()-v)/1e3);let G=t.querySelector(".cbtimer .t");G&&(G.textContent=`0:${String(Math.ceil(p)).padStart(2,"0")}`)},200);for(;p>0&&n.alive;){let G=Ga(),O=Mn([G[1],G[2],G[3]]);t.querySelector(".cbq").textContent=G[0];let se=t.querySelector(".cbr");se.innerHTML=O.map(Xe=>`<button class="cbans">${Ie(Xe)}</button>`).join("");let he=[...se.children],ve=await Promise.race([r(he),new Promise(Xe=>{let Z=setInterval(()=>{(p<=0||!n.alive)&&(clearInterval(Z),Xe(-1))},150)})]);if(ve<0)break;let Ce=O[ve]===G[1];he[ve].classList.add(Ce?"ok":"ko"),Ce||he[O.indexOf(G[1])].classList.add("ok"),Q.play(Ce?"Bien":"Mal"),Ce&&g++,t.querySelector(".cbtimer .d").textContent=lt(g*c.porAcierto),await n.espera(450)}clearInterval(m),n.ok(),Q.stopMusic(),Q.play("FinTiempo");let f=Math.max(c.porAcierto,g*c.porAcierto);await n.espera(1200),await Va(n,!0),o("cl-tab"),Q.playMusic("tablero"),s(`<div class="clmsg">${Ie(h.apodo)} te hace sus ofertas</div>`);let S=Ch(c,f);Ls({cazador:-1,conc:-1,ofertas:S.map(G=>({fila:Kt-G.pasos,txt:lt(G.valor)}))}),Q.play("Oferta");let y=Ze("tabla");y.classList.add("clcentro");let b=S.map(G=>y.querySelector(`.fila[data-f="${Kt-G.pasos}"]`)),R=await r(b),w=S[R];n.ok(),Q.play("Elige"),y.classList.remove("clcentro");let C=Kt-w.pasos,I=-1,_=()=>Ls({cazador:I,conc:C,etiqueta:lt(w.valor)});for(_(),await n.espera(900);C<Kt&&I<C&&n.alive;){let G=Ga(),O=Mn([G[1],G[2],G[3]]);Q.playMusic("tension"),o("cl-tc"),s(`<div class="tczona"><div class="tcq">${Ie(G[0])}</div><div class="tcr">${O.map((be,de)=>`<button class="tcans"><b>${"ABC"[de]}</b>${Ie(be)}</button>`).join("")}</div></div><div class="cltimer"></div>`);let se=[...t.querySelectorAll(".tcans")],he=15,ve=setInterval(()=>{he--;let be=t.querySelector(".cltimer");be&&(be.textContent=he)},1e3),Ce=await Promise.race([r(se),new Promise(be=>setTimeout(()=>be(-1),15e3))]);clearInterval(ve),n.ok(),Q.stopMusic(),Ce>=0&&se[Ce].classList.add("sel","marcaC");let Xe=Math.random()<h.nivel,Z=Xe?O.indexOf(G[1]):O.findIndex(be=>be!==G[1]);await n.espera(700),Q.play("EligeZ"),se[Z].classList.add("marcaZ"),await n.espera(900),Q.play("RevelaC");let re=Ce>=0&&O[Ce]===G[1];se[O.indexOf(G[1])].classList.add("ok"),Ce>=0&&!re&&se[Ce].classList.add("ko"),await n.espera(900),re&&(C++,Q.play("AvanzaC")),_(),await n.espera(700),Q.play("RevelaZ"),Xe&&(I++,Q.play("AvanzaZ"),_()),await n.espera(900)}n.ok();let x=C>=Kt;if(Q.play(x?"Casa":"Cazado"),y.remove(),o(x?"cl-win":"cl-lose"),s(`<div class="yowin">${x?"¡A CASA!":"¡CAZADO!"}</div><div class="clmsg">${x?`Llevas ${lt(w.valor)} a la caza final`:Ie(h.frases.caza)}</div>`),await n.espera(2600),!x){s(`<div class="yowin">HAS PERDIDO</div><div class="clmsg">${Ie(h.apodo)} se queda el dinero.</div><div class="clbtns"><button class="cbans">Otra vez</button><button class="cbans">Menú</button></div>`),u=await r([...t.querySelectorAll(".clbtns button")]);return}await Va(n),o("cl-fc"),Q.play("Reloj"),Q.playMusic("final");let A=1,B=120,z={t:B,equipo:A,cazador:0,fase:1,bote:w.valor};s('<div class="fczona"><div class="tcq"></div><div class="cbr"></div></div>'),_n(z);let q=performance.now();for(;n.alive&&(z.t=Math.max(0,B-(performance.now()-q)/1e3),!(z.t<=0));){let G=Ga(),O=Mn([G[1],G[2],G[3]]);t.querySelector(".tcq").textContent=G[0];let se=t.querySelector(".cbr");se.innerHTML=O.map(ve=>`<button class="cbans">${Ie(ve)}</button>`).join("");let he=await Promise.race([r([...se.children]),new Promise(ve=>{let Ce=setInterval(()=>{z.t=Math.max(0,B-(performance.now()-q)/1e3),_n(z),(z.t<=0||!n.alive)&&(clearInterval(Ce),ve(-1))},250)})]);if(he<0)break;O[he]===G[1]?(z.equipo=++A,Q.play("Bien")):Q.play("Mal"),_n(z)}n.ok(),Q.stopMusic(),Q.play("FinTiempo"),await n.espera(1500),z.fase=2,z.t=120,z.cazador=0,_n(z),Q.play("Reloj"),Q.playMusic("final");let Y=120;for(t.querySelector(".tcq").textContent=`${h.apodo} tiene que alcanzar ${A} pasos.`,t.querySelector(".cbr").innerHTML="";Y>0&&z.cazador<A&&n.alive;){let G=h.rapidez+Math.random()*2;if(await n.espera(Math.min(G,Y)*250),Y-=G,z.t=Math.max(0,Y),Y<=0)break;if(Math.random()<h.nivel){z.cazador++,Q.play("AvanzaZ"),_n(z);continue}Q.play("Para");let O=Ga(),se=Mn([O[1],O[2],O[3]]);t.querySelector(".tcq").textContent=`¡Falla ${h.apodo}! Contraataque: ${O[0]}`;let he=t.querySelector(".cbr");he.innerHTML=se.map(Ce=>`<button class="cbans">${Ie(Ce)}</button>`).join("");let ve=await Promise.race([r([...he.children]),new Promise(Ce=>setTimeout(()=>Ce(-1),6e3))]);ve>=0&&se[ve]===O[1]&&z.cazador>0&&(z.cazador--,Q.play("Bien")),he.innerHTML="",t.querySelector(".tcq").textContent=`${h.apodo} sigue…`,_n(z),Q.play("Reloj")}n.ok(),Q.stopMusic(),Ze("fcbox")?.remove();let F=z.cazador<A;Q.play(F?"Fanfarria":"Cazado"),o(F?"cl-win":"cl-lose"),s(`<div class="yowin">${F?"¡HAS GANADO!":"¡TE HA CAZADO!"}</div><div class="clmsg">${F?`Te llevas ${lt(w.valor)}`:Ie(h.frases.gana||h.frases.caza)} · ${A} pasos contra ${z.cazador}</div><div class="clbtns"><button class="cbans">Otra vez</button><button class="cbans">Menú</button></div>`),u=await r([...t.querySelectorAll(".clbtns button")])}finally{clearInterval(a),i(),t.remove(),Ze("tabla")?.remove(),Ze("fcbox")?.remove(),u!=null&&(u?$e("main"):ut("clasico"))}}var en=Object.assign({nombre:"Iker",profesion:"",ciudad:"",presentador:eo},JSON.parse(localStorage.getItem("cz_cons")||"{}")),Cb=()=>localStorage.setItem("cz_cons",JSON.stringify(en)),Ri=()=>en.nombre||"Iker",lt=n=>(n<0?"-":"")+String(Math.abs(Math.round(n))).replace(/\B(?=(\d{3})+(?!\d))/g,".")+" €",ou=()=>JSON.parse(localStorage.getItem("cz_mispreg")||"[]"),Rs=[],Jc=[],Ga=()=>(Rs.length||(Rs=Mn(Zc.concat(me.misPreguntas?ou().map(n=>[n.q,n.c,n.inc[0],n.inc[1]]):[]))),Rs.pop()),lo=()=>(Jc.length||(Jc=Mn(gh)),Jc.pop()),xh=n=>String(n).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9ñ ]/g," ").replace(/\b(el|la|los|las|un|una|de|del|en)\b/g," ").replace(/\s+/g," ").trim(),Rb=(n,e)=>{let t=Array.from({length:n.length+1},(i,a)=>[a]);for(let i=1;i<=e.length;i++)t[0][i]=i;for(let i=1;i<=n.length;i++)for(let a=1;a<=e.length;a++)t[i][a]=Math.min(t[i-1][a]+1,t[i][a-1]+1,t[i-1][a-1]+(n[i-1]===e[a-1]?0:1));return t[n.length][e.length]},yh={cero:0,uno:1,una:1,dos:2,tres:3,cuatro:4,cinco:5,seis:6,siete:7,ocho:8,nueve:9,diez:10,once:11,doce:12,trece:13,catorce:14,quince:15,veinte:20,cien:100};function co(n,e){let t=xh(n);if(!t)return!1;for(let i of[e[1],...e[2]||[]]){let a=xh(i);if(!a)continue;let s=yh[t]??t,o=yh[a]??a;if(String(s)===String(o)||t===a||a.length>4&&Rb(t,a)<=Math.floor(a.length/5))return!0;let r=a.split(" ").pop();if(a.includes(" ")&&r.length>3&&t===r)return!0}return!1}function Is(n,{ph:e="Escribe tu respuesta",ok:t="OK",paso:i="Paso",tipo:a="text",cond:s=()=>!0,s:o}){return new Promise(r=>{n.innerHTML=`<input class="cbin" type="${a}" placeholder="${e}" autocomplete="off"><button class="cbans ok2">${t}</button>${i?`<button class="cbans pasa">${i}</button>`:""}`;let l=n.querySelector("input");l.focus();let c=!1,u=h=>{c||(c=!0,clearInterval(d),r(h))};l.addEventListener("keydown",h=>{h.stopPropagation(),h.key==="Enter"&&u({txt:l.value})}),l.addEventListener("pointerup",h=>h.stopPropagation()),n.querySelector(".ok2").onclick=h=>{h.stopPropagation(),u({txt:l.value})},i&&(n.querySelector(".pasa").onclick=h=>{h.stopPropagation(),u({paso:!0})});let d=setInterval(()=>{(!s()||o&&!o.alive)&&u(null)},120)})}async function Pb(n){let e=Qt.cache.video_cabecera;if(!e)return!1;let t=document.createElement("video");return t.src=URL.createObjectURL(e),t.style.cssText="position:fixed;inset:0;width:100%;height:100%;object-fit:contain;background:#000;z-index:60",t.playsInline=!0,document.body.appendChild(t),await new Promise(i=>{t.onended=i,t.onerror=i,t.onclick=i,t.play().catch(i);let a=setInterval(()=>{(!n.alive||n.saltar)&&(clearInterval(a),i())},100)}),t.remove(),!0}async function lu(n){Q.playMusic("cabecera"),n.saltar=!1;let e=async a=>{let s=performance.now();for(;performance.now()-s<a&&!n.saltar;)await n.espera(80)};if(me.cabecera==="video"&&await Pb(n)){Q.stopMusic();return}if(me.cabecera==="plato3d"){ee.orbita(14,4),Ue.rotulo("EL CAZADOR"),await e(6e3),Ue.rotulo();return}ee.plano("cenital",.1),Q.play("Golpe"),Ue.rotulo("EL CAZADOR"),await e(1200),ee.plano("tablero",2.5),ee.tono("rosa"),await e(2200),ee.plano("cazador",2),ee.tono("azul"),await e(2e3);let t=Ze("mq"),i=fo(500);i.className="cablogo",t.appendChild(i),Q.play("Golpe"),await e(2200),i.remove(),ee.plano("wide",2.5),await e(2400),Ue.rotulo()}async function Th(n,e,t,i,a){let s=e.userData;s.anda=!0,e.visible=!0;let o=performance.now();for(e.rotation.y=Math.atan2(i[0]-t[0],i[2]-t[2]);;){n.ok();let r=Math.min(1,(performance.now()-o)/1e3/a);if(e.position.set(t[0]+(i[0]-t[0])*r,t[1]+(i[1]-t[1])*r,t[2]+(i[2]-t[2])*r),r>=1)break;await new Promise(l=>requestAnimationFrame(l))}s.anda=!1}async function Ah(n){ee.plano("grada",1),Q.aplauso(3),await We(n,"pres",Si.apertura[0]);let e=ee.figuras.pres,t=ee.PUESTOS.atril;ee.plano("wide",1.5),await Th(n,e,[-12,.3,6],[t[0],.3,t[2]],3),e.rotation.y=t[3],e.userData.gesto=1.2,Q.aplauso(2),await We(n,"pres",Si.apertura[1],"pres2")}function cu(n){let e=document.createElement("div");e.className="tcname caz",e.id="rotCaz",e.innerHTML=`<b>${Ie(n.apodo.toUpperCase())}</b><small>${Ie(n.nombre)} · ${Ie(n.fuerte)}</small>`,Ze("mq").appendChild(e)}var uu=()=>Ze("rotCaz")?.remove();async function du(n,e){await We(n,"pres",sn.cazadorEntra,"pres"),Q.playMusic("entrada"),ee.tono("rosa");let t=ee.figuras[e.id],i=ee.PUESTOS.cazador;ee.plano("cazador",1.6),await Th(n,t,[i[0]+2,i[1],i[2]-2],[i[0],i[1],i[2]],2.2),t.rotation.y=i[3],t.userData.gesto=1.5,cu(e),Q.aplauso(2),await We(n,e.id,e.frases.intro,"cazador"),uu(),ee.tono("azul"),Q.stopMusic()}async function hu(n,e,{seg:t=60,porAcierto:i=1e3,tres:a=!1,nPreg:s=0}={}){let o=Ze("mq");o.innerHTML="";let r=document.createElement("div");r.className="cbzona",o.appendChild(r);let l=a||me.respuestas==="opciones";r.innerHTML=`<div class="cbcab"><div class="cbname">${Ie(e.toUpperCase())}</div><div class="cbtimer"><b class="t">${s?"":t}</b><b class="d">${lt(0)}</b></div></div><div class="cbq"></div><div class="cbr"></div>`,Q.play("Whoosh"),await n.espera(600),Q.playMusic("acumulacion"),s||Q.snd("tiempoYa");let c=0,u=0,d=performance.now(),h=()=>t-(performance.now()-d)/1e3,p=()=>s?u>=s:h()<=0,g=setInterval(()=>{let v=r.querySelector(".t");v&&!s&&(v.textContent=Math.max(0,Math.ceil(h())))},200);try{for(;!p();){if(n.ok(),u++,l){let v=Ga(),m=Mn([v[1],v[2],v[3]]);r.querySelector(".cbq").textContent=v[0];let f=await new Promise(b=>{let R=r.querySelector(".cbr");R.innerHTML="";let w=!1,C=setInterval(()=>{(!s&&p()||!n.alive)&&(clearInterval(C),w||(w=!0,b(-1)))},150);m.forEach((I,_)=>{let x=document.createElement("button");x.className="cbans",x.textContent=I,x.onclick=A=>{A.stopPropagation(),!w&&(w=!0,clearInterval(C),b(_))},R.appendChild(x)})});if(f<0)break;let S=r.querySelectorAll(".cbans"),y=m[f]===v[1];S[f].classList.add(y?"ok":"ko"),y||S[m.indexOf(v[1])].classList.add("ok"),y?(c++,Q.play("Bien")):Q.play("Mal"),await n.espera(s?900:350)}else{let v=lo();r.querySelector(".cbq").textContent=v[0];let m=await Is(r.querySelector(".cbr"),{cond:()=>!p(),s:n});if(m===null)break;let f=!m.paso&&co(m.txt,v);r.querySelector(".cbr").innerHTML=`<div class="cbsol ${f?"ok":"ko"}">${f?"✔":"✘"} ${Ie(v[1])}</div>`,f?(c++,Q.play("Bien")):Q.play("Mal"),await n.espera(450)}r.querySelector(".d").textContent=lt(c*i)}}finally{clearInterval(g)}return Q.stopMusic(),Q.play("FinTiempo"),r.querySelector(".cbr").innerHTML="",r.querySelector(".cbq").innerHTML=`<b>${c}</b> aciertos · <b>${lt(c*i)}</b>`,Q.snd("acumBote"),await n.espera(1800),o.innerHTML="",c}var Kt=8;function Ls(n){let e=Ze("tabla");e||(e=document.createElement("div"),e.id="tabla",e.className="tabla",Ze("mq").appendChild(e));let t="";for(let i=0;i<Kt;i++){let a=Math.min(7,1+Math.round(i*6/(Kt-1))),s=n.ofertas&&n.ofertas.find(l=>l.fila===i),o="dark",r="";n.cazador>=0&&i<=n.cazador&&(o="red"),i===n.conc&&n.conc>n.cazador&&(o="light",r=n.etiqueta||""),s&&(o="light",r=s.txt),t+=`<div class="fila ${s?"ofe":""}" data-f="${i}" style="background-image:url(${oo(`btn_chase_board_0${a}_${o}`)});width:${100-(a-1)*5}%">${Ie(r)}${i===n.conc&&!s&&n.conc>n.cazador?`<i class="fl" style="background-image:url(${oo("btn_chase_board_arrow0012")})"></i>`:""}</div>`}t+='<div class="filacasa">CASA</div>',e.innerHTML=t,ee.pintaTablero({filas:Kt,cazador:n.cazador,conc:n.conc,etiqueta:n.etiqueta||"",textos:Object.fromEntries((n.ofertas||[]).map(i=>[i.fila,i.txt]))})}function Ch(n,e){if(n.ofertas==="nueva")return[{id:"cuadruple",nombre:"Cuádruple",pasos:7,valor:e*4},{id:"doble",nombre:"Doble",pasos:6,valor:e*2},{id:"cantidad",nombre:"Lo acumulado",pasos:5,valor:e},{id:"mitad",nombre:"Mitad",pasos:4,valor:Math.round(e/2/100)*100}];let t=Math.max(e+5e3,Math.round(e*(2+Math.random()*4)/1e3)*1e3),i=e>1e3?Math.round(e*(.1+Math.random()*.4)/500)*500:-Math.round(1+Math.random()*3)*1e3;return[{id:"alta",nombre:"Oferta alta",pasos:6,valor:t},{id:"media",nombre:"Lo acumulado",pasos:5,valor:e},{id:"baja",nombre:"Oferta baja",pasos:4,valor:i}]}async function Rh(n,{nombre:e,quien:t,dinero:i,era:a,caz:s,simulado:o=!1}){let r=Ch(a,i),l;if(o){let g=Math.random();l=a.ofertas==="nueva"?r[g<.15?0:g<.4?1:g<.85?2:3]:r[g<.2?0:g<.85?1:2];let v=Kt-l.pasos,m=0;for(;v<Kt&&m<v;)Math.random()<.7&&v++,Math.random()<s.nivel&&m++;return{casa:v>=Kt,premio:l.valor,oferta:l}}ee.tono("rosa"),ee.ponEn(t,"casa"),ee.ponEn("pres","casaPres"),Q.playMusic("tablero"),await We(n,"pres",sn.tablero,"tablero"),Ls({cazador:-1,conc:-1,ofertas:r.map(g=>({fila:Kt-g.pasos,txt:lt(g.valor)}))}),Q.play("Oferta"),await We(n,s.id,s.frases.oferta,"cazador"),a.ofertas==="clasica"?await We(n,"pres",`La oferta alta es de ${lt(r[0].valor)}, a seis pasos de casa. La baja, ${lt(r[2].valor)}, a cuatro. O te quedas con tus ${lt(i)}, a cinco.`,"pres"):await We(n,"pres",`Puedes jugar por la mitad, por lo acumulado, por el doble o por el cuádruple: ${lt(r[0].valor)}, con el cazador pegado a ti.`,"pres"),l=await new Promise(g=>{Ze("tabla").querySelectorAll(".fila.ofe").forEach(v=>v.onclick=m=>{m.stopPropagation(),Q.play("Elige"),g(r.find(f=>Kt-f.pasos===+v.dataset.f))}),Ue.actions(r.map(v=>({label:`${v.nombre}: ${lt(v.valor)} (${v.pasos} pasos)`,cls:v.id==="media"||v.id==="cantidad"?"gold":"",fn:()=>g(v)})))}),Ue.actions([]),Q.snd("eleccion");let c=Kt-l.pasos,u=0,d=l.valor,h=()=>Ls({cazador:u,conc:c,etiqueta:lt(d)});for(h(),Q.play("AvanzaC"),await n.espera(500),await We(n,"pres",`${e} juega por ${lt(d)}, a ${l.pasos} pasos de casa. ¡Que empiece la caza!`,"casa");c<Kt&&u<c;){n.ok();let g=Ga(),v=Mn([g[1],g[2],g[3]]),m=v.indexOf(g[1]),f=document.createElement("div");f.className="tczona",f.innerHTML=`<div class="tcq">${Ie(g[0])}</div><div class="tcr">${v.map((w,C)=>`<button class="tcans" data-k="${C}"><b>${"ABC"[C]}</b>${Ie(w)}</button>`).join("")}</div>`,Ze("mq").appendChild(f),ee.plano(Dt(["tablero","casa","duelo"]),1.2),me.lee&&(Ue.bocadillo("pres",g[0]),po(g[0]));let S=-1,y=setTimeout(()=>{S=Math.random()<s.nivel?m:Dt([0,1,2].filter(w=>w!==m)),Q.play("EligeZ")},1500+Math.random()*3500*(2-s.nivel)),b=await new Promise(w=>f.querySelectorAll(".tcans").forEach(C=>C.onclick=I=>{I.stopPropagation(),Q.play("Elige"),w(+C.dataset.k)})),R=f.querySelectorAll(".tcans");for(R[b].classList.add("sel");S<0;)await n.espera(100);clearTimeout(y),ru(),Ue.bocadillo(),await n.espera(600),Q.play("RevelaC"),R[b].classList.add("marcaC"),await n.espera(900),R[m].classList.add("ok"),b!==m&&R[b].classList.add("ko"),b===m&&(c++,h(),Q.play("AvanzaC")),await n.espera(1e3),R[S].classList.add("marcaZ"),Q.play("RevelaZ"),await n.espera(900),S===m?(u++,h(),Q.play("AvanzaZ")):Math.random()<.5&&await We(n,s.id,Dt(["Uy, esa se me ha escapado.","Error mío. No volverá a pasar."]),"cazador"),await n.espera(1e3),f.remove(),b!==m&&S===m&&Math.random()<.3&&await We(n,s.id,s.frases.burla,"cazador")}let p=c>=Kt;return Q.stopMusic(),p?(Q.play("Casa"),Q.aplauso(3),await We(n,"pres",Dt(sn.casa),"casa"),await We(n,s.id,s.frases.escapa,"cazador")):(Q.play("Cazado"),Q.oooh(),ee.tono("rojo"),await We(n,"pres",Dt(sn.cazado),"casa"),await We(n,s.id,s.frases.caza,"cazador")),Ze("tabla")?.remove(),ee.tono("azul"),ee.pintaTablero({cazador:-1,conc:-1,textos:{}}),{casa:p,premio:d,oferta:l}}var _h=n=>String(n).split("").length&&n<=39?`<img src="${oo("anim_fc_bar_numbers"+String(Math.max(0,n)).padStart(4,"0"))}" alt="${n}">`:`<em>${n}</em>`;function _n(n){let e=Ze("fcbox");e||(e=document.createElement("div"),e.id="fcbox",e.className="fcbox",Ze("mq").appendChild(e));let t=Math.ceil(n.t);e.innerHTML=`<div class="fclogo">LA CAZA FINAL</div><div class="fcclock"><b>${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}</b></div>
  <div class="fcbar azul"><span>EQUIPO</span>${_h(n.equipo)}</div><div class="fcbar rojo ${n.fase===2?"":"apag"}"><span>CAZADOR</span>${_h(n.cazador)}</div><div class="fcbote">${lt(n.bote)}</div>`}async function fu(n,{equipo:e,bote:t,caz:i,era:a}){let s=e.filter(g=>g.humano).length,o=e.map(()=>0);ee.ponEn("pres","atril"),e.forEach((g,v)=>ee.ponEn(g.quien,"mesa",v)),ee.pintaMesa({nombres:e.map(g=>g.nombre).concat(["","",""]).slice(0,4),dinero:lt(t),estados:[]}),await We(n,"pres",sn.final,"mesa"),await We(n,"pres",`Partís con ${e.length} ${e.length===1?"paso":"pasos"} de ventaja y jugáis por ${lt(t)}.`,"mesa");let r={t:120,equipo:e.length,cazador:0,fase:1,bote:t};_n(r),Q.play("Reloj"),await n.espera(800),Q.snd("startClock"),Q.playMusic("final");let l=!1,c=performance.now(),u=()=>r.fase===2&&me.acelerar?3:1,d=!1,h=setInterval(()=>{let g=performance.now();d||(r.t=Math.max(0,r.t-(g-c)/1e3*u())),c=g,_n(r)},150);try{for(;r.t>0;){n.ok();let v=lo(),m=document.createElement("div");m.className="fczona",m.innerHTML=`<div class="tcq">${Ie(v[0])}</div><div class="cbr"></div>`,Ze("mq").appendChild(m);let f=e.map((C,I)=>I).filter(C=>!e[C].humano),S=m.querySelector(".cbr"),y,b=f.length?2e3+Math.random()*4e3:s?1e9:0;if(s&&!l){let C;y=await Promise.race([Is(S,{ph:"Pulsa y responde",ok:"🔴 Pulsar",cond:()=>r.t>0,s:n}),new Promise(I=>C=setTimeout(()=>I({ia:Dt(f)}),b))]),clearTimeout(C)}else S.innerHTML=s?'<div class="cbsol">⛔ Pasaste tras pulsar: esta no puedes pulsarla</div>':"",await n.espera(Math.min(b,3e3)),y=f.length?{ia:Dt(f)}:null;if(l=!1,!y){m.remove();break}let R=!1,w=0;y.paso?(a.ofertas==="nueva"&&(l=!0),S.innerHTML=`<div class="cbsol ko">Paso · ${Ie(v[1])}</div>`):y.ia!=null?(w=y.ia,R=Math.random()<.62,ee.figuras[e[w].quien].userData.gesto=.5,S.innerHTML=`<div class="cbsol ${R?"ok":"ko"}">🔴 ${Ie(e[w].nombre)}: ${R?Ie(v[1])+" ✔":"falla ✘ ("+Ie(v[1])+")"}</div>`):(R=co(y.txt,v),S.innerHTML=`<div class="cbsol ${R?"ok":"ko"}">${R?"✔":"✘"} ${Ie(v[1])}</div>`),R&&(r.equipo++,o[w]++,Q.play("Bien")),_n(r),await n.espera(650),m.remove()}Q.stopMusic(),Q.play("FinTiempo"),await n.espera(800),await We(n,"pres",`¡Tiempo! Habéis llegado a ${r.equipo} pasos.`,"mesa"),r.fase=2,r.t=120,ee.tono("rosa"),await We(n,"pres",sn.finalCazador,"cazador"),await We(n,i.id,i.frases.final,"cazador");let g=()=>Ue.actions([{label:me.acelerar?"⏩ Reloj x3 (quitar)":"⏩ Acelerar el reloj del cazador",fn:()=>{me.acelerar=!me.acelerar,ai(),g()}}]);for(g(),Q.snd("startClock"),Q.playMusic("final"),c=performance.now();r.t>0&&r.cazador<r.equipo;){n.ok();let v=lo(),m=document.createElement("div");m.className="fczona",m.innerHTML=`<div class="tcq">${Ie(v[0])}</div><div class="cbr"><div class="fcz">${Ie(i.apodo)} piensa…</div></div>`,Ze("mq").appendChild(m),ee.plano(Dt(["cazador","duelo"]),.8);let f=i.rapidez*(.6+Math.random()*.9)*1e3/u(),S=performance.now();for(;performance.now()-S<f&&r.t>0;)await n.espera(60);if(r.t<=0){m.remove();break}let y=Math.random()<i.nivel-.06,b=m.querySelector(".cbr");if(y){r.cazador++,Q.play("BienZ"),b.innerHTML=`<div class="cbsol ko">🔴 ${Ie(i.apodo)}: ${Ie(v[1])} ✔</div>`,_n(r),await n.espera(600/u()),m.remove();continue}d=!0,Q.play("Para"),Q.stopMusic(),b.innerHTML=`<div class="cbsol">✘ ${Ie(i.apodo)} falla. ¡Reloj parado! ¿Lo hacéis retroceder?</div>`;let R=document.createElement("div");R.className="cbr",m.appendChild(R);let w="";if(s){let C=await Is(R,{ph:"Respuesta para el empuje",paso:"No sé",s:n});w=C&&C.txt||""}else await n.espera(1200),w=Math.random()<.55?v[1]:"";co(w,v)?(r.cazador>0?r.cazador--:r.equipo++,Q.play("Bien"),Q.aplauso(1),Ue.toast("¡El cazador retrocede!")):Ue.toast("La respuesta era: "+v[1],1800),_n(r),await n.espera(900),m.remove(),d=!1,c=performance.now(),Q.playMusic("final")}}finally{clearInterval(h),Ue.actions([])}Q.stopMusic();let p=r.cazador<r.equipo;if(ee.tono(p?"azul":"rojo"),p){Q.play("Fanfarria"),Q.aplauso(4);let g=document.createElement("div");g.className="yowin",g.textContent="¡HABÉIS GANADO!",Ze("mq").appendChild(g),await We(n,"pres",sn.ganaEquipo,"mesa"),await We(n,i.id,i.frases.pierde,"cazador"),g.remove()}else Q.play("Cazado"),Q.oooh(),await We(n,"pres",sn.ganaCazador,"mesa"),await We(n,i.id,i.frases.gana,"cazador");return Ze("fcbox")?.remove(),{gana:p,pasos:r.equipo,cazador:r.cazador,pts:o}}var go=n=>+(localStorage.getItem(n?"cz_bote_stars":"cz_bote")||2e4),Mh=(n,e)=>localStorage.setItem(n?"cz_bote_stars":"cz_bote",String(e)),so=null;async function Kc(n,e,t){let i=e==="stars",a=i?Ln.e2024:Ln[t&&Ln[t]?t:me.era],s=Fa.find(R=>R.id===me.especial)||Fa[0],o=mo();Ns(o),ee.figuras[o.id].visible=!1;let r=ro()?Ph():null,l=r?r.nombre:Ri();Gb(r);let c=!i&&a.ofertas==="nueva"?localStorage.getItem("cz_campeon"):null,u=i?Mn(Yd).slice(0,3).map(([R,w])=>({nombre:R,prof:w+" (ficticio)"})):Mn(Uc).slice(0,3).map(([R,w,C])=>({nombre:R,prof:w+" · "+C}));c&&c!==l&&(u[0]={nombre:c,prof:"Vuelve: fue quien más acertó en la final"});let d=[{nombre:l,quien:"c0",humano:!0,prof:[r?r.profesion:en.profesion,r?r.ciudad:en.ciudad].filter(Boolean).join(" · ")||"Concursante"},...u.map((R,w)=>({nombre:R.nombre,quien:"c"+(w+1),humano:me.juegas==="todos",prof:R.prof}))],h=i?Dt(Zd):null,p=a.ofertas==="nueva"?go(i):0;if(ee.pintaMesa({nombres:d.map(R=>R.nombre),dinero:lt(p),estados:[]}),Ue.actions([{label:"Saltar ⏭",fn:()=>n.saltar=!0}]),me.apertura&&await lu(n),Ue.actions([]),Q.stopMusic(),me.apertura&&(ee.figuras.pres.visible=!1,await Ah(n)),(s.banner||i)&&Ue.rotulo(i?"EL CAZADOR STARS":s.banner,i?"Juegan por "+h:a.cadena),await We(n,"pres",Dt(sn.saludo),"pres2"),Q.aplauso(),me.monologo&&Math.random()<.4){let R=Dt(_s);for(let w of R.lineas)await We(n,"pres",w,"pres2");Q.aplauso()}if(so=null,me.copro||me.presSorpresa){let R=Dt(Tb);ee.dePie(ee.figuras[R],-2.6,.3,2.6,-.4),ee.figuras[R].userData.gesto=1,await We(n,R,`¡Hola! Soy ${kn[R].nombre}, ${kn[R].rol.toLowerCase()} del programa, y hoy acompaño a Dani en la presentación.`,"copro"),me.presSorpresa?so=R:ee.figuras[R].visible=!1}Ue.rotulo(),await We(n,"pres",i?"Hoy cuatro famosos juegan por una buena causa. ¡Un aplauso!":sn.equipo,"mesa"),Q.aplauso();for(let R of d)Ue.rotulo(R.nombre,R.prof),ee.plano("mesa",.8),ee.figuras[R.quien].userData.gesto=1,await n.espera(1100);Ue.rotulo(),p&&await We(n,"pres",`En el bote de la caza final hay ${lt(p)}.`,"mesa"),await du(n,o),ee.ponEn(o.id,"cazador");let g=0,v=[];for(let R=0;R<4;R++){let w=d[R];n.ok(),await Va(n),await We(n,"pres",`${w.nombre}, ${R===0?"empezamos contigo":"te toca"}. ${sn.acumulacion}`,"mesa");let C;w.humano?C=await hu(n,w.nombre,{porAcierto:a.porAcierto}):(C=3+Math.floor(Math.random()*6),Ue.rotulo(w.nombre,`Acumulación: ${C} aciertos · ${lt(C*a.porAcierto)}`),Q.play("FinTiempo"),await n.espera(1600),Ue.rotulo());let I=C*a.porAcierto;await We(n,"pres",`${I?lt(I):"Ningún acierto"}. Vamos al tablero.`,"casa");let _=await Rh(n,{nombre:w.nombre,quien:w.quien,dinero:I,era:a,caz:o,simulado:!w.humano});w.humano||(Ue.rotulo(w.nombre,`${_.oferta.nombre}: ${lt(_.premio)} → ${_.casa?"¡CASA!":"CAZADO"}`),Q.play(_.casa?"Casa":"Cazado"),_.casa?Q.aplauso(2):Q.oooh(),await n.espera(2200),Ue.rotulo()),v[R]=_.casa?"casa":"cazado",_.casa&&(a.ofertas==="nueva"?w.asegurado=Math.max(0,_.premio):g+=_.premio),ee.ponEn(w.quien,"mesa",R),ee.ponEn("pres","atril"),ee.pintaMesa({nombres:d.map(x=>x.nombre),dinero:lt(Math.max(0,a.ofertas==="nueva"?p:g)),estados:v}),so&&await We(n,so,Dt(Si[_.casa?"coproBien":"coproMal"]),"copro"),me.publicidad&&R===1&&(await We(n,"pres",Si.pubSale,"wide"),await Yc("pausa",n),n.ok(),ee.plano("wide",.1),await We(n,"pres",Si.pubVuelve,"pres2")),me.chistes&&Math.random()<.15&&(await We(n,"pres",Dt(Si.chistes),"pres"),Q.aplauso(1))}let m=d.filter((R,w)=>v[w]==="casa"),f=a.ofertas==="nueva"?p:g;m.length||(await We(n,"pres",sn.todosCazados,"mesa"),m=[d[0]],f=4e3),f<=0&&(f=1e3),await Va(n,!0);let S=await fu(n,{equipo:m,bote:f,caz:o,era:a}),y=f/m.length,b;if(S.gana)b=a.ofertas==="nueva"?`Cada finalista se lleva ${lt(y)} del bote, más lo asegurado en el tablero.`:`Os repartís ${lt(f)}: ${lt(y)} para cada uno.`,a.ofertas==="nueva"&&Mh(i,2e4);else if(b=i?`El cazador gana, pero ${h} recibe 1.000 € de consolación.`:"El premio se queda en el plató.",a.ofertas==="nueva"){let R=p+(i?3e3:5e3);Mh(i,R),b+=` El bote sube a ${lt(R)}.`}if(a.ofertas==="nueva"&&!i){let R=Math.max(...S.pts),w=m.filter((I,_)=>S.pts[_]===R),C=w.length>1?await Ib(n,w):w[0];localStorage.setItem("cz_campeon",C.nombre),b+=` ${C.nombre} vuelve mañana: fue quien más acertó en la final.`}await uo(n,b,i?h:null,S.gana?y+(d[0].asegurado||0):i?1e3:d[0].asegurado||0)}async function Ib(n,e){let t=Dt(vh);await We(n,"pres",sn.numerica,"mesa");let i=document.createElement("div");i.className="fczona",i.innerHTML=`<div class="tcq">${Ie(t[0])}</div><div class="cbr"></div>`,Ze("mq").appendChild(i);let a=e.find(r=>r.humano),s=NaN;if(a){let r=await Is(i.querySelector(".cbr"),{ph:"Tu cifra",tipo:"number",paso:"",s:n});s=r?+r.txt:NaN}let o=e.map(r=>({x:r,v:r===a&&!isNaN(s)?s:t[1]*(1+(Math.random()-.5)*.5)})).sort((r,l)=>Math.abs(r.v-t[1])-Math.abs(l.v-t[1]));return i.querySelector(".cbr").innerHTML=`<div class="cbsol ok">Respuesta: ${t[1]} ${Ie(t[2])} · Gana ${Ie(o[0].x.nombre)}</div>`,await n.espera(2600),i.remove(),o[0].x}async function uo(n,e,t,i){Q.stopMusic();let a=Ze("mq");a.innerHTML=`<div class="cheque"><small>${t?"PARA "+Ie(t.toUpperCase()):"EL CAZADOR · "+Ie(Ri().toUpperCase())}</small>${i?lt(i):"0 €"}<small>${Ie(e)}</small></div>`,ee.plano("mesa",2),await We(n,"pres",e,"mesa"),Q.playMusic("despedida"),await We(n,"pres",sn.despedida,"wide"),a.innerHTML="",await Lb(n),ee.orbita(),Q.playMusic("menu"),Ue.actions([{label:"Jugar otra vez",cls:"gold",fn:()=>ut("programa")},{label:"Menú",fn:()=>$e("play")}])}async function Lb(n){let e=Ze("credits"),t=Ze("creditsRoll");t.innerHTML=[["El Cazador · El juego",""],["Presenta",en.presentador],["Cazador",si.apodo+" ("+si.nombre+")"],["Concursante",(Ph()||{}).nombre||Ri()],["Idea y juego","Iker"],["Voces","Piper TTS"],["Motor 3D","Three.js"]].map(([i,a])=>`<p><b>${Ie(i)}</b><br>${Ie(a)}</p>`).join(""),e.classList.remove("hidden"),ee.plano("cenital",4),await n.espera(5e3).finally(()=>e.classList.add("hidden"))}async function Db(n,e,t){let i=Ln[me.era],a=mo();Ns(a);let s=Ri();if(ee.pintaMesa({nombres:[s,"","",""],dinero:"0 €"}),t==="tablero"){let o=await Rh(n,{nombre:s,quien:"c0",dinero:5*i.porAcierto,era:i,caz:a});Ue.rotulo(o.casa?"¡CASA!":"CAZADO",lt(o.premio))}else if(t==="final"){let o=await fu(n,{equipo:[{nombre:s,quien:"c0",humano:!0}],bote:1e4,caz:a,era:i});Ue.rotulo(o.gana?"¡Ganas!":"Gana el cazador",`${o.pasos} pasos · cazador ${o.cazador}`)}else{let o=await hu(n,s,{porAcierto:i.porAcierto});Ue.rotulo("Acumulación",`${o} aciertos · ${lt(o*i.porAcierto)}`)}ee.orbita(),Ue.actions([{label:"Repetir",cls:"gold",fn:()=>ut("entrenamiento",t)},{label:"Menú",fn:()=>$e("train")}])}async function Nb(n,e,t){let i=mo();Ns(i),ee.figuras[i.id].visible=!1;let a=Math.max(1,Math.min(4,+(t||1))),s=[{nombre:Ri(),quien:"c0",humano:!0},...Mn(Uc).slice(0,a-1).map(([l],c)=>({nombre:l,quien:"c"+(c+1),humano:!1}))];await du(n,i),ee.ponEn(i.id,"cazador");let o=Ln[me.era].ofertas==="nueva"?go(!1):5e3*a+Math.round(Math.random()*20)*1e3,r=await fu(n,{equipo:s,bote:o,caz:i,era:Ln[me.era]});await uo(n,r.gana?`Os repartís ${lt(o)}.`:"El cazador se queda con el premio.",null,r.gana?o/a:0)}async function Ub(n){let e=Ri();for(let f of Object.keys(ee.figuras))ee.figuras[f].visible=!1;ee.ponEn("pres","casaPres"),ee.ponEn("c0","casa"),ee.tono("rosa");let t=Mn(It).slice(0,5),i=ee.PUESTOS.cazador;t.forEach((f,S)=>ee.dePie(ee.figuras[f.id],i[0]+(S-2)*.55*Math.cos(i[3]),i[1],i[2]-(S-2)*.55*Math.sin(i[3]),i[3])),Ue.actions([{label:"Saltar ⏭",fn:()=>n.saltar=!0}]),me.apertura&&await lu(n),Ue.actions([]),ee.tono("rosa"),Ue.rotulo("LA NOCHE DE LOS CAZADORES","Un concursante contra los cazadores"),Q.playMusic("conoce"),await We(n,"pres","Bienvenidos a La noche de los cazadores. Esta noche, un concursante contra hasta cinco cazadores.","cazador");for(let f of t)cu(f),await We(n,f.id,f.frases.intro,"cazador"),uu();Ue.rotulo(),Q.stopMusic(),await We(n,"pres",`${e}, cinco preguntas de tres opciones. Cada acierto suma dinero y más cazadores entre los que elegir.`,"casa");let a=await hu(n,e,{porAcierto:1e3,tres:!0,nPreg:5}),s=Math.max(2,Math.min(5,a+1)),o=[];for(let f=2;f<=s;f++)o.push({n:f,dinero:a*1e3+(f-1)*f*2500+Math.round(Math.random()*4)*1e3,tCaz:60-(f-2)*5-Math.round(Math.random()*5)});await We(n,"pres","Los cazadores pujan: más cazadores, más dinero… y menos tiempo para ellos.","cazador");let r=Ze("mq"),l=document.createElement("div");l.className="nochepuja",l.innerHTML="<h3>PUJAS DE LOS CAZADORES</h3>"+o.map((f,S)=>`<button class="tcans" data-i="${S}"><b>${f.n}</b>${f.n} cazadores · ${lt(f.dinero)} · ellos ${f.tCaz} s, tú 60 s</button>`).join(""),r.appendChild(l),Q.play("Oferta");let c=await new Promise(f=>l.querySelectorAll("button").forEach(S=>S.onclick=y=>{y.stopPropagation(),Q.play("Elige"),f(o[+S.dataset.i])}));l.remove();let u=t.slice(0,c.n);t.slice(c.n).forEach(f=>ee.figuras[f.id].visible=!1),await We(n,"pres",`${e} se enfrenta a ${c.n} cazadores por ${lt(c.dinero)}. Reloj de ajedrez: tú tienes sesenta segundos, ellos ${c.tCaz}.`,"duelo");let d={tu:60,ellos:c.tCaz,turno:"tu"},h=document.createElement("div");h.className="ajedrez",r.appendChild(h);let p=()=>h.innerHTML=`<div class="rel ${d.turno==="tu"?"act":""}"><small>${Ie(e.toUpperCase())}</small><b>${d.tu.toFixed(1)}</b></div><div class="rel caz ${d.turno==="ellos"?"act":""}"><small>CAZADORES</small><b>${d.ellos.toFixed(1)}</b></div>`,g=performance.now(),v=setInterval(()=>{let f=performance.now();d[d.turno]=Math.max(0,d[d.turno]-(f-g)/1e3),g=f,p()},100);Q.play("Reloj"),Q.snd("startClock"),Q.playMusic("final");try{for(;d.tu>0&&d.ellos>0;){n.ok();let f=lo(),S=document.createElement("div");if(S.className="fczona",S.innerHTML=`<div class="tcq">${Ie(f[0])}</div><div class="cbr"></div>`,r.appendChild(S),d.turno==="tu"){ee.plano("casa",.5);let y=await Is(S.querySelector(".cbr"),{ph:"Responde rápido",cond:()=>d.tu>0,s:n});if(y===null){S.remove();break}let b=!y.paso&&co(y.txt,f);S.querySelector(".cbr").innerHTML=`<div class="cbsol ${b?"ok":"ko"}">${b?"✔":"✘"} ${Ie(f[1])}</div>`,b?(Q.play("Para"),d.turno="ellos"):Q.play("Mal"),await n.espera(400)}else{let y=Dt(u),b=performance.now(),R=y.rapidez*(.5+Math.random()*.8)*1e3;for(ee.plano("cazador",.5),S.querySelector(".cbr").innerHTML=`<div class="fcz">🔴 ${Ie(y.apodo)} pulsa…</div>`;performance.now()-b<R&&d.ellos>0;)await n.espera(60);if(d.ellos<=0){S.remove();break}let w=Math.random()<y.nivel-.04;S.querySelector(".cbr").innerHTML=`<div class="cbsol ${w?"ko":"ok"}">${Ie(y.apodo)}: ${w?Ie(f[1])+" ✔":"falla ✘"}</div>`,w&&(Q.play("BienZ"),d.turno="tu"),await n.espera(400)}S.remove()}}finally{clearInterval(v)}Q.stopMusic(),h.remove(),d.ellos<=0&&d.tu>0?(Q.play("Fanfarria"),Q.aplauso(4),await uo(n,`¡${e} gana a ${c.n} cazadores y se lleva ${lt(c.dinero)}!`,null,c.dinero)):(Q.play("Cazado"),Q.oooh(),await uo(n,`Los cazadores ganan el duelo. ${e} se va sin premio.`,null,0))}async function Eh(n,e){for(let t of["pres","c0","c1","c2","c3",si.id])ee.figuras[t].visible=!0;ee.pintaMesa({nombres:[Ri(),"Marta","Rubén","Lucía"],dinero:"35.000 €"}),ee.libre(),e==="paseo"&&ee.camera.position.set(-3,1.7,12),Ue.toast(su||matchMedia("(pointer:coarse)").matches?"Arrastra a la derecha para mirar y usa el joystick para andar":"WASD para andar, arrastra para mirar",3500)}async function zb(n,e,t){let i=It.find(s=>s.id===t)||It[0];Q.playMusic("entrada"),ee.tono("rosa"),cu(i),await We(n,i.id,i.frases.intro,"cazador"),await We(n,"pres",i.bio,"cazador"),await We(n,i.id,i.frases.burla,"cazador"),uu(),ee.tono("azul");let a=It[(It.indexOf(i)+1)%It.length];Ue.actions([{label:"Siguiente ▶",cls:"gold",fn:()=>ut("cazadores",a.id)},{label:"Elegir para jugar",fn:()=>{me.cazador=i.id,ai(),Ue.toast(i.apodo+" será tu cazador")}},{label:"Lista",fn:()=>$e("cazadores")}])}async function Ob(n,e,t){let i=t&&t!=="azar"?[_s.find(a=>a.id===t)]:[Dt(_s)];for(let a of i)for(let s of a.lineas)await We(n,"pres",s,Dt(["pres","pres2","dos"]));Q.aplauso(),Ue.actions([{label:"Siguiente ▶",cls:"gold",fn:()=>ut("monologos","azar")},{label:"Lista",fn:()=>$e("monologos")}])}async function eu(n,e,t){let i=to[e],a=t==="todas"?i.map(r=>r.id):[t||i[0].id],s;for(let r of a){s=i.find(l=>l.id===r);for(let l of new Set(s.pasos.map(c=>c[0])))Fb(l);Ue.rotulo(s.titulo,{oculta:"Cámara oculta",tomas:"Tomas falsas",fuera:"Fuera de cámaras"}[e]);for(let[l,c,u]of s.pasos)await We(n,l,c,u);/Inocente|Corten/.test(s.pasos.at(-1)[1])&&Q.aplauso(),await n.espera(800)}let o=i[(i.indexOf(s)+1)%i.length];Ue.bocadillo(),Ue.actions([{label:"Siguiente ▶",cls:"gold",fn:()=>ut(e,o.id)},{label:"Repetir",fn:()=>ut(e,s.id)},{label:"Lista",fn:()=>$e(e)}])}function Fb(n){let e=ee.figuras[n];if(!e||n==="pres")return;if(n==="c0")return ee.ponEn("c0","casa");if(/^c\d$/.test(n))return;if(It.some(i=>i.id===n))return ee.figuras[si.id].visible=!1,si=It.find(i=>i.id===n),ee.ponEn(n,"cazador");let t={pili:[-4.5,.3,3],chema:[-1,.3,4],marga:[-2,.3,1.8],ramon:[-3,.3,3.5],encarna:[-3,1.3,11]}[n]||[-3,.3,3];ee.dePie(e,...t,n==="encarna"?Math.PI:0)}async function Bb(n,e,t){await Yc(t||"pausa",n),n.ok(),Q.snd("corto"),Ue.actions([{label:"Otra pausa ▶",cls:"gold",fn:()=>ut("publicidad","pausa")},{label:"Lista",fn:()=>$e("publicidad")}])}async function tu(n,e,t){if(t==="cabecera"||t==="apertura"||t==="entrada"){n.saltar=!1,Ue.actions([{label:"Saltar ⏭",fn:()=>n.saltar=!0}]),t==="cabecera"?await lu(n):t==="entrada"?(Ue.actions([]),ee.figuras[si.id].visible=!1,await du(n,si)):(Ue.actions([]),ee.figuras.pres.visible=!1,await Ah(n),await We(n,"pres",Si.entraConc,"mesa")),Q.stopMusic(),Ue.actions([{label:"Repetir",cls:"gold",fn:()=>ut("promos",t)},{label:"Lista",fn:()=>$e("promos")}]);return}let i=e==="promos"?zc:e==="promosleo"?Oc:Fc,a=i.find(c=>c.id===t)||i[0];e==="promosleo"&&ee.ponEn("pres","casaPres"),Q.playMusic("tension"),ee.plano("cenital",.1),Ue.rotulo(a.titulo.toUpperCase(),e==="promocadena"?"Promo de "+Zi:"Promo");let s=e==="promosleo"?["casa","pres2","tablero"]:["logo","wide","tablero","cazador","mesa","pres"];for(let[c,u]of a.lineas.entries())await We(n,e==="promosleo"?"pres":"chema",u,s[c%s.length]);let o=Ze("mq"),r=fo(400);r.style.cssText="position:absolute;left:50%;top:45%;width:min(40vh,40vw);transform:translate(-50%,-50%);animation:pop2 .6s",o.appendChild(r),Q.play("Golpe"),await n.espera(2500),o.innerHTML="";let l=i[(i.indexOf(a)+1)%i.length];Ue.actions([{label:"Siguiente ▶",cls:"gold",fn:()=>ut(e,l.id)},{label:"Lista",fn:()=>$e(e)}])}async function kb(n){for(let[e,t,i]of Bc)Ue.rotulo(e+" · "+t),await We(n,"pres",i,Dt(["wide","logo","tablero","mesa","pres"]));Ue.rotulo(),Ue.actions([{label:"Menú",fn:()=>$e("main")}])}var Ds=[],pu=()=>new Promise((n,e)=>{let t=indexedDB.open("cz_casting",1);t.onupgradeneeded=()=>t.result.createObjectStore("p",{keyPath:"id",autoIncrement:!0}),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)});async function mu(){try{let n=await pu(),e=await new Promise(t=>{let i=n.transaction("p").objectStore("p").getAll();i.onsuccess=()=>t(i.result||[]),i.onerror=()=>t([])});Ds.length=0,Ds.push(...e.sort((t,i)=>t.fecha-i.fecha))}catch{}}async function Hb(n){let e=await pu();await new Promise((t,i)=>{let a=e.transaction("p","readwrite");a.objectStore("p").put(n),a.oncomplete=t,a.onerror=()=>i(a.error)}),await mu()}async function Vb(n){let e=await pu();await new Promise(t=>{let i=e.transaction("p","readwrite");i.objectStore("p").delete(n),i.oncomplete=t,i.onerror=t}),await mu()}var ro=()=>localStorage.getItem("cz_casting_on")!=="0";function Ph(){let n=+localStorage.getItem("cz_central")||0;return Ds.find(e=>e.id===n)||null}function Gb(n){n&&ee.recreaFigura("c0",{traje:parseInt(n.color.slice(1),16),piel:parseInt(n.piel.slice(1),16),camisa:16777215,corbata:null,pelo:2759184,pantalon:2238522})}function st(n,e,t,i){let a=document.createElement("button");return a.className="mbtn "+t,a.innerHTML=`<span class="fp"></span><span>${n}${e?`<small>${e}</small>`:""}</span>`,a.onclick=s=>{s.stopPropagation(),Q.play("Tecla"),i()},a}function kt(n){let e=document.createElement("button");return e.className="tbtn back",e.innerHTML="⟵ Volver",e.onclick=t=>{t.stopPropagation(),Q.play("Tecla"),$e(n)},e}function Lt(n){let e=document.createElement("h2");return e.textContent=n,e}var yn=(n,e="")=>{let t=document.createElement("div");return t.style.cssText="background:#0a1a5acc;border:2px solid #19b8ff;border-radius:16px;padding:10px 12px;margin:4px 0;color:#fff;font:14px system-ui;"+e,n&&(t.innerHTML=n),t},Ct=(n,e,t)=>{let i=document.createElement("button");return i.className="tbtn"+(t?" sel":""),i.innerHTML=n,i.onclick=a=>{a.stopPropagation(),Q.play("Tecla"),e(i)},i},Nn=(n,e="onote")=>{let t=document.createElement("p");return t.className=e,t.textContent=n,t},Ti=(n,e=!1)=>new Promise(t=>{let i=document.createElement("input");i.type="file",i.accept=n,i.multiple=e,i.onchange=()=>t(e?[...i.files]:i.files[0]),i.click()}),qa=!1,iu=null;addEventListener("beforeinstallprompt",n=>{n.preventDefault(),iu=n});function ho(){Ai&&(Ai.alive=!1,Ai=null),ru(),qa||(Q.stopAll(),Ue.limpia(),Ns(si),ee.pintaMesa({nombres:["","","",""],dinero:lt(go(!1))}),ee.orbita(14,4.8),Q.playMusic("menu"),qa=!0)}function au(n,e,t,i=""){let a=document.createElement("div");a.className="orow",i&&(a.id=i);let s=document.createElement("button"),o=()=>{s.className="tbtn"+(me[e]?" sel":""),s.textContent=me[e]?"Sí":"No"};s.onclick=c=>{c.stopPropagation(),me[e]=!me[e],o(),ai(),e==="music"&&(qa=!1,ho()),Q.play("Tecla")},o();let r=document.createElement("input");r.type="range",r.min=0,r.max=100,r.value=Math.round(me[t]*100),r.oninput=()=>{me[t]=+r.value/100,ai()},r.onclick=c=>c.stopPropagation(),r.onchange=()=>{e==="publico"?Q.aplauso(1.5):Q.play("Tecla"),e==="music"&&(qa=!1,ho())};let l=document.createElement("label");return l.textContent=n,a.append(l,s,r),a}function Ki(n,e,t){let i=document.createElement("div");i.className="orow";let a=document.createElement("label");a.textContent=n;let s=document.createElement("button"),o=()=>{s.className="tbtn"+(me[e]?" sel":""),s.textContent=me[e]?"Sí":"No"};return s.onclick=r=>{r.stopPropagation(),me[e]=!me[e],o(),ai(),Q.play("Tecla"),t&&t()},o(),i.append(a,s),i}function Cs(n,e){let t=document.createElement("div");t.className="orow";let i=document.createElement("label");i.textContent=n,t.appendChild(i);for(let[a,s]of[[!0,"Sí"],[!1,"No"]])t.appendChild(Ct(s,()=>{me[e]=a,ai(),t.querySelectorAll("button").forEach((o,r)=>o.classList.toggle("sel",r===0===a))},me[e]===a));return t}function Ci(n,e,t,i,a="",s=!1){let o=document.createElement("div");o.className="orow"+(s?" orow-wrap":""),a&&(o.id=a);let r=document.createElement("label");r.textContent=n,o.appendChild(r);for(let[l,c]of t){let u=document.createElement("button");u.className="tbtn"+(me[e]===l?" sel":""),u.textContent=c,u.dataset.v=l,u.onclick=d=>{d.stopPropagation(),me[e]=l,ai(),Q.play("Tecla"),o.querySelectorAll("button").forEach(h=>h.classList.toggle("sel",h.dataset.v===String(l))),i&&i(l)},o.appendChild(u)}return o}function qb(){let n=document.createElement("div");n.className="ocustom",n.id="optCustom";let e=document.createElement("div");e.className="olabel",e.textContent="🎶 Música de la cabecera",n.appendChild(e);let t=document.createElement("div");t.className="oname";let i=Qt.cache.cabecera_propia;t.textContent=i?"Audio propio: "+(i.name||"cargado"):"Sin audio propio: suena la de «The Chase» (solo en la app privada)",n.appendChild(t);let a=document.createElement("div");a.className="orow obtns";let s=null;return a.append(Ct("📂 Elegir audio de mi dispositivo",async()=>{let o=await Ti("audio/*");o&&(await ii("cabecera_propia",o),$e("options"))},!0),Ct("▶ Probar",()=>{if(s){s.pause(),s=null;return}let o=Qt.cache.cabecera_propia,r=o?URL.createObjectURL(o):Q.url("cabecera");r?(s=new Audio(r),s.volume=me.musicVol,s.play()):Ue.toast("No hay música de cabecera")}),Ct("🗑 Quitar",async()=>{await io("cabecera_propia"),$e("options")})),n.append(a,Nn("El audio se queda solo en este dispositivo; no se sube ni se comparte."),Nn("Suena en la cabecera y en la despedida del Programa completo, con los mismos movimientos de cámara.","onote small")),n}function Wb(){let n=document.createElement("div");return n.className="ocustom opub",n.id="optPublico",n.appendChild(au("👏 Público","publico","publicoVol","rowPublico")),n.appendChild(Ki("👥 Público en las gradas","gradas",()=>ee.gradas(me.gradas))),n.appendChild(Nn("Aplausos y «oooh» del público, sintetizados por el propio juego. Si tu móvil va justo, quitar el público de las gradas ayuda.")),n}function Xb(){let n=document.createElement("div");n.className="ocustom",n.id="optConcursantes";let e=document.createElement("div");e.className="olabel",e.textContent="👥 Concursantes";let t=document.createElement("div");t.className="oname",t.textContent=`Tú: ${en.nombre}${en.profesion?" · "+en.profesion:""} · Presenta: ${en.presentador}`;let i=document.createElement("div");return i.className="orow obtns",i.appendChild(Ct("✏️ Nombres y profesiones",()=>$e("concursantes"),!0)),n.append(e,t,i,Ci("🎮 Juegas","juegas",[["solo","Solo tú (compañeros IA)"],["todos","Los cuatro puestos"]],null,"",!0),Ci("⌨️ Preguntas abiertas","respuestas",[["escribir","Escribir la respuesta"],["opciones","Elegir entre 3"]],null,"",!0)),n}var Sh={e2020:"2020–abril 2024: acumulación a 1.000 € por acierto; ofertas alta, media y baja (6/5/4 pasos). Si te cazan, eliminado; si cazan a todos, uno juega la final por 4.000 €.",e2024:"Abril 2024–2025: acumulación a 200 €; ofertas mitad, cantidad, doble y cuádruple (3/2/1/0 de ventaja, 4–7 pasos). Lo ganado se asegura al escapar; la final es por un bote de 20.000 € que sube 5.000 € por programa. Quien más acierta en la final vuelve."};function Qb(){let n=document.createElement("div"),e=Nn(Sh[me.era]);return n.append(Ci("📅 Etapa del programa","era",Object.keys(Ln).map(t=>[t,Ln[t].nombre]),t=>e.textContent=Sh[t],"rowEtapa",!0),e),n}function $b(){return Ci("🎯 Cazador","cazador",[["azar","Al azar"],...It.map(n=>[n.id,n.apodo])],null,"rowCazador",!0)}function jb(){let n=document.createElement("div"),e=document.createElement("div");e.className="orow";let t=document.createElement("label");t.textContent="📦 Cargar sb3 / sonidos / sprites",e.append(t,Ct("Abrir ▶",()=>$e("recursos")));let i=document.createElement("div");i.className="orow orow-wrap";let a=document.createElement("label");a.textContent="🎶 Músicas, sonidos y gráficos",i.appendChild(a),i.append(Ct("📂 Cargar músicas",async()=>{let r=await Ti("audio/*",!0);if(!r||!r.length)return;let l=await dh(r);Ue.toast(l?`✅ ${l} sonidos cargados`:"Nombra los archivos como las ranuras: tema.mp3, tablero.mp3…",3e3),$e("options")}),Ct("🖼️ Logo",async()=>{let r=await Ti("image/*");r&&(await ii("logo",r),gu(),$e("options"))}),Ct("🗑️ Borrar",async()=>{await io(),location.reload()}));let s=Object.keys(Qt.cache).filter(r=>r.startsWith("snd:")).length,o=document.createElement("p");return o.className="onote",o.innerHTML=(me.sonidosClasico?"✅ Sonidos y músicas: los de tu app «The Chase» (solo en la app privada) (copia privada)":"⬜ Versión web: música sintetizada")+(s?`<br>✅ ${s} sonidos propios cargados`:"")+"<br>✅ Grafismos del tablero, botones y caza final: los de «The Chase» (solo en la app privada)"+(Qt.cache.logo?"<br>✅ Logo propio":"<br>✅ Logo: el del juego (dibujado)"),n.append(e,i,Ki("🎼 Usar los sonidos de «The Chase» (solo en la app privada)","sonidosClasico",()=>{qa=!1,ho(),$e("options")}),o),n}var nu={es:"El plató español: pared de cubos hexagonales azul (rosa en el cara a cara), celosía blanca, suelo blanco, mesa larga, tablero inclinado con «CASA» y la cabina roja del cazador.",uk:"Variante «The Chase» británico: pared LED, columnas moradas, estrellas plateadas y cabina rosa."};function Yb(){let n=document.createElement("div"),e=Nn(nu[me.plato]||nu.es);return n.append(Ci("🏟️ Plató","plato",[["es","El Cazador (España)"],["uk","The Chase (Reino Unido)"]],t=>{ee.aplicaEstilo(t),e.textContent=nu[t]},"rowPlato"),e),n}function Zb(){let n=document.createElement("div");n.className="ocustom";let e=document.createElement("div");e.className="olabel",e.textContent="❓ Mis preguntas";let t=document.createElement("div");return t.className="orow obtns",t.appendChild(Ct("✏️ Gestionar mis preguntas",()=>$e("mispreguntas"),!0)),n.append(e,t,Nn(`Escribe tus propias preguntas de tres opciones (${ou().length} guardadas); se mezclan con las ${Zc.length} del juego. Se quedan solo en este dispositivo.`)),n}function gu(){let n=Qt.cache.logo;if(!n)return;let e=new Image;e.onload=()=>ee.ponLogo(e),e.src=URL.createObjectURL(n)}function fo(n){let e=Qt.cache.logo;if(e){let t=new Image;return t.src=URL.createObjectURL(e),t.style.cssText="max-width:100%;max-height:60vh",t}return Jr(n)}function $e(n="main"){Sb=n,ho(),Ze("topbar").classList.add("hidden");let e=Ze("menu");e.classList.remove("hidden"),e.innerHTML="",e.style.background="transparent";let t=Fa.find(u=>u.id===me.especial)||Fa[0];if(n==="title"){let u=document.createElement("div");u.className="title";let d=fo(560);d.className="tlogo";let h=document.createElement("div");h.className="tsub",h.textContent="El juego";let p=document.createElement("div");p.className="ttap",p.textContent="Toca para empezar",u.append(d,h,p),e.appendChild(u);let g=v=>{v.stopPropagation(),Q.ctx.resume(),Q.play("Golpe"),Q.snd("letsPlay"),e.removeEventListener("pointerup",g),removeEventListener("keydown",g),$e("main")};e.addEventListener("pointerup",g),addEventListener("keydown",g);return}let i=document.createElement("div");i.className="mbox";let a=document.createElement("div");a.className="logo";let s=fo(560);s.className="mlogo",a.appendChild(s);let o=document.createElement("div");o.className="mtag",o.textContent=t.id==="normal"?"EL JUEGO · 3D":t.emoji+" "+t.banner,a.appendChild(o);let r=document.createElement("div");r.className="col ui";let l=Ie(en.presentador);if(n==="main")r.append(st("Jugar","Programa completo, caza final, La noche de los cazadores, Stars…","gold",()=>$e("play")),st("Promos",`Promos 3D con ${l}: cabecera, apertura, entrada del cazador…`,"",()=>$e("promos")),st("Promos de Dani",`${l} presenta El Cazador en el plató: próximo programa, bote, tablero`,"",()=>$e("promosleo")),st("Publicidad",`Pausa de ${Zi}: anuncios inventados, cortinillas y promos de la cadena`,"",()=>$e("publicidad")),st("Cámara oculta","Bromas en el plató… ¡Inocente, inocente!","",()=>$e("oculta")),st("Tomas falsas","Lapsus, pulsadores rebeldes y «¡Corten!»","",()=>$e("tomas")),st("Fuera de cámaras","Maquillaje, ensayos, cazadores en el catering","",()=>$e("fuera")),st("Paseo","Pasea por el plató y sube a la cabina del cazador","",()=>ut("paseo")),st("Casting","Apúntate y sal como concursante en las partidas","",()=>$e("casting")),st("Los cazadores","Conoce a los seis cazadores y elige el tuyo","",()=>$e("cazadores")),st("Opciones","Sonido, plató, etapa, calidad gráfica, pantalla completa","",()=>$e("options")),st("La historia de El Cazador",`${l} te cuenta la historia del programa`,"hist",()=>$e("historia")),st("Cómo se juega","Las reglas del concurso","",()=>$e("help")),st("Créditos","","",()=>$e("credits"))),su||r.append(st("Instalar app","Juega sin conexión desde tu pantalla de inicio","inst",()=>{iu?iu.prompt():Ue.toast("Usa «Añadir a pantalla de inicio» en el menú del navegador",3e3)}));else if(n==="play"){r.append(st("Programa completo","Cabecera, equipo de 4, cazador, acumulación, tablero y caza final","gold",()=>$e("programa")),st("Clásico (2D)","Las pantallas del juego «The Chase»: acumulación, tablero, cara a cara y caza final","",()=>ut("clasico")),st("Caza final","Directo a los dos minutos contra el cazador","",()=>$e("cazafinal")),st("La noche de los cazadores","Tú contra 2–5 cazadores con reloj de ajedrez","",()=>ut("noche")),st("El cazador Stars","Famosos (inventados) que juegan por una ONG","",()=>ut("stars")),st("Entrenamiento","Acumulación, tablero o caza final por separado","",()=>$e("train")),st("Explorar el plató","Pasea libremente por el plató 3D","",()=>ut("explorar")),st("Monólogos del presentador","Sus números de humor","",()=>$e("monologos"))),r.appendChild(Lt("Programa especial"));let u=document.createElement("div");u.className="themes";for(let d of Fa){let h=document.createElement("button");h.className="tbtn"+(d.id===me.especial?" sel":""),h.innerHTML=`<span>${d.emoji}</span>${d.name}`,h.onclick=p=>{p.stopPropagation(),Q.play("Tecla"),me.especial=d.id,ai(),$e("play")},u.appendChild(h)}r.append(u,kt("main"))}else if(n==="programa")r.appendChild(Lt("Programa completo")),r.append(st("2020–2024 · Reglas clásicas","Acumulación a 1.000 € · ofertas alta, media y baja · si te cazan, eliminado","gold",()=>ut("programa","e2020")),st("2024–2025 · Nuevas reglas",`Acumulación a 200 € · mitad, cantidad, doble, cuádruple · bote ${lt(go(!1))}`,"",()=>ut("programa","e2024")),kt("play"));else if(n==="cazafinal"){r.appendChild(Lt("Caza final"));for(let u=1;u<=4;u++)r.appendChild(st(`${u} ${u===1?"finalista":"finalistas"}`,`${u} ${u===1?"paso":"pasos"} de ventaja${u>1?" · compañeros IA que pulsan":""}`,u===1?"gold":"",()=>ut("cazafinal",String(u))));r.appendChild(kt("play"))}else if(n==="train"){r.appendChild(Lt("Entrenamiento (sin cabecera)"));let u=(h,p,g,v="")=>st(p,g,v,()=>ut("entrenamiento",h));r.append(u("acumulacion","Ronda de acumulación","Un minuto de preguntas","gold"),u("tablero","Tablero contra el cazador","Elige oferta y llega a casa"),u("final","Caza final","Dos minutos y el cazador detrás"));let d=document.createElement("div");d.className="mrow",d.append(Ct(me.misPreguntas?"<span>❓</span>Preguntas: las del juego + las mías":"<span>📜</span>Preguntas: solo las del juego",h=>{me.misPreguntas=!me.misPreguntas,ai(),Rs=[],h.innerHTML=me.misPreguntas?"<span>❓</span>Preguntas: las del juego + las mías":"<span>📜</span>Preguntas: solo las del juego",h.classList.toggle("sel",me.misPreguntas)},me.misPreguntas),kt("play")),r.appendChild(d)}else if(n==="cazadores"){r.appendChild(Lt("Los cazadores")),r.appendChild(yn("Seis cazadores <b>inventados</b>, con voces sintéticas genéricas. Toca uno para verlo en su cabina."));for(let u of It)r.appendChild(st(`${u.apodo} · ${u.nombre}`,`${u.fuerte} · ${u.bio}`,me.cazador===u.id?"gold":"",()=>ut("cazadores",u.id)));r.appendChild(kt("main"))}else if(n==="oculta"||n==="tomas"||n==="fuera"){let u={oculta:["📹","Cámara oculta","Bromas en el plató… ¡Inocente, inocente!"],tomas:["🎬","Tomas falsas","Lapsus, pulsadores rebeldes y «¡Corten!»"],fuera:["🎥","Fuera de cámaras","Maquillaje, ensayos, cazadores en el catering"]}[n];r.appendChild(Lt(u[0]+" "+u[1])),r.appendChild(yn(u[2]+". Personajes virtuales inventados; todo es ficción.")),r.appendChild(st("▶ Ver todas seguidas",to[n].length+" escenas","gold",()=>ut(n,"todas")));for(let d of to[n])r.appendChild(st(d.titulo,d.pasos.length+" frases","",()=>ut(n,d.id)));r.appendChild(kt("main"))}else if(n==="promos"){r.appendChild(Lt("Promos")),r.appendChild(yn(`Promos de El Cazador en 3D, en tiempo real, con nuestro presentador virtual <b>${l}</b> (personajes virtuales, sin personas reales).`)),r.append(st("🎬 Cabecera del programa","La cabecera de cada programa","",()=>ut("promos","cabecera")),st("🎬 Apertura del programa","Plató, público, Dani entra y el equipo a la mesa","",()=>ut("promos","apertura")),st("🎯 Entrada del cazador","El cazador sube a su cabina","",()=>ut("promos","entrada")));for(let u of zc)r.appendChild(st("📺 "+u.titulo,u.lineas[0],u.id==="estanoche"?"gold":"",()=>ut("promos",u.id)));r.appendChild(kt("main"))}else if(n==="promosleo"){r.appendChild(Lt("Promos de Dani")),r.appendChild(yn(`Promos en 3D en el plató: nuestro presentador virtual <b>${l}</b> presenta El Cazador en ${Zi}. (Personaje virtual, voz sintética.)`));for(let u of Oc)r.appendChild(st("🎤 "+u.titulo,u.lineas[0],u.id==="pl1"?"gold":"",()=>ut("promosleo",u.id)));r.appendChild(kt("main"))}else if(n==="publicidad"){r.appendChild(Lt("Publicidad · "+Zi)),r.appendChild(yn(`Pausa publicitaria de <b>${Zi}</b> con anuncios <b>inventados</b> (marcas y productos de broma) y promos de la cadena. También puede salir en mitad del Programa completo.`)),r.appendChild(st("📺 Pausa publicitaria completa","Cortinillas, 3 anuncios y ¡volvemos!","gold",()=>ut("publicidad","pausa"))),r.appendChild(st("⏱️ Cortinillas","Publicidad · Volvemos en 1 minuto · 30 segundos · 3 anuncios · 1 anuncio","",()=>ut("publicidad","cortinillas"))),r.appendChild(Lt("Promos de la cadena"));for(let d of Fc)r.appendChild(st("📺 "+d.titulo,"Promo de la cadena","",()=>ut("promocadena",d.id)));r.appendChild(Lt("Anuncios inventados"));let u=document.createElement("div");u.className="themes";for(let d of Ha){let h=document.createElement("button");h.className="tbtn",h.innerHTML=`<span>🛒</span>${Ie(d.marca)}`,h.title=d.producto,h.onclick=p=>{p.stopPropagation(),ut("publicidad","anuncio:"+d.id)},u.appendChild(h)}r.append(u,Cs("📺 Publicidad en el Programa completo","publicidad"),kt("main"))}else if(n==="monologos"){r.appendChild(Lt("Monólogos del presentador")),r.appendChild(st("🎲 Al azar","Uno cualquiera (y luego «Siguiente»)","gold",()=>ut("monologos","azar")));let u=document.createElement("div");u.className="monolist";let d={publico:"👏",telefono:"📱",normas:"📜"},h={publico:"Con el público",telefono:"En casa",normas:"Cambiando las normas"};for(let p of _s){let g=document.createElement("button");g.className="tbtn",g.innerHTML=`<span>${d[p.tipo]}</span><b>${Ie(p.titulo)}</b><small>${h[p.tipo]}</small>`,g.onclick=v=>{v.stopPropagation(),Q.play("Tecla"),ut("monologos",p.id)},u.appendChild(g)}r.append(u,Nn(`${en.presentador} es un presentador virtual inventado con voz sintética genérica.`,"mtext onote2"),kt("play"))}else if(n==="casting"){r.appendChild(Lt("Casting")),r.appendChild(yn("¡Apúntate al casting de <b>El Cazador</b>! Rellena tu ficha y podrás jugar como concursante, con tu nombre, tu profesión y tu avatar. Se guarda solo en este dispositivo."));let u=yn(""),d=(A,B,z="text",q="",Y=24)=>{let F=document.createElement("label");F.style.cssText="display:block;margin:6px 0 2px;font-weight:700",F.textContent=B;let G=document.createElement("input");return G.type=z,G.id=A,G.placeholder=q,G.maxLength=Y,G.style.cssText="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;border:2px solid #19b8ff;background:#fff;color:#111;font:16px system-ui",G.addEventListener("keydown",O=>O.stopPropagation()),G.addEventListener("pointerup",O=>O.stopPropagation()),u.append(F,G),G},h=d("cNombre","Nombre","text","Tu nombre",18),p=d("cEdad","Edad","number","25",3),g=d("cCiudad","Ciudad","text","Tu ciudad",24),v=d("cProf","Profesión","text","A qué te dedicas",40),m=d("cFrase","Tu frase","text","¡Voy a por la oferta alta!",80),f=["#2a6aff","#e8102a","#ff7a1a","#3ac85a","#ffd21a","#d04aff","#ff5fb0","#1a1a1a","#ffffff"],S=["#f6d2b8","#e0a880","#a8704a","#6a4028","#e8eef8"],y=f[0],b=S[0],R=(A,B,z,q)=>{let Y=document.createElement("div");Y.style.cssText="margin:8px 0 2px",Y.innerHTML=`<b>${A}</b><br>`,B.forEach(F=>{let G=document.createElement("button");G.style.cssText=`width:34px;height:34px;margin:4px;border-radius:50%;border:3px solid ${F===q()?"#19b8ff":"#0008"};background:${F};cursor:pointer`,G.onclick=O=>{O.preventDefault(),O.stopPropagation(),z(F),Y.querySelectorAll("button").forEach(se=>se.style.borderColor="#0008"),G.style.borderColor="#19b8ff"},Y.appendChild(G)}),u.appendChild(Y)};R("Color de la ropa del avatar",f,A=>y=A,()=>y),R("Aspecto (tono de piel del avatar)",S,A=>b=A,()=>b);let w=document.createElement("p");w.className="onote";let C=Ct("✅ Apuntarme al casting",async()=>{let A=h.value.trim();if(!A){w.textContent="Escribe al menos tu nombre.";return}await Hb({nombre:A.slice(0,18),edad:Math.max(0,Math.min(120,+p.value||0)),ciudad:g.value.trim(),profesion:v.value.trim(),frase:m.value.trim(),color:y,piel:b,fecha:Date.now()}),$e("casting")});u.append(document.createElement("br"),C,w),r.appendChild(u);let I=+localStorage.getItem("cz_central")||0,_=yn("<b>Apuntados ("+Ds.length+")</b>");Ds.slice().reverse().forEach(A=>{let B=document.createElement("div");B.style.cssText="display:flex;align-items:center;gap:8px;margin:6px 0;flex-wrap:wrap",B.innerHTML=`<span style="width:22px;height:22px;border-radius:50%;background:${A.color};border:4px solid ${A.piel}"></span><span><b>${Ie(A.nombre)}</b>${A.edad?", "+A.edad:""}${A.ciudad?" · "+Ie(A.ciudad):""}${A.profesion?" · "+Ie(A.profesion):""}${A.frase?"<br><i>«"+Ie(A.frase)+"»</i>":""}</span>`,B.append(Ct(I===A.id?"✅ Es el concursante":"🎮 Jugar como concursante",()=>{localStorage.setItem("cz_central",I===A.id?"0":String(A.id)),$e("casting")},I===A.id),Ct("🗑️",async()=>{await Vb(A.id),$e("casting")})),_.appendChild(B)}),r.appendChild(_);let x=document.createElement("div");x.className="mrow",x.append(Ct(ro()?"✅ El casting juega en las partidas":"⬜ El casting no juega en las partidas",A=>{localStorage.setItem("cz_casting_on",ro()?"0":"1"),A.innerHTML=ro()?"✅ El casting juega en las partidas":"⬜ El casting no juega en las partidas"}),kt("main")),r.appendChild(x)}else Jb(n,r);let c=document.createElement("div");c.className="mver",c.textContent="v"+wh,i.appendChild(c),i.append(a,r),e.appendChild(i)}function Jb(n,e){if(n==="options"){e.classList.add("opts"),e.appendChild(Lt("Opciones")),e.append(au("🎵 Música","music","musicVol"),Ci("🎬 Cabecera","cabecera",[["cab3d","Cabecera 3D"],["video",Qt.cache.video_cabecera?"Vídeo propio":"Vídeo propio (cárgalo)"],["plato3d","Plató 3D"]],async s=>{if(s==="video"&&!Qt.cache.video_cabecera){let o=await Ti("video/*");o&&(await ii("video_cabecera",o),$e("options"))}},"rowCabecera",!0),qb(),au("🔊 Efectos","sfx","sfxVol"),Wb(),Ki("🎤 Voz del presentador","voz"),Ki("🎯 Voz de los cazadores","vozCaz"),Ki("📖 El presentador lee las preguntas","lee"),Ci("⏩ Velocidad de lectura","leeVel",[["normal","Normal"],["rapida","Rápida"]],null,"rowLeeVel"),Ki("😄 Chistes del presentador","chistes"),Ki("🎭 Monólogo del presentador","monologo"),Xb(),Qb(),$b(),jb(),Cs("📺 Publicidad en el Programa completo","publicidad"),Cs("🎤 Copresentador sorpresa","copro"),Cs("🎙️ Presentador sorpresa (todo el programa)","presSorpresa"),Cs("🎬 Cabecera 3D y apertura larga en el Programa completo","apertura"),Yb(),Zb(),Ci("✨ Calidad gráfica","quality",[["baja","Baja"],["media","Media"],["alta","Alta"]],()=>location.reload()));let t=document.createElement("div");t.className="orow";let i=document.createElement("label");i.textContent="⛶ Pantalla completa";let a=document.createElement("button");a.className="tbtn"+(document.fullscreenElement?" sel":""),a.textContent=document.fullscreenElement?"Salir":"Activar",a.onclick=async s=>{s.stopPropagation();try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}setTimeout(()=>$e("options"),300)},su&&(a.disabled=!0,a.textContent="Siempre (app)"),t.append(i,a),e.append(t,Nn(`Rendimiento actual: ${Math.round(Ih)} fps. Si el juego va lento en tu móvil, elige calidad «Baja».`,"mtext"),kt("main"))}else if(n==="concursantes"){e.classList.add("opts"),e.appendChild(Lt("Concursantes"));let t=(s,o,r)=>{let l=document.createElement("div");l.className="orow ofield";let c=document.createElement("label");c.textContent=s;let u=document.createElement("input");return u.type="text",u.className="otext",u.value=en[o],u.placeholder=r,u.maxLength=24,u.addEventListener("input",()=>{en[o]=u.value,Cb()}),u.addEventListener("keydown",d=>{d.stopPropagation(),d.key==="Enter"&&u.blur()}),u.addEventListener("pointerdown",d=>d.stopPropagation()),u.addEventListener("pointerup",d=>d.stopPropagation()),l.append(c,u),l},i=document.createElement("div");i.className="ocustom",i.innerHTML='<div class="olabel">🙋 Tú, el concursante</div>',i.append(t("Tu nombre","nombre","Iker"),t("Tu profesión","profesion","Estudiante"),t("Tu ciudad","ciudad","Madrid"),Nn("Tu nombre sale en la pantalla de la mesa, en el rótulo y en los créditos."));let a=document.createElement("div");a.className="ocustom",a.innerHTML='<div class="olabel">🎤 El presentador</div>',a.append(t("Nombre del presentador","presentador",eo),Nn("Personaje inventado con voz sintética genérica.")),e.append(i,a,kt("options"))}else if(n==="recursos"){e.classList.add("opts"),e.appendChild(Lt("Cargar sb3 / sonidos / sprites")),e.appendChild(yn("Abre un proyecto de Scratch (<b>.sb3</b>) y elige qué sonido suena en cada momento del concurso, o carga archivos de audio sueltos. Todo se queda solo en este dispositivo."));let t=yn(""),i=[],a=()=>{t.innerHTML="";for(let[o,r]of ws){let l=document.createElement("div");l.className="orow orow-wrap";let c=document.createElement("label");if(c.textContent=(Qt.cache["snd:"+o]?"✅ ":me.sonidosClasico?"🎼 ":"⬜ ")+r,l.appendChild(c),i.length){let u=document.createElement("select");u.innerHTML='<option value="">— elegir del sb3 —</option>'+i.map((d,h)=>`<option value="${h}">${Ie(d.nombre)}</option>`).join(""),u.onclick=d=>d.stopPropagation(),u.onchange=async()=>{u.value!==""&&(await ii("snd:"+o,i[+u.value].blob),a())},l.appendChild(u)}l.append(Ct("📂",async()=>{let u=await Ti("audio/*");u&&(await ii("snd:"+o,u),a())}),Ct("▶",()=>{let u=Q.url(o);u?new Audio(u).play():Ue.toast("Sin sonido")}),Ct("🗑",async()=>{await io("snd:"+o),a()})),t.appendChild(l)}},s=document.createElement("div");s.className="mrow",s.append(Ct("📦 Abrir .sb3",async()=>{let o=await Ti(".sb3,application/zip");if(o){try{i=await uh(o),Ue.toast(`${i.length} sonidos en el proyecto`)}catch{Ue.toast("No se pudo leer el .sb3")}a()}},!0),Ct("🖼️ Logo",async()=>{let o=await Ti("image/*");o&&(await ii("logo",o),gu())}),Ct("🎬 Vídeo de cabecera",async()=>{let o=await Ti("video/*");o&&(await ii("video_cabecera",o),Ue.toast("Vídeo guardado: elige «Vídeo propio» en Cabecera"))})),a(),e.append(s,t,Nn("✅ propio · 🎼 el de «The Chase» (solo en la app privada) · ⬜ sintetizado"),kt("options"))}else if(n==="mispreguntas"){e.classList.add("opts"),e.appendChild(Lt("Mis preguntas"));let t=ou(),i=yn(""),a=(u,d)=>{let h=document.createElement("label");h.style.cssText="display:block;margin:6px 0 2px;font-weight:700",h.textContent=u;let p=document.createElement("input");return p.placeholder=d,p.style.cssText="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;border:2px solid #19b8ff;background:#fff;color:#111;font:16px system-ui",p.addEventListener("keydown",g=>g.stopPropagation()),p.addEventListener("pointerup",g=>g.stopPropagation()),i.append(h,p),p},s=a("Pregunta","¿…?"),o=a("Respuesta correcta",""),r=a("Incorrecta 1",""),l=a("Incorrecta 2","");i.appendChild(Ct("➕ Guardar pregunta",()=>{if(!s.value.trim()||!o.value.trim()||!r.value.trim()||!l.value.trim())return Ue.toast("Rellena todos los campos");t.push({q:s.value.trim(),c:o.value.trim(),inc:[r.value.trim(),l.value.trim()]}),localStorage.setItem("cz_mispreg",JSON.stringify(t)),Rs=[],$e("mispreguntas")},!0)),e.appendChild(i);let c=yn(`<b>Guardadas (${t.length})</b>`);t.forEach((u,d)=>{let h=document.createElement("div");h.style.cssText="display:flex;gap:8px;align-items:center;margin:4px 0",h.innerHTML=`<span>${Ie(u.q)} <i>(${Ie(u.c)})</i></span>`,h.appendChild(Ct("🗑️",()=>{t.splice(d,1),localStorage.setItem("cz_mispreg",JSON.stringify(t)),$e("mispreguntas")})),c.appendChild(h)}),e.append(c,kt("options"))}else if(n==="historia"){e.classList.add("text"),e.append(kt("main"),Lt("La historia de El Cazador"),st(`▶ Que me la cuente ${Ie(en.presentador)}`,"Recorrido narrado por el plató","gold",()=>ut("historia")));let t=document.createElement("div");t.className="mtext",t.innerHTML=Bc.map(([i,a,s])=>`<p><b>${Ie(i)} · ${Ie(a)}</b><br>${Ie(s)}</p>`).join("")+'<p class="small">Adaptación española de «The Chase»: La 1 (10 feb 2020 – 25 abr 2025) y La 2 (12 may 2025 – 6 ene 2026); 14 temporadas y 1.129 programas. Presentadores reales: Ion Aramendi (2020–2022) y Rodrigo Vázquez (2022–2026); El cazador Stars: Rodrigo Vázquez (2024) y Gorka Rodríguez (2024–2025). El presentador y los cazadores de este juego son inventados.</p>',e.append(t)}else if(n==="help"){e.classList.add("text"),e.append(kt("main"),Lt("Cómo se juega"));let t=document.createElement("div");t.className="mtext",t.innerHTML="<p><b>Equipo:</b> cuatro concursantes contra un cazador. Tú eres el primero; los demás los juega la IA (o tú, en Opciones › Juegas).</p><p><b>Acumulación:</b> un minuto de preguntas. 2020–2024: 1.000 € por acierto. 2024–2025: 200 €.</p><p><b>Tablero:</b> el cazador ofrece cantidades. Clásica: alta (6 pasos), lo acumulado (5) o baja (4). Nueva: mitad, cantidad, doble o cuádruple (4 a 7 pasos; 3, 2, 1 o 0 de ventaja). Preguntas de tres opciones: si aciertas bajas un paso; si acierta el cazador, baja él. Si llegas a <b>CASA</b>, pasas a la final; si te alcanza, quedas eliminado.</p><p><b>Caza final:</b> dos minutos con pulsador; un paso de ventaja por finalista. Luego el cazador tiene dos minutos; cada fallo suyo para el reloj y, si acertáis, retrocede un paso. Si no os alcanza, os repartís el premio. En 2024–2025 se juega por un bote (20.000 € + 5.000 € por programa; 3.000 € en Stars); si pulsas y pasas, no puedes pulsar en la siguiente; quien más acierta vuelve al día siguiente (desempate con pregunta numérica).</p><p><b>La noche de los cazadores:</b> 5 preguntas de tres opciones; eliges contra cuántos cazadores (2–5) juegas según su puja de dinero y tiempo; duelo con reloj de ajedrez de 60 s.</p><p><b>Stars:</b> famosos inventados que juegan por una ONG; si pierden, 1.000 € de consolación.</p><p><b>Controles 3D:</b> ☰ vuelve al menú, 👁 cambia la cámara, 💡 apaga o enciende los haces de luz.</p>",e.append(t)}else if(n==="credits"){e.classList.add("text"),e.append(kt("main"),Lt("Créditos"));let t=document.createElement("div");t.className="mtext",t.innerHTML=`<p><b>Idea y juego</b><br>Iker</p><p><b>Presentador y cazadores virtuales</b><br>${Ie(en.presentador)}, ${It.map(i=>Ie(i.apodo)).join(", ")} (personajes inventados)</p><p><b>Voz</b><br>Piper TTS (voces sintéticas genéricas en español)</p><p><b>Motor 3D</b><br>Three.js (MIT)</p><p><b>Menús, publicidad de ${Zi} y personajes del equipo</b><br>Basados en «¡Ahora Caigo! 3D» 1.13 y «Millonario» 1.1 de Iker</p><p><b>Sonidos y grafismos</b><br>Sonidos sintetizados y grafismos propios (versión web). Preguntas: «El Cazador 3D» de Iker y adaptaciones de las de «The Chase» (solo en la app privada)</p><p class="small">Versión ${wh}</p><p class="small">Juego de fans privado y sin ánimo de lucro. «El Cazador» / «The Chase» es un formato de sus respectivos propietarios; este juego no está afiliado ni respaldado por ellos.</p>`,e.append(t)}}var Ih=60;async function Kb(){await Promise.all([ch(),mu()]),ph(Q,po);let n=document.createElement("div");n.id="mq",Ze("hud").appendChild(n),ee=eh(Ze("c3d"),me.quality,me.plato),ee.gradas(me.gradas),gu();let e=performance.now(),t=0,i=performance.now(),a=d=>{t++,d-i>1e3&&(Ih=t*1e3/(d-i),t=0,i=d),ee.frame(Math.min(.05,(d-e)/1e3)),e=d,requestAnimationFrame(a)};requestAnimationFrame(a),Ze("btnMenu").onclick=d=>{d.stopPropagation(),!(Ai&&Ai.alive&&!confirm("¿Volver al menú? Se perderá la partida."))&&(document.getElementById("showtime")?.remove(),$e("main"))},Ze("btnLuces").onclick=d=>{d.stopPropagation(),Ue.toast(ee.toggleLuces()?"Haces de luz encendidos":"Haces de luz apagados",1e3)};let s=0;Ze("btnCam").onclick=d=>{if(d.stopPropagation(),ee.cam.modo==="libre")return;let h=Object.keys(ee.PLANOS);ee.plano(h[s++%h.length])};let o={};addEventListener("keydown",d=>{d.target.tagName!=="INPUT"&&(o[d.key.toLowerCase()]=1,r())}),addEventListener("keyup",d=>{o[d.key.toLowerCase()]=0,r()});let r=()=>{ee.mueve.z=(o.s?1:0)-(o.w?1:0),ee.mueve.x=(o.d?1:0)-(o.a?1:0)},l=Ze("touch"),c=null;l.addEventListener("pointerdown",d=>{c={x:d.clientX,y:d.clientY,izq:d.clientX<innerWidth/3}}),addEventListener("pointermove",d=>{!c||ee.cam.modo!=="libre"||(c.izq?(ee.mueve.x=Math.max(-1,Math.min(1,(d.clientX-c.x)/60)),ee.mueve.z=Math.max(-1,Math.min(1,(d.clientY-c.y)/60))):(ee.cam.yaw+=(d.clientX-c.x)*.005,ee.cam.pitch=Math.max(-1,Math.min(1,ee.cam.pitch-(d.clientY-c.y)*.004)),c.x=d.clientX,c.y=d.clientY))}),addEventListener("pointerup",()=>{c&&c.izq&&(ee.mueve.x=ee.mueve.z=0),c=null}),Ze("loading").classList.add("hidden");let u=new URLSearchParams(location.search);u.get("mode")?ut(u.get("mode"),u.get("sub")):$e(u.get("screen")||"title"),Object.assign(window,{__menu:$e,__startMode:ut,__plato:ee,__it:me,__pintaTabla:Ls,__pintaFinal:_n})}Kb();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
