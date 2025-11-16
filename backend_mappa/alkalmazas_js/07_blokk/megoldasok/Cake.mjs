import mongoose from 'mongoose';

const cakeSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            require: true,
        },
        ar: {
            type: Number,
            require: true,
        },
        leiras: {
            type: String,
            require: true,
        },
        kepek: [
            {
                type: String,
                require: true,
            },
        ],
    },
    { timestamps: true }
);

const CakeModel = mongoose.model('cake', cakeSchema);

export default CakeModel;
