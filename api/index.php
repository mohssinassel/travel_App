<?php
require_once 'DbConnect.php';
$data = array();
// $data_car = array();

// SQL query to fetch data from the "mock_data" table
$sql = "SELECT * FROM mock_data";
$result = $conn->query($sql);

// $sqlcar = "SELECT * FROM car_data";
// $car_result = $conn->query($sqlcar);



// if ($result === false) {
//     // Handle the error and return an error response
//     $error = array('error' => 'Database query error');
//     header('Content-Type: application/json');
//     echo json_encode($error);
//     exit;
// }
// Fetch data and store it in the $data array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
// if ($car_result->num_rows > 0) {
//     while ($rowcar = $car_result->fetch_assoc()) {
//         $data_car[] = $rowcar;
//     }
// }

// Close the database connection
// $conn->close();

// Set the appropriate headers and return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);
// header('Content-Type: application/json');
// echo json_encode($data_car);

?>