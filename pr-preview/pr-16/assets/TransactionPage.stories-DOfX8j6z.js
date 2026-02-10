import{j as o,r as s}from"./iframe-Wj2LhPGt.js";import{B as i}from"./chunk-EPOLDU6W-C3oQZn_p.js";import"./axiosClient-CKjBRArP.js";import{u as r}from"./transactionsStore-C6f1lkb0.js";import{T as l}from"./TransactionPage-Dn-Nk5oF.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-D6JoEn53.js";import"./IconBase.es-CJwHKbDz.js";import"./Wallet.es-RI7FytPl.js";import"./Button-IqzwB7DN.js";import"./index-DutoEiXV.js";import"./InputField-bzG3qRsC.js";import"./Label-nEcBUJnu.js";import"./StatusMessage-BJpBk2YZ.js";import"./DataTable-ifZ2B8PW.js";import"./Pagination-DzAMEi94.js";import"./ArrowRight.es-DWvpYcOg.js";import"./dayjs.min-CMAr3Gu4.js";import"./Select-DWhgfQH2.js";import"./TransactionDeleteModal-xVl3uquI.js";import"./Trash.es-D3tT855d.js";import"./Modal-BYWD3ZOM.js";import"./index-BR2qRNzx.js";import"./index-C3g9lHz3.js";import"./TransactionModal-BH97Gszk.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-bnybFUo2.js";import"./EmptyCard-CCFkJD5A.js";import"./ActionMenu-CsCbqoeU.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
