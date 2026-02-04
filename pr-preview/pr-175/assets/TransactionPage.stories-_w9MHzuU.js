import{j as o,r as s}from"./iframe-80SyK_wY.js";import{B as i}from"./chunk-EPOLDU6W-DiS550Ur.js";import"./axiosClient-eu7Nqid4.js";import{u as a}from"./transactionsStore-6HygfHdV.js";import{T as l}from"./TransactionPage-Bt6KQ27T.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Bx-3g_Ob.js";import"./IconBase.es-QpqwTr4k.js";import"./ArrowRight.es-YDWFmZ6t.js";import"./Button-tjgwUQja.js";import"./index-DutoEiXV.js";import"./TransactionModal-BE-gwcwe.js";import"./Pencil.es-CbJMuW4L.js";import"./InputField-cotsXyQt.js";import"./Label-DczNOA4z.js";import"./StatusMessage-BTOWCLFi.js";import"./Modal-VILxtzgr.js";import"./index-CEAKp7ka.js";import"./index-CNHgz84w.js";import"./Select-Dq1yts1-.js";import"./schemas-BHnMq_LO.js";import"./coerce-BmTg7nld.js";import"./frequenciesStore-Bi4oGh5E.js";import"./ActionMenu-Br8dnalh.js";import"./TransactionDeleteModal-Bmj3frlV.js";import"./Trash.es-D846F-Eu.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
