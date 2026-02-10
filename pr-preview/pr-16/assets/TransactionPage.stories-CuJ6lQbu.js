import{j as o,r as s}from"./iframe-DBGFD7Qf.js";import{B as i}from"./chunk-EPOLDU6W-lqIk0z-F.js";import"./axiosClient-BXT2YtRj.js";import{u as r}from"./transactionsStore-CtCrxKSw.js";import{T as l}from"./TransactionPage-CqSew-kZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DCVW7TdZ.js";import"./IconBase.es-C4ZMxj_f.js";import"./Wallet.es-BT0Q6c_X.js";import"./Button-T7zhZpb7.js";import"./index-DutoEiXV.js";import"./InputField-1C7SPRE4.js";import"./Label-DQL5-F8z.js";import"./StatusMessage-BmWZL38g.js";import"./DataTable-COxVTQT1.js";import"./Pagination-BHrIeqpE.js";import"./ArrowRight.es-BGfAqIIg.js";import"./dayjs.min-DKlP9BWj.js";import"./TransactionDeleteModal-BMJkn-84.js";import"./Trash.es-D3c7XXQf.js";import"./Modal-txQIIT0J.js";import"./index-BTESOdJw.js";import"./index-CdiS95rX.js";import"./TransactionModal-Dbp_qsVQ.js";import"./Select-CSsjoH8C.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-B7apP9AG.js";import"./EmptyCard-Bd1dr-Tq.js";import"./ActionMenu-e_G5aK1f.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["WithData"];export{t as WithData,w as __namedExportsOrder,v as default};
