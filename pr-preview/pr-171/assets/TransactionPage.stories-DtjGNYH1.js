import{j as o,r as s}from"./iframe-gen-gUuQ.js";import{B as i}from"./chunk-EPOLDU6W-C2JKHKPm.js";import"./axiosClient-Dz3Z9Xik.js";import{u as a}from"./transactionsStore-DXjzqoRo.js";import{T as l}from"./TransactionPage-DZFWPyQT.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-DdIBnpKD.js";import"./IconBase.es-DeIG7MW9.js";import"./ArrowRight.es-C6RMEf69.js";import"./Button-CtVpV_9t.js";import"./index-DutoEiXV.js";import"./TransactionModal-BCQgV5QF.js";import"./Pencil.es-Cb9IxPVz.js";import"./InputField-tttOwZG9.js";import"./Label-CMS44qta.js";import"./StatusMessage-BNQMGLfa.js";import"./Modal-BmzGoSfc.js";import"./index-BYHeI1Cu.js";import"./index-C_BK0SNY.js";import"./Select-Ca4-LQp5.js";import"./schemas-DY4oFZHS.js";import"./coerce-BGLnOo1i.js";import"./frequenciesStore-HdtKM2Jk.js";import"./ActionMenu-ClCedOAT.js";import"./TransactionDeleteModal-Nwbn0Dof.js";import"./Trash.es-C8NWUIZ_.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
