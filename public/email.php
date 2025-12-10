<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$DEST_EMAIL = "rhiannon-1@hotmail.co.uk";
$response = array();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
  $email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
  $phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
  $message = isset($_POST["comments"]) ? trim($_POST["comments"]) : "";

  if (!empty($name) && !empty($email) && !empty($message)) {
    $msgbody = "Contact Form Submission - Academy Dublin\n\n";
    $msgbody .= "Name: $name\n";
    $msgbody .= "Email: $email\n";
    $msgbody .= "Phone: $phone\n\n";
    $msgbody .= "Message:\n$message\n";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($DEST_EMAIL, "Academy Dublin - Contact Form Submission", $msgbody, $headers)) {
      $response['success'] = true;
      $response['message'] = "Email sent successfully";
      http_response_code(200);
    } else {
      $response['success'] = false;
      $response['message'] = "Failed to send email";
      http_response_code(500);
    }
  } else {
    $response['success'] = false;
    $response['message'] = "Please fill in all required fields";
    http_response_code(400);
  }
} else {
  $response['success'] = false;
  $response['message'] = "Invalid request method";
  http_response_code(405);
}

echo json_encode($response);
