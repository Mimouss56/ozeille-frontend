import{j as o,r as s}from"./iframe-Bw_vLHhj.js";import{B as i}from"./chunk-EPOLDU6W-Ccblpk0W.js";import"./axiosClient-wzivupJG.js";import{u as a}from"./transactionsStore-CFljbjZR.js";import{T as c}from"./TransactionPage-DsfFGgCm.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Q0y4FHSI.js";import"./IconBase.es-BPjclMnZ.js";import"./ArrowRight.es-DWl44nY9.js";import"./Button-Dh52iWTB.js";import"./index-DutoEiXV.js";import"./TransactionModal-CCZ0meiG.js";import"./Pencil.es-DvSvUxR-.js";import"./schemas-C_5mU-Ln.js";import"./coerce-CL0vz37q.js";import"./frequenciesStore-BQrw7aqT.js";import"./InputField-DKAytric.js";import"./Label-DB3a343d.js";import"./StatusMessage-DYTPJIxl.js";import"./Modal-J5mUyyeo.js";import"./index-DruL9Yb0.js";import"./index-BSwnk7so.js";import"./Select-C31FMyEZ.js";import"./ActionMenu-BL489Tlf.js";import"./TransactionDeleteModal-Cc_0w1Fz.js";import"./Trash.es-I8MUcAU3.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
