//1. Import Area

import { Component } from "react";


//2. Class Defination

export class BComp2 extends Component {
    //1. Properties/Variables
    name='ANIL';

    //2. Constructor

    //3. Methods
    //Every Class Component Must have render method
    render(){
        let n='ANIL';
        //Every function/method return something
        return <span>Hello {this.name}, How are you?</span>

    }

}



//3. Export Area
