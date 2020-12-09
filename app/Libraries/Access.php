<?php
namespace App\Libraries;

use Exception;
class Access
{
    function generateAccess($level) {
        try {
            $access = array();
            switch ($level) {
                case '1':
                    $access = ['write' => 1, 'update' => 1, 'delete' => 1];
                    break;
                case '2':
                    $access = ['write' => 1, 'update' => 1, 'delete' => 1];
                    break;
            }
            return $access;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
