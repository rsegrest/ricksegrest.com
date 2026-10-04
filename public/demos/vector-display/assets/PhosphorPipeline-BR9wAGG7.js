(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class e{segmentCoordinates;segmentNeighbors;constructor(e){this.segmentCoordinates=Float32Array.from(e.coordinates),this.segmentNeighbors=Int32Array.from(e.neighborIndices)}get segmentCount(){return this.segmentCoordinates.length/4}static fromPolyline(t){return e.fromPolylines([t])}static fromPolylines(n){let r={coordinates:[],neighborIndices:[]};for(let e of n)t(r,e);return new e(r)}static fromSegmentCoordinates(t){if(t.length%4!=0)throw Error(`Segment coordinates must come in groups of 4 (x0, y0, x1, y1), but received ${t.length} values`);let n=Array.from(t);return new e({coordinates:n,neighborIndices:r(n)})}static createDot(){return new e({coordinates:[0,0,0,0],neighborIndices:[-1,-1]})}};function t(e,t){let{points:r,isClosed:i}=t;if(r.length===0)return;if(r.length===1){e.coordinates.push(r[0].x,r[0].y,r[0].x,r[0].y),e.neighborIndices.push(-1,-1);return}let a=e.coordinates.length/4;for(let t=0;t<r.length-1;t++){let n=r[t],i=r[t+1];e.coordinates.push(n.x,n.y,i.x,i.y)}let o=i&&r.length>2;if(o){let t=r[r.length-1];e.coordinates.push(t.x,t.y,r[0].x,r[0].y)}let s=e.coordinates.length/4-a;n(e.neighborIndices,{firstSegmentIndex:a,segmentCount:s,wrapsAround:o})}function n(e,t){let{firstSegmentIndex:n,segmentCount:r,wrapsAround:i}=t,a=n+r-1;for(let t=n;t<=a;t++){let r=t===n,o=t===a,s=r?i?a:-1:t-1,c=o?i?n:-1:t+1;e.push(s,c)}}function r(e){let t=e.length/4,n=Array(t*2).fill(-1);for(let r=0;r<t;r++){let i=(r+1)%t;if(i===r||i===0&&t<=2)continue;let a=r*4+2,o=i*4;e[a]===e[o]&&e[a+1]===e[o+1]&&(n[r*2+1]=i,n[i*2]=r)}return n}var i=1024,a={red:1,green:1,blue:1},o=class{segmentData=new Float32Array(i*14);usedSegmentCount=0;currentColor=a;get segmentCount(){return this.usedSegmentCount}getSegmentData(){return this.segmentData.subarray(0,this.usedSegmentCount*14)}clear(){this.usedSegmentCount=0}setColor(e){this.currentColor=e}addShape(e,t){this.ensureCapacity(this.usedSegmentCount+e.segmentCount),this.writeTransformedSegments(e,t),this.usedSegmentCount+=e.segmentCount}ensureCapacity(e){let t=this.segmentData.length/14;if(e<=t)return;let n=t;for(;n<e;)n*=2;let r=new Float32Array(n*14);r.set(this.getSegmentData()),this.segmentData=r}writeTransformedSegments(e,t){let{x:n,y:r,rotation:i,scale:a,intensity:o}=t,{red:s,green:c,blue:l}=this.currentColor,u=Math.cos(i)*a,d=Math.sin(i)*a,f=e.segmentCoordinates,p=e.segmentNeighbors,m=this.segmentData,h=this.usedSegmentCount*14;for(let t=0;t<e.segmentCount;t++){let e=t*4,i=p[t*2],a=p[t*2+1],g=i===-1?e:i*4,_=a===-1?e+2:a*4+2,v=f[e],y=f[e+1],b=f[e+2],x=f[e+3],S=f[g],C=f[g+1],w=f[_],T=f[_+1];m[h]=n+v*u-y*d,m[h+1]=r+v*d+y*u,m[h+2]=n+b*u-x*d,m[h+3]=r+b*d+x*u,m[h+4]=n+S*u-C*d,m[h+5]=r+S*d+C*u,m[h+6]=n+w*u-T*d,m[h+7]=r+w*d+T*u,m[h+8]=s,m[h+9]=c,m[h+10]=l,m[h+11]=o,m[h+12]=i===-1?0:1,m[h+13]=a===-1?0:1,h+=14}}},s=`#version 300 es
precision highp float;

layout(location = 0) in vec4 a_segment;
layout(location = 1) in vec4 a_neighborPoints;
layout(location = 2) in vec4 a_colorIntensity;
layout(location = 3) in vec2 a_neighborFlags;

uniform vec2 u_worldSize;
uniform vec2 u_targetSize;
uniform float u_quadRadius;

flat out vec2 v_startPixel;
flat out vec2 v_endPixel;
flat out vec2 v_previousStartPixel;
flat out vec2 v_nextEndPixel;
flat out vec2 v_neighborFlags;
flat out vec4 v_colorIntensity;

vec2 worldToPixel(vec2 worldPosition) {
    vec2 normalized = worldPosition / u_worldSize;
    return vec2(normalized.x, 1.0 - normalized.y) * u_targetSize;
}

void main() {
    vec2 startPixel = worldToPixel(a_segment.xy);
    vec2 endPixel = worldToPixel(a_segment.zw);
    vec2 direction = endPixel - startPixel;
    float segmentLength = length(direction);
    vec2 tangent = segmentLength > 0.0001 ? direction / segmentLength : vec2(1.0, 0.0);
    vec2 normal = vec2(-tangent.y, tangent.x);

    // Triangle strip corners: vertex 0..3 -> (along, across) = (0,-1), (0,1), (1,-1), (1,1).
    float along = float(gl_VertexID / 2);
    float across = float(gl_VertexID % 2) * 2.0 - 1.0;
    vec2 cornerPixel = mix(startPixel, endPixel, along)
        + tangent * (along * 2.0 - 1.0) * u_quadRadius
        + normal * across * u_quadRadius;

    v_startPixel = startPixel;
    v_endPixel = endPixel;
    v_previousStartPixel = worldToPixel(a_neighborPoints.xy);
    v_nextEndPixel = worldToPixel(a_neighborPoints.zw);
    v_neighborFlags = a_neighborFlags;
    v_colorIntensity = a_colorIntensity;
    gl_Position = vec4(cornerPixel / u_targetSize * 2.0 - 1.0, 0.0, 1.0);
}
`,c=`#version 300 es
precision highp float;

uniform float u_beamHalfWidth;
uniform float u_glowRadius;
uniform float u_glowStrength;
uniform float u_endpointBrightness;
uniform float u_jointOverlap;

flat in vec2 v_startPixel;
flat in vec2 v_endPixel;
flat in vec2 v_previousStartPixel;
flat in vec2 v_nextEndPixel;
flat in vec2 v_neighborFlags;
flat in vec4 v_colorIntensity;

out vec4 outColor;

float distanceToSegment(vec2 point, vec2 segmentStart, vec2 segmentEnd) {
    vec2 startToPoint = point - segmentStart;
    vec2 startToEnd = segmentEnd - segmentStart;
    float lengthSquared = max(dot(startToEnd, startToEnd), 0.000001);
    float projection = clamp(dot(startToPoint, startToEnd) / lengthSquared, 0.0, 1.0);
    return length(startToPoint - startToEnd * projection);
}

float gaussian(float distanceFromCenter, float radius) {
    return exp(-(distanceFromCenter * distanceFromCenter) / (2.0 * radius * radius));
}

// Near a joint, both connected segments cover the same pixels. The closer segment owns each pixel;
// the other contributes only u_jointOverlap (1 = plain additive overlap, 0 = seamless joint).
// Ties go to the previous segment so exactly one of the pair owns every pixel.
float jointOwnership(vec2 pixel, float distanceFromBeam) {
    bool previousIsCloser = v_neighborFlags.x > 0.5
        && distanceToSegment(pixel, v_previousStartPixel, v_startPixel) <= distanceFromBeam;
    bool nextIsCloser = v_neighborFlags.y > 0.5
        && distanceToSegment(pixel, v_endPixel, v_nextEndPixel) < distanceFromBeam;
    return (previousIsCloser || nextIsCloser) ? u_jointOverlap : 1.0;
}

void main() {
    vec2 pixel = gl_FragCoord.xy;
    float distanceFromBeam = distanceToSegment(pixel, v_startPixel, v_endPixel);
    float coreCoverage = 1.0 - smoothstep(u_beamHalfWidth - 0.5, u_beamHalfWidth + 0.5, distanceFromBeam);
    float glow = u_glowStrength * gaussian(distanceFromBeam, u_glowRadius);

    // The beam dwells at segment endpoints, so real vector monitors drew vertices and dots brighter.
    float distanceFromEndpoint = min(distance(pixel, v_startPixel), distance(pixel, v_endPixel));
    float endpointDwell = u_endpointBrightness * gaussian(distanceFromEndpoint, u_beamHalfWidth * 2.0 + 0.5);

    float brightness = (coreCoverage + glow + endpointDwell) * v_colorIntensity.a * jointOwnership(pixel, distanceFromBeam);
    outColor = vec4(v_colorIntensity.rgb * brightness, 1.0);
}
`;function l(e,t){let n=u(e,{shaderType:e.VERTEX_SHADER,source:t.vertexSource}),r=u(e,{shaderType:e.FRAGMENT_SHADER,source:t.fragmentSource}),i=e.createProgram();if(e.attachShader(i,n),e.attachShader(i,r),e.linkProgram(i),e.deleteShader(n),e.deleteShader(r),!e.getProgramParameter(i,e.LINK_STATUS)){let t=e.getProgramInfoLog(i);throw e.deleteProgram(i),Error(`Failed to link shader program: ${t}`)}return i}function u(e,t){let n=e.createShader(t.shaderType);if(!n)throw Error(`Failed to create shader`);if(e.shaderSource(n,t.source),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(n);throw e.deleteShader(n),Error(`Failed to compile shader: ${t}`)}return n}var d={beamWidth:1.5,glowRadius:4,glowStrength:.25,endpointBrightness:.6,jointOverlap:1},f=4,p=[{location:0,size:4,floatOffset:0},{location:1,size:4,floatOffset:4},{location:2,size:4,floatOffset:8},{location:3,size:2,floatOffset:12}],m=3,h=class e{gl;program;uniforms;vertexArray;segmentBuffer;segmentBufferCapacityBytes=0;worldSize;lineStyle=d;constructor(e,t){this.gl=e,this.worldSize=t,this.program=l(e,{vertexSource:s,fragmentSource:c}),this.uniforms=this.findUniformLocations(),this.segmentBuffer=e.createBuffer(),this.vertexArray=this.createSegmentVertexArray()}static fromCanvas(t,n){let r=t.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,premultipliedAlpha:!1});if(!r)throw Error(`WebGL2 is not available in this browser`);return new e(r,n)}setWorldSize(e){this.worldSize=e}setLineStyle(e){this.lineStyle={...this.lineStyle,...e}}clear(){let e=this.gl;e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)}drawDisplayList(e){let t=e.segmentCount;if(t===0)return;let n=this.gl;this.uploadSegmentData(e.getSegmentData()),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.enable(n.BLEND),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ONE),n.useProgram(this.program),this.applyUniforms(),n.bindVertexArray(this.vertexArray),n.drawArraysInstanced(n.TRIANGLE_STRIP,0,4,t),n.bindVertexArray(null)}dispose(){this.gl.deleteBuffer(this.segmentBuffer),this.gl.deleteVertexArray(this.vertexArray),this.gl.deleteProgram(this.program)}findUniformLocations(){let e=this.gl,t=this.program;return{worldSize:e.getUniformLocation(t,`u_worldSize`),targetSize:e.getUniformLocation(t,`u_targetSize`),quadRadius:e.getUniformLocation(t,`u_quadRadius`),beamHalfWidth:e.getUniformLocation(t,`u_beamHalfWidth`),glowRadius:e.getUniformLocation(t,`u_glowRadius`),glowStrength:e.getUniformLocation(t,`u_glowStrength`),endpointBrightness:e.getUniformLocation(t,`u_endpointBrightness`),jointOverlap:e.getUniformLocation(t,`u_jointOverlap`)}}createSegmentVertexArray(){let e=this.gl,t=e.createVertexArray(),n=14*f;e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,this.segmentBuffer);for(let t of p)e.enableVertexAttribArray(t.location),e.vertexAttribPointer(t.location,t.size,e.FLOAT,!1,n,t.floatOffset*f),e.vertexAttribDivisor(t.location,1);return e.bindVertexArray(null),t}uploadSegmentData(e){let t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.segmentBuffer),e.byteLength>this.segmentBufferCapacityBytes&&(this.segmentBufferCapacityBytes=e.byteLength*2,t.bufferData(t.ARRAY_BUFFER,this.segmentBufferCapacityBytes,t.DYNAMIC_DRAW)),t.bufferSubData(t.ARRAY_BUFFER,0,e)}applyUniforms(){let e=this.gl,{beamWidth:t,glowRadius:n,glowStrength:r,endpointBrightness:i,jointOverlap:a}=this.lineStyle,o=t/2;e.uniform2f(this.uniforms.worldSize,this.worldSize.width,this.worldSize.height),e.uniform2f(this.uniforms.targetSize,e.drawingBufferWidth,e.drawingBufferHeight),e.uniform1f(this.uniforms.quadRadius,o+n*m+1),e.uniform1f(this.uniforms.beamHalfWidth,o),e.uniform1f(this.uniforms.glowRadius,n),e.uniform1f(this.uniforms.glowStrength,r),e.uniform1f(this.uniforms.endpointBrightness,i),e.uniform1f(this.uniforms.jointOverlap,a)}},g=`#version 300 es
precision highp float;
uniform sampler2D u_previousFrame;
uniform sampler2D u_currentBeams;
uniform float u_decay;
uniform float u_decayFloor;
in vec2 v_textureCoordinate;
out vec4 outColor;
void main() {
    vec3 fadedTrail = max(texture(u_previousFrame, v_textureCoordinate).rgb * u_decay - u_decayFloor, 0.0);
    vec3 currentBeams = texture(u_currentBeams, v_textureCoordinate).rgb;
    outColor = vec4(max(fadedTrail, currentBeams), 1.0);
}
`,_=`#version 300 es
precision highp float;
uniform sampler2D u_source;
uniform vec2 u_texelStep;
in vec2 v_textureCoordinate;
out vec4 outColor;
void main() {
    vec3 color = texture(u_source, v_textureCoordinate).rgb * 0.2270270270;
    color += texture(u_source, v_textureCoordinate + u_texelStep * 1.3846153846).rgb * 0.3162162162;
    color += texture(u_source, v_textureCoordinate - u_texelStep * 1.3846153846).rgb * 0.3162162162;
    color += texture(u_source, v_textureCoordinate + u_texelStep * 3.2307692308).rgb * 0.0702702703;
    color += texture(u_source, v_textureCoordinate - u_texelStep * 3.2307692308).rgb * 0.0702702703;
    outColor = vec4(color, 1.0);
}
`,v=`#version 300 es
precision highp float;
uniform sampler2D u_phosphor;
uniform sampler2D u_bloom;
uniform float u_bloomStrength;
uniform float u_exposure;
uniform float u_flickerBrightness;
in vec2 v_textureCoordinate;
out vec4 outColor;
void main() {
    vec3 color = texture(u_phosphor, v_textureCoordinate).rgb
        + texture(u_bloom, v_textureCoordinate).rgb * u_bloomStrength;
    // Flicker scales the tone-mapped result, so its depth matches what the viewer sees.
    outColor = vec4((1.0 - exp(-color * u_exposure)) * u_flickerBrightness, 1.0);
}
`,y=class{randomSource;millisecondsIntoPeriod=0;startLevel;targetLevel;constructor(e=Math.random){this.randomSource=e,this.startLevel=e(),this.targetLevel=e()}advance(e,t){if(t<=0)return this.startLevel;let n=1e3/t;for(this.millisecondsIntoPeriod+=Math.max(e,0);this.millisecondsIntoPeriod>=n;)this.millisecondsIntoPeriod-=n,this.startLevel=this.targetLevel,this.targetLevel=this.randomSource();let r=this.millisecondsIntoPeriod/n,i=r*r*(3-2*r);return this.startLevel+(this.targetLevel-this.startLevel)*i}},b=`#version 300 es
out vec2 v_textureCoordinate;
void main() {
    vec2 position = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
    v_textureCoordinate = position;
    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}
`,x=class{program;gl;emptyVertexArray;uniformLocations=new Map;constructor(e,t){this.gl=e,this.program=l(e,{vertexSource:b,fragmentSource:t}),this.emptyVertexArray=e.createVertexArray()}use(){this.gl.useProgram(this.program)}getUniformLocation(e){return this.uniformLocations.has(e)||this.uniformLocations.set(e,this.gl.getUniformLocation(this.program,e)),this.uniformLocations.get(e)??null}draw(){let e=this.gl;e.bindVertexArray(this.emptyVertexArray),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null)}dispose(){this.gl.deleteVertexArray(this.emptyVertexArray),this.gl.deleteProgram(this.program)}},S=class{texture;framebuffer;width;height;gl;constructor(e,t){this.gl=e,this.width=t.width,this.height=t.height,this.texture=C(e,t),this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}bindForDrawing(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}dispose(){this.gl.deleteFramebuffer(this.framebuffer),this.gl.deleteTexture(this.texture)}};function C(e,t){let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);let r=t.usesFloatStorage?e.RGBA16F:e.RGBA8,i=t.usesFloatStorage?e.HALF_FLOAT:e.UNSIGNED_BYTE;return e.texImage2D(e.TEXTURE_2D,0,r,t.width,t.height,0,e.RGBA,i,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),n}var w={persistenceHalfLifeMilliseconds:40,bloomStrength:1.2,bloomBlurIterations:2,exposure:1.6,flickerAmount:.08,flickerFrequencyHz:15},T=100,E=1.5/255,D=class{gl;renderer;usesFloatStorage;persistencePass;blurPass;compositePass;flickerGenerator=new y;settings=w;latestPhosphor=null;scratchPhosphor=null;currentBeams=null;bloomTargets=null;constructor(e,t={}){this.renderer=e,this.gl=e.gl,this.usesFloatStorage=this.gl.getExtension(`EXT_color_buffer_float`)!==null,this.persistencePass=new x(this.gl,g),this.blurPass=new x(this.gl,_),this.compositePass=new x(this.gl,v),this.setSettings(t)}get isUsingFloatStorage(){return this.usesFloatStorage}setSettings(e){this.settings={...this.settings,...e}}renderFrame(e,t){let n=Math.min(Math.max(t,0),T);this.resizeTargetsToDrawingBuffer(),this.drawBeamsIntoCurrentFrame(e),this.combineWithFadedPreviousFrame(n),this.blurIntoBloom(),this.compositeToCanvas(this.calculateFlickerBrightness(n))}dispose(){this.disposeTargets(),this.persistencePass.dispose(),this.blurPass.dispose(),this.compositePass.dispose()}resizeTargetsToDrawingBuffer(){let e=this.gl.drawingBufferWidth,t=this.gl.drawingBufferHeight;if(this.latestPhosphor?.width===e&&this.latestPhosphor.height===t)return;this.disposeTargets(),this.latestPhosphor=this.createTarget({width:e,height:t}),this.scratchPhosphor=this.createTarget({width:e,height:t}),this.currentBeams=this.createTarget({width:e,height:t});let n={width:Math.max(1,e>>1),height:Math.max(1,t>>1)};this.bloomTargets=[this.createTarget(n),this.createTarget(n)]}createTarget(e){return new S(this.gl,{...e,usesFloatStorage:this.usesFloatStorage})}drawBeamsIntoCurrentFrame(e){let t=this.gl;this.currentBeams.bindForDrawing(),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),this.renderer.drawDisplayList(e)}combineWithFadedPreviousFrame(e){let t=this.gl,n=this.latestPhosphor,r=this.scratchPhosphor,i=.5**(e/this.settings.persistenceHalfLifeMilliseconds);r.bindForDrawing(),t.disable(t.BLEND),this.persistencePass.use(),this.bindTexture(n.texture,0),this.bindTexture(this.currentBeams.texture,1),t.uniform1i(this.persistencePass.getUniformLocation(`u_previousFrame`),0),t.uniform1i(this.persistencePass.getUniformLocation(`u_currentBeams`),1),t.uniform1f(this.persistencePass.getUniformLocation(`u_decay`),i),t.uniform1f(this.persistencePass.getUniformLocation(`u_decayFloor`),this.usesFloatStorage?0:E),this.persistencePass.draw(),this.bindTexture(null,1),this.latestPhosphor=r,this.scratchPhosphor=n}blurIntoBloom(){let e=this.gl,[t,n]=this.bloomTargets;e.disable(e.BLEND),this.blurPass.use(),e.uniform1i(this.blurPass.getUniformLocation(`u_source`),0);let r=this.latestPhosphor.texture;for(let e=0;e<this.settings.bloomBlurIterations;e++)this.runBlurStep(r,{target:t,isHorizontal:!0}),this.runBlurStep(t.texture,{target:n,isHorizontal:!1}),r=n.texture}runBlurStep(e,t){let{target:n,isHorizontal:r}=t;n.bindForDrawing(),this.bindTexture(e,0);let i=r?1/n.width:0,a=r?0:1/n.height;this.gl.uniform2f(this.blurPass.getUniformLocation(`u_texelStep`),i,a),this.blurPass.draw()}calculateFlickerBrightness(e){let t=this.flickerGenerator.advance(e,this.settings.flickerFrequencyHz);return 1-Math.min(Math.max(this.settings.flickerAmount,0),1)*t}compositeToCanvas(e){let t=this.gl,n=this.settings.bloomBlurIterations>0;t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.disable(t.BLEND),this.compositePass.use(),this.bindTexture(this.latestPhosphor.texture,0),this.bindTexture(this.bloomTargets[1].texture,1),t.uniform1i(this.compositePass.getUniformLocation(`u_phosphor`),0),t.uniform1i(this.compositePass.getUniformLocation(`u_bloom`),1),t.uniform1f(this.compositePass.getUniformLocation(`u_bloomStrength`),n?this.settings.bloomStrength:0),t.uniform1f(this.compositePass.getUniformLocation(`u_exposure`),this.settings.exposure),t.uniform1f(this.compositePass.getUniformLocation(`u_flickerBrightness`),e),this.compositePass.draw(),this.bindTexture(null,1),this.bindTexture(null,0)}bindTexture(e,t){this.gl.activeTexture(this.gl.TEXTURE0+t),this.gl.bindTexture(this.gl.TEXTURE_2D,e)}disposeTargets(){this.latestPhosphor?.dispose(),this.scratchPhosphor?.dispose(),this.currentBeams?.dispose(),this.bloomTargets?.forEach(e=>e.dispose()),this.latestPhosphor=null,this.scratchPhosphor=null,this.currentBeams=null,this.bloomTargets=null}};export{e as i,h as n,o as r,D as t};