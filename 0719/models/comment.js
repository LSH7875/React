module.exports = (sequelize,DataTypes)=>{
    const Comment = sequelize.define('Comment',{

        userid:{
            type: DataTypes.STRING(30),
            allowNull:false,
    },
        username:{
            type: DataTypes.STRING(30),
            allowNull:false,
        },
        userpw:{
            type:DataTypes.STRING(30),
            allowNull:true,
        }
    },{
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci'
    })
    return Comment
}