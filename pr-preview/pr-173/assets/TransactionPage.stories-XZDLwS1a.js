import{j as o,r as s}from"./iframe-DqSXt728.js";import{B as i}from"./chunk-EPOLDU6W-CV6Rtrlp.js";import"./axiosClient-DYDWA0FI.js";import{u as a}from"./transactionsStore-Bp_efCXk.js";import{T as l}from"./TransactionPage-DZ2FmMaB.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-bPwCdF8R.js";import"./IconBase.es-B9QtdQtA.js";import"./ArrowRight.es-E-HjWxlt.js";import"./Button-DOzBj5Py.js";import"./index-DutoEiXV.js";import"./TransactionModal-Doaxwekv.js";import"./Pencil.es-LoVeXpI_.js";import"./InputField-DE2OsRyP.js";import"./Label-Dn7WxTHt.js";import"./StatusMessage-CohKGwe6.js";import"./Modal-ACFwkXZ_.js";import"./index-BNmCUQGC.js";import"./index-BwgytcH8.js";import"./Select-BPaTE3Ef.js";import"./schemas-nfZSsLKx.js";import"./coerce-D-j0bW5x.js";import"./frequenciesStore-_hPbFG-y.js";import"./ActionMenu-CAJKxrzO.js";import"./TransactionDeleteModal-oFSZbX7k.js";import"./Trash.es-cPSmb94U.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const W=["WithData"];export{t as WithData,W as __namedExportsOrder,C as default};
