import{j as o,r as s}from"./iframe-U0HHfzSX.js";import{B as i}from"./chunk-EPOLDU6W-MLRIFKFC.js";import"./axiosClient-Dd1WievF.js";import{u as r}from"./transactionsStore-_3VLwAS4.js";import{T as l}from"./TransactionPage-VhIEs9MY.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-BTtbCyO7.js";import"./IconBase.es-BcA48jG6.js";import"./Wallet.es--JPc4R9x.js";import"./Button-WyhXzWKj.js";import"./index-DutoEiXV.js";import"./InputField-DlNcPbMm.js";import"./Label-mLmDcr7R.js";import"./StatusMessage-DXreSP6S.js";import"./DataTable-CfB3AmlL.js";import"./Pagination-BZOouwuR.js";import"./ArrowRight.es-jnGD0YDM.js";import"./dayjs.min-Xh2ZiXWn.js";import"./Select-CAOb8dGn.js";import"./TransactionDeleteModal-BzjVYZ-I.js";import"./Trash.es-CfmCSY1x.js";import"./Modal-tcyq-Edj.js";import"./index-iARyw1QW.js";import"./index-Znqe9ral.js";import"./TransactionModal-3aNZ66U9.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-BgucDDXL.js";import"./EmptyCard-CaP97fyE.js";import"./ActionMenu-7l4d4dms.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
