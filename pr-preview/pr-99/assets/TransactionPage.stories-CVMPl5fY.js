import{j as o,r as s}from"./iframe-2UQskwW5.js";import{B as i}from"./chunk-EPOLDU6W-CV1NJGrv.js";import"./axiosClient-CnoH2fP2.js";import{u as a}from"./transactionsStore-BhM0J-bY.js";import{T as c}from"./TransactionPage-Dmsfd2ZE.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BeYBw0ne.js";import"./IconBase.es-BpUu7e6R.js";import"./ArrowRight.es-UN5tKsmJ.js";import"./Button-CPhqROst.js";import"./index-DutoEiXV.js";import"./TransactionModal-BSFfOEQ0.js";import"./Pencil.es-Ymh95jLc.js";import"./schemas-D6rHScjd.js";import"./coerce-D74R0gfY.js";import"./frequenciesStore-BG12g5Rp.js";import"./InputField-CYqDMWea.js";import"./Label-Ccu-Q45r.js";import"./StatusMessage-Dxf9tt_2.js";import"./Modal-BdbVzZDB.js";import"./index-CaYyZ9ZU.js";import"./index-BivrdQAN.js";import"./Select-DLHQb2Jf.js";import"./ActionMenu-CqfSE6hR.js";import"./TransactionDeleteModal-_Q-7X27_.js";import"./Trash.es-jjtY9Yed.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
