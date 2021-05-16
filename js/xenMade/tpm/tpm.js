!function($, window, document)
{
    "use strict";

    XF.TPMWidgetInserter = XF.extend(XF.Inserter, {
        __backup: {
            'onLoad': '_onLoad'
        },

        onLoad: function(data)
        {
            this._onLoad(data);

            if (!data.html)
            {
                return false;
            }
        }
    });

    XF.TPMWidgetClick = XF.Click.newHandler({
        eventNameSpace: 'TPMWidgetClick',
        options: $.extend(true, {}, XF._baseInserterOptions),

        inserter: null,

        init: function()
        {
            this.inserter = new XF.TPMWidgetInserter(this.$target, this.options);
        },

        click: function(e)
        {
            var month = this.$target.parent().parent().find('.tpm_month').val();
            var year = this.$target.parent().parent().find('.tpm_year').val();
            var limit = this.$target.parent().parent().find('.tpm_limit').val();
            var style = this.$target.parent().parent().find('.tpm_style').val();

            this.inserter.href = this.$target.attr('href') + '?year=' + year + '&month=' + month + '&limit=' + limit + '&style=' + style;
            this.inserter.onEvent(e);
        }
    });

    XF.Click.register('tpmclicker', 'XF.TPMWidgetClick');
}
(jQuery, window, document);