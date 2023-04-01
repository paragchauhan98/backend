const url = 'mongodb+srv://iamparag121298:Manubond07@cluster1.0sgwevf.mongodb.net/blogApp?retryWrites=true&w=majority';

const mongoose = require('mongoose');
mongoose.connect(url)
.then(()=>{
    console.log('congrats, problem solved')
})
.catch((err)=>{
    console.log(`there is not a problem with ${err.message}`);
    process.exit(-1)
})



module.exports = mongoose;