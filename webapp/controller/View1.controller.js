sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel"
], function(Controller, ODataModel) {
	"use strict";

	return Controller.extend("MyTestMobile.controller.View1", {

		onInit: function() {
			var strUrl = "/sap/opu/odata/iwbep/EPM_DEVELOPER_SCENARIO_SRV/";
			/** @type sap/ui/model/odata/v2/ODataModel */
			var oModel = new ODataModel(strUrl, {useBatch: false});
			this.getView().setModel(oModel);
		}
	});
});