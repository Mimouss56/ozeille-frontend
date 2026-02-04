import{j as o,r as s}from"./iframe-B10ShIjv.js";import{B as i}from"./chunk-EPOLDU6W-CltD6cpL.js";import"./axiosClient-BFG-t0KE.js";import{u as a}from"./transactionsStore-Buxf9DMW.js";import{T as c}from"./TransactionPage-B8LsReN5.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-DS28ola_.js";import"./IconBase.es-CgT2YlSN.js";import"./ArrowRight.es-urACz2Cq.js";import"./Button-Dv3bf-MD.js";import"./index-DutoEiXV.js";import"./TransactionModal-C2wVcm49.js";import"./Pencil.es-Dr5EDEjP.js";import"./schemas-YR227CNF.js";import"./coerce-gCCDmeU_.js";import"./frequenciesStore-CdWHvc19.js";import"./InputField-Cg_Oc45t.js";import"./Label-BGC2Lo4h.js";import"./StatusMessage-WCXL5tgy.js";import"./Modal-Cb8k86aq.js";import"./index-Sp6M4VGo.js";import"./index-BH0ZJCAY.js";import"./Select-Cums70cd.js";import"./ActionMenu-BShjyCzW.js";import"./TransactionDeleteModal-BnHXtC5r.js";import"./Trash.es-DPHwRnd9.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
