import{j as a,r as s}from"./iframe-BU4nNxth.js";import{B as c}from"./chunk-EPOLDU6W-C1iUt3ou.js";import"./axiosClient-C6o_gJyB.js";import{u as o}from"./transactionsStore-BAzkYnmQ.js";import{T as i}from"./TransactionPage-BVlpZizo.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CQCvpmGi.js";import"./Button-Di2FUVMr.js";import"./index-DutoEiXV.js";import"./IconBase.esm-DrrXzMNF.js";import"./ArrowRight.esm-D5bv1BF0.js";import"./TransactionModal-CRJLLBdS.js";import"./InputField-D-6zjQAL.js";import"./Label-DMdZ3whH.js";import"./StatusMessage-_WviPc1Y.js";import"./Modal-DE415ZAf.js";import"./Select-Ptt6_UDb.js";import"./ActionMenu-BZwbH13A.js";import"./TransactionDeleteModal-DHRVlRBf.js";import"./Trash.esm-ORmoDKVi.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},P={title:"Pages/TransactionPage",component:i,tags:["autodocs"],decorators:[e=>a.jsx(c,{children:a.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(o.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{o.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),a.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
