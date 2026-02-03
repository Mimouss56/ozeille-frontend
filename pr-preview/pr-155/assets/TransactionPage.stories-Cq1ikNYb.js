import{j as o,r as s}from"./iframe-CC6WGNqu.js";import{B as i}from"./chunk-EPOLDU6W-D13UEbwm.js";import"./axiosClient-CLkINzrB.js";import{u as a}from"./transactionsStore-DYfUMt1l.js";import{T as c}from"./TransactionPage-7Xjhfzn5.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-B3cMeDjK.js";import"./IconBase.es-DXFUh5Ru.js";import"./ArrowRight.es-TTci1KY3.js";import"./Button-BTrX1hSL.js";import"./index-DutoEiXV.js";import"./TransactionModal-CgLo4KOJ.js";import"./Pencil.es-BkKt5YuP.js";import"./schemas-CTJF-20V.js";import"./coerce-ZQTUorlt.js";import"./frequenciesStore-D1SGGPK1.js";import"./InputField-CdiIKe8A.js";import"./Label-Cy1t30IJ.js";import"./StatusMessage-Du6bMGda.js";import"./Modal-Bi7mzgj7.js";import"./index-BZ1kug55.js";import"./index-DoSJ53Ed.js";import"./Select-BrkO88BN.js";import"./ActionMenu-Bp_nqchV.js";import"./TransactionDeleteModal-Bb_z_o-B.js";import"./Trash.es-Cjtb2GuV.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
