const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', require('./routes/productRoutes'));
//app.use('/api/users', require('./routes/userRoutes'));

const PORT = 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
