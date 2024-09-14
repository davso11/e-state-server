import express from 'express';
import cors from 'cors';
import propertyRoutes from './modules/property/property.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import bookingRoutes from './modules/booking/booking.routes.js';

const app = express();
const PORT = parseInt(process.env.PORT ?? 5000);

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/properties', propertyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
