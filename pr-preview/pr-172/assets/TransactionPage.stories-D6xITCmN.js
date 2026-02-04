import{j as o,r as s}from"./iframe-ARFA_WIw.js";import{B as i}from"./chunk-EPOLDU6W-CKXWSDiM.js";import"./axiosClient-BtBbSnBJ.js";import{u as a}from"./transactionsStore-CTqPHbhw.js";import{T as l}from"./TransactionPage-Q2gIDABi.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Db4AWU5h.js";import"./IconBase.es-BhEnArH9.js";import"./ArrowRight.es-6HEmClCT.js";import"./Button-BkwI09qH.js";import"./index-DutoEiXV.js";import"./TransactionModal-B7u3T1uW.js";import"./Pencil.es-dzUL0D3_.js";import"./InputField--K3d8j6w.js";import"./Label-BjYw7MuS.js";import"./StatusMessage-BuLUQhTq.js";import"./Modal-nNssXsfy.js";import"./index-xloxZI3P.js";import"./index-Dl7kLnhy.js";import"./Select-DPynZv9y.js";import"./schemas-Dugkjyeq.js";import"./coerce-BTYGIiUs.js";import"./frequenciesStore-C_gWD7Ig.js";import"./ActionMenu-DPmhwesw.js";import"./TransactionDeleteModal-BHnaGrif.js";import"./Trash.es-D1c835M-.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const W=["WithData"];export{t as WithData,W as __namedExportsOrder,C as default};
