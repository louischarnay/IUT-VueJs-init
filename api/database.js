import { DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://root@localhost:3306/pokemondb')
try {
    await sequelize.authenticate()
    console.log('Connection has been estabished successfully.')
} catch (error) {
    console.error('Unable to connect to the database : ', error);
}

export const Pokemon = sequelize.define('Pokemon', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
})

Pokemon.sync()

export const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.sync()