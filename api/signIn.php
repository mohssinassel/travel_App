<?php
require_once 'DbConnect.php';





$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

if (json_last_error() === JSON_ERROR_NONE) {
    $username = $data['username'];
    $password = $data['password'];

    // Insert the data into the database
    $query = "SELECT * FROM users  WHERE username ='$username'";
    $result = mysqli_query($conn, $query);
    if ($result && mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        $hashedPassword = $user['password'];
    
        // Verify the password
        if ($password === $hashedPassword) {
          // Generate a token (e.g., JWT)
            
            $response = array(
                'user' => array(
                // 'id' => $user['id'],
                'username' => $data['username']
                // Add any other user information you need
                )
            );
            echo json_encode($response);
            } else {
            // Return an error message if the password is incorrect
            $error = array('error' => 'Invalid password');
            echo json_encode($error);
            }
        } else {
            // Return an error message if the user does not exist
            $error = array('error' => 'User not found');
            echo json_encode($error);
        }
}else {
    // Return an error message if the user does not exist
    $error = array('error' => 'User not found');
    echo json_encode($error);
}