import prisma from '../config/db.js';

export async function findAll(completed) {
  const where = {};

  if (completed === true || completed === 'true') {
    where.completed = true;
  } else if (completed === false || completed === 'false') {
    where.completed = false;
  }

  return prisma.task.findMany({ where });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
