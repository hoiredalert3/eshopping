"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let productData = [
      {
        name: "tempor turpis",
        imagePath: "/img/product-7.png",
        oldPrice: 81.1,
        price: 90.01,
        summary:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        description:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        specification:
          "Ut at dolor quis odio consequat varius. Integer ac leo.",
        stars: 0,
        quantity: 65,
        brandId: 3,
      },
      {
        name: "etiam pretium",
        imagePath: "/img/product-5.png",
        oldPrice: 91.41,
        price: 46.36,
        summary: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        description:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        specification:
          "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
        stars: 0,
        quantity: 59,
        brandId: 2,
      },
      {
        name: "amet nulla",
        imagePath: "/img/product-1.png",
        oldPrice: 11.02,
        price: 84.82,
        summary:
          "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        description:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        specification: "Integer ac leo. Pellentesque ultrices mattis odio.",
        stars: 0,
        quantity: 3,
        brandId: 2,
      },
      {
        name: "pede ac",
        imagePath: "/img/product-7.png",
        oldPrice: 29.12,
        price: 48.59,
        summary:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        description:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        specification:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        stars: 0,
        quantity: 86,
        brandId: 5,
      },
      {
        name: "suspendisse potenti in",
        imagePath: "/img/product-6.png",
        oldPrice: 74.86,
        price: 25.43,
        summary:
          "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        description:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        specification: "Nulla tellus.",
        stars: 0,
        quantity: 14,
        brandId: 6,
      },
      {
        name: "congue vivamus",
        imagePath: "/img/product-9.png",
        oldPrice: 70.24,
        price: 67.42,
        summary:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        description: "Fusce consequat. Nulla nisl. Nunc nisl.",
        specification:
          "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        stars: 0,
        quantity: 44,
        brandId: 3,
      },
      {
        name: "iaculis justo in",
        imagePath: "/img/product-3.png",
        oldPrice: 56.53,
        price: 16.36,
        summary: "Integer ac leo. Pellentesque ultrices mattis odio.",
        description:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        specification:
          "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
        stars: 0,
        quantity: 93,
        brandId: 1,
      },
      {
        name: "luctus et",
        imagePath: "/img/product-2.png",
        oldPrice: 64.72,
        price: 31.38,
        summary:
          "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        description:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        specification: "Phasellus sit amet erat. Nulla tempus.",
        stars: 0,
        quantity: 3,
        brandId: 6,
      },
      {
        name: "aliquet ultrices erat",
        imagePath: "/img/product-5.png",
        oldPrice: 65.26,
        price: 83.32,
        summary:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        description:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        specification:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        stars: 0,
        quantity: 80,
        brandId: 3,
      },
      {
        name: "lacinia sapien",
        imagePath: "/img/product-7.png",
        oldPrice: 83.63,
        price: 99.2,
        summary:
          "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        description:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        specification: "Duis consequat dui nec nisi volutpat eleifend.",
        stars: 0,
        quantity: 13,
        brandId: 6,
      },
    ];
    productData.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Products", productData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
