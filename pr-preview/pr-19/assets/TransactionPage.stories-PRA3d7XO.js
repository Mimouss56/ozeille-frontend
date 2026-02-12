import{j as o,r as s}from"./iframe-BeLUgHeg.js";import{B as i}from"./chunk-EPOLDU6W-CIQQv2Wp.js";import"./axiosClient-7U9cz1v9.js";import{u as r}from"./transactionsStore-CxinI-Bo.js";import{T as l}from"./TransactionPage-B-HQa8EE.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-D7vE5_2x.js";import"./IconBase.es-D4cy2J9v.js";import"./Wallet.es-kNpo-yFz.js";import"./Button-DFgj9msY.js";import"./index-DutoEiXV.js";import"./DataTable-ZgN5jbJa.js";import"./Pagination-CvRycKU-.js";import"./ArrowRight.es-uGe37wju.js";import"./dayjs.min-DA-1Xg6J.js";import"./TransactionDeleteModal-D72Oo5J8.js";import"./Trash.es-CNsMd_6F.js";import"./Modal-CUPyqCgs.js";import"./index--hkSaFo0.js";import"./index-CEs2_4cd.js";import"./TransactionModal-Cc09R2xf.js";import"./InputField-DT3fWDoV.js";import"./Label-B4SKUl0l.js";import"./StatusMessage-DJw_gEqG.js";import"./Select-ChDy231e.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-DPXrJ9pX.js";import"./EmptyCard-Bw1SEeCv.js";import"./ActionMenu-RCBk5UmA.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["WithData"];export{t as WithData,w as __namedExportsOrder,v as default};
