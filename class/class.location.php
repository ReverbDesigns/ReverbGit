<?php
class Location extends Request
{
    //private static $locApi = "http://api.hostip.info/get_json.php?ip=%s&position=true";
    private static $freeGeoIpNetApi = "http://freegeoip.net/json/%s";
    private static $telizeComApi = "http://www.telize.com/geoip/%s";

    public static function get($domain, $ip)
    {
        // return self::getFromFreeGeoIpNet($domain);
        return self::getFromTelizeCom($ip);
    }


    protected static  function getFromFreeGeoIpNet($ip) {
        $pattern = array(
            'city'=>'Unknown',
            'region_name'=>'Unknown',
            'ip'=>'Unknown',
            'longitude'=>0,
            'country_name'=>'Unknown',
            'country_code'=>'XX',
            'latitude'=>0,
        );
        $url = sprintf(self::$freeGeoIpNetApi, $ip);
        if(!$response = parent::run($url)) {
            return $pattern;
        }
        if(!$json = json_decode($response, true)) {
            return $pattern;
        }

        return array(
            'city'=> isset($json['city']) ? $json['city'] : 'Unknown',
            'region_name'=>isset($json['region_name']) ? $json['region_name'] : 'Unknown',
            'ip'=>isset($json['ip']) ? $json['ip'] : 'Unknown',
            'longitude'=>isset($json['longitude']) ? $json['longitude'] : 0,
            'country_name'=>isset($json['country_name']) ? $json['country_name'] : 'Unknown',
            'country_code'=>(isset($json['country_code']) AND strlen($json['country_code'])==2) ? $json['country_code'] : 'XX',
            'latitude'=>isset($json['latitude']) ? $json['latitude'] : 0,
        );
    }

    protected static function getFromTelizeCom($ip) {
        $pattern = array(
            'city'=>'Unknown',
            'region_name'=>'Unknown',
            'ip'=>'Unknown',
            'longitude'=>0,
            'country_name'=>'Unknown',
            'country_code'=>'XX',
            'latitude'=>0,
        );
        $url = sprintf(self::$telizeComApi, $ip);
        if(!$response = parent::run($url)) {
            return $pattern;
        }
        if(!$json = json_decode($response, true)) {
            return $pattern;
        }

        return array(
            'city'=> isset($json['city']) ? $json['city'] : 'Unknown',
            'region_name'=>isset($json['region']) ? $json['region'] : 'Unknown',
            'ip'=>isset($json['ip']) ? $json['ip'] : 'Unknown',
            'longitude'=>isset($json['longitude']) ? $json['longitude'] : 0,
            'country_name'=>isset($json['country']) ? $json['country'] : 'Unknown',
            'country_code'=>(isset($json['country_code']) AND strlen($json['country_code'])==2) ? $json['country_code'] : 'XX',
            'latitude'=>isset($json['latitude']) ? $json['latitude'] : 0,
        );
    }
}