const parser = require('saml20');
const saml2 = require('saml2-js');
const fs = require('fs');
const config = require('../../config/config');

const sp_options = config.sp_options;
const sp = new saml2.ServiceProvider(sp_options);

const idp_options = config.idp_options;
const idp = new saml2.IdentityProvider(idp_options);

class LogoutController {

    handle(req, res) {
        const options = {
            name_id: name_id,
            session_index: session_index
        };

        sp.create_logout_request_url(idp, options, (err, logout_url) => {
            if (err != null)
                return res.send(500);
            res.redirect(logout_url);
        });
    }
}

module.exports = LogoutController;