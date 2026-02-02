import{j as o,r as s}from"./iframe-DM38F1T0.js";import{B as i}from"./chunk-EPOLDU6W-Dya45YIV.js";import"./axiosClient-C7vyCMPa.js";import{u as a}from"./transactionsStore-BstBYrea.js";import{T as c}from"./TransactionPage-BzJL5647.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-tY_UuQt6.js";import"./Button-3LPOw4_B.js";import"./index-DutoEiXV.js";import"./IconBase.esm-UNqCVjyg.js";import"./ArrowRight.esm-Do0zI0Sy.js";import"./TransactionModal-DPDhve8k.js";import"./categoriesStore-Ee7qZrcV.js";import"./frequenciesStore-DGCZkcCy.js";import"./InputField-De9g1br7.js";import"./Label-Dbwwehjz.js";import"./StatusMessage-CryQ6h1U.js";import"./Modal-CuazK5lo.js";import"./Select-DGUKO6I4.js";import"./ActionMenu-DusUEdb-.js";import"./TransactionDeleteModal-BrUBATYU.js";import"./Trash.esm-QdSxH1B0.js";import"./PencilSimple.esm-CsVSlY4B.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},q={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const W=["WithData"];export{t as WithData,W as __namedExportsOrder,q as default};
