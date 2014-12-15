<div class="row module cookie-control hide blackhaze">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <p> <?= $params->short; ?> </p>
            </div>
            <div class="col-xs-12 col-sm-6 dropdown">
                <input type="button" class="btn btn-success pull-right btn-cookie-agree" value="<?= $params->agree; ?>" />
                <input type="button" class="btn btn-danger pull-right btn-cookie-decline" value="<?= $params->decline; ?>" />
                <a class="read-more pull-right dropdown-toggle hidden-xs" data-toggle="dropdown"><?= $params->read_more; ?></a>
                <input class="btn btn-primary btn-small dropdown-toggle pull-right read-more visible-xs" type="button" data-toggle="dropdown" value="+"/>
                <div class="dropdown-menu">
                    <?= $params->long; ?>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="media/mod_cookie/js/cookie-control.js" />
<script>
    new CookieControl({
        'ga_key': '<?= $params->gakey; ?>',
        'ga_domain_name': '<?= $params->domain ?>',
        'ga_allow_linker': <?= $params->allow_linker == true ? 'true' : 'false'; ?>,
        'ga_universal': <?= $params->universal == true ? 'true' : 'false'; ?>,
        'cb_uid': <?= $params->cbuid ? "'" . $params->cbuid . "'" : 'undefined'; ?>,
        'cb_domain': '<?= $params->cbdomain; ?>',
        'cb_useCanonical': <?= $params->cbusecanonical == true ? 'true' : 'false'; ?>,
        'ha_appid' : '<?= $params->appid; ?>'
    });
</script>