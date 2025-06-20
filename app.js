/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CadComputercmd.Application',

    name: 'CadComputercmd',

    requires: [
        // This will automatically load all classes in the CadComputercmd namespace
        // so that application classes do not need to require each other.
        'CadComputercmd.*'
    ],

    // The name of the initial view to create.
    mainView: 'CadComputercmd.view.main.Main'
});
