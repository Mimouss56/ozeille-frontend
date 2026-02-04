import{j as o,r as s}from"./iframe-q9bkF4y7.js";import{B as i}from"./chunk-EPOLDU6W-D8sxWEQ_.js";import"./axiosClient-ZzGgdNvF.js";import{u as a}from"./transactionsStore-BWYeWffd.js";import{T as l}from"./TransactionPage-B0XR6CFh.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-BwNES6_I.js";import"./IconBase.es-BZOO5h6-.js";import"./ArrowRight.es-utVKvuZE.js";import"./Button-BeOg9708.js";import"./index-DutoEiXV.js";import"./TransactionModal-B9NMMnWL.js";import"./Pencil.es-C3QbbeVM.js";import"./InputField-DLp2LqOA.js";import"./Label-DFIFIX2h.js";import"./StatusMessage-BRDh3mV2.js";import"./Modal-8pL_pZgE.js";import"./index-BsrBVCQa.js";import"./index-CLtQm4U-.js";import"./Select-Blp10Vj_.js";import"./schemas-B5ScU8xd.js";import"./coerce-CdSDbfoa.js";import"./frequenciesStore-C2A4m6kk.js";import"./ActionMenu-CljxinfR.js";import"./TransactionDeleteModal-DcvdI6tV.js";import"./Trash.es-CojebOqI.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
