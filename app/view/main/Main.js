/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ChartToImgOrPdf.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'ChartToImgOrPdf.view.main.MainController',
        'ChartToImgOrPdf.view.main.MainModel'
    ],
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
    },
    items: [{
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                    title: 'cartesian chart',
                    dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [{
                                    xtype: 'button',
                                    text: 'Download as',
                                    menu: {
                                        items: [{
                                                text: 'JPEG',
                                                listeners: {
                                                    click: function () {
                                                        this.up('tabpanel').down('cartesian').download({
                                                            format: 'jpeg',
                                                            filename: this.up('tabpanel').down('cartesian').title
                                                        });
                                                    }
                                                }
                                            }, {
                                                text: 'PNG',
                                                listeners: {
                                                    click: function () {
                                                        this.up('tabpanel').down('cartesian').download({
                                                            format: 'png',
                                                            filename: this.up('tabpanel').down('cartesian').title
                                                        });
                                                    }
                                                }
                                            },
                                            {
                                                text: 'PDF',
                                                listeners: {
                                                    click: function () {
                                                        this.up('tabpanel').down('cartesian').download({
                                                            format: 'pdf',
                                                            filename: this.up('tabpanel').down('cartesian').title
                                                        });
                                                    }
                                                }
                                            },
                                            {
                                                text: 'GIF',
                                                listeners: {
                                                    click: function () {
                                                        this.up('tabpanel').down('cartesian').download({
                                                            format: 'gif',
                                                            filename: this.up('tabpanel').down('cartesian').title
                                                        });
                                                    }
                                                }
                                            }

                                        ]
                                    }


                                }]
                        }],
                    xtype: 'cartesian',
                    //renderTo: document.body,
                    width: 300,
                    height: 300,
                    store: {
                        fields: ['name', 'value'],
                        data: [{
                                name: 'metric one',
                                value: 10
                            }, {
                                name: 'metric two',
                                value: 7
                            }, {
                                name: 'metric three',
                                value: 5
                            }, {
                                name: 'metric four',
                                value: 2
                            }, {
                                name: 'metric five',
                                value: 27
                            }]
                    },
                    axes: [{
                            type: 'numeric',
                            position: 'left',
                            title: {
                                text: 'Sample Values',
                                fontSize: 15
                            },
                            fields: 'value'
                        }, {
                            type: 'category',
                            position: 'bottom',
                            title: {
                                text: 'Sample Values',
                                fontSize: 15
                            },
                            fields: 'name'
                        }],
                    series: {
                        type: 'bar',
                        subStyle: {
                            fill: ['#388FAD'],
                            stroke: '#1F6D91'
                        },
                        xField: 'name',
                        yField: 'value'
                    }

                }]
        }]
});
