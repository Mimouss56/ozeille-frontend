import{j as o,r as s}from"./iframe-BBC-KBYd.js";import{B as i}from"./chunk-EPOLDU6W-DJRSOfxK.js";import"./axiosClient-xvtZ6ZIe.js";import{u as a}from"./transactionsStore-D18ufPVf.js";import{T as c}from"./TransactionPage-DR1GRYtH.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-G2SGJLKU.js";import"./IconBase.es-BsbJC2SF.js";import"./ArrowRight.es-Ch31Wo-L.js";import"./Button-DrTEG86m.js";import"./index-DutoEiXV.js";import"./TransactionModal-CF1bqesc.js";import"./Pencil.es-52Phu0tX.js";import"./schemas-DdW3x1uh.js";import"./coerce-D9MOnWRd.js";import"./frequenciesStore-azdEL8jE.js";import"./InputField-Bj885cGo.js";import"./Label-CvNinknq.js";import"./StatusMessage-BNqSKhmk.js";import"./Modal-B5PO-e6s.js";import"./index-BzsHiC36.js";import"./index-C_HdUU8T.js";import"./Select-BLvBEQXU.js";import"./ActionMenu-Dy8nnq7v.js";import"./TransactionDeleteModal-B2kOTBWL.js";import"./Trash.es-Bf3bq1st.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
