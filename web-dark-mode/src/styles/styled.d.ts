import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,

            background: string,
            text: string,
            button: string,
            backgroundForm: string,
            borderForm: string,
            labelColor: string,
            legendColor: string,
            textareaColor: string,
            borderDashedColor: string,
            backgroundConfirmButton: string,
            buttonSelectColor: string,
            buttonSelectActiveColor: string,
            buttonSelectTextActiveColor: string,
            buttonSelectActiveBorder: string,
        },
        image: string;
    }
}