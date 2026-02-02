import{j as o,r as s}from"./iframe-D1x_njIB.js";import{B as i}from"./chunk-EPOLDU6W-Bm50l57T.js";import"./axiosClient-t6nr1buO.js";import{u as a}from"./transactionsStore-MbJ7U9ZW.js";import{T as c}from"./TransactionPage-D5dx4419.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-U8bRYmW5.js";import"./Button-BD60p3Ut.js";import"./index-DutoEiXV.js";import"./IconBase.esm-BaLYEe74.js";import"./ArrowRight.esm-DYkv6cn6.js";import"./TransactionModal-DqiKW-tl.js";import"./categoriesStore-KsVCVhHo.js";import"./frequenciesStore-CEcTECfa.js";import"./InputField-BBsj9uw6.js";import"./Label-8w_VWbjA.js";import"./StatusMessage-BD6W3Chd.js";import"./Modal-BzJfnqQH.js";import"./index-CX_8qDKo.js";import"./index-ByZVmCzI.js";import"./Select-09agZMmr.js";import"./ActionMenu-B-O9uZgP.js";import"./IconBase.es-BkWjaplg.js";import"./TransactionDeleteModal-CJGXffVS.js";import"./Trash.esm-p2-IBsF6.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const $=["WithData"];export{t as WithData,$ as __namedExportsOrder,_ as default};
