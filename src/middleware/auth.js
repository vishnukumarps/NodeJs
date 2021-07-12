
const auth = async (eq, res, next) => {
    jwt.signin()
    console.log('middleware');
    next();
}

module.exports=auth;