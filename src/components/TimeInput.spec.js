import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import { render } from 'react-dom'
import TimeInput from './TimeInput'
import TimePicker from 'rc-time-picker'
import moment from 'moment'

const setup = (propOverrides) => {
	const props = Object.assign({
		onChange : jest.fn()
	}, propOverrides)

	const renderer = createRenderer();
	renderer.render(<TimeInput {...props}/>)
	const output = renderer.getRenderOutput()
	return{
		props: props,
		output: output
	}
}

describe( 'component', () => {
	describe('TimeInput', () => {
		it('should render correctly', () => {
			const { output } = setup()
			expect(output.type).toBe(TimePicker)
			expect(output.props.format).toBe('HH:mm a')
			expect(output.props.defaultValue).toBeInstanceOf(moment)
		})
		it('should call onChange function', () => {
			const { output,props } = setup()
			output.props.onChange()
			expect(props.onChange).toBeCalled()
		})
	})
})
