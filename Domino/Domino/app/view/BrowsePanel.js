/*
 * File: app/view/BrowsePanel.js
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

Ext.define('Domino.view.BrowsePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.browsepanel',

    requires: [
        'Domino.view.BrowsePanelViewModel',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    viewModel: {
        type: 'browsepanel'
    },
    id: 'browsePanel',
    itemId: 'browsePanel',
    animCollapse: true,
    header: false,
    title: 'Sfoglia',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'menu',
            flex: 1,
            floating: false,
            width: 120,
            items: [
                {
                    xtype: 'menuitem',
                    text: 'Menu Item'
                },
                {
                    xtype: 'menuitem',
                    text: 'Menu Item'
                },
                {
                    xtype: 'menuitem',
                    text: 'Menu Item'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            flex: 5,
            id: 'browseDetail',
            itemId: 'browseDetail',
            bodyStyle: 'background:#D1ECF9;',
            title: 'Iscritti 2',
            bind: {
                store: '{SubjectsListStore}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'id',
                    text: 'Id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'description',
                    text: 'Description'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'bornLocality',
                    text: 'BornLocality'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'bornRegion',
                    text: 'BornRegion'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'bornTerritory',
                    text: 'BornTerritory'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'bornCountry',
                    text: 'BornCountry'
                }
            ]
        }
    ]

});