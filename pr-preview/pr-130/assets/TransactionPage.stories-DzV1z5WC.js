import{j as o,r as s}from"./iframe-C8VuXJBs.js";import{B as i}from"./chunk-EPOLDU6W-DeLL0Tng.js";import"./axiosClient-CxDnVupa.js";import{u as a}from"./transactionsStore-DJLfPtAw.js";import{T as c}from"./TransactionPage-g_DcqDea.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-h0Wk0R9Y.js";import"./Button-CBQ8U3WU.js";import"./index-DutoEiXV.js";import"./IconBase.esm-CEymyIz8.js";import"./ArrowRight.esm-CNS86C12.js";import"./TransactionModal-CBS4dlon.js";import"./categoriesStore-D0VCQelX.js";import"./frequenciesStore-Bp1nGMCA.js";import"./InputField-BPBzOtsm.js";import"./Label-BAiJZ9Ef.js";import"./StatusMessage-gQrpjAdv.js";import"./Modal-ox6M5RE5.js";import"./Select-L0ptg65p.js";import"./ActionMenu-DroWhcy7.js";import"./TransactionDeleteModal-Gql2aO3u.js";import"./Trash.esm-DJWAWi30.js";import"./PencilSimple.esm-DRa3Bfo_.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},q={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
