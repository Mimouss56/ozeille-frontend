import{j as o,r as s}from"./iframe-DYhpLZ5K.js";import{B as i}from"./chunk-EPOLDU6W-D7we8fpj.js";import"./axiosClient-Cs-0dW4V.js";import{u as a}from"./transactionsStore-8lTgxVlg.js";import{T as c}from"./TransactionPage-BC79u8EZ.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-B9pLmXet.js";import"./Button-B5hV2gj8.js";import"./index-DutoEiXV.js";import"./IconBase.esm-DL24QsOJ.js";import"./ArrowRight.esm-BGMl3Vsj.js";import"./TransactionModal-D0RKg9S7.js";import"./categoriesStore-Dk6y1c48.js";import"./frequenciesStore-C-OhU6Od.js";import"./InputField-BokOQtVd.js";import"./Label-BwIbZR-V.js";import"./StatusMessage-iYvqX4Kj.js";import"./Modal-ClfPzw1o.js";import"./index-B_yxQFpx.js";import"./index-BxrHihhq.js";import"./Select-CFQTiGJQ.js";import"./ActionMenu-lP-x7hEx.js";import"./IconBase.es-C_7RSi1K.js";import"./TransactionDeleteModal-BC1aBmCQ.js";import"./Trash.esm-Drhqu4I-.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const $=["WithData"];export{t as WithData,$ as __namedExportsOrder,_ as default};
