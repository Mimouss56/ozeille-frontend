import{O as n}from"./OzeilleLoader-C6SRpxCj.js";import"./iframe-DBGFD7Qf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";const i={title:"UI/OzeilleLoader",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{text:{description:"Texte principal affiché sous le loader",control:"text"},subtext:{description:"Texte secondaire affiché sous le texte principal",control:"text"},fullscreen:{description:"Active le mode plein écran avec position fixe",control:"boolean"}}},e={args:{}},r={args:{text:"Chargement en cours..."}},t={args:{text:"Chargement en cours...",subtext:"Veuillez patienter quelques instants"}},a={args:{fullscreen:!0,text:"Chargement de l'application",subtext:"Préparation de votre espace"},parameters:{layout:"fullscreen"}},s={args:{fullscreen:!0,text:"Chargement de la page..."},parameters:{layout:"fullscreen"}},o={args:{text:"Récupération des données",subtext:"Cela peut prendre quelques secondes"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Chargement en cours..."
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Chargement en cours...",
    subtext: "Veuillez patienter quelques instants"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fullscreen: true,
    text: "Chargement de l'application",
    subtext: "Préparation de votre espace"
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fullscreen: true,
    text: "Chargement de la page..."
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Récupération des données",
    subtext: "Cela peut prendre quelques secondes"
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","WithText","WithTextAndSubtext","Fullscreen","PageLoader","DataLoading"];export{o as DataLoading,e as Default,a as Fullscreen,s as PageLoader,r as WithText,t as WithTextAndSubtext,d as __namedExportsOrder,i as default};
