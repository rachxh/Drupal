<?php

namespace Drupal\customer_links_module\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Link;
use Drupal\Core\Url;

class CustomerLinksController extends ControllerBase {

    public function links(){
        //go to back admin page /admin/structure/blocks
        $url1=Url::fromRoute('block.admin_display');
        $link1=Link::fromTextAndUrl(t('Go to block admin page'),$url1);
        $list[]=$link1;

          //go to back admin content
        $url2=Url::fromRoute('system.admin_content');
        $link2=Link::fromTextAndUrl(t('Go to content admin page'),$url2);
        $list[]=$link2;

           //go to admin collection
        $url3=Url::fromRoute('entity.user.collection');
        $link3=Link::fromTextAndUrl(t('Go to content admin page'),$url3);
        $list[]=$link3;

           //go to front page of website
        $url4=Url::fromRoute('<front>');
        $link4=Link::fromTextAndUrl(t('Go to content front page'),$url4);
        $list[]=$link4;


           //external link to 'bc.fi"
        $url5 = Url::fromUri('https://bc.fi');
        $link_options=[
            'attributes'=>[
                'target"_blank',
                'title'=>'Links to external website',
            ],
        ];
        $url5->setOptions($link_options);
        $link5 = Link::fromTextAndUrl(t('Go to BC website'),$url5);
        $list[]=$link5;

           //mount the render output
        $output['customer_links_module']=[
            '#theme'=>'item_list',
            '#items'=>$list,
            '#title'=>$this->t('Customer links as required'),
        ];
        return $output;
        
        
        }
};