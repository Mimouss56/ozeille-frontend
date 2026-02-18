import{j as o,r as s}from"./iframe-k3NaWi71.js";import{B as i}from"./chunk-EPOLDU6W-Bc4Jxqcf.js";import"./axiosClient-B4v-P970.js";import{u as r}from"./transactionsStore-Bokn52WG.js";import{T as l}from"./TransactionPage-c0GMBQlh.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-EugNF_sW.js";import"./IconBase.es-Dq3QO-Vy.js";import"./Wallet.es-bz3BE5fx.js";import"./Button-3sfTC6nM.js";import"./index-DutoEiXV.js";import"./InputField-Caw6rrGG.js";import"./Label-Twhvyt4Q.js";import"./StatusMessage-Z0fE6pij.js";import"./DataTable-9Fvt9-ve.js";import"./Pagination-CQkQ8Yhk.js";import"./ArrowRight.es-CANOOld6.js";import"./dayjs.min-BySlkrVL.js";import"./Select-MMzzksaE.js";import"./TransactionDeleteModal-BKygYnyw.js";import"./Trash.es-BrolLErF.js";import"./Modal-P35zwJKw.js";import"./index-BG2Mh6u7.js";import"./index-DmXQLbYB.js";import"./TransactionModal-C_Qm8zN4.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-uhDM-OuG.js";import"./EmptyCard-BIfEztEy.js";import"./ActionMenu-D6vl8ztT.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
