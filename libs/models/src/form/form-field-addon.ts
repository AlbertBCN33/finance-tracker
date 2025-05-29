export enum FormFieldAddonType {
  TEXT = 'TEXT',
  ICON = 'ICON',
  BUTTON = 'BUTTON',
}

interface TextAddon {
  type: FormFieldAddonType.TEXT;
  text: string;
  icon?: never;
  button?: never;
}

interface IconAddon {
  type: FormFieldAddonType.ICON;
  icon: string;
  text?: never;
  button?: never;
}

interface ButtonAddon {
  type: FormFieldAddonType.BUTTON;
  button: {
    id: string;
    icon: string;
    label: string;
    onClick: (ev: MouseEvent) => void;
  };
  text?: never;
  icon?: never;
}

export type FormFieldAddon = TextAddon | IconAddon | ButtonAddon;
