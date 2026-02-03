import{j as o,r as s}from"./iframe-C_JWn-k2.js";import{B as i}from"./chunk-EPOLDU6W-kxenRWhN.js";import"./axiosClient-D6T_z2Y_.js";import{u as a}from"./transactionsStore-C0Kj7akj.js";import{T as c}from"./TransactionPage-Cirb7Hdd.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-D70ge_F2.js";import"./IconBase.es-DD77hRyh.js";import"./ArrowRight.es-C6dqQq3Q.js";import"./Button-BuBtEGPw.js";import"./index-DutoEiXV.js";import"./TransactionModal-dG6tJhC4.js";import"./Pencil.es-DoBUH4gv.js";import"./schemas-D96PONPH.js";import"./coerce-Cf5YFoET.js";import"./frequenciesStore-aShp5Gn-.js";import"./InputField-DhliEuKG.js";import"./Label-D-wrVH80.js";import"./StatusMessage-CO_F7VMU.js";import"./Modal-Cd08VpHA.js";import"./index-DbCJw8Ta.js";import"./index-CWcrDfyh.js";import"./Select-DQOjmXYY.js";import"./ActionMenu-DvyUyIeb.js";import"./TransactionDeleteModal-C98GO1lS.js";import"./Trash.es-BTTO8JSI.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
