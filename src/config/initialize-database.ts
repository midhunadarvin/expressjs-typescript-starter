import sequelize from '../sequelize';
import { Channel } from '../models/channel';
export default function initializeDB() {
    sequelize.sync()
        .then(() => Channel.create({
            username: 'janedoe',
            birthday: new Date(1980, 6, 20)
        }))
}