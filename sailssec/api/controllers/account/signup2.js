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
        },
        // notAccepted: {
        //     statusCode: 406
        // }
    },

    fn: async function(inputs) {
        if(inputs.password == inputs.confirmPassword) {
            var user = await User.create({fullName: inputs.fullName, password: inputs.password, emailAddress: inputs.emailAddress});
            this.res.redirect('/');
        } else { // error
            // var error = "Passwords do not match"
            // this.res.status(406);
            // return this.res.view('account/signup', {data: error}); // some error returned to view
            return this.res.passwordsNotMatch("<h1>Passwords not match!!!</h1>")
        }
        
        
    }
}