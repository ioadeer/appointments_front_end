import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import { render } from 'react-dom'

import AppointmentDetail from './AppointmentDetail'

const setup = (propOverrides) => {

	const props = Object.assign({
		name: 'Nadar',
		owner: 'Joaquin',
		date: '2020-01-01',
		start: '13:00:00',
		end: '14:00:00'
	}, propOverrides)

	const renderer = createRenderer();
	renderer.render(<AppointmentDetail{...props}/>)
	const output = renderer.getRenderOutput()
	return{
		props: props,
		output: output
	}
}

describe( 'component', () => {
	describe('AppointmentFieldSet', () => {
		it('should render correctly', () => {
			const { output } = setup()
			expect(output.type).toBe('dl')
			const [nameDt, nameDd, ownerDt, ownerDd, dateDt, dateDd, startDt, startDd, endDt, endDd ] = output.props.children

			expect(nameDt.type).toBe('dt')
			expect(nameDt.props.children).toBe('Appointment name')

			expect(nameDd.type).toBe('dd')
			expect(nameDd.props.children).toBe('Nadar')

			expect(ownerDt.type).toBe('dt')
			expect(ownerDt.props.children).toBe('Owner')

			expect(ownerDd.type).toBe('dd')
			expect(ownerDd.props.children).toBe('Joaquin')

			expect(dateDt.type).toBe('dt')
			expect(dateDt.props.children).toBe('Date')

			expect(dateDd.type).toBe('dd')
			expect(dateDd.props.children).toBe('2020-01-01')

			expect(startDt.type).toBe('dt')
			expect(startDt.props.children).toBe('Start')

			expect(startDd.type).toBe('dd')
			expect(startDd.props.children).toBe('13:00:00')

			expect(endDt.type).toBe('dt')
			expect(endDt.props.children).toBe('End')

			expect(endDd.type).toBe('dd')
			expect(endDd.props.children).toBe('14:00:00')
		})
	})
})
