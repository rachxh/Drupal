<?php

namespace Drupal\second_module\Controller;

// use Drupal\Core\Controller\ControllerBase;
use \Drupal\Core\StringTranslation\StringTranslationTrait; //optional 

// class SecondController extends ControllerBase{
    
//     public function second(){

//         // return array ('#markup'=>'Welcome to drupal website -Second Module');
//         return ['#markup'=>$this->t('Welcome to Translation trait')];

//     }
// }

class SecondController {
    use StringTranslationTrait;

    public function second(){
        return ['#markup'=>$this->t('Welcome to Translation trait')];
    }
}