/*
 * &#x9F20;&#x6807;&#x70B9;&#x51FB;&#x7279;&#x6548;&#xFF0C;canvas&#x70B9;&#x51FB;&#x6548;&#x679C;&#xFF0C;&#x7B2C;&#x4E8C;&#x7248;
 * &#x539F;&#x6587;&#x5730;&#x5740;&#xFF1A;https://www.iowen.cn/canvas-click-effect-second-edition
 */

/* Copyright (C) 2013 Justin Windle sketch.min.js, http://soulwire.co.uk */
var Sketch=function(){&quot;use strict&quot;;function e(e){return&quot;[object Array]&quot;==Object.prototype.toString.call(e)}function t(e){return&quot;function&quot;==typeof e}function n(e){return&quot;number&quot;==typeof e}function o(e){return&quot;string&quot;==typeof e}function r(e){return E[e]||String.fromCharCode(e)}function i(e,t,n){for(var o in t)(n||!e.hasOwnProperty(o))&amp;&amp;(e[o]=t[o]);return e}function u(e,t){return function(){e.apply(t,arguments)}}function a(e){var n={};for(var o in e)n[o]=t(e[o])?u(e[o],e):e[o];return n}function c(e){function n(n){t(n)&amp;&amp;n.apply(e,[].splice.call(arguments,1))}function u(e){for(_=0;_<J.length;_++)G=J[_],o(G)?O[(e?"add":"remove")+"EventListener"].call(O,G,k,!1):t(G)?k=G:O=G}function c(){l(t),t="I(c),U||(n(e.setup),U=t(e.setup),n(e.resize)),e.running&amp;&amp;!j&amp;&amp;(e.dt=(B=+new" date)-e.now,e.millis+="e.dt,e.now=B,n(e.update),e.autoclear&amp;&amp;K&amp;&amp;e.clear(),n(e.draw)),j=++j%e.interval}function" l(){o="Y?e.style:e.canvas,D=Y?&quot;px&quot;:&quot;&quot;,e.fullscreen&amp;&amp;(e.height=w.innerHeight,e.width=w.innerWidth),O.height=e.height+D,O.width=e.width+D,e.retina&amp;&amp;K&amp;&amp;X&amp;&amp;(O.height=e.height*X,O.width=e.width*X,O.style.height=e.height+&quot;px&quot;,O.style.width=e.width+&quot;px&quot;,e.scale(X,X)),U&amp;&amp;n(e.resize)}function" s(e,t){return n="t.getBoundingClientRect(),e.x=e.pageX-N.left-w.scrollX,e.y=e.pageY-N.top-w.scrollY,e}function" f(t,n){return s(t,e.element),n="n||{},n.ox=n.x||t.x,n.oy=n.y||t.y,n.x=t.x,n.y=t.y,n.dx=n.x-n.ox,n.dy=n.y-n.oy,n}function" g(e){if(e.preventdefault(),w="a(e),W.originalEvent=e,W.touches)for(M.length=W.touches.length,_=0;_&lt;W.touches.length;_++)M[_]=f(W.touches[_],M[_]);else" m.length="0,M[0]=f(W,V);return" i(v,m[0],!0),w}function h(t){for(t="g(t),q=(Q=J.indexOf(z=t.type))-1,e.dragging=/down|start/.test(z)?!0:/up|end/.test(z)?!1:e.dragging;q;)o(J[q])?n(e[J[q--]],t):o(J[Q])?n(e[J[Q++]],t):q=0}function" p(t){f="t.keyCode,H=&quot;keyup&quot;==t.type,Z[F]=Z[r(F)]=!H,n(e[t.type],t)}function" v(t){e.autopause&&("blur"="=t.type?b:C)(),n(e[t.type],t)}function" c(){e.now="+new" date,e.running="!0}function" b(){e.running="!1}function" p(){(e.running?b:c)()}function a(){k&&e.clearrect(0,0,e.width,e.height)}function s(){r="e.element.parentNode,_=x.indexOf(e),R&amp;&amp;R.removeChild(e.element),~_&amp;&amp;x.splice(_,1),u(!1),b()}var" t,k,o,r,n,_,d,b,g,w,z,f,h,q,q,j="0,M=[],U=!1,X=w.devicePixelRatio,Y=e.type==m,K=e.type==d,V={x:0,y:0,ox:0,oy:0,dx:0,dy:0},J=[e.element,h,&quot;mousedown&quot;,&quot;touchstart&quot;,h,&quot;mousemove&quot;,&quot;touchmove&quot;,h,&quot;mouseup&quot;,&quot;touchend&quot;,h,&quot;click&quot;,y,p,&quot;keydown&quot;,&quot;keyup&quot;,w,v,&quot;focus&quot;,&quot;blur&quot;,l,&quot;resize&quot;],Z={};for(F" in e)z[e[f]]="!1;return" i(e,{touches:m,mouse:v,keys:z,dragging:!1,running:!1,millis:0,now:0 0,dt:0 0,destroy:s,toggle:p,clear:a,start:c,stop:b}),x.push(e),e.autostart&&c(),u(!0),l(),c(),e}for(var l,s,f="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min" .split(" "),g="__hasSketch" ,h="Math,d=&quot;canvas&quot;,p=&quot;webgl&quot;,m=&quot;dom&quot;,y=document,w=window,x=[],v={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:y.body,interval:1,globals:!0,retina:!1,type:d},E={8:&quot;BACKSPACE&quot;,9:&quot;TAB&quot;,13:&quot;ENTER&quot;,16:&quot;SHIFT&quot;,27:&quot;ESCAPE&quot;,32:&quot;SPACE&quot;,37:&quot;LEFT&quot;,38:&quot;UP&quot;,39:&quot;RIGHT&quot;,40:&quot;DOWN&quot;},C={CANVAS:d,WEB_GL:p,WEBGL:p,DOM:m,instances:x,install:function(t){if(!t[g]){for(var" o="0;o&lt;f.length;o++)t[f[o]]=h[f[o]];i(t,{TWO_PI:2*h.PI,HALF_PI:h.PI/2,QUATER_PI:h.PI/4,random:function(t,o){return" e(t)?t[~~(h.random()*t.length)]:(n(o)||(o="t||1,t=0),t+h.random()*(o-t))},lerp:function(e,t,n){return" e+n*(t-e)},map:function(e,t,n,o,r){return(e-t) (n-t)*(r-o)+o}}),t[g]="!0}},create:function(e){return" e="i(e||{},v),e.globals&amp;&amp;C.install(self),l=e.element=e.element||y.createElement(e.type===m?&quot;div&quot;:&quot;canvas&quot;),s=e.context=e.context||function(){switch(e.type){case" d:return l.getcontext("2d",e);case p:return l.getcontext("webgl",e)||l.getcontext("experimental-webgl",e);case m:return l.canvas="l}}(),e.container.appendChild(l),C.augment(s,e)},augment:function(e,t){return" t="i(t||{},v),t.element=e.canvas||e,t.element.className+=&quot;" sketch",i(e,t,!0),c(e)}},b="[&quot;ms&quot;,&quot;moz&quot;,&quot;webkit&quot;,&quot;o&quot;],P=self,A=0,S=&quot;AnimationFrame&quot;,T=&quot;request&quot;+S,k=&quot;cancel&quot;+S,I=P[T],L=P[k],O=0;O&lt;b.length&amp;&amp;!I;O++)I=P[b[O]+&quot;Request&quot;+S],L=P[b[O]+&quot;Cancel&quot;+T];return" p[t]="I=I||function(e){var" date,n="h.max(0,16-(t-A)),o=setTimeout(function(){e(t+n)},n);return" a="t+n,o},P[k]=L=L||function(e){clearTimeout(e)},C}();" --- if(document.getelementbyid("clickcanvas")) { function particle(x, y, radius) this.init(x, radius); } particle.prototype="{" init : function(x, this.alive="true;" this.radius="radius" || 10; this.wander="0.15;" this.theta="random(TWO_PI);" this.drag="0.92;" this.color="#ffeb3b" ; this.x="x" 0.0; this.y="y" this.vx="0.0;" this.vy="0.0;" }, move function() +="this.vx;" *="this.drag;" 0.5) this.wander; 0.1;> 0.5;
        },
        draw : function(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
    var MAX_PARTICLES = 50;
    //&#x5706;&#x70B9;&#x989C;&#x8272;&#x5E93;
    var COLOURS = [ &quot;#5ee4ff&quot;, &quot;#f44033&quot;, &quot;#ffeb3b&quot;, &quot;#F38630&quot;, &quot;#FA6900&quot;, &quot;#f403e8&quot;, &quot;#F9D423&quot; ];
    var particles = [];
    var pool = [];
    var clickparticle = Sketch.create({
        container : document.getElementById(&apos;clickCanvas&apos;)
    });
    clickparticle.spawn = function(x, y) {
        if (particles.length &gt;= MAX_PARTICLES)
            pool.push(particles.shift());
        particle = pool.length ? pool.pop() : new Particle();
        particle.init(x, y, random(5, 20));//&#x5706;&#x70B9;&#x5927;&#x5C0F;&#x8303;&#x56F4;
        particle.wander = random(0.5, 2.0);
        particle.color = random(COLOURS);
        particle.drag = random(0.9, 0.99);
        theta = random(TWO_PI);
        force = random(1, 5);
        particle.vx = sin(theta) * force;
        particle.vy = cos(theta) * force;
        particles.push(particle);
    };
    clickparticle.update = function() {
        var i, particle;
        for (i = particles.length - 1; i &gt;= 0; i--) {
            particle = particles[i];
            if (particle.alive)
                particle.move();
            else
                pool.push(particles.splice(i, 1)[0]);
        }
    };
    clickparticle.draw = function() {
        clickparticle.globalCompositeOperation = &apos;lighter&apos;;
        for ( var i = particles.length - 1; i &gt;= 0; i--) {
            particles[i].draw(clickparticle);
        }
    };
    //&#x6309;&#x4E0B;&#x65F6;&#x663E;&#x793A;&#x6548;&#x679C;&#xFF0C;mousedown &#x6362;&#x6210; click &#x4E3A;&#x70B9;&#x51FB;&#x65F6;&#x663E;&#x793A;&#x6548;&#x679C;&#xFF08;&#x6211;&#x7528;&#x7684; click&#xFF09;
    document.addEventListener(&quot;mousedown&quot;, function(e) {
        var max, j;
        //&#x6392;&#x9664;&#x4E00;&#x4E9B;&#x5143;&#x7D20;
        &quot;TEXTAREA&quot; !== e.target.nodeName &amp;&amp; &quot;INPUT&quot; !== e.target.nodeName &amp;&amp; &quot;A&quot; !== e.target.nodeName &amp;&amp; &quot;I&quot; !== e.target.nodeName &amp;&amp; &quot;IMG&quot; !== e.target.nodeName 
        &amp;&amp; function() {
            for (max = random(15, 20), j = 0; j &lt; max; j++) 
            clickparticle.spawn(e.clientX, e.clientY);
        }();
    });
}</J.length;_++)G=J[_],o(G)?O[(e?"add":"remove")+"EventListener"].call(O,G,k,!1):t(G)?k=G:O=G}function>