import{j as a,r as s}from"./iframe-B4Jk3YgJ.js";import{B as i}from"./chunk-EPOLDU6W-Djg71NqZ.js";import{u as o}from"./transactionsStore-B2J_gN5w.js";import{T as c}from"./TransactionPage-CO0BHR9i.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-w5W5lq1K.js";import"./Button-B5HsmcWT.js";import"./index-DutoEiXV.js";import"./IconBase.esm-B60Terh_.js";import"./ArrowRight.esm-BQ59z6cH.js";import"./TransactionModal-BHLG0RXp.js";import"./frequenciesStore-bwcQSpn-.js";import"./InputField-C-SHq8YP.js";import"./Label-dPUS7M5X.js";import"./StatusMessage-BkOhC6kk.js";import"./Modal-COvFmOT0.js";import"./Select-DF7VlINy.js";import"./ActionMenu-D9KFb8Nx.js";import"./TransactionDeleteModal-CoW64w95.js";import"./Trash.esm-Uem1Zsvn.js";import"./TransactionEditModal-CMS0v8kd.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},D={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>a.jsx(i,{children:a.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(o.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{o.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),a.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const R=["WithData"];export{t as WithData,R as __namedExportsOrder,D as default};
