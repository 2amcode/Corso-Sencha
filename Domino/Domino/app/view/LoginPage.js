/*
 * File: app/view/LoginPage.js
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

Ext.define('Domino.view.LoginPage', {
    extend: 'Ext.container.Container',
    alias: 'widget.loginpage',

    requires: [
        'Domino.view.LoginPageViewModel',
        'Domino.view.LoginPanel',
        'Domino.view.LoginForm',
        'Domino.view.MyView',
        'Ext.form.Panel',
        'Ext.view.View'
    ],

    viewModel: {
        type: 'loginpage'
    },
    id: 'loginPage',
    itemId: 'loginPage',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            flex: 3,
            baseCls: 'x-container promotionalContainer',
            id: 'promotionalContainer',
            itemId: 'promotionalContainer',
            layout: 'border',
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    region: 'center',
                    baseCls: 'x-container centerContainer',
                    id: 'centerContainer',
                    itemId: 'centerContainer',
                    margin: 50,
                    layout: 'border',
                    items: [
                        {
                            xtype: 'container',
                            region: 'north',
                            height: 150,
                            html: '<h1>LOGO DOMINO</h1>',
                            id: 'logoContainer',
                            itemId: 'logoContainer'
                        },
                        {
                            xtype: 'container',
                            region: 'center',
                            baseCls: 'x-container slogan',
                            html: '<h2>Slogan info principali dell\'applicazione</h2>',
                            id: 'sloganContainer',
                            itemId: 'sloganContainer'
                        },
                        {
                            xtype: 'container',
                            region: 'south',
                            baseCls: 'x-container logotecsisContainer',
                            height: 80,
                            html: '<img src="resources/images/Logo_TecSisNet.png"/>',
                            id: 'logotecsisContainer',
                            itemId: 'logotecsisContainer',
                            layout: 'fit'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            baseCls: 'x-container loginContainer',
            itemId: 'loginContainer',
            minWidth: 300,
            style: 'background:#D1ECF9',
            width: 300,
            layout: 'border',
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    region: 'center',
                    id: 'loginPagesContainer',
                    itemId: 'loginPagesContainer',
                    margin: '0 20 0 20',
                    maskElement: '',
                    layout: 'card',
                    items: [
                        {
                            xtype: 'loginpanel',
                            id: 'homeLoginMenuPanel'
                        },
                        {
                            xtype: 'loginform',
                            id: 'homeLoginFormPanel'
                        },
                        {
                            xtype: 'myview'
                        }
                    ]
                }
            ]
        }
    ]

});