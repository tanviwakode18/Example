// smartCityContacts.js
import { LightningElement } from 'lwc';
import ProfilePic from '@salesforce/resourceUrl/smartCity';
export default class SmartCityContacts extends LightningElement {
    contacts = [
        {
            id: 1,
            logo: 'smartcitymetro.png',
            name: 'SmartCity Metro',
            phone: '407-828-6400',
            fax: '407-828-6400',
            address: '1101 N Keller Rd # B, Orlando, FL 32810',
            email: 'info@smartcitymetro.com'
        },
        {
            id: 2,
            logo: 'smartCity.png',
            name: 'SmartCity Networks',
            phone: '702-943-6000',
            fax: '702-943-6001',
            address: '5795 W. Badura Ave., Suite 110, Las Vegas, NV 89118',
            email: 'info@smartcitynetworks.com'
        },
        {
            id: 3,
            logo: 'smartcitytelecom.png',
            name: 'SmartCity Telecom',
            phone: '407-828-6700',
            fax: '407-828-6601',
            address: 'P.O. Box 22555, 3100 Bonnet Creek Road, Lake Buena Vista, FL 32830',
            email: 'info@smartcitytelecom.com'
        }
    ];
}
