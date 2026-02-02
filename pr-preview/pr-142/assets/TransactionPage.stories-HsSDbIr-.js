import{j as o,r as s}from"./iframe-AYXYALec.js";import{B as i}from"./chunk-EPOLDU6W-vKjRJmST.js";import"./axiosClient-C_xNiIJs.js";import{u as a}from"./transactionsStore-BgrlGQBv.js";import{T as c}from"./TransactionPage-BnesPLTT.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-DApqO3zd.js";import"./IconBase.es-BUiiWEU8.js";import"./ArrowRight.es-CVgQ26Va.js";import"./Button-BLq-vT2E.js";import"./index-DutoEiXV.js";import"./TransactionModal-C8x1_yDt.js";import"./Pencil.es-BSUqccVN.js";import"./schemas-ETks01-b.js";import"./coerce-HaLyF_oi.js";import"./frequenciesStore-BJC3l6XZ.js";import"./InputField-BDUJ8bqU.js";import"./Label-sSqeS5sU.js";import"./StatusMessage-JKEn1DgE.js";import"./Modal-DK-0c2a5.js";import"./index-0UmehbYk.js";import"./index-DXv4UL9O.js";import"./Select-DMOT0Rew.js";import"./ActionMenu-CJKJQdYW.js";import"./TransactionDeleteModal-CDY1zhbi.js";import"./Trash.es-fNr3AD1T.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
