const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { faker } = require("@faker-js/faker"); // Import faker correctly

const app = express();
dotenv.config();

// ports and connectionUrl
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.MONGODB_CONNECTION;

// database connection
const connectDb = async () => {
  try {
    await mongoose.connect(CONNECTION_URL);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

app.use(cookieParser());
app.use(express.json());
app.use(cors());

connectDb().then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Generate fake posts data
app.get("/api/posts", (req, res) => {
  const posts = Array.from({ length: 10 }).map(() => ({
    posted_by: faker.person.fullName(), // Access the fullName method correctly
    posted_by_image: faker.image.avatar(),
    posting_time: faker.date.past().toLocaleDateString(),
    posted_city: faker.location.city(),
    posted_states: faker.location.state(),
    post_text: faker.lorem.sentences(2),
    images: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(
      () => faker.image.url()
    ),
    total_likes: faker.number.int({ min: 10, max: 500 }),
    total_comments: Array.from({
      length: faker.number.int({ min: 0, max: 10 }),
    }).map(() => ({
      comment_userimage: faker.image.avatar(),
      comment_username: faker.person.firstName(), // Access the firstName method correctly
      comment: faker.lorem.sentence(),
      comment_time: faker.date.past().toLocaleDateString(), // Add comment time
    })),
    total_shares: faker.number.int({ min: 0, max: 50 }),
  }));

  res.json(posts);
});
