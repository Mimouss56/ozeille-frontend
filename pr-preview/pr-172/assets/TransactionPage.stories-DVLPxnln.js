import{j as o,r as s}from"./iframe-CccXUuDF.js";import{B as i}from"./chunk-EPOLDU6W-Do2Ws5-g.js";import"./axiosClient-D1wqeCOi.js";import{u as a}from"./transactionsStore-BWj818vp.js";import{T as c}from"./TransactionPage-C41LsC2_.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-v1zxD6pu.js";import"./IconBase.es-CjZqpH1n.js";import"./ArrowRight.es-DFtLiYlD.js";import"./Button-DlL2HUL4.js";import"./index-DutoEiXV.js";import"./TransactionModal-B0zvtnCC.js";import"./Pencil.es-DcH_u1PL.js";import"./schemas-Ce26SkAe.js";import"./coerce-CiDpJWzX.js";import"./frequenciesStore-LRbJ0Q4m.js";import"./InputField-B3m7gIoo.js";import"./Label-BUOUQbe7.js";import"./StatusMessage-DAmAeJ46.js";import"./Modal-QuJd9TEM.js";import"./index-Q-C1ctbw.js";import"./index-9rBu_Y6R.js";import"./Select-DoI3kcCF.js";import"./ActionMenu-2hmLVTDP.js";import"./TransactionDeleteModal-BJ7Q4jFz.js";import"./Trash.es-B8zOdd-5.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"}}],l={totalPages:1,total:r.length,page:1,limit:10},W={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const _=["WithData"];export{t as WithData,_ as __namedExportsOrder,W as default};
