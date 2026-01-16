import{j as a,r as s}from"./iframe-BcF0cQhe.js";import{B as c}from"./chunk-EPOLDU6W-CFSO0wo0.js";import"./axiosClient-DXIF9aB8.js";import{u as o}from"./transactionsStore-xEYHnJy5.js";import{T as i}from"./TransactionPage-CnCd6LmL.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CtlcP9Gh.js";import"./Button-DXrorF0m.js";import"./index-DutoEiXV.js";import"./IconBase.esm-CkfmiRTJ.js";import"./ArrowRight.esm-BleZSMof.js";import"./TransactionModal-DiSHJwZx.js";import"./InputField-CNKcCder.js";import"./Label-B0z7iHAj.js";import"./StatusMessage-D2t3dF8I.js";import"./Modal-BKcCsQDD.js";import"./Select-BLN_N4BU.js";import"./ActionMenu-C0nK8k48.js";import"./TransactionDeleteModal-fWvLSIo0.js";import"./Trash.esm-ClOgeSST.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},P={title:"Pages/TransactionPage",component:i,tags:["autodocs"],decorators:[e=>a.jsx(c,{children:a.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(o.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{o.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),a.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["WithData"];export{t as WithData,D as __namedExportsOrder,P as default};
