import{j as o,r as s}from"./iframe-CBMYiFd3.js";import{B as i}from"./chunk-EPOLDU6W-DOZbYOTz.js";import"./axiosClient-CMj6B-nW.js";import{u as a}from"./transactionsStore-Ch4C2Inm.js";import{T as c}from"./TransactionPage-DVSso5VF.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-PRcQQcR8.js";import"./Button-ChLwX0Za.js";import"./index-DutoEiXV.js";import"./IconBase.esm-CXr0b4pN.js";import"./ArrowRight.esm-BmmU_iba.js";import"./TransactionModal-QfFFSNXO.js";import"./categoriesStore-DHwv7l7s.js";import"./frequenciesStore-DYhtEGBs.js";import"./InputField-C2-M6gYD.js";import"./Label-CI2GdHFd.js";import"./StatusMessage-BjdJCpx-.js";import"./Modal-B--zCiXR.js";import"./Select-BDhg3CSN.js";import"./ActionMenu-Ht8ERgJh.js";import"./TransactionDeleteModal-cUvTc0kF.js";import"./Trash.esm-BhrD8fQG.js";import"./PencilSimple.esm-DaF4sbcS.js";const n=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:n.length,page:1,limit:10},q={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:n,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async r=>{console.log(`Mock: deleteTransactionById called for ${r}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
