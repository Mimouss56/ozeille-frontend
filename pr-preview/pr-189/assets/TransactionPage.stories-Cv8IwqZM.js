import{j as o,r as s}from"./iframe-Dbgcaf5F.js";import{B as i}from"./chunk-EPOLDU6W-7MlZhaK2.js";import"./axiosClient-B8oq2bW1.js";import{u as a}from"./transactionsStore-g9zkiy2P.js";import{T as l}from"./TransactionPage-BLJEWTK0.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-BYcpWPc0.js";import"./IconBase.es-BpjPF3Mi.js";import"./Button-DLdV31na.js";import"./index-DutoEiXV.js";import"./DataTable-CFAfuIp4.js";import"./ArrowRight.es-CAHn8jIB.js";import"./TransactionDeleteModal-DcFHjx8a.js";import"./Trash.es-XMA8RyRP.js";import"./Modal-CZPxP1aW.js";import"./index-CMdFrp_D.js";import"./index-CKQGPp8x.js";import"./TransactionModal-JTGGvPhB.js";import"./InputField-C1Yc_rk-.js";import"./Label-S8s4Kcsc.js";import"./StatusMessage-jjPiCp4M.js";import"./Select-ON0awVWy.js";import"./schemas-CIz8Hjhq.js";import"./coerce-BX43Vx1I.js";import"./frequenciesStore-ClY34i3P.js";import"./ActionMenu-QXRyS5YK.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
