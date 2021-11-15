export interface IAddChannel {
  setCreateType: (arg: string) => void;
  setIsCreating: (arg: (arg: Record<string, unknown>) => void) => void;
  setIsEditing: (arg: boolean) => void;
  setToggleContainer: (arg: (arg: Record<string, unknown>) => void) => void;
  type: string;
}

export interface ILightningBolt {
  giphyState: boolean;
  onCommandClick: () => void;
}

export interface ICloseCreateChannel {
  setIsCreating: (arg: boolean) => void;
  setIsEditing: (arg: boolean) => void;
}
