import{j as o,r as s}from"./iframe-CRFvDrp0.js";import{B as i}from"./chunk-EPOLDU6W-BPXry3xa.js";import"./axiosClient-CD-8cebQ.js";import{u as a}from"./transactionsStore-Ddwt9ArX.js";import{T as c}from"./TransactionPage-B33Hdo3R.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BhqBQoNf.js";import"./Button-B83E25DH.js";import"./index-DutoEiXV.js";import"./IconBase.esm-CF4mmvLf.js";import"./ArrowRight.esm-B2uj__1j.js";import"./TransactionModal-Dw2j7jvn.js";import"./categoriesStore-7jXJhXXg.js";import"./frequenciesStore-B2HWs1yb.js";import"./InputField-CWB56UXK.js";import"./Label-42C2ePLQ.js";import"./StatusMessage-RGv6p8D2.js";import"./Modal-Dmw1r5eH.js";import"./Select-BkwQrWni.js";import"./ActionMenu-BpmaO3wM.js";import"./TransactionDeleteModal-BKHQanmy.js";import"./Trash.esm-D7GjtJE9.js";import"./PencilSimple.esm-BwFxheO9.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},q={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
