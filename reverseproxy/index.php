<?php
//from: https://github.com/mustangostang/spyc
require_once "spyc.php";

//load yml file for config
$file = 'config.yml';
$data = Spyc::YAMLLoad($file);
if ($data === NULL || $data === false) {
    throw new Exception("Error processing YAML file: {$file}");
}
//building URL for the target
$protocol = $data['backend']['protocol'];
$domain = $data['backend']['domain'];
$path = $data['backend']['path'];
$parameter = $data['parameter'];

$fullURL = $protocol . '://'. $domain .'/'.  $path . '?'. $data['parameter'][0];
//https://www.xeno-canto.org/api/2/recordings?query=Keel-billed+Toucan

//get input form react frontend
$firstParameterAsString = $data['parameter'][0];
if ($firstParameterAsString === NULL){
    throw new Exception("Error processing GET Parameter");
}
$q = urlencode($_GET[$firstParameterAsString]);//Need to url encode

//call target and return the responce als JSON
$response = file_get_contents($fullURL .'=' .$q);

//Return the response back to AJAX, assuming it is already returned as JSON.
// Else encode it json_encode($response)
echo $response; 
