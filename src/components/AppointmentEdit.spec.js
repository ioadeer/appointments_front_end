import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import { render } from 'react-dom'

import AppointmentEdit from './AppointmentEdit'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateInput from './DateInput'

const setup = (propOverrides) => {
	const propPopulate = { name: 'Nadar', owner: 'Joaquin', date:'2020-01-01', end:'end'}
	const handlerPopulate ={
						handleNameChange  :jest.fn(),    
						handleOwnerChange :jest.fn(),     
						handleDateChange  :jest.fn(),    
						handleStartChange :jest.fn(),    
						handleEndChange		:jest.fn() 
						}
	const props = Object.assign({
		props: propPopulate, 
		handlers: handlerPopulate
	}, propOverrides)

	const renderer = createRenderer();
	renderer.render(<AppointmentEdit {...props}/>)
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
			const [nameDt, nameInput, ownerDt, ownerInput, dateDt, dateInput, startDt, startInput, endDt, endInput, button] = output.props.children

			expect(nameDt.type).toBe('dt')
			expect(nameDt.props.children).toBe('Appointment name')

			expect(nameInput.type).toBe('dd')
			expect(nameInput.props.children.type).toBe(TextInput)

			expect(ownerDt.type).toBe('dt')
			expect(ownerDt.props.children).toBe('Owner')

			expect(ownerInput.type).toBe('dd')
			expect(ownerInput.props.children.type).toBe(TextInput)

			expect(dateDt.type).toBe('dt')
			expect(dateDt.props.children).toBe('Date')

			expect(dateInput.type).toBe('dd')
			expect(dateInput.props.children.type).toBe(DateInput)

			expect(startDt.type).toBe('dt')
			expect(startDt.props.children).toBe('Start')

			expect(startInput.type).toBe('dd')
			expect(startInput.props.children.type).toBe(TimeInput)

			expect(endDt.type).toBe('dt')
			expect(endDt.props.children).toBe('End')

			expect(endInput.type).toBe('dd')
			expect(endInput.props.children.type).toBe(TimeInput)

			expect(button.type).toBe('button')
			expect(button.props.type).toBe('submit')
			expect(button.props.value).toBe('Submit')
			expect(button.props.children).toBe('Update')
			
		})
		it('should call handleNameChange function', () => {
			const { output,props} = setup()
			const dd = output.props.children[1]
			const dd_input = dd.props.children
			dd_input.props.onChange()
			expect(props.handlers.handleNameChange).toBeCalled()
		})
		it('should call handleOwnerChange function', () => {
			const { output,props} = setup()
			const dd = output.props.children[3]
			const dd_input = dd.props.children
			dd_input.props.onChange()
			expect(props.handlers.handleOwnerChange).toBeCalled()
		})
		it('should call handleDateChange', () => {
			const { output,props} = setup()
			const dd = output.props.children[5]
			const dd_input = dd.props.children
			dd_input.props.onChange()
			expect(props.handlers.handleDateChange).toBeCalled()
		})
		it('should call handleStartChange', () => {
			const { output,props} = setup()
			const dd = output.props.children[7]
			const dd_input = dd.props.children
			dd_input.props.onChange()
			expect(props.handlers.handleStartChange).toBeCalled()
		})
		it('should call handleEndChange function', () => {
			const { output,props} = setup()
			const dd = output.props.children[9]
			const dd_input = dd.props.children
			dd_input.props.onChange()
			expect(props.handlers.handleEndChange).toBeCalled()
		})
	})
})
