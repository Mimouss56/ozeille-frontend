import{j as o,r as s}from"./iframe-ypTtijTa.js";import{B as i}from"./chunk-EPOLDU6W-CxRZG1Ek.js";import"./axiosClient-Bm4X1Hsn.js";import{u as r}from"./transactionsStore-BTSZEaTT.js";import{T as l}from"./TransactionPage-B6fUtzti.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-BUodkboA.js";import"./IconBase.es-BAxYqddJ.js";import"./Wallet.es-DCoRhL74.js";import"./Button-9CDsTel4.js";import"./index-DutoEiXV.js";import"./DataTable-DhgHDVIE.js";import"./Pagination-CF4G02y0.js";import"./ArrowRight.es-w79orpx5.js";import"./dayjs.min-B8ZrlUmJ.js";import"./TransactionDeleteModal-i3jHuTfZ.js";import"./Trash.es-CZ3W6nAK.js";import"./Modal-BvEHSDOv.js";import"./index-VsZ49zP0.js";import"./index-CrIEj-Y5.js";import"./TransactionModal-BoNg85md.js";import"./InputField-CLc5QXxu.js";import"./Label-BM_rRVyZ.js";import"./StatusMessage-BvsLcxkK.js";import"./Select-vxApBZHD.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-B8LYzdyp.js";import"./EmptyCard-drHVeDWD.js";import"./ActionMenu-CwejJspm.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
