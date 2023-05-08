import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/profile_dev'),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            };
        console.log('ok');
    } catch (error) {
        console.log('flase');
    }
}

export default connect;
