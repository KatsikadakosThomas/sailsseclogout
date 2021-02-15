module.exports = {
    inputs: {
        emailAddress: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        confirmPassword: {
            type: 'string',
        },
        fullName: {
            type: 'string',
        }
    },
    exits: {
        success: {
            viewTemplatePath: 'account/signup' // view account/signup.ejs
        }
    },

    fn: async function(inputs) {
        var user = await User.create({fullName: inputs.fullName, password: inputs.password, emailAddress: inputs.emailAddress});
        return {}
    }
}