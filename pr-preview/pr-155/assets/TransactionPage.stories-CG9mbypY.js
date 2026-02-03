import{j as o,r as s}from"./iframe-7Am27jV4.js";import{B as i}from"./chunk-EPOLDU6W-D6HtTvqy.js";import"./axiosClient-64ck0Mq6.js";import{u as a}from"./transactionsStore-BsXpjJYK.js";import{T as c}from"./TransactionPage-CT5myYtw.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-COBh5Ql-.js";import"./IconBase.es-bumKc4aN.js";import"./ArrowRight.es-O8UTCL0v.js";import"./Button-H5ZKbaJO.js";import"./index-DutoEiXV.js";import"./TransactionModal-BMt8vTR8.js";import"./Pencil.es-zbCCt2YG.js";import"./schemas-Dun8JLbt.js";import"./coerce-B3xLU2Qr.js";import"./frequenciesStore-DlDOxZg9.js";import"./InputField-a4XZFb7h.js";import"./Label-Cz9D9rp6.js";import"./StatusMessage-CMtHFAqo.js";import"./Modal-DTBli7gL.js";import"./index-B___PDUF.js";import"./index-CDAfOyJf.js";import"./Select-CwX3uvcF.js";import"./ActionMenu-C5CenRNl.js";import"./TransactionDeleteModal-DeENnF2D.js";import"./Trash.es-DhNr1Y9P.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
