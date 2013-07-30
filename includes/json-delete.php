<?php

	if(file_exists('../data.json')){
		$file = fopen('../data.json','w+');
	    fwrite($file, '');
	    fclose($file);

	    echo "data.json has been emptied";	
	}
    
?>