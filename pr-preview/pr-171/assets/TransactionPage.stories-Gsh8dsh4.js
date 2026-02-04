import{j as o,r as s}from"./iframe-dplN72BY.js";import{B as i}from"./chunk-EPOLDU6W-BMAJs5fO.js";import"./axiosClient-B2tPPGVg.js";import{u as a}from"./transactionsStore-BMB5okxr.js";import{T as c}from"./TransactionPage-BfQn0Wze.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BUCnILTt.js";import"./IconBase.es-DL7F4m1c.js";import"./ArrowRight.es-D_niWcdg.js";import"./Button-DXjE5ia9.js";import"./index-DutoEiXV.js";import"./TransactionModal-D4hNp9rC.js";import"./Pencil.es-B_XSBl8x.js";import"./InputField-C6pvlDWM.js";import"./Label-NbQo2RMK.js";import"./StatusMessage-BZK6A7hi.js";import"./Modal-BIb-YaOz.js";import"./index-sybpyX5b.js";import"./index-DpPmfTtZ.js";import"./Select-DrlCUCvQ.js";import"./schemas-G-F7gWbq.js";import"./coerce-BVGyWYY0.js";import"./frequenciesStore-BnhgiXLv.js";import"./ActionMenu-CpCrW_z8.js";import"./TransactionDeleteModal-CR_KczwK.js";import"./Trash.es-CCTBTXXE.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
