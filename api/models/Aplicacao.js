module.exports = {
	tableName: 'aplicacao',
	attributes: {
		id: {
      		type: 'integer',
      		primaryKey: true,
      		autoIncrement: true,
      		required: true,
			columnName: 'id'
		},
		nome:{
			type: 'string',
			size: 100,
			columnName: 'nome'
		},
		situacao:{
			type: 'string',
			size: 1,
			columnName: 'situacao'
		},
		url:{
			type: 'string',
			size: 150,
			columnName: 'url'
		},
		imeis: {
			collection: 'imei',
			via: 'aplicacao',
			through: 'imeiaplicacao'
		}
	},
	autoPK: false,
	autoCreatedAt: false,
	autoUpdatedAt: false
};

