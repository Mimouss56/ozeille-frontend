import{j as o,r as s}from"./iframe-D7WNPKQg.js";import{B as i}from"./chunk-EPOLDU6W-6sFwluCD.js";import"./axiosClient-C_wz8KiI.js";import{u as a}from"./transactionsStore-zLz3pkdk.js";import{T as c}from"./TransactionPage-GaJCO2V2.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-GGMTOvpb.js";import"./Button-Dd4H-zsL.js";import"./index-DutoEiXV.js";import"./IconBase.esm-CvIpsvC_.js";import"./ArrowRight.esm-CgloU4pE.js";import"./TransactionModal-Dynmkpf3.js";import"./categoriesStore-CCs3UjTf.js";import"./frequenciesStore-CjJ5y9By.js";import"./InputField-INayOOiq.js";import"./Label-Dlgsq7uG.js";import"./StatusMessage-xDw7koHU.js";import"./Modal-C9yBiCi-.js";import"./index-D0H8KVhL.js";import"./index-Dwxvq1da.js";import"./Select-C5Jmtuzb.js";import"./ActionMenu-C8ZFvGo4.js";import"./IconBase.es-j1QXcov-.js";import"./TransactionDeleteModal-BRbuFCjE.js";import"./Trash.esm-MZ-Y2w0P.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
