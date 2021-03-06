/*
 * File: app/view/Master.js
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

Ext.define('MVVM.view.Master', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.MasterView',

    requires: [
        'MVVM.view.MasterViewModel',
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    viewModel: {
        type: 'master'
    },
    width: 160,
    title: 'Master Panel',
    store: 'People',

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'name',
            text: 'Name',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'email',
            text: 'Email',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'phone',
            text: 'Phone',
            flex: 1
        }
    ]

});