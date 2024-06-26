<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details
    $servername = "localhost";
    $username = "root"; // default username for XAMPP
    $password = ""; // default password for XAMPP
    $dbname = "anomaliweb_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO submissions (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);

    // Execute the statement

    if ($stmt->execute()) {
        echo "Success: Your form has been submitted!";
      } else {
        echo "Error: " . $stmt->error;
      }
      

    // Close connections
    $stmt->close();
    $conn->close();
}
?>
