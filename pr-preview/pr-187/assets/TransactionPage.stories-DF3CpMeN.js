import{j as o,r as s}from"./iframe-BTurVx8P.js";import{B as i}from"./chunk-EPOLDU6W-DxO-ej11.js";import"./axiosClient-CE52aMxN.js";import{u as a}from"./transactionsStore-DEePKtuw.js";import{T as l}from"./TransactionPage-DQAvWQlv.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-DgcL64t9.js";import"./Pagination-DP0wnKoR.js";import"./IconBase.es-B0Rsr2mQ.js";import"./ArrowRight.es-DeKfICFH.js";import"./index-DutoEiXV.js";import"./TransactionModal-8rfJBUEW.js";import"./Pencil.es-BIf3EO8S.js";import"./InputField-DqxXssaB.js";import"./Label-C6IbuxYM.js";import"./StatusMessage-Dt_gChg5.js";import"./Modal-BXUIl0Kp.js";import"./index-CDeSdNpM.js";import"./index-tfTM-J2h.js";import"./Button-vArOCehR.js";import"./Select-D4g-2akg.js";import"./schemas-CgRwQ5CE.js";import"./coerce-xJIXzlCp.js";import"./frequenciesStore-Dw8xmNLx.js";import"./ActionMenu-mEMepMly.js";import"./TransactionDeleteModal-ByNVyCQI.js";import"./Trash.es-CCYDAhnz.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},W={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const _=["WithData"];export{t as WithData,_ as __namedExportsOrder,W as default};
