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
        'Ext.tree.Panel',
        'Ext.tree.View',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.View'
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
            xtype: 'treepanel',
            flex: 1,
            id: 'browseTree',
            itemId: 'browseTree',
            bodyStyle: 'background:#1BA1E2;',
            title: 'Sfoglia...',
            viewConfig: {

            }
        },
        {
            xtype: 'gridpanel',
            flex: 5,
            id: 'browseDetail',
            itemId: 'browseDetail',
            bodyStyle: 'background:#D1ECF9;',
            title: 'Iscritti 2',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'String'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'number',
                    text: 'Number'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'date',
                    text: 'Date'
                },
                {
                    xtype: 'booleancolumn',
                    dataIndex: 'bool',
                    text: 'Boolean'
                }
            ]
        }
    ]

});