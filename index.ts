import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // ? Create a user
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Amour",
    //         email: "amour@mail.com",
    //     }
    // })

    // console.log(user)

    // ? Get all Users
    // const users = await prisma.user.findMany()

    // console.log(users)

    // ? Create Article
    // const article = await prisma.article.create({
    //     data: {
    //         title: "Hello World",
    //         body: "This is a test article",
    //         // author field doesn't directly contains an object, it links to a user, so we are linking it with the user id
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    // console.log(article)

    // ? Get all Articles
    // const articles = await prisma.article.findMany()

    // console.log(articles)

    // ? Create user and article and associate them
    // const newUserWithNewArticle = await prisma.user.create({
    //     data: {
    //         name: "Not Amour",
    //         email: "notamout@mail.com",
    //         articles: {
    //             create: {
    //                 title: "Single Query Article",
    //                 body: "This article was created alongside a user in a single query"
    //             }
    //         }
    //     }
    // })

    // console.log(newUserWithNewArticle)

    // ? Create an Article and also create a new user
    // const newArticleWithNewUser = await prisma.article.create({
    //     data: {
    //         title: "Article 1",
    //         body: "This is article 1",
    //         author: {
    //             create: {
    //                 name: "Author 1",
    //                 email: "Author@mail.com"
    //             }
    //         }
    //     }
    // })

    // console.log(newArticleWithNewUser)

    // ? Get all Users with their articles
    // const usersWithArticles = await prisma.user.findMany({
    //     // * Go to user.article and get all the articles and return them along with user data
    //     include: {
    //         articles: true
    //     }
    // })

    // console.log(usersWithArticles)

    // ? Update User
    // const updatedUser = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "Updated User"
    //     }
    // })

    // console.log(updatedUser)

    // ? Delete Article
    // const deletedUser = await prisma.article.delete({
    //     where: {
    //         id: 1
    //     }
    // })

    // console.log(deletedUser)
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })