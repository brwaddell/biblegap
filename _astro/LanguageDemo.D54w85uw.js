import{t as e}from"./react.OrosJ8bI.js";import{t}from"./jsx-runtime.nXxWeNsr.js";import{t as n}from"./LottiePlayer.CwtXfpTs.js";var r=e(),i={v:`5.7.4`,fr:30,ip:0,op:90,w:160,h:160,nm:`Languages Orbit`,ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:`Globe`,sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{t:0,s:[0],e:[360]},{t:90,s:[360]}]},p:{a:0,k:[80,80,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:`el`,p:{a:0,k:[0,0]},s:{a:0,k:[78,78]}},{ty:`st`,c:{a:0,k:[.37,.56,.48,1]},o:{a:0,k:100},w:{a:0,k:5},lc:2,lj:1},{ty:`el`,p:{a:0,k:[0,0]},s:{a:0,k:[42,78]}},{ty:`st`,c:{a:0,k:[.61,.29,.56,1]},o:{a:0,k:80},w:{a:0,k:3},lc:2,lj:1}],ip:0,op:90,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:`Orbit Dot`,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:1,k:[{t:0,s:[80,28,0],e:[132,80,0]},{t:22,s:[132,80,0],e:[80,132,0]},{t:45,s:[80,132,0],e:[28,80,0]},{t:67,s:[28,80,0],e:[80,28,0]},{t:90,s:[80,28,0]}]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:`el`,p:{a:0,k:[0,0]},s:{a:0,k:[18,18]}},{ty:`fl`,c:{a:0,k:[.94,.7,.35,1]},o:{a:0,k:100},r:1}],ip:0,op:90,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:`Center`,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[80,80,0]},a:{a:0,k:[0,0,0]},s:{a:1,k:[{t:0,s:[90,90,100],e:[110,110,100]},{t:45,s:[110,110,100],e:[90,90,100]},{t:90,s:[90,90,100]}]}},ao:0,shapes:[{ty:`el`,p:{a:0,k:[0,0]},s:{a:0,k:[24,24]}},{ty:`fl`,c:{a:0,k:[.29,.61,.56,1]},o:{a:0,k:100},r:1}],ip:0,op:90,st:0,bm:0}]},a=t(),o=[{code:`en`,label:`English`,text:`Noah built an ark, just as God told him.`},{code:`es`,label:`Español`,text:`Noé construyó un arca, tal como Dios le dijo.`}];function s(){let[e,t]=(0,r.useState)(0),[s,c]=(0,r.useState)(!0),l=o[e];return(0,r.useEffect)(()=>{if(!s)return;let e=window.setInterval(()=>{t(e=>(e+1)%o.length)},2800);return()=>window.clearInterval(e)},[s]),(0,a.jsxs)(`div`,{className:`lang`,children:[(0,a.jsxs)(`div`,{className:`lang__head`,children:[(0,a.jsx)(`div`,{className:`lang__lottie`,children:(0,a.jsx)(n,{animationData:i,ariaLabel:`English and Spanish switching`})}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`lang__eyebrow`,children:`English & Spanish`}),(0,a.jsx)(`h3`,{children:`The same Bible story, in the language of your home`})]})]}),(0,a.jsx)(`div`,{className:`lang__tabs`,role:`tablist`,"aria-label":`Story languages`,children:o.map((n,r)=>(0,a.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===e,className:r===e?`is-active`:void 0,onClick:()=>{c(!1),t(r)},children:n.label},n.code))}),(0,a.jsxs)(`div`,{className:`lang__card`,children:[(0,a.jsx)(`span`,{className:`lang__code`,children:l.code}),(0,a.jsx)(`p`,{children:l.text}),(0,a.jsx)(`div`,{className:`lang__highlight-row`,"aria-hidden":`true`,children:l.text.split(` `).slice(0,5).map((e,t)=>(0,a.jsx)(`span`,{style:{animationDelay:`${t*120}ms`},children:e},`${e}-${t}`))})]},l.code),(0,a.jsx)(`style`,{children:`
        .lang {
          display: grid;
          gap: 1rem;
          height: 100%;
        }
        .lang__head {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 0.85rem;
          align-items: center;
        }
        .lang__lottie {
          width: 72px;
          height: 72px;
        }
        .lang__eyebrow {
          margin: 0 0 0.25rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #9b4a8e;
        }
        .lang h3 {
          margin: 0;
          font-family: Fraunces, Georgia, serif;
          font-size: 1.25rem;
          line-height: 1.25;
        }
        .lang__tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .lang__tabs button {
          border: 1.5px solid rgba(95,143,122,0.25);
          background: rgba(255,255,255,0.75);
          color: #505459;
          border-radius: 999px;
          padding: 0.4rem 0.8rem;
          font: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
        }
        .lang__tabs button.is-active {
          background: #5f8f7a;
          border-color: #5f8f7a;
          color: white;
        }
        .lang__card {
          position: relative;
          padding: 1.2rem 1.15rem 1.1rem;
          border-radius: 16px;
          background: linear-gradient(145deg, #fff, #f3f6f2);
          border: 1px solid rgba(155,74,142,0.18);
          animation: lang-in 0.45s ease both;
        }
        .lang__code {
          position: absolute;
          top: 0.85rem;
          right: 0.95rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9b4a8e;
        }
        .lang__card > p {
          margin: 0 0 0.9rem;
          font-family: Fraunces, Georgia, serif;
          font-size: 1.25rem;
          line-height: 1.5;
          padding-right: 2rem;
        }
        .lang__highlight-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .lang__highlight-row span {
          padding: 0.2rem 0.45rem;
          border-radius: 0.4rem;
          background: rgba(240,180,90,0.28);
          font-size: 0.85rem;
          font-weight: 600;
          color: #345a4a;
          animation: chip-pop 0.4s ease both;
        }
        @keyframes lang-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chip-pop {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `})]})}export{s as default};