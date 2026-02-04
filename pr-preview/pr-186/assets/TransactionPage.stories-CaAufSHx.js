import{j as o,r as s}from"./iframe-DWPTYnII.js";import{B as i}from"./chunk-EPOLDU6W-DnOxfJZi.js";import"./axiosClient-B-SqE_v0.js";import{u as r}from"./transactionsStore-D5n8ilJ8.js";import{T as l}from"./TransactionPage-d0LqritM.js";import"./preload-helper-PPVm8Dsz.js";import"./Wallet.es-B9cbTRh9.js";import"./IconBase.es-BnOSeoyh.js";import"./EmptyCard-CL4Z4ea6.js";import"./index-DutoEiXV.js";import"./DataTable-DdUzAmwe.js";import"./ArrowRight.es-CI6HkkHP.js";import"./Button-CWPazl7Z.js";import"./TransactionModal-CRsMgUIz.js";import"./Pencil.es-DzZf2P_Y.js";import"./InputField-B_PW0vfN.js";import"./Label-C3CNxefV.js";import"./StatusMessage-BmTu0tkl.js";import"./Modal-BN-YbME7.js";import"./index-CpqKEp9X.js";import"./index-eerWb5PK.js";import"./Select-By3N8fBJ.js";import"./schemas-CblkiGi9.js";import"./coerce-j_jMYtts.js";import"./frequenciesStore-D2SiZ8mQ.js";import"./ActionMenu-CyEqU914.js";import"./TransactionDeleteModal-DHPSvice.js";import"./Trash.es-2B3GqqgP.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const $=["WithData"];export{t as WithData,$ as __namedExportsOrder,_ as default};
