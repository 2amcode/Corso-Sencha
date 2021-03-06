/*
 * File: app/view/LoginForm.js
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

Ext.define('Domino.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',

    requires: [
        'Domino.view.LoginFormViewModel',
        'Domino.view.LoginFormViewController',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'loginform',
    viewModel: {
        type: 'loginform'
    },
    margin: '200 0 200 0',
    layout: 'auto',
    bodyPadding: 10,
    header: false,
    title: 'Login Form',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Login',
            labelWidth: 60
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Password',
            labelWidth: 60
        },
        {
            xtype: 'button',
            id: 'loginCmd',
            itemId: 'loginCmd',
            text: 'Accedi',
            listeners: {
                click: 'onLoginCmdClick'
            }
        },
        {
            xtype: 'button',
            id: 'cancelLoginCmd',
            itemId: 'cancelLoginCmd',
            iconAlign: 'right',
            text: 'Torna',
            listeners: {
                click: 'onCancelLoginCmdClick'
            }
        }
    ]

});