/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("CadComputercmd.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onItemDblClick: function (grid, record, item, index, e) {
    Ext.create("Ext.window.Window", {
      title: "Editar Computador - ID: " + record.get("identificador"),
      width: 500,
      modal: true,
      bodyPadding: 15,
      layout: "form",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Nome",
          name: "nome",
          allowBlank: false,
          value: record.get("nome"),
        },
        {
          xtype: "textfield",
          fieldLabel: "Bem Patrimonial",
          name: "bemPatrimonial",
          value: record.get("bemPatrimonial"),
        },
        {
          xtype: "numberfield",
          fieldLabel: "Identificador",
          name: "identificador",
          minValue: 0,
          value: record.get("identificador"),
        },
        {
          xtype: "datefield",
          fieldLabel: "Data de Compra",
          name: "dataCompra",
          format: "d/m/Y",
          submitFormat: "Y-m-d", // Formato para backend (futuro)
          value: record.get("dataCompra"),
          maxValue: new Date(), // Não permite data futura
        },
      ],
      buttons: [
        {
          text: "Fechar",
          iconCls: "fa fa-times",
          handler: function () {
            this.up("window").close();
          },
        },
      ],
    }).show();
  },

  // Função reutilizável para abrir o modal
  openComputerForm: function (record) {
    const isEdit = !!record;
    const formTitle = isEdit
      ? "Editar Computador - ID: " + record.get("identificador")
      : "Adicionar Novo Computador";

    // Cria o formulário com validação
    const form = Ext.create("Ext.form.Panel", {
      bodyPadding: 15,
      layout: "form",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Nome",
          name: "nome",
          allowBlank: false, // Obrigatório
          blankText: "Este campo é obrigatório!",
          validateOnChange: true,
          value: isEdit ? record.get("nome") : "",
          listeners: {
            change: function (field, newVal) {
              field.isValid(); // Força validação
            },
          },
        },
        {
          xtype: "textfield",
          fieldLabel: "Bem Patrimonial",
          name: "bemPatrimonial",
          allowBlank: false, // Obrigatório
          blankText: "Este campo é obrigatório!",
          validateOnChange: true,
          value: isEdit ? record.get("bemPatrimonial") : "",
          listeners: {
            change: function (field, newVal) {
              field.isValid();
            },
          },
        },
        {
          xtype: "numberfield",
          fieldLabel: "Identificador",
          name: "identificador",
          allowBlank: false, // Obrigatório
          blankText: "Este campo é obrigatório!",
          validateOnChange: true,
          minValue: 0,
          value: isEdit ? record.get("identificador") : "",
          listeners: {
            change: function (field, newVal) {
              field.isValid();
            },
          },
        },
        {
          xtype: "datefield",
          fieldLabel: "Data de Compra",
          name: "dataCompra",
          allowBlank: false, // Obrigatório
          blankText: "Este campo é obrigatório!",
          validateOnChange: true,
          format: "d/m/Y",
          value: isEdit ? record.get("dataCompra") : "",
          listeners: {
            change: function (field, newVal) {
              field.isValid();
            },
          },
        },
      ],
    });

    // Cria a janela com o botão de ação
    const window = Ext.create("Ext.window.Window", {
      title: formTitle,
      width: 500,
      modal: true,
      items: form,
      buttons: [
        {
          text: "Cancelar",
          iconCls: "fa fa-times",
          handler: function () {
            window.close();
          },
        },
        {
          text: isEdit ? "Salvar" : "Adicionar",
          itemId: "actionBtn",
          iconCls: isEdit ? "fa fa-save" : "fa fa-plus",
          disabled: false, // Inicia desabilitado
          formBind: true, // Habilita apenas quando o form for válido
          handler: function () {
            this.handleFormSubmit(form, window, record, isEdit);
          }.bind(this),
        },
      ],
    });

    // Validação inicial
    form.on("afterrender", function () {
      form.getForm().isValid(); // Força validação inicial
    });

    window.show();
  },

  onRemoveClick: function () {
    const grid = this.getView();
    const record = grid.getSelection()[0];

    if (record) {
      Ext.Msg.confirm(
        "Confirmação",
        "Deseja realmente excluir este item?",
        (choice) => {
          if (choice === "yes") {
            const store = grid.getStore();

            // 1. Primeiro remove da API
            Ext.Ajax.request({
              url: `https://68309ddd6205ab0d6c39d00f.mockapi.io/api/v1/computadores/${record.get(
                "id"
              )}`,
              method: "DELETE",
              success: () => {
                // 2. Só remove localmente após sucesso na API
                store.remove(record);
                Ext.toast({
                  html: "Registro removido com sucesso!",
                  align: "t",
                  slideInDuration: 400,
                  hideDuration: 500,
                });
              },
              failure: () => {
                Ext.Msg.alert("Erro", "Falha ao remover registro");
                store.reload(); // Recarrega os dados originais
              },
            });
          }
        }
      );
    }
  },

  handleFormSubmit: function (form, window, record, isEdit) {
    if (!form.isValid()) {
      Ext.Msg.alert("Erro", "Preencha todos os campos obrigatórios!");
      return; // Impede o envio
    }

    const values = form.getValues();
    const store = this.getView().getStore();
    const baseUrl =
      "https://68309ddd6205ab0d6c39d00f.mockapi.io/api/v1/computadores";

    if (isEdit) {
      // EDITION (PUT)
      Ext.Ajax.request({
        url: `${baseUrl}/${record.get("id")}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        jsonData: values,
        success: (response) => {
          const updatedData = Ext.JSON.decode(response.responseText);
          record.set(updatedData); // Atualiza APENAS o registro editado
          Ext.toast({
            html: "Registro atualizado com sucesso!",
            align: "t",
            slideInDuration: 400,
            hideDuration: 500,
          });
          window.close();
        },
        failure: () => {
          Ext.Msg.alert("Erro", "Falha ao atualizar registro");
        },
      });
    } else {
      // CREATE (POST)
      Ext.Ajax.request({
        url: baseUrl,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        jsonData: values,
        success: (response) => {
          const newData = Ext.JSON.decode(response.responseText);
          store.add(newData); // Adiciona o novo registro
          Ext.toast({
            html: "Registro adicionado com sucesso!",
            align: "t",
            slideInDuration: 400,
            hideDuration: 500,
          });
          window.close();
        },
        failure: () => {
          Ext.Msg.alert("Erro", "Falha ao adicionar registro");
        },
      });
    }
  },

  // Handler para duplo-clique (edição)
  onItemDblClick: function (grid, record) {
    this.openComputerForm(record);
  },

  // Handler para botão Adicionar
  onAddClick: function () {
    this.openComputerForm(null); // Abre com campos vazios
  },
});
