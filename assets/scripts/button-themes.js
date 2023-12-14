class ButtonTheme extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        let html = "<button class='buttonTheme'>Click me !</button>";

        let style = `
        <style>
        @container style(--theme: classic) {   
            .buttonTheme {
                border: none;
                background-color: rgb(128, 160, 156);
                padding: 15px 17px;
                border-radius: 13px;
                color: black;
                text-shadow: rgba(0, 0, 0, 0.42) 0px 0px 19px;
            }
        }
        
        @container style(--theme: gradient) {
            .buttonTheme {
                border: none;
                background: linear-gradient(rgb(196, 201, 127), rgb(157, 185, 202));
                padding: 13px 27px;
                border-radius: 27px;
                color: white;
                text-shadow: rgba(0, 0, 0, 0.42) 0px 0px 18px;
            }
        }
        
        @container style(--theme: retro) {
            .buttonTheme {
                border: 1px solid black;
                background: linear-gradient(rgb(182, 201, 210), rgb(145, 167, 42));
                padding: 8px 11px;
                border-radius: 11px;
                color: black;
                text-shadow: rgba(0, 0, 0, 0.68) 0px 0px 20px;
                box-shadow: rgba(0, 0, 0, 0.38) 0px 0px 12px;
            }
        }
        
        @container style(--theme: clear) {
            .buttonTheme {
                border: 2px solid rgb(124, 94, 234);
                background: transparent;
                padding: 12px 37px;
                border-radius: 19px;
                color: rgb(124, 94, 234);
                text-shadow: rgba(0, 0, 0, 0.32) 0px 0px 20px;
            }
        }
        </style>
        `;

        this.shadowRoot.innerHTML = style + html;

    }
}

customElements.define("button-theme", ButtonTheme);
