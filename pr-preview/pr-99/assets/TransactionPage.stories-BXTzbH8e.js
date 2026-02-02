import{j as o,r as s}from"./iframe-CuRPRNxw.js";import{B as i}from"./chunk-EPOLDU6W-BMlgYMbv.js";import"./axiosClient-CTE_7Qbp.js";import{u as a}from"./transactionsStore-_a1Lk1X8.js";import{T as c}from"./TransactionPage-Bb3Qy72r.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-D9lj8O3X.js";import"./IconBase.es-WdOOseCh.js";import"./ArrowRight.es-CyMQ_TKm.js";import"./Button-DJTMRT58.js";import"./index-DutoEiXV.js";import"./TransactionModal-bokLJZDo.js";import"./Pencil.es-BwepJWJ6.js";import"./schemas-D5K3fSiz.js";import"./coerce-DHb-nNgg.js";import"./frequenciesStore-B_6CjDKw.js";import"./InputField-CW6hgHfc.js";import"./Label-CMbZylUx.js";import"./StatusMessage-LZh20VyD.js";import"./Modal-RlUwkDnL.js";import"./index-BSfX89lj.js";import"./index-BZuzRON4.js";import"./Select-D56pEF3h.js";import"./ActionMenu-CWGolKzS.js";import"./TransactionDeleteModal-BZz1Jk3l.js";import"./Trash.es-DeaIKz2_.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const v=["WithData"];export{t as WithData,v as __namedExportsOrder,$ as default};
