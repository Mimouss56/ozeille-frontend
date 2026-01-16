import{j as a,r as s}from"./iframe-t-NdWWG6.js";import{B as c}from"./chunk-EPOLDU6W-Nj_Hv2Qo.js";import"./axiosClient-DTLwT22F.js";import{u as o}from"./transactionsStore-DkovMlFx.js";import{T as i}from"./TransactionPage-DpaSiQRH.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CJ-ADf3_.js";import"./Button-CVuVIyWF.js";import"./index-DutoEiXV.js";import"./IconBase.esm-eNzKSoJl.js";import"./ArrowRight.esm-ONrZWvZB.js";import"./TransactionModal-DNdPHzvy.js";import"./InputField-C5pLZrFx.js";import"./Label-D_oBgs7E.js";import"./StatusMessage-CErPkgDX.js";import"./Modal-CVKcHdim.js";import"./Select-Bm-S-WOt.js";import"./ActionMenu-Bcdiplpo.js";import"./TransactionDeleteModal-DVTL9oEX.js";import"./Trash.esm-1opQJRrf.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},P={title:"Pages/TransactionPage",component:i,tags:["autodocs"],decorators:[e=>a.jsx(c,{children:a.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(o.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{o.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),a.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["WithData"];export{t as WithData,D as __namedExportsOrder,P as default};
