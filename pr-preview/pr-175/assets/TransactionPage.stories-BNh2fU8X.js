import{j as o,r as s}from"./iframe-ejAZJ4Ci.js";import{B as i}from"./chunk-EPOLDU6W-BZvmhKLF.js";import"./axiosClient-CzG_AOxM.js";import{u as a}from"./transactionsStore-Cn-AD0No.js";import{T as l}from"./TransactionPage-Bhnl_QtA.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CJnLsU-H.js";import"./IconBase.es-hV5YDUYq.js";import"./ArrowRight.es-C6smZ48o.js";import"./Button-BAbJexyf.js";import"./index-DutoEiXV.js";import"./TransactionModal-CVzho4SF.js";import"./Pencil.es-Z7WlZ66D.js";import"./InputField-oA9_d6Vq.js";import"./Label-BzW-QoeC.js";import"./StatusMessage-1zsWcNmK.js";import"./Modal-DEQNJKM7.js";import"./index-CkDB0zog.js";import"./index-CDLwK_kp.js";import"./Select-D_cHWy4B.js";import"./schemas-DN8j2VI_.js";import"./coerce-ycYB8rJd.js";import"./frequenciesStore-BKSk_LZl.js";import"./ActionMenu-DvvBrpYP.js";import"./TransactionDeleteModal-CuYxK9HR.js";import"./Trash.es-BpN8_RtI.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:r.length,page:1,limit:10},C={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
