import{j as o,r as s}from"./iframe-IIuoEC8S.js";import{B as i}from"./chunk-EPOLDU6W-D19KceVX.js";import"./axiosClient-Co5wrMvJ.js";import{u as r}from"./transactionsStore-CBkVsMVd.js";import{T as l}from"./TransactionPage-CzoZ2OfL.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DJPTKEHW.js";import"./IconBase.es-CXIp7RFx.js";import"./Wallet.es-BOt5LPRh.js";import"./Button-D1VVCJ-o.js";import"./index-DutoEiXV.js";import"./InputField-TPfIwvPA.js";import"./Label-YiokLdI1.js";import"./StatusMessage-CC8DV2Gz.js";import"./DataTable-CAZG5krf.js";import"./Pagination-BcxAw_3h.js";import"./ArrowRight.es-rrpAVg4m.js";import"./dayjs.min-BsCEVgGO.js";import"./Select-ConrDtYY.js";import"./TransactionDeleteModal-DqESUZom.js";import"./Trash.es-B5vyfbvU.js";import"./Modal-Cs5z5HPQ.js";import"./index-CKzyeukd.js";import"./index-Cb4Mcoep.js";import"./TransactionModal-BviSQPPS.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-DXr2sYx2.js";import"./EmptyCard-C_romoSY.js";import"./ActionMenu-BBL4nLJq.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
