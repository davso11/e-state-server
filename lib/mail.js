import { createTransport } from 'nodemailer';
import { formatDate } from './day.js';

export const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'david.sehi2016@gmail.com',
    pass: 'vmmd vbhc qinl mfap',
  },
});

export const sendBookingConfirmation = (booking) => {
  const mailOptions = {
    from: 'david.sehi2016@gmail.com',
    to: booking.email,
    subject: 'Confirmation de réservation',
    text: `Votre réservation a été confirmée pour le : ${formatDate(
      booking.date,
    )} à ${formatDate(booking.date, 'LT')}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
