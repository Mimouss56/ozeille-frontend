import{j as o,r as s}from"./iframe-B-qyafta.js";import{B as i}from"./chunk-EPOLDU6W-C3skvX7z.js";import"./axiosClient-DxapTp_0.js";import{u as r}from"./transactionsStore-v-69FRk-.js";import{T as l}from"./TransactionPage-_UiXmwwX.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-D-GEjPrN.js";import"./IconBase.es-C_FrgYWT.js";import"./Wallet.es-DXQ6i8mL.js";import"./Button-D6m03S5f.js";import"./index-DutoEiXV.js";import"./InputField-BUFJBREF.js";import"./Label-DoYnKHh1.js";import"./StatusMessage-FOYskXQf.js";import"./DataTable-BIf2JUFx.js";import"./Pagination-qKjyeYNU.js";import"./ArrowRight.es-BJvkModi.js";import"./dayjs.min-BpQ9T9v0.js";import"./Select-BI-4y2DZ.js";import"./TransactionDeleteModal-tQ1vOu_0.js";import"./Trash.es-40MkxjOM.js";import"./Modal-DFGuRcPF.js";import"./index-DqcfV8ul.js";import"./index-bXfG0jUl.js";import"./TransactionModal-BFf8IPPm.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-BphXcCtr.js";import"./EmptyCard-D1_alWgn.js";import"./ActionMenu-Bfu4MdUL.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["WithData"];export{t as WithData,w as __namedExportsOrder,v as default};
