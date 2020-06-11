import { schema, arrayOf } from 'normalizr'

const appointment = new schema.Entity('appointment');

const appointmentArray= new schema.Array(appointment);

//export const appointmentListSchema = {appointments : appointmentArray};

//export const appointmentListSchema = new schema.Object({appointments : new schema.Array(appointment)});

export const appointmentListSchema = new schema.Object({appointments: appointmentArray});
//export const appointmentListSchema = new schema.Entity('appointments', { appointment: [appointment] });
//appointmentListSchema.define({
//	appointments: [appointment] 
//})


//export const appointmentsResponseSchema = new schema.Array(appointmentListSchema)
//export const appointmentsResponseSchema = new schema.Entity('ss',appointmentListSchema)
//export const appointmentsResponseSchema = { appointments: [appointmentSchema] }
