import "styled-components";
declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;

            green: string;
            red: string;

            background: string;
            text: string;
        };
    }
}
