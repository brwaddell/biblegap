import{t as e}from"./react.OrosJ8bI.js";import{t}from"./jsx-runtime.nXxWeNsr.js";var n=e(),r=t(),i={android:`Please notify me when BibleGap is available for Android.`,waitlist:`Please add our family to the waitlist. We would love early access when BibleGap launches.`,support:``};function a(e){if(typeof window>`u`)return e;let t=new URLSearchParams(window.location.search).get(`intent`);return t===`android`||t===`waitlist`||t===`support`?t:e}function o({intent:e=`support`}){let[t,o]=(0,n.useState)(e),[s,c]=(0,n.useState)(``),[l,u]=(0,n.useState)(``),[d,f]=(0,n.useState)(i[e]),[p,m]=(0,n.useState)(``),[h]=(0,n.useState)(()=>Date.now()),[g,_]=(0,n.useState)(`idle`),[v,y]=(0,n.useState)(null);(0,n.useEffect)(()=>{let t=a(e);o(t),f(n=>n===i[e]?i[t]:n)},[e]);async function b(e){e.preventDefault(),y(null);let n=s.trim(),r=l.trim(),i=d.trim();if(!n||n.length<2){y(`Please enter your name (at least 2 characters).`);return}if(!r||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){y(`Please enter a valid email address.`);return}if(!i||i.length<3){y(`Please enter a short message or note.`);return}_(`sending`);try{let e=await fetch(`/api/support`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:n,email:r,message:i,intent:t,website:p,renderedAt:h})}),a=await e.json();if(!e.ok||!a.ok){_(`error`),y(a.error||`Something went wrong. Please try again.`);return}_(`success`)}catch{_(`error`),y(`Something went wrong. Please try again or email help@biblegap.com.`)}}return g===`success`?(0,r.jsxs)(`div`,{className:`form-success`,role:`status`,children:[(0,r.jsx)(`h2`,{children:t===`android`?`You’re on the Android waitlist`:t===`waitlist`?`You’re on the list`:`Message sent`}),(0,r.jsx)(`p`,{children:t===`android`?`Thanks for your interest in BibleGap for Android. We’re actively developing it and will notify you as soon as it launches!`:t===`waitlist`?`Thanks for joining the waitlist. We’ll email you when BibleGap is ready.`:`Thanks — our team will get back to you at the email you provided.`})]}):(0,r.jsxs)(`form`,{className:`support-form`,onSubmit:b,noValidate:!0,children:[(0,r.jsx)(`input`,{type:`text`,name:`website`,value:p,onChange:e=>m(e.target.value),tabIndex:-1,autoComplete:`off`,"aria-hidden":`true`,className:`hp`}),(0,r.jsxs)(`label`,{children:[(0,r.jsx)(`span`,{children:`Name`}),(0,r.jsx)(`input`,{type:`text`,name:`name`,value:s,onChange:e=>c(e.target.value),required:!0,maxLength:120,autoComplete:`name`})]}),(0,r.jsxs)(`label`,{children:[(0,r.jsx)(`span`,{children:`Email`}),(0,r.jsx)(`input`,{type:`email`,name:`email`,value:l,onChange:e=>u(e.target.value),required:!0,maxLength:200,autoComplete:`email`})]}),(0,r.jsxs)(`label`,{children:[(0,r.jsx)(`span`,{children:t===`android`?`Note (optional)`:t===`waitlist`?`Anything we should know?`:`How can we help?`}),(0,r.jsx)(`textarea`,{name:`message`,value:d,onChange:e=>f(e.target.value),required:!0,rows:5,maxLength:4e3})]}),v?(0,r.jsx)(`p`,{className:`form-error`,role:`alert`,children:v}):null,(0,r.jsx)(`button`,{type:`submit`,className:`btn btn-primary`,disabled:g===`sending`,children:g===`sending`?`Sending…`:t===`android`?`Notify me for Android`:t===`waitlist`?`Join the waitlist`:`Send message`}),(0,r.jsxs)(`p`,{className:`form-note`,children:[`Messages go to `,(0,r.jsx)(`a`,{href:`mailto:help@biblegap.com`,children:`help@biblegap.com`}),`.`]}),(0,r.jsx)(`style`,{children:`
        .support-form {
          display: grid;
          gap: 1rem;
          max-width: 32rem;
        }
        .support-form label {
          display: grid;
          gap: 0.4rem;
          font-weight: 600;
          color: #1a1c1e;
        }
        .support-form span {
          font-size: 0.92rem;
        }
        .support-form input,
        .support-form textarea {
          width: 100%;
          border: 1.5px solid rgba(95,143,122,0.28);
          border-radius: 12px;
          padding: 0.75rem 0.9rem;
          font: inherit;
          font-weight: 400;
          background: rgba(255,255,255,0.9);
          color: #1a1c1e;
        }
        .support-form input:focus,
        .support-form textarea:focus {
          outline: 2px solid #4a9b8e;
          outline-offset: 1px;
        }
        .support-form textarea {
          resize: vertical;
          min-height: 8rem;
        }
        .hp {
          position: absolute !important;
          left: -9999px !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
        }
        .form-error {
          margin: 0;
          color: #ba1a1a;
          font-weight: 600;
        }
        .form-note {
          margin: 0;
          color: #505459;
          font-size: 0.9rem;
        }
        .form-success {
          padding: 1.4rem 1.3rem;
          border-radius: 16px;
          background: rgba(217, 232, 225, 0.7);
          border: 1px solid rgba(95,143,122,0.25);
          max-width: 32rem;
        }
        .form-success h2 {
          margin: 0 0 0.5rem;
          font-family: Fraunces, Georgia, serif;
          font-size: 1.6rem;
        }
        .form-success p {
          margin: 0;
          color: #345a4a;
        }
        .support-form .btn:disabled {
          opacity: 0.7;
          cursor: wait;
        }
      `})]})}export{o as default};