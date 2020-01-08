module.exports = {
    index: (req, res) => {
        return res.status(200).json({
            success: true,
            message: ":)",
        })
    },

    signup: (req, res) => {
        
        return res.status(200).json({
            success: true,
            message: "signup successful"
        })
    }

}
