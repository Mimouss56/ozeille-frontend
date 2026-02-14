import{j as o,r as s}from"./iframe-z1zinKTN.js";import{B as i}from"./chunk-EPOLDU6W-DVOYcYA6.js";import"./axiosClient-CUMaPKRu.js";import{u as r}from"./transactionsStore-Bnn0k51I.js";import{T as l}from"./TransactionPage-DTOyyr_9.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DdWOCBPC.js";import"./IconBase.es-BHOwNV_p.js";import"./Wallet.es-DvlRqA1_.js";import"./Button-DGdmapkv.js";import"./index-DutoEiXV.js";import"./InputField-CtrHOFbz.js";import"./Label-blfz8AFX.js";import"./StatusMessage-OFWvC-NX.js";import"./DataTable-Cn9xa_nq.js";import"./Pagination-D8sqCLCy.js";import"./ArrowRight.es-Cwv_6VHw.js";import"./dayjs.min-DUlyWteD.js";import"./Select-D6UU11Tu.js";import"./TransactionDeleteModal-Bsn6Oa1O.js";import"./Trash.es-BxbXnrH1.js";import"./Modal-DWyekP3_.js";import"./index-B_y613vr.js";import"./index-Cq-G7Zgc.js";import"./TransactionModal-CVXftP3c.js";import"./schemas-D3hWGOKU.js";import"./coerce-Cd9CS-hv.js";import"./frequenciesStore-B3b6Rooe.js";import"./EmptyCard-BEq0hHJ0.js";import"./ActionMenu-DfN7t6oZ.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},v={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
