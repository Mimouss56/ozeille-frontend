import{j as o,r as s}from"./iframe-C12B7drV.js";import{B as i}from"./chunk-EPOLDU6W-C0jiEk2B.js";import"./axiosClient-BFmEz4-v.js";import{u as a}from"./transactionsStore-BSbvx3ZE.js";import{T as c}from"./TransactionPage-BTZdUTwY.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-6MmCFJbj.js";import"./IconBase.es-sE9QhaM1.js";import"./ArrowRight.es-BIZeetBX.js";import"./Button-5yl8F1KV.js";import"./index-DutoEiXV.js";import"./TransactionModal-DOu3gJ7k.js";import"./Pencil.es-1nsyXatj.js";import"./schemas-DDFwCW0A.js";import"./coerce-C7hSKv3I.js";import"./frequenciesStore-BGYb57KY.js";import"./InputField-B_thk2Sp.js";import"./Label-CONAW8X8.js";import"./StatusMessage-CwRq2Api.js";import"./Modal-xIedFZUR.js";import"./index-CxNdEp-Q.js";import"./index-BpqQPa-a.js";import"./Select-CY6Qygw3.js";import"./ActionMenu-h1h0EFw2.js";import"./TransactionDeleteModal-CmJppEPB.js";import"./Trash.es-C9Plb7ch.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
