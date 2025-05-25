Ext.define("CadComputercmd.view.main.Main", {
  extend: "Ext.container.Container", // Troquei de Ext.tab.Panel para Container
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "CadComputercmd.view.main.List", // Mantenha apenas o essencial
    "CadComputercmd.view.main.MainController", // Adicione
    "CadComputercmd.view.main.MainModel",
  ],

  controller: "main", // Mantenha esta linha
  viewModel: "main", // Adicione esta linha

  layout: "fit", // Layout simples que expande o conteúdo

  items: [
    {
      xtype: "panel",
      layout: "fit",
      bodyPadding: 20, // Espaçamento aqui
      items: [
        {
          xtype: "mainlist",
        },
      ],
    },
  ],
});
