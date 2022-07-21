import app from "../src/index.js";

app.listen(+process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000} 🐱‍👤`);
});
