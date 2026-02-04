import{j as o,r as s}from"./iframe-Dd-nbwru.js";import{B as i}from"./chunk-EPOLDU6W-BfsYuKN6.js";import"./axiosClient-BAM0SWAE.js";import{u as a}from"./transactionsStore-DTvxJXbt.js";import{T as l}from"./TransactionPage-BuzjH1T_.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BK0wOYPw.js";import"./IconBase.es-DdxgksDR.js";import"./ArrowRight.es-2WLZ_jcI.js";import"./Button-DXcG7rAU.js";import"./index-DutoEiXV.js";import"./TransactionModal-B4cJfpkd.js";import"./Pencil.es-BfLgAQnZ.js";import"./InputField-gELhi7iS.js";import"./Label-DVMbd9pU.js";import"./StatusMessage-DvL9cZ_r.js";import"./Modal-Byl9W_i3.js";import"./index-Dd-br2hm.js";import"./index-B6aytuSy.js";import"./Select-BnVkSwuA.js";import"./schemas-zj2VaNMA.js";import"./coerce-BihYJr3j.js";import"./frequenciesStore-C8b7rZAF.js";import"./ActionMenu-t-XyoYiJ.js";import"./TransactionDeleteModal-CU9l2Bkk.js";import"./Trash.es-DmSFYlLB.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
