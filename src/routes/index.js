import authRouter from "./auth.route.js";
import categoryRouter from "./category.route.js";
import couresRouter from "./course.route.js";
import lessonRouter from "./lesson.route.js";
import oderRouter from "./oder.route.js";
import paymentRouter from "./payment.route.js";
import progressLessonRouter from "./progressLesson.route.js";
import teacherRouter from "./teacher.route.js";
import userRouter from "./user.route.js";

export function route(app) {
  // API Router Category
  app.use("/api/v1/category", categoryRouter);

  // API Courses
  app.use("/api/v1/course", couresRouter);

  // API Lessons
  app.use("/api/v1/lesson", lessonRouter);

  // API Oders
  app.use("/api/v1/oders", oderRouter);

  // API Users
  app.use("/api/v1/users", userRouter);

  // API Teacher
  app.use("/api/v1/teachers", teacherRouter);

  // API Router Auth
  app.use("/api/v1/auth", authRouter);

  // API Payment
  app.use("/api/v1/payment", paymentRouter);

  // API Progress Lesson
  app.use("/api/v1/progressLesson", progressLessonRouter);

  // app.use("/api/v1/amdin/", authRouter);
}
