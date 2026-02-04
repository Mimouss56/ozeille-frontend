import{j as o,r as s}from"./iframe-CMb7vl1G.js";import{B as i}from"./chunk-EPOLDU6W-WOPzEzAy.js";import"./axiosClient-BqVNCUit.js";import{u as a}from"./transactionsStore-jUfEBfAg.js";import{T as l}from"./TransactionPage-CUvbjtPz.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CyaJ_EVT.js";import"./IconBase.es-CY4bRwsE.js";import"./ArrowRight.es-D-wLpFOg.js";import"./Button-DkqJcyj4.js";import"./index-DutoEiXV.js";import"./TransactionModal-DqFlgr6R.js";import"./Pencil.es-BsN2jW6r.js";import"./InputField-k0bFD9tM.js";import"./Label-Cv1EUNEk.js";import"./StatusMessage-DQqjqVWB.js";import"./Modal-D_KsGUG8.js";import"./index-B5YzlY5j.js";import"./index-B1HZxQts.js";import"./Select-BraWEP6M.js";import"./schemas-BXO9pZBR.js";import"./coerce-O5gQz3Du.js";import"./frequenciesStore-B_BKIwyc.js";import"./ActionMenu-sSdu0xn_.js";import"./TransactionDeleteModal-Bf2uhJYm.js";import"./Trash.es-Dh5TNsS5.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
