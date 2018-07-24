import {
    selector
} from '../../common/common';

const openNxtAccordian = (e) => {
    
    e.preventDefault();
    const currentAccordian = e.target.parentElement.parentElement;
    const nxtAccordian = currentAccordian.parentElement.nextElementSibling.querySelector('div');

    currentAccordian.style['display'] = 'none';
    nxtAccordian.style['display'] = 'grid';
    selector.addressaccordianinput().forEach((input) => {
        if (input.value == '' || input.value == undefined) {
            currentAccordian.style['display'] = 'grid';
            nxtAccordian.style['display'] = 'none';
        }
    });
};

const openAccordian = (e) => {
  
    e.preventDefault();
    selector.addressaccordianinput().forEach((input) => {
        e.target.parentElement.querySelector('div').style['display'] = 'grid';
        if (input.value == '' || input.value == undefined) {
            e.target.parentElement.querySelector('div').style['display'] = 'none';
        }
    });
};

export const accordian = {
    openAccordian: openAccordian,
    openNxtAccordian: openNxtAccordian
};
