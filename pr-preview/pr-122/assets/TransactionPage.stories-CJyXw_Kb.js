import{j as o,r as s}from"./iframe-4zMjsTVZ.js";import{B as i}from"./chunk-EPOLDU6W-aLp7csoG.js";import"./axiosClient-BitL05yO.js";import{u as a}from"./transactionsStore-D3ax_zW8.js";import{T as c}from"./TransactionPage-tTYesCGb.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Bu0q5XS6.js";import"./Button-CeiL_o6U.js";import"./index-DutoEiXV.js";import"./IconBase.esm-D4Wia5eX.js";import"./ArrowRight.esm-BYAsz53d.js";import"./TransactionModal-C8-TimR_.js";import"./categoriesStore-C7Xeu528.js";import"./frequenciesStore-xQwSLbME.js";import"./InputField-BZcZLCuc.js";import"./Label-CPll6Ny6.js";import"./StatusMessage-KRrhhpFN.js";import"./Modal-C8GXEIWm.js";import"./Select-BMDyYOcX.js";import"./ActionMenu-CC6eKtRX.js";import"./TransactionDeleteModal-CbLTVc4q.js";import"./Trash.esm-CQdQreX9.js";import"./PencilSimple.esm-Bp1_Yv1D.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},q={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const W=["WithData"];export{t as WithData,W as __namedExportsOrder,q as default};
