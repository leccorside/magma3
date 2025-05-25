Ext.define("CadComputercmd.model.Personnel", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int" }, // Campo ID como inteiro
    {
      name: "nome",
      type: "string",
      allowBlank: false, // Campo obrigatório
    },
    {
      name: "bemPatrimonial",
      type: "string",
      allowBlank: false,
    },
    "identificador",
    {
      name: "dataCompra",
      type: "date",
      allowBlank: false,
      dateFormat: "d/m/Y",
    },
  ],
  alidators: {
    nome: { type: "presence", message: "Nome é obrigatório!" },
    bemPatrimonial: {
      type: "presence",
      message: "Bem patrimonial é obrigatório!",
    },
    identificador: {
      type: "presence",
      message: "Identificador é obrigatório!",
    },
    dataCompra: { type: "presence", message: "Data de Compra é obrigatório!" },
  },
});
