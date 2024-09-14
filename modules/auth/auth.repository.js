import { db } from '../../lib/db.js';

export const createUser = async (data) => {
  return await db.user.create({
    data,
  });
};

export const findUserByEmail = async (email) => {
  return await db.user.findUnique({
    where: { email },
  });
};

export const findUserById = async (id) => {
  return await db.user.findUnique({
    where: { id },
  });
};

export const findUserByPhone = async (phone) => {
  return await db.user.findUnique({
    where: { phone },
  });
};
