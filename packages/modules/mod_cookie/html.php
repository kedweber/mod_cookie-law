<?php

/**
 * ModCookie
 *
 * @author 		Joep van der Heijden <joep.van.der.heijden@moyoweb.nl>
 * @category	
 * @package 	
 * @subpackage	
 */
 
defined('KOOWA') or die('Restricted Access');

class ModCookieHtml extends ModDefaultHtml
{
    public function display()
    {
        $this->assign('params', new KConfig($this->module->params));
        return parent::display();
    }
}