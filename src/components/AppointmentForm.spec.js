import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import { render } from 'react-dom'
import AppointmentForm from './AppointmentForm'
import AppointmentFieldSet from './AppointmentFieldSet'
import moment from 'moment' 

const setup = (propOverrides) => {

	const renderer = createRenderer();

	const propPopulate = { name: 'Nadar', owner: 'Joaquin', date:'2020-01-01', end:'end'}
	const handlerPopulate ={
						handleNameChange  :jest.fn(),    
						handleOwnerChange :jest.fn(),     
						handleDateChange  :jest.fn(),    
						handleStartChange :jest.fn(),    
						handleEndChange		:jest.fn() 
						}
	const preProps = Object.assign({
		props: propPopulate, 
		handlers: handlerPopulate
	})

	renderer.render(<AppointmentFieldSet {...preProps}/>)
	const out = renderer.getRenderOutput()

	const props = Object.assign({
		onSave: jest.fn(),
		name: 'Nadar',
		owner: 'Joaquin',
		date: '2020-01-01',
		start: '13:00:00',
		end: '14:00:00',
		inputComponent: out
	}, propOverrides)

	renderer.render(<AppointmentForm {...props}/>)
	const output = renderer.getRenderOutput()

	return{
		props: props,
		output: output,
		renderer: renderer
	}
}

describe( 'component', () => {
	describe('Appointment Form', () => {
		it('should render correctly', () => {
			const { output } = setup()

			expect(output.type).toBe('form')
			expect(output.props.className).toBe('AppointmentForm')

			const appointmentFieldSet = output.props.children
			expect(appointmentFieldSet.type).toBe('fieldset')
		})

		it('should call onSave function', () => {
			const { output, props } = setup()
			output.props.onSubmit({preventDefault: jest.fn(), target : {value : ''} })
			expect(props.onSave).toBeCalled()
		})

		it('should update name value',() => {
			const { output, props, renderer } = setup()
			let appointmentFieldSet = output.props.children
			appointmentFieldSet.props
												 .handlers.handleNameChange({
													 target:{ value: 'New name' }
												 })
			const updated = renderer.getRenderOutput()
			appointmentFieldSet = updated.props.children
			expect(appointmentFieldSet.props.props.name).toEqual('New name')
		})
		it('should update owner value',() => {
			const { output, props, renderer } = setup()
			let appointmentFieldSet = output.props.children
			appointmentFieldSet.props
												 .handlers.handleOwnerChange({
													 target:{ value: 'New owner' }
												 })
			const updated = renderer.getRenderOutput()
			appointmentFieldSet = updated.props.children
			expect(appointmentFieldSet.props.props.owner).toEqual('New owner')
		})
		it('should update date value',() => {
			const { output, props, renderer } = setup()
			let appointmentFieldSet = output.props.children
			appointmentFieldSet.props
												 .handlers.handleDateChange({
													 target:{ value: '2020-01-02' }
												 })
			const updated = renderer.getRenderOutput()
			appointmentFieldSet = updated.props.children
			expect(appointmentFieldSet.props.props.date).toEqual('2020-01-02')
		})

		it('should update start value',() => {
			const { output, props, renderer } = setup()
			let appointmentFieldSet = output.props.children
			const newStartTime = moment("13:30","HH:mm aa")
			appointmentFieldSet.props
												 .handlers
												 .handleStartChange(newStartTime)
			const updated = renderer.getRenderOutput()
			appointmentFieldSet = updated.props.children
			expect(appointmentFieldSet.props.props.start).toEqual('13:30:00')
		})

		it('should update end value',() => {
			const { output, props, renderer } = setup()
			let appointmentFieldSet = output.props.children
			const newEndTime = moment("14:30","HH:mm aa")
			appointmentFieldSet.props
												 .handlers
												 .handleEndChange(newEndTime)
			const updated = renderer.getRenderOutput()
			appointmentFieldSet = updated.props.children
			expect(appointmentFieldSet.props.props.end).toEqual('14:30:00')
		})
	})
})
