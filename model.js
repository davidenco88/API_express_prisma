const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllData() {
  const records = await prisma.contacts.findMany();
  return records;
}

async function getDataById(id) {
  const record = await prisma.contacts.findUnique({
    where: {
      id: Number(id),
    }
  });
  return record;
}

async function deleteDataById(id) {
  const record = await prisma.contacts.delete({
    where: {
      id: Number(id),
    },
  })
}

async function addData(data) {
  const record = await prisma.contacts.create({ data })
  console.log(record);
}

module.exports = {
  getAllData,
  getDataById,
  deleteDataById,
  addData
}
