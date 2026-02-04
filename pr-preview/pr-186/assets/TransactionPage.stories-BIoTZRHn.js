import{j as o,r as s}from"./iframe-DpTib-Zx.js";import{B as i}from"./chunk-EPOLDU6W-BSyVaQRv.js";import"./axiosClient-BShDA9Vd.js";import{u as r}from"./transactionsStore-B82R3cR6.js";import{T as l}from"./TransactionPage-CyKfoAMM.js";import"./preload-helper-PPVm8Dsz.js";import"./Wallet.es-D6NHwAdj.js";import"./IconBase.es-CNNn3zwN.js";import"./EmptyCard-DsktDD9p.js";import"./index-DutoEiXV.js";import"./DataTable-CZP1dsQ6.js";import"./ArrowRight.es-CkV20kkm.js";import"./Button-ChGUDS-F.js";import"./TransactionModal-gmLxVRrn.js";import"./Pencil.es-Dys7fBGZ.js";import"./InputField-BgUvK_ec.js";import"./Label-CEyN9YVt.js";import"./StatusMessage-8vTB5UA5.js";import"./Modal-CcpEAHSG.js";import"./index-Bj31tINo.js";import"./index-CRZ7Vr7d.js";import"./Select-CZiuzwUu.js";import"./schemas-BGkEtAWS.js";import"./coerce-V690-OFM.js";import"./frequenciesStore-TFRlud_Q.js";import"./ActionMenu-B-EHJUVm.js";import"./TransactionDeleteModal-DsLvsZQ7.js";import"./Trash.es-CBo7FWEE.js";const a=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0,type:"INCOME"},categoryId:null}],c={totalPages:1,total:a.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:l,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(r.setState({transactions:a,meta:c,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{r.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
