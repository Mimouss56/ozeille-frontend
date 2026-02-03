import{j as o,r as s}from"./iframe-C6ym6zC5.js";import{B as i}from"./chunk-EPOLDU6W-DVRGC8Sm.js";import"./axiosClient-BC6TOSUD.js";import{u as a}from"./transactionsStore-CWtGslzg.js";import{T as c}from"./TransactionPage-C0Ohgt63.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CY2Cj_5a.js";import"./IconBase.es-CEwAgwYu.js";import"./ArrowRight.es-Dd2nbUhM.js";import"./Button-Cg6_eeRG.js";import"./index-DutoEiXV.js";import"./TransactionModal-CSslsEjg.js";import"./Pencil.es-BtL9NHrW.js";import"./schemas-BpXA608T.js";import"./coerce-BnFpxn5q.js";import"./frequenciesStore-AUmEyfze.js";import"./InputField-COWVFLsy.js";import"./Label-CxoY7oTy.js";import"./StatusMessage-B7BMm9fS.js";import"./Modal-c94WPOM_.js";import"./index-BM2SiDtq.js";import"./index-BbKNXxNt.js";import"./Select-CzGfF-Cg.js";import"./ActionMenu-CimMWpKK.js";import"./TransactionDeleteModal-CwU0MkzW.js";import"./Trash.es-DZK3a6bH.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
