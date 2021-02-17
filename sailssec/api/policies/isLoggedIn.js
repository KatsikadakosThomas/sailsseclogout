module.exports = async function (req, res, proceed) {
    console.log("isLoggedIn")
    if (req.me !== undefined) {
        return proceed();
    }
    res.statusCode = 498
    return res.view("pages/homepage", {data: "forbidden"})
    // return res.forbidden();
}