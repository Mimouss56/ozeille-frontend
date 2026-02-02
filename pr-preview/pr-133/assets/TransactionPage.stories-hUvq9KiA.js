import{j as o,r as s}from"./iframe-AesjjQvt.js";import{B as i}from"./chunk-EPOLDU6W-CuzVOCbn.js";import"./axiosClient-C_JD3ajP.js";import{u as a}from"./transactionsStore-KZE-H9JM.js";import{T as c}from"./TransactionPage-79_VODju.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-DUAIKOrQ.js";import"./Button-BfX4mHpP.js";import"./index-DutoEiXV.js";import"./IconBase.esm-MQN8gy1M.js";import"./ArrowRight.esm-CP3rh4cD.js";import"./TransactionModal-ELSFZifs.js";import"./categoriesStore-BtZcRoB4.js";import"./frequenciesStore-BHRG8Pk6.js";import"./InputField-BwADzgkC.js";import"./Label-Cc9oHlK5.js";import"./StatusMessage-Davp4lcl.js";import"./Modal-CHFZ641_.js";import"./index-DAHkyylp.js";import"./index-BozEz1wf.js";import"./Select-DS1LZyjb.js";import"./ActionMenu-DWIbj3da.js";import"./IconBase.es-7ZhZFeb4.js";import"./TransactionDeleteModal-Bif42XLM.js";import"./Trash.esm-CSpL5CHW.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
