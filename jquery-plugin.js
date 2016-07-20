// plugin template by https://jqueryboilerplate.com/
;(function ($, window, document, undefined) {

	"use strict";

	var pluginName = "plugin",
		dataKey = "plugin_" + pluginName;

	var Plugin = function (element, options) {

		this.element = $(element);
		this.count = 1;

		this.options = {
			val1                            : "some value",
			activate						: function() {}
		};

		this.init(options);

	};

	Plugin.prototype = {
		init: function (options) {

			this.element.html(this.count);

		},
		increase: function () {
			this.count = this.count+1;
			this.element.html(this.count);
		},
		decrease: function () {
			this.count = this.count-1;
			this.element.html(this.count);
		},
		destroy: function () {
			this.element.unbind().removeData();
			$('*',this.element).unbind().removeData();
			this.element.html("I'm dead");
			this.count = 0;
		}
	};

	//----------------------------------------------------
	//----------------------------------------------------
	//----------------------------------------------------
	//----------------------------------------------------
	$.fn[pluginName] = function (options) {

		var plugin = this.data(dataKey);

		if (plugin instanceof Plugin) {
			if (typeof options !== 'undefined') {
				plugin.init(options);
			}
		} else {
			plugin = new Plugin(this, options);
			this.data(dataKey, plugin);
		}

		return plugin;
	};

}(jQuery, window, document));
