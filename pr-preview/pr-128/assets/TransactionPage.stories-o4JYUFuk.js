import{j as o,r as s}from"./iframe-hWm-9iEN.js";import{B as i}from"./chunk-EPOLDU6W-h0Fu-4yj.js";import"./axiosClient-CxSye-c0.js";import{u as a}from"./transactionsStore-CaLnU0QD.js";import{T as c}from"./TransactionPage-BkBKZ8ZK.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-CjcWtXPU.js";import"./Button-CuoqHWCZ.js";import"./index-DutoEiXV.js";import"./IconBase.esm-B35wePIA.js";import"./ArrowRight.esm-DhqfybeI.js";import"./TransactionModal-C7bJ0YZN.js";import"./categoriesStore-AN5z8GkO.js";import"./frequenciesStore-C6VoR4y2.js";import"./InputField-Ds9meHDD.js";import"./Label-Duta3RPd.js";import"./StatusMessage-XFW3soVM.js";import"./Modal-DDs82rui.js";import"./index-C6_vv6Ub.js";import"./index-AB13IOfB.js";import"./Select-C38D74oy.js";import"./ActionMenu-hz-WEW9y.js";import"./IconBase.es-DK-WNKJE.js";import"./TransactionDeleteModal-Dx_wnmXw.js";import"./Trash.esm-D-24fQi2.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},_={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
