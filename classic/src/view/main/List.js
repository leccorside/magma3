/**
 * This view is an example list of people.
 */
Ext.define("CadComputercmd.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",

  requires: ["CadComputercmd.store.Personnel"],

  controller: "main", // Garanta que o controller está vinculado

  viewModel: {
    type: "viewmodel", // Cria um ViewModel padrão
  },

  title: "Computadores",

  store: {
    type: "personnel",
  },

  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },

  // Botões docked no topo da grid
  dockedItems: [
    {
      xtype: "toolbar",
      dock: "top", // Dock no topo da grid
      items: [
        {
          xtype: "button",
          text: "Adicionar",
          handler: "onAddClick",
          margin: "0 5 0 0",
          iconCls: "fa fa-plus text-light",
          cls: "green-btn",
        },
        {
          xtype: "button",
          text: "Remover",
          handler: "onRemoveClick",
          iconCls: "fa fa-trash",
          cls: "red-btn",
        },
      ],
    },
  ],

  columns: [
    {
      text: "ID",
      dataIndex: "id",
      width: 50,
      hidden: false, // Mostra a coluna (opcional)
    },
    { text: "Nome", dataIndex: "nome", flex: 1 },
    { text: "Bem Patrimonial", dataIndex: "bemPatrimonial", flex: 1 },
    { text: "Identificador", dataIndex: "identificador", flex: 1 },
    {
      text: "Data de Compra",
      dataIndex: "dataCompra",
      width: 140,
      xtype: "datecolumn",
      format: "d/m/Y",
    },
  ],

  listeners: {
    itemdblclick: "onItemDblClick",
    load: function (store, records, success) {
      if (!success) {
        Ext.Msg.alert("Erro", "Falha ao carregar dados da API.");
      }
    },
    beforeload: function (store, operation) {
      console.log("URL:", store.getProxy().getUrl(operation));
    },
  },
});
