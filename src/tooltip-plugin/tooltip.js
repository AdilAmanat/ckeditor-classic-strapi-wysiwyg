/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import TooltipEditing from "./tooltipEditing";
import TooltipUI from "./tooltipUI";

export default class ToolTip extends Plugin {
  static get requires() {
    return [TooltipEditing, TooltipUI];
  }
}
