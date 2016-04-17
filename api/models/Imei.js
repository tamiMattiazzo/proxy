module.exports = {
	tableName: 'imei',
	attributes: {
		numeroImei: {
			type: 'string',
			size: 50,
			primaryKey: true,
			required: true,
			columnName: 'numero_imei'
		},
		aplicacoes: {
			collection: 'aplicacao',
			via: 'imei',
			through: 'imeiaplicacao'
		}
	},
	autoPK: false,
	autoCreatedAt: false,
	autoUpdatedAt: false
};

