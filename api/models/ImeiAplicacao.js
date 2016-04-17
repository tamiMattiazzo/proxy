module.exports = {
	tableName: 'imei_aplicacao',
	attributes: {
		imei: {
			model: 'imei',
			columnName: '_imei'
		},
		aplicacao: {
			model: 'aplicacao',
			columnName: '_aplicacao'
		}
	},
	autoPK: false,
	autoCreatedAt: false,
	autoUpdatedAt: false
};

