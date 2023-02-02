<?php
if(isset($_POST["name"]) && isset($_POST["select"]) && isset($_POST["age"]) && isset($_POST["competencies"]))
{
  $name = htmlentities($_POST["name"]);
  $select = htmlentities($_POST["select"]);
  $age = htmlentities($_POST["age"]);
  $competencies = htmlentities($_POST["competencies"]);
  $output ="
    $name<br />
    $age<br />
    $competencies
   ";
   foreach($select as $item)
        $output .= htmlentities($item);
  echo $output;
  //echo json_encode($output);
  //console.log($output);
}
else
{
  echo "Введенные данные некорректны";
}
?>
