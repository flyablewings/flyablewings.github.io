/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-dropdown-menu.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts" />
/// <reference path="../iron-behaviors/iron-button-state.d.ts" />
/// <reference path="../iron-behaviors/iron-control-state.d.ts" />
/// <reference path="../iron-form-element-behavior/iron-form-element-behavior.d.ts" />
/// <reference path="../iron-icon/iron-icon.d.ts" />
/// <reference path="../iron-validatable-behavior/iron-validatable-behavior.d.ts" />
/// <reference path="../paper-input/paper-input.d.ts" />
/// <reference path="../paper-menu-button/paper-menu-button.d.ts" />
/// <reference path="../paper-ripple/paper-ripple.d.ts" />
/// <reference path="../paper-styles/default-theme.d.ts" />
/// <reference path="paper-dropdown-menu-icons.d.ts" />
/// <reference path="paper-dropdown-menu-shared-styles.d.ts" />

/**
 * Material design: [Dropdown menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)
 *
 * `paper-dropdown-menu` is similar to a native browser select element.
 * `paper-dropdown-menu` works with selectable content. The currently selected
 * item is displayed in the control. If no item is selected, the `label` is
 * displayed instead.
 *
 * Example:
 *
 *     <paper-dropdown-menu label="Your favourite pastry">
 *       <paper-listbox slot="dropdown-content">
 *         <paper-item>Croissant</paper-item>
 *         <paper-item>Donut</paper-item>
 *         <paper-item>Financier</paper-item>
 *         <paper-item>Madeleine</paper-item>
 *       </paper-listbox>
 *     </paper-dropdown-menu>
 *
 * This example renders a dropdown menu with 4 options.
 *
 * The child element with the slot `dropdown-content` is used as the dropdown
 * menu. This can be a [`paper-listbox`](paper-listbox), or any other or
 * element that acts like an [`iron-selector`](iron-selector).
 *
 * Specifically, the menu child must fire an
 * [`iron-select`](iron-selector#event-iron-select) event when one of its
 * children is selected, and an [`iron-deselect`](iron-selector#event-iron-deselect)
 * event when a child is deselected. The selected or deselected item must
 * be passed as the event's `detail.item` property.
 *
 * Applications can listen for the `iron-select` and `iron-deselect` events
 * to react when options are selected and deselected.
 *
 * ### Styling
 *
 * The following custom properties and mixins are also available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-dropdown-menu` | A mixin that is applied to the element host | `{}`
 * `--paper-dropdown-menu-disabled` | A mixin that is applied to the element host when disabled | `{}`
 * `--paper-dropdown-menu-ripple` | A mixin that is applied to the internal ripple | `{}`
 * `--paper-dropdown-menu-button` | A mixin that is applied to the internal menu button | `{}`
 * `--paper-dropdown-menu-input` | A mixin that is applied to the internal paper input | `{}`
 * `--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`
 *
 * You can also use any of the `paper-input-container` and `paper-menu-button`
 * style mixins and custom properties to style the internal input and menu button
 * respectively.
 */
interface PaperDropdownMenuElement extends Polymer.Element, Polymer.IronButtonState, Polymer.IronControlState, Polymer.IronFormElementBehavior, Polymer.IronValidatableBehavior {
  keyBindings: object;

  /**
   * The value for this element that will be used when submitting in
   * a form. It reflects the value of `selectedItemLabel`. If set directly,
   * it will not update the `selectedItemLabel` value.
   */
  value: string|null|undefined;

  /**
   * The derived "label" of the currently selected item. This value
   * is the `label` property on the selected item if set, or else the
   * trimmed text content of the selected item.
   */
  readonly selectedItemLabel: string|null|undefined;

  /**
   * The last selected item. An item is selected if the dropdown menu has
   * a child with slot `dropdown-content`, and that child triggers an
   * `iron-select` event with the selected `item` in the `detail`.
   */
  readonly selectedItem: object|null;

  /**
   * The label for the dropdown.
   */
  label: string|null|undefined;

  /**
   * The placeholder for the dropdown.
   */
  placeholder: string|null|undefined;

  /**
   * The error message to display when invalid.
   */
  errorMessage: string|null|undefined;

  /**
   * True if the dropdown is open. Otherwise, false.
   */
  opened: boolean|null|undefined;

  /**
   * By default, the dropdown will constrain scrolling on the page
   * to itself when opened.
   * Set to true in order to prevent scroll from being constrained
   * to the dropdown when it opens.
   */
  allowOutsideScroll: boolean|null|undefined;

  /**
   * Set to true to disable the floating label. Bind this to the
   * `<paper-input-container>`'s `noLabelFloat` property.
   */
  noLabelFloat: boolean|null|undefined;

  /**
   * Set to true to always float the label. Bind this to the
   * `<paper-input-container>`'s `alwaysFloatLabel` property.
   */
  alwaysFloatLabel: boolean|null|undefined;

  /**
   * Set to true to disable animations when opening and closing the
   * dropdown.
   */
  noAnimations: boolean|null|undefined;

  /**
   * The orientation against which to align the menu dropdown
   * horizontally relative to the dropdown trigger.
   */
  horizontalAlign: string|null|undefined;

  /**
   * The orientation against which to align the menu dropdown
   * vertically relative to the dropdown trigger.
   */
  verticalAlign: string|null|undefined;

  /**
   * Overrides the vertical offset computed in
   * _computeMenuVerticalOffset.
   */
  verticalOffset: number|null|undefined;

  /**
   * If true, the `horizontalAlign` and `verticalAlign` properties will
   * be considered preferences instead of strict requirements when
   * positioning the dropdown and may be changed if doing so reduces
   * the area of the dropdown falling outside of `fitInto`.
   */
  dynamicAlign: boolean|null|undefined;

  /**
   * Whether focus should be restored to the dropdown when the menu closes.
   */
  restoreFocusOnClose: boolean|null|undefined;
  hostAttributes: object|null;

  /**
   * The content element that is contained by the dropdown menu, if any.
   *          
   */
  readonly contentElement: any;
  attached(): void;

  /**
   * Returns false if the element is required and does not have a selection,
   * and true otherwise.
   *
   * @param _value Ignored.
   * @returns true if `required` is false, or if `required` is true
   * and the element has a valid selection.
   */
  _getValidity(_value?: any): boolean;

  /**
   * Show the dropdown content.
   */
  open(): void;

  /**
   * Hide the dropdown content.
   */
  close(): void;

  /**
   * A handler that is called when `iron-select` is fired.
   *
   * @param event An `iron-select` event.
   */
  _onIronSelect(event: CustomEvent|null): void;

  /**
   * A handler that is called when `iron-deselect` is fired.
   *
   * @param event An `iron-deselect` event.
   */
  _onIronDeselect(event: CustomEvent|null): void;

  /**
   * A handler that is called when the dropdown is tapped.
   *
   * @param event A tap event.
   */
  _onTap(event: CustomEvent|null): void;

  /**
   * Compute the label for the dropdown given a selected item.
   *
   * @param selectedItem A selected Element item, with an
   * optional `label` property.
   */
  _selectedItemChanged(selectedItem: Element|null): void;

  /**
   * Compute the vertical offset of the menu based on the value of
   * `noLabelFloat`.
   *
   * @param noLabelFloat True if the label should not float
   * @param opt_verticalOffset Optional offset from the user
   * above the input, otherwise false.
   */
  _computeMenuVerticalOffset(noLabelFloat: boolean, opt_verticalOffset?: number): any;
  _openedChanged(): void;
}

interface HTMLElementTagNameMap {
  "paper-dropdown-menu": PaperDropdownMenuElement;
}
