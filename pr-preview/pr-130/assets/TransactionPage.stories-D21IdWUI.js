import{j as o,r as s}from"./iframe-DLZJdIbH.js";import{B as i}from"./chunk-EPOLDU6W-Bl4np1nO.js";import"./axiosClient-DRkEIIiC.js";import{u as a}from"./transactionsStore-DR5kYQIq.js";import{T as c}from"./TransactionPage-0vvJvCGt.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-y6GZkrhM.js";import"./Button-C5f43CoG.js";import"./index-DutoEiXV.js";import"./IconBase.esm-BWwSYT5q.js";import"./ArrowRight.esm-XPo-Lvel.js";import"./TransactionModal-DqvWCbTh.js";import"./categoriesStore-CyeE9Gx0.js";import"./frequenciesStore-CxYX2snD.js";import"./InputField-CTExyZJT.js";import"./Label-DIL-QDTZ.js";import"./StatusMessage-B-rWNLFP.js";import"./Modal-DxTmx28C.js";import"./index-DRQvTslF.js";import"./index-B7kda3SY.js";import"./Select-2fxURJwL.js";import"./ActionMenu-3zeo-NOR.js";import"./IconBase.es-ay_MKWjY.js";import"./TransactionDeleteModal-BEySauXs.js";import"./Trash.esm-BClHY7sc.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
