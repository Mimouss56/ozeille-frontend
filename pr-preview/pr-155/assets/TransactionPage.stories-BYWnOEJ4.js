import{j as o,r as s}from"./iframe-CrPk0i3A.js";import{B as i}from"./chunk-EPOLDU6W-kuaXfbMw.js";import"./axiosClient-DfzvRJC9.js";import{u as a}from"./transactionsStore-0X0DzEDC.js";import{T as c}from"./TransactionPage-DXUVltSN.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-DM3gyCNQ.js";import"./IconBase.es-Bi_MKvDV.js";import"./ArrowRight.es-n9HK7nRP.js";import"./Button-cO92zvV8.js";import"./index-DutoEiXV.js";import"./TransactionModal-ByJKSanG.js";import"./Pencil.es-CWpw3_jY.js";import"./schemas-Cud8K-mi.js";import"./coerce-R1s5J7S_.js";import"./frequenciesStore-DSxXCi93.js";import"./InputField-Der7-j8w.js";import"./Label-ClgAeSpB.js";import"./StatusMessage-DrbodilS.js";import"./Modal-DHAikbzP.js";import"./index-iwEDoQom.js";import"./index-CdsHn3k_.js";import"./Select-KeFAVOEw.js";import"./ActionMenu-BlP-WRat.js";import"./TransactionDeleteModal-CUJmvILE.js";import"./Trash.es-BvJvD5zi.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
