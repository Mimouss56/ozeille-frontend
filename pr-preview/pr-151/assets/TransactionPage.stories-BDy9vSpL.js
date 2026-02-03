import{j as o,r as s}from"./iframe-Dn4w2i92.js";import{B as i}from"./chunk-EPOLDU6W-B0-OXADD.js";import"./axiosClient--qblw-DE.js";import{u as a}from"./transactionsStore-DZHfq5d7.js";import{T as c}from"./TransactionPage-C0o3nF4b.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BpcEEuAm.js";import"./IconBase.es-BlhbbgWu.js";import"./ArrowRight.es-DEusccze.js";import"./Button-DcnM1sny.js";import"./index-DutoEiXV.js";import"./TransactionModal-DdKClGtq.js";import"./Pencil.es-CSIhOo-D.js";import"./schemas-uC1pUBOf.js";import"./coerce-BupZkCtC.js";import"./frequenciesStore-vmIuEevr.js";import"./InputField-DGLFEpVB.js";import"./Label-BToajJpF.js";import"./StatusMessage-D9wRbbHn.js";import"./Modal-CTaTw8jy.js";import"./index-BET9kSI0.js";import"./index-Boq-DbWr.js";import"./Select-CfmwxV5v.js";import"./ActionMenu-Dz56Xcrq.js";import"./TransactionDeleteModal-e8as2dvj.js";import"./Trash.es-D7bUczUu.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
