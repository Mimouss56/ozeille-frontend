import{j as o,r as s}from"./iframe-2zChPOQ8.js";import{B as i}from"./chunk-EPOLDU6W-DaWtVxJF.js";import"./axiosClient-ClvV7-uX.js";import{u as a}from"./transactionsStore-003_EIiJ.js";import{T as c}from"./TransactionPage-BEplxwPo.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CXgsBf9D.js";import"./IconBase.es-BOES3po0.js";import"./ArrowRight.es-DBLBIIUW.js";import"./Button-CtIFFoTw.js";import"./index-DutoEiXV.js";import"./TransactionModal-DiCPP_tI.js";import"./Pencil.es-FdxNrdQ5.js";import"./schemas-B3VwF-VU.js";import"./coerce-Djvv_7Jz.js";import"./frequenciesStore-wAQBpDEo.js";import"./InputField-Dfz_Kd_G.js";import"./Label-CBep1uMO.js";import"./StatusMessage-CJ-AXims.js";import"./Modal-7TmhGM_i.js";import"./index-BDiKCd41.js";import"./index-CeylZyPc.js";import"./Select-D5L_WOF_.js";import"./ActionMenu-CyoWLTEd.js";import"./TransactionDeleteModal-bdoDtHsc.js";import"./Trash.es-BRJvZVTm.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
