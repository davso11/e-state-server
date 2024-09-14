import jwt from 'jsonwebtoken';
import * as repo from './auth.repository.js';
import * as schemas from './auth.schema.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const result = schemas.newUserSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ message: result.error });
    }

    const userByEmail = await repo.findUserByEmail(result.data.email);

    if (userByEmail) {
      return res.status(400).json({
        error: 'Email est déjà utilisé',
      });
    }

    const userByPhone = await repo.findUserByPhone(result.data.phone);

    if (userByPhone) {
      return res.status(400).json({
        error: 'Numéro de téléphone est déjà utilisé',
      });
    }

    const hashedPassword = await bcrypt.hash(result.data.password, 10);

    const user = await repo.createUser({
      ...result.data,
      password: hashedPassword,
    });

    res.status(201).json({ data: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const result = schemas.loginSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ message: result.error });
    }

    const user = await repo.findUserByEmail(result.data.email);

    if (!user) {
      return res.status(400).json({
        error: 'Email ou mot de passe incorrect',
      });
    }

    const isPasswordValid = await bcrypt.compare(
      result.data.password,
      user.password,
    );

    if (!isPasswordValid) {
      return res.status(400).json({
        error: 'Email ou mot de passe incorrect',
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(200).json({
      data: {
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          email: user.email,
        },
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
