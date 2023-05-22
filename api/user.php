<?php
require_once 'DbConnect.php';





$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

if (json_last_error() === JSON_ERROR_NONE) {
    
    // Data is valid JSON
    // print_r($data['email']);
    
    $first_name = $data['first_name'];
    $last_name = $data['last_name'];
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];

    // Insert the data into the database
    $query = "INSERT INTO users (first_name, last_name,username, email, password) VALUES ('$first_name', '$last_name', '$username','$email', '$password')";
    $result = mysqli_query($conn, $query);
    if ($result) {
        
        $response = array(
            'user' => array(
            // 'id' => $user['id'],
            'username' => $data['username']
            // Add any other user information you need
            )
        );
        // Insertion successful
        // $response = ['status' => 'yes'];
        echo json_encode($response);
    } else {
        // Insertion failed
        $error = [
            'status' => 'error',
            'message' => 'Failed to insert data into the database',
            'error_code' => mysqli_errno($conn),
            'error_message' => mysqli_error($conn)
        ];
        echo json_encode($error);
    }
} else {
    // Invalid JSON data
    $error = [
        'status' => 'error',
        'message' => 'Invalid JSON data',
        'error_code' => json_last_error(),
        'error_message' => json_last_error_msg()
    ];
    echo json_encode($error);
}


// header('Content-Type: application/json');
// echo json_encode($response);