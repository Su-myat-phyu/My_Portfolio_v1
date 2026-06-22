<?php
// Minimal API placeholder. Replace with a full Laravel app when ready.
header('Content-Type: application/json');
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
if($path === '/api/projects'){
  echo json_encode([['id'=>1,'title'=>'Project A'],['id'=>2,'title'=>'Project B']]);
}else{
  echo json_encode(['message'=>'Portfolio backend placeholder. Replace with Laravel.']);
}
