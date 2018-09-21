import React from 'react'
import PropTypes from 'prop-types'

import {FormGroup,FormControl,Row,Col,Button, Glyphicon} from 'react-bootstrap'

export default class Converter extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col xs={12}>
						<div style={{padding: '10px 0', textAlign: 'right'}}>
							<Button bsStyle="default" onClick={this.props.handleRefresh}>
								<Glyphicon glyph="refresh" /> Refresh rate
							</Button>
						</div>
					</Col>
					<Col xs={6} md={3}>
						<FormControl
							type="number"
							value={this.props.fromCurrencyValue}
							onChange={this.props.handleValueChange}
						/>
					</Col>
					<Col xs={6} md={2}>
						<FormControl
							componentClass="select"
							placeholder="select"
							name="fromCurrency"
							value={this.props.fromCurrency}
							onChange={this.props.handleCurrencyChange}
						>
							<option value="BTC">BTC</option>
							<option value="XMR">XMR</option>
							<option value="BCH">BCH</option>
							<option value="USD">USD</option>
						</FormControl>
					</Col>
					<Col xs={12} md={2}>
						<div style={{textAlign: 'center'}}>
							<Button bsStyle="info" onClick={this.props.handleReplacement}>
								<Glyphicon glyph="transfer" />
							</Button>
						</div>
					</Col>
					<Col xs={6} md={3}>
						<FormControl
							type="number"
							value={this.props.toCurrencyValue}
							readonly="true"
						/>
					</Col>
					<Col xs={6} md={2}>
						<FormControl
							componentClass="select"
							placeholder="select"
							name="toCurrency"
							value={this.props.toCurrency}
							onChange={this.props.handleCurrencyChange}
						>
							<option value="BTC">BTC</option>
							<option value="USD">USD</option>
						</FormControl>
					</Col>
				</Row>
				{this.props.loading && <p style={{color: 'red'}}>Loading data... Please wait</p>}
			</div>
		)
	}
}