import{t as e}from"./react.OrosJ8bI.js";import{t}from"./jsx-runtime.nXxWeNsr.js";import{t as n}from"./LottiePlayer.CwtXfpTs.js";var r=e(),i={v:`5.7.4`,fr:30,ip:0,op:60,w:200,h:120,nm:`Highlight Words`,ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:`Glow`,sr:1,ks:{o:{a:1,k:[{t:0,s:[40],e:[80]},{t:30,s:[80],e:[40]},{t:60,s:[40]}]},r:{a:0,k:0},p:{a:1,k:[{t:0,s:[40,60,0],e:[160,60,0]},{t:60,s:[160,60,0]}]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:`el`,p:{a:0,k:[0,0]},s:{a:0,k:[46,28]}},{ty:`fl`,c:{a:0,k:[.94,.7,.35,1]},o:{a:0,k:100},r:1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:`Line1`,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[100,42,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:`rc`,p:{a:0,k:[0,0]},s:{a:0,k:[140,10]},r:{a:0,k:6}},{ty:`fl`,c:{a:0,k:[.37,.56,.48,1]},o:{a:0,k:70},r:1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:`Line2`,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[86,70,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:`rc`,p:{a:0,k:[0,0]},s:{a:0,k:[112,10]},r:{a:0,k:6}},{ty:`fl`,c:{a:0,k:[.37,.56,.48,1]},o:{a:0,k:45},r:1}],ip:0,op:60,st:0,bm:0}]},a=t(),o=`In the beginning, God created the heavens and the earth.`.split(` `);function s(){let[e,t]=(0,r.useState)(0),[s,c]=(0,r.useState)(!0);(0,r.useEffect)(()=>{if(!s)return;let e=window.setInterval(()=>{t(e=>(e+1)%o.length)},420);return()=>window.clearInterval(e)},[s]);let l=(0,r.useMemo)(()=>(e+1)/o.length*100,[e]);return(0,a.jsxs)(`div`,{className:`demo`,children:[(0,a.jsxs)(`div`,{className:`demo__chrome`,children:[(0,a.jsx)(`span`,{className:`demo__dot`}),(0,a.jsx)(`span`,{className:`demo__dot`}),(0,a.jsx)(`span`,{className:`demo__dot`}),(0,a.jsx)(`strong`,{children:`Narration highlighting`})]}),(0,a.jsxs)(`div`,{className:`demo__body`,children:[(0,a.jsx)(`div`,{className:`demo__lottie`,"aria-hidden":`true`,children:(0,a.jsx)(n,{animationData:i,ariaLabel:`Words lighting up with narration`})}),(0,a.jsx)(`p`,{className:`demo__story`,"aria-live":`polite`,children:o.map((t,n)=>(0,a.jsxs)(`span`,{className:`word word--${n<e?`done`:n===e?`active`:`next`}`,children:[t,` `]},`${t}-${n}`))}),(0,a.jsx)(`div`,{className:`demo__meter`,"aria-hidden":`true`,children:(0,a.jsx)(`div`,{className:`demo__meter-fill`,style:{width:`${l}%`}})}),(0,a.jsxs)(`div`,{className:`demo__footer`,children:[(0,a.jsxs)(`button`,{type:`button`,className:`demo__btn`,onClick:()=>c(e=>!e),children:[s?`Pause`:`Play`,` narration`]}),(0,a.jsx)(`span`,{children:`Words light up as the story is read aloud to your child.`})]})]}),(0,a.jsx)(`style`,{children:`
        .demo {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .demo__chrome {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #505459;
          font-size: 0.85rem;
        }
        .demo__chrome strong {
          margin-left: 0.4rem;
          color: #1a1c1e;
          font-weight: 600;
        }
        .demo__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d9e8e1;
        }
        .demo__dot:nth-child(1) { background: #e87d3e; }
        .demo__dot:nth-child(2) { background: #f0b45a; }
        .demo__dot:nth-child(3) { background: #4a9b8e; }
        .demo__body {
          flex: 1;
          display: grid;
          gap: 1rem;
          padding: 1.1rem;
          border-radius: 16px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.95), rgba(243,246,242,0.92)),
            radial-gradient(circle at 80% 0%, rgba(240,180,90,0.18), transparent 45%);
          border: 1px solid rgba(95,143,122,0.16);
        }
        .demo__lottie {
          width: 88px;
          height: 64px;
          margin: 0 auto;
        }
        .demo__story {
          margin: 0;
          font-family: Fraunces, Georgia, serif;
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.7;
          text-align: center;
        }
        .word {
          display: inline;
          border-radius: 0.3em;
          padding: 0.05em 0.08em;
          transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
        }
        .word--done {
          background: rgba(95,143,122,0.16);
          color: #345a4a;
        }
        .word--active {
          background: linear-gradient(120deg, #f0b45a, #e8a03e);
          color: #1a1c1e;
          box-shadow: 0 0 0 3px rgba(240,180,90,0.25);
        }
        .word--next {
          color: #505459;
        }
        .demo__meter {
          height: 6px;
          border-radius: 999px;
          background: #e6ece8;
          overflow: hidden;
        }
        .demo__meter-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4a9b8e, #5f8f7a);
          transition: width 0.35s ease;
        }
        .demo__footer {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          justify-content: space-between;
          color: #505459;
          font-size: 0.9rem;
        }
        .demo__btn {
          border: 0;
          border-radius: 10px;
          padding: 0.55rem 0.9rem;
          background: #5f8f7a;
          color: white;
          font: inherit;
          font-weight: 600;
          cursor: pointer;
        }
      `})]})}export{s as default};