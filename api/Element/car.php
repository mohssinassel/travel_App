<?php
require_once '../DbConnect.php';
$data = array();

$sql = "SELECT * FROM car_data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($data);
?>