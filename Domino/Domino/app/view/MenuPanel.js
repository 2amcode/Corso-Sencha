/*
 * File: app/view/MenuPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Domino.view.MenuPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.menupanel',

    requires: [
        'Domino.view.MenuPanelViewModel',
        'Domino.view.MenuPanelViewController',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    controller: 'menupanel',
    viewModel: {
        type: 'menupanel'
    },
    baseCls: 'x-panel menuPanel',
    id: 'menuPanel',
    itemId: 'menuPanel',
    width: 150,
    header: false,
    title: 'menuPanel',

    dockedItems: [
        {
            xtype: 'menu',
            dock: 'bottom',
            floating: false,
            id: 'mainMenu',
            itemId: 'mainMenu',
            ui: 'dashmenu',
            width: 120,
            items: [
                {
                    xtype: 'menuitem',
                    id: 'dashMenuItem',
                    glyph: 'xe043@glyphicons',
                    text: 'Dashboard',
                    listeners: {
                        click: 'onDashMenuItemClick'
                    }
                },
                {
                    xtype: 'menuitem',
                    id: 'notificationsMenuItem',
                    glyph: 'x2709@glyphicons',
                    text: 'Notifiche'
                },
                {
                    xtype: 'menuitem',
                    id: 'browseMenuItem',
                    glyph: 'xe056@glyphicons',
                    text: 'Sfoglia',
                    listeners: {
                        click: 'onBrowseMenuItemClick'
                    }
                },
                {
                    xtype: 'menuitem',
                    id: 'settingsMenuItem',
                    glyph: 'xe149@glyphicons',
                    text: 'Acquista e configura'
                }
            ]
        }
    ]

});