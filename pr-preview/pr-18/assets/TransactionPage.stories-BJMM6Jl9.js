import{j as o,r as s}from"./iframe-Cz2FyM2s.js";import{B as i}from"./chunk-EPOLDU6W-DlUV3dUY.js";import"./axiosClient-BCVN1Vf-.js";import{u as r}from"./transactionsStore-BRep1rhZ.js";import{T as l}from"./TransactionPage-BevrxuvG.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-W5ZmTETI.js";import"./IconBase.es-RwseOKCg.js";import"./Wallet.es-BbXWIWTw.js";import"./Button-DJe2Bsr3.js";import"./index-DutoEiXV.js";import"./DataTable-Ac2OChaN.js";import"./Pagination-DkdNWsbq.js";import"./ArrowRight.es-Dn-zRs6r.js";import"./dayjs.min-BmHC9-hf.js";import"./TransactionDeleteModal-CxY4UuI4.js";import"./Trash.es-DKteaIhr.js";import"./Modal-Ce0JT8e4.js";import"./index-D5gzeuzB.js";import"./index-DNpeHTP5.js";import"./TransactionModal-yvajyls0.js";import"./InputField-Cv9GGFBS.js";import"./Label-ChgFySva.js";import"./StatusMessage-7mo6ytg9.js";import"./Select-Cnh-lDxW.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-CO4GEr33.js";import"./EmptyCard-CjvWMxBT.js";import"./ActionMenu-Bzeh86F4.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
