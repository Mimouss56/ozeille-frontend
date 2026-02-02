import{j as o,r as s}from"./iframe-BAZNicCM.js";import{B as i}from"./chunk-EPOLDU6W-C8qD3sJT.js";import"./axiosClient-Psbltjn5.js";import{u as a}from"./transactionsStore-DYu4o1f7.js";import{T as c}from"./TransactionPage-DdQLMy2l.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CB0OhyXU.js";import"./IconBase.es-DrBfRFA3.js";import"./ArrowRight.es-C-wUPzHS.js";import"./Button-Bu64ZEZn.js";import"./index-DutoEiXV.js";import"./TransactionModal-C60QQEpA.js";import"./Pencil.es-DQ6hDKXw.js";import"./schemas-DcL1A-V0.js";import"./coerce-DXDi-g0-.js";import"./frequenciesStore-7sc1Ybj-.js";import"./InputField-DwdDUFey.js";import"./Label-c2IdLotw.js";import"./StatusMessage-CHjMjefE.js";import"./Modal-BsmhDj37.js";import"./index-BWhu3t57.js";import"./index-DnWtCECL.js";import"./Select-CmRZJ4Jr.js";import"./ActionMenu-C0CDB0xo.js";import"./TransactionDeleteModal-D0_QzqVG.js";import"./Trash.es-CL7w8sUa.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
