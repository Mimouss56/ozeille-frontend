import{j as o,r as s}from"./iframe-C0DL0Vb_.js";import{B as i}from"./chunk-EPOLDU6W-CDOQqoqv.js";import"./axiosClient-DUbI1fGC.js";import{u as a}from"./transactionsStore-DNNvfgDY.js";import{T as c}from"./TransactionPage-CvKNMzxB.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-Cp20Y_Ds.js";import"./IconBase.es-BIMdh7dx.js";import"./ArrowRight.es-fEtDAz5d.js";import"./Button-DpXW6a8_.js";import"./index-DutoEiXV.js";import"./TransactionModal-B7LSkGN6.js";import"./Pencil.es-ClI5EJCq.js";import"./schemas-B6G9HTT6.js";import"./coerce-Bb8jzADg.js";import"./frequenciesStore-BCT4B5Z4.js";import"./InputField-DfEkDlck.js";import"./Label-C0k433pj.js";import"./StatusMessage-DWfip_zb.js";import"./Modal-DwAGAGbE.js";import"./index-BAUY_uw9.js";import"./index-CKH-Bsh2.js";import"./Select-2DgWG3lu.js";import"./ActionMenu-rau5EM-c.js";import"./TransactionDeleteModal-C6bIBDII.js";import"./Trash.es-iSccK4qx.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
