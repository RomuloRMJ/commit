<?php
session_start();

if(isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == true){
  header("Location: home.php");
  exit();
}

if(isset($_POST['login'])){
  $username = $_POST['username'];
  $password = $_POST['password'];

  if($username == "usuario" && $password == "senha"){
    $_SESSION['logged_in'] = true;
    header("Location: home.php");
    exit();
  } else {
    $error_message = "Usuário ou senha incorretos.";
  }
}

?>

<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
</head>
<body>
  <h1>Login</h1>
  <?php if(isset($error_message)) { ?>
    <p><?php echo $error_message; ?></p>
  <?php } ?>
  <form method="post">
    <label for="username">Usuário:</label>
    <input type="text" id="username" name="username">
    <br>
    <label for="password">Senha:</label>
    <input type="password" id="password" name="password">
    <br>
    <input type="submit" name="login" value="Entrar">
  </form>
</body>
</html>

<!--
   * adicionando comentário apenas para testar uma funcionalidade no github
  -->