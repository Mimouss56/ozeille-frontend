import{j as a,r as s}from"./iframe-BPre2_KL.js";import{B as c}from"./chunk-EPOLDU6W-hFzVwrPY.js";import{u as o}from"./transactionsStore-DKDPtymE.js";import{T as i}from"./TransactionPage-DrGs6Nfh.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Ba8gu7yI.js";import"./Button-DByg2Bv6.js";import"./index-DutoEiXV.js";import"./IconBase.esm-B1PCO6JP.js";import"./ArrowRight.esm-DIcuFo0X.js";import"./TransactionModal-LdyLeNww.js";import"./InputField-BS92QTFT.js";import"./Label-BQ0RR4XG.js";import"./StatusMessage-BeJpw9lC.js";import"./Modal-BbDntK5A.js";import"./Select-Dn9eH9qN.js";import"./ActionMenu-BPi9e3mp.js";import"./TransactionDeleteModal-BTqtpBuw.js";import"./Trash.esm-BRq19jGs.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},E={title:"Pages/TransactionPage",component:i,tags:["autodocs"],decorators:[e=>a.jsx(c,{children:a.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(o.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{o.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),a.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const P=["WithData"];export{t as WithData,P as __namedExportsOrder,E as default};
