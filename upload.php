<?php 
// Include the database configuration file 
include_once 'dbConfig.php'; 
     
$query = $db->query("SELECT `ViewNumber` FROM `images` ORDER BY `ViewNumber` ASC");

if($query->num_rows > 0){
    while($row = $query->fetch_assoc()){
        $view = $row;
      $view = $view['ViewNumber']+1;
     
    }   
}
else{
    $view = 1;
   
}

if(isset($_POST['submit'])){ 
    // File upload configuration
   
    $targetDir = "uploads/"; 
    $allowTypes = array('jpg','png','jpeg'); 
    $count =1;
    $countimg =1;
    $view_count =$view;
   

    $view =1;
    $statusMsg = $errorMsg = $insertValuesSQL = $errorUpload = $errorUploadType = ''; 
    $fileNames = array_filter($_FILES['files']['name']); 
    if(!empty($fileNames)){ 
        foreach($_FILES['files']['name'] as $key=>$val){ 
            // File upload path 
            $fileName = basename($_FILES['files']['name'][$key]); 
            $targetFilePath = $targetDir .$count++ .$fileName; 
             
            // Check whether file type is valid 
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION); 
            if(in_array($fileType, $allowTypes)){ 
                // Upload file to server 
                if(move_uploaded_file($_FILES["files"]["tmp_name"][$key], $targetFilePath)){ 
                    // Image db insert sql 
                    $insertValuesSQL .= "('".$view_count."', '".$countimg++ .$fileName."', NOW()),";
                   header("Location: redayview.php");                                     
                }else{ 
                    $errorUpload .= $_FILES['files']['name'][$key].' | '; 
                    
                } 
            }else{ 
                $errorUploadType .= $_FILES['files']['name'][$key].' | '; 
            } 
        } 
        // Error message 
        $errorUpload = !empty($errorUpload)?'Upload Error: '.trim($errorUpload, ' | '):''; 
        $errorUploadType = !empty($errorUploadType)?'File Type Error: '.trim($errorUploadType, ' | '):''; 
        $errorMsg = !empty($errorUpload)?'<br/>'.$errorUpload.'<br/>'.$errorUploadType:'<br/>'.$errorUploadType; 
         
        if(!empty($insertValuesSQL)){ 
            $insertValuesSQL = trim($insertValuesSQL, ','); 
            // Insert image file name into database 
            $insert = $db->query("INSERT INTO images (ViewNumber, file_name, uploaded_on) VALUES $insertValuesSQL"); 
            if($insert){ 
                $statusMsg = "Files are uploaded successfully.".$errorMsg; 
            }else{ 
                $statusMsg = "Sorry, there was an error uploading your file."; 
            } 
        }else{ 
            $statusMsg = "Upload failed! ".$errorMsg; 
        } 
    }else{ 
        $statusMsg = 'Please select a file to upload.'; 
    } 
  
}


?>