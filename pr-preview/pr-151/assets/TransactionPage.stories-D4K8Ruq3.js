import{j as o,r as s}from"./iframe-C7G82rR_.js";import{B as i}from"./chunk-EPOLDU6W-HBh5cdwc.js";import"./axiosClient-gE0j8R5K.js";import{u as a}from"./transactionsStore-DVCOSYRM.js";import{T as c}from"./TransactionPage-DXcZi5mI.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BXzhiBNP.js";import"./IconBase.es-D1LVG-k7.js";import"./ArrowRight.es-C8ulULfJ.js";import"./Button-BYHA2-WU.js";import"./index-DutoEiXV.js";import"./TransactionModal-B4jZNTQl.js";import"./Pencil.es-OFCJys0P.js";import"./schemas-B57nHjKb.js";import"./coerce-5SNq57JB.js";import"./frequenciesStore-CmGyLtk-.js";import"./InputField-CuhOw9YK.js";import"./Label-BzPGK-S1.js";import"./StatusMessage-DvhuvykZ.js";import"./Modal-BMr4pOmz.js";import"./index-CxBSqXSM.js";import"./index-YtiyFtBV.js";import"./Select-DH5JtCb8.js";import"./ActionMenu-BLR20qJe.js";import"./TransactionDeleteModal-CTwOsanr.js";import"./Trash.es-ClEKXxU_.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
