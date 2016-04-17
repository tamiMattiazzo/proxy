module.exports = {
	listar: function(req, res){
		Imei.find().populate('aplicacoes').exec(function(erro, imeis){
			if(erro){
				return res.view('500', {erro: erro});
			}

			return res.view('imeis', {
				title: 'Imeis',
				imeis: imeis
		    });
		});
	},
	obterPorImei: function(req, res){
		var condicao = (req.param('imei')) ? {numeroImei: req.param('imei')} : {};

		Imei.find(condicao).populate('aplicacoes').exec(function(erro, imeis){
			if(erro){
				return res.view('500', {erro: erro});
			}

			return res.view('imeis', {
				title: 'Imeis',
				imeis: imeis
		    });
		});
	},
	json: function(req, res){
		if(req.method === 'POST'){
			Imei.find({numeroImei: req.param('imei')}).populate('aplicacoes').exec(function(erro, imeis){
				if(erro){
					return res.view('500', {erro: erro});
				}

				return res.json(imeis);
			});
		}else{
			return res.json([]);
		}
	},
};