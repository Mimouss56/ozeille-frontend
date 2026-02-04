import{j as o,r as s}from"./iframe-BZq4Wtp5.js";import{B as i}from"./chunk-EPOLDU6W-En56nVx4.js";import"./axiosClient-Dg9PDTXS.js";import{u as a}from"./transactionsStore-59ml0mx0.js";import{T as l}from"./TransactionPage-DNVObfG0.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BFgmg18K.js";import"./IconBase.es-DRq92DE6.js";import"./ArrowRight.es-BOuCcyPI.js";import"./Button-BrAzBXuO.js";import"./index-DutoEiXV.js";import"./TransactionModal-Agd2PCzU.js";import"./Pencil.es-_McJtFjr.js";import"./InputField-DWfaQk9d.js";import"./Label-Db8BV0IN.js";import"./StatusMessage-DMhtMmp6.js";import"./Modal-jpvhc8i-.js";import"./index-DpDm2x2F.js";import"./index-CtE7JSY2.js";import"./Select-h5ZxrJqZ.js";import"./schemas-CCie32F6.js";import"./coerce-bTsAIPPu.js";import"./frequenciesStore-COjLgSS9.js";import"./ActionMenu-BdGqfFgR.js";import"./TransactionDeleteModal-6koCw23V.js";import"./Trash.es-BfAsiCRf.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
