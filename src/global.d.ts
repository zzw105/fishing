declare module "@vue/runtime-core" {
  interface targetStyleProps {
    left: number;
    width: number;
  }

  interface targetLineStyleProps {
    left: number;
    width: number;
  }

  type NodeJS = NodeJS;
}

declare global {
  interface userStateProps {
    userName: string;
  }
}
export {};
