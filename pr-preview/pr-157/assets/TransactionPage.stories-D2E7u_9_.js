import{j as o,r as s}from"./iframe-UJQ8SEgB.js";import{B as i}from"./chunk-EPOLDU6W-oYKsDzS4.js";import"./axiosClient-BzUDmbAK.js";import{u as a}from"./transactionsStore-BAdjteUj.js";import{T as c}from"./TransactionPage-BFuvZ2LU.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CFWsnssH.js";import"./IconBase.es-D7nzTQan.js";import"./ArrowRight.es-Bleeoo80.js";import"./Button-SyVdmpHh.js";import"./index-DutoEiXV.js";import"./TransactionModal-Cc7N5Jzg.js";import"./Pencil.es-C7RLJgPw.js";import"./schemas-BvudWHdM.js";import"./coerce-Bo5vvehg.js";import"./frequenciesStore-DhKSCxdD.js";import"./InputField-taW-EnPN.js";import"./Label-BCN92UBF.js";import"./StatusMessage-B-oFGRPc.js";import"./Modal-2SrBwrKt.js";import"./index-BdmYAc7V.js";import"./index-DNXjprOF.js";import"./Select-C-W5mx4m.js";import"./ActionMenu-BUKjd6Hg.js";import"./TransactionDeleteModal-BhydKxse.js";import"./Trash.es-BXmgPQOt.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
