import{j as o,r as s}from"./iframe-7V8e0gjq.js";import{B as i}from"./chunk-EPOLDU6W-CbrOMkvM.js";import"./axiosClient-CglRzrQP.js";import{u as a}from"./transactionsStore-BDGEp-4z.js";import{T as c}from"./TransactionPage-DnmaMdN7.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-DA60RugD.js";import"./IconBase.es-Dxs4JYeP.js";import"./ArrowRight.es-cquKVsC3.js";import"./Button-X_BnJZOn.js";import"./index-DutoEiXV.js";import"./TransactionModal-HgxZAflw.js";import"./Pencil.es-DElnLYjL.js";import"./schemas-BYs74dB1.js";import"./coerce-BnZPi-RY.js";import"./frequenciesStore-OCDOrMNF.js";import"./InputField-BzZxaDqO.js";import"./Label-8q7mrrXk.js";import"./StatusMessage-cNldHrTn.js";import"./Modal-_2v96YSu.js";import"./index-CPJAXu_-.js";import"./index-DghyEMiu.js";import"./Select-Bj-eVGTn.js";import"./ActionMenu-DjAGGOPs.js";import"./TransactionDeleteModal-DxB0ZN6F.js";import"./Trash.es-CWHqAn6T.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
