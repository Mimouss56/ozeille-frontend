import{j as o,r as s}from"./iframe-CT-cweiv.js";import{B as i}from"./chunk-EPOLDU6W-CwrlKmPG.js";import"./axiosClient-Dhm_WMFg.js";import{u as a}from"./transactionsStore-Za7mSx0i.js";import{T as c}from"./TransactionPage-C_na1GBD.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-ByuxiqoJ.js";import"./IconBase.es-CgBe_E9R.js";import"./ArrowRight.es-CqBNOFvr.js";import"./Button-CndOw7IB.js";import"./index-DutoEiXV.js";import"./TransactionModal-DS-resGJ.js";import"./Pencil.es-DHK0mGmU.js";import"./schemas-Bfe9uU1G.js";import"./coerce-BQrU-2vS.js";import"./frequenciesStore-DNhxiF26.js";import"./InputField-M1ml6OMp.js";import"./Label-D97uZChX.js";import"./StatusMessage-BYORSOCy.js";import"./Modal-B6rafr84.js";import"./index-CRfHAt4W.js";import"./index-67EfzGAP.js";import"./Select-EUJxMmmN.js";import"./ActionMenu-1U8_iKcf.js";import"./TransactionDeleteModal-Ck4AOFNM.js";import"./Trash.es-BjOgzy_b.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
