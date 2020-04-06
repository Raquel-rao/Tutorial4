import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    component:CustomButton,
    title:"Header",
    component:Header
};

export const MyHeader = () => <Header />

export const MyCustomButtom = () => <CustomButton />

export const PagewithCustomButtons = () => <div>
    <Header
    fontSize={15}
    color="#ABC"
    onMouseOver={MyMouseOver}
    />

    <Header
    fontSize={28}
    color="#777"
    onMouseOver={ItsMouseOver}
    />
    <Header
    fontSize={24}
    color="#ABD"
    onMouseOver={HerMouseOver}
    />

    <CustomButton
     color="#999"
     text="Cancle"
     onClick={CancelClick}
     />
    <CustomButton 
    color="#3F5"
    text="OK"
    onClick={okClick}
    />
    <CustomButton 
    color="#F3F"
    text="submit"/>
    <CustomButton 
    text="Menu"/>
</div>

function CancelClick(){
    alert("cancel");
}
function okClick(){
    alert("ok");
}
function MyMouseOver(){
   alert("Do nothing")


}
function ItsMouseOver(){
    alert("Almost finish my homework")
 
 
 }
 function HerMouseOver(){
    alert("Finish all my homework")
 
 
 }