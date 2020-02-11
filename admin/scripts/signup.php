<?php

function signup($firstname, $email, $update_date) {
    
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
    } 
    
}