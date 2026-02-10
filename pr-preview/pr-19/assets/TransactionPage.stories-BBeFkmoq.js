import{j as o,r as s}from"./iframe-0jTvucNN.js";import{B as i}from"./chunk-EPOLDU6W-BUUdp8wQ.js";import"./axiosClient-C1VWj3-3.js";import{u as r}from"./transactionsStore-BFPZQzkT.js";import{T as l}from"./TransactionPage-EXMFrOpT.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-C4Vhq5Ee.js";import"./IconBase.es-CicBGxvv.js";import"./Wallet.es-DWpXZG-e.js";import"./Button-80SSyK6k.js";import"./index-DutoEiXV.js";import"./DataTable-BjxmgAqS.js";import"./Pagination-Di9iHDKD.js";import"./ArrowRight.es-xuLoTY7V.js";import"./dayjs.min-DP-tLpRb.js";import"./TransactionDeleteModal-C10wb4iD.js";import"./Trash.es-Cq-z_E-7.js";import"./Modal-z4tMXMat.js";import"./index-BawKlpUE.js";import"./index-B3DZyBPL.js";import"./TransactionModal-CX63PlZ6.js";import"./InputField-CqqHYrWA.js";import"./Label-C9dNlDLK.js";import"./StatusMessage-CSgnsAOF.js";import"./Select-Dkf7cP3H.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-Ck22w-1o.js";import"./EmptyCard-B3b9wQGV.js";import"./ActionMenu-Ck7BuLCi.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["WithData"];export{t as WithData,w as __namedExportsOrder,v as default};
