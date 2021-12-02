/*
 * angular-todo-prototype
 *
 * unknown.component.ts
 *
 * Copyright (c) 2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { Component, Input } from '@angular/core';
import { FRCallback } from '@forgerock/javascript-sdk/lib';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
})
export class UnknownComponent {
  @Input() callback?: FRCallback;
}
