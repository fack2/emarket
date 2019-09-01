const app = require('./app.js')
const PORT =process.env.PORT || 5555
app.listen(PORT, () => {
  console.log(`Our app is running on http://localhost:${PORT}`);
});