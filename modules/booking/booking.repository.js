import { db } from '../../lib/db.js';

export async function createBooking(data) {
  return await db.booking.create({ data });
}
