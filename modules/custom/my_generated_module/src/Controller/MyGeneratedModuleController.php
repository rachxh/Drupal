<?php

namespace Drupal\my_generated_module\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for my_generated_module routes.
 */
class MyGeneratedModuleController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
