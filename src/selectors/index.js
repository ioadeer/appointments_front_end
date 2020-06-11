import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_PAST, SHOW_FUTURE } from '../constants/AppointmentFilters'
import moment from 'moment'

const getVisibilityFilter = state => state.visibilityFilter
const getAppointments = state => state.appointments.appointmentList
const now = moment()

export const getVisibleAppointments = createSelector(
	[getVisibilityFilter, getAppointments],
	(visibilityFilter, appointments) => {
		switch (visibilityFilter) {
			case SHOW_ALL:
				return appointments
			case SHOW_PAST:
				return appointments.filter(a => 
					moment([a.date, a.start].join(' '), "YYYY-MM-DD HH:mm").isBefore(now))
			case SHOW_FUTURE:
				return appointments.filter(a => 
					!moment([a.date, a.start].join(' '), "YYYY-MM-DD HH:mm").isBefore(now))
			default:
				throw new Error('Unknown filter: '+ visibilityFilter)
		}
	}
)
