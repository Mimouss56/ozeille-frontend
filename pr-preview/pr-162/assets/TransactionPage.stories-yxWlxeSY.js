import{j as o,r as s}from"./iframe-C922JDPv.js";import{B as i}from"./chunk-EPOLDU6W-BWv2370q.js";import"./axiosClient-Bo6Gk92c.js";import{u as a}from"./transactionsStore-Dtqf9mqE.js";import{T as c}from"./TransactionPage-sjkM3WMa.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CRapggaG.js";import"./IconBase.es-NslU2gA5.js";import"./ArrowRight.es-ClcJOfQw.js";import"./Button-BAmRy4_D.js";import"./index-DutoEiXV.js";import"./TransactionModal-DQww__IK.js";import"./Pencil.es-iDdsvt8P.js";import"./schemas-1yu9ws6b.js";import"./coerce-B8W0wJU4.js";import"./frequenciesStore-D6v1-7sw.js";import"./InputField-CU8H2vQl.js";import"./Label-DiPKJ6Vd.js";import"./StatusMessage-CXOTTKFK.js";import"./Modal-B9JZYQXM.js";import"./index-BmM9Jv1x.js";import"./index-DJGXsPWn.js";import"./Select-sx5Aqg-2.js";import"./ActionMenu-Ba5EW7eH.js";import"./TransactionDeleteModal-DU45GC70.js";import"./Trash.es-D9-QXd2w.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
