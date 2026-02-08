import{j as o,r as s}from"./iframe-hJVTs4Ut.js";import{B as i}from"./chunk-EPOLDU6W-BOKXy-u7.js";import"./axiosClient-513olGFg.js";import{u as r}from"./transactionsStore-BY9KPa2S.js";import{T as l}from"./TransactionPage-CSR52tWe.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-ClTy9Iuq.js";import"./IconBase.es-BF-hjnEs.js";import"./Wallet.es-DbYlbCZQ.js";import"./Button-9euAbW3B.js";import"./index-DutoEiXV.js";import"./DataTable-C2v0O5jA.js";import"./Pagination-xR5hFZRN.js";import"./ArrowRight.es-ChbXjpbM.js";import"./dayjs.min-SnnSyHLJ.js";import"./TransactionDeleteModal-Bgu9nRWR.js";import"./Trash.es-CEdYGjAW.js";import"./Modal-B4QtOoC6.js";import"./index-DbrJRWdg.js";import"./index-CUB7qYbL.js";import"./TransactionModal-Dhgz2n8j.js";import"./InputField-C4b09Xhl.js";import"./Label-DuGAp40X.js";import"./StatusMessage-BbER0n5x.js";import"./Select-CkGL_clY.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-Cu0dThno.js";import"./EmptyCard-bOKPEj63.js";import"./ActionMenu-Cfhusmgd.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
