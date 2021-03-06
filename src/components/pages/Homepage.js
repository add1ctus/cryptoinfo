import React, { Component } from 'react';

import { PageHeader } from 'react-bootstrap';
import { CurrencyListContainer } from '../../containers/CurrencyListContainer';
import { NewsListContainer } from '../../containers/NewsListContainer';

export class Homepage extends Component {

	render() {
		return (
			<div>
				<PageHeader>
					Latest news
				</PageHeader>
				<NewsListContainer limit={2}/>
				<PageHeader>
					Most popular currencies
				</PageHeader>
		    	<CurrencyListContainer limit={3}/>

		    </div>
		);
	}

}