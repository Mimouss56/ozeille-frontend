import{j as o,r as s}from"./iframe-slvDrv0y.js";import{B as i}from"./chunk-EPOLDU6W-NmFxJftv.js";import"./axiosClient--o0_gRyw.js";import{u as a}from"./transactionsStore-geoNjfmh.js";import{T as l}from"./TransactionPage-B7Nx3yhg.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-K0oi5tl9.js";import"./IconBase.es-BbawG9RY.js";import"./Button-FVET4ZYe.js";import"./index-DutoEiXV.js";import"./DataTable-pMo-l5rj.js";import"./ArrowRight.es-DxwKJEBu.js";import"./TransactionDeleteModal-BIpJLjc1.js";import"./Trash.es-pwu1GX2X.js";import"./Modal-BpPDk9sg.js";import"./index-OhXwSLtA.js";import"./index-DjdMkasq.js";import"./TransactionModal-XPeQnnIl.js";import"./InputField-pKYnsFFK.js";import"./Label-B0uKf7w2.js";import"./StatusMessage-B-x05oN2.js";import"./Select-BSdj6cEN.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-Dv50HaPj.js";import"./ActionMenu-JQfxn-Ue.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const W=["WithData"];export{t as WithData,W as __namedExportsOrder,C as default};
