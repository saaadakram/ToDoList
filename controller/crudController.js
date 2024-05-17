module.exports = {
    createUser: (req,res) => {
        return res.send({
            message: "user has been created"
        })

    },

    getUser: (req,res) => {
        return res.send({
            message: "Here is your desired user"
        })
    },

    updateUser: (req,res) => {
        return res.send({
            message: "user has been successfully updated"
        })
    },

    deleteUser: (req,res) => {
        return res.send({
            message: "user has been deleted successfully"
        })
    }

    
}