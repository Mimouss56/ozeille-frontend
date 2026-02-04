import{j as o,r as s}from"./iframe-DuKDR4_F.js";import{B as i}from"./chunk-EPOLDU6W-BYmS5ap9.js";import"./axiosClient-Be-pgyJ1.js";import{u as a}from"./transactionsStore-PY-W7mOQ.js";import{T as l}from"./TransactionPage-1BDZPqSD.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Co731hmo.js";import"./IconBase.es-CMlZtXJh.js";import"./ArrowRight.es-QuVkdrDX.js";import"./Button-CmlJI-2c.js";import"./index-DutoEiXV.js";import"./TransactionModal-BfPf20m0.js";import"./Pencil.es-CyJxuwTM.js";import"./InputField-B97R5aXM.js";import"./Label-CcZZNw0O.js";import"./StatusMessage-jLZnRIku.js";import"./Modal-BJn77HUB.js";import"./index-CZRvMghk.js";import"./index-C_AC4tz1.js";import"./Select-e6ny3rve.js";import"./schemas-B8egPEsK.js";import"./coerce-CWW4curk.js";import"./frequenciesStore-CSJJxuXz.js";import"./ActionMenu-CkcIS61o.js";import"./TransactionDeleteModal-CrLrr8Cq.js";import"./Trash.es-CCnUJ9fl.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
