import{j as o,r as s}from"./iframe-BB7YAlAK.js";import{B as i}from"./chunk-EPOLDU6W-6Sg3vwAS.js";import"./axiosClient-BpvbIuJm.js";import{u as a}from"./transactionsStore-dVDxPon8.js";import{T as l}from"./TransactionPage-DOWy8F7c.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-nc9RG3Xq.js";import"./IconBase.es-BbTMmfjF.js";import"./ArrowRight.es-OF9T5Oiy.js";import"./Button-C4OQ7nqJ.js";import"./index-DutoEiXV.js";import"./TransactionModal-BW-8kl4K.js";import"./Pencil.es-BYZXYXj0.js";import"./InputField-C8DHpFx6.js";import"./Label-C7B4-qYD.js";import"./StatusMessage-CosMWZGv.js";import"./Modal-CtADKRNW.js";import"./index-Cc8MVekQ.js";import"./index-Cl6JfnEV.js";import"./Select-C2BdlzKV.js";import"./schemas-B2kv05dX.js";import"./coerce-SrOr7Izu.js";import"./frequenciesStore-Cq5yb2BM.js";import"./ActionMenu-b8a0KIw3.js";import"./TransactionDeleteModal-Dy-vQAUb.js";import"./Trash.es-tdptdyZy.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const W=["WithData"];export{t as WithData,W as __namedExportsOrder,C as default};
