import { PrismaClient } from '@prisma/client'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  // await prisma.todo.createMany({
  //   data: Array.from({length:25}, () => ({
  //    "title":faker.lorem.words({min:2, max:5}),
  //    "body":faker.lorem.words({min:1, max:10})و,
  //    user_id:"user_2gZhJIH0iBApgau4rZm26o9ZukE"
  //   }))
  // })
}


// async function main() {
//   await prisma.user.createMany({
//     data: Array.from({length:25}, () => ({
//       name: faker.internet.userName(),
//       email: faker.internet.email(),
//       address: {
//           street: faker.location.streetAddress(),
//           city: faker.location.city(),
//           state: faker.location.state(),
//           zip: faker.location.zipCode(),
//       },
//     })) 
//   })
// }
main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })  
  .finally(async () => {
    await prisma.$disconnect()
  })