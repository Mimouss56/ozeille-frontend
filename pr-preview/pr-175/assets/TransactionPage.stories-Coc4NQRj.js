import{j as o,r as s}from"./iframe-D3GX8_4k.js";import{B as i}from"./chunk-EPOLDU6W-CWWivB5M.js";import"./axiosClient-CmaP8ePX.js";import{u as a}from"./transactionsStore-EhRNWia7.js";import{T as l}from"./TransactionPage-FsG9Gk2W.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BOcis9Ic.js";import"./IconBase.es-43JV-uNr.js";import"./ArrowRight.es-CLu5cpyy.js";import"./Button-C2HRJEoJ.js";import"./index-DutoEiXV.js";import"./TransactionModal--hpX__e2.js";import"./Pencil.es-BXlPSM6u.js";import"./InputField-Xs8VEuB6.js";import"./Label-p759_UVT.js";import"./StatusMessage-8Tths54n.js";import"./Modal-BEKwPw55.js";import"./index-_ftOUwYl.js";import"./index-BtKVb7xx.js";import"./Select-Cv4PYuEB.js";import"./schemas-DE_wHYVB.js";import"./coerce-D8Fc0n9Q.js";import"./frequenciesStore-CDz6dryQ.js";import"./ActionMenu-qD8OsUDE.js";import"./TransactionDeleteModal-GzeM_8ME.js";import"./Trash.es-FGmej0IE.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
