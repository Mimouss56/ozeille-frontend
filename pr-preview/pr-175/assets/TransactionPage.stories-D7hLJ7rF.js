import{j as o,r as s}from"./iframe-CydYHZUR.js";import{B as i}from"./chunk-EPOLDU6W-BR9-YUYf.js";import"./axiosClient-DWbHf9LU.js";import{u as a}from"./transactionsStore-Cigm7A8q.js";import{T as l}from"./TransactionPage-DFyCHeC0.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-DIcJFaqs.js";import"./IconBase.es-BKBuYEx2.js";import"./ArrowRight.es-CDvfAFer.js";import"./Button-BXF3mJfR.js";import"./index-DutoEiXV.js";import"./TransactionModal-D1GobvhN.js";import"./Pencil.es-rCVIGKS2.js";import"./InputField-Ct8emFsl.js";import"./Label-DvKhusHA.js";import"./StatusMessage-Boc7YsqU.js";import"./Modal-CSHkDah1.js";import"./index-DL86MgXs.js";import"./index-DKh5WIcx.js";import"./Select-DAv8Mtt-.js";import"./schemas-CB77SQl1.js";import"./coerce-B-ftDhtg.js";import"./frequenciesStore-BzmCtaNn.js";import"./ActionMenu-C4SQ7lwH.js";import"./TransactionDeleteModal-CGTTofXf.js";import"./Trash.es-CX489jQY.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
