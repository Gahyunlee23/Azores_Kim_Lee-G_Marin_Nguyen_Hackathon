<?php

function signup($firstname, $lastname, $email, $country, $update_date) {
    
    $pdo = Database::getInstance()->getConnection();

    $user_exist = 'SELECT COUNT(*) FROM `tbl_signUp` WHERE user_email = :email';
    $user_set = $pdo->prepare($user_exist);
    $user_set ->execute(
        array(
            ':email'=>$email
        )
    );

    if($user_set->fetchColumn()>0) {
        $update_date_set = 'UPDATE `tbl_signUp` SET user_last_update = :update_date WHERE user_email = :email' ;
        $user_update = $pdo->prepare($update_date_set);
            $user_update->execute(
                array(
                    ':update_date'=>$update_date,
                    ':email'=>$email
                )
            );
            
            
            //sending email to returning subscriber
            while($existemail = $user_update->fetch(PDO::FETCH_ASSOC)) {
                $email = $existemail['user_email'];
                echo $existemail;
                $headers = array(
                    'From' => 'noreply@test.ca',
                    'Reply-To' => $firstname.'<'.$email.'>'
                );
                
                if(mail($email, $firstname, $headers)) {
                    echo '<p> Thank you contacting us, '.$firstname.'</p>';
                } else {
                    echo '<p> We are sorry but eamil did not go through</p>';
                }
                
            }

    

    } elseif($user_set->fetchColumn() == 0) {
        $create_user = 'INSERT INTO `tbl_signUp`(`user_id`, `user_fname`, `user_lname`, `user_email`, `user_country`, `user_subscribe_date`, `user_last_update`) VALUES (NULL, :user_fname, :user_lname, :user_email, :user_country, :update_date, :update_date)';
        $create_user_set = $pdo->prepare($create_user);
            $create_user_set->execute(
                array(
                    ':user_fname' => $firstname,
                    ':user_lname' => $lastname,
                    ':user_email' => $email,
                    ':user_country' => $country,
                    ':update_date' => $update_date
                )
            );

            //sending email to first time subscriber
    } else {
        return "Something Wrong Here!";
    }  
}
    
