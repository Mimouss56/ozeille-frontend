import{j as o,r as s}from"./iframe-ogC0KzH2.js";import{B as i}from"./chunk-EPOLDU6W-BZqU2uLp.js";import"./axiosClient-DvR_hFRa.js";import{u as a}from"./transactionsStore-ubx1wiYx.js";import{T as c}from"./TransactionPage-D0cLnyAf.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-C2RiKwXa.js";import"./IconBase.es-DP9ujO3t.js";import"./ArrowRight.es-CIchme6v.js";import"./Button-CsO0hpsV.js";import"./index-DutoEiXV.js";import"./TransactionModal-Bgn6pc3z.js";import"./Pencil.es-sGuonDci.js";import"./schemas-BGDYWucE.js";import"./coerce-DuzveRg_.js";import"./frequenciesStore-CEyZNLM1.js";import"./InputField-C8OnZM47.js";import"./Label-C4bBuVeP.js";import"./StatusMessage-D71qZxCE.js";import"./Modal-DrZ9TEhe.js";import"./index-BKD9g0Dr.js";import"./index-f2LyZo57.js";import"./Select-B6T_SEqn.js";import"./ActionMenu-3qb4Bs0O.js";import"./TransactionDeleteModal-BvjQUmw1.js";import"./Trash.es-Df7a3kqQ.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
