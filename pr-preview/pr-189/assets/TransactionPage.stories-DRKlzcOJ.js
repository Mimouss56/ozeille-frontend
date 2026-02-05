import{j as o,r as s}from"./iframe-BgQ_fZKJ.js";import{B as i}from"./chunk-EPOLDU6W-DQZBEqlQ.js";import"./axiosClient-DkcN90IR.js";import{u as r}from"./transactionsStore-ClaYOIKs.js";import{T as l}from"./TransactionPage-F9vwjxaX.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-Be2OFnbh.js";import"./IconBase.es-CZGrfrvE.js";import"./Wallet.es-Dlic67Nx.js";import"./Button-BV9cyu97.js";import"./index-DutoEiXV.js";import"./EmptyCard-DFcK-82A.js";import"./DataTable-eNZr5sMN.js";import"./Pagination-B72Zhe4Q.js";import"./ArrowRight.es-D6HqxqZp.js";import"./TransactionDeleteModal-CzStDuPZ.js";import"./Trash.es-BGU-xXnV.js";import"./Modal-DzTZhzZr.js";import"./index-IfHfYg5i.js";import"./index-BJZ2N5o7.js";import"./TransactionModal-BJ9KYRSD.js";import"./InputField-CrXczbqr.js";import"./Label-BpmYyaN0.js";import"./StatusMessage-CJpt9Zso.js";import"./Select-DCJue4gu.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-BnM9kRm6.js";import"./ActionMenu-BrUxPkL2.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
