import { LightningElement,track,api } from 'lwc';

export default class SmartCityApplication extends LightningElement {
    formData = {};
    @api welcomeStep ={
        isTermsAgreed: false
    };
    termsAgreedCheckbox = false;
    handleCheckboxChange(event){
        try{
            const field = event.target.dataset.id;
            const value = event.target.checked;
            this.formData[field] = value;
            console.log('Field received in handleCheckboxChange:', JSON.stringify(field));
            console.log('Value received in handleCheckboxChange:', JSON.stringify(value));
            console.log('Value received in handleCheckboxChange:', JSON.stringify(this.formData));
            this.dispatchEvent(new CustomEvent('checkboxchange',
                {
                    detail:{
                        welcomeStep:
                        this.formData
                    }
                }
            ));
        } catch(ex) {
            console.error('Inside catch block:', JSON.stringify(ex));
        }

    }

/*    
    connectedCallback(){
        console.log('Inside connectedCallback', JSON.stringify(this.formData, null, 2));
        console.log('Inside connectedCallback', JSON.stringify(this.welcomeStep, null, 2));     

    }
*/
    /*
    @track isButtonVisible = false;
    handleNext(){
        console.log('Apply button clicked!');
        this.dispatchEvent(new CustomEvent('next',{details: {}}));
    }
*/
/*
    handleCheckboxChange(event){
        if(event.target.checked){
        console.log('I am in handleCheckboxChange');
        this.isButtonVisible = true;
        }else{
            this.isButtonVisible = false;
        }
    }
    */
}