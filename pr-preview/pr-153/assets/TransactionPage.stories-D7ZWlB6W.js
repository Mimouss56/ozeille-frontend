import{j as o,r as s}from"./iframe-D1p1oO6V.js";import{B as i}from"./chunk-EPOLDU6W-Bw_YUPt7.js";import"./axiosClient-B0gevz2Q.js";import{u as a}from"./transactionsStore-D3B-MQ6g.js";import{T as c}from"./TransactionPage-CY-v6YA0.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-8YXjuUVA.js";import"./IconBase.es-DyzNWDh9.js";import"./ArrowRight.es-DYu6qa-A.js";import"./Button-DI6InTkr.js";import"./index-DutoEiXV.js";import"./TransactionModal-C4s5gqSM.js";import"./Pencil.es-C00NnBOI.js";import"./schemas-B3RMaHys.js";import"./coerce-BLEh-fdP.js";import"./frequenciesStore-ewrXNpnP.js";import"./InputField-Cf-klkIB.js";import"./Label-DdA4FZot.js";import"./StatusMessage-C_4l30fQ.js";import"./Modal-H3lMUYJL.js";import"./index-DC4YalFk.js";import"./index-C6ExByeN.js";import"./Select-C692dC3A.js";import"./ActionMenu-CfCDPO_r.js";import"./TransactionDeleteModal-BEau45gc.js";import"./Trash.es-BpAt2qeu.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
