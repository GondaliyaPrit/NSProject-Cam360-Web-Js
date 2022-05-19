<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
</head>


<body class=redayview-body>

    <?php
    include_once 'dbConfig.php';
   
    $query = $db->query("SELECT `ViewNumber` FROM `images` ORDER BY `ViewNumber` ASC");

    if($query->num_rows > 0){
        while($row = $query->fetch_assoc()){
            $view = $row;
          $view = $view['ViewNumber'];
         
        }   
    }
    else{
        $view = 1;
       
    }

    // Include the database configuration file
    include_once 'dbConfig.php';
    
    // Get images from the database
    $countimg = $view;
    $query = $db->query("SELECT * FROM `images` WHERE `ViewNumber` = $countimg");
    $images_php = array();

    if($query->num_rows > 0){
        while($row = $query->fetch_assoc()){
            $imageURL = 'uploads/'.$row["file_name"];
            $images_php[] =  $imageURL;
    
    ?>
    <!-- <img src="<?php echo $imageURL; ?>" alt="" /> -->
    <?php }     
    }else{ ?>
    <p>No image(s) found...</p>
    <?php } ?>

    <!-- <?php print_r($images_php);?> -->
    <?php
    require_once "vendor/autoload.php";

    $removebg_img = array();
    for ($x = 0; $x < sizeof($images_php); $x++) {
       // echo "The number is: $x <br>";
        $client = new GuzzleHttp\Client();
        $res = $client->post('https://api.remove.bg/v1.0/removebg', [
            'multipart' => [
                [
                    'name'     => 'image_file',
                    'contents' => fopen("$images_php[$x]", 'r')
                ],
                [
                    'name'     => 'size',
                    'contents' => 'auto'
                ]
            ],
            'headers' => [
                'X-Api-Key' => 'Zw7a5w6XApGQnbm1vSUq1vVL'
            ]
        ]);
      
        $fp = fopen("removebg/$x.png", "wb");
       
        $removebg_img[] = 'removebg/'.$x.'.png';
       //  print_r($removebg_img);
        fwrite($fp, $res->getBody());
        fclose($fp);
      }
?> 

    <section class="header-main-view">
        <div class="container">
            <div class="header-inner-main">
                <div class="header-inner header-left">
                    <a href="index.html">
                        <img src="img/logo-white.png" alt="logo-white" class="logo">
                        <img src="img/logo-color.png" alt="logo-color" class="logo-2 hide-2">
                    </a>
                </div>
                <div class="header-inner header-center">
                    <ul class="navbar-list">
                        <li class="navbar"><a class="nava" href="index.html">Home</a></li>
                        <li class="navbar"><a class="nava" href="index.html#Features">Features</a></li>
                        <li class="navbar"><a class="nava" href="index.html#Services">Services</a></li>
                        <li class="navbar"><a class="nava" href="index.html#Footer">Company</a></li>
                    </ul>
                </div>
                <div class="header-inner header-right">
                    <form>
                        <button class="btn-getstarted" id="getstart" formaction="360view.html">Create New</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!--  View Secxtion  -->
    <section class="view-section">
        <div class="container">
            <div class="view-section-div">
                <canvas id="canvas" width="758" height="512"></canvas>
                <input type="range" min="1" max="36" step="1" value="1" id="slider" />
            </div>
        </div>
    </section>
</body>




<script type="text/javascript">
var imagesarray = <?php echo json_encode($removebg_img); ?>;
</script>
<script type="text/javascript" src="js/360view.js"></script>

</html>