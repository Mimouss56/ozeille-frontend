import{j as o,r as s}from"./iframe-Bm94xm6e.js";import{B as i}from"./chunk-EPOLDU6W-BKlARXfT.js";import"./axiosClient-C1w2IO4s.js";import{u as a}from"./transactionsStore-CwjT52M8.js";import{T as c}from"./TransactionPage-CIy8VZeD.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BeApd1Sd.js";import"./IconBase.es-D-MqaScW.js";import"./ArrowRight.es-BvlVBDSD.js";import"./Button-CpEK-ZbN.js";import"./index-DutoEiXV.js";import"./TransactionModal-Dmw7NRbY.js";import"./Pencil.es-DxOSqXrd.js";import"./schemas-CMyL0t2X.js";import"./coerce-Bvo179AL.js";import"./frequenciesStore-Cs5YAFGJ.js";import"./InputField-BTl4-jbi.js";import"./Label-ihQR500i.js";import"./StatusMessage-CNZPmCQa.js";import"./Modal-ANqCQh7d.js";import"./index-DPbUZgl-.js";import"./index-ulTeiMeu.js";import"./Select-BSYGmj62.js";import"./ActionMenu-DRQlDrTf.js";import"./TransactionDeleteModal-Dw005ml3.js";import"./Trash.es-DBT3Ui45.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
