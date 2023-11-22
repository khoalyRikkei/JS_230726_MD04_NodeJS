import Payment from "../models/payment.mode.js";

Payment.sync()
  .then(() => {
    const sampleData = [
      {
        course_price: 990000,
        status: true,
        user_id: "6fed445b-2eef-4963-b101-48321480955a",
        category_id: 1,
        courses_id: 1,
      },
      // {
      //   course_price: 990000,
      //   status: true,
      //   user_id: 1,
      //   category_id: 1,
      //   courses_id: 1,
      // },
      // {
      //   course_price: 1590000,
      //   status: true,
      //   user_id: "1",
      //   category_id: 1,
      //   courses_id: 3,
      // },
      // {
      //   course_price: 1690000,
      //   status: true,
      //   user_id: "1",
      //   category_id: 4,
      //   courses_id: 9,
      // },
      // {
      //   course_price: 1890000,
      //   status: true,
      //   user_id: "2",
      //   category_id: 4,
      //   courses_id: 10,
      // },
    ];

    return Payment.bulkCreate(sampleData);
  })
  .then((createdPayments) => {
    console.log(
      "Created categories:",
      createdPayments.map((cat) => cat.toJSON())
    );
  })
  .catch((error) => {
    console.error("Error creating categories:",4444444444444444, error,5555555555555);
  });

export default Payment;
