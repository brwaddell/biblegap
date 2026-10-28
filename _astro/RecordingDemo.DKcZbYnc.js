import{t as e}from"./react.OrosJ8bI.js";import{t}from"./jsx-runtime.nXxWeNsr.js";import{t as n}from"./LottiePlayer.CwtXfpTs.js";var r=e(),i={v:`5.7.4`,fr:30,ip:0,op:60,w:160,h:160,nm:`Mic Listen`,ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:`Pulse Outer`,sr:1,ks:{o:{a:1,k:[{t:0,s:[50],e:[0]},{t:45,s:[0]}]},r:{a:0,k:0},p:{a:0,k:[80,80,0]},a:{a:0,k:[0,0,0]},s:{a:1,k:[{t:0,s:[70,70,100],e:[130,130,100]},{t:45,s:[130,130,100]}]}},ao:0,shapes:[{ty:`el`,p:{a:0,k:[0,0]},s:{a:0,k:[90,90]}},{ty:`st`,c:{a:0,k:[.29,.61,.56,1]},o:{a:0,k:100},w:{a:0,k:4},lc:2,lj:1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:`Pulse Inner`,sr:1,ks:{o:{a:1,k:[{t:10,s:[45],e:[0]},{t:55,s:[0]}]},r:{a:0,k:0},p:{a:0,k:[80,80,0]},a:{a:0,k:[0,0,0]},s:{a:1,k:[{t:10,s:[70,70,100],e:[115,115,100]},{t:55,s:[115,115,100]}]}},ao:0,shapes:[{ty:`el`,p:{a:0,k:[0,0]},s:{a:0,k:[90,90]}},{ty:`st`,c:{a:0,k:[.94,.7,.35,1]},o:{a:0,k:100},w:{a:0,k:3},lc:2,lj:1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:`Mic Body`,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[80,72,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:`rc`,p:{a:0,k:[0,0]},s:{a:0,k:[28,46]},r:{a:0,k:14}},{ty:`fl`,c:{a:0,k:[.37,.56,.48,1]},o:{a:0,k:100},r:1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:`Mic Stand`,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[80,108,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:`rc`,p:{a:0,k:[0,0]},s:{a:0,k:[8,22]},r:{a:0,k:4}},{ty:`fl`,c:{a:0,k:[.2,.35,.29,1]},o:{a:0,k:100},r:1}],ip:0,op:60,st:0,bm:0}]},a=t(),o=18;function s(){let[e,t]=(0,r.useState)(!0),[s,c]=(0,r.useState)(()=>Array.from({length:o},()=>.2)),[l,u]=(0,r.useState)(`listen`);return(0,r.useEffect)(()=>{if(!e){u(`saved`),c(Array.from({length:o},()=>.15));return}u(`listen`);let t=0,n=window.setInterval(()=>{t+=1,c(Array.from({length:o},(e,n)=>{let r=Math.abs(Math.sin((t+n)*.45))*.75+.2;return Math.min(1,r+(n%3==0?.15:0))}))},140);return()=>window.clearInterval(n)},[e]),(0,a.jsxs)(`div`,{className:`rec`,children:[(0,a.jsxs)(`div`,{className:`rec__top`,children:[(0,a.jsx)(`div`,{className:`rec__lottie`,children:(0,a.jsx)(n,{animationData:i,ariaLabel:`Listen and Compare microphone`})}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`rec__eyebrow`,children:`Listen & Compare`}),(0,a.jsx)(`h3`,{children:`Read a page out loud. Fluency is saved for parents.`})]})]}),(0,a.jsx)(`div`,{className:`rec__wave ${e?`is-live`:``}`,"aria-hidden":`true`,children:s.map((e,t)=>(0,a.jsx)(`span`,{style:{height:`${18+e*54}px`}},t))}),(0,a.jsx)(`p`,{className:`rec__feedback`,"aria-live":`polite`,children:l===`listen`?`Listening… Apple speech recognition compares their words to the page.`:`Practice saved — accuracy appears in the parent fluency report.`}),(0,a.jsx)(`button`,{type:`button`,className:`rec__btn`,onClick:()=>t(e=>!e),children:e?`Stop listening`:`Tap mic & read aloud`}),(0,a.jsx)(`style`,{children:`
        .rec {
          display: grid;
          gap: 1rem;
          height: 100%;
        }
        .rec__top {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 0.85rem;
          align-items: center;
        }
        .rec__lottie {
          width: 72px;
          height: 72px;
        }
        .rec__eyebrow {
          margin: 0 0 0.25rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #4a9b8e;
        }
        .rec h3 {
          margin: 0;
          font-family: Fraunces, Georgia, serif;
          font-size: 1.25rem;
          line-height: 1.25;
        }
        .rec__wave {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 4px;
          min-height: 84px;
          padding: 0.85rem;
          border-radius: 16px;
          background: linear-gradient(180deg, #1e3b31, #345a4a);
        }
        .rec__wave span {
          width: 7px;
          border-radius: 999px;
          background: linear-gradient(180deg, #f0b45a, #aed4c4);
          transition: height 0.12s ease;
        }
        .rec__wave.is-live span {
          animation: pulse-glow 1.2s ease-in-out infinite alternate;
        }
        .rec__feedback {
          margin: 0;
          text-align: center;
          color: #345a4a;
          font-weight: 600;
          min-height: 2.6em;
          font-size: 0.95rem;
          line-height: 1.35;
        }
        .rec__btn {
          justify-self: center;
          border: 0;
          border-radius: 12px;
          padding: 0.7rem 1.1rem;
          background: #4a9b8e;
          color: white;
          font: inherit;
          font-weight: 600;
          cursor: pointer;
        }
        @keyframes pulse-glow {
          from { filter: brightness(1); }
          to { filter: brightness(1.15); }
        }
      `})]})}export{s as default};