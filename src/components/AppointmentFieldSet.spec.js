import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import { render } from 'react-dom'

import AppointmentFieldSet from './AppointmentFieldSet'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateInput from './DateInput'
import DateTimeInput from './DateTimeInput'
import Label from './Label'

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
	renderer.render(<AppointmentFieldSet {...props}/>)
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
			//console.log(output)
			expect(output.type).toBe('fieldset')
			expect(output.props.className).toBe('AppointmentFieldSet')
			const [legend, label_name, label_owner, date_input, label_end, button] = output.props.children
			expect(legend.type).toBe('legend')
			expect(legend.props.children).toBe('Create Appointment')

			expect(label_name.type).toBe(Label)
			expect(label_name.props.className).toBe("Name")
			expect(label_name.props.text).toBe("Name")
			let label_element = label_name.props.element
			expect(label_element.type).toBe(TextInput)
			expect(label_element.props.className).toBe('Name')
			expect(label_element.props.value).toBe('Nadar')

			expect(label_owner.type).toBe(Label)
			expect(label_owner.props.className).toBe("Owner")
			expect(label_owner.props.text).toBe("Owner")
			label_element = label_owner.props.element
			expect(label_element.type).toBe(TextInput)
			expect(label_element.props.className).toBe('Owner')
			expect(label_element.props.value).toBe('Joaquin')

			expect(date_input.type).toBe(DateTimeInput)
			expect(date_input.props.dateInputValue).toBe('2020-01-01')
			expect(date_input.props.text).toBe('Start')
			expect(date_input.props.className).toBe('Start')

			expect(label_end.type).toBe(Label)
			label_element = label_end.props.element
			expect(label_element.type).toBe(TimeInput)

			expect(button.type).toBe('button')
			expect(button.props.children).toBe('Add Date')
			expect(button.props.type).toBe('submit')
			expect(button.props.value).toBe('Submit')

		})
		it('should call handleNameChange function', () => {
			const { output,props} = setup()
			const label_name = output.props.children[1]
			const label_element = label_name.props.element
			label_element.props.onChange()
			expect(props.handlers.handleNameChange).toBeCalled()
		})
		it('should call handleOwnerChange function', () => {
			const { output,props} = setup()
			const label_name = output.props.children[2]
			const label_element = label_name.props.element
			label_element.props.onChange()
			expect(props.handlers.handleOwnerChange).toBeCalled()
		})
		it('should call handleDateChange', () => {
			const { output,props} = setup()
			const dateTimeInput = output.props.children[3]
			dateTimeInput.props.onChangeDate()
			expect(props.handlers.handleDateChange).toBeCalled()
		})
		it('should call handleStartChange', () => {
			const { output,props} = setup()
			const dateTimeInput = output.props.children[3]
			dateTimeInput.props.onChangeTime()
			expect(props.handlers.handleStartChange).toBeCalled()
		})
		it('should call handleEndChange function', () => {
			const { output,props} = setup()
			const label_end = output.props.children[4]
			const label_element = label_end.props.element
			label_element.props.onChange()
			expect(props.handlers.handleEndChange).toBeCalled()
		})
	})
})

export default setup
