import { sendBookingConfirmation } from '../../lib/mail.js';
import * as repo from './booking.repository.js';
import * as schemas from './booking.schema.js';

export async function createOne(req, res) {
  try {
    const result = schemas.bookingSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ message: result.error });
    }

    const booking = await repo.createBooking(result.data);

    sendBookingConfirmation(booking);

    res.status(201).json({ data: booking });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
