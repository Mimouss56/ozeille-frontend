import{j as o,r as s}from"./iframe-pc_2ojx-.js";import{B as i}from"./chunk-EPOLDU6W-CA3hkxFv.js";import"./axiosClient-5KfXKlLB.js";import{u as a}from"./transactionsStore-MPer3-Sa.js";import{T as c}from"./TransactionPage-BL82EwCx.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Dd3YGIaU.js";import"./IconBase.es-B0H6Ujfp.js";import"./ArrowRight.es-gnGSWxqD.js";import"./Button-BivAVUGP.js";import"./index-DutoEiXV.js";import"./TransactionModal-CfyeGsr-.js";import"./Pencil.es-ow1_9Bk8.js";import"./schemas-BrYjOjoR.js";import"./coerce-D63emgfQ.js";import"./frequenciesStore-ByOEEM-D.js";import"./InputField-DmUUvqEr.js";import"./Label-DgbZFcR0.js";import"./StatusMessage-BEWJbaoL.js";import"./Modal-BmPg7pJ-.js";import"./index-CvY15wfh.js";import"./index-B9rmq0RP.js";import"./Select-Caon41Dh.js";import"./ActionMenu-C4_8ZyAQ.js";import"./TransactionDeleteModal-lgevRR6b.js";import"./Trash.es-CqML1_a6.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
