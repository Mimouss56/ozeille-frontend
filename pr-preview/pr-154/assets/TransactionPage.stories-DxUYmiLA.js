import{j as o,r as s}from"./iframe-vGbM5WYh.js";import{B as i}from"./chunk-EPOLDU6W-DfxAwKz7.js";import"./axiosClient-GCUq7wq8.js";import{u as a}from"./transactionsStore-C2SKxxA6.js";import{T as c}from"./TransactionPage-Dz7Mfdp4.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-6Eiu8qG5.js";import"./IconBase.es-DdrOhHGR.js";import"./ArrowRight.es-DtGT6STy.js";import"./Button-wHFPLL_I.js";import"./index-DutoEiXV.js";import"./TransactionModal-nWqBuFjj.js";import"./Pencil.es-CIbU2fQS.js";import"./schemas-DNesfOv3.js";import"./coerce-B54FPcyg.js";import"./frequenciesStore-CPBK_wGc.js";import"./InputField-5rkWdQvJ.js";import"./Label-ZxpjjpMF.js";import"./StatusMessage-C51HC0Nc.js";import"./Modal-D0gISGej.js";import"./index-EnecsUhC.js";import"./index-Dr9_gEdq.js";import"./Select-B6gwd0nY.js";import"./ActionMenu-Cl8KcAZ5.js";import"./TransactionDeleteModal-C6i2OA56.js";import"./Trash.es-8MXTSPgy.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
