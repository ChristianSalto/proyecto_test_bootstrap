class Tabs extends HTMLElement {
    constructor(){
        super();


        this.saludo = "";
    }

    connectedCallback(){
        this.innerHTML = this.saludo;
    }
}


window.customElements.define("tabs-tabs",Tabs)