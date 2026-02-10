import{j as o,r as s}from"./iframe-D4VSmP3U.js";import{B as i}from"./chunk-EPOLDU6W-Cg4Kz042.js";import"./axiosClient-DFLY8C8M.js";import{u as r}from"./transactionsStore-tb0P0HZh.js";import{T as l}from"./TransactionPage-UBFQF2ot.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-CDIT1VsK.js";import"./IconBase.es-DHIm6gN2.js";import"./Wallet.es-B8C-BH9X.js";import"./Button-CVT1imKt.js";import"./index-DutoEiXV.js";import"./DataTable-D1qkTVku.js";import"./Pagination-BhctdvkA.js";import"./ArrowRight.es-B6Fuh3_E.js";import"./dayjs.min-DxfSy9Dn.js";import"./TransactionDeleteModal-BOCUvC-V.js";import"./Trash.es-BB_QfIO7.js";import"./Modal-DH-xRjnH.js";import"./index-CT__oOct.js";import"./index-NfKOyNDR.js";import"./TransactionModal-DQuT-E_t.js";import"./InputField-C3UglV6P.js";import"./Label-COTtZf2G.js";import"./StatusMessage-4_yZqKsZ.js";import"./Select-D58SJ15u.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-BfCbsCPo.js";import"./EmptyCard-CSHamj6T.js";import"./ActionMenu-DOVYTTvl.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
