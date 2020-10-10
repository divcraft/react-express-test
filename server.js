const app = require('./app')
const config = require('./config')
// import config from './config';

const PORT = config.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));