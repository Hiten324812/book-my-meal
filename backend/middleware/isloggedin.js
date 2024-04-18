

exports.isloggedin = (req,res,next) => {
    if ( !req.session.user)
    {
        return res.redirect('/login');
    }

    next();
}

exports.notloggedin = (req,res,next) => {

    if ( req.session.user)
    {
        return res.redirect('/admin');
    }

    next();
}