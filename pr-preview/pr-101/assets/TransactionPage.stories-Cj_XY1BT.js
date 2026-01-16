import{j as a,r as s}from"./iframe-CQOemNIH.js";import{B as c}from"./chunk-EPOLDU6W-Crtz1oIt.js";import"./axiosClient-BY6m_Vqv.js";import{u as o}from"./transactionsStore-BXeRixTZ.js";import{T as i}from"./TransactionPage-bD1l0TJp.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Jhl0e_OE.js";import"./Button-D4LvxFpo.js";import"./index-DutoEiXV.js";import"./IconBase.esm-D4NOoi_i.js";import"./ArrowRight.esm-Bx4WPAUK.js";import"./TransactionModal-DTxl9vC7.js";import"./InputField-CmJ3otPP.js";import"./Label-C6ar1Qnh.js";import"./StatusMessage-BLDY4xY9.js";import"./Modal-DasBNINv.js";import"./Select-Dgh9vifX.js";import"./ActionMenu-CD3nObta.js";import"./TransactionDeleteModal-bQsAqFh2.js";import"./Trash.esm-DcUa9eqR.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},P={title:"Pages/TransactionPage",component:i,tags:["autodocs"],decorators:[e=>a.jsx(c,{children:a.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(o.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{o.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),a.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["WithData"];export{t as WithData,D as __namedExportsOrder,P as default};
