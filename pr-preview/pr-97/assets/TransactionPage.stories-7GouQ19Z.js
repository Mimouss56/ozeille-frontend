import{j as a,r as s}from"./iframe-CAmxBQr_.js";import{B as c}from"./chunk-EPOLDU6W-Dt9X0ubf.js";import{u as o}from"./transactionsStore-CzL1iT2Y.js";import{T as i}from"./TransactionPage-Di7Tzl9r.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CaPhtTTr.js";import"./Button-DzYt55y9.js";import"./index-DutoEiXV.js";import"./IconBase.esm-DHYDqEif.js";import"./ArrowRight.esm-D3gTSxjv.js";import"./TransactionModal-osxij_x1.js";import"./InputField-DKNYKKp-.js";import"./Label-B4cApt5f.js";import"./StatusMessage-RlS8qktq.js";import"./Modal-DOdbmXTI.js";import"./Select-B1D-a03K.js";import"./ActionMenu-B1oChiz5.js";import"./TransactionDeleteModal-DdhMB-MO.js";import"./Trash.esm-Cl9h70h8.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},E={title:"Pages/TransactionPage",component:i,tags:["autodocs"],decorators:[e=>a.jsx(c,{children:a.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(o.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{o.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),a.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useStoreTransactions.setState({
        transactions: fakeTransactions,
        meta: fakeMeta,
        loading: false,
        error: null,
        fetchTransactions: async () => {
          console.log("Mock: fetchTransactions called");
        },
        deleteTransactionById: async id => {
          console.log(\`Mock: deleteTransactionById called for \${id}\`);
        }
      });
      return () => {
        useStoreTransactions.setState({
          transactions: [],
          meta: {} as MetaResponse,
          loading: false,
          error: null
        });
      };
    }, []);
    return <Story />;
  }]
}`,...t.parameters?.docs?.source}}};const P=["WithData"];export{t as WithData,P as __namedExportsOrder,E as default};
