import{j as e}from"./iframe-B-qyafta.js";import{C as r}from"./ClearAuthRoute-C5ACisHG.js";import"./preload-helper-PPVm8Dsz.js";import"./axiosClient-DxapTp_0.js";const c={title:"Components/ClearAuthRoute",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Composant wrapper qui efface les tokens de session (logout) lors de l'accès à certaines routes spécifiques. Utile pour les pages de login, register, ou reset password."}}}},t={render:()=>e.jsx(r,{children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid #ccc",borderRadius:"8px"},children:[e.jsx("p",{children:"Contenu enfant protégé par ClearAuthRoute"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"#666"},children:"La session utilisateur a été effacée au montage de ce composant."})]})})},n={render:()=>e.jsx(r,{children:e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("h2",{children:"Page de connexion"}),e.jsx("p",{children:"L'utilisateur a été déconnecté automatiquement."})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ClearAuthRoute>
      <div style={{
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px"
    }}>
        <p>Contenu enfant protégé par ClearAuthRoute</p>
        <p style={{
        fontSize: "0.875rem",
        color: "#666"
      }}>
          La session utilisateur a été effacée au montage de ce composant.
        </p>
      </div>
    </ClearAuthRoute>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ClearAuthRoute>
      <div style={{
      textAlign: "center",
      padding: "2rem"
    }}>
        <h2>Page de connexion</h2>
        <p>L&apos;utilisateur a été déconnecté automatiquement.</p>
      </div>
    </ClearAuthRoute>
}`,...n.parameters?.docs?.source}}};const d=["Default","WithCustomContent"];export{t as Default,n as WithCustomContent,d as __namedExportsOrder,c as default};
