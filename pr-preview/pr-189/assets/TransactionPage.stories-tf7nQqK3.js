import{j as o,r as s}from"./iframe-p4FRm6BM.js";import{B as i}from"./chunk-EPOLDU6W-DWBSy1sO.js";import"./axiosClient-D_mxLKba.js";import{u as a}from"./transactionsStore-DzYHyJ8H.js";import{T as l}from"./TransactionPage-BS7D2IHK.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-Dnj2ajB3.js";import"./IconBase.es-CXV8qNXg.js";import"./Button-CerpYcwI.js";import"./index-DutoEiXV.js";import"./DataTable-B28D2CIH.js";import"./ArrowRight.es-Dvp46B60.js";import"./TransactionDeleteModal-BTsdZwDG.js";import"./Trash.es-Dlj2aYy5.js";import"./Modal-irbyFjSe.js";import"./index-xh2fz1ab.js";import"./index-CPdTX9h9.js";import"./TransactionModal-DkBQPiFe.js";import"./InputField-C1xBjTfc.js";import"./Label-CeUUl2bJ.js";import"./StatusMessage-BN8L11Mc.js";import"./Select-CWHADxMg.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./budgetsStore-B74aFF2G.js";import"./frequenciesStore-DePxJfYK.js";import"./ActionMenu-C50L2y-4.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},W={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
