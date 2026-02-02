import{j as o,r as s}from"./iframe-CHw8J55U.js";import{B as i}from"./chunk-EPOLDU6W-DfNyGYEq.js";import"./axiosClient-Bc8sZMcD.js";import{u as a}from"./transactionsStore-ddlRNO1M.js";import{T as c}from"./TransactionPage-BLZJ1afF.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BXYZ62A8.js";import"./Button-DNTAG_4-.js";import"./index-DutoEiXV.js";import"./IconBase.esm-kkY_nQzP.js";import"./ArrowRight.esm-oNUXcswC.js";import"./TransactionModal-jSVa_GEA.js";import"./categoriesStore-Xzf3u5qT.js";import"./frequenciesStore-BqyoDQbk.js";import"./InputField-6oCaWKDB.js";import"./Label-l3e5gGR6.js";import"./StatusMessage-BMMT4Zjg.js";import"./Modal-CIuYJ4PG.js";import"./index-BhAVPhff.js";import"./index-D8FCi3y2.js";import"./Select-BHI-NHNr.js";import"./ActionMenu-C5wy5t3I.js";import"./IconBase.es-DD6kQFDx.js";import"./TransactionDeleteModal-2AhZ8XHz.js";import"./Trash.esm-BCUeJfZv.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const $=["WithData"];export{t as WithData,$ as __namedExportsOrder,_ as default};
