<?php
require_once 'keys.php';
if(keys()['username'] === 'root'){
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST');
    
    header("Access-Control-Allow-Headers: X-Requested-With");
}
require_once('vendor/connect.php');



$request = json_decode(file_get_contents('php://input'));
$type = $request -> type;
if($type === 'setTails'){
    $id = $request -> data -> id;
$title = $request -> data  -> data -> title;
$valueFirst = $request -> data  -> data -> value[0];
$valueSecond = $request  -> data -> data -> value[1];
$sub = $request  -> data -> data -> sub;
$sql = mysqli_query($connect, "SELECT * FROM `data_tails`");
$sql = mysqli_fetch_object($sql);
$sqlIdRow = $sql -> id;
$response = $sql -> values;
$arrayData = explode('^', $response);
$newArray = [];
foreach ($arrayData as $elem) {
    $arrayElem = explode("#", $elem);
    if($arrayElem[0] === $id){
        $arrayElem[1] = $title;
        $arrayElem[2] = $sub ;
        $arrayElem[3] = $valueFirst ;
        $arrayElem[4] = $valueSecond? $valueSecond: '0';
    }
    $newArray[] = implode('#', $arrayElem);
}
print_r($newArray);
$data = implode('^',$newArray );
$sql = mysqli_query($connect, "UPDATE `data_tails` SET `values` = '$data'  WHERE `id` = '$sqlIdRow'");

}
if($type === 'getTails'){
    $sql = mysqli_query($connect, "SELECT * FROM `data_tails`");
    $value = mysqli_fetch_object($sql) -> values;
    $arrayData = explode('^', $value);
    $newObjects = [];
    $response = [
        'response'=>'accept',
        'data'=>$arrayData
    ];
    echo json_encode($response);
}

// getNav

if($type === 'getNav'){
    $sql = mysqli_query($connect, "SELECT * FROM `data_links`");
    $arrayObjs = [];
    while($value = mysqli_fetch_object($sql)){
        $obj = [
            'id'=>$value -> id,
            'key'=>$value -> keey,
            'name'=>$value -> name,
            'elem'=>$value -> elem,
            'href'=>$value -> href,
            'flag'=>$value -> flag
        ];
        $arrayObjs []= $obj;
    }    
    echo json_encode($arrayObjs);
}
if($type === 'setNav'){
    $arrayData = $request -> data;
    foreach ($arrayData as $elem) {        
        $name = $elem -> name;
        $id = $elem -> id;
        $flag = $elem -> flag;
        $sql = mysqli_query($connect, "UPDATE `data_links` SET `name` = '$name' WHERE `id` = '$id'");
        $sql = mysqli_query($connect, "UPDATE `data_links` SET `flag` = '$flag' WHERE `id` = '$id'");
    }
}