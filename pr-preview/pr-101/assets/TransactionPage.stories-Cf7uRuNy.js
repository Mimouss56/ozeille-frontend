import{j as a,r as s}from"./iframe-BmQ-8ybV.js";import{B as c}from"./chunk-EPOLDU6W-oOWEAI8d.js";import{u as o}from"./transactionsStore-EIZczruH.js";import{T as i}from"./TransactionPage-DXWyc9o5.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BtZFzJqF.js";import"./Button-VK6vLeb8.js";import"./index-DutoEiXV.js";import"./IconBase.esm-DukGzVBe.js";import"./ArrowRight.esm-BjXNIMLC.js";import"./TransactionModal-v-9-2_BU.js";import"./InputField-CuCSuthE.js";import"./Label-C6LM9ViP.js";import"./StatusMessage-aTVjBo67.js";import"./Modal-DxfYUMod.js";import"./Select-CwUyRjjY.js";import"./ActionMenu-D0e2NE7W.js";import"./TransactionDeleteModal-BN53sLK_.js";import"./Trash.esm-CgYSb7sv.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},E={title:"Pages/TransactionPage",component:i,tags:["autodocs"],decorators:[e=>a.jsx(c,{children:a.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(o.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{o.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),a.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const P=["WithData"];export{t as WithData,P as __namedExportsOrder,E as default};
