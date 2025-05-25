Ext.define("CadComputercmd.store.Personnel", {
  extend: "Ext.data.Store",
  alias: "store.personnel",
  model: "CadComputercmd.model.Personnel",

  // Remova o "data" estático e configure o proxy para a API:
  proxy: {
    type: "ajax",
    api: {
      read: "https://68309ddd6205ab0d6c39d00f.mockapi.io/api/v1/computadores",
      create: "https://68309ddd6205ab0d6c39d00f.mockapi.io/api/v1/computadores",
      update: "https://68309ddd6205ab0d6c39d00f.mockapi.io/api/v1/computadores",
      destroy:
        "https://68309ddd6205ab0d6c39d00f.mockapi.io/api/v1/computadores",
    },
    remoteSort: true, // Requer suporte da API
    remoteFilter: true,
    extraParams: {
      sortBy: "id", // Campo para ordenação
      order: "desc", // Ordem decrescente
    },
    reader: {
      type: "json",
      rootProperty: "",
    },
    writer: {
      type: "json",
      writeAllFields: true,
    },
    noCache: false,
    startParam: "",
    headers: {
      "Content-Type": "application/json",
    },
  },

  // Carrega os dados automaticamente ao criar a store
  autoLoad: true,
  autoSync: false,
  pageSize: 15,
});
