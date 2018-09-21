import {handleResponse, handleError, formUrl} from './helpers'

export class Cryptocompare {
	
	static topCurrencies(symbol = 'USD', limit = 10) {
		const url = 'https://min-api.cryptocompare.com/data/top/totalvol';
		const params = {
			tsym: symbol,
			limit: limit
		};
		const endpoint = formUrl(url, params);

		return fetch(endpoint).then(handleResponse).then(jsonResponse => {
			jsonResponse.Data.forEach(function(curr) {
				curr.CoinInfo.price = parseFloat(curr.ConversionInfo.RAW[0].split('~')[5]);
			});
			return jsonResponse.Data.slice(0, limit);
		}).catch(handleError)
	}

	static latestNews() {
		const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';

		return fetch(url).then(handleResponse).then(jsonResponse => {
			return jsonResponse.Data;
		}).catch(handleError)
	}

	static getRate(fsym, tsym) {

		// console.log(fsym, tsym)

		const url = 'https://min-api.cryptocompare.com/data/price'
		const params = {
			fsym: fsym,
			tsyms: tsym
		}
		const endpoint=formUrl(url, params)

		return fetch(endpoint).then(handleResponse).then((data) => {
			console.log(data)
			return data[tsym]
		}).catch(handleError)

	}
}