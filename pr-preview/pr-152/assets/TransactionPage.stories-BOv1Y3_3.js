import{j as o,r as s}from"./iframe-DL-MgNHw.js";import{B as i}from"./chunk-EPOLDU6W-DQevYq3I.js";import"./axiosClient-CHWh3PjH.js";import{u as a}from"./transactionsStore-B-xpDdp0.js";import{T as c}from"./TransactionPage-BpPmqHM2.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-q_ga5sW7.js";import"./IconBase.es-BvKbMlhj.js";import"./ArrowRight.es-DcYSw_OU.js";import"./Button-C3knhF_t.js";import"./index-DutoEiXV.js";import"./TransactionModal-AjQoWDJF.js";import"./Pencil.es-CYzqNEQ1.js";import"./schemas-CpggPAYu.js";import"./coerce-Ms3eitT7.js";import"./frequenciesStore-G6tgqEkl.js";import"./InputField-BNeBtSJ0.js";import"./Label-DATkwEf7.js";import"./StatusMessage-DXFNL9x1.js";import"./Modal-urHl-m3U.js";import"./index-YUd07L6p.js";import"./index-DSiWMLvS.js";import"./Select-D3uH8uxZ.js";import"./ActionMenu-BHHi6m8W.js";import"./TransactionDeleteModal-CWN626cO.js";import"./Trash.es-Ceupyi0e.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
