<?php
declare(strict_types=1);

// SPDX-FileCopyrightText: 2022 Carl Schwan <carl@carlschwan.eu>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\Pride\AppInfo;

use OCP\Util;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\IConfig;

class Application extends App implements IBootstrap {
	const APP_ID = 'pride';

	public function __construct(array $urlParams = []) {
		parent::__construct(self::APP_ID, $urlParams);
	}

	public function register(IRegistrationContext $context): void {
		/**
		 * Enforce primary colour to yellow
		 * @var IConfig $config
		 */
		$config = \OC::$server->get(IConfig::class);
		$config->setAppValue('theming', 'color', '#E4D56F');
	}

	public function boot(IBootContext $context): void {
		Util::addStyle(self::APP_ID, 'style');
		Util::addScript(self::APP_ID, 'pride');
	}
}
