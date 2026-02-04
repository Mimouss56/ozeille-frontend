import{j as o,r as s}from"./iframe-DUmvcQcf.js";import{B as i}from"./chunk-EPOLDU6W-DAoO1pPK.js";import"./axiosClient-DTca_Lgq.js";import{u as r}from"./transactionsStore-D9KDWvWm.js";import{T as l}from"./TransactionPage-BB_2TGYV.js";import"./preload-helper-PPVm8Dsz.js";import"./Wallet.es-DoqAQdjg.js";import"./IconBase.es-COX30dre.js";import"./EmptyCard-BVHb9BoZ.js";import"./index-DutoEiXV.js";import"./DataTable-DMPK8FLQ.js";import"./ArrowRight.es-B0xIdeD8.js";import"./Button-r5Csk0e5.js";import"./TransactionModal-B2Q6QUcQ.js";import"./Pencil.es-qUSDMExk.js";import"./InputField-9iH6Te6c.js";import"./Label-DSQyo85C.js";import"./StatusMessage-DjcNonb0.js";import"./Modal-DLXmSIYU.js";import"./index-DA5tY_ST.js";import"./index-CmzThe9s.js";import"./Select-B5YLfA2W.js";import"./schemas-BJrmLcbl.js";import"./coerce-DdmEHIxU.js";import"./frequenciesStore-CWLwV7p5.js";import"./ActionMenu-D86Yy6eD.js";import"./TransactionDeleteModal-BfmXP6T5.js";import"./Trash.es-BhCFADrY.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
